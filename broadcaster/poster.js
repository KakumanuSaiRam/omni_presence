// Playwright-driven broadcaster. Uses a persistent browser profile so each
// platform is logged in once by a human, then reused for every post.
// Headed by design: you can watch every post go out and intervene if a
// platform changes its UI. Selectors are best-effort; a failed platform is
// reported, never silently skipped.
import { chromium } from 'playwright';
import os from 'node:os';
import path from 'node:path';

const PROFILE_DIR = path.join(os.homedir(), '.sivatuitions-broadcaster');

export const PLATFORMS = {
  facebook: {
    label: 'Facebook Page',
    loginUrl: 'https://www.facebook.com/',
    post: async (page, text) => {
      await page.goto('https://www.facebook.com/', { waitUntil: 'domcontentloaded' });
      await page.getByRole('button', { name: /what's on your mind/i }).first().click();
      const dialog = page.getByRole('dialog');
      await dialog.getByRole('textbox').first().fill(text);
      await dialog.getByRole('button', { name: /^post$/i }).click();
      await page.waitForTimeout(4000);
    },
  },
  x: {
    label: 'X (Twitter)',
    loginUrl: 'https://x.com/login',
    post: async (page, text) => {
      await page.goto('https://x.com/compose/post', { waitUntil: 'domcontentloaded' });
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

export async function broadcast(text, selected) {
  const ctx = await chromium.launchPersistentContext(PROFILE_DIR, { headless: false });
  const results = {};
  for (const key of selected) {
    const platform = PLATFORMS[key];
    if (!platform) continue;
    const page = await ctx.newPage();
    try {
      await platform.post(page, text);
      results[key] = 'posted';
    } catch (err) {
      results[key] = `FAILED: ${err.message.split('\n')[0]}`;
    } finally {
      await page.close().catch(() => {});
    }
  }
  await ctx.close();
  return results;
}
