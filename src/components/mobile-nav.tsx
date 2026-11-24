"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
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
            variant="outline"
            size="icon-lg"
            className="size-11 md:hidden"
            aria-label="Open menu"
          />
        }
      >
        <Menu className="size-5" />
      </SheetTrigger>
      <SheetContent side="right" className="flex w-[82%] max-w-xs flex-col gap-0">
        <SheetHeader className="border-b px-6 py-5">
          {/* Title stays for screen readers; the logo is what is shown. */}
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <Image src={logoMark} alt="" className="h-12 w-auto self-start" unoptimized />
        </SheetHeader>
        <nav aria-label="Mobile" className="flex flex-col px-3 py-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3.5 font-heading text-lg font-medium text-foreground hover:bg-muted"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mt-auto border-t p-6">
          <ContactButton
            className="h-12 w-full text-base"
            onOpen={() => setOpen(false)}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
