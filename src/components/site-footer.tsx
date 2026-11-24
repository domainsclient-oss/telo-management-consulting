import Image from "next/image";
import logoFull from "../../public/logo-full.svg";
import { MapPin } from "lucide-react";
import { company, navLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

// TODO: replace "#" with the real profile URLs.
const socials = [
  {
    label: "LinkedIn",
    href: "#",
    path: "M6.5 9.5h-3V20h3zM5 4.5a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5zM20.5 20v-5.8c0-3-1.6-4.9-4.2-4.9-1.3 0-2.3.6-2.8 1.4V9.5h-3V20h3v-5.6c0-1.4.7-2.3 1.9-2.3 1.2 0 2.1.8 2.1 2.3V20z",
  },
  {
    label: "Facebook",
    href: "#",
    path: "M13.5 21v-7.5h2.5l.5-3h-3V8.6c0-.9.3-1.6 1.6-1.6h1.5V4.3c-.3-.1-1.2-.3-2.3-.3-2.3 0-3.8 1.4-3.8 4v2.5H8v3h2.5V21z",
  },
  {
    label: "Instagram",
    href: "#",
    path: "M8 3h8a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5zm0 2a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3V8a3 3 0 00-3-3zm4 3a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4zm4.6-3.1a1.1 1.1 0 110 2.2 1.1 1.1 0 010-2.2z",
  },
  {
    label: "YouTube",
    href: "#",
    path: "M21.6 7.2a2.5 2.5 0 00-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 002.4 7.2 26 26 0 002 12a26 26 0 00.4 4.8 2.5 2.5 0 001.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 001.8-1.8A26 26 0 0022 12a26 26 0 00-.4-4.8zM10 15V9l5.2 3z",
  },
];

const services = [
  { label: "Digital Growth", href: "/#digital-growth" },
  { label: "BPO, Staffing & Training", href: "/#bpo-staffing" },
  { label: "Software Solutions", href: "/#products" },
  { label: "Merchandise", href: "/#merchandise" },
];

const linkClass =
  "inline-block text-[0.975rem] text-white/75 transition-[color,transform] duration-200 hover:translate-x-1 hover:text-primary";

/** Column heading with a short bar in one of the logo colours. */
function ColumnHeading({ children, bar }: { children: string; bar: string }) {
  return (
    <h2 className="font-heading text-lg font-semibold text-white">
      {children}
      <span aria-hidden="true" className={cn("mt-3 block h-1 w-10", bar)} />
    </h2>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-deep text-white">
      <div aria-hidden="true" className="flex h-1.5">
        <span className="flex-[3] bg-primary" />
        <span className="flex-[2] bg-brand-red" />
        <span className="flex-1 bg-brand-gold" />
      </div>

      {/* Faint stripes from the TMC letterforms, bottom right. */}
      <div
        aria-hidden="true"
        className="absolute right-0 bottom-24 hidden w-72 flex-col gap-4 lg:flex"
      >
        <span className="h-5 bg-white/[0.04]" />
        <span className="h-5 bg-white/[0.04]" />
        <span className="h-5 bg-white/[0.04]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-x-10 gap-y-12 px-5 py-16 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.3fr_0.8fr_0.5fr_1.6fr] lg:py-20">
        <div>
          <div className="inline-block rounded-xl bg-white p-4">
            <Image
              src={logoFull}
              alt="Telo Management Consultant Private Limited"
              className="h-auto w-48"
              unoptimized
            />
          </div>
          <p className="mt-6 flex flex-wrap gap-x-2 font-heading font-semibold">
            <span className="text-primary">Technology.</span>
            <span className="text-[#ff6b66]">People.</span>
            <span className="text-brand-gold">Creativity.</span>
            <span>Purpose.</span>
          </p>
          <p className="mt-3 max-w-xs text-[0.975rem] leading-relaxed text-white/70">
            We help organizations grow, operate efficiently and create lasting
            impact — globally.
          </p>
        </div>

        <nav aria-label="Services">
          <ColumnHeading bar="bg-primary">Services</ColumnHeading>
          <ul className="mt-6 space-y-3">
            {services.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer">
          <ColumnHeading bar="bg-brand-red">Menu</ColumnHeading>
          <ul className="mt-6 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <ColumnHeading bar="bg-brand-gold">Office</ColumnHeading>
          <div className="mt-6 rounded-xl border border-white/15 bg-white/[0.06] p-5">
            <address className="flex gap-4 text-[0.975rem] leading-relaxed text-white/75 not-italic">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-red text-white">
                <MapPin className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-semibold text-white">
                  {company.legalName}
                </span>
                {company.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </address>
          </div>
          <ul className="mt-6 flex gap-2.5">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  className="flex size-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="size-5"
                    fill="currentColor"
                    fillRule="evenodd"
                    aria-hidden="true"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/15">
        <p className="mx-auto w-full max-w-7xl px-5 py-6 text-center text-sm text-white/65 sm:px-8">
          © 2026 {company.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
