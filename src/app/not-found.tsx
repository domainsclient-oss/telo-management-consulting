import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Page not found | Telo Management Consulting",
  robots: { index: false },
};

const btn = "h-12 px-6 text-[0.975rem] font-semibold";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 items-center bg-accent pt-[4.75rem]">
        <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <p
            aria-hidden="true"
            className="font-heading text-[clamp(6rem,22vw,13rem)] leading-none font-semibold tracking-[-0.05em]"
          >
            <span className="text-primary">4</span>
            <span className="text-brand-red">0</span>
            <span className="text-brand-gold">4</span>
          </p>
          <div className="mt-6 flex w-28 flex-col gap-2" aria-hidden="true">
            <span className="h-2 bg-primary" />
            <span className="h-2 bg-brand-red" />
            <span className="h-2 bg-brand-gold" />
          </div>
          <h1 className="mt-8 font-heading text-[clamp(1.875rem,3.6vw,2.875rem)] leading-[1.12] font-semibold tracking-[-0.025em]">
            Page not found
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-foreground/80">
            The page you are looking for does not exist or has moved. Check the
            address, or go back to the home page.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/" className={cn(buttonVariants(), btn)}>
              Back to home
            </Link>
            <Link
              href="/#contact"
              className={cn(
                buttonVariants(),
                btn,
                "bg-brand-red-deep text-white hover:bg-brand-red",
              )}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
