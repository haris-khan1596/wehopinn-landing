"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { submitInquiry } from "@/app/actions/submit-inquiry";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn, Section, SectionHeader } from "@/components/landing/section";
import {
  inquirySchema,
  type InquiryFormData,
} from "@/lib/validations/inquiry";

export function InquiryForm() {
  const [isPending, startTransition] = useTransition();
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      full_name: "",
      phone: "",
      email: "",
      university: "",
      campus: "",
      program: "",
      home_city: "",
    },
  });

  const onSubmit = (data: InquiryFormData) => {
    setServerError(null);
    startTransition(async () => {
      const result = await submitInquiry(data);

      if (result.success) {
        setIsSuccess(true);
        reset();
        return;
      }

      if (result.fieldErrors) {
        for (const [field, message] of Object.entries(result.fieldErrors)) {
          setError(field as keyof InquiryFormData, { message });
        }
      }

      setServerError(result.error);
    });
  };

  if (isSuccess) {
    return (
      <Section id="inquiry-form" className="py-20 sm:py-28">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Card className="border-primary/20 bg-card text-center shadow-lg">
              <CardContent className="flex flex-col items-center gap-4 p-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2
                    className="h-8 w-8 text-primary"
                    aria-hidden="true"
                  />
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  Thank you!
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  We&apos;ve received your request. Our team will personally
                  search and send you a shortlist of suitable accommodation
                  within 24 hours.
                </p>
                <Button
                  variant="outline"
                  className="mt-2"
                  onClick={() => setIsSuccess(false)}
                >
                  Submit another request
                </Button>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </Section>
    );
  }

  return (
    <Section id="inquiry-form" className="py-20 sm:py-28">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Get started"
          title="Tell us what you need"
          description="Fill in your details and we'll personally find accommodation that fits — no browsing, no guesswork."
        />

        <FadeIn className="mt-10">
          <Card className="shadow-lg">
            <CardContent className="p-6 sm:p-8">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
                noValidate
              >
                <div className="space-y-2">
                  <Label htmlFor="full_name">Full Name</Label>
                  <Input
                    id="full_name"
                    placeholder="Your full name"
                    autoComplete="name"
                    aria-invalid={!!errors.full_name}
                    aria-describedby={
                      errors.full_name ? "full_name-error" : undefined
                    }
                    {...register("full_name")}
                  />
                  {errors.full_name && (
                    <p
                      id="full_name-error"
                      className="text-sm text-destructive"
                      role="alert"
                    >
                      {errors.full_name.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="03XX XXXXXXX"
                    autoComplete="tel"
                    aria-invalid={!!errors.phone}
                    aria-describedby={
                      errors.phone ? "phone-error" : undefined
                    }
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <p
                      id="phone-error"
                      className="text-sm text-destructive"
                      role="alert"
                    >
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@email.com"
                    autoComplete="email"
                    aria-invalid={!!errors.email}
                    aria-describedby={
                      errors.email ? "email-error" : undefined
                    }
                    {...register("email")}
                  />
                  {errors.email && (
                    <p
                      id="email-error"
                      className="text-sm text-destructive"
                      role="alert"
                    >
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="university">University</Label>
                  <Input
                    id="university"
                    placeholder="e.g. NUST, COMSATS, IIU"
                    aria-invalid={!!errors.university}
                    aria-describedby={
                      errors.university ? "university-error" : undefined
                    }
                    {...register("university")}
                  />
                  {errors.university && (
                    <p
                      id="university-error"
                      className="text-sm text-destructive"
                      role="alert"
                    >
                      {errors.university.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="campus">Campus</Label>
                  <Input
                    id="campus"
                    placeholder="e.g. H-12, Chak Shahzad"
                    aria-invalid={!!errors.campus}
                    aria-describedby={
                      errors.campus ? "campus-error" : undefined
                    }
                    {...register("campus")}
                  />
                  {errors.campus && (
                    <p
                      id="campus-error"
                      className="text-sm text-destructive"
                      role="alert"
                    >
                      {errors.campus.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="program">Program</Label>
                  <Input
                    id="program"
                    placeholder="e.g. Computer Science, BBA"
                    aria-invalid={!!errors.program}
                    aria-describedby={
                      errors.program ? "program-error" : undefined
                    }
                    {...register("program")}
                  />
                  {errors.program && (
                    <p
                      id="program-error"
                      className="text-sm text-destructive"
                      role="alert"
                    >
                      {errors.program.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="home_city">Home City</Label>
                  <Input
                    id="home_city"
                    placeholder="e.g. Lahore, Karachi, Peshawar"
                    aria-invalid={!!errors.home_city}
                    aria-describedby={
                      errors.home_city ? "home_city-error" : undefined
                    }
                    {...register("home_city")}
                  />
                  {errors.home_city && (
                    <p
                      id="home_city-error"
                      className="text-sm text-destructive"
                      role="alert"
                    >
                      {errors.home_city.message}
                    </p>
                  )}
                </div>

                {serverError && (
                  <p className="rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive" role="alert">
                    {serverError}
                  </p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isPending}
                >
                  {isPending ? (
                    <>
                      <Loader2 className="animate-spin" aria-hidden="true" />
                      Submitting...
                    </>
                  ) : (
                    "Find My Accommodation"
                  )}
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  Free for students. We&apos;ll respond within 24 hours.
                </p>
              </form>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </Section>
  );
}
