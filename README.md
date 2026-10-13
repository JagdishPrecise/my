# Jagdish Chaudhary — personal site

The personal site of Jagdish Chaudhary, AI Solutions Architect and CTO. A static site built with [Astro](https://astro.build), designed as a printed specification: paper ground, a serif for headings, mono metadata, and a pen-ink accent for the one idea that runs through all the work, that a human stays in the loop.

The design decisions, research and approvals that produced this site are recorded in `portfolio-planning/`.

## Run it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run preview    # serve dist/
```

## Check it

```bash
npm run check                 # Astro and TypeScript diagnostics
npm test                      # Playwright: every route renders, no console errors, no horizontal scroll, axe WCAG 2.1 AA
npm run test:screens          # full-page screenshots of every route at 1280 and 390 px into tests/__screenshots__/
```

Tests start the preview server themselves. The config uses the pinned Chromium found in the cloud build environment when present; elsewhere run `npx playwright install chromium` once, or set `CHROMIUM_PATH`.

## Edit content

| What | Where |
|---|---|
| Name, title, location, links, email, Calendly URL, call length | `src/lib/site.ts` |
| Case studies | `src/content/work/*.mdx`, one file each. Front matter holds the metadata shown in the margin and in lists; the body is Markdown with a few components (`<DiagramPanel>`, `<ReviewMark>`, `<Placeholder>`, `<DataTable>`). Copy an existing file to add a fifth study. `order` controls sequence, `featured` controls the homepage. |
| Architecture diagrams | `src/diagrams/*.svg`, hand-authored. Nodes are rectangles; the human-review node uses `var(--pen)`. Paths with `class="draw"` animate once on first view. |
| Method, numerals, industry table | `src/lib/site.ts` |
| About page prose and tables | `src/pages/about.astro` |
| Portrait | Add `src/images/portrait.jpg` (square crop recommended, at least 1600 px). The placeholder disappears automatically. |
| CV | Replace `public/jagdish-chaudhary-cv.pdf` |
| Share image | `public/og.png`, 1200 × 630 |
| Design tokens | `src/styles/tokens.css` |

Anything still marked **Placeholder** on the live pages is content the owner has not supplied yet. See `portfolio-planning/content-requirements.md` for the full list.

## Deploy

The build output is a folder of static files. Any static host serves it.

**Cloudflare Pages or Netlify:** connect the repository, set the build command to `npm run build` and the output directory to `dist`. Set the environment variable `SITE_URL` to the site's full URL (for example `https://jagdishchaudhary.com`) so canonical links, Open Graph URLs and the sitemap are correct.

No deployment has been performed from this repository. Deployment is a separate, explicit decision.

## Structure

```
src/
  content/work/      case studies (MDX)
  content.config.ts  collection schema
  components/        twelve components, scoped CSS
  layouts/           BaseLayout (head, letterhead, footer), SpecLayout (margin + content grid)
  pages/             routes
  styles/            tokens.css, global.css
  diagrams/          SVG schematics
  lib/site.ts        owner facts and placeholders
tests/               Playwright suites
portfolio-planning/  discovery, strategy, design, and approval record
```
