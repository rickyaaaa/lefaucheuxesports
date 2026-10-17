# LFX asset inventory

Inventory date: 14 October 2026. Source documents: `prd (8).md`, `design (1).md`, `codex_prompt.md` and the pasted attachment. The original build began without the company PDF. The user subsequently supplied Profile TEAM For Website (2).pdf; all 12 pages were read and visually inspected, with a preserved copy at docs/sources/lfx-company-profile.pdf and page-referenced memory at docs/COMPANY-PROFILE.md. The Drive import now provides jersey design originals and an official S12 product poster. Approved Elementor screenshots remain unavailable. Three original PNG files appeared in the project root during implementation and were visually inspected. The supplied PDF now directly supports the founding story, identity, goals, WGLC result, created event and contact details.

Shipping imagery uses visually inspected official downloads and client-provided originals. No replacement identities or competitor assets were created. Asset origins are also recorded in `src/assets/provenance.json`.

| Local asset | Official media filename | Use |
| --- | --- | --- |
| `src/assets/brand/lfx-logo.webp` | `Logo-LFX-Merah-dengan-LEFAUCHEUX.webp` | Header, footer, favicon and social image |
| `src/assets/players/jessy.webp` | `jessy.webp` | Ladies portrait |
| `src/assets/players/wen.webp` | `wen.webp` | Ladies portrait |
| `src/assets/players/vanilla.webp` | `vanilla.webp` | Ladies portrait |
| `src/assets/players/valerie.webp` | `valerie.webp` | Ladies portrait |
| `src/assets/players/nanaw.webp` | `nanaw.webp` | Ladies portrait |
| `src/assets/team/ladies-lineup.png` | Client original `Potret Tim Esports Putri Berlima.png`; official web version `Potret-Tim-Esports-Putri-Berlima.webp` | Ladies composite matching the five supplied portraits |
| `src/assets/team/sg-s12.png` | Client original `Salinan dari ROSTER.png` | Official MPL SG S12 artwork; treated as promotional art, not a current player database |

Base URL for official filenames: `https://lefaucheuxesports.com/wp-content/uploads/2026/10/`.

Additional Singapore/Ladies posters and a technical background were inspected; unused downloads were removed. The client original `Salinan dari We Are Ready AFSL S1.png` was also inspected and retained in the root; its player artwork is not used to guess display names or new results. Unrelated stock images and template sponsor logos in the WordPress media library were excluded. Original client root files are preserved unchanged.

## Added company-profile asset

`src/assets/brand/jersey-detail.png` is the visible jersey-detail figure rendered from page 2, PDF crop (820,535,1340,745) at 144 DPI. Used only as a decorative background texture and optimized to WebP at build time. The full PDF and internal memory are not served publicly.

## Outstanding approvals and assets

- Confirm competitive display names and roles for the five portrait records; do not infer them from filenames or reconcile conflicting poster text by guessing.
- Additional original Ladies portrait received under a duplicate Nanaw filename; identity and roster status remain unconfirmed. A corresponding approved transparent cutout remains pending. Complete standalone Singapore portraits are now available from the client MPL ZIP delivery.
- Approved homepage screenshots for fidelity comparison.
- Approved management/staff publication permission remains pending except Niszenav, supplied and approved with the MPL roster assets; Head Coach is supported by company-profile page 5.
- Home/Away design originals and the S12 jersey poster are now available and displayed as artwork. Current sizing, availability and prices remain unconfirmed.
- Website package scope, features and prices.
- Additional results, event dates, overlay examples and caster profiles.
- Approved news stories and real publication dates.
- Confirm outbound social-profile URLs. Handles from the PRD are displayed as text pending verification.
- Optional form provider and privacy terms. Current contact flow uses actual email and phone links.

## Google Drive import — 14 October 2026

