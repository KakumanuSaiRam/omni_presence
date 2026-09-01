import { readFileSync } from 'node:fs';
import { basename } from 'node:path';
import { fetchRetry } from '../../scripts/lib/fetch-retry.mjs';
import { composeText, hasEnv, isHttpUrl, mimeFor } from '../text.mjs';
import { oauth1Header } from './x-oauth.mjs';

export const id = 'x';
export const name = 'X';

export function isConfigured() {
  return hasEnv('X_API_KEY', 'X_API_SECRET', 'X_ACCESS_TOKEN', 'X_ACCESS_SECRET');
}

function creds() {
  return {
    consumerKey: process.env.X_API_KEY,
    consumerSecret: process.env.X_API_SECRET,
    token: process.env.X_ACCESS_TOKEN,
    tokenSecret: process.env.X_ACCESS_SECRET,
  };
}

function tweetText(title, body) {
  const full = composeText(title, body);
  if ([...full].length <= 280) return full;
  return `${[...full].slice(0, 277).join('')}...`;
}

async function signedFetch(url, { method = 'POST', json, form } = {}) {
  const headers = {
    Authorization: oauth1Header({ method, url, jsonBody: json || undefined, ...creds() }),
  };
  let body;
  if (form) {
    body = form;
  } else if (json) {
    headers['Content-Type'] = 'application/json';
    body = JSON.stringify(json);
  }
  const res = await fetchRetry(url, { method, headers, body });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || data.errors) {
    const msg = data.detail || data.title || JSON.stringify(data).slice(0, 400);
    throw new Error(`X HTTP ${res.status}: ${msg}`);
  }
  return data;
}

async function uploadMedia(imagePath) {
  let buf;
  let type;
  if (isHttpUrl(imagePath)) {
    const res = await fetchRetry(imagePath);
    if (!res.ok) throw new Error(`X could not download image (${res.status})`);
    buf = Buffer.from(await res.arrayBuffer());
    type = res.headers.get('content-type') || 'image/jpeg';
  } else {
    buf = readFileSync(imagePath);
    type = mimeFor(imagePath);
  }
  const form = new FormData();
  form.append('media', new Blob([buf], { type }), basename(imagePath || 'image.jpg'));
  const url = 'https://upload.twitter.com/1.1/media/upload.json';
  const headers = {
    Authorization: oauth1Header({ method: 'POST', url, ...creds() }),
  };
  const res = await fetchRetry(url, { method: 'POST', headers, body: form });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.media_id_string) {
    throw new Error(`X media upload: ${JSON.stringify(data).slice(0, 400)}`);
  }
  return data.media_id_string;
}

export async function publish({ title, body, imagePath }) {
  const text = tweetText(title, body);
  const payload = { text };
  if (imagePath) {
    const mediaId = await uploadMedia(imagePath);
    payload.media = { media_ids: [mediaId] };
  }
  const data = await signedFetch('https://api.twitter.com/2/tweets', { json: payload });
  const tweetId = data.data?.id;
  return {
    ok: true,
    id: tweetId,
    url: tweetId ? `https://x.com/i/web/status/${tweetId}` : null,
    message: imagePath ? 'tweet with media' : 'tweet posted',
  };
}
