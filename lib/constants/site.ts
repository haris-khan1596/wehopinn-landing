export const siteConfig = {
  name: "WeHopinn",
  tagline: "We do the searching, so you don't have to.",
  description:
    "WeHopinn personally finds, verifies, and recommends student accommodation near your university in Islamabad.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://wehopinn.com",
  email: "hello@wehopinn.com",
  instagram: "https://instagram.com/wehopinn",
  location: "Islamabad, Pakistan",
  responseTime: "24 hours",
} as const;

export const universities = [
  "NUST",
  "COMSATS",
  "IIU",
  "NUML",
  "QAU",
] as const;
