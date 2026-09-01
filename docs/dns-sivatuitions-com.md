# When sivatuitions.com should go live

The public site is **https://sivatuitions.github.io** until this cutover. `public/CNAME` was removed on purpose: leaving `sivatuitions.com` in that file makes GitHub Pages serve a custom domain that has no working DNS, which is why the apex looked dead.

Do this only when you control the registrar for sivatuitions.com and can change records.

## 1. DNS at the registrar

GitHub Pages apex `A` records:

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

`CNAME` for `www`:

```
www  CNAME  sivatuitions.github.io
```

(Not `kakumanusairam.github.io` — that is a different GitHub user.)

Wait until `dig sivatuitions.com` and `dig www.sivatuitions.com` show those targets.

## 2. Restore the CNAME file in this repo

Create `public/CNAME` with a single line:

```
sivatuitions.com
```

## 3. Point the site constants at the custom domain

In `src/data/site.js` set `url: 'https://sivatuitions.com'`.  
In `astro.config.mjs` set `site: 'https://sivatuitions.com'`.

Then replace `https://sivatuitions.github.io` with `https://sivatuitions.com` in `public/llms.txt` and in directory website fields (or re-paste from the directory packs after that edit).

## 4. GitHub Pages setting

Repo **sivatuitions/sivatuitions.github.io** → Settings → Pages:

- Source: **GitHub Actions** (not Jekyll)
- Custom domain: `sivatuitions.com`
- Enforce HTTPS after the certificate issues (can take up to an hour)

## 5. Search consoles

- Google Search Console: add `sivatuitions.com`, DNS verify, submit sitemap
- Bing Webmaster Tools: import or add the domain, submit sitemap
- Switch directory “Website” fields (Justdial, GBP, Bing Places, …) to https://sivatuitions.com
