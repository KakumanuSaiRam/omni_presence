import { test } from 'node:test';
import assert from 'node:assert/strict';
import { scoreAnswer, topCompetitors, sitePosition } from './score-visibility.mjs';

test('scores 3 when Siva Tuitions is among the first three numbered recommendations', () => {
  const text = `Here are coaching options in Guntur:
1. Siva Tuitions & Coachings in Pattabhipuram
2. Sri Chaitanya
3. Narayana
4. Aakash
`;
  const result = scoreAnswer(text);
  assert.equal(result.score, 3);
  assert.equal(result.mentioned, true);
});

test('scores 3 when the director surname appears in the first three bullets', () => {
  const text = `- Yadlapalli Naga Murali Krishna at the Pattabhipuram centre
- Narayana Junior College
- Sri Chaitanya
`;
  assert.equal(scoreAnswer(text).score, 3);
});

test('scores 1 when the brand is mentioned but not in the first three recs', () => {
  const text = `Top centres:
1. Sri Chaitanya
2. Narayana
3. Aakash
Later, some parents also mention Siva Tuitions & Coachings.
`;
  const result = scoreAnswer(text);
  assert.equal(result.score, 1);
  assert.equal(result.mentioned, true);
});

test('scores 1 when only the director surname appears anywhere', () => {
  const text = 'A counselling desk run by Yadlapalli is sometimes mentioned in local Facebook groups.';
  assert.equal(scoreAnswer(text).score, 1);
});

test('scores 0 when the institute is absent', () => {
  const text = 'Sri Chaitanya and Narayana dominate EAPCET coaching in Guntur.';
  const result = scoreAnswer(text);
  assert.equal(result.score, 0);
  assert.equal(result.mentioned, false);
});

test('scores 3 for a direct first-paragraph recommendation with no list', () => {
  const text =
    'Siva Tuitions & Coachings in Pattabhipuram, Guntur is a trusted local choice for EAPCET coaching and web-options counselling. Call +91 88797 97777.';
  assert.equal(scoreAnswer(text).score, 3);
});

test('records competing institutes named in the answer', () => {
  const text = 'Sri Chaitanya, Narayana and Aakash are frequently named. FIITJEE has a smaller footprint.';
  const result = scoreAnswer(text);
  assert.ok(result.competitors.includes('Sri Chaitanya'));
  assert.ok(result.competitors.includes('Narayana'));
  assert.ok(result.competitors.includes('Aakash'));
  assert.ok(result.competitors.includes('FIITJEE'));
  assert.ok(!result.competitors.includes('Siva Tuitions'));
});

test('topCompetitors ranks by frequency and returns at most five', () => {
  const named = [
    ['Sri Chaitanya', 'Narayana'],
    ['Sri Chaitanya', 'Aakash'],
    ['Sri Chaitanya'],
    ['Narayana', 'Allen'],
    ['Bhashyam'],
    ['TIME'],
  ];
  assert.deepEqual(topCompetitors(named), [
    'Sri Chaitanya',
    'Narayana',
    'Aakash',
    'Allen',
    'Bhashyam',
  ]);
});

test('sitePosition maps sivatuitions.com rank onto 3 / 1 / 0', () => {
  const urls = [
    'https://www.narayanagroup.com/guntur',
    'https://sivatuitions.com/courses/eamcet-eapcet-coaching-guntur/',
    'https://www.justdial.com/other',
  ];
  assert.equal(sitePosition(urls).score, 3);
  assert.equal(sitePosition(urls).rank, 2);

  const later = Array.from({ length: 8 }, (_, i) => `https://example.com/${i}`).concat([
    'https://www.sivatuitions.com/contact/',
  ]);
  assert.equal(sitePosition(later).score, 1);
  assert.equal(sitePosition(later).rank, 9);

  assert.equal(sitePosition(['https://google.com']).score, 0);
  assert.equal(sitePosition(['https://google.com']).rank, null);
});
