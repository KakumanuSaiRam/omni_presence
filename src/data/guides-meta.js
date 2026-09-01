/** Topic groups for the Guides index — one primary section per article. */
export const GUIDE_TOPICS = [
  {
    id: 'after-10th',
    label: 'After 10th — which path?',
    hint: 'Intermediate, POLYCET, ITI and group choice after SSC',
  },
  {
    id: 'intermediate',
    label: 'Intermediate years',
    hint: 'College choice, boards, hostel and exam stress in Inter',
  },
  {
    id: 'eapcet-prep',
    label: 'EAPCET & JEE preparation',
    hint: 'Study plans, normalization, and choosing coaching',
  },
  {
    id: 'counselling',
    label: 'Counselling & web options',
    hint: 'Rank bands, documents, branch choice and option filling',
  },
  {
    id: 'neet-pharmacy',
    label: 'NEET & pharmacy',
    hint: 'Medical prep, quotas, B.Pharmacy and Pharm.D',
  },
  {
    id: 'polytechnic',
    label: 'POLYCET & polytechnic',
    hint: 'Diploma admissions, ECET lateral entry and college choice',
  },
  {
    id: 'graduate',
    label: 'After graduation',
    hint: 'ICET, ECET, PG-CET and career forks',
  },
  {
    id: 'parents',
    label: 'For parents',
    hint: 'Choosing centres, scholarships and what to ask on a visit',
  },
];

/**
 * Primary topic + searchable tags per guide slug.
 * Tags are lowercase for matching; displayed with sensible casing in the UI.
 */
