export type Partner = {
  id: string;
  name: string;
  description: string;
  category: "insurance" | "investments" | "rewards";
  externalUrl?: string;
};

export const partners: Partner[] = [
  {
    id: "valley-insurance",
    name: "Valley Insurance Group",
    description:
      "Optional property and auto coverage for members. RCCU does not sell insurance; partner provides separate disclosures.",
    category: "insurance",
    externalUrl: "https://example.com",
  },
  {
    id: "river-invest",
    name: "River Invest Advisors",
    description:
      "Securities offered through partner RIA. Not NCUA-insured, not a credit union deposit.",
    category: "investments",
    externalUrl: "https://example.com",
  },
  {
    id: "local-rewards",
    name: "Shop Local Rewards",
    description:
      "Debit card cashback at participating Tennessee Valley merchants.",
    category: "rewards",
  },
];

export const partnerCategoryLabels: Record<Partner["category"], string> = {
  insurance: "Insurance",
  investments: "Investments",
  rewards: "Rewards",
};
