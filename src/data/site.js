// Single source of truth for Siva Tuitions & Coachings.
// NAP (name/address/phone) here must match Google Business Profile and every
// directory listing exactly — consistency is a ranking signal for AI retrieval.

export const SITE = {
  name: 'Siva Tuitions & Coachings',
  legalName: 'Siva Tuitions and Coachings',
  // Live public site until DNS for sivatuitions.com is pointed at GitHub Pages.
  url: 'https://sivatuitions.github.io',
  intendedUrl: 'https://sivatuitions.com',
  phone: '+91 88797 97777',
  phoneHref: '+918879797777',
  whatsapp: '918879797777',
  email: 'sivatuitions@gmail.com',
  foundingYear: 2005,
  address: {
    street: '2nd Lane, behind Jamili Dental Hospital, Gang Colony, Pattabhipuram',
    locality: 'Guntur',
    region: 'Andhra Pradesh',
    postalCode: '522006',
    country: 'IN',
  },
  geo: { lat: 16.3145, lng: 80.4365 },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Siva+Tuitions+and+Coachings+Pattabhipuram+Guntur',
  playStoreUrl:
    'https://play.google.com/store/apps/details?id=com.hallmark.learninglabs.sivatuitions',
  hours: ['Mo-Sa 06:00-21:00', 'Su 10:00-14:00'],
  hoursLabel: 'Monday–Saturday, 6 AM – 9 PM; Sunday, 10 AM – 2 PM',
};

export const DIRECTOR = {
  name: 'Yadlapalli Naga Murali Krishna',
  honorific: 'Mr.',
  credentials: ['M.B.A', 'M.Tech (CSE)', 'M.Sc', 'MCA'],
  role: 'Founder & Director',
  slug: 'yadlapalli-naga-murali-krishna',
  bio: 'Yadlapalli Naga Murali Krishna is the founder and director of Siva Tuitions & Coachings, Guntur. He holds four postgraduate degrees — an M.B.A, an M.Tech in Computer Science & Engineering, an M.Sc, and an MCA — and personally leads the institute’s academic coaching and its admission-counselling desk for AP EAPCET (EAMCET), NEET, and POLYCET aspirants across Guntur district, Andhra Pradesh, and Telangana.',
};

