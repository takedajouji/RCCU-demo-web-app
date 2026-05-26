"use client";

import { useState } from "react";
import { X } from "lucide-react";

export function SiteAlert() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      role="status"
      className="border-b border-[var(--border)] bg-[var(--accent-muted)] text-sm text-[var(--foreground)]"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 md:px-6">
        <p>
          <span className="font-medium">Scheduled maintenance:</span> Saturday 2–4 AM
          CT. Online banking may be briefly unavailable.
        </p>
        <button
          type="button"
          onClick={() => setVisible(false)}
          className="shrink-0 rounded-md p-1 hover:bg-[var(--muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
          aria-label="Dismiss alert"
        >
          <X className="h-4 w-4" aria-hidden />
        </button>
      </div>
    </div>
  );
}
