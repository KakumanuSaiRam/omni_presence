/**
 * Screenshot helper for local visual checks.
 *
 * Reveal animations and lazy images are forced on before capture, otherwise a
 * full-page screenshot records everything below the fold as blank.
 *
 * Usage: node scripts/shoot.mjs <baseUrl> <outDir> <path> [<path> ...]
 */
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';

const [baseUrl, outDir, ...paths] = process.argv.slice(2);

if (!baseUrl || !outDir || paths.length === 0) {
  console.error('usage: node scripts/shoot.mjs <baseUrl> <outDir> <path>...');
  process.exit(1);
}

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

for (const path of paths) {
  const url = new URL(path, baseUrl).href;
  const response = await page.goto(url, { waitUntil: 'networkidle' });
  await page.evaluate(() => {
    document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-visible'));
    document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
      img.loading = 'eager';
    });
  });
  await page.waitForLoadState('networkidle');
  // Long enough for the 0.6s reveal transition plus its stagger delay.
  await page.waitForTimeout(1400);

  const name = path.replace(/^\/|\/$/g, '').replace(/\//g, '-') || 'home';
  const file = `${outDir}/${name}.jpeg`;
  await page.screenshot({ path: file, fullPage: true, type: 'jpeg', quality: 82 });
  console.log(`${response?.status()} ${url} -> ${file}`);
}

await browser.close();
