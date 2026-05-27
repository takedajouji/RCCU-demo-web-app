import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from "@/content/member-help";

export function FaqSection({
  id = "faq",
  title,
  faqs,
}: {
  id?: string;
  title: string;
  faqs: FaqItem[];
}) {
  return (
    <section aria-labelledby={`${id}-heading`}>
      <h2 id={`${id}-heading`} className="text-2xl font-semibold tracking-tight">
        {title}
      </h2>
      <Accordion type="single" collapsible className="mt-6 w-full">
        {faqs.map((f, i) => (
          <AccordionItem key={f.question} value={`item-${i}`}>
            <AccordionTrigger>{f.question}</AccordionTrigger>
            <AccordionContent>{f.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
