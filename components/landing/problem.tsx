"use client";

import {
  AlertTriangle,
  Clock,
  MessageSquareOff,
  ShieldAlert,
} from "lucide-react";
import { FadeIn, Section, SectionHeader } from "@/components/landing/section";

const problems = [
  {
    icon: Clock,
    title: "Days wasted searching",
    description:
      "You spend hours calling hostel owners, scrolling Facebook groups, and visiting places that don't match what was advertised.",
  },
  {
    icon: MessageSquareOff,
    title: "Owners who don't respond",
    description:
      "You message ten hostels. Three reply. One is already full. The listing you liked was posted six months ago.",
  },
  {
    icon: AlertTriangle,
    title: "Listings you can't trust",
    description:
      "Photos look nothing like reality. Prices change when you arrive. Amenities listed online simply aren't there.",
  },
  {
    icon: ShieldAlert,
    title: "Parents worry about safety",
    description:
      "Your family back home has no way to verify where you'll actually be living. They want reassurance you can't give them yet.",
  },
];

export function Problem() {
  return (
    <Section className="bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Sound familiar?"
          title="Finding accommodation shouldn't take over your life"
          description="Whether you're a first-year student, moving from another city, or a parent searching from afar — the process is exhausting."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {problems.map((problem, index) => (
            <FadeIn key={problem.title} delay={index * 0.1}>
              <div className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-destructive/10">
                  <problem.icon
                    className="h-5 w-5 text-destructive"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {problem.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {problem.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
