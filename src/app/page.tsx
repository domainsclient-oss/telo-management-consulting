import Image, { type StaticImageData } from "next/image";
import {
  BadgeCheck,
  Briefcase,
  Check,
  Globe,
  Layers,
  MapPin,
  Star,
  Target,
  Timer,
  Users,
  Wallet,
} from "lucide-react";
import heroImage from "../../public/images/hero.jpg";
import digitalImage from "../../public/images/digital.jpg";
import peopleImage from "../../public/images/people.jpg";
import softwareImage from "../../public/images/software.jpg";
import merchandiseImage from "../../public/images/merchandise.jpg";
import cardDigital from "../../public/images/card-digital.jpg";
import cardPeople from "../../public/images/card-people.jpg";
import cardSoftware from "../../public/images/card-software.jpg";
import cardMerchandise from "../../public/images/card-merchandise.jpg";
import clientStartups from "../../public/images/client-startups.jpg";
import clientEducation from "../../public/images/client-education.jpg";
import clientHealthcare from "../../public/images/client-healthcare.jpg";
import clientBusiness from "../../public/images/client-business.jpg";
import clientNonprofit from "../../public/images/client-nonprofit.jpg";
import clientGlobal from "../../public/images/client-global.jpg";
import { BackToTop } from "@/components/back-to-top";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { buttonVariants } from "@/components/ui/button";
import { company } from "@/lib/site";
import { cn } from "@/lib/utils";

const container = "mx-auto w-full max-w-7xl px-5 sm:px-8";
const section = "scroll-mt-[4.75rem] py-20 lg:py-28";
const h2 =
  "font-heading text-[clamp(1.875rem,3.6vw,2.875rem)] leading-[1.12] font-semibold tracking-[-0.025em] text-balance";
const lead = "text-lg leading-relaxed text-muted-foreground";
const kicker = "font-heading font-semibold text-primary-deep";
const btn = "h-12 px-6 text-[0.975rem] font-semibold";
const btnPrimary = cn(buttonVariants(), btn);
const btnRed = cn(
  buttonVariants(),
  btn,
  "bg-brand-red-deep text-white hover:bg-brand-red",
);

/** The three logo colours (plus navy), as full class names so Tailwind sees them. */
type Tone = "cyan" | "red" | "gold" | "deep";
const tones: Record<
  Tone,
  { tile: string; bar: string; text: string; tint: string; line: string }
> = {
  cyan: {
    tile: "bg-primary text-primary-foreground",
    bar: "border-t-primary",
    text: "text-primary-deep",
    tint: "bg-accent",
    line: "border-primary",
  },
  red: {
    tile: "bg-brand-red text-white",
    bar: "border-t-brand-red",
    text: "text-brand-red-deep",
    tint: "bg-red-tint",
    line: "border-brand-red",
  },
  gold: {
    tile: "bg-brand-gold text-[#3a2900]",
    bar: "border-t-brand-gold",
    text: "text-brand-gold-deep",
    tint: "bg-gold-tint",
    line: "border-brand-gold",
  },
  deep: {
    tile: "bg-deep text-white",
    bar: "border-t-deep",
    text: "text-deep",
    tint: "bg-secondary",
    line: "border-deep",
  },
};

/** The five stars from the logo. */
function Stars({ className }: { className?: string }) {
  const sizes = ["size-4", "size-5", "size-7", "size-5", "size-4"];
  return (
    <div
      aria-hidden="true"
      className={cn("flex items-end gap-1.5 text-brand-gold", className)}
    >
      {sizes.map((size, i) => (
        <Star key={i} className={size} fill="currentColor" strokeWidth={0} />
      ))}
    </div>
  );
}

const heroFacts: {
  icon: typeof Globe;
  title: string;
  tags: string[];
  tone: Tone;
}[] = [
  {
    icon: Globe,
    title: "Global Delivery",
    tags: ["Singapore", "India", "Worldwide"],
    tone: "cyan",
  },
  {
    icon: Briefcase,
    title: "Diverse Industries",
    tags: ["Education", "Healthcare", "Businesses", "Non-Profits & more"],
    tone: "red",
  },
  {
    icon: Users,
    title: "People First",
    tags: ["Creating opportunities"],
    tone: "gold",
  },
  {
    icon: Target,
    title: "Larger Purpose",
    tags: ["Empowering communities"],
    tone: "deep",
  },
];

