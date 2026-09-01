# Handoff 02 — Off-site content pack (citations, Q&A bank, post calendar, video scripts)

Paste everything below into Cursor Agent mode at the repo root.

---

## PROMPT

You are working in `omni_presence` (Astro site for Siva Tuitions & Coachings,
a real coaching institute in Pattabhipuram, Guntur, AP, India). Read
`src/data/site.js` (canonical business facts — NAP, director, courses,
counselling services) and `docs/GEO-PLAYBOOK.md` (strategy) first. Your job is
to produce **paste-ready off-site content** so the owner can execute the
playbook's Phases 2–4 without writing anything themselves.

Hard rules:
1. Use the canonical NAP from `src/data/site.js` character-for-character in every pack.
2. Never fabricate results, student counts, ratings, or testimonials. Where a
   real number belongs, write `TODO(owner: real figure)`.
3. All Q&A content must be genuinely useful first, promotional second — one
   institute mention + one relevant sivatuitions.com deep link per answer, max.
4. Tone: helpful senior counsellor, plain English (Telugu where specified).

Create these files under `docs/offsite-pack/`:

**A. `directories/<name>.md`** — one file each for: justdial, sulekha, urbanpro,
indiamart, asklaila, yellowpages-india, bing-places, apple-business-connect,
google-business-profile. Each file = exact field-by-field submission content for
that platform (business name, category picks from that platform's real taxonomy,
description within that platform's character limit, services list, keywords,
photos checklist, opening hours), plus a short "gotchas" note (e.g. UrbanPro has
an existing Gujjanagundla listing to update, AnyJankari shows SVN Colony — mark
branch vs correction decisions as `TODO(owner)`).

**B. `qa-bank.md`** — 20 Quora-style + 10 Reddit-style answers to real questions
students ask (EAPCET web options, best coaching in Guntur, NEET plan B, POLYCET
vs Inter, ICET/ECET/JoSAA doubts, fee reimbursement basics). Each entry: the
question, the platform, a 150–300 word genuinely helpful answer, the single
deep link to include, and the disclosure line ("I run a coaching centre in
Guntur") for Reddit ones.

**C. `gbp-calendar.md`** — 12 weekly Google Business Profile posts (also usable
via the broadcaster): mix of counselling tips, deadline reminders (use `TODO
(owner: date)` placeholders for exam dates), course spotlights, and director
Q&As. Each ≤ 1500 chars with a CTA to call +91 88797 97777.

**D. `youtube-scripts/`** — 10 scripts (5 Telugu, 5 English), 60–120 seconds
each, presenter = the director. Include: hook line, talking points, closing CTA,
plus YouTube title (a target query verbatim), description (2 paragraphs + NAP +
site link), and tags.

**E. `whatsapp-channel.md`** — 8 launch-month WhatsApp Channel updates (short,
emoji-light, Telugu-English mix as Guntur parents actually read).

Commit after each lettered section with message `offsite-pack: <section>`.
Do not touch `src/` in this task.