export const GUIDE_META = {
  'after-ssc-options-ap': {
    topic: 'after-10th',
    tags: ['after 10th', 'SSC', 'intermediate', 'POLYCET', 'ITI', 'MPC', 'BiPC', 'parents'],
  },
  'mpc-vs-bipc-decision-guide': {
    topic: 'after-10th',
    tags: ['MPC', 'BiPC', 'after 10th', 'intermediate', 'EAPCET', 'NEET', 'parents'],
  },
  'polycet-vs-iti-after-tenth': {
    topic: 'after-10th',
    tags: ['POLYCET', 'ITI', 'after 10th', 'polytechnic', 'ECET', 'parents'],
  },
  'polycet-after-tenth-guide': {
    topic: 'polytechnic',
    tags: ['POLYCET', 'polytechnic', 'after 10th', 'diploma', 'ECET', 'web options'],
  },
  'government-vs-private-polytechnics-ap': {
    topic: 'polytechnic',
    tags: ['POLYCET', 'polytechnic', 'government', 'web options', 'parents'],
  },
  'ecet-lateral-entry-complete-guide': {
    topic: 'polytechnic',
    tags: ['ECET', 'lateral entry', 'polytechnic', 'diploma', 'B.Tech', 'counselling'],
  },
  'choose-intermediate-college-guntur': {
    topic: 'intermediate',
    tags: ['intermediate', 'Guntur', 'college choice', 'MPC', 'BiPC', 'parents'],
  },
  'hostel-vs-day-scholar-intermediate': {
    topic: 'intermediate',
    tags: ['intermediate', 'hostel', 'Guntur', 'parents', 'EAPCET'],
  },
  'cbse-vs-state-board-entrance-preparation': {
    topic: 'intermediate',
    tags: ['CBSE', 'state board', 'intermediate', 'EAPCET', 'NEET', 'parents'],
  },
  'managing-exam-stress-intermediate': {
    topic: 'intermediate',
    tags: ['intermediate', 'exam stress', 'NEET', 'EAPCET', 'IPE', 'parents'],
  },
  'eapcet-last-30-days-study-plan': {
    topic: 'eapcet-prep',
    tags: ['EAPCET', 'study plan', 'intermediate', 'MPC', 'BiPC', 'Guntur'],
  },
  'eapcet-normalization-marking-explained': {
    topic: 'eapcet-prep',
    tags: ['EAPCET', 'normalization', 'rank', 'marks', 'AP'],
  },
  'eapcet-vs-eamcet-explained': {
    topic: 'eapcet-prep',
    tags: ['EAPCET', 'EAMCET', 'TS EAMCET', 'AP', 'Telangana'],
  },
  'jee-mains-vs-eapcet-guntur': {
    topic: 'eapcet-prep',
    tags: ['JEE Main', 'EAPCET', 'JoSAA', 'MPC', 'Guntur'],
  },
  'best-eamcet-coaching-guntur-how-to-choose': {
    topic: 'eapcet-prep',
    tags: ['EAPCET', 'coaching', 'Guntur', 'parents'],
  },
  'how-to-fill-ap-eapcet-web-options': {
    topic: 'counselling',
    tags: ['EAPCET', 'web options', 'counselling', 'rank', 'AP'],
  },
  'web-options-mistakes-to-avoid': {
    topic: 'counselling',
    tags: ['web options', 'EAPCET', 'POLYCET', 'counselling', 'mistakes'],
  },
  'ts-eamcet-web-options-guide': {
    topic: 'counselling',
    tags: ['TS EAMCET', 'EAMCET', 'web options', 'Telangana', 'Hyderabad'],
  },
  'eapcet-counselling-documents-checklist': {
    topic: 'counselling',
    tags: ['EAPCET', 'counselling', 'documents', 'certificates', 'verification'],
  },
  'eapcet-rank-bands-college-prediction': {
    topic: 'counselling',
    tags: ['EAPCET', 'rank', 'college prediction', 'cutoff', 'counselling'],
  },
  'engineering-branch-selection-guide-ap': {
    topic: 'counselling',
    tags: ['EAPCET', 'engineering branch', 'CSE', 'web options', 'counselling'],
  },
  'josaa-counselling-rounds-ap-students': {
    topic: 'counselling',
    tags: ['JoSAA', 'JEE Main', 'counselling', 'rounds', 'engineering'],
  },
  'neet-preparation-plan-intermediate-bipc': {
    topic: 'neet-pharmacy',
    tags: ['NEET', 'BiPC', 'intermediate', 'study plan', 'NCERT'],
  },
  'neet-state-quota-vs-all-india-quota-ap': {
    topic: 'neet-pharmacy',
    tags: ['NEET', 'state quota', 'AIQ', 'counselling', 'medical', 'parents'],
  },
  'b-pharmacy-vs-pharmd-ap': {
    topic: 'neet-pharmacy',
    tags: ['B.Pharmacy', 'Pharm.D', 'BiPC', 'EAPCET', 'pharmacy'],
  },
  'pharmacy-admissions-ap-eapcet-bipc': {
    topic: 'neet-pharmacy',
    tags: ['pharmacy', 'BiPC', 'EAPCET', 'B.Pharmacy', 'Pharm.D', 'counselling'],
  },
  'ap-icet-mba-mca-admissions-guide': {
    topic: 'graduate',
    tags: ['ICET', 'MBA', 'MCA', 'web options', 'counselling', 'graduates'],
  },
  'career-options-after-bsc-pgcet': {
    topic: 'graduate',
    tags: ['B.Sc', 'PG-CET', 'ICET', 'MBA', 'MCA', 'graduates'],
  },
  'best-tuitions-guntur-parents-guide': {
    topic: 'parents',
    tags: ['tuitions', 'school', 'classes 6-10', 'Guntur', 'parents'],
  },
  'parents-questions-coaching-centre-visit': {
    topic: 'parents',
    tags: ['coaching', 'parents', 'Guntur', 'visit checklist'],
  },
  'ap-scholarships-fee-reimbursement-vidya-deevena': {
    topic: 'parents',
    tags: ['scholarships', 'fee reimbursement', 'Vidya Deevena', 'AP', 'parents'],
  },
};

/** Tags shown as quick-filter pills; search still matches every tag on each guide. */
export const FEATURED_GUIDE_TAGS = [
  'EAPCET',
  'NEET',
  'POLYCET',
  'web options',
  'counselling',
  'after 10th',
  'intermediate',
  'parents',
  'ECET',
  'ICET',
  'scholarships',
  'Guntur',
];

/** All unique tags across guides, sorted for matching. */
export function allGuideTags() {
  const set = new Set();
  for (const meta of Object.values(GUIDE_META)) {
    for (const tag of meta.tags) set.add(tag);
  }
  return [...set].sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
}

export function topicById(id) {
  return GUIDE_TOPICS.find((t) => t.id === id) ?? { id: 'other', label: 'More guides', hint: '' };
}
