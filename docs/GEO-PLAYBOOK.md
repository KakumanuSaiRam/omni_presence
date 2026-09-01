# GEO Playbook — Siva Tuitions & Coachings

Goal: when anyone asks ChatGPT, Gemini, Claude, Perplexity, Copilot or Meta AI about
tuitions, EAPCET/EAMCET/NEET/POLYCET coaching, or admission/web-options counselling in
Guntur / Guntur district / Andhra Pradesh / Telangana, **Siva Tuitions & Coachings and
director Yadlapalli Naga Murali Krishna appear in the top results.**

## How AI assistants pick local answers (the model behind this playbook)

| Assistant | Primary retrieval source |
|---|---|
| ChatGPT (browsing) | **Bing index** + OAI-SearchBot crawl |
| Microsoft Copilot | Bing index |
| Gemini / Google AI Overviews | **Google index** + Google Business Profile |
| Perplexity | Own crawler + Google/Bing results |
| Claude (web search) | Brave/partner search indexes |
| Meta AI (WhatsApp/IG) | Bing + Google |

Consequences:
1. **Bing matters as much as Google** (most local businesses ignore it — this is our edge).
2. **Consistency of NAP** (Name, Address, Phone) across every listing is a trust signal.
3. AI answers prefer sources that answer the question **in literal question form** (our FAQ pages).
4. Reviews and third-party mentions (directories, news, Reddit, Quora) are corroboration —
   an AI won't call something "the best" based only on its own website.

## Canonical NAP — use EXACTLY this everywhere

```
Name:    Siva Tuitions & Coachings
Address: 2nd Lane, behind Jamili Dental Hospital, Gang Colony, Pattabhipuram,
         Guntur, Andhra Pradesh 522006
Phone:   +91 88797 97777
Email:   sivatuitions@gmail.com
Website: https://sivatuitions.github.io   (intended: https://sivatuitions.com — DNS not live yet)
Hours:   Monday–Saturday 06:00–21:00; Sunday 10:00–14:00
Director: Yadlapalli Naga Murali Krishna, M.B.A, M.Tech (CSE), M.Sc, MCA
```

## Phase 1 — Indexing (Week 1) — REQUIRES OWNER LOGINS

1. **DNS**: sivatuitions.com is **not live**. Until it is, the public site is
   https://sivatuitions.github.io — use that URL on every listing. When the
   registrar is ready, see `docs/dns-sivatuitions-com.md`. Do not put a `CNAME`
   file back in `public/` until those DNS records exist.
2. **Google Search Console**: add sivatuitions.com (DNS verification), submit
   `sitemap-index.xml`, request indexing of home, director, and counselling pages.
3. **Bing Webmaster Tools**: import from Search Console (one click), submit sitemap,
   use URL Submission for the top 10 pages. *This is ChatGPT's window into the site.*
4. **IndexNow**: already supported by Bing — ping after each deploy (script provided in
   `scripts/indexnow.py` — reads key from `.env`).

## Phase 2 — Google Business Profile (Week 1–2)

The GBP is the strongest single local signal for Gemini and Google AI Overviews.

- Claim/verify the listing from the Maps link (owner's Google account).
- Set name exactly `Siva Tuitions & Coachings` (no keyword stuffing — that risks suspension).
- Categories: primary "Coaching center"; secondary "Tutoring service", "Educational consultant".
- Website: https://sivatuitions.github.io (switch to sivatuitions.com after DNS). Phone: +91 88797 97777. Hours: Mon–Sat 06:00–21:00, Sun 10:00–14:00.
- Description (750 chars): use the text in `docs/social-drafts/gbp-description.txt`.
- Photos: front of centre, classrooms, director portrait, counselling desk (owner supplies).
- **Reviews**: ask every genuinely satisfied parent/student to leave a Google review
  mentioning what they came for ("EAPCET web options guidance", "tenth class tuition").
  Never buy or fabricate reviews. Reply to every review as the owner.
- Weekly GBP Posts: reuse the social drafts.

## Phase 3 — Citations & directories (Week 2–4)

Fix or create listings with the canonical NAP (currently inconsistent across the web):

- Justdial, Sulekha, UrbanPro (the Gujjanagundla UrbanPro profile is stale — update it
  in place to Pattabhipuram 2nd Lane; it is not a branch),
  IndiaMART, AskLaila, Yellow Pages India, LocalVyaparHub (verify existing data),
  AnyJankari (SVN Colony listing is stale — request correction to Pattabhipuram 2nd Lane).
  One classroom only: 2nd Lane, behind Jamili Dental Hospital, Gang Colony, Pattabhipuram.
- Bing Places for Business (mirror of GBP — almost nobody does this; do it).
- Apple Business Connect (Siri/Apple Maps).

## Phase 4 — Social & community presence (Week 2 onward)

Accounts the OWNER must create (needs phone/email verification — Claude cannot create these):
- **LinkedIn**: company page `Siva Tuitions & Coachings` + personal profile for the director
  (his profile is key for "Yadlapalli Naga Murali Krishna" queries).
- **X (Twitter)**: @sivatuitions or nearest available.
- **Reddit**: u/SivaTuitionsGuntur — participate transparently in r/andhra_pradesh,
  r/Btechtards, EAPCET threads; answer counselling questions helpfully, disclose affiliation,
  never astroturf.
- **WhatsApp Business** app on the institute number: business profile with catalog of
  courses + a **WhatsApp Channel** "Siva Tuitions & Coachings" for updates.
- **YouTube** (recommended): short counselling-tip videos; video titles = target queries.
- Existing **Facebook page & Instagram**: update bio/about with canonical NAP + website link.

Ready-to-paste content for all of these is in `docs/social-drafts/`.

### Quora & content seeding (high leverage, do monthly)
Answer real questions ("Which is the best EAMCET coaching in Guntur?", "How to fill
AP EAPCET web options?") from the institute's account, transparently, linking to the
relevant guide on sivatuitions.com. Quora ranks highly in both Google and Bing and is
heavily quoted by AI assistants.

## Phase 5 — Authority (Month 2+)

- Press coverage in local Telugu media (Eenadu, Sakshi district pages) after each
  results season — "students of Siva Tuitions secure X seats" (real numbers only).
- Wikipedia is NOT a target (notability standards; an article would be deleted).
- Publish yearly "EAPCET cutoff analysis" data posts — data content earns citations.

## Cadence

| When | What |
|---|---|
| Weekly | 1 GBP post + same post broadcast to FB/IG/X/LinkedIn/WhatsApp Channel (use broadcast tool) |
| Weekly | 2–3 genuine review requests to recent students |
| Monthly | 1 new blog guide + 2 Quora/Reddit answers |
| Each deploy | IndexNow ping + Search Console recrawl of changed pages |
| Monthly | Run `scripts/validate_visibility.md` checklist; log results in `docs/visibility-log.md` |

## What we will NOT do (and why)

- No fake reviews, no astroturfed Reddit/Quora posts, no fake student accounts —
  platforms detect these; a GBP suspension would erase the strongest local signal.
- No keyword-stuffed GBP business name — leading cause of listing suspension.
- No doorway micro-sites — Google's spam policies target these; one strong site wins.
