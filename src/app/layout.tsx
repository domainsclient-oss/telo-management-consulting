import type { Metadata } from "next";
import { Hanken_Grotesk, Manrope } from "next/font/google";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const body = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const display = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  title: "Telo Management Consulting | Digital Growth, BPO, Staffing, Software",
  description:
    "Telo Management Consulting helps organizations grow, operate efficiently and create lasting impact through digital growth, BPO, staffing, training, software solutions and branded merchandise.",
  openGraph: {
    title: "Telo Management Consulting",
    description:
      "Technology. People. Creativity. Purpose. One partner for digital growth, BPO and staffing, software solutions and merchandise.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${body.variable} ${display.variable} h-full antialiased`}
    >
      {/* Browser extensions add attributes to <body> before React loads;
          ignore that one-level mismatch instead of warning about it. */}
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        {/* Without JavaScript the scroll reveal can't run, so show everything. */}
        <noscript>
          <style>{`.reveal{opacity:1;transform:none}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
