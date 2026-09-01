// Locale text for the two public language trees (English at `/`, Telugu at `/te/`).
// Business facts stay in site.js; only presentation strings live here so the
// English and Telugu pages can render from one shared set of components.

import { SITE, DIRECTOR } from './site.js';

/** Primary navigation, per locale. Telugu links stay inside /te/ where a page exists. */
export const NAV = {
  en: [
    { label: 'Courses', href: '/courses/' },
    { label: 'Counselling', href: '/counselling/' },
    { label: 'Exam links', href: '/resources/' },
    { label: 'Guides', href: '/blog/' },
    { label: 'About', href: '/brand/' },
    { label: 'Contact', href: '/contact/' },
  ],
  te: [
    { label: 'కోర్సులు', href: '/te/courses/' },
    { label: 'కౌన్సెలింగ్', href: '/te/counselling/' },
    { label: 'పరీక్ష లింకులు', href: '/te/resources/' },
    { label: 'గైడ్స్', href: '/blog/' },
    { label: 'మా గురించి', href: '/te/about/' },
    { label: 'సంప్రదించండి', href: '/te/contact/' },
  ],
};

/** Repeated interface labels. */
export const UI = {
  en: {
    navLabel: 'Main',
    call: 'Call',
    whatsapp: 'WhatsApp',
    directions: 'Directions',
    callNow: 'Call Now',
    phoneWhatsapp: 'Phone / WhatsApp',
    email: 'Email',
    maps: 'Maps',
    gallery: 'Gallery',
    social: 'Social',
    links: 'Exam links',
    ask: 'Ask a question',
    about: 'About',
    faq: 'FAQ',
    director: 'Director',
    more: 'More',
    viewAll: 'View all',
    fullProfile: 'Full profile',
    hours: 'Hours: Monday–Saturday, 6 AM – 9 PM; Sunday, 10 AM – 2 PM.',
  },
  te: {
    navLabel: 'ప్రధాన నావిగేషన్',
    call: 'కాల్',
    whatsapp: 'వాట్సాప్',
    directions: 'దారి',
    callNow: 'ఇప్పుడే కాల్ చేయండి',
    phoneWhatsapp: 'ఫోన్ / వాట్సాప్',
    email: 'ఈమెయిల్',
    maps: 'మ్యాప్స్',
    gallery: 'గ్యాలరీ',
    social: 'సామాజిక కార్యక్రమాలు',
    links: 'పరీక్ష లింకులు',
    ask: 'ప్రశ్న అడగండి',
    about: 'మా గురించి',
    faq: 'ప్రశ్నలు',
    director: 'డైరెక్టర్',
    more: 'మరిన్ని',
    viewAll: 'అన్నీ చూడండి',
    fullProfile: 'పూర్తి ప్రొఫైల్',
    hours: 'పని వేళలు: సోమవారం–శనివారం, ఉదయం 6:00 – రాత్రి 9:00; ఆదివారం, ఉదయం 10:00 – మధ్యాహ్నం 2:00.',
  },
};

/** Section 1 — hero. */
export const HERO = {
  en: {
    eyebrow: `Pattabhipuram · Guntur · Since ${SITE.foundingYear}`,
    title: 'Guntur\'s trusted tuition point — from Class 6 to your college seat.',
    subline: 'Academic Excellence · Competitive Coaching · Career & Counselling Guidance',
    lead: 'Tuitions, EAPCET/NEET/POLYCET coaching, and admission counselling — one centre, one desk.',
    imageAlt: 'Students preparing happily for a competitive entrance exam',
  },
  te: {
    eyebrow: `పట్టాభిపురం · గుంటూరు · ${SITE.foundingYear} నుంచి`,
    title: 'గుంటూరులో నమ్మకమైన ట్యూషన్ పాయింట్ — 6వ తరగతి నుంచి కాలేజీ సీట్ వరకు.',
    subline: 'అకడమిక్ ఎక్సలెన్స్ · పోటీ పరీక్షల కోచింగ్ · కెరీర్ & కౌన్సెలింగ్ మార్గదర్శకత్వం',
    lead: 'ట్యూషన్లు, EAPCET/NEET/POLYCET కోచింగ్, ప్రవేశ కౌన్సెలింగ్ — ఒకే కేంద్రం, ఒకే డెస్క్.',
    imageAlt: 'పోటీ పరీక్షలకు సంతోషంగా సిద్ధమవుతున్న విద్యార్థులు',
  },
};

/** Branch showcase — physical centre in Pattabhipuram. */
export const BRANCH_SECTION = {
  en: {
    eyebrow: 'Our centre',
    title: 'Visit us in Pattabhipuram, Guntur',
    lead: 'A real coaching centre families can walk into — not a call centre or a franchise chain.',
    addressLabel: 'Address',
    hoursLabel: 'Hours',
    mapsLabel: 'Open in Google Maps',
    galleryLabel: 'Centre photos',
    featuredAlt: 'Siva Tuitions & Coachings centre, Pattabhipuram, Guntur',
    features: [
      { icon: '🏫', text: 'Classroom coaching on-site' },
      { icon: '📋', text: 'Counselling desk after results' },
      { icon: '📞', text: 'Phone guidance across AP & Telangana' },
    ],
  },
  te: {
    eyebrow: 'మా కేంద్రం',
    title: 'పట్టాభిపురం, గుంటూరులో మమ్మల్ని కలవండి',
    lead: 'విద్యార్థులు, తల్లిదండ్రులు నేరుగా రాగలిగే నిజమైన కోచింగ్ కేంద్రం.',
    addressLabel: 'చిరునామా',
    hoursLabel: 'పని వేళలు',
    mapsLabel: 'Google Maps లో తెరవండి',
    galleryLabel: 'కేంద్రం ఫోటోలు',
    featuredAlt: 'Siva Tuitions & Coachings కేంద్రం, పట్టాభిపురం, గుంటూరు',
    features: [
      { icon: '🏫', text: 'తరగతి కోచింగ్ కేంద్రంలో' },
      { icon: '📋', text: 'ఫలితాల తర్వాత కౌన్సెలింగ్ డెస్క్' },
      { icon: '📞', text: 'ఏపీ, తెలంగాణకు ఫోన్ మార్గదర్శకత్వం' },
    ],
  },
};

/** Section 2 — credibility strip directly under the hero. */
export const TRUST = {
  en: [
    { value: `Since ${SITE.foundingYear}`, label: 'Guntur’s own centre' },
    { value: 'Class 6 – Inter', label: 'CBSE · ICSE · State' },
    { value: 'EAPCET · NEET · POLYCET', label: 'Entrance coaching' },
    { value: 'Director-led', label: 'Counselling desk' },
  ],
  te: [
    { value: `${SITE.foundingYear} నుంచి`, label: 'గుంటూరులో మా కేంద్రం' },
    { value: '6వ – ఇంటర్', label: 'CBSE · ICSE · స్టేట్' },
    { value: 'EAPCET · NEET · POLYCET', label: 'ప్రవేశ పరీక్షల కోచింగ్' },
    { value: 'డైరెక్టర్ నేతృత్వం', label: 'కౌన్సెలింగ్ డెస్క్' },
  ],
};

