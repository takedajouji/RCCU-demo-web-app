import type { Metadata } from "next";
import { mortgageRates } from "@/content/rates";
import { pageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHeader } from "@/components/marketing/PageHeader";
import { RatesTable } from "@/components/marketing/RatesTable";

export const metadata: Metadata = pageMetadata({
  title: "Mortgage Rates",
  description: "Today's mortgage rates from RCCU Mortgage Services.",
});

export default function MortgageRatesPage() {
  return (
    <>
      <PageHeader
        title="Mortgage rates"
        description="Local underwriting with rates updated for this portfolio demo."
      />
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <Breadcrumbs
          items={[
            { name: "Mortgage", path: "/mortgage" },
            { name: "Rates", path: "/mortgage/rates" },
          ]}
        />
        <div className="mt-10">
          <RatesTable title="Home loan rates" rows={mortgageRates} />
        </div>
      </div>
    </>
  );
}
