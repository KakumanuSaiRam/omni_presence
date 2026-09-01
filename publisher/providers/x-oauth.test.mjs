import { test } from 'node:test';
import assert from 'node:assert/strict';
import { oauth1Header } from './x-oauth.mjs';

// Twitter's documented HMAC-SHA1 example (oauth1/guide).
const twitterExample = {
  method: 'POST',
  url: 'https://api.twitter.com/1.1/statuses/update.json',
  query: { include_entities: 'true' },
  body: { status: 'Hello Ladies + Gentlemen, a signed OAuth request!' },
  consumerKey: 'xvz1evFS4wEEPTGEFPHBog',
  consumerSecret: 'kAcSOqF21Fu85e7zjz7ZN2U4ZRhfV3WpwPAoE3Z7kBw',
  token: '370773112-GmHxMAgYyLbNEtIKZeRNFsMKPR9EyMZeS9weJAEb',
  tokenSecret: 'LswwdoUaIvS8ltyTt5jkRh4J50vUPVVHtR2YPi5kE',
  nonce: 'kYjzVBB8Y0ZFabxSWbWovY3uYSQ2pTgmZeNu2VS4cg',
  timestamp: '1318622958',
};

test('HMAC-SHA1 signature matches Twitter OAuth 1.0a example', () => {
  const header = oauth1Header(twitterExample);
  assert.match(header, /^OAuth /);
  assert.match(header, /oauth_signature="hCtSmYh%2BiHYCEqBWrE7C7hYmtUk%3D"/);
});

test('JSON tweet body is not mixed into the signature base', () => {
  const a = oauth1Header({
    method: 'POST',
    url: 'https://api.twitter.com/2/tweets',
    consumerKey: 'key',
    consumerSecret: 'secret',
    token: 'tok',
    tokenSecret: 'toksec',
    nonce: 'n',
    timestamp: '1',
    jsonBody: { text: 'hello' },
  });
  const b = oauth1Header({
    method: 'POST',
    url: 'https://api.twitter.com/2/tweets',
    consumerKey: 'key',
    consumerSecret: 'secret',
    token: 'tok',
    tokenSecret: 'toksec',
    nonce: 'n',
    timestamp: '1',
    jsonBody: { text: 'different' },
  });
  assert.equal(a, b);
});
