"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Menu } from "lucide-react";
import { ContactButton } from "@/components/contact-dialog";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/lib/site";
import logoMark from "../../public/logo-mark.svg";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon-lg"
            className="size-11 text-white group-data-[scrolled=true]/header:text-foreground md:hidden"
            aria-label="Open menu"
          />
        }
      >
        <Menu className="size-6" strokeWidth={1.5} />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="flex w-[88%] max-w-sm flex-col gap-0"
      >
        <SheetHeader className="px-7 pt-6 pb-4">
          {/* Title stays for screen readers; the logo is what is shown. */}
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <Image
            src={logoMark}
            alt=""
            className="h-11 w-auto self-start"
            unoptimized
          />
        </SheetHeader>
        <nav aria-label="Mobile" className="flex flex-col px-7 pt-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between border-b py-5 font-heading text-2xl font-semibold tracking-[-0.016em] text-foreground"
            >
              {link.label}
              <ArrowUpRight
                className="size-5 text-foreground/35 transition-[color,transform] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary-deep"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </a>
          ))}
        </nav>
        <div className="mt-auto p-7">
          <ContactButton
            className="h-13 w-full text-base"
            onOpen={() => setOpen(false)}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
