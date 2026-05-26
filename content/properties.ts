export type PropertyId = "main" | "mortgage" | "wealth";

export type NavLink = { href: string; label: string };

export type PropertyConfig = {
  id: PropertyId;
  pathPrefix: "" | "/mortgage" | "/wealth";
  shortName: string;
  legalName: string;
  tagline: string;
  nav: NavLink[];
  primaryCta: NavLink;
};

export const properties: Record<PropertyId, PropertyConfig> = {
  main: {
    id: "main",
    pathPrefix: "",
    shortName: "RCCU",
    legalName: "Riverside Community Credit Union",
    tagline: "Member-owned banking for the Tennessee Valley",
    nav: [
      { href: "/#products", label: "Products" },
      { href: "/#locations", label: "Locations" },
      { href: "/member-help", label: "Member Help" },
      { href: "/mortgage", label: "Mortgage" },
      { href: "/wealth", label: "Wealth" },
    ],
    primaryCta: { href: "/contact", label: "Contact us" },
  },
  mortgage: {
    id: "mortgage",
    pathPrefix: "/mortgage",
    shortName: "RCCU Mortgage",
    legalName: "Riverside Community Credit Union — Mortgage Services",
    tagline: "Competitive rates and local decision-making for your home",
    nav: [
      { href: "/mortgage#rates", label: "Rates" },
      { href: "/mortgage/calculator", label: "Calculator" },
      { href: "/mortgage/apply", label: "Apply" },
      { href: "/", label: "Main site" },
    ],
    primaryCta: { href: "/mortgage/apply", label: "Start application" },
  },
  wealth: {
    id: "wealth",
    pathPrefix: "/wealth",
    shortName: "RCCU Wealth",
    legalName: "Riverside Community Credit Union — Financial Planning",
    tagline: "Planning, retirement, and guidance from people who know your goals",
    nav: [
      { href: "/wealth#planning", label: "Planning" },
      { href: "/wealth#retirement", label: "Retirement" },
      { href: "/wealth/appointments", label: "Appointments" },
      { href: "/", label: "Main site" },
    ],
    primaryCta: { href: "/wealth/appointments", label: "Book a meeting" },
  },
};

export const propertyList: PropertyId[] = ["main", "mortgage", "wealth"];

export function getProperty(id: PropertyId): PropertyConfig {
  return properties[id];
}

export function homeHref(id: PropertyId): string {
  const p = properties[id];
  return p.pathPrefix || "/";
}
