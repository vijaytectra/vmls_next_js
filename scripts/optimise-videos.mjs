// Re-encodes the site's videos and extracts a poster frame for each.
//
// The homepage was pulling roughly 62 MB of video (the hero alone was 28 MB)
// and the hero was the Largest Contentful Paint element. Posters let the page
// paint immediately; the smaller files make the video itself affordable.
//
// Originals are moved to public/videos/original/ rather than overwritten.
//
//   node scripts/optimise-videos.mjs [--dry]
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import ffmpeg from "ffmpeg-static";

const DRY = process.argv.includes("--dry");
// Outside public/ so the originals are never copied into the export.
const ARCHIVE = "video-originals";

// Hero plays full-bleed, so it keeps more resolution than the gallery tiles.
const PROFILES = {
  hero: { width: 1600, crf: 30, audio: false },
  gallery: { width: 1280, crf: 32, audio: false },
};

const targets = [
  { file: "public/videos/vmls-hero-video.mp4", profile: "hero" },
  { file: "public/video/vmls-hero-video.mp4", profile: "hero" },
  { file: "public/video/vmls-hero-video-mobile.mp4", profile: "hero" },
  ...["class", "atrium", "corridor", "library", "moot-court", "food", "seminar1", "hostel"].map(
    (name) => ({ file: `public/videos/${name}.mp4`, profile: "gallery" })
  ),
];

const mb = (bytes) => (bytes / 1048576).toFixed(1);
const run = (args) => execFileSync(ffmpeg, args, { stdio: "pipe" });

fs.mkdirSync(ARCHIVE, { recursive: true });

let before = 0;
let after = 0;

for (const { file, profile } of targets) {
  if (!fs.existsSync(file)) {
    console.log(`  ! missing: ${file}`);
    continue;
  }
  const { width, crf } = PROFILES[profile];
  const originalSize = fs.statSync(file).size;
  before += originalSize;

  const poster = file.replace(/\.mp4$/i, "-poster.webp");
  const temp = file.replace(/\.mp4$/i, ".opt.mp4");

  if (DRY) {
    console.log(`${path.basename(file).padEnd(28)} ${mb(originalSize)} MB -> (dry run)`);
    continue;
  }

  // Poster: first frame, same treatment the video gets on screen.
  run(["-y", "-i", file, "-vf", `scale=${width}:-2`, "-frames:v", "1", "-c:v", "libwebp", "-quality", "80", poster]);

  // Video: H.264 baseline-friendly, no audio track (all of these are muted
  // decoration), faststart so playback can begin before the file is complete.
  run([
    "-y", "-i", file,
    "-vf", `scale=${width}:-2`,
    "-c:v", "libx264", "-crf", String(crf), "-preset", "slow",
    "-profile:v", "high", "-pix_fmt", "yuv420p",
    "-movflags", "+faststart",
    "-an",
    temp,
  ]);

  const newSize = fs.statSync(temp).size;
  if (newSize >= originalSize) {
    fs.unlinkSync(temp);
    after += originalSize;
    console.log(`${path.basename(file).padEnd(28)} ${mb(originalSize)} MB -> kept original (re-encode was larger)`);
    continue;
  }

  fs.renameSync(file, path.join(ARCHIVE, path.basename(file)));
  fs.renameSync(temp, file);
  after += newSize;
  console.log(
    `${path.basename(file).padEnd(28)} ${mb(originalSize)} MB -> ${mb(newSize)} MB   poster ${(fs.statSync(poster).size / 1024).toFixed(0)} KB`
  );
}

if (!DRY) {
  console.log(`\ntotal video: ${mb(before)} MB -> ${mb(after)} MB (originals kept in ${ARCHIVE})`);
}
