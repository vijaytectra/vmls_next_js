"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NPF_WIDGET_ID = "87feca6bc65be091ed018757c6c58029";
const LLM_ADMISSIONS_URL = "https://vmls.edu.in/llm/";

export default function FloatingActions() {
  const pathname = usePathname();
  const isBlogPage = pathname === "/blogs" || pathname?.startsWith("/blogs/");

  useEffect(() => {
    const appended: HTMLElement[] = [];
    const timers: number[] = [];
    let idleIds: number[] = [];

    const loadScript = (src: string, onload?: () => void) => {
      if (document.querySelector(`script[src="${src}"]`)) {
        onload?.();
        return;
      }
      const s = document.createElement("script");
      s.src = src;
      s.async = true;
      if (onload) s.onload = onload;
      document.body.appendChild(s);
      appended.push(s);
    };

    const whenIdle = (fn: () => void, delayMs: number) => {
      const timer = window.setTimeout(() => {
        if (typeof window.requestIdleCallback === "function") {
          const id = window.requestIdleCallback(() => fn(), { timeout: 2500 });
          idleIds.push(id);
        } else {
          fn();
        }
      }, delayMs);
      timers.push(timer);
    };

    const initNpfPopup = () => {
      loadScript("https://in8cdn.npfs.co/js/widget/npfwpopup.js", () => {
        const win = window as Window & {
          NpfWidgetsInit?: new (config: Record<string, string>) => void;
        };
        if (win.NpfWidgetsInit) {
          new win.NpfWidgetsInit({
            widgetId: NPF_WIDGET_ID,
            baseurl: "widgets.in8.nopaperforms.com",
            formTitle: "Enquiry Form",
            titleColor: "#FF0033",
            backgroundColor: "#ddd",
            iframeHeight: "500px",
            buttonbgColor: "#4c79dc",
            buttonTextColor: "#FFF",
          });
        }
      });
    };

    const initAmbassador = () => {
      loadScript(
        "https://universitywidgets.blob.core.windows.net/widgetstore/vmls-widget.js"
      );
    };

    const initChatbot = () => {
      if (document.querySelector(".npf_chatbots")) return;
      const chatDiv = document.createElement("div");
      chatDiv.className = "npf_chatbots";
      chatDiv.setAttribute("data-w", "1189388fc18c4ac0952bc3816b615524");
      chatDiv.style.display = "none";
      document.body.appendChild(chatDiv);
      appended.push(chatDiv);

      loadScript(
        "https://chatbot.in8.nopaperforms.com/en-gb/backend/bots/niaachtbtscpt.js/5747642c1669bd257/1189388fc18c4ac0952bc3816b615524"
      );
    };

    // Defer heavy third-party widgets so first paint stays fast
    whenIdle(initAmbassador, 2200);
    whenIdle(initNpfPopup, 4000);
    whenIdle(initChatbot, 9000);

    // If user hits Enquire early, load NPF immediately
    const enquireSelector = `.npfWidget-${NPF_WIDGET_ID}`;
    const onEnquireIntent = () => initNpfPopup();
    const enquireNodes = () =>
      Array.from(document.querySelectorAll(enquireSelector));
    enquireNodes().forEach((el) => {
      el.addEventListener("pointerdown", onEnquireIntent, { once: true });
      el.addEventListener("focus", onEnquireIntent, { once: true });
    });

    // Student Ambassador widget ships with conflicting left+right inline styles
    // and a header that can run under the close (X) control.
    const polishAmbassador = () => {
      const nodes = document.body.querySelectorAll<HTMLElement>("div");
      nodes.forEach((el) => {
        const text = el.textContent || "";
        if (!/Chat with a Student\s*Ambassador/.test(text)) return;
        const style = window.getComputedStyle(el);
        if (style.position !== "fixed") return;

        const isExpanded = text.includes("Want to know more about campus life");

        const isSm = window.matchMedia("(min-width: 640px)").matches;
        // Position Ambassador chip right next to WhatsApp button at the bottom
        el.style.setProperty(
          "bottom",
          isExpanded
            ? "max(1.25rem, env(safe-area-inset-bottom))"
            : isSm
            ? "calc(max(1.25rem, env(safe-area-inset-bottom)) + 6px)"
            : "calc(max(1.25rem, env(safe-area-inset-bottom)) + 2px)",
          "important"
        );
        el.style.setProperty(
          "left",
          isExpanded
            ? "max(1rem, env(safe-area-inset-left))"
            : isSm
            ? "calc(max(1rem, env(safe-area-inset-left)) + 4.125rem)"
            : "calc(max(1rem, env(safe-area-inset-left)) + 3.625rem)",
          "important"
        );
        el.style.setProperty("right", "auto", "important");
        el.style.setProperty("z-index", "1900", "important");
        el.style.setProperty("box-sizing", "border-box", "important");

        // Avatar: crop face properly in the circle (both collapsed + expanded)
        el.querySelectorAll("img").forEach((img) => {
          const image = img as HTMLImageElement;
          image.style.setProperty("object-fit", "cover", "important");
          image.style.setProperty("object-position", "center 18%", "important");
          image.style.setProperty("border-radius", "50%", "important");
          image.style.setProperty("flex-shrink", "0", "important");
          image.style.setProperty("display", "block", "important");
          image.style.setProperty("background", "#0b2a36", "important");
          if (!isExpanded) {
            image.style.setProperty("width", "36px", "important");
            image.style.setProperty("height", "36px", "important");
            image.style.setProperty("border", "1.5px solid rgba(255,255,255,0.92)", "important");
          } else {
            image.style.setProperty("width", "48px", "important");
            image.style.setProperty("height", "48px", "important");
          }
        });

        if (!isExpanded) {
          // Collapsed pill — hug content, label on exactly two lines
          el.classList.add("vmls-ambassador-pill");
          el.classList.remove("vmls-ambassador-card");
          el.style.setProperty("width", "fit-content", "important");
          el.style.setProperty("max-width", "calc(100vw - 5.5rem)", "important");
          el.style.setProperty("min-width", "0", "important");
          el.style.setProperty("min-height", "0", "important");
          el.style.setProperty("height", "auto", "important");
          el.style.setProperty("padding", "4px 10px 4px 4px", "important");
          el.style.setProperty("gap", "0", "important");
          el.style.setProperty("display", "inline-flex", "important");
          el.style.setProperty("align-items", "center", "important");
          el.style.setProperty("justify-content", "flex-start", "important");
          el.style.setProperty("border-radius", "999px", "important");
          el.style.setProperty("border", "none", "important");
          el.style.setProperty("background-color", "#06202B", "important");
          el.style.setProperty(
            "box-shadow",
            "0 10px 28px rgba(6, 32, 43, 0.28)",
            "important"
          );
          el.style.setProperty("overflow", "visible", "important");
          el.style.setProperty("cursor", "pointer", "important");

          el.querySelectorAll("button").forEach((btn) => {
            const b = btn as HTMLElement;
            if (!/Chat with a Student\s*Ambassador/.test(b.textContent || "")) return;
            // Force a clean two-line label (no awkward third wrap / trailing gap)
            if (b.dataset.vmlsLabel !== "2line") {
              b.textContent = "Chat with a Student\nAmbassador";
              b.dataset.vmlsLabel = "2line";
            }
            b.style.setProperty("background", "transparent", "important");
            b.style.setProperty("background-color", "transparent", "important");
            b.style.setProperty("color", "#ffffff", "important");
            b.style.setProperty("font-size", "12.5px", "important");
            b.style.setProperty("font-weight", "600", "important");
            b.style.setProperty("line-height", "1.2", "important");
            b.style.setProperty("letter-spacing", "0.01em", "important");
            b.style.setProperty("padding", "0", "important");
            b.style.setProperty("margin", "0", "important");
            b.style.setProperty("border", "none", "important");
            b.style.setProperty("border-radius", "0", "important");
            b.style.setProperty("text-align", "left", "important");
            b.style.setProperty("white-space", "pre-line", "important");
            b.style.setProperty("width", "max-content", "important");
            b.style.setProperty("max-width", "none", "important");
            b.style.setProperty("min-width", "0", "important");
            b.style.setProperty("flex", "0 0 auto", "important");
            b.style.setProperty("cursor", "pointer", "important");
          });

          // Inner flex row (avatar + button) — size to content, no stretch gap
          Array.from(el.children).forEach((child) => {
            if (!(child instanceof HTMLElement)) return;
            const cs = window.getComputedStyle(child);
            if (cs.display === "flex" || child.querySelector("img")) {
              child.style.setProperty("display", "inline-flex", "important");
              child.style.setProperty("align-items", "center", "important");
              child.style.setProperty("gap", "8px", "important");
              child.style.setProperty("padding", "0", "important");
              child.style.setProperty("margin", "0", "important");
              child.style.setProperty("width", "fit-content", "important");
              child.style.setProperty("max-width", "none", "important");
              child.style.setProperty("flex", "0 0 auto", "important");
            }
          });
          return;
        }

        // Expanded card — professional spacing, clear of close button
        el.classList.add("vmls-ambassador-card");
        el.classList.remove("vmls-ambassador-pill");
        el.style.setProperty("width", "min(300px, calc(100vw - 5.5rem))", "important");
        el.style.setProperty("max-width", "300px", "important");
        el.style.setProperty("padding", "18px 44px 18px 18px", "important");
        el.style.setProperty("border-radius", "16px", "important");
        el.style.setProperty("border", "1.5px solid #06202B", "important");
        el.style.setProperty(
          "box-shadow",
          "0 14px 36px rgba(6, 32, 43, 0.18)",
          "important"
        );
        el.style.setProperty("background-color", "#ffffff", "important");

        // Close control: keep top-right, larger hit area, never under text
        Array.from(el.children).forEach((child) => {
          if (!(child instanceof HTMLElement)) return;
          const cs = window.getComputedStyle(child);
          if (cs.position !== "absolute") return;
          child.style.setProperty("right", "8px", "important");
          child.style.setProperty("top", "8px", "important");
          child.style.setProperty("left", "auto", "important");
          child.style.setProperty("z-index", "5", "important");
          child.style.setProperty("width", "32px", "important");
          child.style.setProperty("height", "32px", "important");
          child.style.setProperty("display", "flex", "important");
          child.style.setProperty("align-items", "center", "important");
          child.style.setProperty("justify-content", "center", "important");
          child.style.setProperty("border-radius", "999px", "important");
          child.style.setProperty("background", "rgba(7, 122, 125, 0.08)", "important");
          child.style.setProperty("color", "#077A7D", "important");
          child.style.setProperty("font-size", "18px", "important");
          child.style.setProperty("line-height", "1", "important");
          child.style.setProperty("cursor", "pointer", "important");
        });

        // Name / title must not spill into the close button column
        el.querySelectorAll("span").forEach((span) => {
          const s = span as HTMLElement;
          const maxW = s.style.maxWidth || window.getComputedStyle(s).maxWidth;
          if (!maxW || maxW === "none") return;
          s.style.setProperty("max-width", "160px", "important");
          s.style.setProperty("padding-right", "4px", "important");
        });

        // CTA button polish
        el.querySelectorAll("button").forEach((btn) => {
          const b = btn as HTMLElement;
          if (!b.textContent?.includes("Chat with a Student Ambassador")) return;
          b.style.setProperty("border-radius", "999px", "important");
          b.style.setProperty("padding", "12px 16px", "important");
          b.style.setProperty("font-weight", "600", "important");
          b.style.setProperty("letter-spacing", "0.01em", "important");
          b.style.setProperty("margin-top", "0.85rem", "important");
          b.style.setProperty("line-height", "1.25", "important");
        });
      });
    };
    const ambassadorObserver = new MutationObserver(polishAmbassador);
    ambassadorObserver.observe(document.body, { childList: true, subtree: true });
    const ambassadorTimers = [500, 1500, 3000, 6000, 10000].map((ms) =>
      window.setTimeout(polishAmbassador, ms)
    );
    window.addEventListener("resize", polishAmbassador);

    return () => {
      appended.forEach((el) => {
        if (el.parentNode) el.parentNode.removeChild(el);
      });
      timers.forEach((id) => window.clearTimeout(id));
      idleIds.forEach((id) => {
        if (typeof window.cancelIdleCallback === "function") {
          window.cancelIdleCallback(id);
        }
      });
      ambassadorObserver.disconnect();
      ambassadorTimers.forEach((id) => window.clearTimeout(id));
      window.removeEventListener("resize", polishAmbassador);
      enquireNodes().forEach((el) => {
        el.removeEventListener("pointerdown", onEnquireIntent);
        el.removeEventListener("focus", onEnquireIntent);
      });
    };
  }, []);

  return (
    <>
      {/* Left: Chat with Student — vertical edge tab (lower on phones to clear header) */}
      <div className="fixed left-0 top-[min(42vh,320px)] sm:top-[280px] md:top-1/2 z-[2000] md:-translate-y-1/2">
        <Link
          href="/chat-with-student"
          className="vertical-edge-btn vertical-edge-btn--chat font-inter"
        >
          Chat with a Student
        </Link>
      </div>

      {/* Right: Admissions / Apply / Enquire — stacked vertical tabs */}
      <div className="fixed right-0 top-[min(42vh,320px)] sm:top-[280px] md:top-1/2 z-[2000] flex md:-translate-y-1/2 flex-col gap-0.5 md:gap-1">
        {isBlogPage && (
          <Link
            href={LLM_ADMISSIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            title="LL.M Application Form 2025"
            className="vertical-edge-btn vertical-edge-btn--admissions font-inter"
          >
            Admissions Open
          </Link>
        )}

        <Link
          href="https://admissions.vmls.edu.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="vertical-edge-btn vertical-edge-btn--apply font-inter"
        >
          Apply Now!
        </Link>

        <span
          className={`vertical-edge-btn vertical-edge-btn--enquire npfWidgetButton npfWidget-${NPF_WIDGET_ID} font-inter`}
          role="button"
          tabIndex={0}
        >
          Enquire Now!
        </span>
      </div>

      {/* Bottom Left: WhatsApp — sits under ambassador chip, clear of footer links */}
      <a
        href="https://wa.me/917358201234"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] left-[max(1rem,env(safe-area-inset-left))] z-[2000] flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_6px_16px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-110"
      >
        <svg className="h-7 w-7 sm:h-9 sm:w-9" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </>
  );
}
