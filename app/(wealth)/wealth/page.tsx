import Link from "next/link";
import { getProperty } from "@/content/properties";
import { wealthServices } from "@/content/wealth-services";
import { PlaceholderHero } from "@/components/marketing/PlaceholderHero";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const property = getProperty("wealth");

export default function WealthHomePage() {
  return (
    <>
      <PlaceholderHero property={property} />
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <h2 className="text-2xl font-semibold tracking-tight">Services</h2>
        <p className="mt-2 text-[var(--muted-foreground)]">
          Planning and retirement guidance for RCCU members.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {wealthServices.map((s) => (
            <Card key={s.slug}>
              <CardHeader>
                <CardTitle>{s.title}</CardTitle>
                <CardDescription>{s.summary}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href={`/wealth/${s.slug}`}
                  className="text-sm font-medium text-[var(--accent)] hover:underline"
                >
                  Learn more →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        <Button asChild className="mt-10">
          <Link href="/wealth/appointments">Book a meeting</Link>
        </Button>
      </section>
    </>
  );
}
