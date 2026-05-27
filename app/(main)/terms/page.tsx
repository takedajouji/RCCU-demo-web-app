import { readFile } from "fs/promises";
import path from "path";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { LegalMarkdown } from "@/components/marketing/LegalMarkdown";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Use",
  description: "Terms governing use of RCCU demonstration web properties.",
});

export default async function TermsPage() {
  const content = await readFile(
    path.join(process.cwd(), "content/legal/terms.md"),
    "utf8",
  );

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Terms", path: "/terms" },
        ]}
      />
      <div className="mt-8">
        <LegalMarkdown content={content} />
      </div>
    </div>
  );
}
