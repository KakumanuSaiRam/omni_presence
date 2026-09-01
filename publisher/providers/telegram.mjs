import { readFileSync } from 'node:fs';
import { basename } from 'node:path';
import { fetchRetry } from '../../scripts/lib/fetch-retry.mjs';
import { composeText, hasEnv, isHttpUrl, mimeFor } from '../text.mjs';

export const id = 'telegram';
export const name = 'Telegram';

export function isConfigured() {
  return hasEnv('TELEGRAM_BOT_TOKEN', 'TELEGRAM_CHANNEL_ID');
}

function api(method) {
  return `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/${method}`;
}

export async function publish({ title, body, imagePath }) {
  const chatId = process.env.TELEGRAM_CHANNEL_ID;
  const text = composeText(title, body);

  if (!imagePath) {
    const res = await fetchRetry(api('sendMessage'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text, disable_web_page_preview: false }),
    });
    const data = await res.json().catch(() => ({}));
    if (!data.ok) throw new Error(`Telegram: ${data.description || JSON.stringify(data).slice(0, 400)}`);
    return {
      ok: true,
      id: String(data.result?.message_id ?? ''),
      message: 'sendMessage',
    };
  }

  const form = new FormData();
  form.append('chat_id', chatId);
  form.append('caption', text.slice(0, 1024));
  if (isHttpUrl(imagePath)) {
    form.append('photo', imagePath);
  } else {
    const buf = readFileSync(imagePath);
    form.append('photo', new Blob([buf], { type: mimeFor(imagePath) }), basename(imagePath));
  }
  const res = await fetchRetry(api('sendPhoto'), { method: 'POST', body: form });
  const data = await res.json().catch(() => ({}));
  if (!data.ok) throw new Error(`Telegram: ${data.description || JSON.stringify(data).slice(0, 400)}`);
  return {
    ok: true,
    id: String(data.result?.message_id ?? ''),
    message: 'sendPhoto',
  };
}
