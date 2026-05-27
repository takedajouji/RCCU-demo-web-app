export type WealthService = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  bullets: string[];
};

export const wealthServices: WealthService[] = [
  {
    slug: "planning",
    title: "Financial planning",
    summary: "Holistic plans aligned to your goals, cash flow, and risk tolerance.",
    description:
      "Certified planners help members prioritize debt payoff, emergency funds, and long-term investing—without product pressure.",
    bullets: [
      "Initial discovery meeting at no cost for members",
      "Written plan with actionable milestones",
      "Annual review included for portfolio clients",
    ],
  },
  {
    slug: "retirement",
    title: "Retirement strategies",
    summary: "401(k) rollovers, IRA guidance, and income planning for retirement.",
    description:
      "Whether you are ten years from retirement or already drawing income, we model scenarios for Social Security timing and withdrawal rates.",
    bullets: [
      "Rollover analysis for former employer plans",
      "Roth conversion modeling (tax advice from your CPA)",
      "Required minimum distribution reminders",
    ],
  },
];

export function getWealthService(slug: string): WealthService | undefined {
  return wealthServices.find((s) => s.slug === slug);
}
