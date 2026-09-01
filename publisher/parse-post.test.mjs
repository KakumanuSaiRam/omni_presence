import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { parsePost } from './parse-post.mjs';

function writePost(text, extras = {}) {
  const dir = mkdtempSync(join(tmpdir(), 'pub-post-'));
  const file = join(dir, 'post.md');
  writeFileSync(file, text);
  if (extras.image) writeFileSync(join(dir, extras.image), '');
  return file;
}

test('parses title, optional image, platforms list, and body', () => {
  const file = writePost(`---
title: EAPCET web options week
image: ./flyer.jpg
platforms:
  - facebook
  - x
---
Call +91 88797 97777 for counselling.

Pattabhipuram centre is open.
`, { image: 'flyer.jpg' });
  const post = parsePost(file);
  assert.equal(post.title, 'EAPCET web options week');
  assert.ok(post.imagePath.endsWith('flyer.jpg'));
  assert.deepEqual(post.platforms, ['facebook', 'x']);
  assert.match(post.body, /Call \+91 88797 97777/);
  assert.match(post.body, /Pattabhipuram/);
});

test('accepts inline platforms array and quoted title', () => {
  const file = writePost(`---
title: "Crash course update"
platforms: [linkedin, telegram, ig]
---
Body only.
`);
  const post = parsePost(file);
  assert.equal(post.title, 'Crash course update');
  assert.equal(post.imagePath, null);
  assert.deepEqual(post.platforms, ['linkedin', 'telegram', 'instagram']);
  assert.equal(post.body, 'Body only.');
});

test('defaults platforms to all when omitted', () => {
  const file = writePost(`---
title: Hello
---
Hi.
`);
  const post = parsePost(file);
  assert.deepEqual(post.platforms, [
    'facebook',
    'instagram',
    'x',
    'linkedin',
    'reddit',
    'gbp',
    'telegram',
  ]);
});

test('rejects a post with no title', () => {
  const file = writePost(`---
platforms: [x]
---
oops
`);
  assert.throws(() => parsePost(file), /title/);
});
