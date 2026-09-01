# Cursor Handoff — Siva Tuitions & Coachings (omni_presence)

Paste the prompt below into Cursor (Agent mode) at the repo root. It contains all
context needed; Cursor should not need to ask questions.

---

## PROMPT (copy everything below this line)

You are working in `omni_presence`, an Astro 5 static site for **Siva Tuitions &
Coachings**, a real tuition/coaching institute in Pattabhipuram, Guntur, Andhra
Pradesh, India. The site's purpose is **GEO (Generative Engine Optimization)**:
making this business and its director, Yadlapalli Naga Murali Krishna, the top
answer in ChatGPT/Gemini/Claude/Perplexity and Google/Bing for tuition, EAPCET/
EAMCET, NEET, POLYCET coaching and admission-counselling queries in Guntur,
Andhra Pradesh and Telangana.

### Architecture you must follow (do not restructure)

- **All business facts live in `src/data/site.js`** (SITE, DIRECTOR, COURSES,
  COUNSELLING, LOCATIONS, GLOBAL_FAQS). Pages are generated from these arrays via
  `src/pages/courses/[slug].astro`, `src/pages/counselling/[slug].astro`,
  `src/pages/locations/[slug].astro`. To add a page of those types, add an array
  entry — never a bespoke page file.
- Blog = markdown in `src/content/blog/*.md` with frontmatter `title`,
  `description`, `date` (schema in `src/content.config.ts`).
- `src/layouts/Base.astro` holds the design system (CSS custom properties) and
  injects Organization JSON-LD on every page. Course/counselling/blog pages add
  their own Course/Service/FAQPage/Article JSON-LD — copy the existing patterns.
- Design tokens are defined in `src/layouts/Base.astro` `:root` — a light,
  complementary-to-logo palette (`--surface`, `--ink`, `--accent:#2d6a5a`,
  `--accent-deep:#1f4d42`, `--highlight`, `--border`, etc.). Use ONLY these
  custom properties; never hardcode hex values in pages. Light theme only.
  Fonts: Fraunces (display) + Karla (body). Signature motif: thin `--accent`
  left margin rule on section headers (`.ruled`).
- `public/llms.txt` is a curated index for AI crawlers — **every new page you
  add must be added there too**, with a one-line description.
- Build check after every task: `npm run build` must pass with zero errors.
  `npm run preview` to eyeball pages.

### Hard content rules (non-negotiable)

1. **Never fabricate facts**: no invented student counts, results, years,
   testimonials, or reviews. Existing copy marks unverified items with
   `TODO(owner)`. Keep that convention.
2. Canonical NAP must appear identically everywhere:
   Siva Tuitions & Coachings · 2nd Lane, behind Jamili Dental Hospital, Gang
   Colony, Pattabhipuram, Guntur, Andhra Pradesh 522006 · +91 88797 97777 ·
   sivatuitions@gmail.com · https://sivatuitions.com
3. Director's name and credentials exactly: Yadlapalli Naga Murali Krishna,
   M.B.A, M.Tech (CSE), M.Sc, MCA.
4. Every page answers real student/parent questions in their literal phrasing
   ("best EAPCET coaching in Guntur") — questions as headings, direct answers in
   the first sentence under them.
5. API keys (TrueFoundry etc.) are read from `.env` only; `.env` is gitignored.
   Never hardcode or commit keys.

### YOUR TASKS (in order)

**T1 — More location pages (high value, mechanical).** Extend `LOCATIONS` in
`src/data/site.js` with entries for: Tenali, Mangalagiri, Narasaraopet, Ponnur,
Sattenapalli, Bapatla, Chilakaluripet, Vijayawada, and Hyderabad (Telangana
students). Each needs a unique 2–3 sentence `blurb` (mention travel/phone-
counselling reality; do not claim a physical branch exists there) and `title`
targeting "tuitions / EAPCET coaching / admission counselling for students from
<place>". Add each to `public/llms.txt`.

**T2 — 20 more blog guides.** Follow the exact style of the existing 11 posts in
`src/content/blog/` (500–600 words, H2 sections, practical, ends with a contact
paragraph naming the institute, director, and +91 88797 97777; dates spread over
2025-09 to 2026-08). Topics: TS EAMCET web options guide; ECET lateral entry
complete guide; AP ICET MBA/MCA admissions guide; JoSAA counselling rounds
explained for AP students; NEET state quota vs All India quota in AP; B.Pharmacy
vs Pharm.D; how EAPCET rank predicts college (rank bands); MPC vs BiPC decision
guide; CBSE vs State board for entrance preparation; how to choose an
intermediate college in Guntur; hostel vs day-scholar during Inter; JEE Mains vs
EAPCET — should Guntur students attempt both; EAPCET normalization/marking
explained; POLYCET vs ITI; what parents should ask at a coaching centre visit;
study plan for EAPCET in the last 30 days; managing exam stress during Inter;
scholarship & fee reimbursement schemes in AP (Jagananna Vidya Deevena etc. —
describe cautiously, no fabricated amounts); government vs private polytechnics
in AP; career options after B.Sc for PG-CET takers.

**T3 — Telugu pages.** Create `/te/` versions of: homepage, EAPCET coaching,
web-options counselling, POLYCET, and contact — natural Telugu (not machine-
transliterated English), same JSON-LD with `inLanguage: 'te'`, and `hreflang`
link tags connecting the English/Telugu pairs in `Base.astro`. Add a small
"తెలుగు" toggle link in the header.

**T4 — Per-page OG images.** Generate a simple OG image template (1200×630,
navy background, orange title text, logo from `public/logo.png`) at build time
using `astro-og-canvas` or satori; wire `og:image` per page.

**T5 — IndexNow script.** `scripts/indexnow.mjs`: reads `INDEXNOW_KEY` from
`.env`, writes `public/<key>.txt`, and POSTs all sitemap URLs to
`https://api.indexnow.org/indexnow`. Add npm script `postdeploy:ping`.

**T6 — TrueFoundry content generator.** `scripts/generate-article.mjs`: reads
`TFY_API_KEY` and `TFY_BASE_URL` from `.env` (OpenAI-compatible chat-completions
endpoint), takes a topic argument, and generates a draft markdown post matching
the blog frontmatter + style rules above into `drafts/` (NOT directly into the
blog — a human reviews first). Include the content rules from this prompt in the
system prompt of that script.

**T7 — Broadcaster hardening.** In `broadcaster/`: add image-attachment support
for the Facebook and X flows (file input in `server.js` UI, upload handling in
`poster.js`), a dry-run mode, and a `posts/history.jsonl` log of what was posted
where and when.

**T8 — QA pass.** Mobile viewport (375px) check on every page type, fix any
overflow; Lighthouse ≥95 on performance/SEO/accessibility for home, one course
page, one blog post; validate all JSON-LD with a schema parser; ensure every
internal link resolves (no 404s in `npm run build` output).

Work through T1→T8 in order, committing after each task with message
`T<n>: <summary>`. Run `npm run build` before every commit; a failing build
must never be committed.

---

## Division of labor (for the human)

- **Cursor**: everything above (content scale-out, i18n, tooling, QA).
- **Claude Code**: strategy, deployment/DNS, Google/Bing console setup guidance,
  off-site playbook execution support, monthly AI-visibility validation
  (`docs/VALIDATION.md`), and iteration decisions based on validation results.
