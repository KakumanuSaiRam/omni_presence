import { fetchRetry } from '../../scripts/lib/fetch-retry.mjs';
import { hasEnv } from '../text.mjs';

export const id = 'reddit';
export const name = 'Reddit';

export function isConfigured() {
  return hasEnv('REDDIT_CLIENT_ID', 'REDDIT_CLIENT_SECRET', 'REDDIT_USERNAME', 'REDDIT_PASSWORD');
}

function userAgent() {
  const user = process.env.REDDIT_USERNAME;
  return `siva-tuitions-publisher/1.0 (by /u/${user})`;
}

async function accessToken() {
  const basic = Buffer.from(
    `${process.env.REDDIT_CLIENT_ID}:${process.env.REDDIT_CLIENT_SECRET}`,
  ).toString('base64');
  const body = new URLSearchParams({
    grant_type: 'password',
    username: process.env.REDDIT_USERNAME,
    password: process.env.REDDIT_PASSWORD,
  });
  const res = await fetchRetry('https://www.reddit.com/api/v1/access_token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
      'User-Agent': userAgent(),
    },
    body,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.access_token) {
    throw new Error(`Reddit token: ${JSON.stringify(data).slice(0, 400)}`);
  }
  return data.access_token;
}

export async function publish({ title, body }) {
  const token = await accessToken();
  const sr = (process.env.REDDIT_SUBREDDIT || `u_${process.env.REDDIT_USERNAME}`).replace(/^r\//, '');
  const form = new URLSearchParams({
    api_type: 'json',
    kind: 'self',
    sr,
    title,
    text: body || title,
  });
  const res = await fetchRetry('https://oauth.reddit.com/api/submit', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded',
      'User-Agent': userAgent(),
    },
    body: form,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || data.json?.errors?.length) {
    throw new Error(`Reddit submit: ${JSON.stringify(data).slice(0, 400)}`);
  }
  const url = data.json?.data?.url;
  const thing = data.json?.data?.name || data.json?.data?.id;
  return {
    ok: true,
    id: thing,
    url: url || null,
    message: `self-post to ${sr}`,
  };
}
