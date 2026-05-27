import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getWealthService } from "@/content/wealth-services";
import { pageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = pageMetadata({
  title: "Retirement",
  description: "Retirement planning and income strategies with RCCU Wealth.",
});

export default function WealthRetirementPage() {
  const service = getWealthService("retirement");
  if (!service) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
      <Breadcrumbs
        items={[
          { name: "Wealth", path: "/wealth" },
          { name: service.title, path: "/wealth/retirement" },
        ]}
      />
      <h1 className="mt-8 text-3xl font-semibold tracking-tight">{service.title}</h1>
      <p className="mt-4 text-lg text-[var(--muted-foreground)]">{service.description}</p>
      <ul className="mt-8 list-disc space-y-2 pl-5 text-[var(--muted-foreground)]">
        {service.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <Button asChild className="mt-10">
        <Link href="/wealth/appointments">Schedule consultation</Link>
      </Button>
    </div>
  );
}
