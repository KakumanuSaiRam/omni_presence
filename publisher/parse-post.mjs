import { existsSync, readFileSync } from 'node:fs';
import { dirname, isAbsolute, resolve } from 'node:path';

export const ALL_PLATFORMS = [
  'facebook',
  'instagram',
  'x',
  'linkedin',
  'reddit',
  'gbp',
  'telegram',
];

const ALIAS = {
  fb: 'facebook',
  facebook: 'facebook',
  meta: 'facebook',
  ig: 'instagram',
  insta: 'instagram',
  instagram: 'instagram',
  twitter: 'x',
  x: 'x',
  li: 'linkedin',
  linkedin: 'linkedin',
  reddit: 'reddit',
  gbp: 'gbp',
  google: 'gbp',
  'google-business': 'gbp',
  google_business: 'gbp',
  tg: 'telegram',
  telegram: 'telegram',
};

function unquote(value) {
  const v = value.trim();
  if (
    (v.startsWith('"') && v.endsWith('"')) ||
    (v.startsWith("'") && v.endsWith("'"))
  ) {
    return v.slice(1, -1);
  }
  return v;
}

function normalizePlatform(raw) {
  const key = raw.trim().toLowerCase();
  const id = ALIAS[key];
  if (!id) throw new Error(`Unknown platform "${raw}"`);
  return id;
}

function parsePlatforms(raw) {
  const inner = raw.trim().replace(/^\[/, '').replace(/\]$/, '');
  if (!inner.trim()) return [];
  return inner.split(',').map((p) => normalizePlatform(p));
}

function parseFrontmatter(block) {
  const meta = {};
  let listKey = null;
  for (const raw of block.split(/\r?\n/)) {
    const line = raw.replace(/\t/g, '  ');
    if (!line.trim()) continue;
    const listItem = line.match(/^\s+-\s+(.+)$/);
    if (listItem && listKey) {
      meta[listKey].push(unquote(listItem[1]));
      continue;
    }
    listKey = null;
    const eq = line.match(/^([A-Za-z][\w-]*)\s*:\s*(.*)$/);
    if (!eq) continue;
    const key = eq[1];
    const val = eq[2];
    if (val === '') {
      meta[key] = [];
      listKey = key;
      continue;
    }
    meta[key] = unquote(val);
  }
  return meta;
}

function resolveImage(image, postFile) {
  if (!image) return null;
  if (/^https?:\/\//i.test(image)) return image;
  const base = dirname(postFile);
  const full = isAbsolute(image) ? image : resolve(base, image);
  if (!existsSync(full)) {
    throw new Error(`image not found: ${image} (resolved ${full})`);
  }
  return full;
}

export function parsePost(file) {
  const text = readFileSync(file, 'utf8');
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) throw new Error(`Post ${file} needs YAML frontmatter between --- lines`);
  const meta = parseFrontmatter(match[1]);
  const title = (meta.title || '').trim();
  if (!title) throw new Error('Post frontmatter must include title');

  let platforms;
  if (meta.platforms == null) {
    platforms = [...ALL_PLATFORMS];
  } else if (Array.isArray(meta.platforms)) {
    platforms = meta.platforms.map(normalizePlatform);
  } else {
    platforms = parsePlatforms(String(meta.platforms));
  }

  return {
    title,
    body: match[2].trim(),
    imagePath: resolveImage(meta.image, file),
    platforms,
    file,
  };
}
