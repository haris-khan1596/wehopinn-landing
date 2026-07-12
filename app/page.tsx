import {
  Camera,
  CheckCircle2,
  Clock,
  ImageIcon,
  MapPin,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  type LucideIcon,
} from "lucide-react";
import { WaitlistForm } from "@/components/waitlist-form";

const CHECKS = [
  "Photos match the actual hostel",
  "Listed price is the real price",
  "Rooms are actually available now",
  "CCTV, guards & safety checked",
];

const UNIVERSITIES = [
  "NUST", "COMSATS", "FAST-NU", "Air University",
  "QAU", "IIUI", "Bahria University", "SZABIST",
];

const PREMIUM_FEATURES: { Icon: LucideIcon; title: string; copy: string }[] = [
  {
    Icon: ShieldCheck,
    title: "Personally Verified",
    copy: "We visit accommodations ourselves and confirm what's actually available — not just what's posted online.",
  },
  {
    Icon: MapPin,
    title: "Near Your University",
    copy: "Recommendations matched to your campus, commute preferences, and the areas students actually live in.",
  },
  {
    Icon: Star,
    title: "Real Student Reviews",
    copy: "Honest feedback from students who've lived there — so you know what daily life is really like.",
  },
  {
    Icon: Users,
    title: "Local Experts",
    copy: "We know Islamabad's student housing market, the safe sectors, fair prices, and which owners you can trust.",
  },
  {
    Icon: Clock,
    title: "Save Hours of Searching",
    copy: "Skip the Facebook groups, unanswered calls, and wasted visits. We handle the legwork for you.",
  },
  {
    Icon: Camera,
    title: "Photos You Can Trust",
    copy: "Real photos from our visits — rooms, common areas, mess, and surroundings. No misleading filters.",
  },
];

