import { MetadataRoute } from "next";

const SITE_URL = "https://wehopinn.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: [`${SITE_URL}/og-image.jpg`],
    },
  ];
}
