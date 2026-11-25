"use client";

import { useState, type ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";
import { Tabs } from "@base-ui/react/tabs";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export type ServiceGroup = {
  title: string;
  subtitle: string;
  items: string[];
  image: StaticImageData;
  alt: string;
};

/**
 * One service at a time: a tab per group, that group's checklist, and its
 * photo.
 *
 * Large screens: tabs, checklist and the action stack in a left column; the
 * photo fills the full height on the right and cross-fades between services.
 * Small screens: tabs in a row, then photo, checklist and action in order.
 *
 * All checklists stay in the page (hidden, not removed), so the content is
 * there for search engines.
 */
export function ServiceTabs({
  groups,
  action,
}: {
  groups: ServiceGroup[];
  /** Call to action shown under the checklist. */
  action?: ReactNode;
}) {
  const [active, setActive] = useState(groups[0].title);

  return (
    <Tabs.Root
      value={active}
      onValueChange={(value) => setActive(value as string)}
      className="grid gap-8 lg:min-h-[37.5rem] lg:grid-cols-12 lg:gap-10"
    >
      {/* `contents` on small screens lets the photo sit between the tabs and
          the checklist; on large screens this is a real column. */}
      <div className="contents lg:col-span-4 lg:flex lg:flex-col">
        <Tabs.List
          aria-label="Services"
          className="order-1 grid grid-cols-3 border-b border-foreground/12 lg:block lg:border-b-0"
        >
          {groups.map((group) => (
            <Tabs.Tab
              key={group.title}
              value={group.title}
              className="-mb-px cursor-pointer border-b-2 border-transparent px-1 py-4 text-center text-muted-foreground transition-colors duration-300 outline-none hover:text-foreground focus-visible:text-foreground data-[active]:border-brand-cyan data-[active]:text-foreground lg:mb-0 lg:block lg:w-full lg:border-b-0 lg:border-l-2 lg:border-foreground/12 lg:py-4 lg:pr-4 lg:pl-7 lg:text-left"
            >
              <span className="block font-heading text-base font-semibold tracking-[-0.02em] sm:text-lg lg:text-[1.625rem] lg:leading-tight lg:tracking-[-0.03em]">
                {group.title}
              </span>
              <span className="mt-1.5 hidden text-[0.95rem] leading-relaxed font-normal text-muted-foreground lg:block">
                {group.subtitle}
              </span>
            </Tabs.Tab>
          ))}
        </Tabs.List>

        {groups.map((group) => (
          <Tabs.Panel
            key={group.title}
            value={group.title}
            keepMounted
            className="order-3 lg:mt-8"
          >
            {/* Styling lives on this inner element so the panel's own
                `hidden` attribute keeps working. */}
            <div className="rise">
              <h3 className="sr-only">{group.title}</h3>
              <p className="text-[0.975rem] leading-relaxed text-muted-foreground lg:hidden">
                {group.subtitle}
              </p>
              <ul className="mt-6 grid gap-x-10 border-b border-foreground/12 sm:grid-cols-2 lg:mt-0 lg:grid-cols-1">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 border-t border-foreground/12 py-3.5 text-[0.975rem] leading-snug font-medium"
                  >
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-primary-deep"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Tabs.Panel>
        ))}

        {action && (
          <div className="order-4 lg:mt-auto lg:pt-10">{action}</div>
        )}
      </div>

      {/* Photos are stacked; only the active one is visible. */}
      <div className="relative order-2 aspect-[16/10] overflow-hidden rounded-sm bg-secondary lg:col-span-8 lg:aspect-auto lg:h-full">
        {groups.map((group) => {
          const shown = group.title === active;
          return (
            <Image
              key={group.title}
              src={group.image}
              alt={shown ? group.alt : ""}
              aria-hidden={shown ? undefined : true}
              fill
              placeholder="blur"
              sizes="(min-width: 1344px) 830px, (min-width: 1024px) 64vw, 100vw"
              className={cn(
                "object-cover object-[50%_30%] transition-opacity duration-700 ease-out motion-reduce:transition-none",
                shown ? "opacity-100" : "opacity-0",
              )}
            />
          );
        })}
      </div>
    </Tabs.Root>
  );
}
