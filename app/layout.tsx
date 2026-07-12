import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://wehopinn.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "WeHopinn — Find Your Student Accommodation in Islamabad",
    template: "%s | WeHopinn",
  },
  description:
    "WeHopinn personally finds, verifies, and recommends student accommodation near your university in Islamabad. Tell us what you need — get a shortlist within 24 hours. Free for students.",
  keywords: [
    "student accommodation Islamabad",
    "hostel Islamabad",
    "university housing Pakistan",
    "NUST hostel",
    "COMSATS hostel",
    "student housing Islamabad",
    "WeHopinn",
  ],
  authors: [{ name: "WeHopinn" }],
  creator: "WeHopinn",
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: siteUrl,
    siteName: "WeHopinn",
    title: "WeHopinn — Find Your Student Accommodation in Islamabad",
    description:
      "We do the searching, so you don't have to. Personal recommendations, verified options, delivered within 24 hours.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "WeHopinn — Student accommodation in Islamabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WeHopinn — Find Your Student Accommodation in Islamabad",
    description:
      "We do the searching, so you don't have to. Personal recommendations, verified options, delivered within 24 hours.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
