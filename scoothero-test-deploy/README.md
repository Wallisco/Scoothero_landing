# ScootHero Landing — Test Deploy

Two pages, one assets folder. Everything self-contained; missing images fall back
gracefully (wordmarks/hidden blocks), so the site is fully testable as-is.

## Fastest dummy URL (5 minutes, no Git): Netlify Drop
1. Go to https://app.netlify.com/drop  (free account, sign in with GitHub/Google)
2. Drag this WHOLE folder (not the zip) onto the page
3. You get an instant URL like https://random-name-123.netlify.app
4. Share it with the team. Re-drag the folder anytime to update.

## Alternative (familiar pattern): Render Static Site
1. Push this folder to a GitHub repo (e.g. Wallisco/scoothero-landing)
2. Render → New → Static Site → connect repo → publish directory: /
3. URL: https://<name>.onrender.com — free, never sleeps

## What works on the test URL
- All tabs, smooth scrolling, page-to-page links (index <-> about)
- Fleet type switcher, savings calculator, animated counters
- HubSpot form (portal 148678580, eu1) — test submissions land in HubSpot for real
- WhatsApp button, mobile tab strip

## Known gaps on the test URL (intentional, fine for click-through testing)
- Partner logos show as text wordmarks (logo files pending clearance)
- Hero/station/lifestyle photos hidden (brand asset files from original build zip)
- Coverage map shows the "check my zones" fallback (public map URL pending)
- Proof counter numbers are placeholders — replace before any public traffic

## Before REAL traffic (not needed for testing)
- GA4 / Meta Pixel / LinkedIn tags in both pages
- Real counter numbers, TDT quote sign-off, verified specs
- Custom domain (get.scoothero.co.za) via CNAME in Wix DNS
