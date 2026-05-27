import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProduct, products } from "@/content/products";
import { pageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/button";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return pageMetadata({ title: p.title, description: p.summary });
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: p.title, path: `/products/${p.slug}` },
        ]}
      />
      <h1 className="mt-8 text-3xl font-semibold tracking-tight">{p.title}</h1>
      <p className="mt-4 text-lg text-[var(--muted-foreground)]">{p.description}</p>
      {p.rateNote ? (
        <p className="mt-4 text-sm text-[var(--accent)]">{p.rateNote}</p>
      ) : null}
      <ul className="mt-8 list-disc space-y-2 pl-5 text-[var(--muted-foreground)]">
        {p.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
      <div className="mt-10 flex flex-wrap gap-4">
        <Button asChild>
          <Link href="/contact">Contact us</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/products">All products</Link>
        </Button>
      </div>
    </div>
  );
}
