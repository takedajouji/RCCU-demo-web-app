import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { FormSuccess } from "@/components/marketing/FormSuccess";

export const metadata: Metadata = pageMetadata({
  title: "Message sent",
  description: "Your message has been received.",
});

export default function ContactSuccessPage() {
  return (
    <FormSuccess
      title="Message sent"
      message="Thanks for reaching out — a member services representative will follow up shortly."
      backHref="/"
      backLabel="Back to home"
    />
  );
}
