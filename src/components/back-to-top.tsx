"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

/** Floating button that appears once the page is scrolled down and returns to the top. */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      // Smoothness comes from `scroll-behavior` in globals.css, which is
      // switched off for people who prefer reduced motion.
      onClick={() => window.scrollTo({ top: 0 })}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={cn(
        "fixed right-4 bottom-4 z-30 flex size-12 items-center justify-center rounded-full border border-white/15 bg-primary text-white shadow-[0_12px_28px_-12px_rgba(11,34,57,0.6)] transition-[opacity,transform,background-color,color] duration-300 hover:bg-brand-cyan hover:text-primary sm:right-6 sm:bottom-6",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <ArrowUp className="size-5" strokeWidth={1.75} aria-hidden="true" />
    </button>
  );
}
