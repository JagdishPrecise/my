# Technical Implementation Plan

**Status:** Approved at Gate 4, 2026-10-13. Stack: Astro static. Hosting: Cloudflare Pages or Netlify. Analytics: none. Content: Markdown in repo.
**Starting point:** empty repository, no existing stack to preserve (see `project-audit.md`).

## 1. Principle

The approved design is a document: eight pages of typeset text, tables, one portrait, and four SVG diagrams. No page needs data at request time. The right architecture is therefore a **static site**: HTML and CSS generated at build time, served from a CDN, with no server, no database, and almost no client-side JavaScript.

## 2. Recommended stack: Astro (static output)

| Need | How Astro meets it | Why not something else |
|---|---|---|
| Eight pages with a shared layout and twelve components | `.astro` components with scoped CSS; zero JavaScript shipped unless a component asks for it | Plain HTML would duplicate the letterhead and footer across eight files and drift. A full React or Vue app ships a runtime the site never uses. |
| Four case studies with identical structure and different emphasis | Content collections: each study is a Markdown file with typed front matter (role, stack, status, industry, emphasis); one layout renders them | A CMS adds hosting and accounts for four documents the owner edits once a year. Markdown in git is the simplest thing he can edit himself. |
| Self-hosted fonts, image optimisation, sitemap, metadata | `@fontsource` packages, built-in `<Image>`, official sitemap integration | Hand-rolling these is possible but Astro's are standard and maintained. |
| Performance and accessibility targets of 95 or above | Static HTML, no hydration, fonts preloaded | Any framework that hydrates by default starts behind. |
| Owner's own background (Laravel, Node) | Node toolchain; templates are HTML with a small frontmatter block | Laravel would need PHP hosting and a server for a site with no server-side logic. Eleventy is the nearest alternative and would also work; Astro is chosen for scoped CSS and typed content collections. |

**Dependencies (all justified above, nothing else):** `astro`, `@astrojs/sitemap`, `@fontsource/instrument-serif`, `@fontsource/instrument-sans`, `@fontsource/ibm-plex-mono`. Dev only: `@playwright/test` and `@axe-core/playwright` for the testing plan, `prettier`. No UI library, no animation library, no Tailwind, no analytics script unless the owner asks.

**Alternatives if the owner prefers:** Eleventy (same architecture, Nunjucks templates) or plain HTML with a tiny Node build script. Both are acceptable; Astro is the recommendation.

## 3. Application architecture

- **Routing:** file-based. `src/pages/index.astro`, `work/index.astro`, `work/[slug].astro` (reads the content collection), `about.astro`, `contact.astro`, `404.astro`.
- **Layouts:** `BaseLayout.astro` (head, letterhead, footer, skip link, metadata) and `SpecLayout.astro` (the margin and content grid).
- **Components (the twelve from `design-system.md` §16):** Letterhead, Footer, SpecSection, MetaList, WorkRow, Numerals, MethodSteps, ReviewMark, DiagramPanel, DataTable, ClosingCall, Portrait.
- **Content:** `src/content/work/*.md` for the four studies; `src/content/config.ts` defines the schema. Home, About and Contact copy lives in the page files, since it is prose with layout, not records.
- **Diagrams:** hand-authored SVG files in `src/diagrams/`, inlined at build so they inherit the CSS tokens and can animate their strokes once.
- **Styling:** one `src/styles/tokens.css` with the custom properties from the design system; `global.css` for resets, typography and the shared classes; component-scoped CSS for the rest. No preprocessor.
- **Scripts:** one small inline script for the mobile menu disclosure and one for the one-time diagram draw (IntersectionObserver, skipped under reduced motion). Nothing else.

## 4. Proposed directory structure

