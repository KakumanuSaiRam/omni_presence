import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

/** Load KEY=value from the first existing file. Does not override already-set env. */
export function loadEnv(files = ['.env', '../.env']) {
  for (const rel of files) {
    const full = resolve(rel);
    if (!existsSync(full)) continue;
    const text = readFileSync(full, 'utf8');
    for (const raw of text.split(/\r?\n/)) {
      const line = raw.trim();
      if (!line || line.startsWith('#')) continue;
      const eq = line.indexOf('=');
      if (eq < 1) continue;
      const key = line.slice(0, eq).trim();
      let val = line.slice(eq + 1).trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      if (process.env[key] === undefined) process.env[key] = val;
    }
    return full;
  }
  return null;
}
