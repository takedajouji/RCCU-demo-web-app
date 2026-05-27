import Link from "next/link";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHeader } from "@/components/marketing/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = pageMetadata({
  title: "Apply for a Mortgage",
  description: "Start your RCCU mortgage application.",
});

export default function MortgageApplyPage() {
  return (
    <>
      <PageHeader
        title="Apply"
        description="Loan inquiry form with validation and email notifications arrives in Phase 3."
      />
      <div className="mx-auto max-w-3xl px-4 py-12 md:px-6">
        <Breadcrumbs
          items={[
            { name: "Mortgage", path: "/mortgage" },
            { name: "Apply", path: "/mortgage/apply" },
          ]}
        />
        <Card className="mt-10">
          <CardHeader>
            <CardTitle>Loan inquiry form</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-[var(--muted-foreground)]">
            <p>
              The production-style form will collect name, contact info, and loan type—never
              SSN or account numbers on this demo.
            </p>
            <Button asChild>
              <Link href="/contact">Contact member services</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
