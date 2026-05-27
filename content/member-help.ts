export type FaqItem = { question: string; answer: string };

export type HelpGuide = {
  slug: string;
  title: string;
  summary: string;
  steps: string[];
};

export const memberFaqs: FaqItem[] = [
  {
    question: "How do I reset my online banking password?",
    answer:
      "Select Forgot password on the sign-in screen and follow the verification steps. If you are locked out, call member services at (555) 555-0100 during business hours.",
  },
  {
    question: "Why is my mobile deposit pending?",
    answer:
      "Most checks credit within one business day. Larger amounts or new accounts may have extended holds per our funds availability policy.",
  },
  {
    question: "How do I report a lost or stolen debit card?",
    answer:
      "Use Card controls in online banking to freeze the card immediately, then call (555) 555-0100 to order a replacement.",
  },
  {
    question: "Can I wire money internationally?",
    answer:
      "Domestic wires are supported in-branch. International wires require additional verification—contact your branch for forms and fees.",
  },
];

export const helpGuides: HelpGuide[] = [
  {
    slug: "mobile-deposit",
    title: "Mobile check deposit troubleshooting",
    summary: "Common fixes when a deposit will not submit or takes too long.",
    steps: [
      "Update the RCCU app to the latest version.",
      "Endorse the check and photograph on a dark, flat surface with all four corners visible.",
      "Confirm daily deposit limits under Settings → Limits.",
      "If the error persists, visit a branch or ITM with the original check.",
    ],
  },
  {
    slug: "bill-pay",
    title: "Bill pay payee not appearing",
    summary: "Steps when a new payee does not show in the payment list.",
    steps: [
      "Allow up to one business day for new payee verification.",
      "Verify the payee address matches the bill exactly.",
      "Clear browser cache or try the mobile app.",
      "Contact us if the payee was added more than 24 hours ago.",
    ],
  },
];

export function getHelpGuide(slug: string): HelpGuide | undefined {
  return helpGuides.find((g) => g.slug === slug);
}
