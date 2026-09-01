# Apple Business Connect — paste-ready listing

Portal: https://businessconnect.apple.com  
This feeds Apple Maps, Siri, Spotlight and Wallet. Required for iPhone parents in Guntur.

Create a **Brand** (Siva Tuitions & Coachings) and **one Location**: Pattabhipuram 2nd Lane. Do not add Tenali / Mangalagiri / Hyderabad / SVN Colony / Gujjanagundla as locations — those are not branches. The classroom is only at Pattabhipuram.

**Location (locked):** 2nd Lane, behind Jamili Dental Hospital, Gang Colony, Pattabhipuram, Guntur, Andhra Pradesh 522006.

---

## Canonical NAP (paste character-for-character)

| Field | Value |
|---|---|
| Location name / display name | Siva Tuitions & Coachings |
| Address line 1 | 2nd Lane, behind Jamili Dental Hospital, Gang Colony, Pattabhipuram |
| City | Guntur |
| State | Andhra Pradesh |
| Postal code | 522006 |
| Country | India |
| Phone | +91 88797 97777 |
| Website | https://sivatuitions.github.io *(paste this until sivatuitions.com DNS is live)* |
| Email (if shown) | sivatuitions@gmail.com |

Coordinates if the map pin is wrong: **16.3145, 80.4365** (from `src/data/site.js`). Walk the pin to the real door; do not leave it on SVN Colony.

---

## Categories (Apple Business Connect)

Apple: **one primary** + up to **four additional**. Categories live in the portal dropdown (not a public PDF). Search the picker for these labels, in this order of preference:

**Primary (pick the first one the dropdown actually contains):**

1. Tutoring Center  
2. Tutoring  
3. Educational Consultant  
4. Education Center  

**Additional (up to four, only if present and accurate):**

- Educational Consultant *(if not already primary)*
- School *(usually skip — you are not a school)*
- College Counseling / Education Consultant
- Test Preparation

If none of the tutoring labels exist after Apple’s category refresh, choose the most specific education POI Apple offers and note it here: `TODO(owner: screenshot the dropdown if Tutoring Center is missing)`.

Do not pick University, Preschool, or Language School.

---

## About description — **250 character limit** (Apple documented)

Apple Support: About / automatically created About descriptions are capped at **250 characters**. URLs in About are often stripped; put the site in the website field instead.

### Paste (244 characters, including spaces)

```
Siva Tuitions & Coachings, Pattabhipuram, Guntur: Classes 6–10, Intermediate, EAPCET, NEET and POLYCET coaching, plus admission counselling. Director Yadlapalli Naga Murali Krishna. 2nd Lane, behind Jamili Dental Hospital. Call +91 88797 97777.
```

If Apple auto-generates an About from the website, **replace it** with the 244-character version above so NAP and the phone stay controlled.

Backup if the field rejects the phone number (some locales treat phone in About as spam) — 220 chars:

```
Siva Tuitions & Coachings, Pattabhipuram, Guntur: school and Intermediate tuitions, EAPCET, NEET and POLYCET coaching, and web-options counselling. Director Yadlapalli Naga Murali Krishna, M.B.A, M.Tech (CSE), M.Sc, MCA.
```

---

## Opening hours

| Day | Hours |
|---|---|
| Monday–Saturday | 06:00 – 21:00 |
| Sunday | 10:00 – 14:00 |

---

## Services / showcase (if Apple offers a services list)

- Class 6–10 tuitions (CBSE, ICSE, State)
- Intermediate MPC & BiPC
- EAPCET / EAMCET coaching
- NEET coaching
- POLYCET coaching
- Admission / web-options counselling

Showcase headline (short): `Tuitions & entrance coaching — Guntur`

---

## Keywords

Apple has no public keyword field. Categories + About + website do the work. Do not stuff “best coaching Guntur” into the location name.

---

## Photos checklist

Apple photo/text guidelines: real photos of *this* location, no stock, no heavy collage, no phone numbers baked into images.

- [ ] Cover / hero: facade with readable board
- [ ] Logo (square)
- [ ] Interior classroom
- [ ] Interior counselling desk
- [ ] Director (optional portrait, not a flyer)
- [ ] Reject any auto-imported photo of a different building

---

## Other location attributes (“Good to Know”)

Enable only what is true:

- Appointments recommended: Yes (for counselling)
- Walk-ins welcome: `TODO(owner)`
- Restroom: `TODO(owner)`
- Parking: `TODO(owner)`
- Wheelchair accessible: `TODO(owner)`
- Wi-Fi: `TODO(owner)`

---

## Gotchas

- 250-character About is easy to overshoot. Count before paste. The primary version above is 244.
- **One location only:** 2nd Lane, behind Jamili Dental Hospital, Gang Colony, Pattabhipuram. Apple will happily publish a wrong SVN Colony POI if Maps already has one — claim that pin and **move it** to Pattabhipuram; do not add a second location.
- AnyJankari and other scrapers still show **SVN Colony 5th Ln, behind RVR&JC hostel**. Treat that as a stale pin. Correct it to the Pattabhipuram NAP. It is not a branch.
- Brand name and location name should both be `Siva Tuitions & Coachings` (ampersand), not “Siva Tuitions and Coachings”, except where a legal-name field exists — then use **Siva Tuitions and Coachings**.
- Siri reads the About. Keep it spoken-English, not keyword soup.
- Verification is via Apple ID. Use the owner’s Apple ID; a student’s ID will lock you out later.
