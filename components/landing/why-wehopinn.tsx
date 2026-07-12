"use client";

import {
  Camera,
  Clock,
  MapPin,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn, Section, SectionHeader } from "@/components/landing/section";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Personally Verified",
    description:
      "We visit accommodations ourselves and confirm what's actually available — not just what's posted online.",
  },
  {
    icon: MapPin,
    title: "Near Your University",
    description:
      "Recommendations matched to your campus, commute preferences, and the areas students actually live in.",
  },
  {
    icon: Star,
    title: "Real Student Reviews",
    description:
      "Honest feedback from students who've lived there — so you know what daily life is really like.",
  },
  {
    icon: Users,
    title: "Local Experts",
    description:
      "We know Islamabad's student housing market, the safe sectors, fair prices, and which owners you can trust.",
  },
  {
    icon: Clock,
    title: "Save Hours of Searching",
    description:
      "Skip the Facebook groups, unanswered calls, and wasted visits. We handle the legwork for you.",
  },
  {
    icon: Camera,
    title: "Photos You Can Trust",
    description:
      "Real photos from our visits — rooms, common areas, mess, and surroundings. No misleading filters.",
  },
];

export function WhyWeHopinn() {
  return (
    <Section className="bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why WeHopinn"
          title="A premium service, built for students"
          description="We're not a listing site. We're the senior student who already knows the city — and does the hard work for you."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <FadeIn key={benefit.title} delay={index * 0.08}>
              <Card className="h-full border-border/80 bg-card transition-shadow hover:shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <benefit.icon
                      className="h-5 w-5 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
