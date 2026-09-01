import {
  SITE,
  DIRECTOR,
  COURSES,
  COUNSELLING,
  LOCATIONS,
  normalizePath,
} from './site.js';

/** Map URL pathname → OG image URL path (`/og/...png`). */
export function ogImagePath(pathname) {
  const p = normalizePath(pathname);
  const key = p === '/' ? 'index' : p.replace(/^\/|\/$/g, '');
  return `/og/${key}.png`;
}

/** Keys match OG route segments (no leading/trailing slash). */
export function staticOgPages() {
  return {
    index: {
      title: SITE.name,
      description: 'Tuitions, EAPCET, NEET & POLYCET coaching and admission counselling in Guntur.',
    },
    contact: {
      title: `Contact ${SITE.name}`,
      description: `${SITE.address.street}, Guntur ${SITE.address.postalCode} · ${SITE.phone}`,
    },
    resources: {
      title: 'Important links & scholarships',
      description: 'AP EAPCET, TS EAMCET, NEET, POLYCET, ECET, JoSAA and scholarship portals for AP & Telangana.',
    },
    faq: {
      title: 'FAQ — Tuitions, EAPCET, NEET & POLYCET in Guntur',
      description: 'Answers for parents and students at Siva Tuitions & Coachings, Pattabhipuram.',
    },
    answers: {
      title: 'Answers — tuitions, EAPCET, NEET, POLYCET in Guntur',
      description: 'Direct answers to the questions students ask about coaching and counselling in Guntur.',
    },
    blog: {
      title: 'Admission & exam guides',
      description: 'EAPCET, NEET, POLYCET and counselling guides from Siva Tuitions & Coachings.',
    },
    courses: {
      title: 'Courses & coaching in Guntur',
      description: 'Classes 6–10, Intermediate, EAPCET, NEET and POLYCET at Pattabhipuram.',
    },
    counselling: {
      title: 'Admission counselling & web options',
      description: 'EAPCET, NEET and POLYCET counselling for AP and Telangana students.',
    },
    gallery: {
      title: 'Inside Siva Tuitions & Coachings',
      description: 'Photos of the Pattabhipuram centre plus community and social activities.',
    },
    brand: {
      title: 'About Siva Tuitions & Coachings',
      description: 'Academic tuitions, competitive coaching and admission counselling in Guntur.',
    },
    [`director/${DIRECTOR.slug}`]: {
      title: DIRECTOR.name,
      description: `${DIRECTOR.role}, ${SITE.name} — ${DIRECTOR.credentials.join(', ')}`,
    },
    te: {
      title: 'Siva Tuitions & Coachings, గుంటూరు',
      description: 'ట్యూషన్లు, EAPCET, NEET, POLYCET కోచింగ్ మరియు ప్రవేశ కౌన్సెలింగ్.',
    },
    'te/contact': {
      title: 'సంప్రదించండి — Siva Tuitions, గుంటూరు',
      description: `${SITE.address.street}, గుంటూరు ${SITE.address.postalCode} · ${SITE.phone}`,
    },
    'te/courses': {
      title: 'కోర్సులు & కోచింగ్ — గుంటూరు',
      description: '6–10వ తరగతి, ఇంటర్ ట్యూషన్లు; EAPCET, NEET, POLYCET కోచింగ్.',
    },
    'te/counselling': {
      title: 'ప్రవేశ కౌన్సెలింగ్ — గుంటూరు',
      description: 'ర్యాంక్ విశ్లేషణ, కాలేజీ ఎంపిక, వెబ్ ఆప్షన్స్ — ఏపీ, తెలంగాణ.',
    },
    'te/resources': {
      title: 'ముఖ్య లింకులు & స్కాలర్‌షిప్‌లు',
      description: 'EAPCET, NEET, POLYCET, ECET, జ్ఞానభూమి, ePASS — ఒకే చోట.',
    },
    'te/gallery': {
      title: 'గ్యాలరీ — Siva Tuitions, గుంటూరు',
      description: 'పట్టాభిపురం కేంద్రం ఫోటోలు, సామాజిక కార్యక్రమాలు.',
    },
    'te/about': {
      title: 'మా గురించి — Siva Tuitions & Coachings',
      description: 'అకడమిక్ ట్యూషన్లు, పోటీ పరీక్షల కోచింగ్, ప్రవేశ కౌన్సెలింగ్.',
    },
    'te/faq': {
      title: 'తరచుగా అడిగే ప్రశ్నలు — Siva Tuitions',
      description: 'ట్యూషన్లు, కోచింగ్, కౌన్సెలింగ్ గురించి తల్లిదండ్రుల ప్రశ్నలు.',
    },
    'te/courses/eamcet-eapcet-coaching-guntur': {
      title: 'గుంటూరులో EAPCET / EAMCET కోచింగ్',
      description: 'MPC, BiPC విద్యార్థులకు ఇంజనీరింగ్, ఫార్మసీ ప్రవేశ కోచింగ్.',
    },
    'te/courses/polytechnic-polycet-coaching-guntur': {
      title: 'గుంటూరులో POLYCET కోచింగ్',
      description: 'పదో తరగతి తర్వాత పాలిటెక్నిక్ ప్రవేశం — అబ్బాయిలు, అమ్మాయిలు.',
    },
    'te/counselling/eapcet-web-options-counselling': {
      title: 'AP EAPCET వెబ్ ఆప్షన్స్ — గుంటూరు',
      description: 'ర్యాంక్ విశ్లేషణ, కాలేజీ జాబితా, సర్టిఫికెట్ వెరిఫికేషన్.',
    },
  };
}

export function dataOgPages() {
  const pages = {};
  for (const c of COURSES) {
    pages[`courses/${c.slug}`] = { title: c.title, description: c.metaDescription };
  }
  for (const c of COUNSELLING) {
    pages[`counselling/${c.slug}`] = { title: c.title, description: c.metaDescription };
  }
  for (const loc of LOCATIONS) {
    pages[`locations/${loc.slug}`] = { title: loc.title, description: loc.blurb };
  }
  return pages;
}
