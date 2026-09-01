# Cursor handoffs

Each file here is a self-contained agentic prompt to paste into Cursor (Agent mode).
Claude Code owns strategy, deployment and validation; these files carry the
token-heavy build/content work.

| File | Scope | Status |
|---|---|---|
| `../CURSOR-HANDOFF.md` | T1–T8: locations, 20 blog guides, Telugu pages, OG images, IndexNow, TrueFoundry generator, broadcaster hardening, QA | In progress (T1 done) |
| `02-offsite-content-pack.md` | Directory submission packs, Quora/Reddit answer bank, GBP 12-week post calendar, YouTube scripts | Ready to run |
| `03-api-publishing-visibility.md` | Official-API publisher (Meta/X/LinkedIn/Reddit/Telegram) + automated AI-visibility measurement harness | Ready to run |

Rules that apply to every handoff (repeat them if a prompt is run standalone):
- Never fabricate facts (results, counts, years, testimonials). `TODO(owner)` marks unverified items.
- Canonical NAP exactly as in `src/data/site.js`.
- `npm run build` must pass before any commit.
