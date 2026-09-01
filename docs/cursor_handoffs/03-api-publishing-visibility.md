# Handoff 03 — API-based publishing + AI-visibility measurement

Paste everything below into Cursor Agent mode at the repo root.

---

## PROMPT

You are working in `omni_presence` (Astro site + tooling for Siva Tuitions &
Coachings, a real coaching institute in Guntur, AP, India). Two build tracks:
(A) replace browser-automation posting with official platform APIs, and
(B) an automated AI-visibility measurement harness.

Ground rules:
- All secrets come from `.env` (gitignored) — never hardcode, never commit.
  Add every new variable to a committed `.env.example` with placeholder values.
- Node 24, ES modules, no TypeScript in scripts. Follow the code style of
  `scripts/generate-image.mjs` (fetch + retry with backoff on 429/503).
- Read `docs/GEO-PLAYBOOK.md` and `docs/VALIDATION.md` first — the harness
  automates the manual loop described there.
- Canonical business facts: `src/data/site.js`. Never fabricate metrics.

### Track A — `publisher/` (API-based publishing)

Build `publisher/publish.mjs <post.md>` where post.md has frontmatter
(`title`, `image` optional path, `platforms` list) and a body. One command
publishes to every configured platform, logs to `publisher/history.jsonl`,
and prints per-platform results. Implement providers as small modules in
`publisher/providers/`:

1. **Facebook Page + Instagram** — Meta Graph API (`FB_PAGE_ID`,
   `FB_PAGE_ACCESS_TOKEN`, `IG_USER_ID`). Page feed post (text/photo);
   IG via media container → publish (image required — skip with a clear
   message if no image).
2. **X** — API v2 `POST /2/tweets` with OAuth 1.0a user context
   (`X_API_KEY`, `X_API_SECRET`, `X_ACCESS_TOKEN`, `X_ACCESS_SECRET`).
   Implement HMAC-SHA1 signing with node:crypto — no heavy SDK.
3. **LinkedIn** — `POST /rest/posts` with `LINKEDIN_ACCESS_TOKEN`,
   `LINKEDIN_ORG_URN` (organization post).
4. **Reddit** — script-app OAuth (`REDDIT_CLIENT_ID`, `REDDIT_CLIENT_SECRET`,
   `REDDIT_USERNAME`, `REDDIT_PASSWORD`) → `POST /api/submit` self-post to
   `REDDIT_SUBREDDIT` (default: the account's profile u/ page).
5. **Google Business Profile** — STUB ONLY: GBP API needs Google approval;
   generate the post text to `publisher/outbox/gbp-<date>.txt` and print
   "paste into GBP" instructions.
6. **Telegram channel** (bonus, trivial API): `TELEGRAM_BOT_TOKEN`,
   `TELEGRAM_CHANNEL_ID` → `sendMessage`/`sendPhoto`.

Each provider: `isConfigured()` (all env vars present) and
`publish({title, body, imagePath})`. Unconfigured providers are reported as
`skipped (not configured)` — never errors. Document per-platform setup steps
(where to create the app, which scopes) in `publisher/README.md`, honestly
noting costs/approval hurdles (X free tier limits, Meta app review, LinkedIn
Marketing API access).

### Track B — `scripts/measure-visibility.mjs`

Automates `docs/VALIDATION.md`:
1. Read the query list from a new `scripts/visibility-queries.json`
   (create it from the queries in docs/VALIDATION.md, grouped brand/local/state).
2. For each query, ask each configured engine:
   - **Gemini** (`GEMINI_API_KEY`): model `gemini-flash-latest` with
     `tools: [{google_search: {}}]` (Grounding with Google Search) so answers
     reflect live search.
   - **Perplexity** (`PERPLEXITY_API_KEY`, model `sonar`) via
     https://api.perplexity.ai/chat/completions.
   - **OpenAI** (`OPENAI_API_KEY`, model `gpt-4o-mini` with `web_search`
     tool via Responses API) — skip gracefully if unset.
   - **Brave Search** (`BRAVE_API_KEY`) — classic SERP position of
     sivatuitions.com as a proxy for Claude's retrieval.
3. Score each answer: 3 = "Siva Tuitions" in the first three recommendations,
   1 = mentioned anywhere (regex on brand + director surname), 0 = absent.
   Also record which competing institutes were named (top 5 by frequency).
4. Write `docs/visibility-runs/<YYYY-MM-DD>.json` (raw) and append a summary
   row per engine to the table in `docs/visibility-log.md`.
5. Rate-limit politely (1 req/2s per engine), retry 429/503 with backoff,
   and print a final scoreboard: per-engine average, per-query-group average,
   deltas vs the previous run if one exists.
6. Add npm scripts: `measure` and `publish`.

Commit per track: `T-A: <summary>` / `T-B: <summary>`. `npm run build` must
still pass (scripts must not break the site build).
