import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfairDisplayHeading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadataBase = new URL("https://wehopinn.com");

export const metadata: Metadata = {
  metadataBase,
  title: "WeHopinn | Student Accommodation in Islamabad",
  description:
    "WeHopinn helps students in Islamabad find trusted accommodation without the stress of endless searching. Tell us what you need and we will shortlist suitable options within 24 hours.",
  keywords: ["student accommodation", "Islamabad hostels", "university housing", "student housing Islamabad"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "WeHopinn | Student Accommodation in Islamabad",
    description:
      "WeHopinn helps students in Islamabad find trusted accommodation without the stress of endless searching.",
    url: "/",
    siteName: "WeHopinn",
    type: "website",
    locale: "en_US",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "WeHopinn | Student Accommodation in Islamabad",
    description:
      "WeHopinn helps students in Islamabad find trusted accommodation without the stress of endless searching.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${notoSans.variable} ${playfairDisplayHeading.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">{children}</body>
    </html>
  );
}
