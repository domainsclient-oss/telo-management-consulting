"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

export type Client = { image: StaticImageData; alt: string; name: string };

/** Seconds for the row to drift through one full set of cards. */
const LOOP_SECONDS = 48;
/** How long the drift stays paused after someone scrolls or uses an arrow. */
const PAUSE_MS = 2500;

const arrowButton =
  "flex size-12 cursor-pointer items-center justify-center rounded-full border border-foreground/20 text-foreground transition-colors duration-300 hover:border-primary hover:bg-primary hover:text-white active:translate-y-px";

/**
 * Client cards in one row that drifts slowly to the left, with previous and
 * next arrows beside the heading.
 *
 * The list is rendered twice so the row loops without a seam; the second copy
 * is hidden from assistive tech. The drift pauses on hover, on keyboard focus,
 * and for a moment after an arrow press, a swipe or a wheel scroll. People who
 * prefer reduced motion get no drift: just the arrows and a swipeable row.
 *
 * `children` is the section heading, shown to the left of the arrows.
 */
export function ClientCarousel({
  clients,
  children,
}: {
  clients: Client[];
  children: ReactNode;
}) {
  const scroller = useRef<HTMLDivElement>(null);
  const firstList = useRef<HTMLUListElement>(null);
  const pausedUntil = useRef(0);

  /** Width of one full set of cards: the distance after which the row repeats. */
  const loopWidth = () => firstList.current?.offsetWidth ?? 0;

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let last = performance.now();
    let position = el.scrollLeft;
    let wasPaused = false;

    const tick = (now: number) => {
      const elapsed = Math.min(now - last, 100);
      last = now;
      const paused =
        el.matches(":hover, :focus-within") || now < pausedUntil.current;
      const loop = loopWidth();

      if (!paused && loop > 0) {
        // Pick up from wherever a swipe or an arrow left the row.
        if (wasPaused) position = el.scrollLeft;
        position += (loop / LOOP_SECONDS) * (elapsed / 1000);
        if (position >= loop) position -= loop;
        el.scrollLeft = position;
      }
      wasPaused = paused;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    const pause = () => {
      pausedUntil.current = performance.now() + PAUSE_MS;
    };
    el.addEventListener("pointerdown", pause, { passive: true });
    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("wheel", pause, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("pointerdown", pause);
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("wheel", pause);
    };
  }, []);

  /** Move one card left (-1) or right (1). */
  const step = (direction: -1 | 1) => {
    const el = scroller.current;
    const card = firstList.current?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;

    const loop = loopWidth();
    const gap = parseFloat(getComputedStyle(firstList.current!).columnGap) || 0;
    const distance = card.offsetWidth + gap;

    // Both copies look the same, so jumping by one loop is invisible. Do it
    // first when needed, so there is always room to move in that direction.
    if (direction === -1 && el.scrollLeft < distance) el.scrollLeft += loop;
    if (direction === 1 && el.scrollLeft >= loop) el.scrollLeft -= loop;

    pausedUntil.current = performance.now() + PAUSE_MS;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    el.scrollBy({
      left: direction * distance,
      behavior: reduce ? "auto" : "smooth",
    });
  };

  return (
    <>
      <div className="mx-auto w-full max-w-[84rem] px-6 sm:px-10">
        <Reveal className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>{children}</div>
          <div className="flex shrink-0 gap-3">
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous clients"
              className={arrowButton}
            >
              <ArrowLeft className="size-5" strokeWidth={1.75} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next clients"
              className={arrowButton}
            >
              <ArrowRight className="size-5" strokeWidth={1.75} aria-hidden="true" />
            </button>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-12 lg:mt-16">
        <div
          ref={scroller}
          className="flex overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              ref={copy === 0 ? firstList : undefined}
              aria-hidden={copy === 1 ? true : undefined}
              className="flex shrink-0 gap-5 pr-5 sm:gap-6 sm:pr-6"
            >
              {clients.map((client) => (
                <li
                  key={client.name}
                  className="w-[16.5rem] shrink-0 sm:w-[22rem] lg:w-[26rem]"
                >
                  <figure className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-primary text-white sm:aspect-[4/3]">
                    <Image
                      src={client.image}
                      alt={copy === 0 ? client.alt : ""}
                      fill
                      placeholder="blur"
                      sizes="(min-width: 1024px) 416px, (min-width: 640px) 352px, 264px"
                      className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,34,57,0)_35%,rgba(11,34,57,0.82)_76%,rgba(11,34,57,0.96)_100%)]"
                    />
                    <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-3 p-5 font-heading text-lg leading-snug font-semibold tracking-[-0.012em] sm:p-6 sm:text-xl">
                      <span
                        aria-hidden="true"
                        className="h-px w-6 shrink-0 bg-brand-cyan"
                      />
                      {client.name}
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </Reveal>
    </>
  );
}
