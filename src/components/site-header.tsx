import Image from "next/image";
import Link from "next/link";
import logoMark from "../../public/logo-mark.svg";
import { ContactButton, ContactDialog } from "@/components/contact-dialog";
import { MobileNav } from "@/components/mobile-nav";
import { ScrollProgress } from "@/components/scroll-progress";
import { company, navLinks } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur-md">
      <ScrollProgress />
      <div className="mx-auto flex h-[4.5rem] w-full max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link href="/#home" className="flex items-center gap-3">
          <Image
            src={logoMark}
            alt=""
            className="h-12 w-auto"
            unoptimized
            preload
          />
          <span className="sr-only">{company.name} home</span>
        </Link>

        <nav aria-label="Main" className="ml-auto hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="border-b-2 border-transparent py-1 text-[0.95rem] font-medium text-foreground transition-colors hover:border-brand-red hover:text-primary-deep"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ContactButton className="hidden h-10 px-4 text-[0.9rem] lg:inline-flex" />
          <MobileNav />
          <ContactDialog />
        </div>
      </div>
    </header>
  );
}
