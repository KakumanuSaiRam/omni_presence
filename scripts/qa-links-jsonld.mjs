#!/usr/bin/env node
// T8 helpers: parse JSON-LD in dist/, resolve internal links, report missing files.
import { readFileSync, existsSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readdirSync } from 'node:fs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, acc);
    else acc.push(full);
  }
  return acc;
}

const htmlFiles = walk(dist).filter((f) => f.endsWith('.html'));
const errors = [];
let jsonLdBlocks = 0;

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const rel = file.slice(dist.length);
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    jsonLdBlocks += 1;
    try {
      const data = JSON.parse(m[1]);
      const nodes = Array.isArray(data) ? data : [data];
      for (const node of nodes) {
        if (!node['@context'] || !node['@type']) {
          errors.push(`${rel}: JSON-LD missing @context or @type`);
        }
      }
    } catch (err) {
      errors.push(`${rel}: invalid JSON-LD (${err.message})`);
    }
  }

  for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) {
    let href = m[1];
    if (href.startsWith('//')) continue;
    const clean = href.split('#')[0];
    if (!clean || clean === '/') {
      if (!existsSync(join(dist, 'index.html'))) errors.push(`${rel}: broken ${href}`);
      continue;
    }
    const candidates = [
      join(dist, clean),
      join(dist, clean, 'index.html'),
      join(dist, `${clean.replace(/\/$/, '')}.html`),
      join(dist, `${clean.replace(/\/$/, '')}.png`),
      join(dist, `${clean.replace(/\/$/, '')}.xml`),
      join(dist, `${clean.replace(/\/$/, '')}.svg`),
      join(dist, `${clean.replace(/\/$/, '')}.txt`),
    ];
    if (!candidates.some((c) => existsSync(c))) {
      errors.push(`${rel}: broken internal link ${href}`);
    }
  }
}

console.log(`HTML files: ${htmlFiles.length}`);
console.log(`JSON-LD blocks parsed: ${jsonLdBlocks}`);
if (errors.length) {
  console.error(`Problems (${errors.length}):`);
  for (const e of errors.slice(0, 80)) console.error(' -', e);
  if (errors.length > 80) console.error(` ... and ${errors.length - 80} more`);
  process.exit(1);
}
console.log('JSON-LD parse: ok. Internal links: ok.');
