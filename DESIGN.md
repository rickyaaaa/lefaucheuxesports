---
name: Lefaucheux Esports
description: Authentic players, condensed editorial type and layered crimson jersey atmosphere.
colors:
  crimson: "#e2012d"
  crimson-hover: "#ff1744"
  crimson-button-hover: "#c90029"
  ink: "#080808"
  black-russian: "#091022"
  surface: "#121a2e"
  surface-2: "#15151e"
  surface-3: "#1c1d29"
  white: "#fff"
  offwhite: "#f8f8fa"
  pink-watermark: "#f5b0c0"
  text-muted: "#aeb6c7"
  text-dark: "#16171d"
  border-dark: "#ffffff1a"
  border-light: "#0910221f"
typography:
  display:
    fontFamily: "'Anton', sans-serif"
    fontSize: "clamp(54px, 5.4vw, 76px)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "0"
  headline:
    fontFamily: "'Anton', sans-serif"
    fontSize: "clamp(34px, 4vw, 52px)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: ".005em"
  title:
    fontFamily: "'Anton', sans-serif"
    fontSize: "28px"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: ".005em"
  body:
    fontFamily: "'Inter', Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.8
  body-compact:
    fontFamily: "'Inter', Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: "'Inter', Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 700
    letterSpacing: ".08em"
  navigation:
    fontFamily: "'Inter', Arial, sans-serif"
    fontSize: "11px"
    fontWeight: 700
    letterSpacing: ".045em"
  metadata:
    fontFamily: "'Inter', Arial, sans-serif"
    fontSize: "11px"
    fontWeight: 400
rounded:
  control: "2px"
  small: "4px"
  card: "6px"
spacing:
  gutter: "clamp(20px, 4vw, 40px)"
  section: "clamp(64px, 8vw, 112px)"
  grid-gap: "20px"
  compact: "12px"
  medium: "16px"
  stack: "24px"
  large: "32px"
  split: "72px"
components:
  button-primary:
    backgroundColor: "{colors.crimson}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "16px 24px"
    height: "50px"
  button-primary-hover:
    backgroundColor: "{colors.crimson-button-hover}"
    textColor: "{colors.white}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "16px 24px"
  selection:
    backgroundColor: "{colors.black-russian}"
    textColor: "{colors.white}"
    rounded: "{rounded.control}"
    padding: "0 14px"
    height: "52px"
  filter:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    padding: "13px 20px"
    height: "44px"
  filter-selected:
    backgroundColor: "{colors.crimson}"
    textColor: "{colors.white}"
  player-card:
    backgroundColor: "{colors.surface-3}"
    textColor: "{colors.white}"
    rounded: "{rounded.card}"
  goal-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.small}"
    padding: "32px"
  navigation:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    typography: "{typography.navigation}"
  motion-control:
    backgroundColor: "{colors.ink}"
    textColor: "#e8e7ed"
    rounded: "3px"
    padding: "10px 14px"
    height: "42px"
---

# Design System: Lefaucheux Esports

## Overview

**Creative North Star: "Built from passion. Driven by ambition."**

The client's explicit brief establishes a competitive, fearless, premium esports editorial identity. Authentic LFX photography, short uppercase headlines and generous dark surfaces carry the identity; crimson supplies precise emphasis. The current team artwork uses the client originals copied to `src/assets/team/ladies-lineup.png` and `src/assets/team/sg-s12.png`; the latter is labeled official MPL SG S12 artwork, not treated as a current roster database. This documentation records the implemented system, with the supplied `design (1).md` preserved as the source brief. The north star uses the client's existing identity line; no additional qualitative direction is assumed.

The system pairs disciplined layouts with real player cutouts, jersey texture, layered diagonal planes and image-only zoom. Accents and geometry inherit the explicit client brief and the user's subsequent request for richer background accents and animation across content sections, with Nigma Galaxy and Boomhead as visual references. The new artwork uses original SVG geometry and LFX assets. The visible jersey detail is rendered from page 2 of the supplied company profile, not extracted as a new roster portrait. Missing names, roles and current roster details remain unconfirmed; imagery must never imply invented competitive facts. The exact homepage composition remains in `.impeccable/home-brief.md` and the supplied brief, rather than becoming a layout requirement for every page. The authorized extension is recorded in `.impeccable/atmosphere-brief.md`; PDF evidence is recorded in `docs/COMPANY-PROFILE.md`.

**Key Characteristics:**