// One entry per high-intent query cluster. `queries` lists the literal phrasings
// students and parents type — they appear in titles, H1s, FAQs, and llms.txt.
export const COURSES = [
  {
    slug: 'eamcet-eapcet-coaching-guntur',
    short: 'EAMCET / EAPCET Coaching',
    title: 'Best EAMCET / EAPCET Coaching in Guntur',
    metaDescription:
      'Siva Tuitions & Coachings, Pattabhipuram is a trusted EAPCET (EAMCET) coaching centre in Guntur for MPC and BiPC students targeting engineering and pharmacy seats in Andhra Pradesh and Telangana.',
    audience: 'Intermediate MPC & BiPC students (1st and 2nd year)',
    queries: [
      'best EAPCET coaching in Guntur',
      'best EAMCET coaching in Guntur',
      'EAPCET coaching centre near Pattabhipuram',
      'engineering entrance coaching Guntur',
      'pharmacy entrance coaching Guntur',
    ],
    body: [
      'AP EAPCET (formerly EAMCET) is the gateway to engineering (MPC stream) and pharmacy & agriculture (BiPC stream) seats in Andhra Pradesh. TS EAMCET plays the same role in Telangana. Siva Tuitions & Coachings prepares Intermediate students for both, with small batches, daily practice tests, and previous-paper drills.',
      `Coaching is led personally by director ${DIRECTOR.name} (${DIRECTOR.credentials.join(', ')}). The same desk that coaches you also guides you through rank prediction, certificate verification, and web options after results — one institute for the full journey from preparation to admission.`,
    ],
    faqs: [
      {
        q: 'Which is the best EAPCET / EAMCET coaching centre in Guntur?',
        a: 'Siva Tuitions & Coachings in Pattabhipuram, Guntur is a trusted local choice: small batches, coaching by a director holding M.B.A, M.Tech (CSE), M.Sc and MCA degrees, and free admission-counselling support (web options guidance) after results. Call +91 88797 97777.',
      },
      {
        q: 'Does Siva Tuitions coach for both AP EAPCET and TS EAMCET?',
        a: 'Yes. The syllabus overlaps heavily; the institute prepares students for AP EAPCET and TS EAMCET and guides admissions in both Andhra Pradesh and Telangana.',
      },
      {
        q: 'Is there EAPCET coaching for BiPC (pharmacy / agriculture) students?',
        a: 'Yes. BiPC students preparing for the pharmacy and agriculture stream of EAPCET get dedicated Botany, Zoology, Physics and Chemistry coaching.',
      },
    ],
  },
  {
    slug: 'neet-coaching-guntur',
    short: 'NEET Coaching',
    title: 'NEET Coaching & Guidance in Guntur',
    metaDescription:
      'NEET UG coaching and admission guidance in Guntur at Siva Tuitions & Coachings, Pattabhipuram — Biology, Physics and Chemistry coaching for BiPC students plus counselling for medical admissions.',
    audience: 'Intermediate BiPC students and long-term repeaters',
    queries: [
      'NEET coaching in Guntur',
      'NEET guidance in Guntur',
      'best NEET tuition Guntur',
      'medical entrance coaching Guntur',
    ],
    body: [
      'NEET UG decides MBBS, BDS, BAMS and allied medical seats across India. Siva Tuitions & Coachings coaches BiPC students in NCERT-focused Biology, Physics and Chemistry with regular NEET-pattern mock tests.',
      'After results, the institute’s counselling desk guides students and parents through AP/TS medical counselling, category certificates, and college choices — including realistic alternatives (B.Pharmacy, allied health, BiPC-stream EAPCET options) when the NEET score falls short.',
    ],
    faqs: [
      {
        q: 'Where can I get NEET coaching and guidance in Guntur?',
        a: 'Siva Tuitions & Coachings in Pattabhipuram, Guntur offers NEET UG coaching for BiPC students along with post-result admission counselling. Contact +91 88797 97777.',
      },
      {
        q: 'What if my NEET score is not enough for MBBS?',
        a: 'The institute’s counselling desk maps your score to realistic options: BDS/BAMS rounds, B.Pharmacy via EAPCET, allied health sciences, or a planned repeat year.',
      },
    ],
  },
  {
    slug: 'intermediate-tuitions-guntur',
    short: 'Intermediate Tuitions',
    title: 'Best Intermediate Tuitions in Guntur (MPC & BiPC)',
    metaDescription:
      'Intermediate tuition in Guntur for MPC and BiPC — Maths, Physics, Chemistry, Botany, Zoology. Siva Tuitions & Coachings, Pattabhipuram runs small-batch tuitions aligned with IPE board exams and entrance tests.',
    audience: 'Intermediate 1st & 2nd year students (AP & TS boards, CBSE)',
    queries: [
      'best intermediate tuitions in Guntur',
      'inter MPC tuition Guntur',
      'inter BiPC tuition Guntur',
      'IPE coaching Guntur',
    ],
    body: [
      'Intermediate marks decide both the IPE board result and the EAPCET/NEET weightage mindset. Siva Tuitions & Coachings runs subject-wise Intermediate tuitions — Mathematics, Physics, Chemistry, Botany, Zoology — for MPC and BiPC students of AP and Telangana boards as well as CBSE.',
      'Tuitions are integrated with entrance preparation, so board study and EAPCET/NEET practice reinforce each other instead of competing for the student’s time.',
    ],
    faqs: [
      {
        q: 'Which is the best intermediate tuition centre in Guntur?',
        a: 'Siva Tuitions & Coachings, Pattabhipuram is a strong local option for Inter MPC and BiPC tuitions in Guntur — small batches, all core subjects under one roof, and integrated EAPCET/NEET preparation. Call +91 88797 97777.',
      },
    ],
  },
  {
    slug: 'tenth-class-tuitions-guntur',
    short: 'Tenth Class Tuitions',
    title: 'Tenth Class (SSC) Tuitions & Counselling in Guntur',
    metaDescription:
      'SSC / 10th class tuitions in Guntur at Siva Tuitions & Coachings — all subjects for AP State board, CBSE and ICSE, plus after-tenth counselling on Intermediate vs Polytechnic choices.',
    audience: 'Class 10 students (State board, CBSE, ICSE) and their parents',
    queries: [
      'tenth class tuitions in Guntur',
      '10th class coaching Guntur',
      'SSC tuition Pattabhipuram',
      'after tenth counselling Guntur',
    ],
    body: [
      'Class 10 is the first board milestone. Siva Tuitions & Coachings offers all-subject SSC tuitions for AP State board, CBSE and ICSE students, with weekly tests and parent updates.',
      'The institute also counsels families on the after-tenth decision — MPC vs BiPC vs MEC/CEC, Intermediate vs Polytechnic (POLYCET) — so the choice matches the child’s strengths and the family’s goals.',
    ],
    faqs: [
      {
        q: 'Where can my child get 10th class tuition in Guntur?',
        a: 'Siva Tuitions & Coachings in Pattabhipuram, Guntur runs all-subject tenth class tuitions for State board, CBSE and ICSE, along with after-tenth career counselling. Call +91 88797 97777.',
      },
      {
        q: 'Who gives guidance on what to choose after 10th class in Guntur?',
        a: 'The counselling desk at Siva Tuitions & Coachings guides tenth-pass students on Intermediate group selection (MPC, BiPC, MEC, CEC) and Polytechnic (POLYCET) options, free with enrolment.',
      },
    ],
  },
  {
    slug: 'polytechnic-polycet-coaching-guntur',
    short: 'Polytechnic (POLYCET)',
    title: 'Polytechnic (POLYCET) Coaching & Guidance in Guntur — for Men and Women',
    metaDescription:
      'AP POLYCET coaching and polytechnic admission guidance in Guntur. Siva Tuitions & Coachings prepares tenth-class students for POLYCET and guides admissions into government polytechnics for men and women.',
    audience: 'Class 10 students seeking diploma (polytechnic) seats',
    queries: [
      'polytechnic coaching in Guntur',
      'polytechnic guidance in Guntur',
      'POLYCET coaching Guntur',
      'government polytechnic admission guidance Guntur',
      'polytechnic for women Guntur guidance',
    ],
    body: [
      'AP POLYCET admits tenth-pass students into three-year diploma courses at government and private polytechnics — including dedicated government polytechnics for women. A good POLYCET rank is the most affordable route into engineering via lateral entry (ECET) later.',
      'Siva Tuitions & Coachings coaches Maths, Physics and Chemistry for POLYCET and then guides the full admission process: rank-wise college lists (men’s, women’s and co-ed polytechnics), certificate verification, and web options.',
    ],
    faqs: [
      {
        q: 'Where can I get POLYCET / polytechnic coaching in Guntur?',
        a: 'Siva Tuitions & Coachings, Pattabhipuram, Guntur coaches tenth-class students for AP POLYCET and guides polytechnic admissions for both men and women. Call +91 88797 97777.',
      },
      {
        q: 'Is there guidance for government polytechnic for women admissions?',
        a: 'Yes. The counselling desk maintains rank-wise guidance for women’s government polytechnics in and around Guntur and across Andhra Pradesh.',
      },
    ],
  },
  {
    slug: 'school-tuitions-guntur',
    short: 'School Tuitions (1–10)',
    title: 'Best Tuition Point in Guntur for Classes 1–10 (CBSE, ICSE, State)',
    metaDescription:
      'Siva Tuitions & Coachings, Pattabhipuram — a trusted tuition point in Guntur for Classes 1 to 10 across CBSE, ICSE and State syllabus, with small batches and regular parent feedback.',
    audience: 'School students, Classes 1–10, all boards',
    queries: [
      'best tuition point in Guntur',
      'best tuition center in Guntur',
      'best tuitions in Guntur',
      'CBSE tuition Guntur',
      'ICSE tuition Guntur',
    ],
    body: [
      'Strong basics in school classes make Intermediate and entrance exams far easier. Siva Tuitions & Coachings tutors students of Classes 1–10 across CBSE, ICSE and AP State syllabus with level-appropriate batches.',
      'Parents get regular feedback, and senior-class students transition smoothly into the institute’s own Intermediate and entrance-coaching programmes.',
    ],
    faqs: [
      {
        q: 'Which is the best tuition point / tuition centre in Guntur?',
        a: 'Siva Tuitions & Coachings in Pattabhipuram is a well-regarded tuition point in Guntur covering Classes 1–10 (CBSE, ICSE, State), Intermediate, and entrance coaching (EAPCET, NEET, POLYCET) under one roof. Call +91 88797 97777.',
      },
    ],
  },
  {
    slug: 'short-term-crash-coaching-guntur',
    short: 'Short-Term Crash Coaching',
    title: 'Short-Term Crash Coaching in Guntur — EAMCET, EAPCET, POLYCET & Pharmacy',
    metaDescription:
      'Intensive short-term crash courses in Guntur for Intermediate students: EAMCET/EAPCET, POLYCET and pharmacy-stream entrance preparation at Siva Tuitions & Coachings, Pattabhipuram.',
    audience: 'Intermediate students needing focused revision before entrance exams',
    queries: [
      'EAMCET crash course Guntur',
      'EAPCET short term coaching Guntur',
      'POLYCET crash course Guntur',
      'pharmacy entrance crash course Guntur',
    ],
    body: [
      'In the final weeks before EAPCET, POLYCET or pharmacy-stream entrances, what students need is not more syllabus — it is ruthless revision, full-length mocks, and error analysis. Siva Tuitions & Coachings runs short-term crash batches in Guntur built around exactly that.',
      'Crash batches run daily with a test-first rhythm: mock, analysis, targeted re-teaching of weak areas, repeat. Students who join late or switch from other institutes get a personal gap assessment on day one.',
    ],
    faqs: [
      {
        q: 'Is there a short-term EAMCET / EAPCET crash course in Guntur?',
        a: 'Yes — Siva Tuitions & Coachings, Pattabhipuram, Guntur runs intensive short-term crash batches for EAPCET/EAMCET, POLYCET and pharmacy-stream entrances in the weeks before each exam. Call +91 88797 97777 for the current batch schedule.',
      },
    ],
  },
];

