"use client";

import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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

type Props = { variant?: "light" | "dark" };

export function WaitlistForm({ variant = "light" }: Props) {
  const dark = variant === "dark";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [university, setUniversity] = useState("");
  const [city, setCity] = useState("");
  const [program, setProgram] = useState("");
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
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          type="tel"
          placeholder="WhatsApp number — e.g. 03001234567"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          className={inputClass}
        />
        <input
          type="text"
          placeholder="City (optional)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className={inputClass}
        />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <UniversitySelect value={university} onChange={setUniversity} dark={dark} />
        <input
          type="text"
          placeholder="Program (optional)"
          value={program}
          onChange={(e) => setProgram(e.target.value)}
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        className={
          "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-opacity disabled:opacity-60 " +
          (dark
            ? "bg-accent text-brand hover:opacity-90"
            : "bg-brand text-[#FFFCEF] hover:bg-brand-2")
        }
      >
        Find my hostel
        <ArrowRight className="size-4" />
      </button>
    </form>
  );
}

function UniversitySelect({
  value,
  onChange,
  dark,
}: {
  value: string;
  onChange: (value: string) => void;
  dark: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);


  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={
          (dark ? "dark-input" : "input") +
          " flex items-center justify-between gap-2 text-left"
        }
      >
        <span className={value ? "" : dark ? "text-[#FFFCEF]/40" : "text-ink-faint"}>
          {value || "University (optional)"}
        </span>
        <ChevronDown
          className={
            "size-4 shrink-0 transition-transform " +
            (open ? "rotate-180 " : "") +
            (dark ? "text-[#FFFCEF]/50" : "text-ink-faint")
          }
          strokeWidth={2}
        />
      </button>

      {open && (
        <div className="brand-scroll absolute z-20 mt-2 max-h-64 w-full overflow-y-auto rounded-2xl border border-border-tan bg-white p-1.5 shadow-xl shadow-black/10">
          {UNIVERSITIES.map((u) => (
            <button
              key={u}
              type="button"
              onClick={() => {
                onChange(u);
                setOpen(false);
              }}
              className={
                "w-full rounded-xl px-3 py-2 text-left text-sm transition-colors " +
                (value === u
                  ? "bg-brand text-[#FFFCEF]"
                  : "text-ink-2 hover:bg-brand-soft hover:text-brand")
              }
            >
              {u}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
