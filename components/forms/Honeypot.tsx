import type { UseFormRegisterReturn } from "react-hook-form";

/**
 * Visually hidden, non-focusable field. Bots fill it; humans never see it.
 * Kept out of the tab order and hidden from assistive tech.
 */
export function Honeypot({ field }: { field: UseFormRegisterReturn }) {
  return (
    <div className="absolute left-[-9999px]" aria-hidden tabIndex={-1}>
      <label htmlFor="company_website">Company website</label>
      <input
        id="company_website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        {...field}
      />
    </div>
  );
}
