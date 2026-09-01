import { createHmac, randomBytes } from 'node:crypto';

/** RFC 3986 percent-encoding used by OAuth 1.0a. */
export function percentEncode(value) {
  return encodeURIComponent(String(value))
    .replace(/!/g, '%21')
    .replace(/\*/g, '%2A')
    .replace(/'/g, '%27')
    .replace(/\(/g, '%28')
    .replace(/\)/g, '%29');
}

function collectParams({ query = {}, body = {}, oauth }) {
  const params = [];
  for (const [k, v] of Object.entries({ ...query, ...body, ...oauth })) {
    if (v === undefined || v === null) continue;
    params.push([percentEncode(k), percentEncode(v)]);
  }
  params.sort((a, b) => (a[0] === b[0] ? a[1].localeCompare(b[1]) : a[0].localeCompare(b[0])));
  return params.map(([k, v]) => `${k}=${v}`).join('&');
}

/**
 * Build an OAuth 1.0a Authorization header (HMAC-SHA1).
 * JSON bodies are NOT signed (they are not `application/x-www-form-urlencoded`).
 */
export function oauth1Header({
  method,
  url,
  query = {},
  body = {},
  jsonBody,
  consumerKey,
  consumerSecret,
  token,
  tokenSecret,
  nonce = randomBytes(16).toString('hex'),
  timestamp = String(Math.floor(Date.now() / 1000)),
}) {
  const oauth = {
    oauth_consumer_key: consumerKey,
    oauth_nonce: nonce,
    oauth_signature_method: 'HMAC-SHA1',
    oauth_timestamp: timestamp,
    oauth_token: token,
    oauth_version: '1.0',
  };

  const parsed = new URL(url);
  const urlForBase = `${parsed.origin}${parsed.pathname}`;
  const queryFromUrl = Object.fromEntries(parsed.searchParams.entries());
  const formBody = jsonBody ? {} : body;
  const paramString = collectParams({
    query: { ...queryFromUrl, ...query },
    body: formBody,
    oauth,
  });

  const base = [
    method.toUpperCase(),
    percentEncode(urlForBase),
    percentEncode(paramString),
  ].join('&');

  const signingKey = `${percentEncode(consumerSecret)}&${percentEncode(tokenSecret)}`;
  const signature = createHmac('sha1', signingKey).update(base).digest('base64');
  oauth.oauth_signature = signature;

  const header = Object.keys(oauth)
    .sort()
    .map((k) => `${percentEncode(k)}="${percentEncode(oauth[k])}"`)
    .join(', ');
  return `OAuth ${header}`;
}
