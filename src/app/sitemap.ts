import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// Served at /sitemap.xml. The site is a single page; add new routes here.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: "2026-11-24",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
