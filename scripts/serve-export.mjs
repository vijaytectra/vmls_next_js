// Serves ./out the way Apache will, so the deployable artifact can be tested
// before it is uploaded: the 301 rules from out/.htaccess first, then the
// file, then file + ".html", then 404.html.
//
// This is a test harness, not a production server.
//
//   node scripts/serve-export.mjs [port]
import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import zlib from "node:zlib";

const ROOT = "out";
const PORT = Number(process.argv[2] ?? 4300);

// Parse the generated rules: RewriteRule "^pattern$" "/destination" [R=301,L,NE]
const htaccess = fs.readFileSync(path.join(ROOT, ".htaccess"), "utf8");
const redirects = [...htaccess.matchAll(/RewriteRule\s+"([^"]+)"\s+"([^"]+)"\s+\[R=(\d+)/g)].map(
  (m) => ({ re: new RegExp(m[1]), destination: m[2], status: Number(m[3]) })
);

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".xml": "application/xml",
  ".txt": "text/plain",
  ".webp": "image/webp",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".pdf": "application/pdf",
  ".woff2": "font/woff2",
  ".mp4": "video/mp4",
};

// Apache compresses these via mod_deflate (see the .htaccess this reads), so
// the harness must too - otherwise every measurement is against a payload
// several times larger than the one cPanel will actually serve.
const COMPRESSIBLE =
  /^(text\/|application\/(javascript|json|xml)|image\/svg)/;

const send = (res, status, body, type = "text/plain", req) => {
  const headers = { "Content-Type": type };
  const accepts = String(req?.headers["accept-encoding"] ?? "");
  if (COMPRESSIBLE.test(type) && /\bgzip\b/.test(accepts) && body.length > 512) {
    const gzipped = zlib.gzipSync(body);
    headers["Content-Encoding"] = "gzip";
    headers["Vary"] = "Accept-Encoding";
    res.writeHead(status, headers);
    return res.end(gzipped);
  }
  res.writeHead(status, headers);
  res.end(body);
};

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  const pathname = decodeURIComponent(url.pathname);
  const relative = pathname.replace(/^\//, "");

  for (const rule of redirects) {
    if (rule.re.test(relative)) {
      res.writeHead(rule.status, { Location: rule.destination });
      return res.end();
    }
  }

  // Apache DirectorySlash equivalent: /x/ -> /x
  if (relative.length > 1 && relative.endsWith("/")) {
    res.writeHead(301, { Location: `/${relative.slice(0, -1)}` });
    return res.end();
  }

  const candidates = [
    path.join(ROOT, relative),
    path.join(ROOT, `${relative}.html`),
    path.join(ROOT, relative, "index.html"),
  ];
  for (const file of candidates) {
    if (fs.existsSync(file) && fs.statSync(file).isFile()) {
      return send(res, 200, fs.readFileSync(file), TYPES[path.extname(file)] ?? "application/octet-stream", req);
    }
  }
  if (!relative) {
    const index = path.join(ROOT, "index.html");
    if (fs.existsSync(index))
      return send(res, 200, fs.readFileSync(index), TYPES[".html"], req);
  }
  const notFound = path.join(ROOT, "404.html");
  return send(
    res,
    404,
    fs.existsSync(notFound) ? fs.readFileSync(notFound) : "Not found",
    TYPES[".html"],
    req
  );
});

server.listen(PORT, () =>
  console.log(`serving ./out with ${redirects.length} .htaccess redirects on http://localhost:${PORT}`)
);
