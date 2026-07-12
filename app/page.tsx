import {
  ArrowRight,
  Camera,
  CheckCircle2,
  Clock,
  Compass,
  HeartHandshake,
  ImageIcon,
  MapPin,
  MessageCircleQuestion,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  type LucideIcon,
} from "lucide-react";
import { InquiryForm } from "@/components/inquiry-form";

const HOW_IT_WORKS: { Icon: LucideIcon; title: string; copy: string }[] = [
  {
    Icon: Compass,
    title: "Tell us about yourself",
    copy: "Share your university, campus, program, home city and what matters most to you.",
  },
  {
    Icon: ShieldCheck,
    title: "We search and verify",
    copy: "We personally look through options, check the actual condition, and shortlist the best-fit places.",
  },
  {
    Icon: ArrowRight,
    title: "Receive a shortlist within 24 hours",
    copy: "You get recommendations that feel genuinely suited to your preferences and budget.",
  },
];

const WHY_WEHOPINN: { Icon: LucideIcon; title: string; copy: string }[] = [
  {
    Icon: ShieldCheck,
    title: "Personally Verified",
    copy: "We visit accommodations ourselves and confirm the reality on the ground before we recommend anything.",
  },
  {
    Icon: MapPin,
    title: "Near Your University",
    copy: "Every recommendation is matched to your campus, commute preferences, and the areas students actually choose.",
  },
  {
    Icon: Star,
    title: "Real Student Reviews",
    copy: "We look for genuine feedback from students who have lived there so you can make a calmer choice.",
  },
  {
    Icon: Users,
    title: "Local Experts",
    copy: "We know the Islamabad student market well enough to spot the good options and the risky ones quickly.",
  },
  {
    Icon: Clock,
    title: "Save Hours of Searching",
    copy: "No more endless calls, stale listings, or scrolling through unreliable groups.",
  },
  {
    Icon: Camera,
    title: "Photos You Can Trust",
    copy: "We share real photos from our visits so you know what you are walking into.",
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
    label: "Student story",
    text: "Student stories and testimonials will appear here as soon as we start helping more students.",
    attribution: "Coming soon",
    quoted: true,
  },
  {
    Icon: Quote,
    label: "Parent reassurance",
    text: "Parent feedback and trust notes will appear here once we begin supporting families directly.",
    attribution: "Coming soon",
    quoted: true,
  },
  {
    Icon: ImageIcon,
    label: "Verified photos",
    text: "Real hostel photos from our visits will be shared here.",
    attribution: "Verified by our team",
  },
  {
    Icon: Users,
    label: "Impact snapshot",
    text: "Student support numbers and milestones will appear once the service is live.",
    attribution: "More to come",
  },
];

