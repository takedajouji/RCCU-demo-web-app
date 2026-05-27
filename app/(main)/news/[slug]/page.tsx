import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { formatNewsDate, getNewsPost, newsPosts } from "@/content/news";
import { pageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return newsPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getNewsPost(slug);
  if (!post) return {};
  return pageMetadata({ title: post.title, description: post.excerpt });
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getNewsPost(slug);
  if (!post) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "News", path: "/news" },
          { name: post.title, path: `/news/${post.slug}` },
        ]}
      />
      <p className="mt-8 text-sm text-[var(--muted-foreground)]">
        {post.category} · {formatNewsDate(post.date)}
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">{post.title}</h1>
      <p className="mt-6 leading-relaxed text-[var(--muted-foreground)]">{post.body}</p>
      <Link
        href="/news"
        className="mt-10 inline-block text-sm font-medium text-[var(--accent)] hover:underline"
      >
        ← All news
      </Link>
    </div>
  );
}
