import Link from "next/link";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHeader } from "@/components/marketing/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = pageMetadata({
  title: "Appointments",
  description: "Book a meeting with an RCCU financial planner.",
});

export default function WealthAppointmentsPage() {
  return (
    <>
      <PageHeader
        title="Book a meeting"
        description="Appointment request form with email confirmation arrives in Phase 3."
      />
      <div className="mx-auto max-w-3xl px-4 py-12 md:px-6">
        <Breadcrumbs
          items={[
            { name: "Wealth", path: "/wealth" },
            { name: "Appointments", path: "/wealth/appointments" },
          ]}
        />
        <Card className="mt-10">
          <CardHeader>
            <CardTitle>Request an appointment</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-[var(--muted-foreground)]">
            <p>
              Phase 3 adds a validated form for preferred date, topic, and contact details—aligned
              with compliance copy on other RCCU forms.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/contact">Contact us</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/wealth/planning">Planning services</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
