# Maru-a-Pula School Website — Project Roadmap

**Status:** Homepage complete (`maruapula-homepage.html`)
**Approach:** Design all pages first, then wire them together, then make them functional.

---

## PHASE 1 — DESIGN (build every page's look & feel)

Work one page per chat. Each time, attach the finished homepage as the design reference so the new page reuses the same system.

### 1.1 Core pages (highest priority)

| # | Page | Why it matters | Key sections to include |
|---|------|----------------|-------------------------|
| 1 | **Admissions** | First thing prospective parents click | Process steps, entry requirements, key dates, fees, financial aid/OVC scholarships, Open Day CTA, application form layout, FAQ |
| 2 | **Academics** | Second-most visited; proves the school's quality | Lower School (Form 1–5) vs Upper School (Form 6), subject lists, IGCSE/A-Level info, results by year, university destinations, faculty highlights |
| 3 | **About / Our Story** | Builds trust and identity | Full history, Deane Yates & founding, mission/vision, governance/trust structure, Principal's welcome, campus & facilities |
| 4 | **Contact** | Practical necessity | Map embed, address, phone, email, department contacts, enquiry form, directions/transport |

### 1.2 Secondary pages

| # | Page | Notes |
|---|------|-------|
| 5 | **Student Life** | Boarding houses, daily routine, clubs, sport, student leadership |
| 6 | **Community & Service** | The weekly service programme, Old Naledi, SOS Children's Village, partnerships |
| 7 | **Maitisong & The Arts** | Theatre, the festival, marimba band, drama, music, visual art |
| 8 | **News** | Archive/listing page + a single article template |
| 9 | **Events Calendar** | Full month view, not just the homepage carousel |
| 10 | **Alumni** | Notable alumni, alumni network, giving back |
| 11 | **Donate** | Why give, what it funds, giving levels, donation form layout |
| 12 | **Shop** | Uniform, merchandise, product grid + product detail template |

### 1.3 Utility pages (small but necessary)

- [ ] **Sign In** — three portals (Parents / Students / Teachers & Staff)
- [ ] **Search results** page
- [ ] **404 / Page not found** — styled to match
- [ ] **Privacy Policy**, **Accessibility**, **Safeguarding / Child Protection**
- [ ] **Careers / Vacancies**

### 1.4 Design system cleanup (do near the end of Phase 1)

- [ ] Extract shared CSS into one `styles.css` instead of repeating it in every file
- [ ] Extract header + footer into reusable includes/components
- [ ] Document the design tokens (colors, fonts, spacing, radii) in one place
- [ ] Check every page at mobile / tablet / desktop widths
- [ ] Accessibility pass: colour contrast, focus states, alt text, keyboard navigation, screen-reader labels

---

## PHASE 2 — CONNECT

Turn a pile of separate pages into an actual website.

- [ ] Give every page a real filename (`index.html`, `admissions.html`, `academics.html`, …)
- [ ] Replace every placeholder `#` link with real page links
- [ ] Make the header nav and footer links consistent across all pages
- [ ] Add breadcrumbs on deeper pages
- [ ] Add "related pages" links at the bottom of each page
- [ ] Confirm every route works both directions (no dead ends)

---

## PHASE 3 — CONTENT & ASSETS

The part that most determines whether the site feels real.

- [ ] **Get the official logo file** from the school (SVG or high-res PNG)
- [ ] **Get real photography** — replace the currently hot-linked images from maruapula.org
- [ ] **Self-host all images** in an `/images` folder; compress and resize them
- [ ] Add proper `alt` text to every image
- [ ] Replace all placeholder copy with real, school-approved text
- [ ] Verify every fact and statistic with the school before publishing
- [ ] Get a real photo of Deane Yates (currently a text tribute card, as none could be verified)
- [ ] Gather staff photos + bios if building a faculty directory
- [ ] Prepare a downloadable prospectus PDF

---

## PHASE 4 — FUNCTIONALITY

Where it stops being a design and starts being software.

- [ ] **Search** — make the search bar actually return results
- [ ] **Application form** — real form with validation + submission
- [ ] **Contact form** — real form, routed to the right inbox
- [ ] **Donation flow** — payment processing
- [ ] **Shop** — cart, checkout, payment
- [ ] **Sign-in portals** — authentication for the three user types
- [ ] **News/events** — ideally a CMS so staff can post without touching code
- [ ] Form spam protection

---

## PHASE 5 — LAUNCH PREP

- [ ] Favicon + app icons
- [ ] Meta tags, Open Graph images (for link previews on WhatsApp/social)
- [ ] `sitemap.xml` and `robots.txt`
- [ ] Page titles and meta descriptions for every page
- [ ] Performance pass — image loading, script sizes
- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)
- [ ] Test on real devices, especially mid-range Android phones
- [ ] Analytics setup
- [ ] Choose hosting + connect the domain
- [ ] Set up HTTPS
- [ ] Backup and update plan
- [ ] Hand-off documentation for whoever maintains it

---

## Suggested order

1. Admissions
2. Academics
3. About
4. Contact
5. → then reassess: either continue with secondary pages, or pause design and do Phase 2 (Connect) so you have a working four-page site to show people early.

**Tip:** getting a small, fully-linked site working early is more useful than fifteen beautiful but disconnected pages. Consider doing Phase 2 right after the first four pages.

---

## Known issues carried over from the homepage

- Images and logo are hot-linked from `maruapula.org` — fragile, will break
- Search, forms, and all buttons are non-functional placeholders
- "Apply Now" currently doubles as the Sign In control — worth deciding if that's permanent
- All facts/statistics should be re-verified with the school before going live
