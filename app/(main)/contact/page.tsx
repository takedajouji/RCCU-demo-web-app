import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHeader } from "@/components/marketing/PageHeader";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "Reach RCCU member services by form, phone, email, or branch visit.",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact us"
        description="Send a secure message or reach member services directly."
      />
      <div className="mx-auto max-w-5xl px-4 py-12 md:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]}
        />
        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_280px]">
          <div>
            <h2 className="text-xl font-semibold">Send us a message</h2>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">
              We typically respond within one business day.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
          <aside className="space-y-4 text-sm text-[var(--muted-foreground)]">
            <h2 className="text-xl font-semibold text-[var(--foreground)]">Member services</h2>
            <p>
              <span className="block font-medium text-[var(--foreground)]">Phone</span>
              <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="text-[var(--accent)]">
                {siteConfig.phone}
              </a>
            </p>
            <p>
              <span className="block font-medium text-[var(--foreground)]">Email</span>
              <a href={`mailto:${siteConfig.contactEmail}`} className="text-[var(--accent)]">
                {siteConfig.contactEmail}
              </a>
            </p>
            <p>
              <span className="block font-medium text-[var(--foreground)]">Branches</span>
              <a href="/locations" className="text-[var(--accent)] hover:underline">
                Locations and hours
              </a>
            </p>
          </aside>
        </div>
      </div>
    </>
  );
}
