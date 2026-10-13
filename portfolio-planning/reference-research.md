# Reference Research

**Status:** Prepared for Gate 2
**Date:** 2026-10-13

## Research limitation, stated plainly

This session cannot open external web pages. DNS resolution fails for every outside host and the environment's proxy returns nothing for direct requests. Web search summaries do work. So:

- **Verified today via search summaries:** marked **[search]**.
- **From prior knowledge of well-known sites, not re-inspected today:** marked **[memory]**. These sites may have changed. Treat observations as design lessons, not as current screenshots.
- No reference below is a template to copy. Each entry ends with the one or two ideas worth borrowing for this project and what to leave behind.

## What the genre looks like right now (and why it is the risk)

Search results confirm the pattern the brief warns about. AI-built and AI-adjacent sites converge on a centred hero, three feature cards, and a purple-blue gradient; one design blocklist specifically names purple-pink-blue gradients, cards with a coloured left border, Inter/Roboto/system fonts as defaults, and fabricated stats and testimonials **[search]**. Fractional-CTO and AI-consultant sites found by search are almost all agency or marketplace pages: a credibility line, a "book a call" button, a services grid **[search]**. Two useful conventions did emerge from that group: state the call's length and who takes it ("30 minutes, direct with a senior partner") and put one clear booking prompt near the top rather than many equal buttons **[search]**.

Conclusion: the quickest way to look generic here is to look like an AI product. The quickest way to look distinctive is to look like a serious person's published work.

## References studied

### 1. Rauno Freiberg, rauno.me **[search]**
Personal site of a design engineer, built as an "operating system" with a dock, horizontal galleries, and small interface sounds. Praised for interaction craft.
**Lesson:** his own published rule that frequent, low-novelty actions should avoid extra animation. The site earns its motion because interaction *is* his subject.
**Leave behind:** the OS metaphor and playfulness. Jagdish's subject is judgement, not interface delight. Borrow the restraint rule, not the toys.

### 2. Paco Coursey, paco.me **[memory]**
Near-monochrome, small type, a single column of plain prose, monospace for metadata, generous but not showy whitespace. Reads like a quiet notebook.
**Lesson:** a personal site can be almost entirely typographic and still feel designed, because the type scale and spacing are exact. Monospace metadata labels (dates, roles) as a quiet system.
**Leave behind:** the smallness. A consultative site for decision-makers needs a stronger first-screen statement than a notebook.

### 3. Rasmus Andersson, rsms.me **[memory]**
Designer of the Inter typeface. Site is a dense, tool-like index of work with tabular lists and precise alignment.
**Lesson:** tables and lists, well set, are a legitimate portfolio format for someone whose work is systems. Jagdish's eight-industry table could be a design feature rather than a CV leftover.
**Leave behind:** the density. One good table, not a wall of them.

### 4. Will Larson, lethain.com **[memory]**
Engineering leader (author of *An Elegant Puzzle*). Site is almost unstyled: a text column, a list of essays, a short bio.
**Lesson:** this is what most engineering-leader sites look like, and it is why a well-art-directed one will stand out. Credibility there comes from the writing, which Jagdish does not have yet; his must come from case notes and method.
**Leave behind:** the absence of design.

### 5. Brian Lovin, brianlovin.com **[search, memory]**
Wiki-style persistent sidebar navigation, soft grey surfaces, consistent list rows.
**Lesson:** a persistent index works for a site with many small pages. For a site of eight pages, it would feel empty.
**Leave behind:** the sidebar. A compact top navigation suits this scope.

### 6. Pentagram, pentagram.com **[search, memory]**
A single serif family at calibrated sizes for hierarchy and a disciplined grid for images and text; a tile grid that lets dozens of projects coexist **[search]**.
**Lesson:** one type family, many sizes, is enough for authority. Hierarchy by scale and spacing, not by adding fonts and colours.
**Leave behind:** the image-grid model. Jagdish has no image library; his grid must be built from text and diagrams.

