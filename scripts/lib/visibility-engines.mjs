import { fetchRetry } from './fetch-retry.mjs';
import { scoreAnswer, sitePosition } from './score-visibility.mjs';

const CONTEXT =
  'Answer as a helpful local guide for a student or parent in Guntur, Andhra Pradesh, India. Name real institutes, locations and next steps when you recommend options. Do not invent student counts, ranks or fees.';

function extractGeminiText(json) {
  const parts = json.candidates?.[0]?.content?.parts || [];
  return parts.map((p) => p.text || '').join('\n').trim();
}

export async function askGemini(query) {
  const url = new URL(
    'https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent',
  );
  const res = await fetchRetry(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-goog-api-key': process.env.GEMINI_API_KEY,
    },
    body: JSON.stringify({
      contents: [{ parts: [{ text: `${CONTEXT}\n\nQuestion: ${query}` }] }],
      tools: [{ google_search: {} }],
    }),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(`Gemini HTTP ${res.status}: ${JSON.stringify(json).slice(0, 400)}`);
  }
  const text = extractGeminiText(json);
  return { text, scored: scoreAnswer(text), raw: { model: 'gemini-flash-latest' } };
}

export async function askPerplexity(query) {
  const res = await fetchRetry('https://api.perplexity.ai/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.PERPLEXITY_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'sonar',
      messages: [
        { role: 'system', content: CONTEXT },
        { role: 'user', content: query },
      ],
    }),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(`Perplexity HTTP ${res.status}: ${JSON.stringify(json).slice(0, 400)}`);
  }
  const text = json.choices?.[0]?.message?.content || '';
  return { text, scored: scoreAnswer(text), raw: { model: 'sonar' } };
}

function textFromResponses(json) {
  if (typeof json.output_text === 'string' && json.output_text.trim()) return json.output_text;
  const chunks = [];
  for (const item of json.output || []) {
    for (const c of item.content || []) {
      if (c.text) chunks.push(c.text);
    }
  }
  return chunks.join('\n').trim();
}

async function openaiResponses(query, toolType) {
  return fetchRetry('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      tools: [{ type: toolType }],
      input: `${CONTEXT}\n\nQuestion: ${query}`,
    }),
  });
}

export async function askOpenAI(query) {
  let res = await openaiResponses(query, 'web_search');
  let json = await res.json().catch(() => ({}));
  if (res.status === 400) {
    res = await openaiResponses(query, 'web_search_preview');
    json = await res.json().catch(() => ({}));
  }
  if (!res.ok) {
    throw new Error(`OpenAI HTTP ${res.status}: ${JSON.stringify(json).slice(0, 400)}`);
  }
  const text = textFromResponses(json);
  return { text, scored: scoreAnswer(text), raw: { model: 'gpt-4o-mini' } };
}

export async function askBrave(query) {
  const url = new URL('https://api.search.brave.com/res/v1/web/search');
  url.searchParams.set('q', query);
  url.searchParams.set('count', '10');
  const res = await fetchRetry(url, {
    headers: {
      Accept: 'application/json',
      'X-Subscription-Token': process.env.BRAVE_API_KEY,
    },
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(`Brave HTTP ${res.status}: ${JSON.stringify(json).slice(0, 400)}`);
  }
  const results = json.web?.results || [];
  const urls = results.map((r) => r.url).filter(Boolean);
  const pos = sitePosition(urls);
  const blob = results
    .map((r) => `${r.title || ''}\n${r.description || ''}`)
    .join('\n');
  const scored = scoreAnswer(blob);
  return {
    text: results.map((r, i) => `${i + 1}. ${r.title} — ${r.url}`).join('\n'),
    scored: {
      score: pos.score,
      mentioned: pos.score > 0 || scored.mentioned,
      competitors: scored.competitors,
      rank: pos.rank,
    },
    raw: { engine: 'brave-search', rank: pos.rank },
  };
}

export const ENGINES = [
  { id: 'gemini', name: 'Gemini', env: ['GEMINI_API_KEY'], ask: askGemini },
  { id: 'perplexity', name: 'Perplexity', env: ['PERPLEXITY_API_KEY'], ask: askPerplexity },
  { id: 'openai', name: 'OpenAI', env: ['OPENAI_API_KEY'], ask: askOpenAI },
  { id: 'brave', name: 'Brave Search', env: ['BRAVE_API_KEY'], ask: askBrave },
];

export function isEngineConfigured(engine, env = process.env) {
  return engine.env.every((k) => {
    const v = env[k];
    return v != null && String(v).trim() !== '';
  });
}
