export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Products", href: "/#products" },
  { label: "Clients", href: "/#clients" },
  { label: "Contact", href: "/#contact" },
] as const;

/**
 * Public address of the live site, used for sitemap.xml, robots.txt and
 * social share previews (og:image must be an absolute URL on the real domain).
 *
 * Order: NEXT_PUBLIC_SITE_URL if set (use this for a custom domain), otherwise
 * the domain Vercel provides at build time, otherwise localhost for dev.
 */
function resolveSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit;
  // Vercel sets these without a protocol. The production URL is the stable
  // domain; VERCEL_URL is the per-deployment one (used for previews).
  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (production) return `https://${production}`;
  const deployment = process.env.VERCEL_URL;
  if (deployment) return `https://${deployment}`;
  return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl().replace(/\/$/, "");

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
  email: "support@telomanagementconsulting.in",
} as const;
