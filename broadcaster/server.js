// One-click broadcast dashboard. Run: npm run broadcast
// Then open http://localhost:4600 — write once, post everywhere.
import http from 'node:http';
import { broadcast, PLATFORMS } from './poster.js';

const checkboxes = Object.entries(PLATFORMS)
  .map(
    ([key, { label }]) =>
      `<label><input type="checkbox" name="platforms" value="${key}" checked> ${label}</label>`
  )
  .join('\n');

const page = (status = '') => `<!doctype html>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Siva Tuitions — Broadcast</title>
<style>
  body{font-family:system-ui;max-width:40rem;margin:3rem auto;padding:0 1rem;background:#faf6ec;color:#1c1b18}
  h1{color:#123d33} textarea{width:100%;min-height:10rem;font:inherit;padding:.75rem;border:1px solid #ccc;border-radius:6px}
  label{display:block;margin:.4rem 0} button{background:#e8a93d;border:0;padding:.8rem 1.6rem;border-radius:6px;font-weight:700;font-size:1rem;cursor:pointer}
  pre{background:#fff;padding:1rem;border-radius:6px;border:1px solid #ddd;white-space:pre-wrap}
  .note{font-size:.9rem;color:#555}
</style>
<h1>Broadcast an update</h1>
${status ? `<pre>${status}</pre>` : ''}
<form method="post" action="/broadcast">
  <textarea name="text" placeholder="Write the update once. First line becomes the Reddit title." required></textarea>
  <fieldset style="border:0;padding:0;margin:1rem 0">${checkboxes}</fieldset>
  <button>Post everywhere</button>
</form>
<p class="note">Instagram needs an image and WhatsApp Channels have no web API — for those,
paste the same text into the Instagram app / WhatsApp Channel manually (30 seconds).
First time? Run <code>npm run broadcast:login</code> to sign in to each platform once.</p>`;

http
  .createServer(async (req, res) => {
    if (req.method === 'POST' && req.url === '/broadcast') {
      let body = '';
      req.on('data', (c) => (body += c));
      req.on('end', async () => {
        const params = new URLSearchParams(body);
        const text = params.get('text') || '';
        const selected = params.getAll('platforms');
        const results = await broadcast(text, selected);
        const status = Object.entries(results)
          .map(([k, v]) => `${PLATFORMS[k].label}: ${v}`)
          .join('\n');
        res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
        res.end(page(status || 'Nothing selected.'));
      });
      return;
    }
    res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
    res.end(page());
  })
  .listen(4600, () => console.log('Broadcast dashboard: http://localhost:4600'));