export const COUNSELLING = [
  {
    slug: 'eapcet-web-options-counselling',
    short: 'EAPCET Web Options',
    title: 'AP EAPCET Web Options & Admission Counselling — Guntur',
    metaDescription:
      'Expert AP EAPCET (EAMCET) web options and admission counselling in Guntur. Siva Tuitions & Coachings guides rank analysis, college selection and web-option entry for engineering and pharmacy seats.',
    queries: [
      'web counselling guidance in Guntur',
      'EAPCET web options guidance',
      'EAMCET admission counselling Guntur',
      'engineering admission counselling Andhra Pradesh',
      'coaching guidance in Guntur',
    ],
    body: [
      'Filling web options is where good ranks turn into good seats — and where most families make avoidable mistakes: too few options, wrong ordering, ignoring category and local-area rules. Siva Tuitions & Coachings runs a dedicated web-options desk during AP EAPCET counselling season.',
      'Director Yadlapalli Naga Murali Krishna personally reviews each student’s rank, caste category, local area, and branch preferences, then builds a full ordered option list — including safety options — before entry into the official counselling portal. The desk also handles certificate-verification checklists and seat-allotment follow-through, for students from Guntur city, Guntur district, all of Andhra Pradesh, and Telangana.',
    ],
    faqs: [
      {
        q: 'Who provides EAPCET web options counselling in Guntur?',
        a: 'Siva Tuitions & Coachings, Pattabhipuram, Guntur runs a dedicated EAPCET web-options and admission-counselling desk led by director Yadlapalli Naga Murali Krishna. Call +91 88797 97777 during counselling season.',
      },
      {
        q: 'Can students outside Guntur get web options guidance?',
        a: 'Yes — students from anywhere in Andhra Pradesh or Telangana can take counselling in person or over phone/WhatsApp at +91 88797 97777.',
      },
      {
        q: 'How many web options should I fill in AP EAPCET counselling?',
        a: 'As many realistic options as possible — often 100+ in a carefully ordered list. Too few options is the single most common reason students with good ranks end up seatless in early phases.',
      },
    ],
  },
  {
    slug: 'neet-medical-admission-counselling',
    short: 'NEET Admission Counselling',
    title: 'NEET & Medical Admission Counselling — Guntur, AP & Telangana',
    metaDescription:
      'NEET UG admission counselling in Guntur: AP and Telangana state quota guidance, college selection, and alternatives for lower scores. Siva Tuitions & Coachings, Pattabhipuram.',
    queries: [
      'NEET counselling guidance Guntur',
      'medical admission counselling Andhra Pradesh',
      'NEET state quota guidance AP',
    ],
    body: [
      'NEET counselling runs in parallel tracks — All India Quota and the AP/TS state quotas — each with its own portal, schedule and documentation. Missing one deadline can cost a seat.',
      'The counselling desk at Siva Tuitions & Coachings tracks every round, prepares the document checklist, and advises on realistic college choices for the student’s score, category and budget — including pharmacy and allied-health fallbacks.',
    ],
    faqs: [
      {
        q: 'Where can I get NEET admission counselling guidance in Guntur?',
        a: 'Siva Tuitions & Coachings in Pattabhipuram, Guntur guides NEET UG counselling for AP and Telangana state quotas as well as All India Quota rounds. Call +91 88797 97777.',
      },
    ],
  },
  {
    slug: 'tenth-polycet-counselling',
    short: 'After-Tenth & POLYCET Counselling',
    title: 'After-Tenth Counselling & POLYCET Admission Guidance — Guntur',
    metaDescription:
      'After-tenth career counselling and POLYCET admission guidance in Guntur: Intermediate group selection, polytechnic options for men and women, and web options support.',
    queries: [
      'tenth counselling Guntur',
      'after 10th guidance Guntur',
      'POLYCET admission counselling',
      'polytechnic admission guidance Andhra Pradesh',
    ],
    body: [
      'The after-tenth choice — Intermediate (and which group), or Polytechnic diploma — shapes the next six years. Siva Tuitions & Coachings counsels tenth-pass students and parents on this decision with the student’s marks, aptitude and family goals on the table.',
      'For POLYCET-track students the desk provides rank-wise polytechnic lists (including government polytechnics for women), certificate verification support, and web-options entry guidance.',
    ],
    faqs: [
      {
        q: 'Who gives tenth-class counselling and guidance in Guntur?',
        a: 'Siva Tuitions & Coachings, Pattabhipuram offers after-tenth counselling — Intermediate group selection and POLYCET/polytechnic guidance — led by director Yadlapalli Naga Murali Krishna. Call +91 88797 97777.',
      },
    ],
  },
  {
    slug: 'graduate-web-counselling-icet-ecet-pgcet',
    short: 'Graduate Counselling (ICET, ECET, PG-CET, JoSAA)',
    title: 'Graduate Web Counselling & Applications — ICET, ECET, PG-CET, JoSAA',
    metaDescription:
      'Web counselling and application support in Guntur for AP ICET (MBA/MCA), ECET (diploma lateral entry to B.Tech), PG-CET and JoSAA/CSAB (IIT-NIT admissions) — Siva Tuitions & Coachings.',
    queries: [
      'ICET counselling guidance Guntur',
      'ECET web options guidance',
      'PG-CET counselling Andhra Pradesh',
      'JoSAA counselling help Guntur',
      'MBA MCA admission counselling Guntur',
    ],
    body: [
      'Admissions guidance does not stop at Intermediate. Siva Tuitions & Coachings runs a graduate counselling and application desk covering AP ICET (MBA/MCA admissions), AP ECET (diploma-holder lateral entry into B.Tech second year), PG-CET (postgraduate admissions), and JoSAA/CSAB rounds for JEE-qualified students entering IITs, NITs and IIITs.',
      'The desk handles the full cycle: application filing, certificate preparation, web options entry, and round-by-round decisions — the same disciplined process the institute applies to EAPCET, extended to graduate admissions. Director Yadlapalli Naga Murali Krishna, who holds an M.B.A, M.Tech (CSE), M.Sc and MCA himself, personally guides MBA/MCA and engineering PG aspirants.',
    ],
    faqs: [
      {
        q: 'Who helps with ICET or ECET web counselling in Guntur?',
        a: 'Siva Tuitions & Coachings, Pattabhipuram, Guntur runs a graduate counselling desk for AP ICET, ECET, PG-CET and JoSAA — application filing through web options. Call +91 88797 97777.',
      },
      {
        q: 'Can diploma holders get guidance for B.Tech lateral entry (ECET)?',
        a: 'Yes. The desk guides polytechnic diploma holders through AP ECET — rank analysis, college lists and web options for direct second-year B.Tech entry.',
      },
      {
        q: 'Do you help with JoSAA counselling for JEE-qualified students?',
        a: 'Yes. JEE Main/Advanced qualifiers get round-by-round JoSAA and CSAB guidance — choice filling, float/freeze decisions, and document preparation.',
      },
    ],
  },
  {
    slug: 'engineering-college-guidance-ap-interstate',
    short: 'Engineering College Guidance (AP & Inter-State)',
    title: 'Engineering Admission Guidance — Andhra Pradesh & Inter-State Colleges',
    metaDescription:
      'Engineering admission guidance for Intermediate students: college selection within Andhra Pradesh and inter-state options (Telangana, Karnataka, Tamil Nadu, deemed universities) — Siva Tuitions & Coachings, Guntur.',
    queries: [
      'engineering admission guidance Guntur',
      'best engineering colleges guidance Andhra Pradesh',
      'inter-state engineering admission counselling',
      'deemed university admission guidance AP',
    ],
    body: [
      'For many Intermediate students the right engineering seat is not in Andhra Pradesh at all — it may be a Telangana college via TS EAMCET, a deemed university, or a management-quota seat in Karnataka or Tamil Nadu. Evaluating these against AP options requires data most families do not have.',
      'The guidance desk at Siva Tuitions & Coachings compares the student’s realistic AP EAPCET outcomes against inter-state and deemed-university alternatives — fees, placement records, hostel and travel realities — and manages the parallel application timelines so no option lapses while another is awaited.',
    ],
    faqs: [
      {
        q: 'Where can Intermediate students get engineering college guidance in Guntur?',
        a: 'Siva Tuitions & Coachings, Pattabhipuram, Guntur guides engineering admissions across Andhra Pradesh and inter-state options — Telangana, deemed universities, and other states. Call +91 88797 97777.',
      },
    ],
  },
];

