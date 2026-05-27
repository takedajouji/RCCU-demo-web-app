export type NewsPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string;
  category: "announcement" | "community" | "security";
};

export const newsPosts: NewsPost[] = [
  {
    slug: "mobile-app-update",
    title: "Mobile app update improves bill pay and card controls",
    date: "2026-05-01",
    excerpt:
      "Version 4.2 adds scheduled payments, travel notices, and clearer transaction search.",
    category: "announcement",
    body:
      "Members can now schedule recurring transfers, set travel alerts on debit cards, and filter transactions by merchant category. Update through the App Store or Google Play.",
  },
  {
    slug: "shoals-branch-hours",
    title: "Shoals branch extends Saturday hours through summer",
    date: "2026-04-18",
    excerpt: "Drive-through and lobby service 9 AM–1 PM Saturdays, June through August.",
    category: "community",
    body:
      "The Florence Shoals location will offer limited Saturday service to support members who cannot visit during the work week. ATM and ITM remain 24/7.",
  },
  {
    slug: "phishing-awareness",
    title: "Reminder: RCCU will never ask for your password by email",
    date: "2026-04-02",
    excerpt: "Protect your accounts by verifying sender addresses and using MFA.",
    category: "security",
    body:
      "Fraudsters may impersonate financial institutions. Always sign in through rccu.demo or our official app. Report suspicious messages to digital@example.rccu.demo.",
  },
];

export function getNewsPost(slug: string): NewsPost | undefined {
  return newsPosts.find((p) => p.slug === slug);
}

export function formatNewsDate(iso: string): string {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
