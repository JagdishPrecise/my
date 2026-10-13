# Homepage Wireframe

**Status:** Approved at Gate 3, 2026-10-13. Headline confirmed. Mockup: `portfolio-planning/mockups/home.html` (disposable, not the site).
**Layout:** The specification layout from `design-system.md` §4. Margin column left (mono metadata), content column right.

## Section order and why

| # | Section | Purpose | Why this position |
|---|---|---|---|
| 1 | Letterhead (header and nav) | Name, routes, booking | A document starts with who wrote it. |
| 2 | Opener | State the thesis in one sentence and show a face | The five-second test. |
| 3 | Proofs | Four facts that make the thesis credible | Belief comes before inspection. |
| 4 | Selected work | Three case studies, problem-first | Inspection. The visitor picks their industry. |
| 5 | Scale and method | The numerals and the seven steps | Trust for the agency and CTO audiences, and a preview of working together. |
| 6 | Closing call | Book a call, what to expect, email | Act. |
| 7 | Footer | Contact details, location, time zone | Document end matter. |

Not included: testimonials, logos, a services grid, a "technologies" icon wall, a newsletter box.

## Section detail

### 1. Letterhead
- **Content:** "Jagdish Chaudhary" in Instrument Serif 28 px (home link). Nav: Work, About, Contact, Book a call (bordered mono).
- **Desktop:** single row, name left, nav right, hairline beneath.
- **Mobile:** name left, Book a call right, "Menu" disclosure below.

### 2. Opener
- **Margin column:** mono metadata list: `ROLE  AI Solutions Architect · CTO` / `BASE  Ahmedabad, India · IST` / `WORK  Applied AI, enterprise systems, engineering leadership`. Below it, the portrait at 160 px square (placeholder until supplied).
- **Content column:** headline in display-1: **"AI that works inside the systems your business already runs."** Lead paragraph (body-lg, draft from CV): "I design and deliver applied AI for operational businesses: document extraction, retrieval, and agents connected to the ERP, CRM, and tools you already use. One accountable technical lead from the first discovery call to production." Two links beneath: **Book a call** (primary) and "See the work →".
- **Typography:** display-1 76 px / 1.0, lead 20 px / 1.45 at 60 ch.
- **Assets:** portrait.
- **Interaction:** none beyond links.
- **Mobile:** metadata strip first (three short lines), headline at 44 px, portrait 120 px below the lead, links stacked.
- **Why distinctive:** the metadata margin and serif headline on bond paper read as a document, not a hero. No centred text, no two buttons side by side, no background art.

### 3. Proofs
- **Margin column:** mono label `WHAT I BRING`.
- **Content column:** four entries set as a definition list with hairlines, each a mono label and a two-line statement (from CV, lightly edited):
  1. `ONE ACCOUNTABLE LEAD` Discovery, architecture, delivery and production support stay with the same person.
  2. `AI IN PRODUCTION` Document extraction, RAG, agents and forecasting running inside a live enterprise ERP, not a prototype.
  3. `BUSINESS-FIRST SCOPING` Use cases ranked by feasibility, data readiness, value and expected ROI before any build.
  4. `HUMANS STAY IN THE LOOP` [review marker] Validation and human approval wherever AI output affects decisions. Access control and data privacy by design.
- **Mobile:** same list, single column.
- **Why distinctive:** a definition list, not four cards. The review marker appears for the first time.

### 4. Selected work
- **Margin column:** mono label `SELECTED WORK` and a link "All work →".
- **Content column (full-bleed rows):** three rows, each a hairline-separated entry: industry in mono, title in heading size, one-line problem in body, stack in mono, arrow. The first row is expanded with a 3-node diagram thumbnail to the right to signal that case studies are architecture-led; the other two are compact. Variation inside one system, not three identical cards.
  - Export and trade · **An ERP where AI reads the paperwork** · Invoices, packing lists and bills of lading extracted, validated and reviewed before they touch the ledger. · Laravel · LLM APIs · RAG
  - Real estate, Dubai · **A sales assistant that cites its sources** · Buyer questions answered from brochures and FAQs, with the source shown and leads captured in the CRM. · RAG · LLM · CRM
  - Trading and sales · **An MCP server that lets AI act, with a person confirming** · Backtests, entry and exit candidates, and outreach steps, each confirmed by a human. · Node.js · MCP
- **Mobile:** rows stack; thumbnail hidden on the first row.
- **Interaction:** whole row is a link; title turns pen on hover, arrow moves 4 px.