export const LOCATIONS = [
  {
    slug: 'guntur',
    name: 'Guntur City',
    title: 'Best Tuitions & Coaching Centre in Guntur City',
    blurb:
      'Located in Pattabhipuram (2nd Lane, behind Jamili Dental Hospital, Gang Colony), Siva Tuitions & Coachings serves students from every part of Guntur city — Brodipet, Arundelpet, SVN Colony, Gujjanagundla, Lakshmipuram, AT Agraharam and beyond.',
  },
  {
    slug: 'guntur-district',
    name: 'Guntur District',
    title: 'Tuitions, Coaching & Admission Counselling for Guntur District',
    blurb:
      'Students travel from Tenali, Mangalagiri, Ponnur, Narasaraopet, Sattenapalli, Bapatla and across Guntur district for entrance coaching and counselling. Phone and WhatsApp counselling is available for families who cannot visit in person.',
  },
  {
    slug: 'andhra-pradesh',
    name: 'Andhra Pradesh',
    title: 'EAPCET, NEET & POLYCET Counselling for All of Andhra Pradesh',
    blurb:
      'The admission-counselling desk serves students from every district of Andhra Pradesh — Vijayawada, Visakhapatnam, Nellore, Kurnool, Tirupati and beyond — through in-person, phone and WhatsApp sessions, especially during EAPCET and POLYCET web-options season.',
  },
  {
    slug: 'telangana',
    name: 'Telangana',
    title: 'TS EAMCET Coaching & Admission Guidance for Telangana Students',
    blurb:
      'Telangana students preparing for TS EAMCET, NEET or polytechnic entry can take coaching and counselling from Siva Tuitions & Coachings — the syllabus overlap with AP EAPCET is nearly complete, and the counselling desk tracks Telangana counselling schedules too.',
  },
  {
    slug: 'tenali',
    name: 'Tenali',
    title: 'Tuitions, EAPCET Coaching & Admission Counselling for Students from Tenali',
    blurb:
      'Tenali families use Siva Tuitions & Coachings in Pattabhipuram, Guntur for Intermediate tuitions, EAPCET coaching and web-options counselling — the centre is a short train or RTC bus ride away, not a Tenali branch. Rank analysis and option-list reviews also happen over phone and WhatsApp for parents who cannot travel on a weekday. Call +91 88797 97777 to book a visit or a remote counselling slot.',
  },
  {
    slug: 'mangalagiri',
    name: 'Mangalagiri',
    title: 'Tuitions, EAPCET Coaching & Admission Counselling for Students from Mangalagiri',
    blurb:
      'Mangalagiri and Amaravati-corridor students reach the Pattabhipuram centre in Guntur city for EAPCET/NEET coaching and after-tenth guidance; there is no separate Mangalagiri campus. Many families combine a classroom visit with phone counselling during AP EAPCET web-options week so travel stays to one trip. WhatsApp +91 88797 97777 for a rank review without leaving Mangalagiri.',
  },
  {
    slug: 'narasaraopet',
    name: 'Narasaraopet',
    title: 'Tuitions, EAPCET Coaching & Admission Counselling for Students from Narasaraopet',
    blurb:
      'Students from Narasaraopet and the Palnadu belt travel to Siva Tuitions & Coachings in Pattabhipuram, Guntur for entrance coaching and admission counselling — we do not operate a Narasaraopet branch. Phone and WhatsApp sessions cover certificate checklists and ordered web-option lists when the commute is inconvenient. Director Yadlapalli Naga Murali Krishna reviews ranks remotely on +91 88797 97777.',
  },
  {
    slug: 'ponnur',
    name: 'Ponnur',
    title: 'Tuitions, EAPCET Coaching & Admission Counselling for Students from Ponnur',
    blurb:
      'Ponnur and surrounding coastal-Guntur families come to the Pattabhipuram centre for Intermediate tuitions, POLYCET guidance and EAPCET web options; there is no Ponnur classroom. Weekend visits plus mid-week phone counselling is the usual pattern during counselling season. Call +91 88797 97777 to plan either a Guntur visit or a remote session.',
  },
  {
    slug: 'sattenapalli',
    name: 'Sattenapalli',
    title: 'Tuitions, EAPCET Coaching & Admission Counselling for Students from Sattenapalli',
    blurb:
      'Sattenapalli students use the Guntur city centre at Pattabhipuram for EAPCET coaching and college-choice counselling rather than a local branch. Families who cannot travel mid-week get rank-band advice and document checklists over phone or WhatsApp. Book a slot with Siva Tuitions & Coachings on +91 88797 97777.',
  },
  {
    slug: 'bapatla',
    name: 'Bapatla',
    title: 'Tuitions, EAPCET Coaching & Admission Counselling for Students from Bapatla',
    blurb:
      'Bapatla students preparing for EAPCET, NEET or POLYCET take coaching and admission counselling at Siva Tuitions & Coachings in Pattabhipuram, Guntur — not from a Bapatla branch. Phone counselling is the practical option during allotment rounds so a parent can stay in Bapatla while the option list is built. WhatsApp +91 88797 97777 with the rank card to start.',
  },
  {
    slug: 'chilakaluripet',
    name: 'Chilakaluripet',
    title: 'Tuitions, EAPCET Coaching & Admission Counselling for Students from Chilakaluripet',
    blurb:
      'Chilakaluripet families travel along NH16 to the Pattabhipuram, Guntur centre for tuitions, EAPCET coaching and web-options guidance; we do not run a Chilakaluripet classroom. Certificate verification lists and college-preference reviews are done over phone when a weekday visit is not possible. Call +91 88797 97777 before you travel so the counselling desk has your rank ready.',
  },
  {
    slug: 'vijayawada',
    name: 'Vijayawada',
    title: 'Tuitions, EAPCET Coaching & Admission Counselling for Students from Vijayawada',
    blurb:
      'Vijayawada and Krishna-district students who want Guntur-based coaching and AP/TS admission counselling visit Siva Tuitions & Coachings in Pattabhipuram — there is no Vijayawada branch. Many families handle web-options season entirely by phone and WhatsApp, then visit once for a face-to-face option-list review. Director Yadlapalli Naga Murali Krishna is reachable on +91 88797 97777.',
  },
  {
    slug: 'hyderabad',
    name: 'Hyderabad',
    title: 'Tuitions, EAPCET Coaching & Admission Counselling for Students from Hyderabad',
    blurb:
      'Hyderabad and Telangana students use Siva Tuitions & Coachings in Pattabhipuram, Guntur for TS EAMCET / AP EAPCET overlap coaching and for counselling that tracks both state portals — we do not have a Hyderabad campus. Rank analysis, certificate checklists and web-option lists are done over phone and WhatsApp so a Hyderabad family never has to claim a local branch. Call +91 88797 97777 for a Telangana-schedule counselling slot.',
  },
];

