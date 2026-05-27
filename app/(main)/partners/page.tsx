import type { Metadata } from "next";
import { partnerCategoryLabels, partners } from "@/content/partners";
import { pageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHeader } from "@/components/marketing/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = pageMetadata({
  title: "Partners",
  description: "White-label and partner programs that extend RCCU member benefits.",
});

export default function PartnersPage() {
  return (
    <>
      <PageHeader
        title="Partners"
        description="Third-party programs maintain separate brand and compliance disclosures while staying cohesive with RCCU digital properties."
      />
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Partners", path: "/partners" },
          ]}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {partners.map((p) => (
            <Card key={p.id}>
              <CardHeader>
                <p className="text-xs font-medium uppercase tracking-wide text-[var(--accent)]">
                  {partnerCategoryLabels[p.category]}
                </p>
                <CardTitle>{p.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-[var(--muted-foreground)]">
                <p>{p.description}</p>
                {p.externalUrl ? (
                  <a
                    href={p.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-[var(--accent)] hover:underline"
                  >
                    Partner site (demo) →
                  </a>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