/** Section 3 — "what we do" overview cards. */
export const SERVICES_OVERVIEW = {
  en: {
    eyebrow: 'Our main services',
    title: 'What we do',
    lead: 'Three services under one roof — and the third is what most coaching centres in Guntur do not offer.',
    items: [
      { icon: '📚', title: 'Academic Tuitions', body: 'Class 6 to Intermediate — CBSE, ICSE and State Board.', href: '#tuitions' },
      { icon: '🎯', title: 'Competitive Coaching', body: 'Short-term and summer programmes for EAPCET, NEET and POLYCET.', href: '#coaching' },
      { icon: '🎓', title: 'Admissions & Counselling', body: 'Rank analysis to final admission — the guidance families struggle to find.', href: '#counselling' },
    ],
  },
  te: {
    eyebrow: 'మా ప్రధాన సేవలు',
    title: 'మేము అందించే సేవలు',
    lead: 'ఒకే చోట మూడు సేవలు — మూడోది గుంటూరులో చాలా కోచింగ్ సెంటర్లు ఇవ్వని సేవ.',
    items: [
      { icon: '📚', title: 'అకడమిక్ ట్యూషన్లు', body: '6వ తరగతి నుంచి ఇంటర్ వరకు — CBSE, ICSE, స్టేట్ బోర్డు.', href: '#tuitions' },
      { icon: '🎯', title: 'పోటీ పరీక్షల కోచింగ్', body: 'EAPCET, NEET, POLYCET కోసం షార్ట్-టర్మ్, సమ్మర్ ప్రోగ్రామ్‌లు.', href: '#coaching' },
      { icon: '🎓', title: 'ప్రవేశాలు & కౌన్సెలింగ్', body: 'ర్యాంక్ విశ్లేషణ నుంచి తుది అడ్మిషన్ వరకు పూర్తి మార్గదర్శకత్వం.', href: '#counselling' },
    ],
  },
};

/** Section 4 — academic tuitions detail. */
export const TUITIONS_SECTION = {
  en: {
    eyebrow: 'Class 6 to Intermediate',
    title: 'Academic Tuitions',
    lead: 'Regular, supplementary and betterment tuitions — small batches with regular parent updates.',
    groups: [
      { label: 'Up to 10th', items: ['CBSE', 'ICSE', 'State Board'] },
      { label: 'Intermediate', items: ['State Board', 'CBSE', 'MPC', 'Maths', 'Physics', 'Chemistry', 'EAPCET-oriented'] },
      { label: 'How we teach', items: ['Regular Classes', 'Supplementary', 'Betterment', 'Subject-wise', 'Exam-oriented'] },
    ],
    links: [
      { label: 'Classes 1–10', href: '/courses/school-tuitions-guntur/' },
      { label: 'Tenth class', href: '/courses/tenth-class-tuitions-guntur/' },
      { label: 'Intermediate', href: '/courses/intermediate-tuitions-guntur/' },
    ],
    imageAlt: 'Teacher guiding school students in a tuition classroom',
  },
  te: {
    eyebrow: '6వ తరగతి నుంచి ఇంటర్ వరకు',
    title: 'అకడమిక్ ట్యూషన్లు',
    lead: 'రెగ్యులర్, సప్లిమెంటరీ, బెటర్‌మెంట్ ట్యూషన్లు — చిన్న బ్యాచ్‌లు, తల్లిదండ్రులకు నియమిత అప్‌డేట్‌లు.',
    groups: [
      { label: '10వ తరగతి వరకు', items: ['CBSE', 'ICSE', 'స్టేట్ బోర్డు'] },
      { label: 'ఇంటర్మీడియట్', items: ['స్టేట్ బోర్డు', 'CBSE', 'MPC', 'మ్యాథ్స్', 'ఫిజిక్స్', 'కెమిస్ట్రీ', 'EAPCET సిద్ధత'] },
      { label: 'ప్రత్యేకంగా', items: ['రెగ్యులర్ క్లాసులు', 'సప్లిమెంటరీ', 'బెటర్‌మెంట్', 'సబ్జెక్ట్-వైజ్', 'పరీక్షల సిద్ధత'] },
    ],
    links: [
      { label: '1–10వ తరగతి', href: '/courses/school-tuitions-guntur/' },
      { label: '10వ తరగతి', href: '/courses/tenth-class-tuitions-guntur/' },
      { label: 'ఇంటర్మీడియట్', href: '/courses/intermediate-tuitions-guntur/' },
    ],
    imageAlt: 'ట్యూషన్ తరగతిలో విద్యార్థులకు బోధిస్తున్న ఉపాధ్యాయుడు',
  },
};

/** Section 5 — competitive coaching detail. */
export const COACHING_SECTION = {
  en: {
    eyebrow: 'Summer & short-term programmes',
    title: 'Short-Term Competitive Coaching',
    lead: 'Focused batches for students preparing for entrance examinations — revision first, not fresh syllabus.',
    programs: ['MPC', 'EAPCET', 'POLYCET', 'Bi.P.C', 'NEET-oriented', 'Polytechnic'],
    focusLabel: 'Focus',
    focus: ['Concept Revision', 'Problem Solving', 'Exam Strategy', 'Previous Papers', 'Mock Tests'],
    links: [
      { label: 'EAPCET / EAMCET', href: '/courses/eamcet-eapcet-coaching-guntur/' },
      { label: 'NEET', href: '/courses/neet-coaching-guntur/' },
      { label: 'POLYCET', href: '/courses/polytechnic-polycet-coaching-guntur/' },
      { label: 'Crash batches', href: '/courses/short-term-crash-coaching-guntur/' },
    ],
    imageAlt: 'Siva Tuitions faculty with EAMCET short-term coaching banner at Pattabhipuram centre',
    photoSrc: '/gallery/eamcet-team.jpg',
    photoCaption: 'EAMCET short-term coaching — daily tests and revision batches at our centre.',
  },
  te: {
    eyebrow: 'సమ్మర్ & షార్ట్-టర్మ్ ప్రోగ్రామ్‌లు',
    title: 'షార్ట్-టర్మ్ పోటీ పరీక్షల కోచింగ్',
    lead: 'ప్రవేశ పరీక్షలకు సిద్ధమవుతున్న విద్యార్థులకు ప్రత్యేక బ్యాచ్‌లు — కొత్త సిలబస్ కాదు, పునశ్చరణ ప్రధానం.',
    programs: ['MPC', 'EAPCET', 'POLYCET', 'Bi.P.C', 'NEET సిద్ధత', 'పాలిటెక్నిక్'],
    focusLabel: 'దృష్టి',
    focus: ['కాన్సెప్ట్ రివిజన్', 'ప్రాబ్లమ్ సాల్వింగ్', 'పరీక్ష వ్యూహం', 'పాత ప్రశ్నపత్రాలు', 'మాక్ టెస్టులు'],
    links: [
      { label: 'EAPCET / EAMCET', href: '/te/courses/eamcet-eapcet-coaching-guntur/' },
      { label: 'NEET', href: '/courses/neet-coaching-guntur/' },
      { label: 'POLYCET', href: '/te/courses/polytechnic-polycet-coaching-guntur/' },
      { label: 'క్రాష్ బ్యాచ్‌లు', href: '/courses/short-term-crash-coaching-guntur/' },
    ],
    imageAlt: 'Siva Tuitions వద్ద EAMCET షార్ట్-టర్మ్ కోచింగ్ బ్యానర్',
    photoSrc: '/gallery/eamcet-team.jpg',
    photoCaption: 'EAMCET షార్ట్-టర్మ్ కోచింగ్ — రోజువారీ టెస్టులు, రివిజన్ బ్యాచ్‌లు.',
  },
};