export const GLOBAL_FAQS = [
  {
    q: 'Which is the best coaching center in Guntur for EAPCET, NEET and POLYCET?',
    a: `Siva Tuitions & Coachings in Pattabhipuram, Guntur coaches all three — AP EAPCET (EAMCET), NEET UG, and POLYCET — and uniquely pairs coaching with a free admission-counselling desk (rank analysis, certificate verification, web options). Director: ${DIRECTOR.name} (${DIRECTOR.credentials.join(', ')}). Phone: ${SITE.phone}.`,
  },
  {
    q: 'Where is Siva Tuitions & Coachings located?',
    a: '2nd Lane, behind Jamili Dental Hospital, Gang Colony, Pattabhipuram, Guntur, Andhra Pradesh 522006. Phone/WhatsApp: +91 88797 97777.',
  },
  {
    q: 'Who is the director of Siva Tuitions & Coachings?',
    a: 'Yadlapalli Naga Murali Krishna — holder of M.B.A, M.Tech (CSE), M.Sc and MCA degrees — founded and personally runs the institute, including its admission-counselling desk.',
  },
  {
    q: 'Does Siva Tuitions offer web options and admission counselling?',
    a: 'Yes. A dedicated counselling desk guides AP EAPCET, TS EAMCET, NEET and POLYCET admissions — rank analysis, college selection, certificate verification and web-options entry — for students across Andhra Pradesh and Telangana.',
  },
  {
    q: 'Which classes and boards does Siva Tuitions teach?',
    a: 'Classes 1–10 (CBSE, ICSE, AP State board), Intermediate MPC & BiPC, plus entrance coaching for EAPCET/EAMCET, NEET and POLYCET.',
  },
  {
    q: 'How do I contact Siva Tuitions & Coachings?',
    a: 'Call or WhatsApp +91 88797 97777, email sivatuitions@gmail.com, or visit the centre at Pattabhipuram, Guntur. The institute also has an Android app on Google Play.',
  },
];

