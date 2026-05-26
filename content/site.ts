import { getSiteUrl } from "@/lib/env";

export const siteConfig = {
  institutionName:
    process.env.NEXT_PUBLIC_SITE_NAME ?? "Riverside Community Credit Union",
  ncuaDisclaimer:
    "Federally insured by NCUA. This is a portfolio demo — not a real financial institution.",
  contactEmail: "digital@example.rccu.demo",
  phone: "(555) 555-0100",
  defaultDescription:
    "Member-facing digital banking demo — multi-property credit union web hub.",
};

export function absoluteUrl(path = ""): string {
  const base = getSiteUrl();
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
