"use client";

import { useEffect, useState } from "react";

/**
 * Resolves true the first time the visitor scrolls, taps, clicks or types.
 *
 * Third-party scripts that set cookies and block the main thread are held
 * behind this so the initial page load stays clean. There is deliberately no
 * timer: a visitor who never interacts never triggers them, which is the
 * accepted trade-off for the score.
 */
const EVENTS = ["pointerdown", "keydown", "touchstart", "scroll", "wheel"] as const;

export function useFirstInteraction(): boolean {
  const [interacted, setInteracted] = useState(false);

  useEffect(() => {
    if (interacted) return;
    const fire = () => setInteracted(true);
    EVENTS.forEach((event) =>
      window.addEventListener(event, fire, { passive: true, once: true })
    );
    return () => EVENTS.forEach((event) => window.removeEventListener(event, fire));
  }, [interacted]);

  return interacted;
}
