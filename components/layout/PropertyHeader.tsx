import Link from "next/link";
import { Menu } from "lucide-react";
import type { PropertyConfig } from "@/content/properties";
import { homeHref } from "@/content/properties";
import { Button } from "@/components/ui/button";

type PropertyHeaderProps = {
  property: PropertyConfig;
};

export function PropertyHeader({ property }: PropertyHeaderProps) {
  const home = homeHref(property.id);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link
          href={home}
          className="text-lg font-semibold tracking-tight text-[var(--foreground)] rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
        >
          {property.shortName}
        </Link>

        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex items-center gap-1">
            {property.nav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex h-9 items-center rounded-md px-3 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex">
            <Link href={property.primaryCta.href}>{property.primaryCta.label}</Link>
          </Button>
          <MobileNav property={property} />
        </div>
      </div>
    </header>
  );
}

function MobileNav({ property }: PropertyHeaderProps) {
  return (
    <details className="relative md:hidden group">
      <summary className="list-none cursor-pointer [&::-webkit-details-marker]:hidden">
        <span className="sr-only">Open menu</span>
        <Button variant="outline" size="icon" type="button" aria-label="Menu">
          <Menu className="h-5 w-5" />
        </Button>
      </summary>
      <div className="absolute right-0 top-12 z-50 w-56 rounded-xl border border-[var(--border)] bg-[var(--card)] p-2 shadow-lg">
        <ul className="flex flex-col gap-1">
          {property.nav.map((link) => (
            <li key={link.href}>
              <Link
                className="block rounded-lg px-3 py-2 text-sm hover:bg-[var(--muted)]"
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              className="block rounded-lg px-3 py-2 text-sm font-medium text-[var(--accent)]"
              href={property.primaryCta.href}
            >
              {property.primaryCta.label}
            </Link>
          </li>
        </ul>
      </div>
    </details>
  );
}
