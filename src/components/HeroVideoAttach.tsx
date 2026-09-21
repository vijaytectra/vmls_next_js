"use client";

import { useEffect, useRef } from "react";

/**
 * Desktop-only: attach the hero MP4 after the visitor interacts.
 * Kept as a tiny client island so the hero poster/markup can stay on the
 * server and out of the critical JS path.
 */
export default function HeroVideoAttach() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const desktop = window.matchMedia("(min-width: 768px)").matches;
    if (!desktop) return;

    const src = "/video/vmls-hero-video.mp4";
    let idleId: number | undefined;
    let timeoutId: number | undefined;
    let started = false;

    const attach = () => {
      if (video.querySelector("source")) return;
      const source = document.createElement("source");
      source.src = src;
      source.type = "video/mp4";
      video.appendChild(source);
      video.load();
      video.play().catch(() => {
        /* autoplay may be blocked; the poster remains */
      });
    };

    const events = ["pointerdown", "pointermove", "keydown", "touchstart", "scroll", "wheel"];

    const start = () => {
      if (started) return;
      started = true;
      events.forEach((event) => window.removeEventListener(event, start));
      if (typeof window.requestIdleCallback === "function") {
        idleId = window.requestIdleCallback(attach, { timeout: 2000 });
      } else {
        timeoutId = window.setTimeout(attach, 200);
      }
    };

    events.forEach((event) =>
      window.addEventListener(event, start, { passive: true, once: true })
    );

    return () => {
      events.forEach((event) => window.removeEventListener(event, start));
      if (idleId !== undefined && typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      loop
      muted
      playsInline
      preload="none"
      aria-hidden="true"
      // Mobile never plays the MP4; keeping an empty <video> in the stacking
      // context still sits on top of the LCP poster and can make Chrome treat
      // the poster as non-contentful / covered. Desktop-only keeps the poster
      // fully exposed as the mobile LCP element.
      className="hidden md:block absolute top-0 left-0 w-full h-full md:h-[100vh] object-cover z-0"
    />
  );
}
