# Design System: The Specification

**Status:** Approved at Gate 3, 2026-10-13, including the pen-ink accent
**Direction:** A, approved at Gate 2, with one palette adjustment explained below.

## 0. Palette adjustment from the approved direction (needs your sign-off)

The Gate 2 palette was warm cream `#F3F0E9` with an oxide-red accent `#B5431E` and a serif display. That exact combination (cream, serif, terracotta) has become one of the most recognisable AI-generated looks on the web. The concept of Direction A does not depend on it, so two ingredients change:

| Ingredient | Gate 2 | Proposed now | Why |
|---|---|---|---|
| Ground | Warm cream `#F3F0E9` | Cool bond paper `#F2F1ED` | Reads as engineering paper, not a bakery menu. Avoids the cream cliché. |
| Accent | Oxide red `#B5431E` | Pen-ink blue `#1E3F9E` | Blue ink is what a human reviewer writes with. The human-in-the-loop marker becomes literal: a pen mark on a printed spec. Also avoids the terracotta cliché. |

The mockup carries a toggle to compare both accents. If you prefer the oxide, say so at Gate 3 and the tokens revert.

## 1. Colour tokens

| Token | Value | Use |
|---|---|---|
| `--paper` | `#F2F1ED` | Page ground. Single theme; the site is light by design, like a printed document. |
| `--paper-2` | `#E8E7E1` | Recessed surfaces: table header rows, code or stack blocks, diagram ground. |
| `--ink` | `#15171A` | Primary text, diagram strokes. |
| `--graphite` | `#5B5F66` | Secondary text, metadata values. Contrast on paper 5.9:1. |
| `--rule` | `#C9CAC4` | Hairlines, table borders, diagram secondary strokes. Never for text. |
| `--pen` | `#1E3F9E` | The one accent. Links on hover, the human-review marker, focus ring, active nav. Contrast on paper 8.1:1. |
| `--pen-wash` | `#DCE2F2` | Selection background, diagram highlight fill behind the review node. |
| `--deep` | `#1E2024` | Footer and any inverted block. Text on it is `--paper`. |

No gradients, no shadows, no transparency effects. Depth comes from paper versus paper-2 and from rules.

## 2. Typography

| Role | Face | Weight | Notes |
|---|---|---|---|
| Display | Instrument Serif | 400, italic for emphasis | The only serif. Used for the name, page titles, section openers, large numerals. Never below 28 px. |
| Body and UI | Instrument Sans | 400, 500, 600 | All running text, navigation, buttons. |
| Metadata | IBM Plex Mono | 400, 500 | Labels, roles, stacks, dates, section codes, the review marker text. Uppercase at 12 to 13 px with 0.08 em tracking, or sentence case at 14 px. |

Fallbacks: `Georgia, 'Times New Roman', serif` / `'Helvetica Neue', Arial, sans-serif` / `'SF Mono', Menlo, Consolas, monospace`. Fonts self-hosted in the build (open licences), with `font-display: swap`.

**Scale (desktop / mobile)**

| Step | Size | Line height | Use |
|---|---|---|---|
| display-1 | 76 / 44 px | 1.0 | Home headline, page titles |
| display-2 | 44 / 32 px | 1.1 | Section openers, case-study title |
| heading | 28 / 24 px | 1.2 | Work-list titles, sub-sections |
| body-lg | 20 / 18 px | 1.45 | Lead paragraphs |
| body | 17 / 16 px | 1.55 | Running text, 60 to 70 characters per line |
| small | 15 / 14 px | 1.5 | Table cells, captions |
| label | 13 / 12 px | 1.4 | Mono labels |

Headings use `text-wrap: balance`. Numerals in tables use `font-variant-numeric: tabular-nums`.

## 3. Spacing

Base unit 8 px. Scale: 8, 16, 24, 32, 48, 64, 96, 128. Section spacing 96 px desktop, 64 px mobile. Inside a section, 32 px between blocks, 16 px between related lines. No arbitrary values.

## 4. Grid and widths

- Content max width 1200 px, side gutter 24 px (16 px at phone width).
- 12-column grid, 24 px gap.
- **The specification layout:** columns 1 to 3 are the **margin column** (metadata in mono, section codes, small portrait, sticky on long pages); columns 5 to 12 are the **content column**. Column 4 is empty. Running text within the content column is capped at 68 ch.
- Full-bleed rows (tables, diagrams) span columns 1 to 12.
- Below 900 px the margin column stacks above the content, left-aligned, not sticky.

## 5. Breakpoints

| Name | Width | Behaviour |
|---|---|---|
| phone | up to 599 px | Single column, 16 px gutter, display-1 at 44 px, nav collapses to name plus "Book a call" plus a menu disclosure |
| tablet | 600 to 899 px | Single column with 24 px gutter, margin column becomes a horizontal metadata strip |
| desktop | 900 px and up | Two-column specification layout |
| wide | 1280 px and up | Content centred at 1200 px |