/** Section 6 — counselling spotlight (the differentiator). */
export const COUNSELLING_SECTION = {
  en: {
    eyebrow: 'Our key strength',
    title: 'Admissions & Counselling Guidance Centre',
    lead: 'From the entrance examination to the final admission — we guide students and parents through every round.',
    objective: 'Right Rank + Right Branch + Right College = Right Career Decision',
    columns: [
      { title: 'Entrance exams', items: ['EAPCET', 'POLYCET', 'ICET', 'ECET', 'PGECET', 'PGSET', 'NEET', 'Other state entrances'] },
      { title: 'Courses & admissions', items: ['B.Tech', 'M.Tech', 'MCA', 'MBA', 'Polytechnic', 'MBBS', 'BDS', 'Veterinary', 'Agriculture'] },
      { title: 'Counselling services', items: ['Application & Registration', 'Certificates / Documents', 'Rank & Category Analysis', 'Previous Cut-offs', 'College & Branch Analysis', 'College Prediction', 'Web Option Entry', 'Seat Allotment & Admission'] },
    ],
    linkLabel: 'All counselling services',
    linkHref: '/counselling/',
    imageAlt: 'Admission counselling and web options guidance at Siva Tuitions, Guntur',
    photoSrc: '/gallery/counselling-desk.jpg',
    photoCaption: 'Web options and admission guidance for AP and Telangana — at the counselling desk.',
  },
  te: {
    eyebrow: 'మా ప్రత్యేకత',
    title: 'ప్రవేశాలు & కౌన్సెలింగ్ మార్గదర్శక కేంద్రం',
    lead: 'ప్రవేశ పరీక్ష నుంచి తుది అడ్మిషన్ వరకు — విద్యార్థులకు, తల్లిదండ్రులకు ప్రతి దశలో మార్గదర్శకత్వం.',
    objective: 'సరైన ర్యాంక్ + సరైన బ్రాంచ్ + సరైన కాలేజీ = సరైన కెరీర్ నిర్ణయం',
    columns: [
      { title: 'ప్రవేశ పరీక్షలు', items: ['EAPCET', 'POLYCET', 'ICET', 'ECET', 'PGECET', 'PGSET', 'NEET', 'ఇతర స్టేట్ పరీక్షలు'] },
      { title: 'కోర్సులు & అడ్మిషన్లు', items: ['B.Tech', 'M.Tech', 'MCA', 'MBA', 'పాలిటెక్నిక్', 'MBBS', 'BDS', 'వెటర్నరీ', 'అగ్రికల్చర్'] },
      { title: 'కౌన్సెలింగ్ సేవలు', items: ['అప్లికేషన్ & రిజిస్ట్రేషన్', 'సర్టిఫికెట్లు / డాక్యుమెంట్లు', 'ర్యాంక్ & కేటగిరీ విశ్లేషణ', 'గత కట్-ఆఫ్‌లు', 'కాలేజీ & బ్రాంచ్ విశ్లేషణ', 'కాలేజీ ప్రిడిక్షన్', 'వెబ్ ఆప్షన్ ఎంట్రీ', 'సీట్ అలాట్‌మెంట్ & అడ్మిషన్'] },
    ],
    linkLabel: 'అన్ని కౌన్సెలింగ్ సేవలు',
    linkHref: '/te/counselling/',
    imageAlt: 'Siva Tuitions, గుంటూరులో ప్రవేశ కౌన్సెలింగ్, వెబ్ ఆప్షన్స్ మార్గదర్శకత్వం',
    photoSrc: '/gallery/counselling-desk.jpg',
    photoCaption: 'ఆంధ్రప్రదేశ్, తెలంగాణకు వెబ్ ఆప్షన్స్, ప్రవేశ మార్గదర్శకత్వం — కౌన్సెలింగ్ డెస్క్ వద్ద.',
  },
};

/** Section 7 — why choose us. */
export const WHY_SECTION = {
  en: {
    title: 'Why choose Siva Tuitions & Coachings?',
    points: [
      { icon: '📖', text: 'Experienced Academic Guidance' },
      { icon: '🤝', text: 'Personalized Student Support' },
      { icon: '🎯', text: 'Competitive Exam Preparation' },
      { icon: '📊', text: 'Rank & Cut-off Analysis' },
      { icon: '🎓', text: 'Complete Counselling Support' },
      { icon: '👨‍👩‍👧', text: 'Parent & Student Guidance' },
    ],
  },
  te: {
    title: 'Siva Tuitions & Coachingsను ఎందుకు ఎంచుకోవాలి?',
    points: [
      { icon: '📖', text: 'అనుభవజ్ఞుల అకడమిక్ మార్గదర్శకత్వం' },
      { icon: '🤝', text: 'ప్రతి విద్యార్థికి ప్రత్యేక శ్రద్ధ' },
      { icon: '🎯', text: 'పోటీ పరీక్షలకు పూర్తి సిద్ధత' },
      { icon: '📊', text: 'ర్యాంక్ & కట్-ఆఫ్ విశ్లేషణ' },
      { icon: '🎓', text: 'పూర్తి కౌన్సెలింగ్ సహాయం' },
      { icon: '👨‍👩‍👧', text: 'తల్లిదండ్రులు, విద్యార్థులకు మార్గదర్శకత్వం' },
    ],
  },
};

/** Section 8 — enquiry block wrapper copy (form labels live in ENQUIRY_FORM). */
export const ENQUIRE_SECTION = {
  en: {
    eyebrow: 'Parents & students',
    title: 'Ask us your question',
    lead: 'Pick a topic, write your doubt, and send it straight to our WhatsApp for a same-day callback.',
    linkLabel: 'Official exam & scholarship links',
    linkHref: '/resources/',
  },
  te: {
    eyebrow: 'తల్లిదండ్రులు & విద్యార్థులు',
    title: 'మీ ప్రశ్న అడగండి',
    lead: 'ఒక అంశాన్ని ఎంచుకోండి, మీ సందేహం రాయండి — నేరుగా మా వాట్సాప్‌కు పంపండి, అదే రోజు కాల్ బ్యాక్.',
    linkLabel: 'అధికారిక పరీక్ష & స్కాలర్‌షిప్ లింకులు',
    linkHref: '/te/resources/',
  },
};

