import Link from "next/link";
import type { Metadata } from "next";
import { formatNewsDate, newsPosts } from "@/content/news";
import { pageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHeader } from "@/components/marketing/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = pageMetadata({
  title: "News",
  description: "Announcements, community updates, and security notices from RCCU.",
});

export default function NewsPage() {
  return (
    <>
      <PageHeader
        title="News & announcements"
        description="Stay informed about digital tools, branch updates, and member security."
      />
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "News", path: "/news" },
          ]}
        />
        <ul className="mt-10 space-y-6">
          {newsPosts.map((post) => (
            <li key={post.slug}>
              <Card>
                <CardHeader>
                  <p className="text-xs font-medium uppercase tracking-wide text-[var(--accent)]">
                    {post.category} · {formatNewsDate(post.date)}
                  </p>
                  <CardTitle>
                    <Link
                      href={`/news/${post.slug}`}
                      className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] rounded-sm"
                    >
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href={`/news/${post.slug}`}
                    className="text-sm font-medium text-[var(--accent)] hover:underline"
                  >
                    Read more →
                  </Link>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
