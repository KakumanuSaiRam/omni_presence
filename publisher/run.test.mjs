import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { runPublish } from './run.mjs';

function fakeProvider(id, { configured = true, result } = {}) {
  return {
    id,
    name: id,
    isConfigured: () => configured,
    publish: async (payload) => {
      if (result) return result(payload);
      return { ok: true, id: `${id}-1`, message: `posted to ${id}` };
    },
  };
}

test('skips unconfigured providers instead of erroring', async () => {
  const dir = mkdtempSync(join(tmpdir(), 'pub-run-'));
  const results = await runPublish({
    post: { title: 'Hi', body: 'Body', imagePath: null, platforms: ['facebook', 'x'] },
    providers: [
      fakeProvider('facebook', { configured: false }),
      fakeProvider('x', { configured: true }),
    ],
    historyPath: join(dir, 'history.jsonl'),
  });
  assert.equal(results[0].status, 'skipped');
  assert.match(results[0].message, /not configured/);
  assert.equal(results[1].status, 'ok');
});

test('does not call a configured provider that is not in the platforms list', async () => {
  let called = false;
  const dir = mkdtempSync(join(tmpdir(), 'pub-run-'));
  await runPublish({
    post: { title: 'Hi', body: 'Body', imagePath: null, platforms: ['x'] },
    providers: [
      fakeProvider('facebook', {
        configured: true,
        result: async () => {
          called = true;
          return { ok: true };
        },
      }),
      fakeProvider('x'),
    ],
    historyPath: join(dir, 'history.jsonl'),
  });
  assert.equal(called, false);
});

test('appends one JSONL history row per provider result', async () => {
  const dir = mkdtempSync(join(tmpdir(), 'pub-run-'));
  const historyPath = join(dir, 'history.jsonl');
  await runPublish({
    post: { title: 'Hi', body: 'Body', imagePath: null, platforms: ['x'] },
    providers: [fakeProvider('x')],
    historyPath,
  });
  const row = JSON.parse(readFileSync(historyPath, 'utf8').trim());
  assert.equal(row.platform, 'x');
  assert.equal(row.title, 'Hi');
  assert.equal(row.status, 'ok');
});

test('GBP stub writes outbox text and never calls a network', async () => {
  const { isConfigured, publish } = await import('./providers/gbp.mjs');
  assert.equal(isConfigured(), true);
  const dir = mkdtempSync(join(tmpdir(), 'gbp-'));
  mkdirSync(join(dir, 'outbox'));
  const result = await publish(
    { title: 'Open house', body: 'This Saturday at Pattabhipuram.', imagePath: null },
    { outboxDir: join(dir, 'outbox'), now: new Date('2026-09-01T10:00:00Z') },
  );
  assert.equal(result.ok, true);
  const text = readFileSync(join(dir, 'outbox', 'gbp-2026-09-01.txt'), 'utf8');
  assert.match(text, /Open house/);
  assert.match(text, /Pattabhipuram/);
  assert.match(result.message, /paste into GBP/i);
});
