// Reads the real pixel dimensions of every og:image referenced by the SEO
// registry, so og:image:width / og:image:height are not asserted blindly.
import fs from "node:fs";

function dimensions(buf) {
  // PNG
  if (buf.slice(0, 8).toString("hex") === "89504e470d0a1a0a")
    return [buf.readUInt32BE(16), buf.readUInt32BE(20)];
  // WebP (VP8 / VP8L / VP8X)
  if (buf.slice(0, 4).toString() === "RIFF" && buf.slice(8, 12).toString() === "WEBP") {
    const fmt = buf.slice(12, 16).toString();
    if (fmt === "VP8 ")
      return [buf.readUInt16LE(26) & 0x3fff, buf.readUInt16LE(28) & 0x3fff];
    if (fmt === "VP8L") {
      const b = buf.readUInt32LE(21);
      return [(b & 0x3fff) + 1, ((b >> 14) & 0x3fff) + 1];
    }
    if (fmt === "VP8X")
      return [
        1 + (buf.readUIntLE(24, 3) & 0xffffff),
        1 + (buf.readUIntLE(27, 3) & 0xffffff),
      ];
  }
  // JPEG
  if (buf[0] === 0xff && buf[1] === 0xd8) {
    let i = 2;
    while (i < buf.length) {
      if (buf[i] !== 0xff) { i++; continue; }
      const marker = buf[i + 1];
      const len = buf.readUInt16BE(i + 2);
      if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker))
        return [buf.readUInt16BE(i + 7), buf.readUInt16BE(i + 5)];
      i += 2 + len;
    }
  }
  return null;
}

const src = fs.readFileSync("src/lib/seo-pages.ts", "utf8");
const images = [...new Set([...src.matchAll(/image: "(\/images\/[^"]+)"/g)].map((m) => m[1]))];
const campus = (src.match(/const CAMPUS = "([^"]+)"/) || [])[1];
if (campus) images.push(campus);

let ok = 0;
const problems = [];
for (const img of [...new Set(images)]) {
  const file = `public${img}`;
  if (!fs.existsSync(file)) {
    problems.push(`MISSING FILE  ${img}`);
    continue;
  }
  const dim = dimensions(fs.readFileSync(file));
  if (!dim) {
    problems.push(`UNREADABLE    ${img}`);
    continue;
  }
  const [w, h] = dim;
  const ratio = w / h;
  if (w < 600 || h < 315) problems.push(`TOO SMALL     ${img} ${w}x${h}`);
  else if (ratio < 1.5 || ratio > 2.1)
    problems.push(`WRONG RATIO   ${img} ${w}x${h} (${ratio.toFixed(2)}:1, want ~1.91:1)`);
  else ok++;
}

console.log(`${ok}/${images.length} og:images are >=600x315 and near 1.91:1\n`);
problems.forEach((p) => console.log(`  ${p}`));
