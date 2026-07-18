# Deploying EcoSurge

The site is a **Next.js app hosted on Vercel** with on-demand rendering. It is
**not** a static export — do not re-add `output: 'export'` to `next.config.mjs`.

> Why not GitHub Pages: the full static export is ~2.7 GB (7,400+ taxon pages),
> over Pages' hard 1 GB site limit. Vercel renders taxon pages on demand (ISR),
> so there is no size limit and no giant pre-build.

## One-time setup (do this once)

1. Go to **https://vercel.com** and sign in with the **GitHub account that owns
   `ryan-organically/ecosurge`**.
2. **Add New → Project → Import Git Repository** → select
   **`ryan-organically/ecosurge`**.
3. Framework Preset: **Next.js** (auto-detected). Leave **Root Directory** `./`
   and the **Build** and **Install** commands at their defaults — the `prebuild`
   hook builds the species database automatically. Click **Deploy**.
4. Wait for the first deployment to finish (a `https://<something>.vercel.app`
   URL). Open it and confirm these load:
   - `/` (landing) · `/archive` · a deep `/taxon/eukaryota/animalia/...` page ·
     `/blog` · `/docs`
   If the `*.vercel.app` URL works, the app is fine — anything left is just DNS.

## Point the domain (ecosurge.co) at Vercel

5. In the Vercel project: **Settings → Domains → Add** → enter `ecosurge.co`
   (add `www.ecosurge.co` too if you want it). Vercel shows the exact DNS records
   to create — usually:
   - Apex `ecosurge.co`: an **A record** to **`76.76.21.21`**
   - `www`: a **CNAME** to **`cname.vercel-dns.com`**
   (Use whatever Vercel actually displays — it is authoritative.)
6. At your DNS provider (wherever `ecosurge.co` is managed), **delete the old
   GitHub Pages records** (the A records for GitHub's IPs and/or the CNAME) and
   **add the Vercel records** from step 5. Save and wait for propagation
   (minutes to a couple hours) — Vercel auto-issues HTTPS.
7. On GitHub: **repo → Settings → Pages → Source → None** to disable Pages, so it
   releases the domain and stops serving the old site.

## After it's live

- Every push to `main` auto-deploys a new production build. Pull requests get
  preview URLs automatically.
- To roll back: Vercel dashboard → project → **Deployments** → pick a previous
  one → **Promote to Production**.

## Troubleshooting

- **Build fails on the DB step** (`prebuild` / `build:db`): send the Vercel build
  log. `better-sqlite3` compiles fine on Vercel; the DB is written to
  `public/data/species.db` and served statically.
- **A `/taxon/...` page 404s**: deep taxa render on demand via ISR
  (`dynamicParams = true`, `revalidate = 86400` in
  `src/app/(archive)/taxon/[...slug]/page.tsx`). First hit renders + caches.
- **Old site still showing after DNS change**: DNS/CDN cache — confirm the
  records match Vercel's, that GitHub Pages is disabled (step 7), and give it
  time. Test the `*.vercel.app` URL to separate app issues from DNS issues.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (server mode, not a static export)
```
