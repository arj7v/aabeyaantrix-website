import type { MetadataRoute } from "next";
import { SITE_URL, nav } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return nav.map((item) => ({
    url: new URL(item.href, SITE_URL).toString(),
    lastModified: now,
    changeFrequency: item.href === "/" ? "monthly" : "yearly",
    priority: item.href === "/" ? 1 : 0.7,
  }));
}
