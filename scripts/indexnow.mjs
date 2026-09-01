#!/usr/bin/env node
// IndexNow: write the public key file and ping Bing/Yandex/etc. with every sitemap URL.
// Usage: npm run postdeploy:ping
// Requires INDEXNOW_KEY in .env (a UUID or similar host-verification key). Never commit the key.

import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadEnv } from './load-env.mjs';
import { SITE } from '../src/data/site.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
process.chdir(root);
loadEnv([join(root, '.env'), join(root, '../.env')]);

const key = process.env.INDEXNOW_KEY?.trim();
if (!key) {
  console.error('INDEXNOW_KEY is missing. Add it to .env (a UUID is typical).');
  process.exit(1);
}
if (!/^[a-zA-Z0-9-]{8,128}$/.test(key)) {
  console.error('INDEXNOW_KEY looks invalid. Use 8–128 letters, numbers or hyphens.');
  process.exit(1);
}

const host =
  process.env.INDEXNOW_HOST?.trim() || new URL(SITE.url).hostname;
const keyLocation = `https://${host}/${key}.txt`;

writeFileSync(join(root, 'public', `${key}.txt`), `${key}\n`);
if (existsSync(join(root, 'dist'))) {
  writeFileSync(join(root, 'dist', `${key}.txt`), `${key}\n`);
}

function locTags(xml) {
  return [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/gi)].map((m) => m[1].trim());
}

function sitemapUrls() {
  const dist = join(root, 'dist');
  const urls = new Set();
  if (!existsSync(dist)) return urls;
  for (const name of readdirSync(dist)) {
    if (!/^sitemap.*\.xml$/i.test(name)) continue;
    const xml = readFileSync(join(dist, name), 'utf8');
    for (const loc of locTags(xml)) {
      if (loc.endsWith('.xml')) continue;
      urls.add(loc);
    }
  }
  return urls;
}

const urlList = [...sitemapUrls()];
if (urlList.length === 0) {
  console.error('No sitemap URLs found. Run `npm run build` first.');
  process.exit(1);
}

const body = JSON.stringify({ host, key, keyLocation, urlList });
const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body,
});

const text = await res.text();
if (!res.ok) {
  console.error(`IndexNow HTTP ${res.status}: ${text.slice(0, 500)}`);
  process.exit(1);
}
console.log(`IndexNow: submitted ${urlList.length} URLs (HTTP ${res.status}).`);
console.log(`Key file: public/${key}.txt → ${keyLocation}`);