/** Enquiry form field labels. */
export const ENQUIRY_FORM = {
  en: {
    category: 'Category',
    categoryPlaceholder: 'Choose a topic…',
    name: 'Your name',
    namePlaceholder: 'Parent / student name',
    phone: 'Mobile number',
    phoneRecommended: 'recommended',
    phonePlaceholder: '10-digit mobile',
    phoneNudge: 'Leave your number — we usually call back the same day on WhatsApp.',
    email: 'Email',
    optional: 'optional',
    question: 'Your question',
    questionPlaceholder: 'Ask about tuitions, coaching, counselling, admissions…',
    emailNote: 'Without a mobile number, email is slower — replies may take 1–2 working days.',
    sendWhatsapp: 'Send on WhatsApp',
    sendEmail: 'Send by email',
    categories: [
      'Academic Tuitions (Classes 6–10 / Intermediate)',
      'EAPCET / EAMCET Coaching',
      'NEET Coaching',
      'POLYCET / Polytechnic',
      'Admission Counselling',
      'Web Options Guidance',
      'After 10th — group & course choice',
      'Scholarships & fee reimbursement',
      'Other',
    ],
  },
  te: {
    category: 'విభాగం',
    categoryPlaceholder: 'ఒక అంశాన్ని ఎంచుకోండి…',
    name: 'మీ పేరు',
    namePlaceholder: 'తల్లిదండ్రులు / విద్యార్థి పేరు',
    phone: 'మొబైల్ నంబర్',
    phoneRecommended: 'సిఫారసు',
    phonePlaceholder: '10 అంకెల మొబైల్',
    phoneNudge: 'మీ నంబర్ ఇవ్వండి — సాధారణంగా అదే రోజు వాట్సాప్‌లో కాల్ బ్యాక్ చేస్తాము.',
    email: 'ఈమెయిల్',
    optional: 'ఐచ్ఛికం',
    question: 'మీ ప్రశ్న',
    questionPlaceholder: 'ట్యూషన్లు, కోచింగ్, కౌన్సెలింగ్, అడ్మిషన్ల గురించి అడగండి…',
    emailNote: 'మొబైల్ నంబర్ లేకపోతే ఈమెయిల్ ఆలస్యం — సమాధానానికి 1–2 పని రోజులు పట్టవచ్చు.',
    sendWhatsapp: 'వాట్సాప్‌లో పంపండి',
    sendEmail: 'ఈమెయిల్‌లో పంపండి',
    categories: [
      'అకడమిక్ ట్యూషన్లు (6–10 / ఇంటర్)',
      'EAPCET / EAMCET కోచింగ్',
      'NEET కోచింగ్',
      'POLYCET / పాలిటెక్నిక్',
      'ప్రవేశ కౌన్సెలింగ్',
      'వెబ్ ఆప్షన్స్ మార్గదర్శకత్వం',
      '10వ తరగతి తర్వాత — గ్రూప్ ఎంపిక',
      'స్కాలర్‌షిప్‌లు & ఫీజు రీయింబర్స్‌మెంట్',
      'ఇతర',
    ],
  },
};

/** Floating enquiry widget (FAB + dialog). */
export const ENQUIRY_WIDGET = {
  en: {
    fab: 'Enquire',
    fabAria: 'Open the enquiry form',
    title: 'Send us an enquiry',
    subtitle: 'Answer a few quick questions — we reply the same working day.',
    close: 'Close',
    role: 'I am a',
    roles: ['Parent', 'Student', 'Other'],
    topic: 'Enquiry about',
    topics: [
      'Academic Tuitions (Classes 6–10)',
      'Intermediate Tuitions (MPC / BiPC)',
      'EAPCET / EAMCET Coaching',
      'NEET Coaching',
      'POLYCET / Polytechnic',
      'Short-term / Crash batch',
      'Admission Counselling',
      'Web Options Guidance',
      'After 10th — group & course choice',
      'Scholarships & fee reimbursement',
      'Fees & timings',
      'Other',
    ],
    stage: 'Current class / stage',
    stages: [
      'Class 6–8',
      'Class 9',
      'Class 10',
      'Intermediate 1st year',
      'Intermediate 2nd year',
      'Intermediate completed',
      'Diploma / Polytechnic',
      'Graduate',
      'Other',
    ],
    stream: 'Stream',
    streams: ['MPC', 'BiPC', 'CEC / MEC', 'Not decided yet', 'Not applicable'],
    board: 'Board',
    boards: ['State Board', 'CBSE', 'ICSE', 'Other'],
    name: 'Your name',
    namePlaceholder: 'Parent / student name',
    details: 'Your question',
    detailsPlaceholder: 'Tell us what you need — batch timings, fees, rank and college options, anything.',
    callback: 'Request a callback',
    callbackHint: 'We call back the same working day.',
    phone: 'Mobile number',
    phonePlaceholder: '10-digit mobile',
    phoneError: 'Please enter a valid 10-digit mobile number.',
    time: 'Best time to call',
    times: ['Morning (9 AM – 12 PM)', 'Afternoon (12 – 4 PM)', 'Evening (4 – 9 PM)', 'Anytime'],
    submit: 'Send enquiry',
    sending: 'Sending…',
    successTitle: 'Enquiry sent',
    successBody: 'Thank you — we have your question and will get back to you shortly.',
    successCallback: 'We will call you on',
    errorTitle: 'Could not send automatically',
    errorBody: 'No problem — use one of these instead and your answers are carried over.',
    openEmail: 'Send by email',
    openWhatsapp: 'Send on WhatsApp',
    alsoWhatsapp: 'Prefer WhatsApp? Send the same enquiry',
    required: 'Please fill in the highlighted fields.',
    done: 'Done',
  },
  te: {
    fab: 'ఎంక్వైరీ',
    fabAria: 'ఎంక్వైరీ ఫారం తెరవండి',
    title: 'మాకు ఎంక్వైరీ పంపండి',
    subtitle: 'కొన్ని చిన్న ప్రశ్నలకు సమాధానం ఇవ్వండి — అదే పని రోజున బదులిస్తాము.',
    close: 'మూసివేయండి',
    role: 'నేను',
    roles: ['తల్లిదండ్రులు', 'విద్యార్థి', 'ఇతర'],
    topic: 'దేని గురించి',
    topics: [
      'అకడమిక్ ట్యూషన్లు (6–10 తరగతి)',
      'ఇంటర్ ట్యూషన్లు (MPC / BiPC)',
      'EAPCET / EAMCET కోచింగ్',
      'NEET కోచింగ్',
      'POLYCET / పాలిటెక్నిక్',
      'షార్ట్-టర్మ్ / క్రాష్ బ్యాచ్',
      'ప్రవేశ కౌన్సెలింగ్',
      'వెబ్ ఆప్షన్స్ మార్గదర్శకత్వం',
      '10వ తరగతి తర్వాత — గ్రూప్ ఎంపిక',
      'స్కాలర్‌షిప్‌లు & ఫీజు రీయింబర్స్‌మెంట్',
      'ఫీజు & సమయాలు',
      'ఇతర',
    ],
    stage: 'ప్రస్తుత తరగతి / దశ',
    stages: [
      '6–8 తరగతి',
      '9వ తరగతి',
      '10వ తరగతి',
      'ఇంటర్ మొదటి సంవత్సరం',
      'ఇంటర్ రెండవ సంవత్సరం',
      'ఇంటర్ పూర్తయింది',
      'డిప్లొమా / పాలిటెక్నిక్',
      'డిగ్రీ',
      'ఇతర',
    ],
    stream: 'గ్రూప్',
    streams: ['MPC', 'BiPC', 'CEC / MEC', 'ఇంకా నిర్ణయించలేదు', 'వర్తించదు'],
    board: 'బోర్డు',
    boards: ['స్టేట్ బోర్డు', 'CBSE', 'ICSE', 'ఇతర'],
    name: 'మీ పేరు',
    namePlaceholder: 'తల్లిదండ్రులు / విద్యార్థి పేరు',
    details: 'మీ ప్రశ్న',
    detailsPlaceholder: 'మీకు కావలసినది రాయండి — బ్యాచ్ సమయాలు, ఫీజు, ర్యాంక్ & కాలేజీ ఎంపికలు, ఏదైనా.',
    callback: 'కాల్ బ్యాక్ కావాలి',
    callbackHint: 'అదే పని రోజున కాల్ చేస్తాము.',
    phone: 'మొబైల్ నంబర్',
    phonePlaceholder: '10 అంకెల మొబైల్',
    phoneError: 'దయచేసి సరైన 10 అంకెల మొబైల్ నంబర్ ఇవ్వండి.',
    time: 'కాల్ చేయడానికి అనుకూల సమయం',
    times: ['ఉదయం (9 – 12)', 'మధ్యాహ్నం (12 – 4)', 'సాయంత్రం (4 – 9)', 'ఎప్పుడైనా'],
    submit: 'ఎంక్వైరీ పంపండి',
    sending: 'పంపుతున్నాము…',
    successTitle: 'ఎంక్వైరీ పంపబడింది',
    successBody: 'ధన్యవాదాలు — మీ ప్రశ్న మాకు అందింది, త్వరలో సంప్రదిస్తాము.',
    successCallback: 'మేము కాల్ చేసే నంబర్',
    errorTitle: 'ఆటోమేటిక్‌గా పంపలేకపోయాము',
    errorBody: 'ఫర్వాలేదు — వీటిలో ఒకటి వాడండి, మీ సమాధానాలు అలాగే ఉంటాయి.',
    openEmail: 'ఈమెయిల్‌లో పంపండి',
    openWhatsapp: 'వాట్సాప్‌లో పంపండి',
    alsoWhatsapp: 'వాట్సాప్ కావాలా? అదే ఎంక్వైరీ పంపండి',
    required: 'దయచేసి గుర్తించిన ఖాళీలను పూరించండి.',
    done: 'సరే',
  },
};

