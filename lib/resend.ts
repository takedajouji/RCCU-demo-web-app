import "server-only";

import { Resend } from "resend";
import { env } from "@/lib/env";

let resendSingleton: Resend | null = null;

export function getResend(): Resend | null {
  if (!env.RESEND_API_KEY) return null;
  if (!resendSingleton) resendSingleton = new Resend(env.RESEND_API_KEY);
  return resendSingleton;
}

export function getFromEmail(): string {
  return env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";
}

export function getNotificationEmail(): string | null {
  return env.NOTIFICATION_TO_EMAIL ?? null;
}
