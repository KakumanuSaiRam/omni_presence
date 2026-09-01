# API publisher

One markdown file → every social/API surface that has credentials in `.env`.
Unconfigured platforms are reported as `skipped (not configured)` and never fail the run.

```bash
npm run publish -- publisher/posts/example.md
# or
node publisher/publish.mjs path/to/post.md
```

Post format (YAML frontmatter + body):

```markdown
---
title: EAPCET web options week
image: https://sivatuitions.github.io/gallery/centre-office.jpg   # optional
platforms: [facebook, instagram, x, linkedin, reddit, gbp, telegram]
---
Body text. Canonical NAP only — never invent results or student counts.
```

`platforms` is optional; omit it to attempt every provider. `image` may be a local path
(resolved relative to the markdown file) or an `https://` URL. Instagram **requires**
a public `https` image URL — a local file is skipped with a reason.

Results print one line per platform and append to `publisher/history.jsonl` (gitignored).

GBP has no live API in this tool: the post is written to `publisher/outbox/gbp-<date>.txt`
with paste-into-GBP instructions.

## Per-platform setup

Secrets live in `.env` (see `.env.example`). Never commit them.

### Facebook Page

1. Create an app at [developers.facebook.com](https://developers.facebook.com/).
2. Add the **Facebook Login** product and the **pages_manage_posts**, **pages_read_engagement**
   permissions.
3. Convert a long-lived user token into a **Page access token** for the Siva Tuitions Page.
   `FB_PAGE_ID` is the numeric Page id; `FB_PAGE_ACCESS_TOKEN` is that token.
4. **App Review.** In development mode you can only post as app admins/testers. Live posting
   as the business Page needs Meta App Review for `pages_manage_posts`. Review is slow and
   often asks for a screencast of a real Page using the app.

Posts: text → `POST /{page-id}/feed`. Photo → `POST /{page-id}/photos`.

### Instagram (same Meta app)

1. The Facebook Page must be linked to a Professional Instagram account.
2. Grant `instagram_content_publish`, `instagram_basic`, `pages_show_list`.
3. `IG_USER_ID` is the Instagram professional account id (Graph `/{page-id}?fields=instagram_business_account`).
4. App Review again: `instagram_content_publish` is a gated permission.
5. Every post needs an image. The Graph API takes `image_url` pointing at a **publicly
   reachable** file — host it on sivatuitions.github.io (or sivatuitions.com after DNS) and put that URL in
   frontmatter. Local files are skipped on purpose.

Flow: create media container → `media_publish`.

### X (Twitter)

1. Developer account at [developer.x.com](https://developer.x.com/) → Project → App.
2. App permissions: **Read and write**. Generate user-context tokens:
   `X_API_KEY` / `X_API_SECRET` (consumer) and `X_ACCESS_TOKEN` / `X_ACCESS_SECRET`.
3. This publisher signs `POST /2/tweets` with OAuth 1.0a HMAC-SHA1 (`node:crypto` only —
   no Twitter SDK).
4. **Cost.** The free developer tier is not a reliable write path. Limits change, but
   posting more than a handful of tweets typically requires **Basic** (paid, currently
   on the order of $100–200/month) or Pro. Treat X as optional until that bill is accepted.

Media goes through the v1.1 upload endpoint, then the v2 tweet.

### LinkedIn (organization)

1. Create an app at [linkedin.com/developers](https://www.linkedin.com/developers/).
2. Request the **Community Management API** (and/or Marketing API) product. Organization
   posts need the app associated with the company Page and an access token with
   `w_organization_social`.
3. `LINKEDIN_ACCESS_TOKEN` is a member token that can post as the org.
   `LINKEDIN_ORG_URN` is `urn:li:organization:<id>` (numeric id alone is accepted).
4. **Approval hurdle.** LinkedIn’s Marketing / Community Management access is a form +
   review. Personal-profile tokens (`w_member_social`) cannot post as the company Page.
   Tokens expire; plan a refresh flow or re-auth when posts start 401’ing.

Endpoint: `POST /rest/posts` with `LinkedIn-Version`. Images use `images?action=initializeUpload`.

### Reddit

1. [reddit.com/prefs/apps](https://www.reddit.com/prefs/apps) → create a **script** app.
2. `REDDIT_CLIENT_ID` (under the app name), `REDDIT_CLIENT_SECRET`, plus the account
   `REDDIT_USERNAME` / `REDDIT_PASSWORD`. Script apps are free.
3. `REDDIT_SUBREDDIT` optional. Default is the account’s profile (`u_<username>`), which
   is the right target for institute updates. Do **not** blast r/andhra_pradesh or
   exam subs — those require genuine participation (see `docs/GEO-PLAYBOOK.md`).
4. Reddit requires a descriptive User-Agent; password grant is only for script apps you own.

### Google Business Profile — stub only

The GBP API is a restricted Google Cloud product: you must get the business verified,
enable the API, and often complete a separate access request. Until that exists, this
provider writes `publisher/outbox/gbp-<YYYY-MM-DD>.txt` and prints paste instructions
for [business.google.com](https://business.google.com). That is intentional, not a bug.

### Telegram channel (bonus)

1. Talk to [@BotFather](https://t.me/BotFather), create a bot, copy `TELEGRAM_BOT_TOKEN`.
2. Create a channel, add the bot as **administrator** with Post messages.
3. `TELEGRAM_CHANNEL_ID` is `@yourchannel` or the `-100…` chat id.
4. Free. `sendMessage` / `sendPhoto`. Suitable for a public “Siva Tuitions & Coachings”
   updates channel; WhatsApp Channels still have no bot API.

## What this does not replace

The Playwright broadcaster in `broadcaster/` still exists for one-off posts from a
logged-in browser when an API is blocked (Instagram without a public image URL, GBP,
WhatsApp). Prefer this publisher once tokens are in `.env`.
