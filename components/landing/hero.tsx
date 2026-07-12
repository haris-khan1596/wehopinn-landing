"use client";

import { CheckCircle2, Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/landing/section";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/8 via-transparent to-transparent" />
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-28">
        <div className="flex flex-col gap-8">
          <FadeIn>
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
              For students in Islamabad
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
              We do the searching,{" "}
              <span className="text-primary">so you don&apos;t have to.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              Tell us what you need. Our team personally finds, visits, and
              verifies accommodation near your university — then sends you a
              shortlist within 24 hours.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a href="#inquiry-form">Find My Accommodation</a>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <ul className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
              {[
                "No endless searching",
                "Personal recommendations",
                "Verified options",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground"
                >
                  <CheckCircle2
                    className="h-4 w-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} className="relative">
          <div
            className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-3xl border border-border bg-card shadow-xl lg:max-w-none"
            role="img"
            aria-label="Illustration placeholder showing a student finding their accommodation"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/20" />
            <div className="relative flex h-full flex-col items-center justify-center gap-6 p-8">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10">
                <Home className="h-10 w-10 text-primary" aria-hidden="true" />
              </div>
              <div className="space-y-2 text-center">
                <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Your student home, found for you
                </p>
                <p className="text-2xl font-bold text-foreground">
                  Verified · Near campus · Ready to move in
                </p>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-background/80 px-5 py-3 shadow-sm backdrop-blur-sm">
                <Search className="h-5 w-5 text-primary" aria-hidden="true" />
                <span className="text-sm text-muted-foreground">
                  Our team is searching for you...
                </span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
