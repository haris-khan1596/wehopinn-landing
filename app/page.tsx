import {
  ArrowRight,
  Camera,
  CheckCircle2,
  Clock,
  Compass,
  MapPin,
  MessageCircleQuestion,
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

const SITE_URL = "https://wehopinn.com";

// TODO: replace with the real WhatsApp business number (E.164, digits only,
// e.g. "923001234567"). Used for the wa.me link and the Organization contactPoint.
const WHATSAPP_NUMBER = "923000000000";

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#org`,
      name: "WeHopinn",
      url: SITE_URL,
      logo: `${SITE_URL}/logo-white.svg`,
      email: "hello@wehopinn.com",
      description:
        "WeHopinn helps students in Islamabad find trusted, personally verified accommodation, shortlisted within 24 hours.",
      areaServed: { "@type": "City", name: "Islamabad", "@id": "https://www.wikidata.org/wiki/Q1362" },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "hello@wehopinn.com",
        telephone: `+${WHATSAPP_NUMBER}`,
        areaServed: "PK",
        availableLanguage: ["en", "ur"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "WeHopinn",
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#org` },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service`,
      name: "Student accommodation matching",
      serviceType: "Student accommodation search and verification",
      provider: { "@id": `${SITE_URL}/#org` },
      areaServed: { "@type": "City", name: "Islamabad" },
      audience: { "@type": "EducationalAudience", educationalRole: "student" },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
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

            <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-[#FFFCEF]/80">
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
              <p className="mb-5 text-sm text-[#FFFCEF]/70">
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

      <section
        className="relative overflow-hidden bg-brand px-8 py-20"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 115% -5%, rgba(212,165,116,0.30) 0%, transparent 48%), " +
            "radial-gradient(ellipse at -15% 115%, rgba(212,165,116,0.13) 0%, transparent 48%)",
        }}
      >
        <div className="mx-auto max-w-page">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">How it works</span>
            <h2 className="serif-h mt-3 text-4xl text-[#FFFCEF] sm:text-5xl">
              We do the searching, so you do not have to.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {HOW_IT_WORKS.map(({ Icon, title, copy }) => (
              <div key={title} className="rounded-3xl border border-[#FFFCEF]/12 bg-[#FFFCEF]/7 p-7 backdrop-blur-sm">
                <span className="grid size-12 place-items-center rounded-2xl bg-[#FFFCEF]/10 text-accent">
                  <Icon className="size-5" strokeWidth={1.8} />
                </span>
                <h3 className="serif-h mt-5 text-2xl text-[#FFFCEF]">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#FFFCEF]/65">{copy}</p>
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
              <p className="mt-4 max-w-sm text-[#FFFCEF]/80">
                We will personally search, verify and send you a shortlist of suitable accommodation within 24 hours.
              </p>
            </div>
            <InquiryForm variant="dark" />
          </div>
        </div>
      </section>

      <footer className="border-t border-[#FFFCEF]/10 bg-brand px-8 py-6">
        <div className="mx-auto flex max-w-page flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* Decorative — the brand name is already announced in the header logo. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-white.svg" alt="" width={100} height={24} style={{ opacity: 0.45 }} />
          <div className="flex flex-wrap items-center gap-4 text-[13px] text-[#FFFCEF]/65">
            <a href="mailto:hello@wehopinn.com" className="transition hover:text-[#FFFCEF]">hello@wehopinn.com</a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#FFFCEF]"
            >
              WhatsApp
            </a>
            <span>Instagram · coming soon</span>
            <span>Islamabad, Pakistan</span>
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
