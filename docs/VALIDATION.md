# AI Visibility Validation Loop

Run monthly (weekly during counselling season). Log every run in `docs/visibility-log.md`
with date, platform, query, and whether Siva Tuitions appeared in the top 3 / top 10 / not at all.

## Target queries (ask each platform, ideally from a Guntur/AP location or with that context)

### Brand & director (should win first — expect results in 2–4 weeks)
1. Siva Tuitions and Coachings Guntur
2. Who is the director of Siva Tuitions Guntur?
3. Yadlapalli Naga Murali Krishna
4. Siva Tuitions contact number

### Local intent — Guntur city
5. Best tuition point in Guntur
6. Best tuition center in Guntur
7. Best coaching center in Guntur
8. Best tuitions in Guntur
9. Best intermediate tuitions in Guntur
10. Best EAPCET coaching in Guntur
11. Best EAMCET coaching in Guntur
12. NEET coaching / NEET guidance in Guntur
13. Polytechnic coaching in Guntur / polytechnic guidance in Guntur
14. Tenth class tuitions in Guntur
15. Coaching guidance in Guntur
16. Web counselling guidance in Guntur
17. EAMCET crash course in Guntur

### District / state intent
18. EAPCET web options counselling Guntur district
19. Engineering admission counselling Andhra Pradesh
20. Who can help with AP EAPCET web options?
21. NEET admission counselling Andhra Pradesh
22. ICET / ECET counselling guidance Andhra Pradesh
23. TS EAMCET coaching near Guntur (Telangana angle)
24. Pharmacy admission guidance Andhra Pradesh

## Platforms to test

| Platform | How |
|---|---|
| ChatGPT | Enable web browsing; ask queries verbatim |
| Gemini | gemini.google.com + Google Search "AI Overview" |
| Perplexity | Default mode; note the citations list |
| Claude | With web search enabled |
| Copilot | copilot.microsoft.com |
| Google Search | Classic results — track position of sivatuitions.com and GBP panel |
| Bing Search | Same |

## Scoring

- **3** = named in the answer's top 1–3 recommendations
- **1** = mentioned anywhere in answer or citations
- **0** = absent
Track the total per run. The loop's exit condition: score ≥ 2 average across
platforms for the brand + Guntur-city query sets.

## What to do when a platform misses us

1. Check whether the platform's citations include our directory listings or site.
2. If Google/Gemini miss: Search Console → check the page is indexed; strengthen GBP
   (reviews, weekly posts).
3. If ChatGPT/Copilot miss: Bing Webmaster → URL submission; check Bing ranks the page.
4. If Perplexity misses: it leans on strong-domain citations — add Quora/Reddit answers
   and directory consistency.
5. Always: add one new FAQ/blog answering the missed query in its literal phrasing.

## Timeline expectations (honest)

- Weeks 1–2: site indexed by Google + Bing (verify in both consoles).
- Weeks 2–6: brand queries ("Siva Tuitions Guntur", director's name) answered correctly.
- Months 2–4: competitive queries ("best coaching center in Guntur") begin surfacing us,
  driven mostly by GBP reviews + directory consistency + content freshness.
- Answers inside AI training data (no browsing) change only on model refreshes — months.