```
/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── public/
│   ├── favicon.svg            (typographic JC monogram)
│   ├── jagdish-chaudhary-cv.pdf
│   └── robots.txt
├── src/
│   ├── content/
│   │   ├── config.ts
│   │   └── work/
│   │       ├── export-erp.md
│   │       ├── real-estate-rag.md
│   │       ├── mcp-server.md
│   │       └── devops-agent.md
│   ├── diagrams/              (4 SVG files)
│   ├── images/portrait.jpg    (supplied by owner)
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── SpecLayout.astro
│   ├── components/            (12 components)
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── 404.astro
│   │   └── work/
│   │       ├── index.astro
│   │       └── [slug].astro
│   └── styles/
│       ├── tokens.css
│       └── global.css
├── tests/
│   ├── pages.spec.ts          (every route renders, titles, no console errors)
│   ├── a11y.spec.ts           (axe on every route)
│   └── visual.spec.ts         (screenshots at 390 and 1280 for review)
└── portfolio-planning/        (unchanged)
```

**Existing files to modify:** none. The repository contains only `portfolio-planning/`, which stays as the record of decisions.

## 5. Responsive behaviour
Breakpoints and behaviours exactly as `design-system.md` §5. The specification grid collapses to one column below 900 px; the letterhead swaps to name plus Book a call plus Menu below 600 px; tables scroll inside their container; diagram panels scroll horizontally with the text alternative always visible.

## 6. Accessibility
Semantic landmarks, one h1 per page, skip link, visible focus, 44 px targets, `role="img"` plus text alternatives for diagrams, `prefers-reduced-motion` honoured, colour contrast as documented. Verified by axe in the test suite and by a manual keyboard pass before Gate 5 sign-off.

## 7. Performance
Static HTML; fonts subset to Latin and preloaded with `font-display: swap`; portrait served as AVIF and WebP with a JPEG fallback through Astro's image pipeline; no third-party scripts; total JavaScript under 5 KB. Target: Lighthouse performance 95 or above on mobile, measured with Lighthouse in the testing step.

## 8. SEO and metadata
Per-page title and description from a central map; canonical URLs from the configured domain; Open Graph and Twitter card tags with a generated text-only share image in the site's typography; `sitemap.xml` and `robots.txt`; JSON-LD `Person` on Home and About with name, job title, location and LinkedIn. No keyword stuffing.

## 9. Contact functionality
"Book a call" links to the owner's Calendly URL (`target="_blank"`, `rel="noopener"`). Email as a `mailto:` link with the address visible as text. WhatsApp as a `wa.me` click-to-chat link. No form, no backend. If Calendly's inline embed can be made to match the design quietly, it is used on the Contact page; otherwise a link.

## 10. Analytics
Not included by default. If the owner wants visitor counts, a privacy-respecting, cookie-free script (for example Plausible or Fathom) is a one-line addition and needs no consent banner. Google Analytics is not recommended because it would require a consent interface that the design has no place for.

## 11. Testing
- `astro check` and `astro build` in CI.
- Playwright: every route returns 200, has a single h1, has no console errors, and matches its expected title.
- axe-core on every route with zero serious or critical violations.
- Screenshot run at 390 px and 1280 px for human review, committed to `tests/__screenshots__` only on request.
- Manual: keyboard-only pass, reduced-motion pass, 200 percent zoom pass, one real phone.

## 12. Deployment
The build output is a `dist/` folder of static files. It runs unchanged on Netlify, Vercel, Cloudflare Pages or GitHub Pages. Recommendation: Cloudflare Pages or Netlify, free tier, deploy on push to `main`, with the owner's domain pointed at it. No deployment is performed without the owner's separate authorisation (rule 9 of the brief). A `.github/workflows/ci.yml` running build and tests on pull requests is included; a deploy step is added only once hosting is chosen.

## 13. Open technical questions (Round 4)
1. Hosting provider and domain name.
2. Analytics: none, or a privacy-respecting counter.
3. Content editing: Markdown in the repository (default) or something else.
4. Confirm the stack (Astro recommended; Eleventy or plain HTML acceptable).
