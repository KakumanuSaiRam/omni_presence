#!/usr/bin/env node
// Publish one markdown post to every configured platform API.
// Usage: node publisher/publish.mjs <post.md>
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadEnv } from '../scripts/load-env.mjs';
import { parsePost } from './parse-post.mjs';
import { runPublish } from './run.mjs';
import * as facebook from './providers/facebook.mjs';
import * as instagram from './providers/instagram.mjs';
import * as x from './providers/x.mjs';
import * as linkedin from './providers/linkedin.mjs';
import * as reddit from './providers/reddit.mjs';
import * as gbp from './providers/gbp.mjs';
import * as telegram from './providers/telegram.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
process.chdir(root);
loadEnv([join(root, '.env'), join(root, '../.env')]);

const file = process.argv[2];
if (!file) {
  console.error('Usage: node publisher/publish.mjs <post.md>');
  process.exit(1);
}

const PROVIDERS = [facebook, instagram, x, linkedin, reddit, gbp, telegram];
const post = parsePost(resolve(file));
const results = await runPublish({
  post,
  providers: PROVIDERS,
  historyPath: join(root, 'publisher', 'history.jsonl'),
});

const width = Math.max(...PROVIDERS.map((p) => p.id.length));
for (const row of results) {
  const label = row.platform.padEnd(width);
  const extra = row.id ? `  id=${row.id}` : '';
  const url = row.url ? `  ${row.url}` : '';
  console.log(`${label}  ${row.status.padEnd(8)}  ${row.message}${extra}${url}`);
}

if (results.some((r) => r.status === 'error')) process.exit(1);
