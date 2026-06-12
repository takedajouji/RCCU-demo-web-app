import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { FormSuccess } from "@/components/marketing/FormSuccess";

export const metadata: Metadata = pageMetadata({
  title: "Inquiry received",
  description: "Your mortgage inquiry has been received.",
});

export default function MortgageApplySuccessPage() {
  return (
    <FormSuccess
      title="Inquiry received"
      message="Thanks — a mortgage loan officer will contact you to discuss next steps and continue securely."
      backHref="/mortgage"
      backLabel="Back to RCCU Mortgage"
    />
  );
}
