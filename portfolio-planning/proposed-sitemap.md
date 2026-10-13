# Proposed Sitemap

**Status:** Prepared for Gate 2
**Pages:** 8 (Home, Work, 4 case studies, About, Contact)

```
/                      Home
/work                  Work (index of case studies and the industry table)
/work/export-erp       Case study 1: AI-enabled export ERP
/work/real-estate-rag  Case study 2: RAG sales assistant, Dubai real estate
/work/mcp-server       Case study 3: MCP server for trading and sales workflows
/work/devops-agent     Case study 4: AI-assisted DevOps agent (in development)
/about                 About: method, leadership, stack, background
/contact               Contact: book a call, email, LinkedIn
```

Shared: top navigation (Work, About, Contact, Book a call), footer (name, location, email, LinkedIn, copyright). Slugs are proposals; the owner may rename.

## Page by page

### Home `/`
- **Purpose:** establish who Jagdish is, what he does, for whom, and route to proof or booking.
- **Audience:** all three; written for SME decision-makers.
- **Must communicate:** positioning statement; human-in-the-loop principle; AI in production; scale facts; two or three featured case studies; the booking action.
- **Content and assets:** headline and supporting line (from strategy §4); portrait; three or four proof statements (from CV); featured case-study teasers (title, industry, one-line problem); scale numerals; booking link.
- **Relationships:** links to every case study, About, Contact.
- **Primary CTA:** Book a call. Secondary: See the work.
- **SEO:** "Jagdish Chaudhary", "AI Solutions Architect", "CTO", "Ahmedabad". Title: "Jagdish Chaudhary, AI Solutions Architect and CTO".

### Work `/work`
- **Purpose:** let a visitor find the case study closest to their situation.
- **Audience:** SME decision-makers and partner agencies.
- **Must communicate:** range (eight industries) and depth (four studies).
- **Content and assets:** four case-study entries (number, title, industry, role, stack, one-line problem); the eight-industry table from the CV set as a design object.
- **Relationships:** from Home; to each case study.
- **Primary CTA:** open a case study. Secondary: Book a call (footer of page).
- **SEO:** "AI ERP integration", "RAG assistant", "MCP server", industry terms.

### Case study pages `/work/*`
- **Purpose:** prove judgement. Each shows the business problem, constraints, decisions, what runs in production, and where humans review.
- **Audience:** decision-maker first, technical evaluator second.
- **Must communicate:** problem, role, approach, architecture, safeguards, status, lessons.
- **Content and assets:** text from CV expanded by the owner; one schematic diagram per study (to be drawn, labelled illustrative); stack list; status marker. Any real screenshots, metrics, or named clients only with permission.
- **Relationships:** previous/next case study; back to Work; Contact.
- **Primary CTA:** Book a call ("Have a similar problem?"). Secondary: next case study.
- **SEO:** one long-tail term each (for example "AI document extraction export ERP").
- **Variation:** each study emphasises something different. See `case-study-wireframe.md` (Phase 7).

### About `/about`
- **Purpose:** make the partner-agency and CTO audiences confident, and give every visitor the "how I work" picture.
- **Audience:** all three; this is where audiences 2 and 3 convert.
- **Must communicate:** the seven-step method; how he leads teams; leadership and delivery facts; stack and LLM families; education; location.
- **Content and assets:** large portrait; method steps (CV); "How I lead" principles (CV); technology table (CV); education; CV download.
- **Relationships:** from Home and nav; to Contact.
- **Primary CTA:** Book a call. Secondary: Download CV.
- **SEO:** "engineering leader", "technology strategy", "fractional CTO" (if the owner wants that term on the site).

### Contact `/contact`
- **Purpose:** remove friction from booking.
- **Audience:** all.
- **Must communicate:** what the call is (length, who, what to bring), the booking embed or link, email, LinkedIn, time zone.
- **Content and assets:** scheduling link or embed (provider to confirm); email; LinkedIn URL; location and time zone (IST); whether to show WhatsApp (owner's decision).
- **Relationships:** reachable from every page.
- **Primary CTA:** the booking itself.
- **SEO:** minimal; `noindex` not needed.

## Why this structure
- Eight pages is enough to show depth and few enough to keep every page strong.
- Case studies get their own URLs so they can be shared in outreach messages and proposals, which is how a consultative site actually gets used.
- Method lives on About, not on a separate Services page, so the site never reads as a catalogue.
- No blog now; `/writing` can be added later without touching the existing structure.

## Decision needed at Gate 2
Approve the eight-page scope and slugs, or adjust (for example, merge Contact into About, add a Writing page now, or rename case studies).
