"use server";

import {
  appointmentSchema,
  contactSchema,
  loanInquirySchema,
} from "@/lib/schemas";
import { getFromEmail, getNotificationEmail, getResend } from "@/lib/resend";
import { siteConfig } from "@/content/site";

export type ActionResult =
  | { success: true }
  | { success: false; error: string };

const EMAIL_NOT_CONFIGURED =
  "This demo isn't connected to an email provider yet. Set RESEND_API_KEY and NOTIFICATION_TO_EMAIL to enable delivery.";

function formatPayload(title: string, body: Record<string, unknown>): string {
  const lines = Object.entries(body)
    .filter(([key]) => key !== "company_website")
    .map(([key, value]) => `${key}: ${value ? String(value) : "—"}`);
  return `${title}\n\n${lines.join("\n")}`;
}

async function sendNotification({
  subject,
  title,
  data,
  replyTo,
}: {
  subject: string;
  title: string;
  data: Record<string, unknown>;
  replyTo: string;
}): Promise<ActionResult> {
  const resend = getResend();
  const to = getNotificationEmail();
  if (!resend || !to) {
    console.warn("Resend or NOTIFICATION_TO_EMAIL not configured");
    return { success: false, error: EMAIL_NOT_CONFIGURED };
  }

  const { error } = await resend.emails.send({
    from: getFromEmail(),
    to,
    replyTo,
    subject: `[${siteConfig.institutionName}] ${subject}`,
    text: formatPayload(title, data),
  });

  if (error) {
    console.error("Resend error:", error);
    return { success: false, error: "Could not send your message. Please try again shortly." };
  }
  return { success: true };
}

export async function submitContact(
  _prev: ActionResult | undefined,
  formData: FormData,
): Promise<ActionResult> {
  const raw = Object.fromEntries(formData.entries());
  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    return { success: false, error: parsed.error.issues[0]?.message ?? "Invalid submission" };
  }
  const { company_website, ...data } = parsed.data;
  if (company_website) return { success: true };

  return sendNotification({
    subject: `Contact: ${data.topic}`,
    title: "New contact request",
    data,
    replyTo: data.email,
  });
}

export async function submitLoanInquiry(
  _prev: ActionResult | undefined,
  formData: FormData,
): Promise<ActionResult> {
  const raw = Object.fromEntries(formData.entries());
  const parsed = loanInquirySchema.safeParse(raw);
  if (!parsed.success) {
    return { success: false, error: parsed.error.issues[0]?.message ?? "Invalid submission" };
  }
  const { company_website, ...data } = parsed.data;
  if (company_website) return { success: true };

  return sendNotification({
    subject: `Loan inquiry: ${data.loanType}`,
    title: "New mortgage loan inquiry",
    data,
    replyTo: data.email,
  });
}

export async function submitAppointment(
  _prev: ActionResult | undefined,
  formData: FormData,
): Promise<ActionResult> {
  const raw = Object.fromEntries(formData.entries());
  const parsed = appointmentSchema.safeParse(raw);
  if (!parsed.success) {
    return { success: false, error: parsed.error.issues[0]?.message ?? "Invalid submission" };
  }
  const { company_website, ...data } = parsed.data;
  if (company_website) return { success: true };

  return sendNotification({
    subject: `Appointment request: ${data.service}`,
    title: "New wealth appointment request",
    data,
    replyTo: data.email,
  });
}
