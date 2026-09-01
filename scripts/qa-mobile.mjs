#!/usr/bin/env node
// Visit each page type at 375px and report horizontal overflow.
import { chromium } from 'playwright';

const origin = process.env.QA_ORIGIN || 'http://127.0.0.1:4321';
const paths = [
  '/',
  '/courses/eamcet-eapcet-coaching-guntur/',
  '/counselling/eapcet-web-options-counselling/',
  '/locations/tenali/',
  '/blog/mpc-vs-bipc-decision-guide/',
  '/blog/',
  '/contact/',
  '/faq/',
  '/te/',
  '/te/contact/',
  '/director/yadlapalli-naga-murali-krishna/',
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 375, height: 812 } });
const overflows = [];

for (const p of paths) {
  const res = await page.goto(`${origin}${p}`, { waitUntil: 'domcontentloaded', timeout: 30000 });
  if (!res || res.status() >= 400) {
    overflows.push(`${p}: HTTP ${res?.status()}`);
    continue;
  }
  const info = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
    bodyScroll: document.body.scrollWidth,
  }));
  const extra = Math.max(info.scrollWidth, info.bodyScroll) - info.clientWidth;
  if (extra > 1) overflows.push(`${p}: overflow ${extra}px (scrollWidth ${info.scrollWidth})`);
  else console.log(`ok 375 ${p}`);
}

await browser.close();
if (overflows.length) {
  console.error(overflows.join('\n'));
  process.exit(1);
}
console.log('No 375px overflow on page types.');
