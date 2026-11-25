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

const btn = "h-13 px-7 text-[0.975rem] font-semibold";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 items-center bg-primary pt-20 text-white">
        <div className="mx-auto w-full max-w-[84rem] px-6 py-24 sm:px-10 lg:py-36">
          <p className="flex items-center gap-3 text-[0.8125rem] font-semibold tracking-[0.14em] text-brand-cyan uppercase">
            <span aria-hidden="true" className="h-px w-8 bg-current" />
            Error 404
          </p>
          <h1 className="mt-7 font-heading text-[clamp(2.125rem,4.6vw,4rem)] leading-[1.04] font-semibold tracking-[-0.025em]">
            Page not found
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/80 lg:text-xl">
            The page you are looking for does not exist or has moved. Check the
            address, or go back to the home page.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/"
              className={cn(buttonVariants(), btn, "bg-brand-cyan text-primary hover:bg-white")}
            >
              Back to home
            </Link>
            <Link
              href="/#contact"
              className={cn(
                buttonVariants({ variant: "outline" }),
                btn,
                "border-white/40 bg-transparent text-white hover:border-white hover:bg-white hover:text-primary",
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
