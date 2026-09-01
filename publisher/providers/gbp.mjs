import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { composeText } from '../text.mjs';

const here = dirname(fileURLToPath(import.meta.url));

export const id = 'gbp';
export const name = 'Google Business Profile';

export function isConfigured() {
  return true;
}

function kolkataDate(now) {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata' }).format(now);
}

export async function publish({ title, body, imagePath }, opts = {}) {
  const outboxDir = opts.outboxDir ?? join(here, '..', 'outbox');
  const now = opts.now ?? new Date();
  mkdirSync(outboxDir, { recursive: true });
  const date = kolkataDate(now);
  const file = join(outboxDir, `gbp-${date}.txt`);
  const text = composeText(title, body);
  const imageLine = imagePath ? `\nImage to attach: ${imagePath}\n` : '';
  const contents = `Google Business Profile post — paste into GBP (Posts → Add update)
Date: ${date}

${text}
${imageLine}
How to paste:
1. Open https://business.google.com for Siva Tuitions & Coachings
2. Posts → Add update (or the Google Maps listing → Posts)
3. Paste the text above. Attach the image if listed.
4. Publish. GBP API access requires a Google Cloud project + API approval,
   which this stub does not attempt.
`;
  writeFileSync(file, contents);
  return {
    ok: true,
    id: `gbp-${date}`,
    url: file,
    message: `wrote ${file} — paste into GBP (API not available without Google approval)`,
  };
}