### 5. Scale and method
- **Margin column:** mono label `HOW I WORK`.
- **Content column:** a single hairline row of four numerals in display-2 with mono captions: **25–50** engineers led · **8** industries · **5** LLM families · **7** steps, discovery to support. Below it, the seven steps as a numbered two-column list (numbering is genuine sequence): Discovery, Use-case assessment, Feasibility and cost, Solution architecture, Proof of concept, Build and roll out, Support and improve, each with its CV sentence. Link "More about how I work →".
- **Mobile:** numerals two per row, steps single column.

### 6. Closing call
- **Full-bleed block on `--deep`** with paper text: display-2 "Have a process AI should be inside?" Body: "Book a 30-minute call. We will talk about the process, the systems it touches, and whether AI belongs there at all." (length to confirm with the Calendly setup). Book a call (bordered, paper border on deep) and "or email [address]" (address to be supplied).
- **Why here:** the only inverted block on the page, so it reads as the end of the document.

### 7. Footer
- Name, "AI Solutions Architect · CTO", Ahmedabad, India (IST, UTC+5:30). Email, LinkedIn, WhatsApp as text links. CV download link. "© 2026 Jagdish Chaudhary". Mono small.

## Desktop composition (1200 px)
```
┌──────────────────────────────────────────────────────────────┐
│ Jagdish Chaudhary              Work  About  Contact [BOOK A CALL] │
├──────────────────────────────────────────────────────────────┤
│ ROLE  AI Solutions  │   AI that works inside the              │
│       Architect     │   systems your business                 │
│ BASE  Ahmedabad     │   already runs.                         │
│ WORK  Applied AI    │                                         │
│                     │   I design and deliver applied AI ...   │
│ [portrait 160]      │   [BOOK A CALL]   See the work →        │
├──────────────────────────────────────────────────────────────┤
│ WHAT I BRING        │ ONE ACCOUNTABLE LEAD  ..........        │
│                     │ AI IN PRODUCTION      ..........        │
│                     │ BUSINESS-FIRST ...    ..........        │
│                     │ ☑ HUMANS STAY IN THE LOOP ......        │
├──────────────────────────────────────────────────────────────┤
│ SELECTED WORK ─────────────────────────────────────────────  │
│ EXPORT & TRADE   An ERP where AI reads the paperwork  [diag] │
│ REAL ESTATE      A sales assistant that cites its sources  → │
│ TRADING & SALES  An MCP server that lets AI act ...        → │
├──────────────────────────────────────────────────────────────┤
│ HOW I WORK          │  25–50     8      5      7              │
│                     │  1 Discovery   2 Use-case  3 ...        │
├──────────────────────────────────────────────────────────────┤
│ ▓▓ Have a process AI should be inside?   [BOOK A CALL] ▓▓▓▓  │
├──────────────────────────────────────────────────────────────┤
│ footer                                                        │
└──────────────────────────────────────────────────────────────┘
```

## Mobile composition (390 px)
```
┌──────────────────────┐
│ Jagdish C.  [BOOK]   │
│ Menu                 │
├──────────────────────┤
│ ROLE · BASE · WORK   │
│ AI that works        │
│ inside the systems   │
│ your business        │
│ already runs.        │
│ lead paragraph       │
│ [portrait 120]       │
│ [BOOK A CALL]        │
│ See the work →       │
├──────────────────────┤
│ WHAT I BRING         │
│ list (4)             │
├──────────────────────┤
│ SELECTED WORK        │
│ 3 rows               │
├──────────────────────┤
│ 25–50   8            │
│ 5       7            │
│ steps (7)            │
├──────────────────────┤
│ ▓ closing call ▓     │
│ footer               │
└──────────────────────┘
```

## Inner pages, briefly (full wireframes after Gate 3 if needed)
- **Work:** letterhead, title "Work", the four rows in the selected-work style, then the eight-industry table full-bleed, closing call.
- **About:** opener with 480 px portrait in the margin column and the profile paragraphs; "How I lead" principles as a definition list; the seven steps; technology table; leadership bullets; education; CV download; closing call.
- **Contact:** title, what the call is, Calendly link (embedded if it can be styled quietly, otherwise a link), email, LinkedIn, WhatsApp, time zone.

## Placeholders requiring input
- Portrait photograph.
- Email address and Calendly URL.
- Call length and framing text.
- Owner's own wording for the headline if the draft is not in his voice.
