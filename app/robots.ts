import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://perpendikular.com/sitemap.xml",
    host: "https://perpendikular.com",
  };
}