- Authentic LFX photography and official identity assets.
- Condensed uppercase Anton paired with readable Inter.
- Ink and Black Russian surfaces, a bright division interlude and restrained crimson emphasis.
- Compact controls, subtle borders and stable captions.
- Layered real jersey texture, official logo and original diagonal SVG tracks.
- Static background accents; ambient loops, title entrance and floating motion control disabled at the user’s request.
- Lightweight interaction and visible keyboard focus.

## Colors

The pinned crimson, ink, Black Russian and white palette creates strong editorial contrast. Frontmatter values are normative and retain the implementation's CSS formats.

### Primary

- **LFX Crimson** (`crimson`): primary CTA backgrounds, highlighted headline words, selected filters and animated card rules.
- **Bright Crimson** (`crimson-hover`): keyboard focus rings, navigation hover/current text and selected editorial link hovers. Despite its inherited variable name, it is not the primary button hover fill.
- **Deep CTA Crimson** (`crimson-button-hover`): the primary button's darker hover fill preserves white-label contrast.

### Neutral

- **Ink** (`ink`): sticky header, footer, final CTA and player captions.
- **Black Russian** (`black-russian`): main page background, editorial sections and selection field.
- **Panel Navy** (`surface`): goal cards and inquiry panel.
- **Roster Charcoal** (`surface-2`): division-card base and featured achievement surface.
- **Portrait Charcoal** (`surface-3`): player-card shell.
- **White** (`white`): main dark-surface text and button labels.
- **Offwhite** (`offwhite`): light section background.
- **Pink Watermark** (`pink-watermark`): low-opacity division-section lettering.
- **Muted Slate** (`text-muted`): supporting copy and metadata on dark surfaces.
- **Dark Text** (`text-dark`): headings and links on light surfaces.
- **Dark-Surface Border / Light-Surface Border** (`border-dark`, `border-light`): quiet boundaries on the corresponding surface.

**The Crimson Emphasis Rule.** Reserve crimson for short emphasis, actions and state; use white or muted slate for long copy.

## Typography

**Display Font:** Anton, with sans-serif fallback.
**Body and UI Font:** Inter, with Arial and sans-serif fallbacks.

The actual build self-hosts Anton regular and Inter regular, semibold and bold. Anton's condensed uppercase forms carry short statements; Inter carries paragraphs, navigation, controls and metadata. No separate mono face is implemented.

### Hierarchy

- **Display:** homepage headline, tightly stacked at the frontmatter scale; tablet uses (62px), mobile uses (`clamp(42px,10.8vw,66px)`). Standard page heroes use (`clamp(40px,5vw,70px)`) with (1.1) line height.
- **Headline:** section headings use the normative headline role; component-specific headings vary with their content, including vision at (`clamp(40px,5vw,64px)`).
- **Title:** default card headings use the normative title role. Player captions use (25px), reducing to (19px) at narrow widths; goal titles use (46px).
- **Body:** default paragraphs use the body role with a maximum measure of (70ch). Homepage introduction and supporting sections use the compact body role, including the mobile hero introduction.
- **Label:** uppercase CTA and text-link labels use the label role. Small goal, player and news metadata use the metadata role; goal labels add (.08em) tracking.
- **Navigation:** desktop uses the navigation role; the mobile menu raises text to (14px).

**The Two Voices Rule.** Use Anton for short display statements and Inter for reading and interaction.

## Layout

The main content width is (1200px), with fluid page gutters supplied by the spacing token. The container includes those gutters outside the content width. Sections use the fluid section spacing; stacked copy advances by the stack token. Default editorial splits have two equal columns and the split gap; the usual grid gap is shared by player and division grids.

The homepage retains the client's sequence: hero, origin/about, light divisions, future vision, join CTA, shared footer. It is a surface contract, not a compulsory pattern for other routes. Both teams share the Esports page; its centered hero uses faint authentic team artwork at desktop edges and hides those portraits on mobile. Its centered roster composition remains in `.impeccable/esports-brief.md`; publish approved nicknames while omitting unconfirmed lane roles.

Responsive behavior follows the implemented media queries:

- At (1600px) and above, homepage artwork returns to its full-width alignment.
- At (1099px) and below, navigation collapses to a toggle and the header reduces from (88px) to (76px); homepage hero sizing also adapts.
- At (1024px) and below, shared split gaps tighten to (40px) and player grids become two columns.
- At (900px) and below, the contact layout gap tightens to (40px).
- At (767px) and below, splits, news and division grids become single columns; section padding becomes (64px). The homepage hero places readable copy, then a normal-flow art region with aspect ratio (1.8), then its division link. Its former large absolute art spacer is overridden.
- At (600px) and below, player captions tighten and division cards become taller.
- At (360px) and below, the player grid becomes a single column.