/** Section 9 — about / director. */
export const ABOUT_SECTION = {
  en: {
    eyebrow: 'Who runs the centre',
    title: 'About Siva Tuitions & Coachings',
    paragraphs: [
      'Siva Tuitions & Coachings is an academic, competitive coaching and educational counselling centre dedicated to helping students achieve their academic and career goals.',
      'We provide academic tuition from 6th Class to Intermediate — CBSE, ICSE and State Board — with specialized coaching in Mathematics, Physics and Chemistry.',
      'Short-term programmes prepare students for EAPCET, POLYCET and other competitive entrance examinations.',
      'Our Counselling & Guidance Centre supports students and parents from application and rank analysis through cut-offs, branch selection, web options and final admission.',
    ],
    aimLabel: 'Our aim',
    aim: 'The right academic support, reliable information and practical guidance at every important stage.',
    directorIntro: `${DIRECTOR.name} — ${DIRECTOR.credentials.join(', ')} — founded the institute and personally leads both classroom coaching and the admission-counselling desk.`,
    linkLabel: 'Full about page',
    linkHref: '/brand/',
  },
  te: {
    eyebrow: 'కేంద్రాన్ని నడిపిస్తున్నవారు',
    title: 'Siva Tuitions & Coachings గురించి',
    paragraphs: [
      'Siva Tuitions & Coachings ఒక అకడమిక్, పోటీ పరీక్షల కోచింగ్ మరియు విద్యా కౌన్సెలింగ్ కేంద్రం — విద్యార్థుల చదువు, కెరీర్ లక్ష్యాలను సాధించడంలో సహాయం చేస్తుంది.',
      '6వ తరగతి నుంచి ఇంటర్మీడియట్ వరకు అకడమిక్ ట్యూషన్లు — CBSE, ICSE, స్టేట్ బోర్డు — మ్యాథ్స్, ఫిజిక్స్, కెమిస్ట్రీలో ప్రత్యేక కోచింగ్.',
      'EAPCET, POLYCET తో పాటు ఇతర పోటీ ప్రవేశ పరీక్షలకు షార్ట్-టర్మ్ ప్రోగ్రామ్‌లు.',
      'మా కౌన్సెలింగ్ & గైడెన్స్ కేంద్రం — అప్లికేషన్, ర్యాంక్ విశ్లేషణ నుంచి కట్-ఆఫ్‌లు, బ్రాంచ్ ఎంపిక, వెబ్ ఆప్షన్స్, తుది అడ్మిషన్ వరకు సహాయం.',
    ],
    aimLabel: 'మా లక్ష్యం',
    aim: 'ప్రతి ముఖ్యమైన దశలో సరైన అకడమిక్ సహాయం, నమ్మకమైన సమాచారం, ఆచరణాత్మక మార్గదర్శకత్వం.',
    directorIntro: `${DIRECTOR.name} — ${DIRECTOR.credentials.join(', ')} — సంస్థను స్థాపించి, తరగతి కోచింగ్, ప్రవేశ కౌన్సెలింగ్ డెస్క్ రెండింటినీ నేరుగా చూస్తారు.`,
    linkLabel: 'పూర్తి వివరాలు',
    linkHref: '/te/about/',
  },
};

