import Link from "next/link";
import type { PropertyConfig } from "@/content/properties";
import { Button } from "@/components/ui/button";

type PlaceholderHeroProps = {
  property: PropertyConfig;
};

export function PlaceholderHero({ property }: PlaceholderHeroProps) {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--accent-muted)]">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <p className="text-sm font-medium uppercase tracking-wide text-[var(--accent)]">
          {property.legalName}
        </p>
        <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-[var(--foreground)] md:text-5xl">
          {property.shortName}
        </h1>
        <p className="mt-4 max-w-xl text-lg text-[var(--muted-foreground)]">
          {property.tagline}
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href={property.primaryCta.href}>{property.primaryCta.label}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
