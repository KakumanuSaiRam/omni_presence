// Generate website illustrations with Gemini image model ("nano banana").
// Usage: node scripts/generate-image.mjs <output.png> "<scene description>"
// Reads GEMINI_API_KEY from .env (never committed). Retries on 429/503.
import { readFileSync, writeFileSync } from 'node:fs';

const env = Object.fromEntries(
  readFileSync(new URL('../.env', import.meta.url), 'utf8')
    .split('\n')
    .filter((l) => l.includes('=') && !l.trim().startsWith('#'))
    .map((l) => [l.slice(0, l.indexOf('=')).trim(), l.slice(l.indexOf('=') + 1).trim()])
);
const KEY = env.GEMINI_API_KEY;
if (!KEY) throw new Error('GEMINI_API_KEY missing from .env');

// One style guide for every image so the site looks like one system.
const STYLE = `Flat modern vector illustration for an Indian education website. Light blue background (#e9f1fb), warm orange accents (#e8821a), navy blue details (#1f2368). Cheerful Indian students (varied skin tones, friendly faces). Clean geometric shapes, professional not childish. No gradients overload, no photorealism, absolutely no text, letters, numbers or words anywhere in the image. Wide 4:3 composition.`;

const [, , outPath, scene] = process.argv;
if (!outPath || !scene) {
  console.error('usage: node scripts/generate-image.mjs <out.png> "<scene>"');
  process.exit(1);
}

const MODEL = 'gemini-2.5-flash-image';
async function generate() {
  for (let attempt = 1; attempt <= 6; attempt++) {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-goog-api-key': KEY },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `${STYLE}\n\nScene: ${scene}` }] }],
          generationConfig: { responseModalities: ['IMAGE'] },
        }),
      }
    );
    const json = await res.json();
    if (res.ok) {
      const part = json.candidates?.[0]?.content?.parts?.find((p) => p.inlineData);
      if (!part) throw new Error(`No image in response: ${JSON.stringify(json).slice(0, 400)}`);
      writeFileSync(outPath, Buffer.from(part.inlineData.data, 'base64'));
      console.log(`wrote ${outPath}`);
      return;
    }
    if (res.status === 429 || res.status === 503) {
      const wait = attempt * 15;
      console.log(`attempt ${attempt}: ${res.status}, retrying in ${wait}s`);
      await new Promise((r) => setTimeout(r, wait * 1000));
      continue;
    }
    throw new Error(`HTTP ${res.status}: ${JSON.stringify(json).slice(0, 400)}`);
  }
  throw new Error('gave up after 6 attempts');
}
await generate();
