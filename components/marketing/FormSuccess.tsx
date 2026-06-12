import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type FormSuccessProps = {
  title: string;
  message: string;
  backHref: string;
  backLabel: string;
};

export function FormSuccess({ title, message, backHref, backLabel }: FormSuccessProps) {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center md:px-6">
      <CheckCircle2 className="mx-auto h-12 w-12 text-[var(--accent)]" aria-hidden />
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">{title}</h1>
      <p className="mt-4 text-[var(--muted-foreground)]">{message}</p>
      <Button asChild className="mt-10">
        <Link href={backHref}>{backLabel}</Link>
      </Button>
    </div>
  );
}
