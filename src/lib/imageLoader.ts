/**
 * Bypass Vercel’s paid `/_next/image` optimizer.
 * Always return the public asset URL unchanged so images work on hobby plans.
 */
export default function imageLoader({ src }: { src: string }) {
  return src;
}
