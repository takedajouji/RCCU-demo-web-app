import Link from "next/link";
import { getProperty } from "@/content/properties";
import { PlaceholderHero } from "@/components/marketing/PlaceholderHero";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const property = getProperty("main");

const products = [
  {
    title: "Checking",
    description: "Everyday accounts with no monthly maintenance fee on qualifying balances.",
  },
  {
    title: "Savings",
    description: "Competitive yields on share savings and money market accounts.",
  },
  {
    title: "Loans",
    description: "Auto, personal, and home equity options with local underwriting.",
  },
];

export default function MainHomePage() {
  return (
    <>
      <PlaceholderHero property={property} />
      <section id="products" className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <h2 className="text-2xl font-semibold tracking-tight">Products</h2>
        <p className="mt-2 text-[var(--muted-foreground)]">
          Full product pages arrive in Phase 2. Explore our specialized sites below.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[var(--muted-foreground)]">Details coming soon.</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/mortgage"
            className="text-sm font-medium text-[var(--accent)] underline-offset-4 hover:underline"
          >
            RCCU Mortgage →
          </Link>
          <Link
            href="/wealth"
            className="text-sm font-medium text-[var(--accent)] underline-offset-4 hover:underline"
          >
            RCCU Wealth →
          </Link>
        </div>
      </section>
      <section
        id="locations"
        className="border-t border-[var(--border)] bg-[var(--muted)]"
      >
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
          <h2 className="text-xl font-semibold">Locations</h2>
          <p className="mt-2 text-sm text-[var(--muted-foreground)]">
            Branch directory and hours — Phase 2 content.
          </p>
        </div>
      </section>
    </>
  );
}
