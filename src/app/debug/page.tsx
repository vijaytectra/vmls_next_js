import Image from 'next/image';
import fs from 'fs';
import path from 'path';

export default function DebugImagesPage() {
  const images = [
    "Frame53108.webp",
    "Frame53119.webp",
    "coj1.webp",
    "frame-1@3x.webp",
    "frame-531259@2x.webp",
    "il3.webp",
    "ml-1.webp",
    "news5.webp",
    "tl0.webp",
    "tl1.webp"
  ];

  return (
    <div className="p-10 grid grid-cols-2 gap-10 bg-gray-900 min-h-screen">
      {images.map(img => (
        <div key={img} className="space-y-4 bg-white p-4 rounded-xl">
          <h2 className="text-xl font-bold">{img}</h2>
          <div className="relative aspect-video w-full">
            <Image 
              src={`/images/vmls/${img}`} 
              alt={img} 
              fill 
              className="object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