Header-aware anchors use a (100px) scroll offset. Empty states are real bordered editorial panels. Retain content visibility and wrapping before preserving a fixed desktop composition.

Background layers live inside isolated, positioned section wrappers with clipped overflow; content containers sit above them. The homepage atmosphere sits inside its artwork region behind the genuine Ladies cutouts, preserving readable copy and the existing mobile flow. At the mobile breakpoint, SVG lines widen to (180%) and shift left (-80%), the jersey texture starts at (15%) with lower opacity, and the oversized mark is pushed toward the edge. These decorative layers never occupy document flow or receive pointer events.

## Elevation & Depth

The authorized extension creates layered depth through real jersey texture, low-opacity official marks, original crimson planes, tracks, brackets and registration crosses. Tonal surfaces, fine borders and photographic gradients still establish the foreground hierarchy. The standard background texture is faint (.11 opacity), the mark quieter (.035), and the diagonal plane faint (.065); stronger arena variants raise these selectively while the light interlude stays pale. Player and division images continue to zoom within fixed frames while captions remain stable. There is no ambient glow system. Functional shadows separate the expanded mobile menu (`0 16px 24px #0005`).

**The Background Hierarchy Rule.** Keep atmosphere behind readable content and authentic player faces; vary its material by section without changing the pinned palette.

**The Stable Caption Rule.** Animate the image and crimson rule while keeping the caption and card frame stationary.

## Shapes

Compact controls have slightly softened corners; small surfaces and division cards use the small radius, and player shells use the card radius. Thin rectangular outlines, offset image frames and skewed edge outlines echo the client's angular composition. The shared atmosphere adds a forward diagonal plane, parallel tracks, opposing corner brackets and three small registration crosses. These are original SVG and CSS geometry grounded in the jersey and official mark, placed around real imagery. The join and inner-page outlines remain as supporting accents with reduced emphasis. Decorative geometry never replaces player photography.

## Components

### Buttons

Primary links are compact, uppercase crimson actions with white text, a minimum height of (50px), and (32px) between label and arrow. The arrow shifts (4px) on hover while the fill darkens. Secondary actions have a transparent fill and a quiet white border, which turns crimson on hover. All interactive elements inherit the visible focus ring (3px) with offset (5px). Buttons navigate or open email; no unsupported submit state is established.

### Selection and filters

The inquiry selector is a native, labeled select with navy fill, white text, a thin white border, full available width and a height of (52px). It changes the email inquiry subject. No custom dropdown, error or disabled visual vocabulary is implemented. News filters are square bordered controls with minimum height (44px); hover and `aria-pressed="true"` share the crimson selected treatment.

### Cards / Containers

Player cards contain official portraits on a subtle photographic background, a centered ink nickname caption and a fine border. The photo frame retains its scoped gradient (`linear-gradient(145deg,#271822,#171a28)`); the atmosphere extension adds a faint diagonal overlay and fine crimson top border without changing that fill. The frame uses aspect ratio (3/3.6); the caption has (24px) padding, tightening on mobile. Show role metadata only when confirmed. Hover changes the border, scales only the portrait to (1.055) and reveals a bottom rule.

Achievement cards share one component across Esports and Achievements. They center contained, verified tournament artwork above an Anton event/year heading and an Inter placement label, with optional division metadata. The figure is limited to (380px); the artwork frame is (240px) high, reducing to (210px) on mobile. Preserve the artwork's aspect ratio and legibility. A user-approved source certificate can stand in when a verified tournament logo is unavailable; never invent a logo or result to complete the pattern. Event identity and placement come from the shared evidence-backed data record.

Division cards link to the two team anchors on one page. Artwork receives a lower gradient for caption readability; hover scales the image to (1.05) and reveals a crimson rule. The Ladies composite uses containment to preserve the real cutouts. Goal cards retain their scoped Panel Navy fill, quiet border, low-opacity oversized lettering (`#ffffff05`) and short crimson rule that extends on hover. News cards are editorial rows with top borders and optional real cover imagery, rather than raised tiles.

### Jersey Showcase

The Services gallery pairs the authentic MPL SG S12 poster with Home and Away front/back design references in an asymmetrical two-column split (.82fr / 1.18fr), stacking at (767px). Contained images preserve the original white design canvases; charcoal figure shells use the existing small radius (4px). Stable captions pair Anton titles (22px, reducing to 20px on mobile) with muted Inter metadata (11px). Source provenance is recorded in `docs/sources/drive/manifest.json`, with the surface contract in `.impeccable/jersey-brief.md`. The artwork supports an inquiry about availability, sizing and pricing; it establishes no ecommerce, price or stock promise.