/** About page — copy that only appears on /brand/ and /te/about/. */
export const ABOUT_PAGE = {
  en: {
    eyebrow: `Since ${SITE.foundingYear} · Pattabhipuram, Guntur`,
    heroImageAlt: 'Students celebrating an admission offer',
    storyLabel: 'Our story',
    storyLead:
      'Siva Tuitions & Coachings is a Guntur coaching centre — school tuitions, entrance exam prep, and admission counselling under one roof since 2005.',
    storyImageAlt: 'Students studying together in a classroom',
    pillarsLabel: 'Three services, one desk',
    pillars: [
      {
        icon: '📚',
        title: 'Academic tuitions',
        body: 'Class 6 to Intermediate — CBSE, ICSE and State Board, with Maths, Physics and Chemistry.',
        href: '/courses/school-tuitions-guntur/',
      },
      {
        icon: '🎯',
        title: 'Entrance coaching',
        body: 'Short-term batches for EAPCET, NEET, POLYCET and other competitive exams.',
        href: '/courses/eamcet-eapcet-coaching-guntur/',
      },
      {
        icon: '🎓',
        title: 'Admission counselling',
        body: 'Rank analysis, cut-offs, branch choice, web options and final admission.',
        href: '/counselling/eapcet-web-options-counselling/',
      },
    ],
    galleryLabel: 'Inside the centre',
    galleryLink: 'View all photos',
    directorLabel: 'Who runs the centre',
    directorRole: DIRECTOR.role,
    credentialsLabel: 'Qualifications',
    profileLink: 'Read the full profile',
    whyLabel: 'What families get',
    valuesLabel: 'How we work',
    values: [
      { title: 'Small batches', body: 'Few enough students that doubts get cleared in the class itself, not after it.' },
      { title: 'Coaching and counselling at one desk', body: 'The same people who taught the syllabus sit with you for web options.' },
      { title: 'Honest guidance', body: 'Realistic rank expectations and safety options — never inflated promises.' },
      { title: 'Director-led', body: `${DIRECTOR.name} personally runs both the classroom and the counselling desk.` },
    ],
    ctaTitle: 'Come and see the centre',
    ctaBody: 'Visit during working hours, or call ahead and we will keep time aside for you.',
  },
  te: {
    eyebrow: `${SITE.foundingYear} నుంచి · పట్టాభిపురం, గుంటూరు`,
    heroImageAlt: 'ప్రవేశ ఆఫర్‌ను సంతోషంగా జరుపుకునే విద్యార్థులు',
    storyLabel: 'మా కథ',
    storyLead:
      'Siva Tuitions & Coachings గుంటూరులో ఒక కోచింగ్ కేంద్రం — 2005 నుంచి పాఠశాల ట్యూషన్లు, ప్రవేశ పరీక్షల సిద్ధత, అడ్మిషన్ కౌన్సెలింగ్ ఒకే చోట.',
    storyImageAlt: 'తరగతిలో కలిసి చదువుకునే విద్యార్థులు',
    pillarsLabel: 'మూడు సేవలు, ఒకే డెస్క్',
    pillars: [
      {
        icon: '📚',
        title: 'అకడమిక్ ట్యూషన్లు',
        body: '6వ తరగతి నుంచి ఇంటర్ — CBSE, ICSE, స్టేట్ బోర్డు; మ్యాథ్స్, ఫిజిక్స్, కెమిస్ట్రీ.',
        href: '/courses/school-tuitions-guntur/',
      },
      {
        icon: '🎯',
        title: 'ప్రవేశ పరీక్షల కోచింగ్',
        body: 'EAPCET, NEET, POLYCET తదితర పోటీ పరీక్షలకు షార్ట్-టర్మ్ బ్యాచ్‌లు.',
        href: '/courses/eamcet-eapcet-coaching-guntur/',
      },
      {
        icon: '🎓',
        title: 'ప్రవేశ కౌన్సెలింగ్',
        body: 'ర్యాంక్ విశ్లేషణ, కట్-ఆఫ్‌లు, బ్రాంచ్ ఎంపిక, వెబ్ ఆప్షన్స్, తుది అడ్మిషన్.',
        href: '/counselling/eapcet-web-options-counselling/',
      },
    ],
    galleryLabel: 'కేంద్రం లోపల',
    galleryLink: 'అన్ని ఫోటోలు',
    directorLabel: 'కేంద్రాన్ని నడిపిస్తున్నవారు',
    directorRole: 'వ్యవస్థాపకులు & డైరెక్టర్',
    credentialsLabel: 'విద్యార్హతలు',
    profileLink: 'పూర్తి ప్రొఫైల్ చదవండి',
    whyLabel: 'కుటుంబాలకు అందేది',
    valuesLabel: 'మా పని విధానం',
    values: [
      { title: 'చిన్న బ్యాచ్‌లు', body: 'తరగతిలోనే సందేహాలు తీరేంత తక్కువ మంది విద్యార్థులు.' },
      { title: 'ఒకే చోట కోచింగ్, కౌన్సెలింగ్', body: 'సిలబస్ బోధించినవారే వెబ్ ఆప్షన్స్ సమయంలోనూ మీతో కూర్చుంటారు.' },
      { title: 'నిజాయితీ మార్గదర్శకత్వం', body: 'వాస్తవిక ర్యాంక్ అంచనాలు, సేఫ్టీ ఆప్షన్లు — ఎప్పుడూ అతిశయోక్తి వాగ్దానాలు కాదు.' },
      { title: 'డైరెక్టర్ నేతృత్వం', body: `${DIRECTOR.name} తరగతి, కౌన్సెలింగ్ డెస్క్ రెండింటినీ నేరుగా చూస్తారు.` },
    ],
    ctaTitle: 'కేంద్రాన్ని వచ్చి చూడండి',
    ctaBody: 'పని వేళల్లో రండి, లేదా ముందుగా కాల్ చేస్తే మీ కోసం సమయం కేటాయిస్తాము.',
  },
};

/** Section 10 — photo proof (centre + community in one block). */
export const PROOF_SECTION = {
  en: {
    eyebrow: 'See for yourself',
    title: 'Inside Siva Tuitions',
    centreLabel: 'At the centre',
    socialLabel: 'Community & social activities',
    centreLink: { label: 'Centre gallery', href: '/gallery/' },
    socialLink: { label: 'All social activities', href: '/gallery/#social' },
  },
  te: {
    eyebrow: 'మీరే చూడండి',
    title: 'Siva Tuitions లోపల',
    centreLabel: 'మా కేంద్రంలో',
    socialLabel: 'సామాజిక కార్యక్రమాలు',
    centreLink: { label: 'కేంద్రం గ్యాలరీ', href: '/te/gallery/' },
    socialLink: { label: 'అన్ని సామాజిక కార్యక్రమాలు', href: '/te/gallery/#social' },
  },
};

/** Section 11 — official links teaser. */
export const RESOURCES_SECTION = {
  en: {
    eyebrow: 'What we track for you',
    title: 'Official exam links & scholarships',
    lead: 'Every AP and Telangana entrance portal plus scholarship schemes, in one place — so no family misses a deadline.',
    chips: ['AP EAPCET', 'TG EAPCET', 'NEET', 'POLYCET', 'ECET', 'ICET', 'PGECET', 'JoSAA', 'Jnanabhumi', 'ePASS'],
    linkLabel: 'Open the links page',
    linkHref: '/resources/',
  },
  te: {
    eyebrow: 'మీ కోసం మేము గమనించేవి',
    title: 'అధికారిక పరీక్ష లింకులు & స్కాలర్‌షిప్‌లు',
    lead: 'ఆంధ్రప్రదేశ్, తెలంగాణ ప్రవేశ పరీక్షల పోర్టల్‌లు, స్కాలర్‌షిప్ పథకాలు — ఒకే చోట, ఏ కుటుంబం గడువు కోల్పోకుండా.',
    chips: ['AP EAPCET', 'TG EAPCET', 'NEET', 'POLYCET', 'ECET', 'ICET', 'PGECET', 'JoSAA', 'జ్ఞానభూమి', 'ePASS'],
    linkLabel: 'లింకుల పేజీ తెరవండి',
    linkHref: '/te/resources/',
  },
};

/** Section 12 — FAQ teaser. */
export const FAQ_SECTION = {
  en: { title: 'Common questions', linkLabel: 'All FAQs', linkHref: '/faq/' },
  te: { title: 'తరచుగా అడిగే ప్రశ్నలు', linkLabel: 'అన్ని ప్రశ్నలు', linkHref: '/te/faq/' },
};

/** Section 13 — closing contact strip. */
export const CONTACT_SECTION = {
  en: { title: 'Talk to us today', askLabel: 'Ask a question', askHref: '/contact/#enquire' },
  te: { title: 'ఈ రోజే మాతో మాట్లాడండి', askLabel: 'ప్రశ్న అడగండి', askHref: '/te/contact/#enquire' },
};

