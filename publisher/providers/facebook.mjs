import { readFileSync } from 'node:fs';
import { basename } from 'node:path';
import { fetchRetry } from '../../scripts/lib/fetch-retry.mjs';
import { composeText, hasEnv, isHttpUrl, mimeFor } from '../text.mjs';

export const id = 'facebook';
export const name = 'Facebook Page';

const GRAPH = 'https://graph.facebook.com/v21.0';

export function isConfigured() {
  return hasEnv('FB_PAGE_ID', 'FB_PAGE_ACCESS_TOKEN');
}

async function graph(path, { method = 'POST', search, form, json } = {}) {
  const url = new URL(`${GRAPH}${path}`);
  if (search) for (const [k, v] of Object.entries(search)) url.searchParams.set(k, v);
  const headers = {};
  let body;
  if (form) body = form;
  else if (json) {
    headers['Content-Type'] = 'application/json';
    body = JSON.stringify(json);
  }
  const res = await fetchRetry(url, { method, headers, body });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || data.error) {
    const msg = data.error?.message || JSON.stringify(data).slice(0, 400);
    throw new Error(`Facebook HTTP ${res.status}: ${msg}`);
  }
  return data;
}

export async function publish({ title, body, imagePath }) {
  const pageId = process.env.FB_PAGE_ID;
  const token = process.env.FB_PAGE_ACCESS_TOKEN;
  const text = composeText(title, body);

  if (imagePath && !isHttpUrl(imagePath)) {
    const buf = readFileSync(imagePath);
    const form = new FormData();
    form.append('source', new Blob([buf], { type: mimeFor(imagePath) }), basename(imagePath));
    form.append('caption', text);
    form.append('access_token', token);
    const data = await graph(`/${pageId}/photos`, { form });
    return {
      ok: true,
      id: data.post_id || data.id,
      url: data.post_id ? `https://facebook.com/${data.post_id}` : null,
      message: 'photo posted to Page feed',
    };
  }

  if (imagePath && isHttpUrl(imagePath)) {
    const data = await graph(`/${pageId}/photos`, {
      search: { url: imagePath, caption: text, access_token: token },
    });
    return {
      ok: true,
      id: data.post_id || data.id,
      url: data.post_id ? `https://facebook.com/${data.post_id}` : null,
      message: 'photo posted to Page feed',
    };
  }

  const data = await graph(`/${pageId}/feed`, {
    search: { message: text, access_token: token },
  });
  return {
    ok: true,
    id: data.id,
    url: data.id ? `https://facebook.com/${data.id}` : null,
    message: 'text posted to Page feed',
  };
}
