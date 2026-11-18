HANABI — Homepage full image assets & font stability release (18 Nov 2026)

DEPLOYMENT
Upload the CONTENTS of this ZIP to the root of the existing 'hanabi' GitHub Pages repository.
This is a complete website bundle; upload the entire assets/images folder, not just HTML files.
Preserve any existing CNAME and GitHub Pages settings. Do not upload a top-level wrapper directory.
Do not merge with the previous refactored stylesheet package.

IMAGE OWNERSHIP
- All content photos and official logo are referenced via the actual HTML <img src> or <picture><source srcset>.
- CSS controls how images are displayed (object-fit, proportions, sizes, responsive layout).
- Do NOT put content photography into CSS background-image URLs: HTML image references support alt text, SEO, and responsive loading.
- Assets are inside assets/images/. Filenames use a predictable hanabi-<category>-<subject> naming pattern.
- Purely decorative vector imagery that exists as CSS-encoded SVG remains unchanged.
- This bundle preserves all original CSS cascade rules (no CSS refactor).

FONT APPROACH
- Google Fonts preconnect + HTML stylesheet request early in <head>.
- Using font-display=optional to avoid a late, visibly jarring swap of fallback fonts into webfonts on slow connections.
- On slow first visits, a fallback font may remain until a reload; this is a tradeoff. Hosting fonts locally would need font licensing/source verification and real browser QA.

VALIDATION
- Both Traditional and Simplified homepages have all local image references resolved.
- Verify the live HTTPS site after deployment (including iPhone Safari), specifically TOD'S and the homepage hero.
- Browser visual parity must be checked; the static file checks do not prove live rendering.
- Custom domain was not supplied; no canonical / hreflang / sitemap URLs are invented here.

IMAGE FILES
- hanabi-about-tods-4096.webp: 4096x1856, 1398 KB
- hanabi-about-tods-mobile-1440.jpg: 1440x653, 283 KB
- hanabi-crossborder-border-advertising.webp: 1600x900, 192 KB
- hanabi-crossborder-bus.webp: 1599x900, 365 KB
- hanabi-crossborder-high-speed-rail.webp: 1600x900, 80 KB
- hanabi-homepage-hero-mtr.webp: 1600x1066, 385 KB
- hanabi-local-bus-advertising.webp: 1920x1080, 172 KB
- hanabi-local-mtr-advertising.webp: 1920x1080, 816 KB
- hanabi-local-mtr-klook-wall-hero-01.webp: 1920x1080, 816 KB
- hanabi-local-tram-advertising.webp: 1920x1080, 402 KB
- hanabi-official-logo.png: 776x270, 79 KB

NOTE: Local MTR and original Klook image assets were byte-identical and deduplicated to the Klook filename.
