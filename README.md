---
title: Personal Academic Website
type: website-guide
created: 2026-10-28
status: active
---

# Lei Feng's academic website

Static HTML/CSS website for GitHub Pages. The visual reference is [Haobo Wang's homepage](https://hbzju.github.io/): a centered layout, restrained blue accents, and serif headings. Research interests use three illustrated modules without numeric prefixes, in columns on desktop and a vertical layout on mobile. Each module displays a concise overview followed by its published representative works and verified arXiv preprints, one per list item, with no expandable controls. The personal GitHub link and review-invitation email row are omitted.

## Editing content

- `site-data.js`: profile, research interests, complete publications, team members, services, employment experience, education, and honors, including provenance HTML.
- Each research theme's `primaryPublicationIds` controls which works lead its list. A `publicationId` matches the publication's `sourceIndex` and reuses its venue, year, and URL. Works without a publication record appear only when `arxiv` contains a verified `id`, `url`, and `verifiedOn` date, and display `arXiv:<id>`. Unverified manuscripts remain source material only; preprints remain outside the published-paper archive.
- Research descriptions follow the owner's September 3 and October 18, 2026 presentations. `sourceMeta.researchSources` and each theme's `sources` retain the original filenames and slide references. The three main themes are AI Agents, Agentic RL, and AI Security. AI Agents includes tool use and planning, world models, conversational interaction, and memory. A theme can use `paragraphs` for several descriptive paragraphs or `description` for a single paragraph.
- Oral, Spotlight, SAC Highlight Award, and Outstanding Paper Honorable Mention designations are displayed alongside the short venue name. Acceptance-rate details remain below each paper.
- `build-site.mjs`: page layout, the complete publication list, and research descriptions.
- `style.css`: shared typography, layout, mobile breakpoints, and print styles.
- `site.js`: mobile navigation.
- `assets/lei-feng.jpg`: portrait from the existing [Southeast University faculty profile](https://cs.seu.edu.cn/fenglei/main.htm).
- `assets/research-agents.svg`, `assets/research-rl.svg`, and `assets/research-security.svg`: editable vector illustrations for the three research modules. They share a 320 × 280 canvas, blue and teal accents, compact labels, and accessible descriptions, with detailed agent, learning, and security workflows.

After changing content or the layout generator, run:

```powershell
node build-site.mjs
```

Commit the generated `index.html` and `research.html` along with source changes. GitHub Pages serves these files directly; no framework or server build is required. Direct edits to generated HTML will be replaced the next time the generator runs.

## Local preview

Open `index.html` directly in a browser, or run this command from the repository directory:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Then visit [the local preview](http://127.0.0.1:8000/). Stop the server with Ctrl+C.

## Content preserved during the redesign

The homepage displays the full publication list, grouped by year, with year anchors for navigation. Historical publications retain their original content even though current research interests focus on AI agents, agentic RL, and AI security. The separate publication page provides the same full list; representative works link directly to the corresponding publication when available. There is no search panel or publication-total label.

Group, Academic service, Experience, and Honors are sections of the homepage. The header navigation links jump to About, Research, Publications, Experience, Honors, Group, and Service on the homepage. Experience combines the four academic appointments in `experience` with the original two degrees in `education`, newest first. Previous `#education` and `#Education` links still reach this section. There are no separate Group or Service pages. The employment entries follow the owner's screenshot, recorded in `sourceMeta.experienceSource`.

The homepage contains 43 academic-service entries, 4 employment entries, 2 education entries, 10 honors, and current team lists with 2 postdoctoral researchers, 10 PhD students, and 22 master's students. PhD and master's students are ordered by starting year, with existing order retained within each year. Group members appear one per line at every screen size. Current member names use English given-name/family-name order, with original Chinese names preserved in `nameZh` tooltips. Subgroup headings use English without Chinese translations. Past Members contains thirteen alumni, with former roles and destinations maintained in `site-data.js`. Members can be a name string or an object with `name` and `role` fields. The optional `period` field displays a current member's starting year beside the name. An optional `currentPosition` displays the former role and destination after the name; `nameZh` supplies a Chinese-name tooltip.

Conference Area Chair and Conference Senior Program Committee Member appointments are listed in separate service groups, with years assigned by the owner.

The original team roster and the 2025–2026 World's Top 2% Scientists honor were supplied by the site owner on 2026-10-28. Honor dates appear in the date column rather than repeated bracketed prefixes in each entry.

Previously missing publication URLs were checked against arXiv and official conference records. Their verification sources and version differences are retained in `sourceMeta.publicationLinkChecks`; existing titles, author lists, venues, and award annotations are preserved. English text uses its original capitalization, with no forced uppercase styling. Body text is 18px on desktop, with larger supporting text and responsive typography on mobile.

The original Google verification HTML and research code archives are retained.
