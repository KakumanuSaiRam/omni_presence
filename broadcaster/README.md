# Broadcast tool — write once, post everywhere

A local dashboard that posts one update to Facebook, X, LinkedIn and Reddit in a
single click, using your own logged-in browser sessions (no credentials stored
anywhere — sessions live in a local browser profile at `~/.sivatuitions-broadcaster`).

## Setup (once)

```bash
npm install
npx playwright install chromium
npm run broadcast:login   # opens each platform — log in, then close the window
```

## Every time you want to post

```bash
npm run broadcast         # opens http://localhost:4600
```

Write the update, optionally attach an image (Facebook and X), tick platforms, press **Post everywhere**. Tick **Dry run** to log the payload to `posts/history.jsonl` without opening a browser. A visible browser does the posting so you can watch it happen; per-platform success/failure is reported back on the page. Every attempt is appended to `broadcaster/posts/history.jsonl`.

## Limitations (by platform policy, not by us)

- **Instagram** requires an image on every post and blocks web automation —
  paste the text + an image in the app manually.
- **WhatsApp Channels** have no posting API — paste into the Channel manually.
- Platform UIs change; if a platform starts failing, the browser stays visible
  so you can finish that post by hand, and the selector in `poster.js` needs a
  one-line update.
- Automated posting via browser sits in a gray zone of some platforms' terms of
  service. Volume here is one genuine business update at a time — the risk is
  low, but if any account gets warned, switch that platform to manual or to a
  scheduler like Buffer/Publer (both have free tiers and official API access).
