"use client";

import { ImageIcon, Quote, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn, Section, SectionHeader } from "@/components/landing/section";

const placeholders = [
  {
    icon: Quote,
    label: "Student testimonial",
    text: '"Testimonial from a student will appear here once we launch."',
    subtext: "— Student name, University",
  },
  {
    icon: Quote,
    label: "Parent testimonial",
    text: '"Parent feedback will appear here once we launch."',
    subtext: "— Parent name, Home city",
  },
  {
    icon: ImageIcon,
    label: "Hostel photo",
    text: "Verified hostel photo placeholder",
    subtext: "Real photos from our visits",
  },
  {
    icon: Users,
    label: "Impact numbers",
    text: "—",
    subtext: "Students helped (coming soon)",
  },
];

export function SocialProof() {
  return (
    <Section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Social proof"
          title="Trusted by students like you"
          description="We're just getting started in Islamabad. Real stories and numbers will appear here as we help more students find their place."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {placeholders.map((item, index) => (
            <FadeIn key={item.label} delay={index * 0.1}>
              <Card className="h-full border-dashed border-border bg-muted/30">
                <CardContent className="flex h-full flex-col items-center justify-center p-8 text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                    <item.icon
                      className="h-6 w-6 text-muted-foreground"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-3 text-base italic text-foreground/70">
                    {item.text}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.subtext}
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