### Navigation

The sticky ink header uses compact uppercase links. Current and hovered links become Bright Crimson; the desktop current route also receives a crimson underline. Join Us has a quiet outlined treatment. Below the collapse breakpoint, a labeled toggle exposes a scrollable full-width menu with larger links. The menu closes on Escape, outside click or link activation; Escape returns focus to the toggle. Breadcrumbs remain quiet Inter text.

### Atmosphere

The shared background component has four implemented variants:

- **Signal:** a faint jersey crop, quiet official logo and original diagonal linework, with a short static crimson trace along the main track.
- **Weave:** full-width masked jersey material, mirrored linework, no visible logo and no moving trace; used behind editorial passages, roster sections and the footer.
- **Arena:** stronger jersey texture, plane and official mark; used in page heroes, vision and the closing CTA. The homepage hides its background logo to protect the genuine team composition.
- **Light:** pale geometry on the offwhite division interlude; texture, logo and moving trace are omitted.

The jersey source is `src/assets/brand/jersey-detail.png`, a visible crop rendered from company-profile page 2. Astro emits a width-(1000px), quality-(75) WebP of approximately (17.9kB). The logo comes from the existing official asset. All layers are decorative and hidden from assistive technology. Static low-opacity linework remains visible when motion is unavailable.

### Motion and accessibility

Ambient animation and the one-time homepage title entrance are disabled at the user’s request (15 October 2026). All atmosphere variants are static; the decorative trace keeps offset (35). The Pause/Resume control is not mounted in the shared layout, and no observer or session-storage script is shipped for it. Its component source is retained only for a possible future reactivation.

Original hover feedback remains: fast state transitions (180ms), rules and borders (350ms), image zoom (600ms), and editorial row hover (250ms). Reduced-motion support still removes smooth scrolling and reduces these transitions. Text, navigation and decorative accents remain available without JavaScript.

The homepage Divisions heading and LEFAUCHEUX watermark share the container centerline at all widths. The additional Explore our teams CTA is removed; both division cards remain links to their team anchors.

**The Available Content Rule.** Keep content readable on initial load, without JavaScript, while paused and under reduced motion; animation is an enhancement.

## Do's and Don'ts

### Do:

- **Do** use the pinned crimson, ink, Black Russian, white, Anton and Inter identity.
- **Do** use official LFX imagery and keep unconfirmed roster details visibly pending.
- **Do** preserve stable captions while zooming only the image.
- **Do** preserve the supplied homepage sequence in its surface contract.
- **Do** keep keyboard focus visible and honor reduced motion.
- **Do** use the shared atmosphere variants to give sections depth while keeping copy and player faces clear.
- **Do** keep backgrounds static and the motion control absent until the user requests reactivation.

### Don't:

- **Don't** invent player names, roles, sponsor marks or achievement claims.
- **Don't** introduce fake badges, neon everywhere, heavy glassmorphism, gamer stock renders or purple/cyan cyberpunk motifs.
- **Don't** use crimson for long paragraphs.
- **Don't** replace authentic player artwork with decorative geometry or generated players.
- **Don't** turn future goals into achieved-result badges.
- **Don't** copy competitor brand assets or let background movement hide content.
- **Don't** run traces offscreen, on hidden pages or against the user's motion preference.



## Client revisions — 19 October 2026

- The final Ladies portrait is Mesa (client correction); its original source filename remains unchanged.
- Services offers custom jerseys for teams, communities, organizations and individuals. Existing LFX artwork remains a portfolio example.
- Homepage partners appear between Divisions and Vision. ISH Transportation is credited as Transportation Partner for LFX MPL SG S12. Arfer Studio appears separately as Partner with client-supplied Instagram and TikTok links; its YouTube URL is pending. Official logos retain their colors and proportions, contained on black (ISH) and white (Arfer) surfaces for legibility.
- The compact partner heading uses clamp(30px, 3vw, 38px); partner names use 28px desktop / 22px mobile, both Anton. These are intentional compact partner typography steps.
- A global WhatsApp anchor targets the confirmed business number, stays fixed at the lower right, and uses white on #087f45 (hover #066638). Green distinguishes the messaging service from LFX primary actions; no repeated animation. Target size is 56px desktop / 52px mobile, with safe-area offsets and keyboard focus. Header/menu layer stays above it. Footer bottom space reserves room beneath the copyright.
- Homepage GSAP and its reduced-motion behavior are unchanged. New partner and contact components are visible without JavaScript.
