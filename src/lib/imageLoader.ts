import { IMAGE_VARIANTS } from "@/data/image-variants";

/**
 * Serves pre-generated width variants instead of a paid image optimizer.
 *
 * This site is a static export on shared hosting: there is no /_next/image
 * endpoint to resize on the fly. `scripts/generate-image-variants.mjs` writes
 * <name>-w<width>.webp files next to each original and records them in
 * IMAGE_VARIANTS; this loader picks the smallest one that covers the width
 * Next asks for, so next/image can emit a real srcset and a phone downloads a
 * 640px file rather than the full-size original.
 *
 * Anything without variants - small icons, SVGs, anything the generator could
 * not read - falls through to the original path unchanged.
 */
export default function imageLoader({
  src,
  width,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  const widths = IMAGE_VARIANTS[src];
  if (!widths || widths.length === 0) return src;

  const best = widths.find((candidate) => candidate >= width) ?? widths[widths.length - 1];

  // The largest entry is the original's own width; use the original file.
  if (best === widths[widths.length - 1] && !widths.slice(0, -1).includes(best)) {
    return src;
  }
  return src.replace(/\.(webp|png|jpe?g)$/i, `-w${best}.webp`);
}
