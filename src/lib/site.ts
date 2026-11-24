export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Products", href: "/#products" },
  { label: "Clients", href: "/#clients" },
  { label: "Contact", href: "/#contact" },
] as const;

/**
 * Public address of the live site, used for sitemap.xml, robots.txt and
 * social previews. Set NEXT_PUBLIC_SITE_URL in the hosting environment.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com"
).replace(/\/$/, "");

export const company = {
  name: "Telo Management Consulting",
  legalName: "Telo Management Consultant Pvt Ltd",
  addressLines: [
    "YMCA Royapuram,",
    "No : 158(131), 156(132) & 154(133),",
    "2nd Floor, G.A Road, Old Washermenpet,",
    "Chennai-21.",
  ],
  mapQuery: "YMCA Royapuram, G.A Road, Old Washermenpet, Chennai 600021",
} as const;
