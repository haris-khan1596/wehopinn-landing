"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn, Section, SectionHeader } from "@/components/landing/section";

const faqs = [
  {
    question: "How much does the service cost?",
    answer:
      "Nothing for students. WeHopinn is completely free for you. Our team personally searches, visits, and recommends accommodation at no charge during our launch phase.",
  },
  {
    question: "When will I hear back?",
    answer:
      "Within 24 hours of submitting your request. In most cases, you'll receive your personalised shortlist sooner — often the same day.",
  },
  {
    question: "How do you verify accommodations?",
    answer:
      "We physically visit each place we recommend. We confirm availability, check amenities, take real photos, speak with owners, and verify that listings match reality.",
  },
  {
    question: "Do you visit accommodations?",
    answer:
      "Yes. Every recommendation in your shortlist has been personally visited by our team. We don't rely on online listings alone.",
  },
  {
    question: "Can parents submit requests?",
    answer:
      "Absolutely. Many parents search for accommodation on behalf of their children, especially for first-year or international students. Just fill in the student's details in the form.",
  },
  {
    question: "What universities do you support?",
    answer:
      "We're starting with universities in Islamabad — including NUST, COMSATS, IIU, NUML, QAU, and others. Tell us your university in the form and we'll match options near your campus.",
  },
];

export function FAQ() {
  return (
    <Section className="bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Questions? We've got answers."
        />

        <FadeIn className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </Section>
  );
}
