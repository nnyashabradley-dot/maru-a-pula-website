# Maru-a-Pula School Website — Project Roadmap

**Status:** 13 pages live and cross-linked (About, Academics + 7 subject pages + Lower/Upper School, Admissions, Community & Arts + Community & Service + Maitisong & the Arts, Alumni, News, Contact, Shop) plus the homepage.
**Approach:** Design pages first, wire them together as they go, make them functional last.

Last updated: reflects everything shipped through the Shop rebuild with the real 50th Anniversary catalog.

---

## PHASE 1 — DESIGN (build every page's look & feel)

### 1.1 Core pages

| # | Page | Status | Notes |
|---|------|--------|-------|
| 1 | **Admissions** | ✅ Done | Process, requirements, key dates, fees/OVC scholarships, Open Day CTA |
| 2 | **Academics** | ✅ Done | Hub + Lower School + Upper School + 7 subject detail pages (Sciences, Maths, Humanities, Languages, Arts, Life Skills, Computer Science) |
| 3 | **About / Our Story** | ✅ Done | History, Deane Yates, mission, timeline, Golden Jubilee |
| 4 | **Contact** | ✅ Done | Department directory, map embed, visual contact form, office hours |

### 1.2 Secondary pages

| # | Page | Status | Notes |
|---|------|--------|-------|
| 5 | **Student Life** | ❌ Not built | Boarding houses, daily routine, clubs, sport, student leadership — currently only a gallery caption on the homepage |
| 6 | **Community & Service** | ✅ Done | Weekly service requirement, Old Naledi, SOS Children's Village, Harvard/Juilliard/Princeton-in-Africa partnerships |
| 7 | **Maitisong & The Arts** | ✅ Done | Theatre, Maitisong Festival, marimba band, Music/Drama/Visual Art |
| 8 | **News** | ✅ Done | News grid + a working **interactive events calendar** (month nav, 17 dated 2026 events, category legend, upcoming list) |
| 9 | **Events Calendar** | ✅ Done | Folded into News rather than a separate page — covers the original goal |
| 10 | **Alumni** | ✅ Done | Own top-level nav item; Overview, What's New, Stories, Mentorship & Speaker Series, Registration, OVC Mentorship, Giving, Update Form, Contact |
| 11 | **Donate** | ❌ Not built | Still a `#` placeholder in nav and footer everywhere |
| 12 | **Shop** | ✅ Done | All 34 real products from MaP's actual 50th Anniversary collection, real prices, real (cropped) photos, working cart drawer with quantity/remove and localStorage persistence |

**Community & Arts** was also added as a hub page linking Community & Service + Maitisong & the Arts — not in the original plan, but ties those two together cleanly.

### 1.3 Utility pages

- [ ] **Sign In** — Parents / Students / Teachers & Staff links in the "Apply Now" dropdown still go nowhere (`#`)
- [ ] **Search results** page — search bar exists in the header but doesn't return anything (`onsubmit="return false"`)
- [ ] **404 / Page not found**
- [ ] **Privacy Policy**, **Accessibility**, **Safeguarding / Child Protection**
- [ ] **Careers / Vacancies**

### 1.4 Design system cleanup

- [ ] Extract shared CSS into one `styles.css` — still repeated in every file's `<style>` block
- [ ] Extract header + footer into reusable includes — still duplicated per page (no build step/templating in this repo)
- [ ] Document design tokens (colors, fonts, spacing) in one place
- [x] Checked at mobile/tablet/desktop widths as pages were built, including a real mobile calendar-overflow bug fix
- [ ] Full accessibility pass (contrast, focus states, alt text audit, screen-reader labels) — done ad hoc per page, not systematically

---

## PHASE 2 — CONNECT

