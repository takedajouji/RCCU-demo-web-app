import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHeader } from "@/components/marketing/PageHeader";
import { AppointmentForm } from "@/components/forms/AppointmentForm";

export const metadata: Metadata = pageMetadata({
  title: "Appointments",
  description: "Book a meeting with an RCCU financial planner.",
});

export default function WealthAppointmentsPage() {
  return (
    <>
      <PageHeader
        title="Book a meeting"
        description="Request time with a financial planner. We'll confirm by email."
      />
      <div className="mx-auto max-w-2xl px-4 py-12 md:px-6">
        <Breadcrumbs
          items={[
            { name: "Wealth", path: "/wealth" },
            { name: "Appointments", path: "/wealth/appointments" },
          ]}
        />
        <div className="mt-10">
          <AppointmentForm />
        </div>
      </div>
    </>
  );
}