/** Telugu FAQ set — mirrors GLOBAL_FAQS in meaning. */
export const FAQS_TE = [
  {
    q: 'గుంటూరులో EAPCET, NEET, POLYCET కోచింగ్‌కు మంచి సెంటర్ ఏది?',
    a: 'పట్టాభిపురం, గుంటూరులోని Siva Tuitions & Coachings మూడింటికీ కోచింగ్ ఇస్తుంది — AP EAPCET (EAMCET), NEET UG, POLYCET — దానితో పాటు ర్యాంక్ విశ్లేషణ, సర్టిఫికెట్ వెరిఫికేషన్, వెబ్ ఆప్షన్స్ కోసం ప్రవేశ కౌన్సెలింగ్ డెస్క్ కూడా ఉంది. డైరెక్టర్: యడ్లపల్లి నాగ మురళీ కృష్ణ (M.B.A, M.Tech CSE, M.Sc, MCA). ఫోన్: +91 88797 97777.',
  },
  {
    q: 'Siva Tuitions & Coachings ఎక్కడ ఉంది?',
    a: '2వ లేన్, జమీలి డెంటల్ హాస్పిటల్ వెనుక, గ్యాంగ్ కాలనీ, పట్టాభిపురం, గుంటూరు, ఆంధ్రప్రదేశ్ 522006. ఫోన్/వాట్సాప్: +91 88797 97777.',
  },
  {
    q: 'Siva Tuitions & Coachings డైరెక్టర్ ఎవరు?',
    a: 'యడ్లపల్లి నాగ మురళీ కృష్ణ — M.B.A, M.Tech (CSE), M.Sc, MCA డిగ్రీలు ఉన్నవారు — సంస్థను స్థాపించి, తరగతులు మరియు ప్రవేశ కౌన్సెలింగ్ డెస్క్ రెండింటినీ నేరుగా నడుపుతారు.',
  },
  {
    q: 'వెబ్ ఆప్షన్స్, ప్రవేశ కౌన్సెలింగ్ ఉందా?',
    a: 'ఉంది. AP EAPCET, TS EAMCET, NEET, POLYCET ప్రవేశాలకు ర్యాంక్ విశ్లేషణ, కాలేజీ ఎంపిక, సర్టిఫికెట్ వెరిఫికేషన్, వెబ్ ఆప్షన్స్ — ఆంధ్రప్రదేశ్, తెలంగాణ విద్యార్థులకు.',
  },
  {
    q: 'ఏ తరగతులు, ఏ బోర్డులు బోధిస్తారు?',
    a: '1–10వ తరగతి (CBSE, ICSE, ఏపీ స్టేట్ బోర్డు), ఇంటర్మీడియట్ MPC & BiPC, అలాగే EAPCET/EAMCET, NEET, POLYCET ప్రవేశ కోచింగ్.',
  },
  {
    q: 'Siva Tuitionsను ఎలా సంప్రదించాలి?',
    a: '+91 88797 97777 కు కాల్ లేదా వాట్సాప్ చేయండి, sivatuitions@gmail.com కు ఈమెయిల్ పంపండి, లేదా పట్టాభిపురం, గుంటూరులోని కేంద్రాన్ని సందర్శించండి. గూగుల్ ప్లేలో ఆండ్రాయిడ్ యాప్ కూడా ఉంది.',
  },
];

/** Telugu labels for the resources page section headings. */
export const RESOURCES_PAGE_TE = {
  title: 'అధికారిక లింకులు & స్కాలర్‌షిప్‌లు',
  intro:
    'ఆంధ్రప్రదేశ్, తెలంగాణ ప్రవేశ పరీక్షలు, స్కాలర్‌షిప్ పోర్టల్‌ల అధికారిక లింకులు. తేదీలను ఎప్పుడూ అధికారిక సైట్‌లో నిర్ధారించుకోండి.',
  sectionTitles: {
    scholarships: 'స్కాలర్‌షిప్‌లు & ఫీజు సహాయం',
    ap: 'ఆంధ్రప్రదేశ్ — ప్రవేశ పరీక్షలు',
    ts: 'తెలంగాణ — ప్రవేశ పరీక్షలు',
    national: 'జాతీయ — మెడికల్ & ఇంజనీరింగ్',
  },
  disclaimer:
    'ఈ లింకులు అధికారిక ప్రభుత్వ / యూనివర్సిటీ పోర్టల్‌లను తెరుస్తాయి. పరీక్షల షెడ్యూల్ ఏటా మారుతుంది — అధికారిక నోటిఫికేషన్‌లను చూడండి.',
  askLabel: 'సహాయం కావాలా? మమ్మల్ని అడగండి',
};

/** Telugu labels for the gallery page. */
export const GALLERY_PAGE_TE = {
  title: 'గ్యాలరీ',
  intro: 'పట్టాభిపురం కేంద్రం',
  mapsLabel: 'గూగుల్ మ్యాప్స్‌లో చూడండి',
  socialTitle: 'సామాజిక కార్యక్రమాలు',
  socialIntro: 'కమ్యూనిటీ కార్యక్రమాలు, విద్యా అవగాహన, పట్టాభిపురం కేంద్రం వెలుపల కార్యకలాపాలు.',
};

/** Headings for the grouped course / counselling listings. */
export const GROUP_LABELS = {
  en: {
    courses: {
      school: { title: 'School — Classes 1 to 10', lead: 'Board syllabus, weekly tests and a steady base before the entrance years.' },
      intermediate: { title: 'Intermediate — MPC & BiPC', lead: 'Subject tuitions that run alongside college and feed straight into entrance prep.' },
      entrance: { title: 'Entrance exam coaching', lead: 'Focused batches for the exams that decide the seat — grouped by the stream each one serves.' },
    },
    counselling: {
      engineering: { title: 'Engineering & Pharmacy admissions', lead: 'EAPCET rank to a confirmed branch, in AP or across state lines.' },
      medical: { title: 'Medical admissions', lead: 'NEET state quota and All India rounds.' },
      afterTenth: { title: 'After 10th — Polytechnic & Intermediate', lead: 'Group selection and diploma admissions.' },
      graduate: { title: 'Graduate & post-graduate', lead: 'MBA, MCA, lateral entry, PG and IIT/NIT counselling.' },
    },
  },
  te: {
    courses: {
      school: { title: 'స్కూల్ — 1 నుంచి 10వ తరగతి', lead: 'బోర్డు సిలబస్, వారంవారీ టెస్టులు — ప్రవేశ పరీక్షల ముందు గట్టి పునాది.' },
      intermediate: { title: 'ఇంటర్మీడియట్ — MPC & BiPC', lead: 'కాలేజీతో పాటు సాగే సబ్జెక్ట్ ట్యూషన్లు — నేరుగా ప్రవేశ సిద్ధతకు దారి.' },
      entrance: { title: 'ప్రవేశ పరీక్షల కోచింగ్', lead: 'సీటు నిర్ణయించే పరీక్షలకు ప్రత్యేక బ్యాచ్‌లు — గ్రూప్ ప్రకారం విభజించబడ్డాయి.' },
    },
    counselling: {
      engineering: { title: 'ఇంజనీరింగ్ & ఫార్మసీ ప్రవేశాలు', lead: 'EAPCET ర్యాంక్ నుంచి ఖాయమైన బ్రాంచ్ వరకు — ఏపీలో, ఇతర రాష్ట్రాల్లో.' },
      medical: { title: 'మెడికల్ ప్రవేశాలు', lead: 'NEET స్టేట్ కోటా, ఆల్ ఇండియా రౌండ్లు.' },
      afterTenth: { title: '10వ తరగతి తర్వాత — పాలిటెక్నిక్ & ఇంటర్', lead: 'గ్రూప్ ఎంపిక, డిప్లొమా ప్రవేశాలు.' },
      graduate: { title: 'డిగ్రీ & పీజీ', lead: 'MBA, MCA, లేటరల్ ఎంట్రీ, PG, IIT/NIT కౌన్సెలింగ్.' },
    },
  },
};

