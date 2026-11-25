"use client";

import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * The fixed header bar. Transparent while the page is at the top, so the dark
 * hero photo shows through; turns into frosted white with a hairline once the
 * page is scrolled. Children switch between light-on-photo and dark-on-white
 * colours with `group-data-[scrolled=true]/header:`.
 */
export function HeaderFrame({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-scrolled={scrolled}
      className={cn(
        "group/header fixed inset-x-0 top-0 z-40 border-b transition-[background-color,border-color] duration-500",
        scrolled
          ? "border-border bg-background/90 backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      {children}
    </header>
  );
}
