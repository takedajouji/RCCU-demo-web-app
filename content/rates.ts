export type RateRow = {
  product: string;
  rate: string;
  apr: string;
  notes?: string;
};

export const mortgageRates: RateRow[] = [
  { product: "30-year fixed", rate: "6.000%", apr: "6.125%", notes: "0 points" },
  { product: "15-year fixed", rate: "5.375%", apr: "5.490%", notes: "0 points" },
  { product: "5/1 ARM", rate: "5.250%", apr: "5.680%", notes: "Caps 2/2/5" },
  { product: "FHA 30-year", rate: "5.750%", apr: "6.410%", notes: "Demo only" },
];

export const savingsRates: RateRow[] = [
  { product: "Share savings", rate: "0.50%", apr: "0.50%" },
  { product: "Money market ($10k+)", rate: "4.25%", apr: "4.25%" },
  { product: "12-month certificate", rate: "4.75%", apr: "4.75%" },
  { product: "24-month certificate", rate: "4.50%", apr: "4.50%" },
];

export const ratesDisclaimer =
  "Rates shown are for portfolio demonstration only and are not an offer of credit. APR assumes creditworthiness and may change without notice.";
