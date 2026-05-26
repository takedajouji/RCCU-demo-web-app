import { getProperty } from "@/content/properties";
import { PlaceholderHero } from "@/components/marketing/PlaceholderHero";
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
      <section id="rates" className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <h2 className="text-2xl font-semibold tracking-tight">Today&apos;s rates</h2>
        <Card className="mt-8 max-w-lg">
          <CardHeader>
            <CardTitle>Rates table</CardTitle>
            <CardDescription>
              Live rate content and calculator ship in Phase 2.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-[var(--muted-foreground)]">
              30-year fixed — sample 6.125% APR (demo only, not a real offer).
            </p>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
