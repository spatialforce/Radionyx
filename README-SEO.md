# Radionyx — SEO Rebuild Notes

This is your original site rebuilt around the SEO plan: real per-topic pages
instead of one homepage trying to rank for everything, plus the metadata
infrastructure to support it.

## What changed

**New pages / routes**
- `/services/:slug` — individual pages for GIS Analysis, Remote Sensing,
  Cartography, Spatial Modelling (`ServiceDetail.tsx`)
- `/solutions` — Land & Agriculture, Environment & Conservation, Water
  Resources, Urban & Regional Planning (`Solutions.tsx`)
- `/policies` — was linked in the footer but had no route; fixed
- `/*` — a proper noindexed 404 page instead of a blank screen

**SEO infrastructure**
- `src/Assets/components/SEO.tsx` — sets `document.title`, meta description,
  robots, canonical URL, Open Graph/Twitter tags and JSON-LD per route.
  Added to every page.
- `src/Assets/lib/schema.ts` — JSON-LD builders: Organization, WebSite,
  Service, BreadcrumbList, FAQPage.
- `src/data/site.ts` — added `siteUrl`/`siteName`, per-service
  `metaTitle`/`metaDescription`/`intro`/`useCases`, and a `solutions` dataset.

**Content**
- Homepage H1 changed to "GIS Services in Zimbabwe" (was a run-on sentence
  with a typo). Your brand line moved to a supporting line, not the H1.
- Each service teaser on the homepage now links to its own page instead of
  just the `/services` index.

**Files that were missing from the uploaded `src`-only zip**
These aren't SEO per se, but the site won't build or style correctly
without them — I added minimal working versions so you can confirm
everything typechecks and builds (`npx vite build` succeeds):
- `package.json`, `vite.config.ts`, `tsconfig.json`
- `tailwind.config.js`, `postcss.config.js` — **without these your Tailwind
  classes don't compile at all** (verified: CSS output was 0.06kB without
  them, 23.88kB with them)
- `index.html` — static fallback `<title>`/meta tags for crawlers and
  social previews that don't run JS, plus your app's mount point
- `public/robots.txt`, `public/sitemap.xml`
- `public/_redirects` (Netlify) / `vercel.json` (Vercel) — SPA fallback so
  deep links like `/services/gis-analysis` don't 404 on a hard refresh

If you already have real versions of these files (especially `package.json`
with your actual dependency versions), keep yours and just merge in the
Tailwind/SEO-related pieces.

## Before you launch — update these placeholders

1. `siteUrl` in `src/data/site.ts` — currently `https://www.radionyx.co.zw`,
   set to your real domain.
2. `og-image.jpg` — referenced in `SEO.tsx`/`index.html` but doesn't exist
   yet. Add a real 1200×630 image to `public/og-image.jpg`.
3. `favicon.png` — referenced in `index.html`, add to `public/`.
4. `sameAs` in `organizationSchema()` (`schema.ts`) — add your real social
   profile URLs once they're live (currently placeholder `#` links in
   `socialLinks`).
5. Register the site in **Google Search Console** and submit
   `https://yourdomain/sitemap.xml` once it's live.

## One honest limitation

This app renders entirely client-side (no server-side rendering or static
prerendering). The `SEO.tsx` component injects tags via JavaScript after
the page loads — Googlebot generally executes JS and will see them, but:
- Social media crawlers (Facebook, Twitter/X, LinkedIn, WhatsApp link
  previews) often **don't** run JavaScript, so they may only see the
  static fallback tags in `index.html`, not the per-page ones.
- First paint of the correct title/description is delayed by a frame.

For the most reliable indexing and correct social previews on every page,
the next step (a separate project) would be adding static prerendering
(e.g. `vite-plugin-ssr`, `vite-plugin-prerender`) or moving to a framework
with SSR/SSG (Next.js, Astro). What's shipped here gets you correct,
crawlable metadata for a client-rendered React app — it just isn't a
substitute for pre-rendered HTML if that becomes a priority later.
