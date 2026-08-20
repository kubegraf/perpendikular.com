import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

const base = siteUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-01-01");
  return [
    { url: base, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/#product`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/#how-it-works`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/#use-cases`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/#teams`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/#pricing`, lastModified, changeFrequency: "monthly", priority: 0.9 },
  ];
}
