import Link from "next/link";
import type { Metadata } from "next";
import { products } from "@/content/products";
import { pageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHeader } from "@/components/marketing/PageHeader";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = pageMetadata({
  title: "Products",
  description: "Checking, savings, and loan options for RCCU members.",
});

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        title="Products"
        description="Accounts and lending designed for everyday members in the Tennessee Valley."
      />
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
          ]}
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Card key={p.slug}>
              <CardHeader>
                <CardTitle>{p.title}</CardTitle>
                <CardDescription>{p.summary}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/products/${p.slug}`}>View details</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
