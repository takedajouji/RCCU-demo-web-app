import Link from "next/link";
import {
  homeHref,
  propertyList,
  type PropertyConfig,
  type PropertyId,
} from "@/content/properties";
import { siteConfig } from "@/content/site";

type PropertyFooterProps = {
  property: PropertyConfig;
};

const switcherLabels: Record<PropertyId, string> = {
  main: "Main site",
  mortgage: "Mortgage",
  wealth: "Wealth",
};

export function PropertyFooter({ property }: PropertyFooterProps) {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--muted)]">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <PropertySwitcher currentId={property.id} />

        <p className="mt-6 text-xs text-[var(--muted-foreground)]">
          {siteConfig.ncuaDisclaimer}
        </p>

        <div className="mt-4 flex flex-wrap gap-4 text-sm text-[var(--muted-foreground)]">
          <Link
            href="/privacy"
            className="hover:text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] rounded-sm"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="hover:text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] rounded-sm"
          >
            Terms
          </Link>
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="hover:text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] rounded-sm"
          >
            {siteConfig.contactEmail}
          </a>
          <span>{siteConfig.phone}</span>
        </div>

        <p className="mt-6 text-xs text-[var(--muted-foreground)]">
          © {new Date().getFullYear()} {property.legalName}. Portfolio demo.
        </p>
      </div>
    </footer>
  );
}

function PropertySwitcher({ currentId }: { currentId: PropertyId }) {
  return (
    <nav aria-label="Property sites">
      <p className="text-sm font-medium text-[var(--foreground)]">
        You are on: {switcherLabels[currentId]}
      </p>
      <ul className="mt-2 flex flex-wrap gap-3 text-sm">
        {propertyList
          .filter((id) => id !== currentId)
          .map((id) => (
              <li key={id}>
                <Link
                  href={homeHref(id)}
                  className="text-[var(--accent)] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] rounded-sm"
                >
                  View {switcherLabels[id]}
                </Link>
              </li>
            ))}
      </ul>
    </nav>
  );
}
