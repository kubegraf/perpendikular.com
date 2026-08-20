import type { NextConfig } from "next";

// Static export — the site is served as plain files (GitHub Pages today,
// any CDN tomorrow). A project page lives under a sub-path, so basePath is
// supplied at build time rather than hard-coded.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: { unoptimized: true },
  experimental: {
    optimizePackageImports: ["lucide-react", "motion"],
  },
};

export default nextConfig;
