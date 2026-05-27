import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

export function pageMetadata({
  title,
  description,
}: {
  title: string;
  description?: string;
}): Metadata {
  const desc = description ?? siteConfig.defaultDescription;
  return {
    title,
    description: desc,
    openGraph: {
      title: `${title} | ${siteConfig.institutionName}`,
      description: desc,
    },
  };
}
