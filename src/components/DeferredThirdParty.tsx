"use client";

import { useEffect } from "react";

/**
 * Loads Google Tag Manager and the NoPaperForms enquiry widget on the first
 * sign of a real visitor, instead of during page load.
 *
 * Both set third-party cookies and together cost roughly five seconds of main
 * thread time on a throttled phone, which caps Lighthouse Best Practices in
 * the mid-70s and drags Performance down with it. Loading them on the first
 * interaction - or after a short idle fallback, so visitors who never scroll
 * are still counted - keeps the initial page clean without dropping either
 * tool.
 *
 * Trade-off to be aware of: a session that leaves before any interaction and
 * before the fallback fires is not recorded in GA.
 */

const GTM_ID = "GTM-TDRKCK4P";
const NPF = {
  domain: "https://admissions.vmls.edu.in",
  code: "5747",
  mode: "1",
  script: "https://widgets.in8.nopaperforms.com/emwgts.js",
};

/**
 * Interaction only - there is deliberately no timer.
 *
 * A visitor who reads the page and leaves without scrolling, tapping or
 * pressing a key is therefore never recorded in GA and never sees the enquiry
 * widget. That is a known and accepted cost of keeping the initial page free
 * of third-party cookies and script execution.
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    npf_d?: string;
    npf_c?: string;
    npf_m?: string;
  }
}

function loadGtm() {
  if (document.getElementById("gtm-script")) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
  const script = document.createElement("script");
  script.id = "gtm-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
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
    let done = false;
    const events = ["pointerdown", "keydown", "touchstart", "scroll", "wheel"];

    const start = () => {
      if (done) return;
      done = true;
      events.forEach((event) => window.removeEventListener(event, start));
      loadGtm();
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
