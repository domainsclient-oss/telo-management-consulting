"use client";

import { useId, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { Check, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export type ServiceGroup = {
  title: string;
  subtitle: string;
  items: string[];
  image: StaticImageData;
  alt: string;
};

/**
 * Three photo panels, one per service.
 *
 * Large screens: the panels sit side by side. One is open (wide, with its
 * subtitle and checklist over the photo); the other two are narrow and show
 * only their title. Hovering, focusing or clicking a panel opens it.
 *
 * Small screens: the panels stack and every one shows its full content, so
 * nothing depends on interaction.
 *
 * All three checklists are always in the page, so the content is there for
 * search engines.
 */
export function ServicePanels({ groups }: { groups: ServiceGroup[] }) {
  const [active, setActive] = useState(0);
  const id = useId();

  return (
    <div className="flex flex-col gap-4 lg:h-[38rem] lg:flex-row">
      {groups.map((group, i) => {
        const open = i === active;
        const titleId = `${id}-${i}`;
        return (
          <section
            key={group.title}
            aria-labelledby={titleId}
            onMouseEnter={() => setActive(i)}
            className={cn(
              "relative isolate overflow-hidden rounded-sm bg-primary text-white",
              "lg:min-w-0 lg:basis-0 lg:transition-[flex-grow] lg:duration-700 lg:ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none",
              open ? "lg:grow-[3.4]" : "lg:grow",
            )}
          >
            <Image
              src={group.image}
              alt={group.alt}
              fill
              placeholder="blur"
              sizes="(min-width: 1344px) 780px, (min-width: 1024px) 60vw, 100vw"
              className="-z-20 object-cover object-[50%_30%]"
            />
            {/* Navy scrims. Small screens: even and heavy, text sits on it.
                Large screens: heavy on the left when open, flat when closed. */}
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 bg-primary/85 lg:hidden"
            />
            <div
              aria-hidden="true"
              className={cn(
                "absolute inset-0 -z-10 hidden transition-colors duration-500 lg:block",
                open
                  ? "bg-[linear-gradient(90deg,rgba(11,34,57,0.96)_0%,rgba(11,34,57,0.86)_48%,rgba(11,34,57,0.3)_100%)]"
                  : "bg-primary/70",
              )}
            />

            <div className="flex h-full flex-col justify-end p-6 sm:p-8 lg:p-10">
              {/* Closed panels show a plus as the cue to open. */}
              {!open && (
                <span
                  aria-hidden="true"
                  className="absolute top-8 left-10 hidden size-11 items-center justify-center rounded-full border border-white/40 lg:flex"
                >
                  <Plus className="size-5" strokeWidth={1.5} />
                </span>
              )}

              {/* Fixed width on large screens, so the text is revealed by the
                  widening panel instead of reflowing while it animates. */}
              <div className="lg:w-[26rem] xl:w-[32rem]">
                <h3
                  id={titleId}
                  className="font-heading text-[1.75rem] leading-tight font-semibold tracking-[-0.022em] lg:text-[2rem]"
                >
                  {/* The button covers the whole panel on large screens. */}
                  <button
                    type="button"
                    aria-pressed={open}
                    onClick={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    className="cursor-default text-left outline-none focus-visible:underline focus-visible:decoration-brand-cyan focus-visible:underline-offset-8 lg:cursor-pointer lg:after:absolute lg:after:inset-0"
                  >
                    {group.title}
                  </button>
                </h3>

                <div className={cn(open ? "rise" : "lg:hidden")}>
                  <p className="mt-2 text-[1.0625rem] leading-relaxed text-brand-cyan">
                    {group.subtitle}
                  </p>
                  <ul className="relative mt-6 border-b border-white/15">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-4 border-t border-white/15 py-3.5 text-[0.975rem] leading-snug font-medium"
                      >
                        <Check
                          className="mt-0.5 size-4 shrink-0 text-brand-cyan"
                          strokeWidth={2.25}
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
