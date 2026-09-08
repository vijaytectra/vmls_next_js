# Deploying to vmls.edu.in

The site is a Next.js static export served by Apache on cPanel. There is no
Node runtime on the server and no SSH, so deploying means uploading files
through cPanel's File Manager.

Only the files that changed are uploaded, not the whole 400 MB export.

**There is one packaging script: `pack-delta.mjs`.** It handles every kind of
change — text, components, images, videos, PDFs, redirects. If you find another
`.tar.gz` in `deploy/`, it is stale; ignore it.

## One-time setup

```bash
git clone https://github.com/vijaytectra/vmls_next_js.git
cd vmls_next_js
npm ci
npm run dev          # http://localhost:3000
```

## Deploying a change

```bash
npm run deploy:pack
```

Builds, then writes `deploy/delta.tar.gz` (usually a few MB) and
`deploy/DELTA.txt`. **Read DELTA.txt — it is not just a summary.**

Then in **cPanel → File Manager → `public_html`**:

1. Settings → **Show Hidden Files (dotfiles)**, so `.htaccess` is visible
2. **Upload** `deploy/delta.tar.gz`
3. Select it → **Extract** → target `/public_html`
4. Delete the `.tar.gz`
5. **Delete every file `DELTA.txt` lists under *"remove these by hand"*.**
   See the warning below — this step is the one that gets skipped.

Only once all five steps are done:

```bash
npm run deploy:done          # records what is now on the server
git add -A && git commit -m "..." && git push
```

### Step 5 is not optional

Extracting an archive can add and overwrite files. It can never delete one. So
anything removed from the site — a faculty member, a news post, a photo — stays
on the server until someone deletes it by hand, and remains publicly reachable
at its old URL.

`DELTA.txt` usually lists a harmless leftover `_next/static/<buildId>/` folder.
But after a content removal it lists real pages and images. On the
2026-09-08 deploy that removed Dr. Jacob Joseph, DELTA.txt listed 25 files;
the `_next` ones were cleared and the rest were not, so his profile HTML and
all twelve of his photos stayed live and downloadable after the profile had
gone from the site.

**`npm run deploy:done` closes the window on this.** It records the current
build as deployed, so those files never appear in a DELTA.txt again — they
become invisible orphans that only a manual audit will find. Run it *after*
the deletions, never before.

### Why every deploy shows ~2,200 changed files

Each build regenerates Next's build ID, and that ID appears in every page. A
one-word edit still rewrites every HTML file. That is normal, and it is why the
archive is a fairly constant ~8 MB regardless of how small the change was.

## Removing a page, a person, or a post

Deleting the content is only half of it. The old URL is in Google's index, so
it needs a 301 or it becomes a 404.

1. Remove the content (for faculty: the entry in
   `src/app/faculty/[slug]/page.tsx`, the card in
   `src/components/FacultyGrid.tsx`, and the slug in
   `src/data/faculty-slugs.ts` — or just re-run
   `node scripts/generate-faculty-slugs.mjs`)
2. Delete the images from `public/images/`
3. Add the 301 to **`src/data/redirects.manual.ts`**
4. Check whether an old WordPress URL already redirects to the page you just
   deleted — `grep` the person's name in `src/data/redirects.ts`. If one does,
   override it in `redirects.manual.ts` too, or it will redirect to a 404.
5. `node scripts/generate-htaccess.mjs`
6. Deploy as above, and **do step 5 of the upload** — the person's photos are
   in that list.

The convention for departed faculty is a 301 to `/faculty-profiles`. Existing
examples: `s-suganya`, `tathagat-sharma`, `kiran-jenifer`, `jacob-joseph`.

## Deploying a redirect or .htaccess change

Add the rule to `src/data/redirects.manual.ts`, then
`node scripts/generate-htaccess.mjs`.

A normal `npm run deploy:pack` already carries `.htaccess` — the build copies
`public/` into `out/` including dotfiles, so no manual `cp` is needed. Use the
overlay route only when you want to ship `.htaccess` and `robots.txt` *alone*,
without a rebuild:

```bash
node scripts/generate-htaccess.mjs
node scripts/pack-deploy.mjs
```

Upload `deploy/production-overlay.tar.gz` and extract it.

## Rules

- **Never hand-edit `public/.htaccess`.** It is generated. Edit
  `scripts/generate-htaccess.mjs` or `src/data/redirects.manual.ts` and
  regenerate.
- **Never hand-edit `src/data/redirects.ts`.** Its header says
  `AUTO-GENERATED`. New and overriding rules go in `redirects.manual.ts`; the
  .htaccess generator reads manual first and manual wins on any duplicated
  source.
- **No comments inside the `MANUAL_REDIRECTS` array.** The generator slices the
  array literal out of the file and runs `JSON.parse` on it, so a `//` line
  between the braces is a syntax error. Put explanations above the `export`.
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
- **Commit and push `deploy-manifest.json`.** It is the record of what is on the
  server, and the next person's delta is computed against it. If it is stale,
  their deploy silently misses files.

## Checking a deploy

```bash
curl -o /dev/null -s -w '%{http_code}\n' https://vmls.edu.in/about-vmls
```

Should be `200`, not `301`. A `301` that loops means the `.htaccess` is wrong —
see the comments in `scripts/generate-htaccess.mjs`, which explain why
`DirectorySlash Off` and the `[END]` flag are both required.

After a removal, check the old URL **and** that the files are actually gone.
The redirect fires from `.htaccess` whether or not the file is still there, so
a `301` on the clean URL proves nothing about the file:

```bash
curl -o /dev/null -s -w '%{http_code}\n' https://vmls.edu.in/faculty/<slug>        # want 301
curl -o /dev/null -s -w '%{http_code}\n' https://vmls.edu.in/faculty/<slug>.html   # want 404
curl -o /dev/null -s -w '%{http_code}\n' 'https://vmls.edu.in/images/faculty/<photo>.webp'  # want 404
```

A `200` on either of the last two means step 5 of the upload was skipped.

## Local performance testing

Local Lighthouse scores on a dev machine do **not** match PageSpeed Insights —
the same live build measured 47 locally and 76 on PSI, and three back-to-back
local runs gave 66, 80 and 89. Use local runs only for a same-machine
before/after comparison of one change, and for structural audits that do not
depend on machine speed (`largest-contentful-paint-element` and its phase
breakdown, `network-requests` ordering, `mainthread-work-breakdown`). Confirm
real numbers on https://pagespeed.web.dev against the live URL.

```bash
npm run build
node scripts/serve-export.mjs 4300      # applies .htaccess redirects, emulates gzip
npx lighthouse http://localhost:4300/ --preset=perf --form-factor=mobile \
  --screenEmulation.mobile --only-categories=performance
```

## If SSH is ever enabled

`.github/workflows/deploy.yml` already builds and rsyncs on every push to
`main`. It is wired to the staging subdomain and fails at the preflight step
because the cPanel account has shell access disabled. If the host enables a
jailed shell, point `TARGET` at `public_html` and add the `SSH_PRIVATE_KEY`,
`SSH_HOST`, `SSH_USER` and `SSH_PORT` secrets — then deploying is just
`git push`.
