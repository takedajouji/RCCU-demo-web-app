import Link from "next/link";

export function ComplianceNote({ children }: { children?: React.ReactNode }) {
  return (
    <p className="rounded-lg bg-[var(--muted)] p-4 text-xs leading-relaxed text-[var(--muted-foreground)]">
      {children ?? (
        <>
          Do not include account numbers, Social Security numbers, or passwords in this
          form. We use the information you provide only to respond to your request. See
          our{" "}
          <Link href="/privacy" className="text-[var(--accent)] underline-offset-2 hover:underline">
            Privacy Policy
          </Link>
          .
        </>
      )}
    </p>
  );
}
