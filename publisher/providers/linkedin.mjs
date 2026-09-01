import { readFileSync } from 'node:fs';
import { fetchRetry } from '../../scripts/lib/fetch-retry.mjs';
import { composeText, hasEnv, isHttpUrl, mimeFor } from '../text.mjs';

export const id = 'linkedin';
export const name = 'LinkedIn';

const REST = 'https://api.linkedin.com/rest';
const VERSION = '202504';

export function isConfigured() {
  return hasEnv('LINKEDIN_ACCESS_TOKEN', 'LINKEDIN_ORG_URN');
}

function orgUrn() {
  const raw = process.env.LINKEDIN_ORG_URN.trim();
  return raw.startsWith('urn:') ? raw : `urn:li:organization:${raw}`;
}

function headers(extra = {}) {
  return {
    Authorization: `Bearer ${process.env.LINKEDIN_ACCESS_TOKEN}`,
    'LinkedIn-Version': VERSION,
    'X-Restli-Protocol-Version': '2.0.0',
    ...extra,
  };
}

async function readBytes(imagePath) {
  if (isHttpUrl(imagePath)) {
    const res = await fetchRetry(imagePath);
    if (!res.ok) throw new Error(`LinkedIn could not download image (${res.status})`);
    return {
      buf: Buffer.from(await res.arrayBuffer()),
      mime: res.headers.get('content-type') || 'image/jpeg',
    };
  }
  return { buf: readFileSync(imagePath), mime: mimeFor(imagePath) };
}

async function uploadImage(imagePath) {
  const owner = orgUrn();
  const initRes = await fetchRetry(`${REST}/images?action=initializeUpload`, {
    method: 'POST',
    headers: headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify({ initializeUploadRequest: { owner } }),
  });
  const init = await initRes.json().catch(() => ({}));
  if (!initRes.ok) {
    throw new Error(`LinkedIn image init: ${JSON.stringify(init).slice(0, 400)}`);
  }
  const uploadUrl = init.value?.uploadUrl;
  const imageUrn = init.value?.image;
  if (!uploadUrl || !imageUrn) {
    throw new Error(`LinkedIn image init missing uploadUrl: ${JSON.stringify(init).slice(0, 400)}`);
  }
  const { buf, mime } = await readBytes(imagePath);
  const put = await fetchRetry(uploadUrl, {
    method: 'PUT',
    headers: { 'Content-Type': mime, Authorization: `Bearer ${process.env.LINKEDIN_ACCESS_TOKEN}` },
    body: buf,
  });
  if (!put.ok) {
    const errText = await put.text().catch(() => '');
    throw new Error(`LinkedIn image PUT HTTP ${put.status}: ${errText.slice(0, 300)}`);
  }
  return imageUrn;
}

export async function publish({ title, body, imagePath }) {
  const commentary = composeText(title, body);
  const post = {
    author: orgUrn(),
    commentary,
    visibility: 'PUBLIC',
    distribution: {
      feedDistribution: 'MAIN_FEED',
      targetEntities: [],
      thirdPartyDistributionChannels: [],
    },
    lifecycleState: 'PUBLISHED',
    isReshareDisabledByAuthor: false,
  };
  if (imagePath) {
    post.content = { media: { id: await uploadImage(imagePath) } };
  }

  const res = await fetchRetry(`${REST}/posts`, {
    method: 'POST',
    headers: headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(post),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(`LinkedIn HTTP ${res.status}: ${JSON.stringify(data).slice(0, 400)}`);
  }
  const postId = res.headers.get('x-restli-id') || data.id;
  return {
    ok: true,
    id: postId,
    url: postId ? `https://www.linkedin.com/feed/update/${postId}/` : null,
    message: imagePath ? 'organization post with image' : 'organization post',
  };
}
