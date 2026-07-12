"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const UNIVERSITIES = [
  "NUST",
  "COMSATS University",
  "FAST-NU",
  "Air University",
  "QAU",
  "IIUI",
  "UET Taxila",
  "Bahria University",
  "SZABIST",
  "Other",
];

type Props = { variant?: "light" | "dark" };

export function WaitlistForm({ variant = "light" }: Props) {
  const dark = variant === "dark";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [university, setUniversity] = useState("");
  const [done, setDone] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setDone(true);
  }

  if (done) {
    return (
      <div
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
            You&apos;re on the list!
          </p>
          <p className={"mt-0.5 text-sm " + (dark ? "text-[#FFFCEF]/65" : "text-ink-muted")}>
            We&apos;ll reach out on email and WhatsApp the moment we go live.
          </p>
        </div>
      </div>
    );
  }

  const inputClass = dark ? "dark-input" : "input";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={inputClass}
        />
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={inputClass}
        />
      </div>
      <input
        type="tel"
        placeholder="WhatsApp number — e.g. 03001234567"
        value={whatsapp}
        onChange={(e) => setWhatsapp(e.target.value)}
        className={inputClass}
      />
      <select
        value={university}
        onChange={(e) => setUniversity(e.target.value)}
        className={inputClass + " appearance-none"}
      >
        <option value="">University (optional)</option>
        {UNIVERSITIES.map((u) => (
          <option key={u} value={u}>{u}</option>
        ))}
      </select>

      <button
        type="submit"
        className={
          "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-opacity disabled:opacity-60 " +
          (dark
            ? "bg-accent text-brand hover:opacity-90"
            : "bg-brand text-[#FFFCEF] hover:bg-brand-2")
        }
      >
        Notify me at launch
        <ArrowRight className="size-4" />
      </button>
    </form>
  );
}
