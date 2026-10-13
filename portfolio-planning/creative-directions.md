# Creative Directions

**Status:** Prepared for Gate 2. One direction to be approved before any design work.
**Inputs:** Approved brand strategy (precise and methodical, senior and authoritative, practical and business-minded; personal name only; portrait to come; evidence is text and diagrams).

All three directions share the same non-negotiables: no gradients, no glow, no particle or blob backgrounds, no glassmorphism, no identical card grids, no fake numbers, full keyboard and reduced-motion support. They differ in concept, tone, and visual signature.

---

## Direction A: The Specification

**Concept.** The site is set like the document Jagdish writes before any code: a technical specification. Numbered sections, a metadata margin, hairline rules, a warm paper ground, and one authoritative serif. The visitor should feel they are reading the work of someone who thinks before building.

**Intended impression.** Rigorous, senior, literate. "This person will write it down, and it will be right."

**Why it fits.** "Specs before code" is Jagdish's own stated principle. The approved personality is precise, authoritative, and practical; a specification is all three. It is also the furthest possible silhouette from an AI-vendor landing page, which is the central creative risk.

**Typography.**
- Display and headings: **Instrument Serif** (open licence). High contrast, sharp, editorial. Used large and sparingly.
- Body and interface: **Instrument Sans**. Neutral, slightly warm, pairs with the serif by design.
- Metadata and labels: **IBM Plex Mono**. Section numbers, roles, stack lists, dates.
- Scale: 14 / 16 / 20 / 28 / 44 / 72 px on desktop; body line length 60 to 70 characters.

**Colour (HEX).**
| Role | Value |
|---|---|
| Paper (ground) | `#F3F0E9` |
| Ink (text) | `#161512` |
| Graphite (secondary text) | `#5C584F` |
| Rule (hairlines, borders) | `#CFC9BC` |
| Oxide (single accent: links, section numbers, the human-review marker) | `#B5431E` |
| Deep (optional inverted blocks, footer) | `#1E1C18` |

**Layout principles.** 12-column grid, 1200 px max content width. Persistent asymmetry: a narrow left margin column (3 of 12) carries section numbers and metadata in mono; the wide right column (8 of 12, offset by 1) carries content. Hairlines separate sections instead of background changes. Tables (industries, stack) are set as proper typographic tables with aligned numerals.

**Image and asset treatment.** Portrait printed large, black and white or lightly warm-toned to sit on the paper, square-cropped, no rounded corners, placed off-centre in the About opener and small in the Home opener. Diagrams drawn as schematics in Ink and Rule with the human-approval node in Oxide: the one consistent visual signature across all case studies.

**Interaction and motion.** Links underline with an offset rule; hover shifts the underline to Oxide. One fade-and-rise on page load (160 ms), nothing on scroll except diagrams drawing their paths once (600 ms) when first visible. All motion removed under `prefers-reduced-motion`.

**Advantages.** Most distinctive within the genre. Ages well. Cheap to build (type, rules, one accent). Case studies read naturally as numbered documents. Portrait has a natural home.

**Trade-offs.** Depends on good typesetting; sloppy spacing will show. Warm paper may read as "old-fashioned" to a reader expecting a dark technical site. Needs real diagrams drawn, which is work.

**Risk of looking generic.** Low. The nearest cliché is "Medium article"; avoided by the asymmetric margin column, the serif-mono pairing, and tables as design objects.

---

## Direction B: The Control Room

**Concept.** A calm systems console. Dark slate ground, hairline schematics, monospace readouts, and a single amber signal for the human-approval gate. The site presents Jagdish's work the way an operator sees a production system: structured, monitored, under control.

**Intended impression.** Technical, in command, production-grade. "This person runs systems that are live right now."

**Why it fits.** His differentiator is AI that runs in production, with humans in the loop. A console makes that literal. The authority is in the restraint: nothing glows, nothing animates without reason.

**Typography.**
- Headings and body: **Geist** (open licence). Clean grotesk with good small-size readability on dark.
- Readouts, labels, diagram text: **Geist Mono**.
- Scale: 13 / 15 / 18 / 24 / 36 / 56 px. Headings slightly smaller than Direction A because dark grounds amplify size.

**Colour (HEX).**
| Role | Value |
|---|---|
| Slate (ground) | `#111418` |
| Panel (raised areas, no shadow, 1 px border) | `#181C22` |
| Line (hairlines) | `#2B313A` |
| Text | `#E4E1DA` |
| Dim (secondary text) | `#8B9099` |
| Amber (single accent: human gate, active states) | `#D9A441` |
| Status green (used only for "in production" markers) | `#5FA373` |

