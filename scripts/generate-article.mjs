#!/usr/bin/env node
// Draft a blog post via a TrueFoundry OpenAI-compatible chat-completions endpoint.
// Usage: node scripts/generate-article.mjs "topic here"
// Writes drafts/<slug>.md for human review — never src/content/blog/.

import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadEnv } from './load-env.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
process.chdir(root);
loadEnv([join(root, '.env'), join(root, '../.env')]);

const topic = process.argv.slice(2).join(' ').trim();
if (!topic) {
  console.error('Usage: node scripts/generate-article.mjs "topic"');
  process.exit(1);
}

const apiKey = process.env.TFY_API_KEY || process.env.TRUEFOUNDRY_API_KEY;
const baseRaw = process.env.TFY_BASE_URL || process.env.TRUEFOUNDRY_API_URL;
const model = process.env.TFY_MODEL || process.env.TFY_MODEL_SONNET || 'gpt-4o-mini';

if (!apiKey || !baseRaw) {
  console.error('Set TFY_API_KEY and TFY_BASE_URL (or TRUEFOUNDRY_API_KEY / TRUEFOUNDRY_API_URL) in .env');
  process.exit(1);
}

function chatCompletionsUrl(base) {
  const b = base.replace(/\/$/, '');
  if (b.endsWith('/chat/completions')) return b;
  return `${b}/chat/completions`;
}

const SYSTEM = `You write draft blog posts for Siva Tuitions & Coachings, a real tuition/coaching institute in Pattabhipuram, Guntur, Andhra Pradesh, India.

Output ONLY a markdown file with this frontmatter, then the body — no extra commentary:

---
title: "..."
description: "..."
date: YYYY-MM-DD
---

Style rules (match existing guides in src/content/blog/):
- 500–600 words
- Practical H2 sections
- Questions as headings where natural; first sentence under a question heading is a direct answer
- End with a contact paragraph naming Siva Tuitions & Coachings, director Yadlapalli Naga Murali Krishna (M.B.A, M.Tech CSE, M.Sc, MCA), and phone +91 88797 97777

Hard content rules (non-negotiable):
1. Never fabricate facts: no invented student counts, results, years, testimonials, or reviews. If a figure is unknown, omit it or mark TODO(owner).
2. Canonical NAP must appear identically:
   Siva Tuitions & Coachings · 2nd Lane, behind Jamili Dental Hospital, Gang Colony, Pattabhipuram, Guntur, Andhra Pradesh 522006 · +91 88797 97777 · sivatuitions@gmail.com · https://sivatuitions.com
3. Director's name and credentials exactly: Yadlapalli Naga Murali Krishna, M.B.A, M.Tech (CSE), M.Sc, MCA.
4. Answer real student/parent questions in their literal phrasing.
5. Do not invent cutoff ranks, fee amounts, scholarship rupee figures, or placement statistics. Describe schemes (e.g. Jagananna Vidya Deevena) only as processes; send the reader to official portals for current numbers.
6. Do not claim physical branches outside Pattabhipuram, Guntur. Phone/WhatsApp counselling is available for other towns.
7. This is a DRAFT for a human to review. Put it in markdown only.`;

const endpoint = chatCompletionsUrl(baseRaw);
const res = await fetch(endpoint, {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${apiKey}`,
    'content-type': 'application/json',
  },
  body: JSON.stringify({
    model,
    temperature: 0.4,
    messages: [
      { role: 'system', content: SYSTEM },
      {
        role: 'user',
        content: `Write a 500–600 word draft guide on: ${topic}\nUse today's date in frontmatter if you need one: ${new Date().toISOString().slice(0, 10)}.`,
      },
    ],
  }),
});

if (!res.ok) {
  const err = await res.text();
  console.error(`TrueFoundry HTTP ${res.status}: ${err.slice(0, 800)}`);
  process.exit(1);
}

const json = await res.json();
const markdown = json.choices?.[0]?.message?.content?.trim();
if (!markdown) {
  console.error('Empty model response.');
  process.exit(1);
}

const slug = topic
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, '')
  .slice(0, 80) || 'draft';

const dir = join(root, 'drafts');
mkdirSync(dir, { recursive: true });
const out = join(dir, `${slug}.md`);
writeFileSync(out, markdown.endsWith('\n') ? markdown : `${markdown}\n`);
console.log(`Draft written: ${out}`);
console.log('Review before moving anything into src/content/blog/.');
