# ScootHero — Multi-Page Site (v2)

10 pages, shared styles.css, assets folder. Deploy the WHOLE folder.

Pages: index (home: hero, client carousel, explore cards, proof counters,
case study, partner carousel, milestones) · who-its-for · vehicles ·
marketplace (fleet management + driver marketplace, beta) · financing ·
savings (calculator) · coverage (address checker) · sector-data · about · demo (HubSpot form)

## Deploy on Render
1. Push this folder to GitHub (repo root = these files, index.html at top level)
2. Render -> New -> Static Site -> connect repo -> Publish Directory: .
3. Done. Every git push auto-deploys.

## Still placeholder (all degrade gracefully)
- Partner/client logos (assets/logos/*.png) -> show as text until files added
- Proof counter numbers on home -> replace data-target values with real numbers
- TDT case study quote -> needs sign-off
- Coverage checker SWAP_STATIONS array -> replace with real station list
- Brand photos (logo-navy.svg, hero-ct.jpg, station-1.jpg, etc.) from original asset pack

## Before public launch
Remove <meta name="robots" content="noindex"> from all pages (added so the
test site stays out of Google).
