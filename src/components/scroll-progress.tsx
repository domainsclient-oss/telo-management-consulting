"use client";

import { useEffect, useRef } from "react";

/**
 * A hairline in the logo cyan at the top of the header, revealed left to right
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
      bar.style.transform = `scaleX(${progress})`;
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
    <div aria-hidden="true" className="h-0.5">
      <div
        ref={barRef}
        className="h-full origin-left bg-brand-cyan"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