const FAQ_ITEMS = [
  {
    question: "How much does the service cost?",
    answer: "We are keeping the service free for students during this MVP phase while we build trust and refine the experience.",
  },
  {
    question: "When will I hear back?",
    answer: "We aim to send you a shortlist within 24 hours of receiving your request.",
  },
  {
    question: "How do you verify accommodations?",
    answer: "We personally review options, confirm the details, and only recommend places we would feel comfortable sending a student to.",
  },
  {
    question: "Do you visit accommodations?",
    answer: "Yes. We visit and verify properties ourselves before recommending them.",
  },
  {
    question: "Can parents submit requests?",
    answer: "Absolutely. Parents can submit a request on behalf of their child and we will help from there.",
  },
  {
    question: "What universities do you support?",
    answer: "We are starting with universities in Islamabad and expanding as we learn more about each area.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col">
      <section
        className="relative flex flex-col overflow-hidden bg-brand"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 115% -5%, rgba(212,165,116,0.30) 0%, transparent 48%), " +
            "radial-gradient(ellipse at -15% 115%, rgba(212,165,116,0.13) 0%, transparent 48%)",
        }}
      >
        <div className="mx-auto flex w-full max-w-page items-center justify-between px-8 pt-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-white.svg" alt="WeHopinn" width={148} height={35} />
          <span className="hidden items-center gap-2 rounded-full border border-accent/30 bg-[#FFFCEF]/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent sm:inline-flex">
            <span className="size-1.5 animate-pulse rounded-full bg-accent" />
            Launching in Islamabad
          </span>
        </div>

        <div className="mx-auto grid w-full max-w-page gap-10 px-8 pb-10 pt-12 lg:grid-cols-[1fr_560px] lg:items-center lg:gap-14 lg:pt-16">
          <div className="flex flex-col">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-[#FFFCEF]/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent sm:hidden">
              <span className="size-1.5 animate-pulse rounded-full bg-accent" />
              Launching soon
            </span>

            <h1 className="serif-h mt-5 text-5xl text-[#FFFCEF] sm:mt-0 sm:text-6xl lg:text-[4.25rem]">
              Finding student accommodation
              <br />
              should not feel like a full-time job.
            </h1>

            <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-[#FFFCEF]/65">
              WeHopinn helps students in Islamabad skip the endless search, the unreliable listings, and the stress of moving to a new city. Tell us what you need and we will personally shortlist the right options for you.
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {[
                "No endless searching",
                "Personal recommendations",
                "Verified options",
                "Within 24 hours",
              ].map((tag) => (
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

          <div className="flex flex-col gap-4">
            <div className="rounded-3xl border border-[#FFFCEF]/12 bg-[#FFFCEF]/7 p-6 backdrop-blur-sm">
              <div className="mb-1 flex items-center gap-2">
                <Sparkles className="size-4 text-accent" strokeWidth={1.8} />
                <p className="font-semibold text-[#FFFCEF]">Find my accommodation</p>
              </div>
              <p className="mb-5 text-sm text-[#FFFCEF]/50">
                Share a few details and we will start looking for places that fit your needs.
              </p>
              <InquiryForm variant="dark" />
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-page border-t border-[#FFFCEF]/10 px-8 pb-10 pt-8">
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            <HeroStat num="24h" label="Shortlist delivery" />
            <HeroStat num="Islamabad" label="First city" />
            <HeroStat num="Verified" label="Personal visits" />
            <HeroStat num="Free" label="MVP service" />
          </div>
        </div>
      </section>

      <section className="bg-background px-8 py-20">
        <div className="mx-auto max-w-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-muted">The problem</span>
            <h2 className="serif-h mt-3 text-4xl text-brand sm:text-5xl">
              Finding accommodation should not take days of stress.
            </h2>
            <p className="mt-4 text-ink-2">
              Students are wasting time in Facebook groups, calling hostel owners, comparing outdated listings, and trying to trust places they have never seen. Parents worry about safety. The search becomes exhausting before it even begins.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bg-warm px-8 py-20">
        <div className="mx-auto max-w-page">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-muted">How it works</span>
            <h2 className="serif-h mt-3 text-4xl text-brand sm:text-5xl">
              We do the searching, so you do not have to.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {HOW_IT_WORKS.map(({ Icon, title, copy }) => (
              <div key={title} className="rounded-3xl border border-border-tan bg-white p-7">
                <span className="grid size-12 place-items-center rounded-2xl bg-brand-soft text-brand">
                  <Icon className="size-5" strokeWidth={1.8} />
                </span>
                <h3 className="serif-h mt-5 text-2xl text-brand">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-2">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background px-8 py-20">
        <div className="mx-auto max-w-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-muted">Why WeHopinn</span>
            <h2 className="serif-h mt-3 text-4xl text-brand sm:text-5xl">
              A calmer way to find your student home.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_WEHOPINN.map(({ Icon, title, copy }) => (
              <div key={title} className="flex flex-col gap-4 rounded-3xl border border-border-tan bg-white p-7">
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

      <section className="bg-bg-warm px-8 py-20 hidden">
        <div className="mx-auto max-w-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-muted">Social proof placeholder</span>
            <h2 className="serif-h mt-3 text-4xl text-brand sm:text-5xl">
              Trusted by students and families who want less guesswork.
            </h2>
            <p className="mt-4 text-ink-2">
              This space will soon hold real stories, verified photos, and early student impact so the trust feels tangible.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {SOCIAL_PROOF.map(({ Icon, label, text, attribution, quoted }) => (
              <div key={label} className="flex flex-col items-center gap-3 rounded-3xl border border-dashed border-border-tan-2 bg-white p-8 text-center">
                <span className="grid size-11 place-items-center rounded-2xl bg-bg-warm text-ink-faint">
                  <Icon className="size-5" strokeWidth={1.8} />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-muted">{label}</span>
                <p className="italic text-ink-2">{quoted ? <>&ldquo;{text}&rdquo;</> : text}</p>
                <p className="text-sm text-ink-faint">{attribution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background px-8 py-20">
        <div className="mx-auto max-w-page">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-muted">FAQ</span>
            <h2 className="serif-h mt-3 text-4xl text-brand sm:text-5xl">Questions students usually ask</h2>
          </div>

          <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-3">
            {FAQ_ITEMS.map((item) => (
              <details key={item.question} className="rounded-2xl border border-border-tan bg-white px-5 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-brand">
                  <span>{item.question}</span>
                  <MessageCircleQuestion className="size-4 shrink-0 text-ink-faint" strokeWidth={1.8} />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-2">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="inquiry-form" className="bg-brand px-8 py-20" style={{ backgroundImage: "radial-gradient(ellipse at 100% 50%, rgba(212,165,116,0.22) 0%, transparent 55%)" }}>
        <div className="mx-auto max-w-narrow">
          <div className="grid gap-12 lg:grid-cols-[1fr_560px] lg:items-center">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">Start your request</span>
              <h2 className="serif-h mt-3 text-4xl text-[#FFFCEF] sm:text-5xl">
                Tell us what you need and we will take it from there.
              </h2>
              <p className="mt-4 max-w-sm text-[#FFFCEF]/60">
                We will personally search, verify and send you a shortlist of suitable accommodation within 24 hours.
              </p>
            </div>
            <InquiryForm variant="dark" />
          </div>
        </div>
      </section>

      <footer className="border-t border-[#FFFCEF]/10 bg-brand px-8 py-6">
        <div className="mx-auto flex max-w-page flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-white.svg" alt="WeHopinn" width={100} height={24} style={{ opacity: 0.45 }} />
          <div className="flex flex-wrap items-center gap-4 text-[13px] text-[#FFFCEF]/45">
            <a href="mailto:hello@wehopinn.com" className="transition hover:text-[#FFFCEF]/75">hello@wehopinn.com</a>
            <span>Instagram · coming soon</span>
            <span>© {new Date().getFullYear()} WeHopinn</span>
          </div>
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