const SOCIAL_PROOF: {
  Icon: LucideIcon;
  label: string;
  text: string;
  attribution: string;
  quoted?: boolean;
}[] = [
  {
    Icon: Quote,
    label: "Student testimonial",
    text: "Testimonial from a student will appear here once we launch.",
    attribution: "— Student name, University",
    quoted: true,
  },
  {
    Icon: Quote,
    label: "Parent testimonial",
    text: "Parent feedback will appear here once we launch.",
    attribution: "— Parent name, Home city",
    quoted: true,
  },
  {
    Icon: ImageIcon,
    label: "Hostel photo",
    text: "Verified hostel photo placeholder",
    attribution: "Real photos from our visits",
  },
  {
    Icon: Users,
    label: "Impact numbers",
    text: "—",
    attribution: "Students helped (coming soon)",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        className="relative flex flex-col overflow-hidden bg-brand"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 115% -5%, rgba(212,165,116,0.30) 0%, transparent 48%), " +
            "radial-gradient(ellipse at -15% 115%, rgba(212,165,116,0.13) 0%, transparent 48%)",
        }}
      >
        {/* top bar */}
        <div className="mx-auto flex w-full max-w-page items-center justify-between px-8 pt-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-white.svg" alt="WeHopInn" width={148} height={35} />
          <span className="hidden items-center gap-2 rounded-full border border-accent/30 bg-[#FFFCEF]/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent sm:inline-flex">
            <span className="size-1.5 animate-pulse rounded-full bg-accent" />
            Launching in Islamabad
          </span>
        </div>

        {/* hero content */}
        <div className="mx-auto grid w-full max-w-page gap-10 px-8 pb-10 pt-12 lg:grid-cols-[1fr_480px] lg:items-start lg:gap-14 lg:pt-16">

          {/* left: copy */}
          <div className="flex flex-col">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-[#FFFCEF]/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent sm:hidden">
              <span className="size-1.5 animate-pulse rounded-full bg-accent" />
              Launching soon
            </span>

            <h1 className="serif-h mt-5 text-5xl text-[#FFFCEF] sm:mt-0 sm:text-6xl lg:text-[4.25rem]">
              Moving to Islamabad
              <br />
              for university?
              <br />
              <em>We&apos;ve got your hostel.</em>
            </h1>

            <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-[#FFFCEF]/65">
              WeHopInn is a curated hostel directory for out-of-city students. Browse verified listings, shortlist your favourites, and let our team visit, verify, and recommend the right one over WhatsApp — in 24 hours. Free.
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {["Verified listings", "In-person checks", "Free service", "WhatsApp in 24h"].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#FFFCEF]/10 px-3.5 py-1.5 text-[13px] text-[#FFFCEF]/75"
                >
                  <CheckCircle2 className="size-3.5 text-accent" strokeWidth={2.5} />
                  {tag}
                </span>
              ))}
            </div>

          </div>

          {/* right: form card */}
          <div className="flex flex-col gap-4">
            <div className="rounded-3xl border border-[#FFFCEF]/12 bg-[#FFFCEF]/7 p-6 backdrop-blur-sm">
              <div className="mb-1 flex items-center gap-2">
                <Sparkles className="size-4 text-accent" strokeWidth={1.8} />
                <p className="font-semibold text-[#FFFCEF]">Find your hostel</p>
              </div>
              <p className="mb-5 text-sm text-[#FFFCEF]/50">
                Tell us a bit about yourself and we&apos;ll match you to a verified hostel.
              </p>
              <WaitlistForm variant="dark" />
            </div>
          </div>
        </div>

        {/* stats — full-width, always below both columns */}
        <div className="mx-auto w-full max-w-page border-t border-[#FFFCEF]/10 px-8 pb-10 pt-8">
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            <HeroStat num="50+" label="Hostels being verified" />
            <HeroStat num="9" label="Universities mapped" />
            <HeroStat num="24h" label="WhatsApp response" />
            <HeroStat num="Free" label="No student fees" />
          </div>
        </div>
      </section>

      {/* ── Premium service ──────────────────────────────────────── */}
      <section className="bg-background px-8 py-20">
        <div className="mx-auto max-w-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-muted">
              Why WeHopinn
            </span>
            <h2 className="serif-h mt-3 text-4xl text-brand sm:text-5xl">
              A premium service, <em>built for students.</em>
            </h2>
            <p className="mt-4 text-ink-2">
              We&apos;re not a listing site. We&apos;re the senior student who already knows the city — and does the hard work for you.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PREMIUM_FEATURES.map(({ Icon, title, copy }) => (
              <div
                key={title}
                className="flex flex-col gap-4 rounded-3xl border border-border-tan bg-white p-7"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-brand-soft text-brand">
                  <Icon className="size-5" strokeWidth={1.8} />
                </span>
                <h3 className="serif-h text-2xl text-brand">{title}</h3>
                <p className="text-sm leading-relaxed text-ink-2">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What we verify ───────────────────────────────────────── */}
      <section className="bg-bg-warm px-8 py-20">
        <div className="mx-auto max-w-page">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-20">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-muted">
                What we verify
              </span>
              <h2 className="serif-h mt-3 text-4xl text-brand sm:text-5xl">
                Every hostel,
                <br />
                <em>checked in person.</em>
              </h2>
              <p className="mt-4 text-ink-2">
                Our team works through this checklist on every visit before a hostel goes live — so you know exactly what you&apos;re getting.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {CHECKS.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-border-tan bg-white px-4 py-3">
                  <ShieldCheck className="size-4 shrink-0 text-success" strokeWidth={2} />
                  <span className="text-[15px] text-ink-2">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Universities ─────────────────────────────────────────── */}
      <section
        className="bg-brand px-8 py-20"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 100% 0%, rgba(212,165,116,0.22) 0%, transparent 55%)",
        }}
      >
        <div className="mx-auto max-w-page">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
                Near your campus
              </span>
              <h2 className="serif-h mt-3 text-4xl text-[#FFFCEF] sm:text-5xl">
                Launching near <em>these universities.</em>
              </h2>
              <p className="mt-4 max-w-lg text-[#FFFCEF]/65">
                We&apos;re mapping the best student hostels around the biggest campuses in Islamabad first. More coming soon.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {UNIVERSITIES.map((uni) => (
                  <span
                    key={uni}
                    className="inline-flex items-center gap-2 rounded-full border border-[#FFFCEF]/15 bg-[#FFFCEF]/10 px-4 py-2.5 text-sm font-medium text-[#FFFCEF]/85"
                  >
                    <span className="size-1.5 rounded-full bg-accent" />
                    {uni}
                  </span>
                ))}
                <span className="inline-flex items-center rounded-full border border-dashed border-[#FFFCEF]/20 px-4 py-2.5 text-sm text-[#FFFCEF]/45">
                  + more soon
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Social proof ─────────────────────────────────────────── */}
      <section className="bg-bg-warm px-8 py-20">
        <div className="mx-auto max-w-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-muted">
              Social proof
            </span>
            <h2 className="serif-h mt-3 text-4xl text-brand sm:text-5xl">
              Trusted by <em>students like you.</em>
            </h2>
            <p className="mt-4 text-ink-2">
              We&apos;re just getting started in Islamabad. Real stories and numbers will appear here as we help more students find their place.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {SOCIAL_PROOF.map(({ Icon, label, text, attribution, quoted }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 rounded-3xl border border-dashed border-border-tan-2 bg-white p-8 text-center"
              >
                <span className="grid size-11 place-items-center rounded-2xl bg-bg-warm text-ink-faint">
                  <Icon className="size-5" strokeWidth={1.8} />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-muted">
                  {label}
                </span>
                <p className="italic text-ink-2">
                  {quoted ? <>&ldquo;{text}&rdquo;</> : text}
                </p>
                <p className="text-sm text-ink-faint">{attribution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────── */}
      <section
        className="bg-brand px-8 py-20"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 100% 50%, rgba(212,165,116,0.22) 0%, transparent 55%)",
        }}
      >
        <div className="mx-auto max-w-narrow">
          <div className="grid gap-12 lg:grid-cols-[1fr_480px] lg:items-center">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
                Limited early access
              </span>
              <h2 className="serif-h mt-3 text-4xl text-[#FFFCEF] sm:text-5xl">
                Don&apos;t start your
                <br />
                first year <em>stressed.</em>
              </h2>
              <p className="mt-4 max-w-sm text-[#FFFCEF]/60">
                Join students already on the waitlist. We&apos;ll email you and WhatsApp you the moment we go live.
              </p>
            </div>
            <WaitlistForm variant="dark" />
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────── */}
      <footer className="border-t border-[#FFFCEF]/10 bg-brand px-8 py-6">
        <div className="mx-auto flex max-w-page items-center justify-between gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-white.svg" alt="WeHopInn" width={100} height={24} style={{ opacity: 0.45 }} />
          <p className="text-[13px] text-[#FFFCEF]/35">
            © {new Date().getFullYear()} WeHopInn · Islamabad, Pakistan
          </p>
        </div>
      </footer>

    </div>
  );
}

function HeroStat({ num, label }: { num: string; label: string }) {
  return (
    <div>
      <div className="serif-h text-2xl text-accent">{num}</div>
      <div className="mt-0.5 text-[13px] text-[#FFFCEF]/45">{label}</div>
    </div>
  );
}
