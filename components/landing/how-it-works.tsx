"use client";

import { ClipboardList, SearchCheck, Send } from "lucide-react";
import { FadeIn, Section, SectionHeader } from "@/components/landing/section";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Tell us about yourself",
    description:
      "Share your university, program, budget, and what matters to you — distance, mess, lifestyle, or feeling close to home.",
  },
  {
    icon: SearchCheck,
    step: "02",
    title: "We search and verify",
    description:
      "Our team personally searches the market, visits accommodations, confirms availability, and checks that listings are real.",
  },
  {
    icon: Send,
    step: "03",
    title: "Receive your shortlist within 24 hours",
    description:
      "We send you a curated shortlist of the best options for your needs — with real photos, honest details, and our recommendation.",
  },
];

export function HowItWorks() {
  return (
    <Section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="How it works"
          title="Three steps. Zero hassle."
          description="No browsing hundreds of listings. No cold-calling hostel owners. Just tell us what you need."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <FadeIn key={step.title} delay={index * 0.15}>
              <div className="relative flex flex-col items-center text-center">
                {index < steps.length - 1 && (
                  <div
                    className="absolute left-[calc(50%+2.5rem)] top-10 hidden h-px w-[calc(100%-5rem)] bg-border md:block"
                    aria-hidden="true"
                  />
                )}
                <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10">
                  <step.icon
                    className="h-9 w-9 text-primary"
                    aria-hidden="true"
                  />
                  <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
