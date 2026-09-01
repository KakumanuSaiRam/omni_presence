import { appendFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';

export async function runPublish({ post, providers, historyPath, now = new Date() }) {
  const results = [];
  for (const provider of providers) {
    if (!post.platforms.includes(provider.id)) continue;

    let row;
    if (!provider.isConfigured()) {
      row = {
        platform: provider.id,
        status: 'skipped',
        message: 'skipped (not configured)',
        id: null,
        url: null,
      };
    } else {
      try {
        const out = await provider.publish({
          title: post.title,
          body: post.body,
          imagePath: post.imagePath,
        });
        if (out.skipped) {
          row = {
            platform: provider.id,
            status: 'skipped',
            message: out.message || 'skipped',
            id: out.id ?? null,
            url: out.url ?? null,
          };
        } else if (out.ok) {
          row = {
            platform: provider.id,
            status: 'ok',
            message: out.message || 'posted',
            id: out.id ?? null,
            url: out.url ?? null,
          };
        } else {
          row = {
            platform: provider.id,
            status: 'error',
            message: out.message || 'publish failed',
            id: out.id ?? null,
            url: out.url ?? null,
          };
        }
      } catch (err) {
        row = {
          platform: provider.id,
          status: 'error',
          message: err.message || String(err),
          id: null,
          url: null,
        };
      }
    }

    results.push(row);
    if (historyPath) {
      mkdirSync(dirname(historyPath), { recursive: true });
      appendFileSync(
        historyPath,
        `${JSON.stringify({
          ts: now.toISOString(),
          title: post.title,
          ...row,
        })}\n`,
      );
    }
  }
  return results;
}