- [x] Every built page has a real filename and lives in nav + subnav + footer
- [x] Nav is consistent site-wide: About | Academics | Community & Arts | Alumni | News | Contact | Donate
- [ ] **Donate** is the last real placeholder link left in the main nav — everything else routes somewhere real
- [ ] Sign-in portals and search still dead-end at `#`
- [x] Breadcrumbs on all deeper pages
- [x] "Explore more" / related-page links at the bottom of most pages
- [x] No dead ends on any *built* page — every link either goes somewhere real or is a known, flagged placeholder (draft-notes mark these in the page itself)

---

## PHASE 3 — CONTENT & ASSETS

- [ ] Get the official logo file — still hot-linked from `maruapula.org`, with an SVG fallback if it 404s
- [ ] Get real photography for the rest of the site — still hot-linked from `maruapula.org` (fragile, as originally flagged)
- [x] **Shop images are self-hosted** under `/assets/shop/` — cropped from real product screenshots, first self-hosted images on the site
- [ ] Self-host the *rest* of the site's images
- [ ] Alt text audit — present on most images, not verified everywhere
- [ ] Replace placeholder copy with school-approved text — every new page has `draft-note` callouts flagging exactly what needs confirming (service placements, staff names, dates, prices, etc.)
- [ ] Verify every fact/statistic with the school — same draft-note convention used throughout
- [ ] Real photo of Deane Yates
- [ ] Staff photos + bios for a faculty directory
- [ ] Downloadable prospectus PDF

---

## PHASE 4 — FUNCTIONALITY

- [ ] **Search** — bar exists, doesn't return results
- [ ] **Application form** — Admissions page describes the process, no real form
- [ ] **Contact form** — visual form on the Contact page, not wired to send anywhere
- [ ] **Donation flow** — no Donate page yet at all
- [x] **Shop cart** — fully working: add/remove/quantity, live subtotal, localStorage persistence, tested end-to-end
- [ ] **Shop checkout** — cart is real, checkout is a placeholder alert, no payment processing
- [ ] **Sign-in portals** — no auth for Parents/Students/Teachers
- [ ] **News/events CMS** — News page has a real calendar, but events are hardcoded in the page's JS, not staff-editable
- [ ] Form spam protection

---

## PHASE 5 — LAUNCH PREP

- [ ] Favicon + app icons
- [ ] Meta tags, Open Graph images (link previews for WhatsApp/social)
- [ ] `sitemap.xml` and `robots.txt`
- [ ] Page titles exist per page; meta descriptions not yet added
- [ ] Performance pass — several pages now hot-link large images plus one page (Shop) self-hosts 34 small PNGs; worth a compression pass
- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)
- [ ] Real-device testing, especially mid-range Android
- [ ] Analytics setup
- [ ] Custom domain (currently on the free `github.io` subdomain)
- [x] HTTPS — automatic via GitHub Pages
- [ ] Backup and update plan
- [ ] Hand-off documentation for whoever maintains it after this

---

## What's actually left, in priority order

1. **Donate page** — the last placeholder nav item; every other core/secondary page is built
2. **Student Life** — the one secondary page from the original plan that never got built
3. **Utility pages** — Sign In, Search results, 404, Privacy/Accessibility/Safeguarding, Careers
4. **Design system cleanup** — shared CSS + header/footer includes, now that 20 files are duplicating the same ~700 lines of boilerplate each
5. **Content pass** — real logo, real photography, fact-checking against the school (every draft-note across the site is a checklist item here)
6. **Phase 4 functionality** — search, real forms, payment processing for Shop and Donate, auth for sign-in, a CMS for News so staff don't need to touch code
7. **Phase 5 launch prep** — favicon, meta tags, sitemap, custom domain, analytics, cross-browser/device testing

## Known issues carried over

- Most images are still hot-linked from `maruapula.org` (fragile) — Shop is the one exception, now self-hosted
- Search, most forms, and checkout/payment flows are still non-functional placeholders, clearly flagged where they appear
- "Apply Now" still doubles as the Sign In control — worth deciding if that's permanent
- All facts, prices, and statistics need re-verification with the school before this goes live for real — flagged inline throughout via `draft-note` callouts
