# How to get API keys (you only have Gemini so far)

Put every secret in `omni_presence/.env` (already gitignored). Copy names from `.env.example`. Never paste keys into chat, GitHub, or directory listings.

**Gemini is enough to run the site and the visibility score.** Everything else is optional. Justdial / Sulekha / UrbanPro / IndiaMART / Apple / Bing Places do **not** use API keys — see `docs/offsite-pack/directories/OWNER-CHECKLIST.md`.

---

## 1. Gemini — you already have this

Used by:

- `npm run measure` — asks Gemini (with Google Search grounding) the Guntur coaching queries
- `scripts/generate-image.mjs` — optional image generation

**If it is not already in `omni_presence/.env`:**

1. Open [Google AI Studio](https://aistudio.google.com/apikey) while signed into the Google account that should own the quota.
2. Create API key → copy it.
3. In `omni_presence/.env`:

```
GEMINI_API_KEY=the-key-from-aistudio
```

4. From `omni_presence/`: `npm run measure`

Unconfigured engines (Perplexity, OpenAI, Brave) print `skipped (not configured)` and the run still succeeds.

---

## 2. IndexNow — free, 2 minutes, no Google account

Already configured. Key file is live at
`https://sivatuitions.github.io/sivatcgunturidxn2026.txt`.

After `npm run build`, from `omni_presence/`:

```bash
npm run postdeploy:ping
```

That submits the sitemap to IndexNow and Bing.

---

## 3. Visibility extras — optional

`npm run measure` scores Gemini even if these are empty.

| Variable | What it adds | How to get it | Cost |
|---|---|---|---|
| `PERPLEXITY_API_KEY` | Perplexity `sonar` answers | [Perplexity API settings](https://www.perplexity.ai/settings/api) | Paid usage |
| `OPENAI_API_KEY` | ChatGPT-class answers + web search | [platform.openai.com/api-keys](https://platform.openai.com/api-keys) | Paid usage |
| `BRAVE_API_KEY` | Classic Google-like SERP rank of sivatuitions.github.io | [brave.com/search/api](https://brave.com/search/api/) | Free tier exists |

You do **not** need these to publish the website.

---

## 4. Article drafts (TrueFoundry) — optional

`TFY_API_KEY` / `TFY_BASE_URL` / `TFY_MODEL` power `scripts/generate-article.mjs`. Only needed if you want that draft helper. If you already have a TrueFoundry key elsewhere, copy **only** those three names into `omni_presence/.env`. Do not commit them.

---

## 5. Social publisher (`npm run publish`) — optional, most need apps + review

Unconfigured platforms are skipped. Setup detail: `publisher/README.md`.

| Platform | Variables | What you must do | Honest hurdle |
|---|---|---|---|
| Facebook Page | `FB_PAGE_ID`, `FB_PAGE_ACCESS_TOKEN` | [developers.facebook.com](https://developers.facebook.com/) app → Page token | **Meta App Review** for live posting |
| Instagram | `IG_USER_ID` + same Meta app | Link IG Professional to the Page | App Review; every post needs a **public https image** |
| X / Twitter | `X_API_KEY`, `X_API_SECRET`, `X_ACCESS_TOKEN`, `X_ACCESS_SECRET` | [developer.x.com](https://developer.x.com/) app, Read and write | Free tier is not a reliable write path; Basic is paid |
| LinkedIn company | `LINKEDIN_ACCESS_TOKEN`, `LINKEDIN_ORG_URN` | [linkedin.com/developers](https://www.linkedin.com/developers/) + Community Management API | Access request; tokens expire |
| Reddit | `REDDIT_CLIENT_ID`, `REDDIT_CLIENT_SECRET`, user + password | [reddit.com/prefs/apps](https://www.reddit.com/prefs/apps) **script** app | Free. Post to your profile, not exam subs |
| Telegram | `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHANNEL_ID` | [@BotFather](https://t.me/BotFather), add bot as channel admin | Free, easiest after Gemini |
| Google Business Profile posts | none | Paste from `publisher/outbox/` into [business.google.com](https://business.google.com) | **No live API** in this repo (Google restricts it) |

**Do these last.** Directory NAP + GBP + Bing Places move AI answers more than a Facebook app review.

---

## What you can run today with only Gemini

```bash
cd omni_presence
# GEMINI_API_KEY already in .env
npm run measure
```

That writes `docs/visibility-runs/<date>.json` and a row in `docs/visibility-log.md`.
