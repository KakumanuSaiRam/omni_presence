/** fetch() with generate-image.mjs-style retry on 429/503. */

export async function fetchRetry(url, options = {}, opts = {}) {
  const maxAttempts = opts.maxAttempts ?? 6;
  const backoffSec = opts.backoffSec ?? 2;
  const sleep = opts.sleep ?? ((ms) => new Promise((r) => setTimeout(r, ms)));
  const log = opts.log ?? console.log;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    const res = await fetch(url, options);
    if (res.status !== 429 && res.status !== 503) return res;
    const wait = attempt * backoffSec;
    log(`attempt ${attempt}: ${res.status}, retrying in ${wait}s`);
    await sleep(wait * 1000);
  }
  throw new Error(`gave up after ${maxAttempts} attempts`);
}
