import Image from "next/image";
import logoFull from "../../public/logo-full.svg";
import { company, navLinks } from "@/lib/site";

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
  "link-line py-0.5 text-[0.975rem] text-white/70 transition-colors duration-300 hover:text-white";

function ColumnHeading({ children }: { children: string }) {
  return (
    <h2 className="text-[0.8125rem] font-semibold tracking-[0.14em] text-white/45 uppercase">
      {children}
    </h2>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-deeper text-white">
      <div className="mx-auto w-full max-w-[84rem] px-6 sm:px-10">
        {/* Four columns: brand, services, menu, office */}
        <div className="grid gap-x-10 gap-y-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:py-20">
          <div className="sm:col-span-2 lg:col-span-4 lg:pr-8">
            <div className="inline-block rounded-sm bg-white px-4 py-3">
              <Image
                src={logoFull}
                alt="Telo Management Consultant Private Limited"
                className="h-auto w-40"
                unoptimized
              />
            </div>
            <p className="mt-7 max-w-sm text-[0.975rem] leading-relaxed text-white/70">
              We help organizations grow, operate efficiently and create
              lasting impact — globally.
            </p>
            <p className="mt-5 flex flex-wrap gap-x-2.5 gap-y-1 font-heading text-sm font-semibold text-white/45">
              <span>Technology.</span>
              <span>People.</span>
              <span>Creativity.</span>
              <span>Purpose.</span>
            </p>
          </div>

          <nav aria-label="Services" className="lg:col-span-3">
            <ColumnHeading>Services</ColumnHeading>
            <ul className="mt-6 space-y-3.5">
              {services.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer" className="lg:col-span-2">
            <ColumnHeading>Menu</ColumnHeading>
            <ul className="mt-6 space-y-3.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="sm:col-span-2 lg:col-span-3">
            <ColumnHeading>Office</ColumnHeading>
            <address className="mt-6 text-[0.975rem] leading-relaxed text-white/70 not-italic">
              <span className="block font-semibold text-white">
                {company.legalName}
              </span>
              {company.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
              <a
                href={`mailto:${company.email}`}
                className="link-line mt-4 inline-block py-0.5 break-all text-white transition-colors duration-300 hover:text-brand-cyan"
              >
                {company.email}
              </a>
            </address>
          </div>
        </div>

        {/* Legal bar */}
        <div className="flex flex-col-reverse items-start justify-between gap-6 border-t border-white/10 py-7 sm:flex-row sm:items-center">
          <p className="text-sm text-white/50">
            © 2026 {company.legalName}. All rights reserved.
          </p>
          <ul className="flex gap-2">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  className="flex size-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors duration-300 hover:border-brand-cyan hover:bg-brand-cyan hover:text-primary"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="size-[1.125rem]"
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
    </footer>
  );
}
