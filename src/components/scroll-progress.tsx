"use client";

import { useEffect, useRef } from "react";

/**
 * The cyan / red / gold strip at the top of the header, revealed left to right
 * as the page is scrolled: empty at the top, full at the bottom.
 */
export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, doc.scrollTop / max)) : 0;
      // Writing the style directly avoids a React re-render on every scroll frame.
      bar.style.clipPath = `inset(0 ${(1 - progress) * 100}% 0 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div aria-hidden="true" className="h-1">
      <div
        ref={barRef}
        className="flex h-full"
        style={{ clipPath: "inset(0 100% 0 0)" }}
      >
        <span className="flex-[3] bg-primary" />
        <span className="flex-[2] bg-brand-red" />
        <span className="flex-1 bg-brand-gold" />
      </div>
    </div>
  );
}
