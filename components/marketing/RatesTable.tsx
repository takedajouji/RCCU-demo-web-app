import type { RateRow } from "@/content/rates";
import { ratesDisclaimer } from "@/content/rates";

export function RatesTable({
  title,
  rows,
}: {
  title: string;
  rows: RateRow[];
}) {
  return (
    <div>
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="mt-4 overflow-x-auto rounded-xl border border-[var(--border)]">
        <table className="w-full min-w-[480px] text-left text-sm">
          <thead className="bg-[var(--muted)]">
            <tr>
              <th className="px-4 py-3 font-medium" scope="col">
                Product
              </th>
              <th className="px-4 py-3 font-medium" scope="col">
                Rate
              </th>
              <th className="px-4 py-3 font-medium" scope="col">
                APR
              </th>
              <th className="px-4 py-3 font-medium" scope="col">
                Notes
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.product} className="border-t border-[var(--border)]">
                <td className="px-4 py-3 font-medium">{row.product}</td>
                <td className="px-4 py-3">{row.rate}</td>
                <td className="px-4 py-3">{row.apr}</td>
                <td className="px-4 py-3 text-[var(--muted-foreground)]">
                  {row.notes ?? "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-[var(--muted-foreground)]">{ratesDisclaimer}</p>
    </div>
  );
}
