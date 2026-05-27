export type ProductSlug = "checking" | "savings" | "loans";

export type Product = {
  slug: ProductSlug;
  title: string;
  summary: string;
  description: string;
  highlights: string[];
  rateNote?: string;
};

export const products: Product[] = [
  {
    slug: "checking",
    title: "Free Checking",
    summary: "Everyday banking with no monthly maintenance fee on qualifying balances.",
    description:
      "RCCU Free Checking is built for members who want straightforward access to their money—mobile deposit, bill pay, and nationwide surcharge-free ATM access through our network.",
    highlights: [
      "No monthly fee with e-statements and direct deposit",
      "Mobile check deposit and person-to-person transfers",
      "Debit card controls in online banking",
    ],
    rateNote: "APY varies; see rate disclosures.",
  },
  {
    slug: "savings",
    title: "Share Savings",
    summary: "Competitive yields on share savings and money market accounts.",
    description:
      "Start with a share savings account and grow into tiered money market options as your balance increases. All accounts are NCUA-insured up to applicable limits.",
    highlights: [
      "Low $5 minimum opening deposit",
      "Tiered money market rates for higher balances",
      "Automatic transfers from checking",
    ],
    rateNote: "As of demo date: 4.25% APY on balances $10k+ (illustrative).",
  },
  {
    slug: "loans",
    title: "Consumer Loans",
    summary: "Auto, personal, and home equity lending with local underwriting.",
    description:
      "Work with loan officers who know the Tennessee Valley market. Pre-qualification is available online; final approval subject to credit and collateral review.",
    highlights: [
      "Auto loans with rates from 5.49% APR (demo)",
      "Personal lines for consolidation",
      "Home equity with flexible draw periods",
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