const solutions: {
  image: StaticImageData;
  alt: string;
  title: string;
  text: string;
  href: string;
  tone: Tone;
}[] = [
  {
    image: cardDigital,
    alt: "A marketing team planning a campaign around a laptop and phone mockups",
    title: "Digital Growth",
    text: "Build your brand, reach the right audience and drive measurable results.",
    href: "#digital-growth",
    tone: "cyan",
  },
  {
    image: cardPeople,
    alt: "A trainer leading a workshop for a group of professionals",
    title: "BPO, Staffing and Training",
    text: "Reliable support and the right talent to keep you moving.",
    href: "#bpo-staffing",
    tone: "red",
  },
  {
    image: cardSoftware,
    alt: "Two developers reviewing an application on their monitors",
    title: "Software Solutions",
    text: "ERP, CRM, LMS and custom solutions to simplify and scale.",
    href: "#products",
    tone: "deep",
  },
  {
    image: cardMerchandise,
    alt: "An event team wearing matching t-shirts and lanyards",
    title: "Merchandise",
    text: "Branded products that make an impact.",
    href: "#merchandise",
    tone: "gold",
  },
];

const digitalServices = [
  "Digital Strategy & Consulting",
  "Social Media Marketing & Content Creation",
  "SEO & Search Marketing",
  "Paid Campaigns (Google, Meta, YouTube etc.)",
  "Website Design & Development",
  "Analytics & Performance Tracking",
];

const digitalSteps = ["Strategy", "Creativity", "Execution", "Real Results"];

const peopleGroups: {
  title: string;
  subtitle: string;
  items: string[];
  tone: Tone;
}[] = [
  {
    title: "BPO",
    subtitle: "Business Process Outsourcing",
    tone: "cyan",
    items: [
      "Customer Support (Phone, Email, Chat)",
      "Back Office Processing & Data Management",
      "Inside Sales & Lead Generation",
      "CRM & Account Management",
      "Virtual Assistance & Administrative Support",
    ],
  },
  {
    title: "Staffing",
    subtitle: "The right talent for your business",
    tone: "red",
    items: [
      "Staff Augmentation (Short & Long Term)",
      "Recruitment & Talent Sourcing",
      "Dedicated Teams (Onsite / Offshore / Hybrid)",
    ],
  },
  {
    title: "Training",
    subtitle: "Developing people and organizations for a stronger tomorrow.",
    tone: "gold",
    items: [
      "Soft Skills Training & Development for SMEs, FMCG and Educational institutions",
      "Management Training & Development (Leadership Development)",
      "CSR Project Planning and Implementation for Industries and Corporations",
    ],
  },
];

const software: { name: string; full: string; text: string; tone: Tone }[] = [
  {
    name: "ERP",
    full: "Enterprise Resource Planning",
    text: "Manage operations, resources and finance efficiently.",
    tone: "cyan",
  },
  {
    name: "CRM",
    full: "Customer Relationship Management",
    text: "Build stronger relationships and drive revenue.",
    tone: "red",
  },
  {
    name: "LMS",
    full: "Learning Management System",
    text: "Deliver, manage and track learning effortlessly.",
    tone: "gold",
  },
];

const merchandise: { name: string; text: string; tone: Tone }[] = [
  {
    name: "T-Shirts",
    text: "Custom designs for teams, events and ministries.",
    tone: "cyan",
  },
  {
    name: "Accessories",
    text: "Caps, bags, bottles, lanyards and more.",
    tone: "red",
  },
  {
    name: "Souvenirs",
    text: "Meaningful gifts for conferences, events and special occasions.",
    tone: "gold",
  },
];

