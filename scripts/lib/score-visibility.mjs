const BRAND_RE = /siva\s*tuitions|sivatuitions\.com/i;
const DIRECTOR_RE = /yadlapalli|naga\s+murali\s+krishna/i;

/** Real Guntur / AP coaching brands an answer might name. Used only to tally mentions. */
export const KNOWN_COMPETITORS = [
  'Sri Chaitanya',
  'Narayana',
  'Aakash',
  'Allen',
  'FIITJEE',
  'Resonance',
  'Bhashyam',
  'Sri Gayatri',
  'NRI Academy',
  'Keshava Reddy',
  'Masterminds',
  'TIME',
  'Career Launcher',
  "Byju's",
  'Byju',
  'Unacademy',
  'Vedantu',
  'Physics Wallah',
  'Infinity Learn',
  'Vignan',
];

function mentionedBrand(text) {
  return BRAND_RE.test(text);
}

function mentionedInstitute(text) {
  return mentionedBrand(text) || DIRECTOR_RE.test(text);
}

function extractListItems(text) {
  const items = [];
  for (const line of text.split(/\r?\n/)) {
    const m = line.match(/^\s*(?:\d+[\.)]|[-*•])\s+(.+)$/);
    if (m) items.push(m[1]);
  }
  return items;
}

export function namedCompetitors(text) {
  const found = [];
  for (const name of KNOWN_COMPETITORS) {
    const re = new RegExp(name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
    if (re.test(text)) found.push(name === 'Byju' ? "Byju's" : name);
  }
  return [...new Set(found)].filter((n) => !/siva/i.test(n));
}

/**
 * 3 = named in the first three recommendations
 * 1 = mentioned anywhere (brand or director surname)
 * 0 = absent
 */
export function scoreAnswer(text) {
  const raw = text || '';
  const mentioned = mentionedInstitute(raw);
  const competitors = namedCompetitors(raw);
  if (!mentioned) return { score: 0, mentioned: false, competitors };

  const items = extractListItems(raw);
  if (items.length) {
    const firstThree = items.slice(0, 3).join('\n');
    if (mentionedInstitute(firstThree)) {
      return { score: 3, mentioned: true, competitors };
    }
    return { score: 1, mentioned: true, competitors };
  }

  // No structured list: a first-paragraph brand mention counts as a recommendation.
  // A director-surname-only mention is "mentioned anywhere" (1), not a top-3 rec.
  const lead = raw.slice(0, 500);
  if (mentionedBrand(lead)) return { score: 3, mentioned: true, competitors };
  return { score: 1, mentioned: true, competitors };
}

export function topCompetitors(perAnswerNames, limit = 5) {
  const counts = new Map();
  for (const names of perAnswerNames) {
    for (const name of names) {
      counts.set(name, (counts.get(name) || 0) + 1);
    }
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, limit)
    .map(([name]) => name);
}

export function competitorCounts(perAnswerNames) {
  const counts = {};
  for (const names of perAnswerNames) {
    for (const name of names) counts[name] = (counts[name] || 0) + 1;
  }
  return Object.fromEntries(
    Object.entries(counts).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])),
  );
}

function hostOf(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return '';
  }
}

/** Brave/SERP helper: sivatuitions.com in top 3 → 3, elsewhere on page → 1, else 0. */
export function sitePosition(urls, host = 'sivatuitions.com') {
  const rank = urls.findIndex((u) => hostOf(u) === host) + 1;
  if (!rank) return { score: 0, rank: null };
  if (rank <= 3) return { score: 3, rank };
  return { score: 1, rank };
}

export function mean(nums) {
  if (!nums.length) return null;
  return nums.reduce((a, b) => a + b, 0) / nums.length;
}
