import type { Metadata } from "next";
import { helpGuides, memberFaqs } from "@/content/member-help";
import { pageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHeader } from "@/components/marketing/PageHeader";
import { FaqSection } from "@/components/marketing/FaqSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = pageMetadata({
  title: "Member Help",
  description: "FAQs and troubleshooting for online banking, mobile deposit, and bill pay.",
});

export default function MemberHelpPage() {
  return (
    <>
      <PageHeader
        title="Member Help"
        description="Answers for common digital banking questions—modeled on member service workflows."
      />
      <div className="mx-auto max-w-3xl px-4 py-12 md:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Member Help", path: "/member-help" },
          ]}
        />
        <div className="mt-10">
          <FaqSection title="Frequently asked questions" faqs={memberFaqs} />
        </div>
        <section className="mt-16" aria-labelledby="guides-heading">
          <h2 id="guides-heading" className="text-2xl font-semibold tracking-tight">
            Troubleshooting guides
          </h2>
          <div className="mt-6 space-y-6">
            {helpGuides.map((g) => (
              <Card key={g.slug}>
                <CardHeader>
                  <CardTitle>{g.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[var(--muted-foreground)]">{g.summary}</p>
                  <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-[var(--muted-foreground)]">
                    {g.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
