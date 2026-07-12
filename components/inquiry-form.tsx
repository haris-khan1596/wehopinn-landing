"use client";

import { AlertCircle, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { useId, useState } from "react";
import { validateInquiry, type FieldErrors, type InquiryInput } from "@/lib/inquiries";

const UNIVERSITIES = [
  "NUST",
  "COMSATS University",
  "FAST-NU",
  "Air University",
  "QAU",
  "IIUI",
  "Bahria University",
  "SZABIST",
  "Other",
];

type FormState = InquiryInput & { otherUniversity: string };

const EMPTY_FORM: FormState = {
  fullName: "",
  phone: "",
  email: "",
  university: "",
  otherUniversity: "",
  campus: "",
  program: "",
  homeCity: "",
};

type Props = { variant?: "light" | "dark" };

export function InquiryForm({ variant = "light" }: Props) {
  const dark = variant === "dark";
  const idPrefix = useId();

  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState("");

  function field<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key as keyof InquiryInput]) {
      setErrors((e) => ({ ...e, [key]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "submitting") return;

    const resolvedUniversity = form.university === "Other" ? form.otherUniversity : form.university;
    const input: InquiryInput = {
      fullName: form.fullName,
      phone: form.phone,
      email: form.email,
      university: resolvedUniversity,
      campus: form.campus,
      program: form.program,
      homeCity: form.homeCity,
    };

    const fieldErrors = validateInquiry(input);
    if (form.university === "Other" && !form.otherUniversity.trim()) {
      fieldErrors.university = "Enter your university.";
    }
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setStatus("submitting");
    setSubmitError("");

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Something went wrong. Please try again.");
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className={
          "flex items-start gap-3 rounded-2xl p-5 " +
          (dark ? "bg-[#FFFCEF]/10" : "border border-border-tan bg-white")
        }
      >
        <CheckCircle2
          className={"mt-0.5 size-5 shrink-0 " + (dark ? "text-accent" : "text-success")}
          strokeWidth={2}
        />
        <div>
          <p className={"font-semibold " + (dark ? "text-[#FFFCEF]" : "text-brand")}>
            Thank you!
          </p>
          <p className={"mt-1 text-sm leading-relaxed " + (dark ? "text-[#FFFCEF]/65" : "text-ink-2")}>
            We&apos;ve received your request. Our team will personally search and send you a shortlist of suitable accommodation within 24 hours.
          </p>
        </div>
      </div>
    );
  }

  const inputClass = dark ? "dark-input" : "input";
  const errorClass = "border-danger";
  const labelClass = "mb-1 block text-[13px] font-medium " + (dark ? "text-[#FFFCEF]/75" : "text-ink-2");
  const errorTextClass = "mt-1 text-xs " + (dark ? "text-[#f4a3a3]" : "text-danger");

  function fieldId(name: string) {
    return `${idPrefix}-${name}`;
  }

  return (
    <div>
      <p className={"font-semibold " + (dark ? "text-[#FFFCEF]" : "text-brand")}>
        Tell us about your move
      </p>
      <p className={"mb-5 mt-1 text-sm " + (dark ? "text-[#FFFCEF]/50" : "text-ink-muted")}>
        Share a few details so we can start matching you with the right options.
      </p>

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
        <div>
          <label htmlFor={fieldId("fullName")} className={labelClass}>
            Full name
          </label>
          <input
            id={fieldId("fullName")}
            type="text"
            placeholder="e.g. Ayesha Khan"
            value={form.fullName}
            onChange={(e) => field("fullName", e.target.value)}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? fieldId("fullName-error") : undefined}
            className={inputClass + (errors.fullName ? " " + errorClass : "")}
          />
          {errors.fullName && (
            <p id={fieldId("fullName-error")} role="alert" className={errorTextClass}>
              {errors.fullName}
            </p>
          )}
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label htmlFor={fieldId("phone")} className={labelClass}>
              Phone number
            </label>
            <input
              id={fieldId("phone")}
              type="tel"
              inputMode="tel"
              placeholder="03001234567"
              value={form.phone}
              onChange={(e) => field("phone", e.target.value)}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? fieldId("phone-error") : undefined}
              className={inputClass + (errors.phone ? " " + errorClass : "")}
            />
            {errors.phone && (
              <p id={fieldId("phone-error")} role="alert" className={errorTextClass}>
                {errors.phone}
              </p>
            )}
          </div>
          <div>
            <label htmlFor={fieldId("email")} className={labelClass}>
              Email address
            </label>
            <input
              id={fieldId("email")}
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => field("email", e.target.value)}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? fieldId("email-error") : undefined}
              className={inputClass + (errors.email ? " " + errorClass : "")}
            />
            {errors.email && (
              <p id={fieldId("email-error")} role="alert" className={errorTextClass}>
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor={fieldId("university")} className={labelClass}>
            University
          </label>
          <select
            id={fieldId("university")}
            value={form.university}
            onChange={(e) => field("university", e.target.value)}
            aria-invalid={!!errors.university}
            aria-describedby={errors.university ? fieldId("university-error") : undefined}
            className={inputClass + " appearance-none" + (errors.university ? " " + errorClass : "")}
          >
            <option value="">Select your university</option>
            {UNIVERSITIES.map((u) => (
              <option key={u} value={u}>{u}</option>
            ))}
          </select>
          {errors.university && (
            <p id={fieldId("university-error")} role="alert" className={errorTextClass}>
              {errors.university}
            </p>
          )}
          {form.university === "Other" && (
            <input
              type="text"
              placeholder="Enter your university"
              value={form.otherUniversity}
              onChange={(e) => field("otherUniversity", e.target.value)}
              className={inputClass + " mt-2"}
            />
          )}
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label htmlFor={fieldId("campus")} className={labelClass}>
              Campus
            </label>
            <input
              id={fieldId("campus")}
              type="text"
              placeholder="e.g. H-11 Campus"
              value={form.campus}
              onChange={(e) => field("campus", e.target.value)}
              aria-invalid={!!errors.campus}
              aria-describedby={errors.campus ? fieldId("campus-error") : undefined}
              className={inputClass + (errors.campus ? " " + errorClass : "")}
            />
            {errors.campus && (
              <p id={fieldId("campus-error")} role="alert" className={errorTextClass}>
                {errors.campus}
              </p>
            )}
          </div>
          <div>
            <label htmlFor={fieldId("program")} className={labelClass}>
              Program
            </label>
            <input
              id={fieldId("program")}
              type="text"
              placeholder="e.g. BS Computer Science"
              value={form.program}
              onChange={(e) => field("program", e.target.value)}
              aria-invalid={!!errors.program}
              aria-describedby={errors.program ? fieldId("program-error") : undefined}
              className={inputClass + (errors.program ? " " + errorClass : "")}
            />
            {errors.program && (
              <p id={fieldId("program-error")} role="alert" className={errorTextClass}>
                {errors.program}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor={fieldId("homeCity")} className={labelClass}>
            Home city
          </label>
          <input
            id={fieldId("homeCity")}
            type="text"
            placeholder="e.g. Multan"
            value={form.homeCity}
            onChange={(e) => field("homeCity", e.target.value)}
            aria-invalid={!!errors.homeCity}
            aria-describedby={errors.homeCity ? fieldId("homeCity-error") : undefined}
            className={inputClass + (errors.homeCity ? " " + errorClass : "")}
          />
          {errors.homeCity && (
            <p id={fieldId("homeCity-error")} role="alert" className={errorTextClass}>
              {errors.homeCity}
            </p>
          )}
        </div>

        {status === "error" && (
          <p role="alert" className={"flex items-start gap-2 text-sm " + (dark ? "text-[#f4a3a3]" : "text-danger")}>
            <AlertCircle className="mt-0.5 size-4 shrink-0" strokeWidth={2} />
            {submitError}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className={
            "mt-1 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-opacity disabled:cursor-not-allowed disabled:opacity-60 " +
            (dark
              ? "bg-accent text-brand hover:opacity-90"
              : "bg-brand text-[#FFFCEF] hover:bg-brand-2")
          }
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Find My Accommodation
              <ArrowRight className="size-4" />
            </>
          )}
        </button>
        <p className={"text-center text-xs " + (dark ? "text-[#FFFCEF]/45" : "text-ink-muted")}>
          No endless calls. We will personally look into your options.
        </p>
      </form>
    </div>
  );
}
