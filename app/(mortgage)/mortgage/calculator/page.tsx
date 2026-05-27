import Link from "next/link";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHeader } from "@/components/marketing/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = pageMetadata({
  title: "Mortgage Calculator",
  description: "Estimate monthly mortgage payments with RCCU.",
});

export default function MortgageCalculatorPage() {
  return (
    <>
      <PageHeader
        title="Payment calculator"
        description="Interactive calculator ships in Phase 5 with vanilla JavaScript. Use rates to estimate today."
      />
      <div className="mx-auto max-w-3xl px-4 py-12 md:px-6">
        <Breadcrumbs
          items={[
            { name: "Mortgage", path: "/mortgage" },
            { name: "Calculator", path: "/mortgage/calculator" },
          ]}
        />
        <Card className="mt-10">
          <CardHeader>
            <CardTitle>Coming soon</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-[var(--muted-foreground)]">
            <p>
              Phase 5 adds a client-side payment estimator in{" "}
              <code className="rounded bg-[var(--muted)] px-1">public/scripts/</code> to
              demonstrate raw JavaScript alongside React.
            </p>
            <p>
              For now, review published rates and contact a mortgage officer for a personalized
              quote.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/mortgage/rates">View rates</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/mortgage/apply">Apply</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
