# Project Roadmap

**Status:** Prepared for Gate 4
**Milestones 1 to 6 are complete as of 2026-10-13.** Milestones 7 to 11 begin only after Gate 5 authorisation.

| # | Milestone | Deliverables | Depends on | Key decisions | Acceptance criteria | Owner reviews | Needs explicit approval |
|---|---|---|---|---|---|---|---|
| 1 | Discovery and positioning | `project-audit.md`, `personal-brand-strategy.md`, `open-questions.md` | CV upload | Audience order, identity (name only) | Owner confirms the positioning describes him | Strategy document | **Gate 1 — done** |
| 2 | Creative direction | `reference-research.md`, `creative-directions.md` | M1 | Direction A | Owner picks a direction with reasons stated | Three directions | **Gate 2 — done** |
| 3 | Sitemap and content architecture | `website-strategy.md`, `proposed-sitemap.md`, `content-requirements.md` | M1 | Eight pages, no blog or form, Calendly | Owner approves scope | Sitemap | **Gate 2 — done** |
| 4 | Homepage and case-study wireframes | `homepage-wireframe.md`, `case-study-wireframe.md` | M2, M3 | Section order, case-study skeleton | Owner approves layouts | Wireframes | **Gate 3 — done** |
| 5 | Visual mockups | `mockups/` and screenshots, published artifact | M4 | Palette adjustment (pen ink) | Owner can judge type, composition, colour on a real render | Mockup | **Gate 3 — done** |
| 6 | Design-system approval | `design-system.md` | M5 | Tokens, components list, motion rules | Owner approves | Design system | **Gate 3 — done** |
| 7 | Technical implementation | Astro project, layouts, 12 components, 6 routes, content collection, diagrams, CI | **Gate 5**, stack and hosting choice | Astro vs alternative; analytics | `astro build` passes; every route renders; design matches mockup at 390 and 1280 | Staging build or screenshots | **Gate 4 (plan) then Gate 5 (start)** |
| 8 | Content and asset integration | Final copy on all pages, four case studies, portrait, CV PDF, Calendly and email wired | M7, owner's content (Round 3 and 4 answers, portrait) | Which facts may be published; rejected options per study | No placeholders remain except those the owner accepts; nothing invented | Every page's copy | Owner signs off copy |
| 9 | Responsive and accessibility testing | Playwright and axe suites passing; manual keyboard, reduced-motion, zoom, real-phone passes; fixes | M8 | None expected | Zero serious axe violations; no horizontal scroll at 320 px; all interactive elements keyboard-reachable | Test report | No |
| 10 | Performance and SEO validation | Lighthouse report; metadata, sitemap, JSON-LD verified; share image | M9 | Domain for canonical URLs | Lighthouse performance and accessibility 95 or above on mobile; valid structured data | Report | No |
| 11 | Final review and delivery | Anti-template review (brief §19), final fixes, handover notes (`README.md`: how to edit content, build, deploy) | M10 | Deployment target | Owner accepts; deployment only with separate authorisation | Whole site | **Deployment authorisation** |

## Risks and the information that affects scope

| Risk | Effect | Mitigation |
|---|---|---|
| Portrait not supplied | Home and About lose their human anchor | Placeholder state is designed; site can launch without it but should not |
| Case-study facts (context, rejected options, lessons) not supplied | Studies read thin; placeholders visible | Owner answers Round 3 prompts during M8; studies are honest about gaps rather than padded |
| Owner wants figures or client names that cannot be verified | Credibility risk | Publish only what the owner confirms is true and permitted |
| Calendly embed clashes with the design | Contact page looks foreign | Fall back to a styled link; the embed is optional |
| Hosting undecided | M11 blocked | Any static host works; decision can wait until M10 |
| Scope creep (blog, testimonials, services) | Dilutes the site | Changes to scope go through a new approval, not silently |

## Estimated effort after Gate 5
Milestones 7 to 10 are roughly two to three working sessions of implementation plus one of testing, assuming content arrives during M8. Milestone 11 depends on the owner's review turnaround.