## 6. Navigation

Top bar, not sticky (the document metaphor: a letterhead). Left: name in Instrument Serif 28 px as the home link. Right: Work, About, Contact in Instrument Sans 16 px, then **Book a call** as the one emphasised item: mono uppercase, 1 px `--ink` border, 10 px by 16 px padding, square corners. On hover the border and text turn `--pen`. Active page: underline in `--pen`.

Phone: name left, Book a call right, a text "Menu" disclosure that opens a full-width list below the bar. No hamburger icon; the word is clearer.

## 7. Links and buttons

- Text links: `--ink`, underlined with `text-underline-offset: 0.2em` and 1 px thickness. Hover and focus: colour and underline `--pen`.
- Primary action (Book a call): the bordered mono treatment above. There is only one primary action on the site.
- Secondary action (email, next case study): text link with a trailing arrow glyph "→" in the same face.
- No filled buttons, no pills, no icons inside buttons.

## 8. The human-review marker (signature element)

A 16 px square outlined in `--pen` with a hand-drawn-looking check inside, followed by mono text "human review" or a specific phrase ("reviewed before commit"). It appears:
- Once on the Home proof block.
- In every architecture diagram, as the node where output waits for a person.
- In case-study prose wherever a review step is described.

It is the only illustrative mark on the site and must never be used decoratively.

## 9. Diagram language

- Nodes: rectangles with 1 px `--ink` stroke, no fill, square corners, label in mono 13 px.
- Flows: 1 px `--ink` lines with a small closed arrowhead.
- External systems (ERP, CRM, LLM provider): dashed 1 px `--rule` stroke.
- Human-review node: `--pen` stroke, `--pen-wash` fill, the marker inside.
- Background: `--paper-2` panel with 24 px padding, full-bleed row.
- Every diagram carries a caption "Illustrative architecture, simplified" until the owner confirms accuracy.
- Draw once on first view (paths animate in over 600 ms). Static under reduced motion.

## 10. Images

- Portrait: square crop, no rounded corners, no border. Desaturated to 85 percent and slightly warmed so it sits on paper. Sizes: 160 px in the Home margin column, 480 px wide in the About opener.
- Placeholder until the real photo arrives: a `--paper-2` square with the mono label "Portrait: to be supplied".
- Any future screenshots: 1 px `--rule` border, no shadow, 16:10 crop.

**Portrait brief for the owner:** head and shoulders, looking at camera or slightly off, plain mid-tone background, soft daylight, no heavy retouching, at least 1600 px on the short side.

## 11. Tables

Full-bleed, hairline rows (`--rule`), header row on `--paper-2` in mono uppercase, cells in Instrument Sans 15 px, numerals tabular. On phone, tables scroll horizontally inside their own container; the industry table switches to a stacked list of cards with mono labels.

## 12. Borders and shadows

Borders: 1 px `--rule` only. Shadows: none anywhere. Corner radius: 0 everywhere.

## 13. Component states

| Component | Default | Hover | Focus-visible | Active / current |
|---|---|---|---|---|
| Text link | ink, underlined | pen | 2 px pen outline, 2 px offset | n/a |
| Nav item | ink | pen underline | as link | pen underline |
| Book a call | ink border | pen border and text | as link | pen border, pen-wash fill |
| Work-list row | hairline above | title turns pen, arrow moves 4 px right | as link | n/a |
| Method step | n/a | n/a | n/a | n/a (not interactive) |

## 14. Accessibility

- WCAG 2.1 AA minimum; all text pairs above 4.5:1 (graphite 5.9:1, pen 8.1:1, ink 16:1 on paper).
- Focus always visible: 2 px `--pen` outline, 2 px offset, never removed.
- Semantic landmarks: header, nav, main, footer; one h1 per page; skip link to main.
- Touch targets at least 44 px tall on phone.
- Diagrams carry `role="img"` with a full text alternative beneath them, not only alt text.
- The site is readable with CSS disabled: the document metaphor means the HTML order is the reading order.

## 15. Motion

- Page load: content fades in and rises 8 px over 160 ms. Once.
- Diagrams: strokes draw once on first intersection, 600 ms.
- Hover transitions: 120 ms on colour and transform only.
- Nothing else. No scroll-triggered reveals, no parallax, no marquee.
- `prefers-reduced-motion: reduce`: all of the above become instant.

## 16. Components to build (and no more)

1. Site header and navigation
2. Footer
3. Specification layout (margin column plus content column)
4. Metadata list (mono label and value pairs)
5. Work-list row
6. Scale numerals row
7. Method step list
8. Human-review marker
9. Diagram panel
10. Data table
11. Call-to-action block (closing)
12. Portrait figure with placeholder state
