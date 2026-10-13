# Case Study Wireframe

**Status:** Approved at Gate 3, 2026-10-13 (eight-section skeleton). Mockup: `portfolio-planning/mockups/case-export-erp.html`.

## Shared skeleton

Every case study is a short specification document. Sections are numbered because a specification's sections genuinely are, and the numbers let the owner reference them in calls ("see section 3 of the ERP study").

| Section | Content | Required |
|---|---|---|
| Header | Mono reference line (`CASE 01 · EXPORT AND TRADE · IN PRODUCTION`), title in display-2, one-paragraph summary | Yes |
| Margin metadata | Role, Client (anonymised), Stack, Status, Industry, Year(s) if supplied | Yes |
| 1. Context | Who the business is, what the process looked like before | Yes |
| 2. Problem | The specific slow or risky step | Yes |
| 3. Decisions | What was chosen and what was rejected, with reasons | Yes (rejected options from owner) |
| 4. Architecture | Diagram panel plus a prose walk-through | Yes |
| 5. Where humans stay in the loop | The review step, marked with the signature marker | Yes |
| 6. What runs in production | Bullet list of live capabilities | Yes |
| 7. Outcome | Only verified facts; otherwise an honest status line | Yes, may be short |
| 8. Lessons | Two or three sentences | Optional |
| Next | Link to the next case study and the closing call | Yes |

## Emphasis per study (so they are not identical)

| Study | Emphasis | Layout difference |
|---|---|---|
| 1. Export ERP | **Architecture and integration depth.** The biggest system. | Full architecture diagram; section 6 is the longest; a small table of document types extracted. |
| 2. Real estate RAG | **Trust and source citation.** A sales tool that shows its evidence. | Diagram focuses on retrieval and citation; a mock "answer with source" text block set in paper-2 replaces the document table. |
| 3. MCP server | **Agency with confirmation.** AI acting on real tools. | Diagram shows the confirm gate between assistant and tool; section 5 is the longest; two short columns for Trading and Sales capabilities. |
| 4. DevOps agent | **Operations and honesty about status.** In development. | Shorter page; status marker "IN DEVELOPMENT" in the header; section 7 states what works today and what is planned. No outcome claims. |

## Case study 1 in detail: AI-enabled export ERP

### Header
- Reference: `CASE 01 · EXPORT AND TRADE · IN PRODUCTION`
- Title: **An ERP where AI reads the paperwork**
- Summary (draft from CV): "An export-focused ERP covering sales orders, customers, export documentation, invoicing, inventory, shipments, finance and reporting. I led the architecture and the engineering team, and designed how AI fits into daily export operations without taking decisions away from people."

### Margin metadata
`ROLE` Architecture lead, technology lead, AI solution designer · `CLIENT` Export business [details to supply] · `STACK` Laravel, LLM APIs, RAG · `STATUS` In production · `INDUSTRY` Export and trade

### 1. Context
Placeholder paragraph for owner: company size, countries shipped to, monthly document volume (approximate, anonymised).

### 2. Problem
Draft: export operations run on documents: invoices, packing lists, purchase orders, transport documents, bills of lading. Each was keyed by hand into the ERP, slowly and with errors that surfaced at the worst time, at customs or at payment.

### 3. Decisions
Draft structure, content from owner:
- Chosen: extraction into structured fields with validation rules and a human review step before commit.
- Chosen: RAG over company documents and ERP knowledge so staff can ask in plain language.
- Chosen: agents for defined workflow steps, not free-form automation.
- Rejected: [owner to supply, for example fully automatic commit, a separate AI tool outside the ERP, a single-vendor lock-in].

### 4. Architecture
Diagram panel (illustrative, simplified):
```
[Documents: PDF, scans, email] → [Extraction: LLM, structured fields] → [Validation rules]
        → [☑ Human review] → [ERP commit: orders, invoices, shipments, finance]
[ERP data + company documents] → [Retrieval index] → [Q&A in plain language]
[ERP workflows] ↔ [Agents] (defined steps only)
[ERP data] → [Reporting, forecasting]
```
Prose: one paragraph per flow. Caption: "Illustrative architecture, simplified."

### 5. Where humans stay in the loop
Marker, then: extracted data is committed only after a person approves it. Validation rules catch what they can; a person catches the rest. Forecasts inform decisions; they do not make them.

### 6. What runs in production
The six CV bullets, lightly edited. Small table: document type · extracted · generated.

### 7. Outcome
Until the owner supplies figures: "Running in daily use. Figures on volume, time saved and accuracy are not published here." Nothing invented.

### 8. Lessons
Owner to supply two or three sentences. Prompt: what would you do differently, what surprised you.

### Next
"Next: A sales assistant that cites its sources →" and the closing call block.

## Desktop composition
```
┌────────────────────────────────────────────────────────────┐
│ letterhead                                                 │
├────────────────────────────────────────────────────────────┤
│ CASE 01 · EXPORT AND TRADE · IN PRODUCTION                 │
│ An ERP where AI reads the paperwork                        │
│ summary paragraph (60 ch)                                  │
├────────────────────────────────────────────────────────────┤
│ ROLE   ...        │ 1. Context                             │
│ CLIENT ...        │ ....                                   │
│ STACK  ...        │ 2. Problem                             │
│ STATUS ...        │ ....                                   │
│ (sticky)          │ 3. Decisions                           │
│                   │ ....                                   │
├────────────────────────────────────────────────────────────┤
│ ░░ 4. Architecture diagram panel, full bleed ░░░░░░░░░░░░░ │
├────────────────────────────────────────────────────────────┤
│                   │ 5. ☑ Where humans stay in the loop     │
│                   │ 6. What runs in production  + table    │
│                   │ 7. Outcome                             │
│                   │ 8. Lessons                             │
│                   │ Next →                                 │
├────────────────────────────────────────────────────────────┤
│ ▓▓ closing call ▓▓                                         │
└────────────────────────────────────────────────────────────┘
```

## Mobile composition
Header, then the metadata as a compact strip (label and value on one line each), then sections in order. Diagram panel scrolls horizontally inside its container at natural width, with the text alternative beneath so nothing is lost. Table becomes stacked rows.

## Assets and information still needed
See `content-requirements.md`. The diagrams are drawn by me from the CV and marked illustrative; the owner reviews each for accuracy before publication.
