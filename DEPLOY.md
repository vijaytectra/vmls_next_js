# Deploying to vmls.edu.in

The site is a Next.js static export served by Apache on cPanel. There is no
Node runtime on the server and no SSH, so deploying means uploading files
through cPanel's File Manager.

Only the files that changed are uploaded, not the whole 400 MB export.

## One-time setup

```bash
git clone https://github.com/vijaytectra/vmls_next_js.git
cd vmls_next_js
npm ci
npm run dev          # http://localhost:3000
```

## Deploying a content or code change

```bash
npm run build
node scripts/pack-delta.mjs
```

That prints a summary and writes `deploy/delta.tar.gz` — usually a few MB.

Then, in **cPanel → File Manager → `public_html`**:

1. **Upload** `deploy/delta.tar.gz`
2. Select it → **Extract** → target `/public_html`
3. Delete the `.tar.gz`
4. Delete anything `DELTA.txt` lists under *"remove these by hand"* — extracting
   cannot delete files. It is normally one leftover `_next/static/<buildId>/`
   folder.

Back in the terminal, once the upload is done:

```bash
node scripts/pack-delta.mjs --commit
git add -A && git commit -m "..." && git push
```

**`--commit` is not optional.** It updates `deploy-manifest.json`, the record of
what is on the server. Commit and push that file — the next person's delta is
computed against it, and if it is stale their deploy will miss files or ship
ones that are already there.

Every build regenerates Next's build ID, which appears in every page, so even a
one-word edit shows ~2,200 changed files. That is normal.

## Deploying a redirect or .htaccess change

Add the rule to `src/data/redirects.manual.ts`, then:

```bash
node scripts/generate-htaccess.mjs
cp public/.htaccess out/.htaccess
node scripts/pack-deploy.mjs
```

Upload `deploy/production-overlay.tar.gz` to `public_html` and extract it. It
holds only `.htaccess` and `robots.txt`.

## Rules

- **Never hand-edit `public/.htaccess`.** It is generated. Edit
  `scripts/generate-htaccess.mjs` or `src/data/redirects.manual.ts` and
  regenerate.
- **Never hand-edit `src/data/redirects.ts`.** It is generated too. New
  redirects go in `redirects.manual.ts`; the .htaccess generator reads both and
  manual entries win.
- **Never extract `staging-overlay.tar.gz` into `public_html`.** It carries a
  `Disallow: /` robots.txt and a noindex header, and would deindex the site.
  `production-overlay.tar.gz` is the one for the live site.
- These directories in `public_html` are separate applications. Do not delete
  them, and add any new one to `SIBLING_APPS` in `scripts/generate-htaccess.mjs`
  so the rewrite rules leave it alone:
  `exam`, `vlat`, `vlat-exam`, `vlat-exam21`, `wordpress blogs dont touch this`
- Photos and other source images go in `image-originals/` (gitignored). Convert
  them to `.webp` under `public/images/`, then run
  `node scripts/generate-image-variants.mjs` to build the responsive sizes.

## Rebuilding everything from scratch

Only if the server state is badly wrong:

```bash
npm run build
node scripts/pack-deploy.mjs
```

Upload `part-1` … `part-5.tar.gz` and extract each, then
`production-overlay.tar.gz` **last**. About 400 MB. Afterwards run
`node scripts/pack-delta.mjs --commit`.

## Checking a deploy

```bash
curl -o /dev/null -s -w '%{http_code}\n' https://vmls.edu.in/about-vmls
```

Should be `200`, not `301`. A `301` that loops means the `.htaccess` is wrong —
see the comments in `scripts/generate-htaccess.mjs`, which explain why
`DirectorySlash Off` and the `[END]` flag are both required.

## If SSH is ever enabled

`.github/workflows/deploy.yml` already builds and rsyncs on every push to
`main`. It is wired to the staging subdomain and fails at the preflight step
because the cPanel account has shell access disabled. If the host enables a
jailed shell, point `TARGET` at `public_html` and add the `SSH_PRIVATE_KEY`,
`SSH_HOST`, `SSH_USER` and `SSH_PORT` secrets — then deploying is just
`git push`.
