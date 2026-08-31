import Image from "next/image";

/**
 * Architectural line-art watermark — matches About VMRF stroke weight.
 * Uses intrinsic sizing (not % of section height) so line thickness stays
 * consistent across pages of different content heights.
 */
export default function ArchitecturalSketch() {
  return (
    <div className="pointer-events-none absolute bottom-0 left-0 w-full max-w-2xl md:max-w-3xl lg:max-w-4xl opacity-40">
      <Image
        src="/images/vmrf/bg-chancellor.png"
        alt=""
        width={792}
        height={437}
        sizes="(max-width: 1024px) 90vw, 56rem"
        className="w-full h-auto select-none"
        unoptimized
      />
    </div>
  );
}
