/**
 * Deployment target.
 *
 * Defaults suit the eventual custom domain. The GitHub Pages workflow builds
 * with NEXT_PUBLIC_BASE_PATH=/perpendikular.com so the same source ships to
 * https://kubegraf.github.io/perpendikular.com without a fork in the code.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://perpendikular.com"
).replace(/\/$/, "");

/** Absolute URL for a site-relative path, base path included. */
export function absoluteUrl(path = "/") {
  return `${siteUrl}${path === "/" ? "/" : path}`;
}
