import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found | WeHopinn",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main
      className="flex min-h-svh flex-col items-center justify-center bg-brand px-8 text-center"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 115% -5%, rgba(212,165,116,0.30) 0%, transparent 48%), " +
          "radial-gradient(ellipse at -15% 115%, rgba(212,165,116,0.13) 0%, transparent 48%)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo-white.svg" alt="WeHopinn" width={148} height={35} />
      <p className="mt-10 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
        404
      </p>
      <h1 className="serif-h mt-3 text-4xl text-[#FFFCEF] sm:text-5xl">
        We couldn&apos;t find that page.
      </h1>
      <p className="mt-4 max-w-md text-[#FFFCEF]/80">
        The page you were looking for doesn&apos;t exist or has moved. Let&apos;s get you back to
        finding your student accommodation.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-brand transition-opacity hover:opacity-90"
      >
        Back to home
      </Link>
    </main>
  );
}
