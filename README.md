# lefaucheuxesports

Static Astro 7 website with strict TypeScript, custom CSS, self-hosted Anton/Inter, local LFX media and minimal browser JavaScript. No WordPress runtime or external media hosting dependency.

## Run locally

Requires Node.js 22.12+ (Node 24 LTS recommended) and npm.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

The dev URL is printed by Astro (normally http://127.0.0.1:4321). `build` runs Astro diagnostics before generating `dist/`. `npm run check` runs diagnostics alone. Commit `package-lock.json`; installation versions are locked there.

## Routes

`/`, `/profile/`, `/esports/`, `/achievements/`, `/news/`, `/tournaments/`, `/services/`, `/join-us/` and `/404.html`. Both MLBB divisions share `/esports/`, with `#mpl-sg` and `#id-ladies`. No separate division routes exist. `/news/[slug]/` is a working static-generation template: detail pages are generated only for approved published articles. The included editorial guide is a draft and does not ship.

## Company profile and visual atmosphere

The user-supplied company profile is preserved at `docs/sources/lfx-company-profile.pdf`; `docs/COMPANY-PROFILE.md` records verified facts with page references. These files are project memory and are not part of the public build. Staff publication approval and unconfirmed roster details are still separate requirements.

Reusable background layers live in `src/components/Atmosphere.astro` (`signal`, `weave`, `arena`, `light`) and `src/styles/atmosphere.css`. The jersey texture is sourced from the visible page-2 PDF figure. Ambient animation and the homepage title entrance are disabled at the user’s request. `MotionControl.astro` is retained as inactive source but is not mounted or bundled by the layout. All background accents remain static, with or without JavaScript. No animation dependency or autoplay video is used.

## Edit content

- **Players:** `src/data/content.ts`. Import local portraits from `src/assets/players/`; use `nickname` and `role` only when approved. Use `status: 'pending'` for unconfirmed metadata and leave those fields absent. `published` controls portrait visibility, `sortOrder` controls ordering. Current cards show truthful division labels. Add Singapore records only after obtaining approved photos and metadata, then render the same `PlayerCard` component in that division.
- **Achievements:** add typed records to `achievements` in `src/data/content.ts`; preserve an internal `sourceNote` explaining the evidence. Publish only verified results. Vision goals live in `Vision.astro` and must never become results.
- **News:** add a Markdown file to `src/content/news/`. Frontmatter must include `title`, `description`, `pubDate`, `category` (Teams/Sponsors/Collaboration/Partnership), and `draft`. Optional local `cover` requires `coverAlt`. Set `draft: false` after approval. Both drafts and future-dated articles are excluded. Rebuild on/after the actual publication date. Markdown bodies render through Astro's collection renderer. Related articles share the same category.
- **Events, overlays, casters:** use the typed arrays in `src/data/content.ts`. Regions are SG, MY and ID. Do not add placeholder schedules or portfolio items. Images are local Astro `ImageMetadata` imports.
- **Website tiers:** Basic, Standard and Premium are typed records in `src/data/content.ts`. Features and `priceLabel` remain absent until approved.
- **Contact and navigation:** `src/data/site.ts`. The interest selector has a fixed allowlist; package CTAs preselect it with `?interest=website-basic` etc.
- **Design:** tokens and shared utilities in `src/styles/global.css`; component styles are scoped. `DESIGN.md` records the implemented system. Original client specifications are retained unchanged.

## Replace media

The user-provided Drive import is preserved under `docs/sources/drive/`. Its [inventory](docs/sources/drive/README.md) and `manifest.json` record eleven untouched originals, source IDs, file sizes, dimensions and SHA-256 checksums. `src/assets/jerseys/` contains the three production copies displayed by `JerseyShowcase.astro` in Services. Two distinct `Nanaw.jpg` files remain distinguished by Drive ID; do not infer player names or roles from either filename. Run `node scripts/qa-jerseys.mjs` against the production preview on port 4322 for the focused gallery and original-file checks.

Use approved originals, retain person/jersey identity and update the import plus alt text. Astro builds responsive WebP variants with explicit intrinsic dimensions. Preserve transparency for player cutouts. Update `ASSET-INVENTORY.md` and `src/assets/provenance.json` when sources change. Also update `public/favicon.webp` and `public/assets/og-lfx.webp` if the logo changes. No shipping images depend on `/wp-content/`.

## Contact delivery

The site uses `mailto:lefaucheux.esports@gmail.com` and `tel:+6587763403`, from the supplied PRD. The inquiry button opens the visitor's mail app with a selected topic; it does not submit a form or claim successful delivery. Visitors can copy the visible email if they have no mail client. No environment secrets are required. Social handles are shown as text until final profile URLs are verified.

For a future web form, select a real provider, configure its endpoint/server adapter and server-side secret, validate submissions, handle provider failures, add approved privacy/consent copy and test delivery to the real inbox before exposing a submit button. Never put provider secrets in browser code or `PUBLIC_` variables. Adding server endpoints would change this project's static-only deployment.

## Verification

`npm run build` must pass before deployment. `scripts/qa.mjs` checks all nine static pages at 360, 390, 768, 1024, 1440 and 1920px, internal links/anchors, image loading, H1 counts, mobile navigation/Escape, hover stability, reduced motion, news filters and safe inquiry preselection. It uses Playwright and locally installed Chrome at the Windows path in the script; change `executablePath` for another OS. Start a server, then run:

```sh
node scripts/qa.mjs
# Optional alternate server:
# QA_URL=http://127.0.0.1:4322 node scripts/qa.mjs
```

The QA report is written to `.impeccable/review/` (ignored). For clean desktop/mobile screenshot evidence, serve the production build on port 4322 and run `node scripts/capture.mjs`. That script awaits fonts, image decoding and the full-document viewport paint before capturing. Lighthouse scores and field Core Web Vitals require separate measurement; no scores are implied by these checks. Full-page screenshot fidelity against the original approved Elementor screenshot cannot be established until that source is supplied.

## Deploy to Hostinger / public_html

Git integration setup is documented in [docs/HOSTINGER.md](docs/HOSTINGER.md).
The `Build Hostinger website` workflow publishes compiled `dist/` files to the
`hostinger` branch. In hPanel's PHP/HTML Git integration, select that branch;
`main` contains source code and is not a ready-to-serve document root.

1. Use a staging domain first. In `astro.config.mjs`, set `site` to the final canonical domain; update `public/robots.txt` when changing domains. Use a matching `base` if hosting in a subdirectory. Build again.
2. Back up the existing **WordPress files, database, uploads, server rules and all public URLs** outside `public_html`. Record a tested rollback procedure. Never remove the only backup.
3. Upload the **contents** of `dist/` to the staging site's document root. `index.html`, `_astro/`, assets and sitemap files must be directly inside that root.
4. Configure Apache/LiteSpeed `ErrorDocument 404 /404.html`. Use directory index serving so `/profile/` loads `profile/index.html`; no SPA fallback is needed. Ensure a missing URL returns HTTP 404. Test direct URLs and refresh.
5. Review content with LFX: current roster, original result evidence, goals, contact info, package details, imagery permissions and optional management approval. Obtain preview approval before production cutover.
6. Export the real WordPress URL list. Map changed slugs to the closest relevant route with explicit **301** redirects in the host control panel or `.htaccess`. Do not blindly redirect every missing URL to the homepage. Keep old media paths only where intentionally preserved or redirected. Avoid redirect loops and leave the new paths accessible.
7. After approval, move backed-up WordPress files out of the active root and upload the built files. Replace WordPress routing rules with the reviewed static/redirect rules. Do not leave an old `index.php` taking precedence over `index.html`.
8. Verify HTTPS, canonical URLs, OG images, robots, sitemap, 404 status, email links, navigation, anchors and mobile layouts. Submit `sitemap-index.xml` to Search Console. Cache immutable hashed `_astro/` files aggressively; keep HTML caching short enough for updates.
9. Roll back by restoring the backed-up files/database/server rules if acceptance checks fail. Preserve the Astro build and URL mapping for diagnosis.

Production has **not** been replaced or deployed by this implementation. Missing approvals/assets are listed in `ASSET-INVENTORY.md`.

## Client MPL portrait sources

The 15 October 2026 delivery is indexed at `docs/sources/mpl/manifest.json`, including checksums for all eight ZIP archives and the 77 PNG entries. Eight selected originals are preserved unchanged under `docs/sources/mpl/`; the remaining pose variants stay in the original Downloads ZIPs. Production WebP crops live in `src/assets/players/mpl/` and `src/assets/team/mpl-team.webp`, with origin sidecars. User-approved filename nicknames populate the Singapore roster in `src/data/content.ts`; lane roles and current seasonal lineup remain unconfirmed. Niszenav is displayed separately as Head Coach, supported by company-profile page 5. Source archives and internal manifests are never served from `public/`.

## Repository contents

This repository contains the website source, lockfile, required production media and project documentation. Original client photo deliveries, internal company-profile evidence, local secrets, dependencies and generated builds stay local and are excluded by `.gitignore`. Run `npm ci` and `npm run build` after cloning.
