# perpendikular.com

Marketing site for **PERPENDIKULAR** — a decision-intelligence platform.

> AI that sees every angle.
> Don’t just ask AI for an answer. Ask it to challenge you.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, React 19, static export of `/`)
- TypeScript (strict)
- Tailwind CSS v4 — tokens declared in `app/globals.css`, no config file
- [Motion](https://motion.dev) for in-view reveals and path drawing
- [Lucide](https://lucide.dev) icons
- Original SVG for the logo system and every diagram — no image assets, no UI kit

## Commands

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export into ./out
npm run preview    # serve ./out at http://localhost:3100
npm run lint       # eslint (next/core-web-vitals + typescript)
npm run typecheck  # tsc --noEmit
```

## Deployment

The site is a fully static export (`output: "export"`), published to GitHub
Pages by `.github/workflows/deploy.yml` on every push to `main`:

**https://kubegraf.github.io/perpendikular.com**

Pages serves a project site from a sub-path, so the build takes its location
from two environment variables, both supplied by `actions/configure-pages`:

| Variable | Pages value | Default |
| --- | --- | --- |
| `NEXT_PUBLIC_BASE_PATH` | `/perpendikular.com` | `""` |
| `NEXT_PUBLIC_SITE_URL` | `https://kubegraf.github.io/perpendikular.com` | `https://perpendikular.com` |

Nothing is hard-coded: attach a custom domain and `base_path` becomes empty,
`base_url` becomes the domain, and the next build picks both up.

Two details worth knowing before changing them:

- The OpenGraph card and Apple touch icon are route handlers named
  `app/og.png/` and `app/apple-touch-icon.png/`, not Next's
  `opengraph-image` / `apple-icon` conventions. A static export names each
  file after its route, and a file without a `.png` extension is served as
  `application/octet-stream` — which social scrapers reject.
- `public/.nojekyll` stops Pages from hiding the `_next` directory.

To publish for the first time, set **Settings → Pages → Source** to
**GitHub Actions**. The workflow passes `enablement: true`, so it will try to
do this itself on the first run.

`robots.txt` and `sitemap.xml` are emitted under the sub-path. Crawlers only
read `robots.txt` at a domain root, so it takes effect once the site moves to
its own domain.

## Structure

```
app/
  layout.tsx            fonts, metadata, theme bootstrap, skip link
  page.tsx              section composition + JSON-LD
  globals.css           design tokens, base layer, motion primitives
  icon.svg              favicon
  apple-icon.tsx        180×180 app icon (generated)
  opengraph-image.tsx   1200×630 social card (generated)
  twitter-image.tsx     re-exports the OG card
  robots.ts / sitemap.ts
components/
  logo.tsx              mark + wordmark lockup
  navbar.tsx            sticky nav, mobile drawer
  hero.tsx              headline, CTAs, statement band
  decision-map.tsx      radial 8-perspective map (vertical flow on mobile)
  perspective-grid.tsx  “One question. Every angle.”
  disagree-panel.tsx    traditional AI vs Perpendikular comparison
  contradiction-panel.tsx  claim convergence + contradiction readout
  blindspot-panel.tsx   numbered blind spots
  decision-graph.tsx    10-stage interactive graph (tablist, arrow keys)
  use-cases.tsx         eight questions with the angles they get attacked from
  evidence-panel.tsx    evidence, confidence and risk readout
  decision-history.tsx  decision list with filters
  moat.tsx              decision → reasoning → action → outcome → learning
  teams.tsx / pricing.tsx / final-cta.tsx / footer.tsx
  theme-toggle.tsx      light/dark, persisted in localStorage
  ui/                   section, reveal, button, count-up, confidence-bar
lib/utils.ts            class-name join helper
public/                 logo.svg, logo-mark.svg, favicon.svg, app-icon.svg …
```

## Brand system

All colour, radius and grid values are CSS custom properties on `:root` (light)
and `:root.dark` (dark) in `app/globals.css`, re-exported to Tailwind through
`@theme inline`. To retheme the site, change those variables only:

| Token | Purpose |
| --- | --- |
| `--background` / `--foreground` | page ground and primary text |
| `--muted` | secondary text |
| `--subtle` | hover / inset surfaces |
| `--card` | panel surface |
| `--border` / `--border-strong` | hairlines and emphasised hairlines |
| `--accent` / `--accent-soft` / `--accent-foreground` | the single accent |
| `--signal-for` / `--signal-against` / `--signal-conflict` | analytical semantics only |
| `--radius` | corner radius base |

The accent is used sparingly — active states, confidence, the convergence node.
The three signal colours are reserved for argument stance and contradictions;
they are never decorative.

## Logo

The mark is three vectors approaching from independent directions — two
perpendicular axes and a third angle — converging on a single decision point.
It is drawn from geometry only, so it stays legible at 16px and works in
monochrome on either ground.

- `public/logo.svg` — primary lockup (light backgrounds)
- `public/logo-dark.svg` — primary lockup (dark backgrounds)
- `public/logo-mark.svg` — icon only, accent convergence node
- `public/logo-mark-mono.svg` — icon only, single colour
- `public/favicon.svg` / `app/icon.svg` — 16px-tuned favicon
- `public/app-icon.svg` — 512px app icon
- `components/logo.tsx` — React lockup used throughout the site

## Accessibility & motion

Semantic landmarks, a skip link, visible accent focus rings, a keyboard-driven
decision graph (`role="tablist"` with arrow-key navigation), and labelled
meters for every confidence value. All animation is gated on
`prefers-reduced-motion`.
