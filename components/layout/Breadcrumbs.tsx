import Link from "next/link";

export type Crumb = { name: string; path: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-[var(--muted-foreground)]">
        {items.map((item, i) => (
          <li key={item.path} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden>/</span>}
            {i === items.length - 1 ? (
              <span className="text-[var(--foreground)]" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link
                href={item.path}
                className="hover:text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] rounded-sm"
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
