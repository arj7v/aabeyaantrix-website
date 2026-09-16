import type { MetadataRoute } from "next";
import { SITE_URL, nav, servicesToShow } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: MetadataRoute.Sitemap = nav.map((item) => ({
    url: new URL(item.href, SITE_URL).toString(),
    lastModified: now,
    changeFrequency: item.href === "/" ? "monthly" : "yearly",
    priority: item.href === "/" ? 1 : 0.7,
  }));

  // Individual service pages carry the location-specific keywords, so they
  // rank in their own right — give them a priority above the generic pages.
  const servicePages: MetadataRoute.Sitemap = servicesToShow().map((s) => ({
    url: new URL(`/services/${s.slug}`, SITE_URL).toString(),
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.8,
  }));

  return [...pages, ...servicePages];
}
