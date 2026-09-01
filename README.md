# omni_presence — Siva Tuitions & Coachings

AI-visibility (GEO) project for [Siva Tuitions & Coachings](https://sivatuitions.com),
Pattabhipuram, Guntur — website, off-site playbook, social broadcast tool, and
validation loop.

## Repo map

| Path | What |
|---|---|
| `src/` | Astro 5 static site (34+ pages, JSON-LD structured data throughout) |
| `src/data/site.js` | Single source of truth: NAP, director, courses, counselling, locations, FAQs |
| `src/content/blog/` | Question-targeted guides (EAPCET, NEET, POLYCET, counselling) |
| `public/llms.txt` | Curated business summary for AI crawlers |
| `public/robots.txt` | Explicitly allows GPTBot, ClaudeBot, PerplexityBot, etc. |
| `broadcaster/` | One-click post-everywhere tool (see its README) |
| `docs/GEO-PLAYBOOK.md` | Full off-site strategy: indexing, GBP, citations, social, cadence |
| `docs/VALIDATION.md` | Monthly AI-visibility test queries + scoring |
| `docs/CURSOR-HANDOFF.md` | Agentic prompt for scale-out work in Cursor |
| `docs/social-drafts/` | Ready-to-paste profile copy and launch posts |
| `.github/workflows/deploy.yml` | Builds and deploys to GitHub Pages on push to main |

## Develop

```bash
npm install
npm run dev        # local dev
npm run build      # must pass before any commit
```

## Deploy

Push to `main` → GitHub Actions builds and deploys to GitHub Pages
(custom domain `sivatuitions.com` via `public/CNAME`). One-time setup:
repo Settings → Pages → Source: GitHub Actions; add DNS records per
`docs/GEO-PLAYBOOK.md` Phase 1.

Secrets (TrueFoundry, IndexNow) live in `.env` — gitignored, never committed.
