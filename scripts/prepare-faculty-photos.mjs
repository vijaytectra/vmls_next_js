// Converts newly supplied faculty photos into the format the rest of the
// site uses: webp, ~1200px on the long edge, portrait crop so they fill the
// same card shape as every other faculty photo.
//
// Source files stay in place; the generated webp is what the site references.
//
// Run: node scripts/prepare-faculty-photos.mjs
import fs from "node:fs";
import sharp from "sharp";

const PHOTOS = [
  {
    source: "public/images/faculty/Mr._Krishna_Kishore_Padala.JPG",
    output: "public/images/faculty/krishna-kishore-padala.webp",
    // Landscape original; the subject is centred, so a centre crop works.
    position: "centre",
  },
  {
    source: "public/images/faculty/sanga_mithra.JPG",
    output: "public/images/faculty/gnana-sanga-mithra.webp",
    // Already portrait; bias to the top so the face is never cut.
    position: "top",
  },
];

const WIDTH = 1200;
const HEIGHT = 1500; // 4:5, the shape the faculty cards crop to

for (const photo of PHOTOS) {
  if (!fs.existsSync(photo.source)) {
    console.log(`  ! missing: ${photo.source}`);
    continue;
  }
  const before = fs.statSync(photo.source).size;
  await sharp(photo.source)
    .rotate() // honour EXIF orientation
    .resize(WIDTH, HEIGHT, { fit: "cover", position: photo.position })
    .webp({ quality: 82 })
    .toFile(photo.output);
  const after = fs.statSync(photo.output).size;
  console.log(
    `${photo.output.split("/").pop().padEnd(34)} ${(before / 1048576).toFixed(1)} MB -> ${(after / 1024).toFixed(0)} KB`
  );
}
