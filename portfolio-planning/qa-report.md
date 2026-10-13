# Quality Assurance Report

**Date:** 2026-10-13
**Build:** branch `claude/premium-portfolio-website-ksjgu6`
**Reviewed as:** design director and frontend engineer, per brief §19.

## What was actually run

| Check | Result |
|---|---|
| `astro build` | 9 pages built, no warnings |
| `astro check` | 0 errors, 0 warnings |
| Playwright routes (desktop + phone): status 200, one h1, expected h1 text, title, description, canonical, no console errors, no horizontal scroll, Book a call visible | 37 passed, 1 skipped (phone-only test on desktop) |
| axe WCAG 2.1 A/AA on every route, both viewports | 0 serious or critical violations (after making the scrollable table and diagram regions focusable) |
| Skip link and first-tab focus order | Pass |
| Mobile menu disclosure | Pass |
| Lighthouse, mobile emulation, local preview | Home 100 / 100 / 100 / 92. Case study 99 / 100 / 100 / 92. About 99 / 100 / 100 / 92 (performance, accessibility, best practices, SEO). LCP 1.2 to 1.7 s, CLS 0.003, TBT 0 ms, page weight 79 to 111 KiB. The SEO deduction was a relative sitemap URL in robots.txt, now generated with the absolute site URL. |
| Full-page screenshots, every route, 1280 and 390 px | Reviewed by eye; findings below |

## Not run (and so not claimed)

- No test on a physical phone or in Safari or Firefox. Chromium only.
- No zoom-to-200-percent pass beyond what the phone viewport implies.
- No deployment, so no real-URL Lighthouse, no CDN caching check, no real font-loading timing.
- No screen-reader session. Semantics were checked by axe and by reading the markup, not by listening.
- Lighthouse ran against the local preview server, so network figures are optimistic.

## Visual quality

- **Recognisable identity:** yes. Bond paper, serif headlines, mono margin, pen-ink marker. A reviewer could describe it in one sentence: "a printed spec with a reviewer's pen marks."
- **Typography:** three families, one scale, consistent across pages. Headlines balance; body stays at 60 to 68 characters.
- **Hierarchy and whitespace:** section spacing is uniform (96 px desktop, 64 px phone); the margin column gives every page the same left edge.
- **Composition:** asymmetric by construction. Nothing is centred. The one inverted block is the closing call.
- **Project treatment:** four studies share a skeleton and differ in emphasis: a document table (ERP), a cited sample exchange (real estate), two capability columns (MCP), a short honest status page (DevOps). Diagrams differ in shape.
- **Colour and imagery:** one accent, used only for links on hover, numerals, the review node, and status. No gradients, shadows, or radii anywhere.

## User experience

- First screen states name, role, base, thesis, and the booking action without scrolling on desktop; on phone the thesis is the second screen after the metadata strip.
- Navigation is four items plus the bordered action. Book a call is visible on every page without scrolling (tested).
- Case studies are reachable in one click from Home (featured rows) and from Work.
- The phone layout is designed, not compressed: metadata becomes a strip, rows stack, numerals go two-up, the diagram keeps its natural width inside a scrollable, focusable region with the text alternative always visible.

## Technical quality

- Build is static HTML. JavaScript shipped: the menu toggle and the diagram draw observer, both inline, both tiny.
- Fonts self-hosted, Latin subset, `font-display: swap`.
- Metadata: per-page title and description, canonical, Open Graph with a generated share image, JSON-LD Person on Home and About, sitemap, robots.
- Error state: a designed 404. Empty states: the portrait placeholder, the Calendly placeholder, the email placeholder, all labelled.
- Maintainability: content in MDX files, owner facts in one file, tokens in one file, twelve components with scoped CSS.

## Anti-template review (brief §19)

| Pattern | Present? | Note |
|---|---|---|
| Generic hero with two buttons | No | Metadata margin plus serif headline; one bordered action and one text link |
| Repetitive cards | No | Definition lists and hairline rows; the only boxed surfaces are the diagram panel and the sample exchange |
| Gradients, glow, blur, particles | No | None in any stylesheet |
| Inconsistent spacing | No | 8 px scale throughout |
| Arbitrary animation | No | One 160 ms page rise, one diagram draw per panel; both off under reduced motion |
| Visual clutter | No | Icons: one, the review mark, used only where a review exists |
| Unjustified trends | No | Warm cream and terracotta were removed at Gate 3 for exactly this reason |
| Fake content | No | Every fact traces to the CV; everything else is a labelled placeholder |
| Sections that do not serve the purpose | No | No blog, testimonials, logos, services, newsletter |
| Default fonts (Inter, Roboto, system) | No | |
| Rounded corners / pills | No | Radius is 0 everywhere |

## Findings from the screenshot review and what was done

1. Scrollable table and diagram regions failed axe on phone (not focusable). Fixed: `tabindex="0"` with a role and label.
2. `robots.txt` sitemap URL was relative. Fixed: generated route with the absolute URL.
3. `SectionHeading.astro` was unused after moving section numbers into the MDX headings. Removed.
4. The MDX `Placeholder` blocks are intentionally visible. They must be resolved or removed by the owner before deployment; they are listed in `content-requirements.md`.

## Outstanding before launch (owner input, not defects)

- Portrait photograph.
- Email address, Calendly URL, domain (`SITE_URL`).
- Per-study context, rejected options, lessons, and any verifiable figures.
- Confirmation that the CV PDF in `public/` is the final version.
- Decision on which hosting account to deploy to, then deployment, which has not been done.
