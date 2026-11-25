import Image from "next/image";
import Link from "next/link";
import logoMark from "../../public/logo-mark.svg";
import { ContactButton, ContactDialog } from "@/components/contact-dialog";
import { HeaderFrame } from "@/components/header-frame";
import { MobileNav } from "@/components/mobile-nav";
import { ScrollProgress } from "@/components/scroll-progress";
import { company, navLinks } from "@/lib/site";

export function SiteHeader() {
  return (
    <HeaderFrame>
      <ScrollProgress />
      <div className="mx-auto flex h-[4.75rem] w-full max-w-[84rem] items-center gap-8 px-6 sm:px-10">
        <Link href="/#home" className="flex min-w-0 items-end gap-3">
          <Image
            src={logoMark}
            alt=""
            className="h-11 w-auto shrink-0"
            unoptimized
            preload
          />
          {/* Hidden between md and lg, where the full menu leaves no room. */}
          <span className="font-heading text-[0.95rem] leading-[1.15] font-semibold tracking-[-0.02em] text-white transition-colors duration-300 group-data-[scrolled=true]/header:text-foreground sm:text-lg md:max-lg:hidden">
            {company.name}
          </span>
          <span className="sr-only">
            <span className="hidden md:max-lg:inline">{company.name} </span>
            home
          </span>
        </Link>

        <nav
          aria-label="Main"
          className="ml-auto hidden items-center gap-9 md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-line py-1.5 text-[0.925rem] font-medium text-white/85 transition-colors duration-300 group-data-[scrolled=true]/header:text-foreground/75 hover:text-white group-data-[scrolled=true]/header:hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3 md:ml-0">
          <ContactButton className="hidden h-11 bg-white px-5 text-[0.9rem] text-primary group-data-[scrolled=true]/header:bg-primary group-data-[scrolled=true]/header:text-white hover:bg-brand-cyan hover:text-primary group-data-[scrolled=true]/header:hover:bg-primary-deep group-data-[scrolled=true]/header:hover:text-white md:inline-flex" />
          <MobileNav />
          <ContactDialog />
        </div>
      </div>
    </HeaderFrame>
  );
}
