import Link from "next/link";
import { getProperty } from "@/content/properties";
import { mortgageRates } from "@/content/rates";
import { PlaceholderHero } from "@/components/marketing/PlaceholderHero";
import { RatesTable } from "@/components/marketing/RatesTable";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const property = getProperty("mortgage");

export default function MortgageHomePage() {
  return (
    <>
      <PlaceholderHero property={property} />
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <RatesTable title="Featured rates" rows={mortgageRates.slice(0, 3)} />
        <div className="mt-8 flex flex-wrap gap-4">
          <Button asChild>
            <Link href="/mortgage/rates">Full rate sheet</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/mortgage/calculator">Calculator</Link>
          </Button>
        </div>
      </section>
      <section className="border-t border-[var(--border)] bg-[var(--muted)]">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Local underwriting</CardTitle>
                <CardDescription>
                  Decisions made by officers who know the Shoals market.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-[var(--muted-foreground)]">
                Pre-qualification available online; closing timelines vary by product.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Ready to apply?</CardTitle>
                <CardDescription>Start with a loan inquiry—form in Phase 3.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild>
                  <Link href="/mortgage/apply">Start application</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