11 original images downloaded from the user-provided folder and preserved at `docs/sources/drive/`. See `docs/sources/drive/README.md` and `manifest.json` for per-file source links, exact sizes, dimensions and SHA-256 checksums. Selection: two logo variants, six portrait originals (including two distinct Nanaw.jpg files), Home/Away jersey designs and an official MPL SG S12 jersey poster. Three jersey copies in `src/assets/jerseys/` are used by `JerseyShowcase.astro`; Astro optimizes them locally. Original filenames never become inferred competitive names.

## Client MPL ZIP delivery � 15 October 2026

Eight ZIPs contain 77 PNGs. User explicitly approved filename nicknames: Brock, Caanz, Nixie, PEKO, Saiko, xSwaypear and Niszenav. Six player portraits now appear in Esports, with Niszenav separately as Head Coach; a new team group photograph replaces the historical S12 poster on this route. Player lane roles, starting lineup and current season remain unconfirmed. The historical Home poster is unchanged.

Selected original pose-02 PNGs and the group photo are preserved unchanged in `docs/sources/mpl/`; `manifest.json` records archive checksums and every file entry. Shipping copies in `src/assets/players/mpl/` and `src/assets/team/mpl-team.webp` preserve alpha and use faithful upper-body crops/proportional resizing. Embedded origin sidecars record the transformations. Production originals total about 1.37 MB before Astro responsive optimization. All automatic motion remains disabled.

Brock is displayed exactly as approved; the historical poster's Brockie alias is not reconciled by inference. No Albird standalone photograph was delivered, so no image or new roster status is inferred. Other Ladies nickname approvals remain outstanding.

## Esports structure and Ladies names — 15 October 2026

Latest user request authorizes showing supplied Ladies nicknames: Jessy, Wen, Vanilla, Valerie and Nanaw. This supersedes earlier missing-name notes for these five portraits only. Lane roles and the additional duplicate-name Drive portrait remain unconfirmed.

`src/assets/achievements/wglc-certificate.webp` faithfully encodes the complete certificate figure (PDF page 6, X14.png, 972x702). Close visual inspection reads: second place at Wargame Ladies Championship Season 3, 1–3 September 2026. Public caption remains concise: WGLC2026 — Juara2. No intact separate tournament logo was available in the PDF or verified search; user explicitly answered “coba pake seadanya”, permitting the existing certificate artwork as the interim visual. No substitute tournament logo or unsupported Singapore results are published. The achievement data model accepts a future verified logo without changing the layout.

## Singapore group composition — 16 October 2026

`SingaporeLineup.astro` composes the six authentic approved MPL player cutouts directly in HTML/CSS with their original alpha contours. No new raster or generated identity is created. The group is centered and layers outward from the middle pair. Reused in the Esports introduction and hero. `mpl-team.webp` and the Niszenav portrait are no longer imported/rendered; originals remain preserved. User explicitly requested that the coach no longer be shown.

## Client-selected MPL player poses — 16 October 2026

Roster card replacements: Caanz_10.png, Nixie_06.png, PEKO_10.png, Saiko_10.png and xSwaypear_08.png. All supplied PNGs retain genuine transparency. The unavailable external xSwaypear path was resolved to the exact filename in the project PNG (8) folder. Original copies and checksums are preserved in docs/sources/mpl/selected-poses/manifest.json. Production copies use alpha-bound trim, upper-body crop and proportional WebP encoding only. Brock retains his existing photo. SingaporeLineup uses the original arms-crossed poses through optional lineupImage so the previously approved group composition is preserved. Coach remains hidden and automatic motion disabled.

## Home Our Divisions photo — 16 October 2026

User selected LFX_Team_05.png for the MPL Singapore division card on Home. Production copy: src/assets/team/mpl-home-05.webp, faithful alpha-bound trim and proportional resize to 1439x1600. The card contains the complete photograph so all faces remain visible. Original preserved at docs/sources/mpl/LFX_Team_05.png, with SHA-256/source metadata in home-team-05.json. This replacement is limited to the requested Home division card.
