// One-click broadcast dashboard. Run: npm run broadcast
// Then open http://localhost:4600 — write once, post everywhere.
import http from 'node:http';
import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { broadcast, PLATFORMS } from './poster.js';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const UPLOAD_DIR = path.join(ROOT, 'uploads');

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
  fieldset{border:0;padding:0;margin:1rem 0}
</style>
<h1>Broadcast an update</h1>
${status ? `<pre>${status}</pre>` : ''}
<form method="post" action="/broadcast" enctype="multipart/form-data">
  <textarea name="text" placeholder="Write the update once. First line becomes the Reddit title." required></textarea>
  <fieldset>
    <label>Image for Facebook and X (optional)
      <input type="file" name="image" accept="image/*">
    </label>
    <label><input type="checkbox" name="dryRun" value="1"> Dry run (log only, do not post)</label>
  </fieldset>
  <fieldset>${checkboxes}</fieldset>
  <button>Post everywhere</button>
</form>
<p class="note">Instagram needs an image and WhatsApp Channels have no web API — for those,
paste the same text into the Instagram app / WhatsApp Channel manually (30 seconds).
First time? Run <code>npm run broadcast:login</code> to sign in to each platform once.
Posts are appended to <code>broadcaster/posts/history.jsonl</code>.</p>`;

function parseMultipart(buffer, boundary) {
  const fields = {};
  const files = {};
  const sep = Buffer.from(`--${boundary}`);
  let start = buffer.indexOf(sep);
  while (start !== -1) {
    const next = buffer.indexOf(sep, start + sep.length);
    const slice = buffer.subarray(start + sep.length, next === -1 ? undefined : next);
    const headerEnd = slice.indexOf('\r\n\r\n');
    if (headerEnd === -1) {
      start = next;
      continue;
    }
    const header = slice.subarray(0, headerEnd).toString('utf8');
    let body = slice.subarray(headerEnd + 4);
    if (body.length >= 2 && body.subarray(-2).equals(Buffer.from('\r\n'))) {
      body = body.subarray(0, -2);
    }
    const name = /name="([^"]+)"/.exec(header)?.[1];
    const filename = /filename="([^"]*)"/.exec(header)?.[1];
    if (!name) {
      start = next;
      continue;
    }
    if (filename) {
      files[name] = { filename, data: body };
    } else {
      const prev = fields[name];
      const value = body.toString('utf8');
      fields[name] = prev === undefined ? value : Array.isArray(prev) ? [...prev, value] : [prev, value];
    }
    start = next;
  }
  return { fields, files };
}

function asList(value) {
  if (value == null || value === '') return [];
  return Array.isArray(value) ? value : [value];
}

http
  .createServer(async (req, res) => {
    if (req.method === 'POST' && req.url === '/broadcast') {
      const chunks = [];
      for await (const c of req) chunks.push(c);
      const buf = Buffer.concat(chunks);
      const ctype = req.headers['content-type'] || '';
      const bound = /boundary=(?:"([^"]+)"|([^;]+))/i.exec(ctype);
      let text = '';
      let selected = [];
      let dryRun = false;
      let imagePath = null;

      if (bound) {
        const { fields, files } = parseMultipart(buf, (bound[1] || bound[2]).trim());
        text = fields.text || '';
        selected = asList(fields.platforms);
        dryRun = fields.dryRun === '1' || fields.dryRun === 'on';
        const image = files.image;
        if (image?.filename && image.data?.length) {
          mkdirSync(UPLOAD_DIR, { recursive: true });
          const safe = path.basename(image.filename).replace(/[^\w.-]+/g, '_');
          imagePath = path.join(UPLOAD_DIR, `${Date.now()}-${safe}`);
          writeFileSync(imagePath, image.data);
        }
      } else {
        const params = new URLSearchParams(buf.toString('utf8'));
        text = params.get('text') || '';
        selected = params.getAll('platforms');
        dryRun = params.get('dryRun') === '1';
      }

      const results = await broadcast(text, selected, { dryRun, imagePath });
      const status = Object.entries(results)
        .map(([k, v]) => `${PLATFORMS[k].label}: ${v}`)
        .join('\n') || 'Nothing selected.';
      res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
      res.end(page(status));
      return;
    }
    res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
    res.end(page());
  })
  .listen(4600, () => console.log('Broadcast dashboard: http://localhost:4600'));
