import type { Metadata, Viewport } from "next";
import { Noto_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfairDisplayHeading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const metadataBase = new URL("https://wehopinn.com");

const OG_IMAGE = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "WeHopinn — trusted student accommodation in Islamabad",
  type: "image/jpeg",
};

export const metadata: Metadata = {
  metadataBase,
  title: "WeHopinn | Student Accommodation in Islamabad",
  description:
    "Find trusted student accommodation in Islamabad without the endless searching. Tell us what you need and we shortlist verified options within 24 hours.",
  keywords: ["student accommodation", "Islamabad hostels", "university housing", "student housing Islamabad"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "WeHopinn | Student Accommodation in Islamabad",
    description:
      "WeHopinn helps students in Islamabad skip the endless search and find verified accommodation, shortlisted within 24 hours.",
    url: "/",
    siteName: "WeHopinn",
    type: "website",
    locale: "en_US",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "WeHopinn | Student Accommodation in Islamabad",
    description:
      "WeHopinn helps students in Islamabad skip the endless search and find verified accommodation, shortlisted within 24 hours.",
    images: [OG_IMAGE],
  },
  // Icons are provided by the app/ file conventions (favicon.ico, icon.svg,
  // apple-icon.png), which Next auto-detects and which override metadata.icons.
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0F3D2E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${notoSans.variable} ${playfairDisplayHeading.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">{children}</body>
    </html>
  );
}
