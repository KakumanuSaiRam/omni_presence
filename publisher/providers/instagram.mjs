import { fetchRetry } from '../../scripts/lib/fetch-retry.mjs';
import { composeText, hasEnv, isHttpUrl } from '../text.mjs';

export const id = 'instagram';
export const name = 'Instagram';

const GRAPH = 'https://graph.facebook.com/v21.0';

export function isConfigured() {
  return hasEnv('FB_PAGE_ID', 'FB_PAGE_ACCESS_TOKEN', 'IG_USER_ID');
}

export async function publish({ title, body, imagePath }) {
  if (!imagePath) {
    return {
      ok: false,
      skipped: true,
      message: 'Instagram requires an image — skipped',
    };
  }
  if (!isHttpUrl(imagePath)) {
    return {
      ok: false,
      skipped: true,
      message:
        'Instagram Graph API needs a publicly reachable https image URL (not a local file). Host it and set image: https://... — skipped',
    };
  }

  const igUser = process.env.IG_USER_ID;
  const token = process.env.FB_PAGE_ACCESS_TOKEN;
  const caption = composeText(title, body);

  const createUrl = new URL(`${GRAPH}/${igUser}/media`);
  createUrl.searchParams.set('image_url', imagePath);
  createUrl.searchParams.set('caption', caption);
  createUrl.searchParams.set('access_token', token);
  const createdRes = await fetchRetry(createUrl, { method: 'POST' });
  const created = await createdRes.json().catch(() => ({}));
  if (!createdRes.ok || created.error) {
    throw new Error(`Instagram container: ${created.error?.message || JSON.stringify(created).slice(0, 400)}`);
  }

  const pubUrl = new URL(`${GRAPH}/${igUser}/media_publish`);
  pubUrl.searchParams.set('creation_id', created.id);
  pubUrl.searchParams.set('access_token', token);
  const pubRes = await fetchRetry(pubUrl, { method: 'POST' });
  const published = await pubRes.json().catch(() => ({}));
  if (!pubRes.ok || published.error) {
    throw new Error(`Instagram publish: ${published.error?.message || JSON.stringify(published).slice(0, 400)}`);
  }

  return {
    ok: true,
    id: published.id,
    url: published.id ? `https://www.instagram.com/p/${published.id}/` : null,
    message: 'published Instagram media container',
  };
}
