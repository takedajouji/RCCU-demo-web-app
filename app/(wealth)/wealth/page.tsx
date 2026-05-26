import { getProperty } from "@/content/properties";
import { PlaceholderHero } from "@/components/marketing/PlaceholderHero";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const property = getProperty("wealth");

export default function WealthHomePage() {
  return (
    <>
      <PlaceholderHero property={property} />
      <section id="planning" className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <h2 className="text-2xl font-semibold tracking-tight">Financial planning</h2>
        <Card className="mt-8 max-w-lg">
          <CardHeader>
            <CardTitle>Planning services</CardTitle>
            <CardDescription>
              Retirement and appointment flows arrive in Phase 2–3.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-[var(--muted-foreground)]">
              One-on-one guidance for members preparing for major life milestones.
            </p>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
