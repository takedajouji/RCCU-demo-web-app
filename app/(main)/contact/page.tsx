import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHeader } from "@/components/marketing/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "Reach RCCU member services by phone, email, or branch visit.",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact us"
        description="Member services and general inquiries. Secure contact form arrives in Phase 3."
      />
      <div className="mx-auto max-w-3xl px-4 py-12 md:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]}
        />
        <Card className="mt-10">
          <CardHeader>
            <CardTitle>Member services</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-[var(--muted-foreground)]">
            <p>
              <span className="font-medium text-[var(--foreground)]">Phone:</span>{" "}
              <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="text-[var(--accent)]">
                {siteConfig.phone}
              </a>
            </p>
            <p>
              <span className="font-medium text-[var(--foreground)]">Email:</span>{" "}
              <a href={`mailto:${siteConfig.contactEmail}`} className="text-[var(--accent)]">
                {siteConfig.contactEmail}
              </a>
            </p>
            <p>
              <span className="font-medium text-[var(--foreground)]">Branches:</span>{" "}
              <a href="/locations" className="text-[var(--accent)] hover:underline">
                View locations and hours
              </a>
            </p>
            <p className="rounded-lg bg-[var(--muted)] p-4 text-sm">
              A validated contact form with compliance copy will be added in Phase 3.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