const clients: {
  image: StaticImageData;
  alt: string;
  name: string;
  tone: Tone;
}[] = [
  {
    image: clientStartups,
    alt: "A startup team working together at a shared table",
    name: "Start Ups",
    tone: "red",
  },
  {
    image: clientEducation,
    alt: "A teacher helping students in a classroom",
    name: "Education",
    tone: "cyan",
  },
  {
    image: clientHealthcare,
    alt: "A doctor and a nurse reviewing a tablet in a hospital corridor",
    name: "Healthcare",
    tone: "red",
  },
  {
    image: clientBusiness,
    alt: "Executives shaking hands across a boardroom table",
    name: "Businesses & Corporates",
    tone: "deep",
  },
  {
    image: clientNonprofit,
    alt: "Volunteers handing school supplies to children",
    name: "Non-Profits",
    tone: "gold",
  },
  {
    image: clientGlobal,
    alt: "An international team on a video conference",
    name: "Global Clients",
    tone: "cyan",
  },
];

const reasons: {
  icon: typeof Wallet;
  title: string;
  text: string;
  tone: Tone;
}[] = [
  {
    icon: Wallet,
    title: "Cost Effective",
    text: "High quality at competitive pricing.",
    tone: "gold",
  },
  {
    icon: BadgeCheck,
    title: "Quality Focus",
    text: "Proven processes and consistent delivery.",
    tone: "cyan",
  },
  {
    icon: Timer,
    title: "Faster Turnaround",
    text: "Agile teams and streamlined workflows.",
    tone: "red",
  },
  {
    icon: Globe,
    title: "Global Delivery Model",
    text: "Headquartered in Singapore with delivery teams in India, serving clients across the world.",
    tone: "cyan",
  },
  {
    icon: Layers,
    title: "Flexible Engagement",
    text: "Project-based, dedicated teams or end-to-end delivery.",
    tone: "gold",
  },
];

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&output=embed`;

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:shadow"
      >
        Skip to content
      </a>
      <SiteHeader />

      <main id="main" className="flex-1">
        {/* 1. Hero */}
        <section id="home" className="bg-accent pt-[4.75rem]">
          <div
            className={cn(
              container,
              "grid items-center gap-12 pt-10 pb-14 sm:pt-14 lg:grid-cols-[1.18fr_0.82fr] lg:gap-14 lg:py-16",
            )}
          >
            <div>
              <Stars className="mb-5" />
              <h1 className="font-heading text-[clamp(2.125rem,5.2vw,4rem)] leading-[1.06] font-semibold tracking-[-0.035em]">
                Accelerate Growth.
                <br />
                <span className="text-primary-deep">Extend Impact.</span>
              </h1>
              <p className="rise mt-6 flex flex-wrap gap-x-1.5 font-heading text-base font-semibold tracking-[-0.01em] [animation-delay:80ms] sm:gap-x-2.5 sm:text-2xl">
                <span className="text-primary-deep">Technology.</span>
                <span className="text-brand-red-deep">People.</span>
                <span className="text-brand-gold-deep">Creativity.</span>
                <span>Purpose.</span>
              </p>
              <p className="rise mt-4 max-w-[32rem] text-lg leading-relaxed text-foreground/80 [animation-delay:160ms]">
                We help organizations grow, operate efficiently and create
                lasting impact — globally.
              </p>
              <div className="rise mt-8 flex flex-wrap gap-3 [animation-delay:240ms]">
                <a href="#services" className={btnPrimary}>
                  Explore Our Solutions
                </a>
                <a href="#contact" className={btnRed}>
                  Contact Us
                </a>
              </div>
            </div>

            <div className="relative mx-2 sm:mx-4 lg:mx-0 lg:ml-4">
              {/* Colour blocks behind the photo, in the logo's cyan and red. */}
              <div
                aria-hidden="true"
                className="absolute -top-3 -right-3 h-3/5 w-3/5 rounded-2xl bg-primary sm:-top-4 sm:-right-4"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-3 -left-3 h-2/5 w-2/5 rounded-2xl bg-brand-red sm:-bottom-4 sm:-left-4"
              />
              <div
                aria-hidden="true"
                className="absolute -right-4 bottom-5 z-20 flex w-16 flex-col gap-1.5 sm:-right-8 sm:bottom-10 sm:w-32 sm:gap-2"
              >
                <span className="stripe h-2.5 bg-brand-gold [animation-delay:300ms]" />
                <span className="stripe h-2.5 bg-brand-red [animation-delay:420ms]" />
                <span className="stripe h-2.5 bg-primary [animation-delay:540ms]" />
              </div>
              <div className="relative z-10 aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_24px_48px_-24px_rgba(14,39,49,0.45)] sm:aspect-[16/10] lg:aspect-[6/7]">
                <Image
                  src={heroImage}
                  alt="A consulting team in discussion around a table in a bright office"
                  fill
                  preload
                  placeholder="blur"
                  sizes="(min-width: 1024px) 520px, 100vw"
                  className="object-cover object-[62%_55%]"
                />
              </div>
            </div>
          </div>

          {/* Four fact cards that straddle the hero and the next section. */}
          <div className="bg-[linear-gradient(to_bottom,transparent_50%,var(--background)_50%)]">
            <div
              className={cn(
                container,
                "grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4",
              )}
            >
              {heroFacts.map((fact, i) => (
                <Reveal key={fact.title} delay={i * 80} className="h-full">
                  <div
                    className={cn(
                      "group relative h-full overflow-hidden rounded-2xl border border-t-4 bg-white p-5 shadow-[0_16px_36px_-20px_rgba(6,127,163,0.5)] transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_22px_44px_-18px_rgba(6,127,163,0.55)]",
                      tones[fact.tone].bar,
                    )}
                  >
                    {/* Oversized ghost icon, top right, clear of the tags. */}
                    <fact.icon
                      aria-hidden="true"
                      strokeWidth={1.25}
                      className={cn(
                        "absolute -top-5 -right-5 size-24 opacity-[0.07] transition-transform duration-300 group-hover:scale-110",
                        tones[fact.tone].text,
                      )}
                    />
                    <div className="relative flex items-center gap-3.5">
                      <span
                        className={cn(
                          "flex size-12 shrink-0 items-center justify-center rounded-xl",
                          tones[fact.tone].tile,
                        )}
                      >
                        <fact.icon className="size-6" aria-hidden="true" />
                      </span>
                      <h2 className="font-heading text-lg leading-tight font-semibold tracking-[-0.015em]">
                        {fact.title}
                      </h2>
                    </div>
                    <p className="relative mt-4 flex flex-wrap gap-1.5">
                      {fact.tags.map((tag) => (
                        <span
                          key={tag}
                          className={cn(
                            "rounded-full px-2.5 py-1 text-[0.8125rem] leading-tight font-medium",
                            tones[fact.tone].tint,
                            tones[fact.tone].text,
                          )}
                        >
                          {tag}
                        </span>
                      ))}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 2. Our Solutions */}
        <section id="services" className={cn(section, "pt-16 lg:pt-20")}>
          <div className={container}>
            <Reveal className="grid gap-6 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className={kicker}>Our Solutions</p>
                <h2 className={cn(h2, "mt-3")}>
                  One Partner. Multiple Ways to Grow.
                </h2>
              </div>
              <p className={cn(lead, "lg:pt-9")}>
                From digital growth to people solutions, from software to
                branded merchandise — we bring the right mix of technology,
                talent and creativity to help you move forward.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {solutions.map((item, i) => (
                <Reveal key={item.title} delay={i * 80} className="h-full">
                  <a
                    href={item.href}
                    className={cn(
                      "group flex h-full flex-col overflow-hidden rounded-xl border transition-transform duration-200 hover:-translate-y-1",
                      tones[item.tone].tint,
                    )}
                  >
                    <div
                      className={cn(
                        "relative aspect-[3/2] overflow-hidden border-b-[5px]",
                        tones[item.tone].line,
                      )}
                    >
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        placeholder="blur"
                        sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-heading text-xl leading-snug font-semibold tracking-[-0.015em]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-[0.975rem] text-foreground/75">
                        {item.text}
                      </p>
                      <span
                        className={cn(
                          "mt-auto pt-6 text-sm font-semibold underline-offset-4 group-hover:underline",
                          tones[item.tone].text,
                        )}
                      >
                        View details
                      </span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Digital Growth */}
        <section id="digital-growth" className={cn(section, "bg-accent")}>
          <div className={container}>
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <Reveal>
                <div className="relative">
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-4 -left-3 h-1/2 w-1/2 rounded-xl bg-primary sm:-left-4"
                  />
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <Image
                      src={digitalImage}
                      alt="A marketer reviewing campaign analytics on a monitor and a social feed on a phone"
                      fill
                      placeholder="blur"
                      sizes="(min-width: 1024px) 620px, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <p className={kicker}>Digital Growth</p>
                <h2 className={cn(h2, "mt-3")}>
                  From Visibility to Real Results.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-foreground/80">
                  We create data-driven digital strategies that help
                  organizations build their brand, reach the right audience and
                  achieve measurable growth.
                </p>
                <ul className="mt-8 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
                  {digitalServices.map((service) => (
                    <li
                      key={service}
                      className="flex gap-3 text-[0.975rem] leading-snug font-medium"
                    >
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Check
                          className="size-3.5"
                          strokeWidth={3}
                          aria-hidden="true"
                        />
                      </span>
                      {service}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* A real sequence, so it is numbered. */}
            <Reveal className="mt-16 lg:mt-20">
              <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {digitalSteps.map((step, i) => {
                  const last = i === digitalSteps.length - 1;
                  return (
                    <li
                      key={step}
                      className={cn(
                        "flex items-center gap-4 rounded-xl border-2 bg-white p-5 text-foreground",
                        last ? "border-brand-red" : "border-transparent",
                      )}
                    >
                      <span
                        className={cn(
                          "flex size-11 shrink-0 items-center justify-center rounded-full font-heading font-semibold",
                          last
                            ? "bg-brand-red-deep text-white"
                            : "bg-primary text-primary-foreground",
                        )}
                      >
                        {i + 1}
                      </span>
                      <span className="font-heading text-xl font-semibold tracking-[-0.015em]">
                        {step}
                      </span>
                    </li>
                  );
                })}
              </ol>
            </Reveal>
          </div>
        </section>

        {/* 4. BPO & Staffing */}
        <section
          id="bpo-staffing"
          className={cn(section, "bg-deep text-white")}
        >
          <div className={container}>
            <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <Reveal>
                <p className="font-heading font-semibold text-primary">
                  BPO, Staffing & Training
                </p>
                <h2 className={cn(h2, "mt-3")}>
                  People and processes to keep you moving.
                </h2>
                <div
                  aria-hidden="true"
                  className="mt-8 flex w-28 flex-col gap-2"
                >
                  <span className="h-2 bg-primary" />
                  <span className="h-2 bg-brand-red" />
                  <span className="h-2 bg-brand-gold" />
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                  <Image
                    src={peopleImage}
                    alt="Customer support professionals wearing headsets at their desks"
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1024px) 600px, 100vw"
                    className="object-cover object-[50%_30%]"
                  />
                </div>
              </Reveal>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {peopleGroups.map((group, i) => (
                <Reveal key={group.title} delay={i * 80} className="h-full">
                  <article
                    className={cn(
                      "h-full rounded-xl border-t-[6px] bg-white p-7 text-foreground lg:p-8",
                      tones[group.tone].bar,
                    )}
                  >
                    <h3
                      className={cn(
                        "font-heading text-2xl font-semibold tracking-[-0.02em]",
                        tones[group.tone].text,
                      )}
                    >
                      {group.title}
                    </h3>
                    <p className="mt-2 text-[0.975rem] text-muted-foreground">
                      {group.subtitle}
                    </p>
                    <ul className="mt-6 space-y-3.5 border-t pt-6">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-[0.975rem] leading-snug"
                        >
                          <span
                            aria-hidden="true"
                            className={cn(
                              "mt-[0.4rem] size-2 shrink-0 rounded-full",
                              tones[group.tone].tile,
                            )}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Software Solutions */}
        <section id="products" className={section}>
          <div
            className={cn(
              container,
              "grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16",
            )}
          >
            <Reveal>
              <p className={kicker}>Software Solutions</p>
              <h2 className={cn(h2, "mt-3")}>
                Technology that simplifies, connects and scales.
              </h2>
              <p className={cn(lead, "mt-5")}>
                We develop and implement practical software solutions to help
                organizations manage operations, people and growth efficiently.
              </p>
              <ul className="mt-8 space-y-3">
                {software.map((item) => (
                  <li
                    key={item.name}
                    className={cn(
                      "flex items-center gap-4 rounded-2xl p-3 pr-5 transition-transform duration-200 hover:translate-x-1.5 sm:gap-5",
                      tones[item.tone].tint,
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "flex size-16 shrink-0 items-center justify-center rounded-xl font-heading text-xl font-semibold tracking-[-0.02em]",
                        tones[item.tone].tile,
                      )}
                    >
                      {item.name}
                    </span>
                    <div>
                      <h3 className="font-heading text-lg leading-snug font-semibold tracking-[-0.01em]">
                        <span className="sr-only">{item.name}: </span>
                        {item.full}
                      </h3>
                      <p className="mt-0.5 text-[0.95rem] leading-snug text-foreground/75">
                        {item.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={cn(btnPrimary, "mt-9")}
                aria-label="Learn more about software solutions"
              >
                Learn More
              </a>
            </Reveal>

            <Reveal delay={100}>
              <div className="relative mx-2 sm:mx-4 lg:mx-0">
                <div
                  aria-hidden="true"
                  className="absolute -top-3 -right-3 h-3/5 w-3/5 rounded-2xl bg-brand-red sm:-top-4 sm:-right-4"
                />
                <div
                  aria-hidden="true"
                  className="absolute -bottom-3 -left-3 h-2/5 w-2/5 rounded-2xl bg-primary sm:-bottom-4 sm:-left-4"
                />
                <div
                  aria-hidden="true"
                  className="absolute -left-4 top-8 z-20 flex w-16 flex-col gap-1.5 sm:-left-8 sm:top-10 sm:w-28 sm:gap-2"
                >
                  <span className="h-2.5 bg-brand-gold" />
                  <span className="h-2.5 bg-brand-red" />
                  <span className="h-2.5 bg-primary" />
                </div>
                <div className="relative z-10 aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_24px_48px_-24px_rgba(14,39,49,0.45)] lg:aspect-[10/9]">
                  <Image
                    src={softwareImage}
                    alt="A laptop and monitor showing a business dashboard with tables and charts"
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1024px) 580px, 100vw"
                    className="object-cover object-[60%_50%]"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 6. Merchandise */}
        <section id="merchandise" className={cn(section, "bg-gold-tint")}>
          <div
            className={cn(
              container,
              "grid items-center gap-12 lg:grid-cols-2 lg:gap-16",
            )}
          >
            <Reveal className="lg:order-2">
              <p className="font-heading font-semibold text-brand-gold-deep">
                Merchandise
              </p>
              <h2 className={cn(h2, "mt-3")}>
                Branded products that make an impact.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-foreground/80">
                High-quality, customized merchandise for organizations, events,
                ministries, conferences and corporate needs.
              </p>
              <dl className="mt-8 space-y-5">
                {merchandise.map((item) => (
                  <div
                    key={item.name}
                    className={cn("border-l-4 pl-5", tones[item.tone].line)}
                  >
                    <dt className="font-heading text-lg font-semibold tracking-[-0.01em]">
                      {item.name}
                    </dt>
                    <dd className="mt-0.5 text-[0.975rem] text-foreground/75">
                      {item.text}
                    </dd>
                  </div>
                ))}
              </dl>
              <a
                href="#contact"
                className={cn(btnRed, "mt-9")}
                aria-label="Learn more about merchandise"
              >
                Learn More
              </a>
            </Reveal>

            <Reveal delay={100} className="lg:order-1">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -bottom-4 -left-3 h-1/2 w-1/2 rounded-xl bg-brand-gold sm:-left-4"
                />
                <div className="relative aspect-[3/2] overflow-hidden rounded-xl">
                  <Image
                    src={merchandiseImage}
                    alt="T-shirts, a cap, a tote bag, a steel bottle, a lanyard and a gift box laid out flat"
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1024px) 620px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 7. Our Clients */}
        <section id="clients" className={section}>
          <div className={container}>
            <Reveal>
              <p className={kicker}>Our Clients</p>
              <h2 className={cn(h2, "mt-3 max-w-2xl")}>
                Trusted by organizations across industries.
              </h2>
            </Reveal>
            <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:mt-12">
              {clients.map((client, i) => (
                <li key={client.name}>
                  <Reveal delay={(i % 3) * 80} className="h-full">
                    <figure
                      className={cn(
                        "group relative h-full overflow-hidden rounded-2xl border-b-[5px] shadow-[0_18px_36px_-24px_rgba(14,39,49,0.5)] transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_24px_44px_-22px_rgba(14,39,49,0.55)]",
                        tones[client.tone].line,
                      )}
                    >
                      <div className="relative aspect-[4/3] sm:aspect-[3/2]">
                        <Image
                          src={client.image}
                          alt={client.alt}
                          fill
                          placeholder="blur"
                          sizes="(min-width: 1280px) 400px, (min-width: 768px) 33vw, 50vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      {/* Name tag sits on the photo, bottom left. */}
                      <figcaption className="absolute bottom-2.5 left-2.5 flex max-w-[calc(100%-1.25rem)] items-center gap-2 rounded-lg bg-white py-1.5 pr-3 pl-2 font-heading text-sm leading-tight font-semibold tracking-[-0.01em] text-foreground shadow-[0_6px_16px_-6px_rgba(14,39,49,0.45)] sm:bottom-4 sm:left-4 sm:gap-2.5 sm:py-2 sm:pr-4 sm:pl-2.5 sm:text-base">
                        <span
                          aria-hidden="true"
                          className={cn(
                            "size-3 shrink-0 rounded-[4px] sm:size-3.5",
                            tones[client.tone].tile,
                          )}
                        />
                        {client.name}
                      </figcaption>
                    </figure>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 8. Why Telo */}
        <section id="why" className={cn(section, "bg-accent")}>
          <div
            className={cn(
              container,
              "grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16",
            )}
          >
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <p className={kicker}>Why Telo Management Consulting</p>
              <h2 className={cn(h2, "mt-3")}>
                Global capability.
                <br />
                <span className="text-primary-deep">Real value.</span>
              </h2>
              <Stars className="mt-8" />
            </Reveal>

            <ul className="space-y-4">
              {reasons.map((reason, i) => (
                <li key={reason.title}>
                  <Reveal
                    delay={i * 60}
                    className="flex gap-5 rounded-xl bg-white p-6"
                  >
                    <span
                      className={cn(
                        "flex size-12 shrink-0 items-center justify-center rounded-lg",
                        tones[reason.tone].tile,
                      )}
                    >
                      <reason.icon className="size-6" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-heading text-xl font-semibold tracking-[-0.015em]">
                        {reason.title}
                      </h3>
                      <p className="mt-1 max-w-xl text-muted-foreground">
                        {reason.text}
                      </p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 9. Let's Create What's Next */}
        <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground lg:py-28">
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 hidden h-full w-56 flex-col justify-center gap-5 lg:flex"
          >
            <span className="h-7 bg-white/25" />
            <span className="h-7 bg-white/25" />
            <span className="h-7 bg-white/25" />
          </div>
          <Reveal className={cn(container, "relative")}>
            <Stars className="mb-6 text-white" />
            <h2 className="font-heading text-xl font-semibold">
              Let’s Create What’s Next
            </h2>
            <p className="mt-5 max-w-3xl font-heading text-[clamp(2rem,4.6vw,3.5rem)] leading-[1.1] font-semibold tracking-[-0.03em]">
              Business growth. More opportunities. A wider impact.
            </p>
            <a href="#contact" className={cn(btnRed, "mt-10")}>
              Get in Touch
            </a>
          </Reveal>
        </section>

        {/* 10. Map with address */}
        <section id="contact" className={section}>
          <div
            className={cn(
              container,
              "grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16",
            )}
          >
            <Reveal>
              <p className={kicker}>Contact</p>
              <h2 className={cn(h2, "mt-3")}>Visit our office</h2>
              <address className="mt-8 flex gap-4 rounded-xl bg-accent p-6 text-lg leading-relaxed not-italic">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-brand-red text-white">
                  <MapPin className="size-6" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-semibold">
                    {company.legalName}
                  </span>
                  {company.addressLines.map((line) => (
                    <span key={line} className="block text-foreground/75">
                      {line}
                    </span>
                  ))}
                </span>
              </address>
            </Reveal>

            <Reveal delay={100}>
              <div className="overflow-hidden rounded-xl bg-secondary">
                <iframe
                  src={mapSrc}
                  title="Map showing the Telo Management Consultant office in Old Washermenpet, Chennai"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block h-[22rem] w-full lg:h-[26rem]"
                />
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
      <BackToTop />
    </>
  );
}
