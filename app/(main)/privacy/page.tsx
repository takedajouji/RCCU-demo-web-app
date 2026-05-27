import { readFile } from "fs/promises";
import path from "path";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { LegalMarkdown } from "@/components/marketing/LegalMarkdown";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How RCCU handles member information on digital properties.",
});

export default async function PrivacyPage() {
  const content = await readFile(
    path.join(process.cwd(), "content/legal/privacy.md"),
    "utf8",
  );

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Privacy", path: "/privacy" },
        ]}
      />
      <div className="mt-8">
        <LegalMarkdown content={content} />
      </div>
    </div>
  );
}
