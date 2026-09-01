import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fetchRetry } from './fetch-retry.mjs';

test('retries 429 then returns the successful response', async () => {
  let attempts = 0;
  const original = globalThis.fetch;
  const sleeps = [];
  globalThis.fetch = async () => {
    attempts += 1;
    if (attempts < 3) return new Response('busy', { status: 429 });
    return new Response('ok', { status: 200 });
  };
  try {
    const res = await fetchRetry(
      'https://example.test/x',
      {},
      { maxAttempts: 6, backoffSec: 0.001, sleep: async (ms) => sleeps.push(ms) },
    );
    assert.equal(res.status, 200);
    assert.equal(await res.text(), 'ok');
    assert.equal(attempts, 3);
    assert.deepEqual(sleeps, [1, 2]);
  } finally {
    globalThis.fetch = original;
  }
});

test('retries 503 as well as 429', async () => {
  let attempts = 0;
  const original = globalThis.fetch;
  globalThis.fetch = async () => {
    attempts += 1;
    if (attempts === 1) return new Response('down', { status: 503 });
    return new Response('ok', { status: 200 });
  };
  try {
    const res = await fetchRetry(
      'https://example.test/x',
      {},
      { maxAttempts: 4, backoffSec: 0.001, sleep: async () => {} },
    );
    assert.equal(res.status, 200);
    assert.equal(attempts, 2);
  } finally {
    globalThis.fetch = original;
  }
});

test('does not retry a 400', async () => {
  let attempts = 0;
  const original = globalThis.fetch;
  globalThis.fetch = async () => {
    attempts += 1;
    return new Response('bad', { status: 400 });
  };
  try {
    const res = await fetchRetry('https://example.test/x', {}, { sleep: async () => {} });
    assert.equal(res.status, 400);
    assert.equal(attempts, 1);
  } finally {
    globalThis.fetch = original;
  }
});

test('throws after exhausting retries on 429', async () => {
  const original = globalThis.fetch;
  globalThis.fetch = async () => new Response('busy', { status: 429 });
  try {
    await assert.rejects(
      () =>
        fetchRetry(
          'https://example.test/x',
          {},
          { maxAttempts: 3, backoffSec: 0.001, sleep: async () => {} },
        ),
      /gave up after 3 attempts/,
    );
  } finally {
    globalThis.fetch = original;
  }
});
