# Esports structure refinement — 15 October 2026



Mode: Persuade. Code-led refinement of an established LFX surface. User requested improved Esports hero, Geek Fam team-page structure, centered Ladies nickname cards and concise tournament art plus placement achievements drawn only from the company profile.



Reference: https://www.geekfam.asia/indo/team-id/ and the user screenshot at C:/Users/USER/AppData/Local/Temp/codex-clipboard-b9bf4597-e37b-4483-8e66-16ca4b5b6ecc.png. Reference supplies hierarchy, not brand assets or results. Independent layout assessment identified oversized split/CTA delaying the roster and left captions interrupting the central axis.



THESIS: A centered team directory lets authentic roster photography and names lead.

OWN-WORLD: Retain LFX crimson/ink/navy, Anton/Inter, genuine transparent photographs and static atmosphere. Automatic motion stays disabled.

STORY: Centered hero and division anchors, then Singapore group/heading/roster/coach, then Ladies group/heading/roster and their documented achievement.

FIRST VIEWPORT: Centered OUR TEAMS headline; faint authentic team photography at desktop edges; compact description and wrapping division anchors. Mobile simplifies the banner artwork while keeping static brand accents.

FORM: Constrain rosters to 1000px content width. Three desktop columns, two intermediate/mobile columns, one at 360px; incomplete rows center with flex wrap. Center nickname captions and omit repeated game subtitle when lane role unknown. Niszenav remains separately labeled Head Coach. Ladies names Jessy, Wen, Vanilla, Valerie, Nanaw use supplied asset labels under the user's explicit nickname request; do not infer lane roles.

ACHIEVEMENTS: Only company-profile page 6 WGLC2026 runner-up. On close visual inspection certificate specifies second place at Wargame Ladies Championship Season3, 1–3 September2026. Use WGLC2026 / Juara2. No separate intact tournament logo found; user answered 'coba pake seadanya' to the missing-logo question, authorizing the existing certificate as interim visual. Do not invent a tournament logo or substitute a competitor/MPL/MSPL emblem. Achievement model supports a later verified logo.

FINISH: Build, batched desktop/mobile and responsive/zoom/image/center/anchor checks; independent finish review includes user screenshot as reference; documentation preserves system with narrow supported refinements. Home remains outside scope.


## Current override — 16 October 2026

User requested that the Singapore coach no longer appear and that the team group photograph be composed from individual portraits, overlapping horizontally outward from the center like the Ladies composition. SingaporeLineup.astro now layers the six approved player cutouts in a centered 2:1 frame, with the two middle portraits foremost and the outer portraits slightly smaller. Reused in the Singapore team introduction and decorative Esports hero. The old group photograph containing the coach and the separate coaching figure are no longer rendered. Individual roster cards, Ladies, achievements and static backgrounds remain intact. Source originals are preserved.

## Client-selected MPL player poses — 16 October 2026

Roster card replacements: Caanz_10.png, Nixie_06.png, PEKO_10.png, Saiko_10.png and xSwaypear_08.png. All supplied PNGs retain genuine transparency. The unavailable external xSwaypear path was resolved to the exact filename in the project PNG (8) folder. Original copies and checksums are preserved in docs/sources/mpl/selected-poses/manifest.json. Production copies use alpha-bound trim, upper-body crop and proportional WebP encoding only. Brock retains his existing photo. SingaporeLineup uses the original arms-crossed poses through optional lineupImage so the previously approved group composition is preserved. Coach remains hidden and automatic motion disabled.
