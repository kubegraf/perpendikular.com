import type { MetadataRoute } from "next";

const base = "https://perpendikular.com";

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
