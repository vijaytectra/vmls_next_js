"use client";

import { useEffect } from "react";
import { GTM_ID } from "@/lib/seo";

/**
 * Defers non-critical third parties until after the first paint / LCP window.
 *
 * GTM: dataLayer is primed in <head>. The container (and GA4/Clarity tags
 * inside it) loads on first interaction OR ~5s after load — whichever comes
 * first. Queued dataLayer events flush when gtm.js arrives, so page views are
 * kept for normal sessions without blocking mobile LCP/TBT.
 *
 * NoPaperForms enquiry widget: interaction-only (unchanged trade-off).
 */

const NPF = {
  domain: "https://admissions.vmls.edu.in",
  code: "5747",
  mode: "1",
  script: "https://widgets.in8.nopaperforms.com/emwgts.js",
};

const GTM_SRC = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
const INTERACTION_EVENTS = ["pointerdown", "keydown", "touchstart", "scroll", "wheel"] as const;
/** Wall-clock fallback so bounce-without-interaction sessions still get GA. */
const GTM_FALLBACK_MS = 5000;

declare global {
  interface Window {
    npf_d?: string;
    npf_c?: string;
    npf_m?: string;
    __vmlsGtmLoading?: boolean;
  }
}

function loadGTM() {
  if (typeof window === "undefined") return;
  if (window.__vmlsGtmLoading) return;
  if (document.querySelector(`script[src="${GTM_SRC}"]`)) return;
  window.__vmlsGtmLoading = true;
  const script = document.createElement("script");
  script.async = true;
  script.src = GTM_SRC;
  document.head.appendChild(script);
}

function loadEnquiryWidget() {
  if (document.querySelector(`script[src="${NPF.script}"]`)) return;
  window.npf_d = NPF.domain;
  window.npf_c = NPF.code;
  window.npf_m = NPF.mode;
  const script = document.createElement("script");
  script.async = true;
  script.defer = true;
  script.src = NPF.script;
  document.body.appendChild(script);
}

export default function DeferredThirdParty() {
  useEffect(() => {
    let gtmDone = false;
    let npfDone = false;
    let fallbackTimer: number | undefined;
    let idleId: number | undefined;

    const armGtm = () => {
      if (gtmDone) return;
      gtmDone = true;
      INTERACTION_EVENTS.forEach((event) =>
        window.removeEventListener(event, onInteract)
      );
      if (fallbackTimer !== undefined) window.clearTimeout(fallbackTimer);
      if (idleId !== undefined && typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idleId);
      }
      loadGTM();
    };

    const onInteract = () => {
      armGtm();
      if (!npfDone) {
        npfDone = true;
        loadEnquiryWidget();
      }
    };

    INTERACTION_EVENTS.forEach((event) =>
      window.addEventListener(event, onInteract, { passive: true, once: true })
    );

    const scheduleFallback = () => {
      const start = () => {
        if (typeof window.requestIdleCallback === "function") {
          idleId = window.requestIdleCallback(() => armGtm(), { timeout: 1500 });
        } else {
          armGtm();
        }
      };
      // After load, wait so LCP/TBT settle, then bring GTM in for quiet sessions.
      fallbackTimer = window.setTimeout(start, GTM_FALLBACK_MS);
    };

    if (document.readyState === "complete") {
      scheduleFallback();
    } else {
      window.addEventListener("load", scheduleFallback, { once: true });
    }

    return () => {
      INTERACTION_EVENTS.forEach((event) =>
        window.removeEventListener(event, onInteract)
      );
      if (fallbackTimer !== undefined) window.clearTimeout(fallbackTimer);
      if (idleId !== undefined && typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idleId);
      }
    };
  }, []);

  return null;
}
