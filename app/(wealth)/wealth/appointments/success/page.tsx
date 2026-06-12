import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { FormSuccess } from "@/components/marketing/FormSuccess";

export const metadata: Metadata = pageMetadata({
  title: "Request received",
  description: "Your appointment request has been received.",
});

export default function WealthAppointmentSuccessPage() {
  return (
    <FormSuccess
      title="Request received"
      message="Thanks — a financial planner will email you to confirm a time that works."
      backHref="/wealth"
      backLabel="Back to RCCU Wealth"
    />
  );
}
