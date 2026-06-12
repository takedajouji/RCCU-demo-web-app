import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHeader } from "@/components/marketing/PageHeader";
import { LoanInquiryForm } from "@/components/forms/LoanInquiryForm";

export const metadata: Metadata = pageMetadata({
  title: "Apply for a Mortgage",
  description: "Start your RCCU mortgage inquiry — no SSN required.",
});

export default function MortgageApplyPage() {
  return (
    <>
      <PageHeader
        title="Mortgage loan inquiry"
        description="Tell us about your goals and a loan officer will reach out to continue securely."
      />
      <div className="mx-auto max-w-2xl px-4 py-12 md:px-6">
        <Breadcrumbs
          items={[
            { name: "Mortgage", path: "/mortgage" },
            { name: "Apply", path: "/mortgage/apply" },
          ]}
        />
        <div className="mt-10">
          <LoanInquiryForm />
        </div>
      </div>
    </>
  );
}
