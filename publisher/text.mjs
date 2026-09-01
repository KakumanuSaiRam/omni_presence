export function composeText(title, body) {
  const t = (title || '').trim();
  const b = (body || '').trim();
  if (t && b) return `${t}\n\n${b}`;
  return t || b;
}

export function mimeFor(path) {
  const p = (path || '').toLowerCase();
  if (p.endsWith('.png')) return 'image/png';
  if (p.endsWith('.webp')) return 'image/webp';
  if (p.endsWith('.gif')) return 'image/gif';
  return 'image/jpeg';
}

export function hasEnv(...keys) {
  return keys.every((k) => {
    const v = process.env[k];
    return v != null && String(v).trim() !== '';
  });
}

export function isHttpUrl(value) {
  return /^https?:\/\//i.test(value || '');
}