### 7. AREA 17, area17.com **[memory]**
Digital studio. Large grotesk headlines, numbered sections, hairline rules, case studies that open with a one-line problem statement before any visuals.
**Lesson:** numbered sections and hairlines give an engineering feel without decoration. Opening every case study with the problem, not the solution, matches how Jagdish's CV already writes.
**Leave behind:** studio scale. His site is one person.

### 8. Stripe Press, stripe.press **[search]**
Dark near-black ground, serif book descriptions, sans navigation, 3D rotating covers, per-book accent colours.
**Lesson:** the serif-for-content, sans-for-interface pairing reads as literate and expensive. Per-item accent colour is a way to give each case study its own character inside one system.
**Leave behind:** 3D and dark ground. Dark plus motion is exactly the AI-vendor silhouette to avoid.

### 9. thoughtbot, thoughtbot.com **[memory]**
Engineering consultancy. Plain, friendly, service-led; case studies with named clients and quoted outcomes.
**Lesson:** the consultancy pattern depends on named clients and numbers, which Jagdish mostly cannot publish. His case studies must earn trust through decision-quality instead: what was considered, what was rejected, where humans stay in the loop.
**Leave behind:** the service-catalogue structure.

### 10. Maggie Appleton, maggieappleton.com **[memory]**
Illustrated "digital garden" with hand-drawn diagrams explaining technical ideas.
**Lesson:** explanatory diagrams are the most honest visual asset available when screenshots are not. A consistent diagram language (same stroke, same node shapes, same way of marking the human-approval step) can become the site's visual signature.
**Leave behind:** the illustrative warmth. Jagdish's diagrams should look like engineering schematics, not sketches.

### 11. rdotsvg.github.io **[search]**
Minimal developer site pairing Host Grotesk with ServerMono, colours as plain CSS variables.
**Lesson:** a grotesk plus a monospace is enough for a technical identity, and plain CSS custom properties are a sufficient design-token system for a site this size.

## Design characteristics distilled

| Characteristic | What the references show | Decision for this project |
|---|---|---|
| Typography | The strongest sites use one or two families at a wide, deliberate scale. Monospace for metadata is a recurring technical signal. | Two families maximum plus a mono for labels. Hierarchy by scale and spacing. No Inter, Roboto, or system fonts as the face of the site. |
| Composition | Numbered sections, hairlines, asymmetric columns, tabular lists. | Asymmetric grid with a metadata margin. Tables set as design objects. |
| Navigation | Compact top nav for small sites; sidebars only for large indexes. | Top navigation, four or five items, visible booking link. |
| Project presentation | Problem-first openings; per-project accent or layout variation inside one system. | Each case study chooses its own emphasis (architecture, integration, agent safety, operations) with a shared skeleton. |
| Imagery | Where there are no photographs, diagrams and typography carry the page. | A consistent schematic diagram language plus one art-directed portrait. |
| Motion | The best interaction designers argue for less motion on routine actions. | Hover and focus states, one entrance transition per page at most, diagrams may draw once. Full reduced-motion support. |
| Colour | Near-monochrome with one accent is the common thread of credible personal sites. | Paper or ink ground, one accent, no gradients. |
| Mobile | Single column with preserved type scale. | Design the mobile layout, do not shrink the desktop one. |

## Sources consulted today
- https://www.killerportfolio.com/by/rauno-freiberg
- https://sebastiandedeyne.com/rauno-web-interface-guidelines/
- https://design.withfudge.com/share/pentagram.com-design
- https://area17.com/work/pentagram-website
- https://siiimple.com/stripe-press/
- https://yuinchien.com/p/stripe-press
- https://www.mintlify.com/rdotsvg/rdotsvg.github.io
- https://scrimba.com/articles/minimal-web-developer-portfolio-examples/amp/
- https://superdesign.dev/blog/fix-generic-ai-landing-page
- https://ctoondemand.com/fractional-cto
- https://unicornplatform.com/blog/great-personal-websites-showcase-your-best-self-online/
