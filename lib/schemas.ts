import { z } from "zod";

/**
 * Honeypot field shared by all forms. Real users leave it blank; bots tend to
 * fill every field. Server actions reject submissions where this is non-empty.
 */
const honeypotSchema = z.object({
  company_website: z.string().optional(),
});

export const contactFieldsSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
  topic: z.enum(["accounts", "online-banking", "loans", "other"], {
    message: "Select a topic",
  }),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

export const contactSchema = contactFieldsSchema.merge(honeypotSchema);

export const loanInquiryFieldsSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a phone number we can reach you at"),
  loanType: z.enum(["purchase", "refinance", "home-equity", "not-sure"], {
    message: "Select a loan type",
  }),
  message: z.string().optional(),
});

export const loanInquirySchema = loanInquiryFieldsSchema.merge(honeypotSchema);

export const appointmentFieldsSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
  service: z.enum(["planning", "retirement", "other"], {
    message: "Select a service",
  }),
  preferredDate: z.string().optional(),
  message: z.string().optional(),
});

export const appointmentSchema = appointmentFieldsSchema.merge(honeypotSchema);

export type ContactFields = z.infer<typeof contactSchema>;
export type LoanInquiryFields = z.infer<typeof loanInquirySchema>;
export type AppointmentFields = z.infer<typeof appointmentSchema>;
