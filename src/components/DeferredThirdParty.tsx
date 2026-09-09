"use client";

import { useEffect } from "react";

/**
 * Loads the NoPaperForms enquiry widget on the first sign of a real visitor,
 * instead of during page load.
 *
 * The widget sets third-party cookies and costs meaningful main-thread time
 * on a throttled phone, so it is held back until the visitor scrolls, taps
 * or presses a key. Google Tag Manager used to be deferred here too, but is
 * now loaded inline from <head> in the root layout so that
 * bounce-without-interaction sessions are counted in GA.
 *
 * Trade-off to be aware of: a session that leaves before any interaction is
 * never shown the enquiry widget.
 */

const NPF = {
  domain: "https://admissions.vmls.edu.in",
  code: "5747",
  mode: "1",
  script: "https://widgets.in8.nopaperforms.com/emwgts.js",
};

declare global {
  interface Window {
    npf_d?: string;
    npf_c?: string;
    npf_m?: string;
  }
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
    let done = false;
    const events = ["pointerdown", "keydown", "touchstart", "scroll", "wheel"];

    const start = () => {
      if (done) return;
      done = true;
      events.forEach((event) => window.removeEventListener(event, start));
      loadEnquiryWidget();
    };

    events.forEach((event) =>
      window.addEventListener(event, start, { passive: true, once: true })
    );

    return () => {
      events.forEach((event) => window.removeEventListener(event, start));
    };
  }, []);

  return null;
}