**Layout principles.** 12-column grid, 1280 px max. Split screens: text left, schematic right. Panels separated by 1 px lines, never shadows or blur. Status markers ("in production", "in development") shown as mono text with a small square, not pills.

**Image and asset treatment.** Portrait small, desaturated, placed in a panel like an operator ID. Diagrams are the primary imagery: large, full-width, drawn in Line with Amber nodes.

**Interaction and motion.** Diagrams draw once on first view. Hover reveals node labels. Subtle 1 px border brightening on hover. No scroll-jacking, no parallax.

**Advantages.** Strong fit with the subject matter. Diagrams look native. Appeals to technical evaluators and CTOs.

**Trade-offs.** This is the silhouette most AI-tooling vendors use. Even done well, a first-glance viewer may file it under "another AI startup". Dark grounds reduce the warmth a personal site needs and make the portrait less present. Harder to print or screenshot for proposals.

**Risk of looking generic.** Medium to high. Mitigated only by absolute discipline: no glow, no gradient, amber not neon, serif nowhere, Geist not Inter.

---

## Direction C: The Ledger

**Concept.** Swiss typographic rationalism applied to a technologist's record. Pure white ground, one large grotesk, strict grid, numbered rows, tabular data as the hero. The site is a ledger of what has been built and how, which echoes Jagdish's own language about immutable records and data integrity.

**Intended impression.** Exact, accountable, unhurried. "Everything here is on the record."

**Why it fits.** Precision and accountability are the approved traits. The ledger metaphor connects to his financial-systems work. It is austere enough to feel senior and structured enough to feel methodical.

**Typography.**
- Everything: **Archivo** (open licence, variable), from Thin for huge numerals to Semibold for headings. One family across the site.
- Tabular numerals and labels: **Archivo** with `tnum`, plus **JetBrains Mono** for code-like strings only.
- Scale: 14 / 16 / 22 / 32 / 56 / 96 px. Large numerals (25–50, 8, 5, 7) used as compositional elements.

**Colour (HEX).**
| Role | Value |
|---|---|
| White (ground) | `#FFFFFF` |
| Black (text) | `#0B0B0B` |
| Grey (secondary) | `#6F6F6F` |
| Rule | `#D9D9D9` |
| Cobalt (single accent) | `#1F3BD1` |

**Layout principles.** 12-column grid, 1320 px max, with visible column rhythm. Projects presented as ledger rows: number, name, industry, role, stack, each row expandable or linked to its page. The eight-industry table becomes the centre of the Home page.

**Image and asset treatment.** Portrait full-bleed in one column, high-contrast black and white. Diagrams in black line with Cobalt accents, set inside the grid like figures in a report.

**Interaction and motion.** Row hover inverts to black with white text. No entrance motion. Diagram paths draw once.

**Advantages.** Very clean, very fast, timeless. One family keeps cost low. Tables are a natural fit for the CV content.

**Trade-offs.** Can feel cold and corporate, closer to an annual report than a person. Harder to express warmth, and the owner's chosen traits already lean authoritative, so the site risks tipping into impersonal. White plus grotesk plus cobalt is a common Swiss-revival look in agency sites.

**Risk of looking generic.** Medium. The agency "Swiss" template is well-worn. Distinctiveness would rely on the ledger metaphor and the numerals.

---

## Recommendation: Direction A, The Specification

**Reasoning.**

1. **It is Jagdish's own idea.** "Specs before code" is in his CV. A design built from a principle the person already lives by will feel authentic rather than applied.
2. **It is the furthest from the genre cliché.** The AI-consultant web is dark, glowing, and sans-serif. A warm paper ground with an editorial serif is immediately legible as "a serious person," not "a product."
3. **It fits the evidence.** The evidence is prose, method, tables, and diagrams. A document aesthetic makes those the stars instead of apologising for missing screenshots.
4. **It carries the portrait well.** The approved identity is personal-name-only. Paper and a large portrait give the site a face. Direction B buries the face; Direction C formalises it.
5. **It balances authority with humanity.** The serif supplies warmth and seniority; the mono margin supplies precision. That is exactly the approved three-trait mix.

**What Direction A borrows from the others.** The schematic diagram language with a single-colour human-approval node (from B) becomes the case-study signature. Tables set as design objects and large numerals used sparingly (from C) carry the scale facts.

**What would change the recommendation.** If the owner's main audience were CTOs and technical evaluators rather than business owners, Direction B would move ahead. If the owner dislikes serif typefaces on principle, Direction C is the fallback, with the margin-column structure of A retained.

## Decision needed at Gate 2
Approve Direction A, choose B or C, or ask for an adjustment (for example A with a different accent colour, or A with a cooler paper). No wireframes are drawn until this is decided.
