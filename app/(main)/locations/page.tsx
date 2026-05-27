import type { Metadata } from "next";
import { branches } from "@/content/locations";
import { pageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHeader } from "@/components/marketing/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = pageMetadata({
  title: "Locations",
  description: "RCCU branch locations, hours, and services in the Tennessee Valley.",
});

export default function LocationsPage() {
  return (
    <>
      <PageHeader
        title="Locations"
        description="Visit a branch, use our ITMs, or call member services during posted hours."
      />
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Locations", path: "/locations" },
          ]}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {branches.map((b) => (
            <Card key={b.id}>
              <CardHeader>
                <CardTitle>{b.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-[var(--muted-foreground)]">
                <p>
                  {b.address}
                  <br />
                  {b.city}
                </p>
                <p>
                  <a
                    href={`tel:${b.phone.replace(/\D/g, "")}`}
                    className="font-medium text-[var(--accent)] hover:underline"
                  >
                    {b.phone}
                  </a>
                </p>
                <div>
                  <p className="font-medium text-[var(--foreground)]">Hours</p>
                  <ul className="mt-1 space-y-1">
                    {b.hours.map((h) => (
                      <li key={h.label}>
                        <span className="text-[var(--foreground)]">{h.label}:</span>{" "}
                        {h.value}
                      </li>
                    ))}
                  </ul>
                </div>
                <p>
                  <span className="font-medium text-[var(--foreground)]">Services:</span>{" "}
                  {b.services.join(" · ")}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
