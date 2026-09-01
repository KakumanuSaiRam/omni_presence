#!/usr/bin/env node
// Automate docs/VALIDATION.md: query AI engines + Brave SERP, score, log.
// Usage: node scripts/measure-visibility.mjs
import { mkdirSync, readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadEnv } from './load-env.mjs';
import { competitorCounts, mean } from './lib/score-visibility.mjs';
import { ENGINES, isEngineConfigured } from './lib/visibility-engines.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
process.chdir(root);
loadEnv([join(root, '.env'), join(root, '../.env')]);

const GAP_MS = 2000;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function todayKolkata(d = new Date()) {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata' }).format(d);
}

function loadQueries() {
  const raw = JSON.parse(readFileSync(join(root, 'scripts', 'visibility-queries.json'), 'utf8'));
  const items = [];
  for (const group of ['brand', 'local', 'state']) {
    for (const query of raw[group] || []) items.push({ group, query });
  }
  return items;
}

function previousRun(dir, today) {
  if (!existsSync(dir)) return null;
  const files = readdirSync(dir)
    .filter((f) => /^\d{4}-\d{2}-\d{2}\.json$/.test(f))
    .sort();
  const earlier = files.filter((f) => f.slice(0, 10) < today);
  if (!earlier.length) return null;
  const file = earlier.at(-1);
  return { date: file.slice(0, 10), data: JSON.parse(readFileSync(join(dir, file), 'utf8')) };
}

function fmt(n) {
  if (n == null || Number.isNaN(n)) return '—';
  return n.toFixed(2);
}

function deltaStr(now, prev) {
  if (now == null || prev == null) return '';
  const d = now - prev;
  const sign = d > 0 ? '+' : '';
  return ` Δ ${sign}${d.toFixed(2)}`;
}

function appendLog({ today, engines, byGroup, competitors, prev }) {
  const logPath = join(root, 'docs', 'visibility-log.md');
  let log = readFileSync(logPath, 'utf8');
  const topNamed = Object.entries(competitors)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([n, c]) => `${n} (${c})`)
    .join(', ');

  const rows = [];
  for (const engine of ENGINES) {
    const block = engines[engine.id];
    if (!block?.configured) {
      rows.push(
        `| ${today} | ${engine.name} | (automated, not configured) | — | skipped (not configured) |`,
      );
      continue;
    }
    const groupBits = ['brand', 'local', 'state']
      .map((g) => `${g} ${fmt(byGroup[g]?.[engine.id])}`)
      .join(' · ');
    const prevAvg = prev?.data?.engines?.[engine.id]?.average;
    const notes = [
      groupBits,
      prev ? `vs ${prev.date}${deltaStr(block.average, prevAvg)}` : 'first automated run',
      topNamed ? `competitors: ${topNamed}` : '',
    ]
      .filter(Boolean)
      .join('; ');
    rows.push(
      `| ${today} | ${engine.name} | ${block.queryCount} queries (summary) | ${fmt(block.average)} avg | ${notes} |`,
    );
  }

  if (!log.endsWith('\n')) log += '\n';
  writeFileSync(logPath, `${log}${rows.join('\n')}\n`);
}

const queries = loadQueries();
const today = todayKolkata();
const runsDir = join(root, 'docs', 'visibility-runs');
mkdirSync(runsDir, { recursive: true });
const prev = previousRun(runsDir, today);

const engineOut = {};
const byGroup = { brand: {}, local: {}, state: {} };
const allCompetitorLists = [];

console.log(`Visibility run ${today} — ${queries.length} queries × ${ENGINES.length} engines\n`);

for (const engine of ENGINES) {
  if (!isEngineConfigured(engine)) {
    engineOut[engine.id] = { configured: false, average: null, queryCount: 0, queries: [] };
    console.log(`${engine.name.padEnd(14)} skipped (not configured)`);
    continue;
  }

  console.log(`${engine.name}…`);
  const rows = [];
  for (const { group, query } of queries) {
    let row;
    try {
      const result = await engine.ask(query);
      row = {
        group,
        query,
        score: result.scored.score,
        mentioned: result.scored.mentioned,
        competitors: result.scored.competitors,
        rank: result.scored.rank ?? null,
        text: result.text,
        error: null,
      };
    } catch (err) {
      row = {
        group,
        query,
        score: 0,
        mentioned: false,
        competitors: [],
        rank: null,
        text: '',
        error: err.message,
      };
      console.log(`  ! ${query}: ${err.message}`);
    }
    rows.push(row);
    allCompetitorLists.push(row.competitors);
    const mark = row.error ? 'err' : String(row.score);
    console.log(`  [${mark}] ${group.padEnd(5)} ${query}`);
    await sleep(GAP_MS);
  }

  const scores = rows.filter((r) => !r.error).map((r) => r.score);
  const average = mean(scores);
  engineOut[engine.id] = {
    configured: true,
    average,
    queryCount: rows.length,
    queries: rows,
  };
  for (const g of ['brand', 'local', 'state']) {
    byGroup[g][engine.id] = mean(rows.filter((r) => r.group === g && !r.error).map((r) => r.score));
  }
}

const competitors = competitorCounts(allCompetitorLists);
const payload = {
  date: today,
  ranAt: new Date().toISOString(),
  engines: engineOut,
  byGroup,
  competitors,
  previousRun: prev?.date ?? null,
};

const outFile = join(runsDir, `${today}.json`);
writeFileSync(outFile, `${JSON.stringify(payload, null, 2)}\n`);
appendLog({ today, engines: engineOut, byGroup, competitors, prev });

console.log(`\n=== Visibility scoreboard ${today} ===`);
console.log('Engine averages');
for (const engine of ENGINES) {
  const block = engineOut[engine.id];
  if (!block.configured) {
    console.log(`  ${engine.id.padEnd(12)} skipped (not configured)`);
    continue;
  }
  const prevAvg = prev?.data?.engines?.[engine.id]?.average;
  console.log(`  ${engine.id.padEnd(12)} ${fmt(block.average)}${deltaStr(block.average, prevAvg)}`);
}

console.log('\nBy query group');
for (const g of ['brand', 'local', 'state']) {
  const bits = ENGINES.filter((e) => engineOut[e.id].configured).map(
    (e) => `${e.id} ${fmt(byGroup[g][e.id])}`,
  );
  console.log(`  ${g.padEnd(8)} ${bits.join('  ') || '—'}`);
}

const top = Object.entries(competitors)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 5);
if (top.length) {
  console.log('\nTop competing institutes this run');
  top.forEach(([name, n], i) => console.log(`  ${i + 1}. ${name} (${n})`));
}

console.log(`\nwrote ${outFile}`);
console.log('appended summary rows to docs/visibility-log.md');