/** Telugu card badges. Exam names stay in Latin script; only wording is translated. */
export const COURSE_BADGE_TE = {
  'school-tuitions-guntur': 'CBSE · ICSE · స్టేట్',
  'tenth-class-tuitions-guntur': 'SSC · CBSE · ICSE',
  'intermediate-tuitions-guntur': 'MPC · BiPC',
  'eamcet-eapcet-coaching-guntur': 'MPC · BiPC',
  'neet-coaching-guntur': 'BiPC',
  'polytechnic-polycet-coaching-guntur': '10 తర్వాత',
  'short-term-crash-coaching-guntur': 'అన్ని గ్రూప్‌లు',
};

export const COUNSELLING_BADGE_TE = {
  'eapcet-web-options-counselling': 'EAPCET',
  'engineering-college-guidance-ap-interstate': 'ఏపీ · తెలంగాణ · ఇతర రాష్ట్రాలు',
  'neet-medical-admission-counselling': 'NEET',
  'tenth-polycet-counselling': 'POLYCET',
  'graduate-web-counselling-icet-ecet-pgcet': 'ICET · ECET · PGCET',
};

/** Telugu titles/blurbs for course cards, keyed by slug. `href` set when a Telugu page exists. */
export const COURSES_TE = {
  'school-tuitions-guntur': {
    short: 'స్కూల్ ట్యూషన్లు (1–10)',
    blurb: 'CBSE, ICSE, ఏపీ స్టేట్ బోర్డు — 1 నుంచి 10వ తరగతి వరకు చిన్న బ్యాచ్‌లు.',
  },
  'tenth-class-tuitions-guntur': {
    short: '10వ తరగతి ట్యూషన్లు',
    blurb: 'SSC / CBSE / ICSE అన్ని సబ్జెక్టులు, వారంవారీ టెస్టులు, 10 తర్వాత మార్గదర్శకత్వం.',
  },
  'intermediate-tuitions-guntur': {
    short: 'ఇంటర్మీడియట్ ట్యూషన్లు',
    blurb: 'MPC, BiPC — మ్యాథ్స్, ఫిజిక్స్, కెమిస్ట్రీ, బోటనీ, జువాలజీ.',
  },
  'eamcet-eapcet-coaching-guntur': {
    short: 'EAMCET / EAPCET కోచింగ్',
    blurb: 'ఇంజనీరింగ్, ఫార్మసీ సీట్ల కోసం MPC, BiPC విద్యార్థులకు కోచింగ్.',
    href: '/te/courses/eamcet-eapcet-coaching-guntur/',
  },
  'neet-coaching-guntur': {
    short: 'NEET కోచింగ్',
    blurb: 'BiPC విద్యార్థులకు బయాలజీ, ఫిజిక్స్, కెమిస్ట్రీ — NEET నమూనా మాక్ టెస్టులు.',
  },
  'polytechnic-polycet-coaching-guntur': {
    short: 'పాలిటెక్నిక్ (POLYCET)',
    blurb: 'పదో తరగతి తర్వాత డిప్లొమా సీట్లు — అబ్బాయిలు, అమ్మాయిలకు మార్గదర్శకత్వం.',
    href: '/te/courses/polytechnic-polycet-coaching-guntur/',
  },
  'short-term-crash-coaching-guntur': {
    short: 'షార్ట్-టర్మ్ క్రాష్ కోచింగ్',
    blurb: 'పరీక్షకు ముందు వారాల్లో పునశ్చరణ, పూర్తి నిడివి మాక్ టెస్టులు, తప్పుల విశ్లేషణ.',
  },
};

/** Telugu titles/blurbs for counselling cards, keyed by slug. */
export const COUNSELLING_TE = {
  'eapcet-web-options-counselling': {
    short: 'EAPCET వెబ్ ఆప్షన్స్',
    blurb: 'ర్యాంక్ విశ్లేషణ, ఆర్డర్ చేసిన ఆప్షన్ లిస్ట్, సర్టిఫికెట్ వెరిఫికేషన్.',
    href: '/te/counselling/eapcet-web-options-counselling/',
  },
  'neet-medical-admission-counselling': {
    short: 'NEET ప్రవేశ కౌన్సెలింగ్',
    blurb: 'ఆంధ్రప్రదేశ్, తెలంగాణ స్టేట్ కోటా, ఆల్ ఇండియా కోటా రౌండ్లు.',
  },
  'tenth-polycet-counselling': {
    short: '10 తర్వాత & POLYCET కౌన్సెలింగ్',
    blurb: 'ఇంటర్ గ్రూప్ ఎంపిక, పాలిటెక్నిక్ ఆప్షన్లు, వెబ్ ఆప్షన్స్ సహాయం.',
  },
  'graduate-web-counselling-icet-ecet-pgcet': {
    short: 'గ్రాడ్యుయేట్ కౌన్సెలింగ్ (ICET, ECET, PG-CET, JoSAA)',
    blurb: 'MBA/MCA, డిప్లొమా లేటరల్ ఎంట్రీ, PG, IIT/NIT ప్రవేశాల సహాయం.',
  },
  'engineering-college-guidance-ap-interstate': {
    short: 'ఇంజనీరింగ్ కాలేజీ గైడెన్స్ (ఏపీ & ఇతర రాష్ట్రాలు)',
    blurb: 'ఆంధ్రప్రదేశ్, తెలంగాణ, డీమ్డ్ యూనివర్సిటీలు, ఇతర రాష్ట్రాల ఎంపికలు.',
  },
};

/** Telugu labels for listing pages. */
export const LISTING_TE = {
  coursesTitle: 'కోర్సులు & కోచింగ్',
  coursesIntro:
    '1–10వ తరగతి, ఇంటర్మీడియట్ ట్యూషన్లు; EAPCET, NEET, POLYCET ప్రవేశ కోచింగ్ — పట్టాభిపురం, గుంటూరు.',
  counsellingTitle: 'ప్రవేశ కౌన్సెలింగ్ సేవలు',
  counsellingIntro:
    'ర్యాంక్ విశ్లేషణ, కాలేజీ ఎంపిక, సర్టిఫికెట్ వెరిఫికేషన్, వెబ్ ఆప్షన్స్ — ఆంధ్రప్రదేశ్, తెలంగాణ విద్యార్థులకు.',
  englishPageNote: 'ఈ పేజీ ఆంగ్లంలో ఉంది',
};
