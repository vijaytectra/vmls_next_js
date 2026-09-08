// Writes .br and .gz twins for every compressible file in ./out.
//
// Why this exists: the production host compresses application/javascript on
// the fly but hands Chrome *identity* for text/html, text/css and the RSC
// .txt payloads - confirmed from Chrome's own DevTools log, where every
// request carried "Accept-Encoding: gzip, deflate, br, zstd" and only the .js
// responses came back with Content-Encoding. curl gets gzip for the same URLs,
// so the behaviour is not reproducible from the shell and cannot be fixed by
// re-declaring AddOutputFilterByType.
//
// Measured cost of that on the homepage: 201 KB of HTML instead of 29 KB,
// 143 KB of CSS instead of 22 KB, 67 KB of RSC payload instead of 8 KB -
// 373 KiB of avoidable transfer on the critical path, on an HTTP/1.1 server.
//
// So we stop asking the server to compress anything. The build ships the
// compressed bytes and .htaccess serves them directly. Brotli is preferred
// where the client accepts it; gzip is the fallback for everything else.
//
//   node scripts/precompress.mjs
import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";

const ROOT = "out";

// Only text. Images, fonts (woff2 is already brotli) and video are already
// compressed - a .gz twin of a .webp is bigger than the original.
const EXTENSIONS = new Set([".html", ".css", ".js", ".txt", ".json", ".xml", ".svg", ".map"]);

// Below this, the ~200 bytes of framing costs more than the saving, and every
// extra file is another line in the manual cPanel upload.
const MIN_BYTES = 1024;

let files = 0;
let rawTotal = 0;
let brTotal = 0;
let gzTotal = 0;

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
      continue;
    }
    if (!entry.isFile()) continue;
    const ext = path.extname(entry.name);
    // Never compress a compressed twin from an earlier run.
    if (ext === ".br" || ext === ".gz") continue;
    if (!EXTENSIONS.has(ext)) continue;

    const raw = fs.readFileSync(full);
    if (raw.length < MIN_BYTES) continue;

    const br = zlib.brotliCompressSync(raw, {
      params: {
        [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
        [zlib.constants.BROTLI_PARAM_SIZE_HINT]: raw.length,
      },
    });
    const gz = zlib.gzipSync(raw, { level: 9 });

    // A twin that saves nothing would just be another file to upload.
    if (br.length < raw.length * 0.95) fs.writeFileSync(full + ".br", br);
    if (gz.length < raw.length * 0.95) fs.writeFileSync(full + ".gz", gz);

    files += 1;
    rawTotal += raw.length;
    brTotal += br.length;
    gzTotal += gz.length;
  }
}

if (!fs.existsSync(ROOT)) {
  console.error(`${ROOT}/ does not exist - run \`next build\` first.`);
  process.exit(1);
}

walk(ROOT);

const kb = (n) => `${(n / 1024).toFixed(0)} KB`;
console.log(
  `precompressed ${files} files: ${kb(rawTotal)} raw -> ${kb(brTotal)} br / ${kb(gzTotal)} gzip`
);
