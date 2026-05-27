import Link from "next/link";
import { getProperty } from "@/content/properties";
import { products } from "@/content/products";
import { formatNewsDate, newsPosts } from "@/content/news";
import { savingsRates } from "@/content/rates";
import { branches } from "@/content/locations";
import { PlaceholderHero } from "@/components/marketing/PlaceholderHero";
import { RatesTable } from "@/components/marketing/RatesTable";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const property = getProperty("main");
const latestNews = newsPosts.slice(0, 2);

export default function MainHomePage() {
  return (
    <>
      <PlaceholderHero property={property} />
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Products</h2>
            <p className="mt-2 text-[var(--muted-foreground)]">
              Checking, savings, and lending for members.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/products">All products</Link>
          </Button>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((item) => (
            <Card key={item.slug}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.summary}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href={`/products/${item.slug}`}
                  className="text-sm font-medium text-[var(--accent)] hover:underline"
                >
                  Learn more →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--muted)]">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <RatesTable title="Savings & certificate rates" rows={savingsRates} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight">Latest news</h2>
          <Link
            href="/news"
            className="text-sm font-medium text-[var(--accent)] hover:underline"
          >
            All news →
          </Link>
        </div>
        <ul className="mt-8 space-y-4">
          {latestNews.map((post) => (
            <li key={post.slug}>
              <Card>
                <CardHeader>
                  <p className="text-xs text-[var(--muted-foreground)]">
                    {formatNewsDate(post.date)}
                  </p>
                  <CardTitle>
                    <Link href={`/news/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
              </Card>
            </li>
          ))}
        </ul>
      </section>

      <section id="locations" className="border-t border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <h2 className="text-2xl font-semibold tracking-tight">Locations</h2>
          <p className="mt-2 text-[var(--muted-foreground)]">
            {branches.length} branches serving the Tennessee Valley.
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {branches.map((b) => (
              <li
                key={b.id}
                className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 text-sm"
              >
                <p className="font-medium">{b.name}</p>
                <p className="mt-1 text-[var(--muted-foreground)]">{b.city}</p>
              </li>
            ))}
          </ul>
          <Button asChild variant="outline" className="mt-6">
            <Link href="/locations">Branch details & hours</Link>
          </Button>
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--accent-muted)]">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
          <div className="flex flex-wrap gap-6">
            <Link
              href="/mortgage"
              className="text-sm font-medium text-[var(--accent)] hover:underline"
            >
              RCCU Mortgage →
            </Link>
            <Link
              href="/wealth"
              className="text-sm font-medium text-[var(--accent)] hover:underline"
            >
              RCCU Wealth →
            </Link>
            <Link
              href="/member-help"
              className="text-sm font-medium text-[var(--accent)] hover:underline"
            >
              Member Help →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