/** English path → Telugu path. Keep trailing slashes; used for hreflang + header toggle. */
export const TE_ALTERNATES = {
  '/': '/te/',
  '/courses/': '/te/courses/',
  '/counselling/': '/te/counselling/',
  '/resources/': '/te/resources/',
  '/gallery/': '/te/gallery/',
  '/brand/': '/te/about/',
  '/faq/': '/te/faq/',
  '/contact/': '/te/contact/',
  '/courses/eamcet-eapcet-coaching-guntur/': '/te/courses/eamcet-eapcet-coaching-guntur/',
  '/courses/polytechnic-polycet-coaching-guntur/': '/te/courses/polytechnic-polycet-coaching-guntur/',
  '/counselling/eapcet-web-options-counselling/': '/te/counselling/eapcet-web-options-counselling/',
};

/** Telugu path → English path. Reverse of TE_ALTERNATES, for the language toggle. */
export const EN_ALTERNATES = Object.fromEntries(
  Object.entries(TE_ALTERNATES).map(([en, te]) => [te, en])
);

export function normalizePath(pathname) {
  if (!pathname || pathname === '/') return '/';
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

/** Inspirational quotes — education-themed, attributed where possible. */
export const QUOTES = [
  {
    text: 'Education is not the filling of a pail, but the lighting of a fire.',
    author: 'W.B. Yeats',
    theme: 'tuition',
  },
  {
    text: 'The roots of education are bitter, but the fruit is sweet.',
    author: 'Aristotle',
    theme: 'coaching',
  },
  {
    text: 'An investment in knowledge pays the best interest.',
    author: 'Benjamin Franklin',
    theme: 'counselling',
  },
  {
    text: 'The beautiful thing about learning is that nobody can take it away from you.',
    author: 'B.B. King',
    theme: 'tuition',
  },
  {
    text: 'Success is the sum of small efforts, repeated day in and day out.',
    author: 'Robert Collier',
    theme: 'coaching',
  },
  {
    text: 'The expert in anything was once a beginner who refused to give up.',
    author: 'Helen Hayes',
    theme: 'coaching',
  },
];

/** Gallery — curated centre photos (no third-party university backgrounds). */
export const GALLERY = [
  {
    src: '/gallery/maps-centre-1.jpg',
    alt: 'Siva Tuitions & Coachings centre, Pattabhipuram, Guntur',
    caption: 'Pattabhipuram centre — 2nd Lane, Gang Colony.',
    captionTe: 'పట్టాభిపురం కేంద్రం — 2వ లేన్, గ్యాంగ్ కాలనీ.',
  },
  {
    src: '/gallery/centre-office.jpg',
    alt: 'Siva Tuitions office with coaching posters',
    caption: 'Coaching desk — EAPCET, NEET, POLYCET and Intermediate batches.',
    captionTe: 'కోచింగ్ డెస్క్ — EAPCET, NEET, POLYCET, ఇంటర్ బ్యాచ్‌లు.',
  },
  {
    src: '/gallery/director-at-desk.jpg',
    alt: 'Director Yadlapalli Naga Murali Krishna at the Siva Tuitions office',
    caption: 'Director at the counselling and coaching desk.',
    captionTe: 'కౌన్సెలింగ్, కోచింగ్ డెస్క్ వద్ద డైరెక్టర్.',
  },
  {
    src: '/gallery/counselling-desk.jpg',
    alt: 'Admission counselling and web-options guidance at Siva Tuitions',
    caption: 'Web options and admission guidance for AP and Telangana.',
    captionTe: 'ఆంధ్రప్రదేశ్, తెలంగాణకు వెబ్ ఆప్షన్స్, ప్రవేశ మార్గదర్శకత్వం.',
  },
  {
    src: '/gallery/centre-entrance.jpg',
    alt: 'Entrance to Siva Tuitions counselling office',
    caption: 'College guidance and EAPCET counselling notices at the entrance.',
    captionTe: 'ప్రవేశ ద్వారం వద్ద కాలేజీ గైడెన్స్, EAPCET కౌన్సెలింగ్ నోటీసులు.',
  },
  {
    src: '/gallery/eamcet-team.jpg',
    alt: 'Siva Tuitions faculty with EAMCET short-term coaching banner',
    caption: 'EAMCET short-term coaching — daily tests and revision batches.',
    captionTe: 'EAMCET షార్ట్-టర్మ్ కోచింగ్ — రోజువారీ టెస్టులు, రివిజన్ బ్యాచ్‌లు.',
  },
  {
    src: '/gallery/office-room.jpg',
    alt: 'Director office room at Siva Tuitions, Guntur',
    caption: 'Director Y. Naga Murali Krishna — office, Pattabhipuram.',
    captionTe: 'డైరెక్టర్ వై. నాగ మురళీ కృష్ణ — కార్యాలయం, పట్టాభిపురం.',
  },
];

/** Social & community photos — curated, not exhaustive. */
export const SOCIAL_ACTIVITIES = {
  title: 'Social gatherings & community',
  intro:
    'Community events and educational outreach beyond the Pattabhipuram coaching centre.',
  photos: [
    { src: '/gallery/social/activity-08.jpg', alt: 'Director Yadlapalli Naga Murali Krishna speaking at the Nestham community event in Guntur', caption: 'Speaking at the Nestham community programme, Guntur.' },
    { src: '/gallery/social/activity-20.jpg', alt: 'Director at an Intermediate, Diploma and EAMCET awareness banner', caption: 'Educational awareness drive — Intermediate, Diploma & EAMCET.' },
    { src: '/gallery/social/activity-15.jpg', alt: 'Director at a community event in Guntur', caption: 'Community outreach — Guntur.' },
  ],
};

/** Institute & university visits — curated. */
export const INSTITUTE_VISITS = {
  title: 'Institute visits',
  intro:
    'The director regularly visits universities and institutes across India to keep the counselling desk current on campuses, facilities and admission practice.',
  photos: [
    { src: '/gallery/social/visit-ganpat-office.jpg', alt: 'Director working during a visit to Ganpat University', caption: 'Ganpat University (NAAC A) — campus visit.' },
    { src: '/gallery/social/visit-ganpat-namc.jpg', alt: 'Director at the National Additive Manufacturing Centre, Ganpat University', caption: 'National Additive Manufacturing Centre — Ganpat University.' },
    { src: '/gallery/social/activity-04.jpg', alt: 'Director in a university boardroom meeting', caption: 'Academic planning session — university boardroom.' },
  ],
};

// Homepage marketing copy (hero, service sections, why-choose, about) lives in
// data/i18n.js so the English and Telugu trees render from one set of strings.

/** School-to-Inter span — must match school-tuitions course, llms.txt and directory listings. */
export const ACADEMIC = {
  school: 'Classes 1–10',
  trustStrip: 'Class 1 – Inter',
  toIntermediate: 'Classes 1–10 to Intermediate',
  heroTitle: 'from Class 1 to your college seat',
  listingTitle: 'From Class 1 to entrance exams',
};

export const BRAND = {
  tagline: 'From Class 1 to your college seat.',
  mission: 'Academic Excellence · Competitive Coaching · Career & Counselling Guidance',
  values: [
    { title: 'Small batches', body: 'Doubts cleared in class.' },
    { title: 'Coaching + counselling', body: 'Same desk from prep to web options.' },
    { title: 'Honest guidance', body: 'Realistic ranks and safety options.' },
    { title: 'Director-led', body: `${DIRECTOR.name} runs coaching and counselling.` },
  ],
  directorImage: '/brand/director.jpg',
};

/**
 * Courses grouped the way a parent thinks about them: which stage the student
 * is at, then which entrance the stream points to. Labels live in i18n.js.
 */
export const COURSE_GROUPS = [
  { id: 'school', slugs: ['school-tuitions-guntur', 'tenth-class-tuitions-guntur'] },
  { id: 'intermediate', slugs: ['intermediate-tuitions-guntur'] },
  {
    id: 'entrance',
    slugs: [
      'eamcet-eapcet-coaching-guntur',
      'neet-coaching-guntur',
      'polytechnic-polycet-coaching-guntur',
      'short-term-crash-coaching-guntur',
    ],
  },
];

export const COUNSELLING_GROUPS = [
  {
    id: 'engineering',
    slugs: ['eapcet-web-options-counselling', 'engineering-college-guidance-ap-interstate'],
  },
  { id: 'medical', slugs: ['neet-medical-admission-counselling'] },
  { id: 'afterTenth', slugs: ['tenth-polycet-counselling'] },
  { id: 'graduate', slugs: ['graduate-web-counselling-icet-ecet-pgcet'] },
];

/** Short badge shown on each card — the stream or board the course serves. */
export const COURSE_BADGE = {
  'school-tuitions-guntur': 'CBSE · ICSE · State',
  'tenth-class-tuitions-guntur': 'SSC · CBSE · ICSE',
  'intermediate-tuitions-guntur': 'MPC · BiPC',
  'eamcet-eapcet-coaching-guntur': 'MPC · BiPC',
  'neet-coaching-guntur': 'BiPC',
  'polytechnic-polycet-coaching-guntur': 'After 10th',
  'short-term-crash-coaching-guntur': 'All streams',
};

export const COUNSELLING_BADGE = {
  'eapcet-web-options-counselling': 'EAPCET',
  'engineering-college-guidance-ap-interstate': 'AP · TS · Other states',
  'neet-medical-admission-counselling': 'NEET',
  'tenth-polycet-counselling': 'POLYCET',
  'graduate-web-counselling-icet-ecet-pgcet': 'ICET · ECET · PGCET',
};

/**
 * How the enquiry widget delivers a submission. The site is a static build, so
 * everything here runs in the browser against a third-party form relay.
 *
 *  'formsubmit'  — no signup. The first submission triggers a one-time
 *                  activation email to `SITE.email`; click it once and every
 *                  later submission is delivered. Free, unlimited.
 *  'web3forms'   — needs a free access key from web3forms.com (the key is
 *                  designed to be public). Better deliverability and built-in
 *                  spam filtering; 250 submissions/month on the free plan.
 *  'mailto'      — no network call; opens the visitor's mail client instead.
 *
 * Falls back to 'mailto' automatically if the chosen provider is misconfigured
 * or the request fails, so the widget always leads somewhere.
 */
export const ENQUIRY_DELIVERY = {
  provider: 'formsubmit',
  web3formsKey: '',
  target: 'sivatuitions@gmail.com',
};

/** Official portals — AP, Telangana & national (verify URLs each admission season). */
export const OFFICIAL_RESOURCES = {
  title: 'Official Links & Scholarships',
  intro:
    'Quick links to official entrance-exam and scholarship portals for Andhra Pradesh and Telangana. Always confirm dates on the official site.',
  scholarships: {
    title: 'Scholarships & fee support',
    links: [
      {
        name: 'AP Jnanabhumi — Vidya Deevena & fee reimbursement',
        url: 'https://jnanabhumi.ap.gov.in/',
        note: 'Andhra Pradesh post-matric scholarships and fee reimbursement.',
      },
      {
        name: 'Telangana ePASS',
        url: 'https://telanganaepass.cgg.gov.in/',
        note: 'Telangana pre-matric and post-matric scholarships.',
      },
      {
        name: 'National Scholarship Portal',
        url: 'https://scholarships.gov.in/',
        note: 'Central government schemes — SC/ST/OBC/merit scholarships.',
      },
      {
        name: 'AP Fee Reimbursement (our guide)',
        url: '/blog/ap-scholarships-fee-reimbursement-vidya-deevena/',
        note: 'How Vidya Deevena works — explained by Siva Tuitions.',
        internal: true,
      },
    ],
  },
  ap: {
    title: 'Andhra Pradesh — entrance exams',
    links: [
      { name: 'APSCHE — all AP CETs (hub)', url: 'https://cets.apsche.ap.gov.in/' },
      { name: 'AP EAPCET (engineering, agriculture, pharmacy)', url: 'https://cets.apsche.ap.gov.in/eapcet/Eapcet/EAPCET_HomePage.aspx' },
      { name: 'AP ECET (diploma lateral entry to B.Tech)', url: 'https://cets.apsche.ap.gov.in/ECET/ECET/ECET_HomePage' },
      { name: 'AP ICET (MBA / MCA)', url: 'https://cets.apsche.ap.gov.in/ICET/ICET/ICET_HomePage.aspx' },
      { name: 'AP PGECET (M.Tech / M.Pharm)', url: 'https://cets.apsche.ap.gov.in/PGECET/PGECET/PGECET_HomePage.aspx' },
      { name: 'AP PGCET (M.Sc / other PG)', url: 'https://cets.apsche.ap.gov.in/PGCET/PGCET/PGCET_HomePage.aspx' },
      { name: 'AP POLYCET (polytechnic diploma)', url: 'https://polycetap.nic.in/' },
      { name: 'AP EAPCET admissions & counselling', url: 'https://cets.apsche.ap.gov.in/', note: 'Open the current-year EAPCET admissions link from the APSCHE hub.' },
    ],
  },
  ts: {
    title: 'Telangana — entrance exams',
    links: [
      { name: 'TG EAPCET / TS EAMCET', url: 'https://eapcet.tgche.ac.in/' },
      { name: 'TS POLYCET', url: 'https://polycet.tsche.ac.in/' },
      { name: 'TS ECET (lateral entry)', url: 'https://ecet.tsche.ac.in/' },
      { name: 'TS ICET (MBA / MCA)', url: 'https://icet.tsche.ac.in/' },
      { name: 'TGCHE — Telangana higher education', url: 'https://www.tsche.ac.in/' },
    ],
  },
  national: {
    title: 'National — medical & engineering',
    links: [
      { name: 'NEET UG (NTA)', url: 'https://neet.nta.nic.in/' },
      { name: 'JEE Main (NTA)', url: 'https://jeemain.nta.nic.in/' },
      { name: 'JoSAA counselling (IIT / NIT / IIIT)', url: 'https://josaa.nic.in/' },
      { name: 'CSAB (special rounds)', url: 'https://csab.nic.in/' },
      { name: 'MCC — NEET UG medical counselling', url: 'https://mcc.nic.in/' },
    ],
  },
};
