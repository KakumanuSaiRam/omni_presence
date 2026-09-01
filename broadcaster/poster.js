// Playwright-driven broadcaster. Uses a persistent browser profile so each
// platform is logged in once by a human, then reused for every post.
// Headed by design: you can watch every post go out and intervene if a
// platform changes its UI. Selectors are best-effort; a failed platform is
// reported, never silently skipped.
import { chromium } from 'playwright';
import { appendFileSync, mkdirSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PROFILE_DIR = path.join(os.homedir(), '.sivatuitions-broadcaster');
const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)));
const HISTORY_DIR = path.join(ROOT, 'posts');
const HISTORY_FILE = path.join(HISTORY_DIR, 'history.jsonl');

async function attachImage(scope, imagePath) {
  if (!imagePath) return;
  const input = scope.locator('input[type="file"]').first();
  await input.setInputFiles(imagePath);
  const page = 'waitForTimeout' in scope ? scope : scope.page();
  await page.waitForTimeout(2000);
}

export const PLATFORMS = {
  facebook: {
    label: 'Facebook Page',
    loginUrl: 'https://www.facebook.com/',
    post: async (page, text, imagePath) => {
      await page.goto('https://www.facebook.com/', { waitUntil: 'domcontentloaded' });
      await page.getByRole('button', { name: /what's on your mind/i }).first().click();
      const dialog = page.getByRole('dialog');
      await dialog.getByRole('textbox').first().fill(text);
      if (imagePath) {
        await attachImage(dialog, imagePath);
      }
      await dialog.getByRole('button', { name: /^post$/i }).click();
      await page.waitForTimeout(4000);
    },
  },
  x: {
    label: 'X (Twitter)',
    loginUrl: 'https://x.com/login',
    post: async (page, text, imagePath) => {
      await page.goto('https://x.com/compose/post', { waitUntil: 'domcontentloaded' });
      if (imagePath) {
        await attachImage(page, imagePath);
      }
      const box = page.getByRole('textbox', { name: /post text/i });
      await box.fill(text.slice(0, 275));
      await page.getByTestId('tweetButton').click();
      await page.waitForTimeout(3000);
    },
  },
  linkedin: {
    label: 'LinkedIn',
    loginUrl: 'https://www.linkedin.com/login',
    post: async (page, text) => {
      await page.goto('https://www.linkedin.com/feed/', { waitUntil: 'domcontentloaded' });
      await page.getByRole('button', { name: /start a post/i }).click();
      const editor = page.locator('.ql-editor[contenteditable="true"]');
      await editor.fill(text);
      await page.getByRole('button', { name: /^post$/i }).click();
      await page.waitForTimeout(4000);
    },
  },
  reddit: {
    label: 'Reddit (u/ profile post)',
    loginUrl: 'https://www.reddit.com/login',
    post: async (page, text) => {
      await page.goto('https://www.reddit.com/submit?type=TEXT', { waitUntil: 'domcontentloaded' });
      const [title, ...rest] = text.split('\n');
      await page.getByLabel(/title/i).fill(title.slice(0, 290));
      const body = page.locator('[contenteditable="true"]').last();
      await body.fill(rest.join('\n') || title);
      await page.getByRole('button', { name: /^post$/i }).click();
      await page.waitForTimeout(4000);
    },
  },
};

function logHistory(entry) {
  mkdirSync(HISTORY_DIR, { recursive: true });
  appendFileSync(HISTORY_FILE, `${JSON.stringify(entry)}\n`);
}

export async function openForLogin() {
  const ctx = await chromium.launchPersistentContext(PROFILE_DIR, { headless: false });
  for (const { label, loginUrl } of Object.values(PLATFORMS)) {
    const page = await ctx.newPage();
    await page.goto(loginUrl).catch(() => {});
    console.log(`Opened ${label} — log in in that tab.`);
  }
  console.log('\nLog in to each tab, then close the browser window. Sessions are saved.');
  await new Promise((resolve) => ctx.on('close', resolve));
}

export async function broadcast(text, selected, { dryRun = false, imagePath = null } = {}) {
  const results = {};
  if (dryRun) {
    for (const key of selected) {
      if (!PLATFORMS[key]) continue;
      results[key] = imagePath
        ? `dry-run (with image ${path.basename(imagePath)})`
        : 'dry-run';
    }
    logHistory({
      ts: new Date().toISOString(),
      dryRun: true,
      platforms: selected,
      text,
      image: imagePath ? path.basename(imagePath) : null,
      results,
    });
    return results;
  }

  const ctx = await chromium.launchPersistentContext(PROFILE_DIR, { headless: false });
  for (const key of selected) {
    const platform = PLATFORMS[key];
    if (!platform) continue;
    const page = await ctx.newPage();
    try {
      const wantsImage = (key === 'facebook' || key === 'x') && imagePath;
      await platform.post(page, text, wantsImage ? imagePath : null);
      results[key] = wantsImage ? 'posted (with image)' : 'posted';
    } catch (err) {
      results[key] = `FAILED: ${err.message.split('\n')[0]}`;
    } finally {
      await page.close().catch(() => {});
    }
  }
  await ctx.close();
  logHistory({
    ts: new Date().toISOString(),
    dryRun: false,
    platforms: selected,
    text,
    image: imagePath ? path.basename(imagePath) : null,
    results,
  });
  return results;
}
