import Image, { type StaticImageData } from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Briefcase,
  Check,
  Globe,
  Layers,
  Target,
  Timer,
  Users,
  Wallet,
} from "lucide-react";
import heroImage from "../../public/images/hero-meeting.jpg";
import digitalImage from "../../public/images/digital.jpg";
import bpoImage from "../../public/images/bpo.jpg";
import staffingImage from "../../public/images/staffing.jpg";
import trainingImage from "../../public/images/training.jpg";
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
import { ServiceTabs, type ServiceGroup } from "@/components/service-tabs";
import { SiteHeader } from "@/components/site-header";
import { buttonVariants } from "@/components/ui/button";
import { company } from "@/lib/site";
import { cn } from "@/lib/utils";

/* ── Shared layout and type styles ───────────────────────────────────────── */

const container = "mx-auto w-full max-w-[84rem] px-6 sm:px-10";
const section = "scroll-mt-20 py-24 lg:py-36";
const h2 =
  "font-heading text-[clamp(1.75rem,2.9vw,2.5rem)] leading-[1.12] font-semibold tracking-[-0.03em]";
const lead = "text-lg leading-relaxed text-muted-foreground lg:text-[1.1875rem]";
const index =
  "font-heading text-sm font-semibold tracking-[0.04em] tabular-nums";
const frame = "relative overflow-hidden rounded-sm bg-secondary";
const zoom =
  "object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]";

const btn = "h-13 gap-3 px-7 text-[0.975rem] font-semibold";
const btnPrimary = cn(buttonVariants(), btn, "hover:bg-primary-deep");
const btnOutlineOnDark = cn(
  buttonVariants({ variant: "outline" }),
  btn,
  "border-white/40 bg-white/5 text-white backdrop-blur-sm hover:border-white hover:bg-white hover:text-primary",
);
const btnOnDark = cn(
  buttonVariants(),
  btn,
  "bg-brand-cyan text-primary hover:bg-white",
);
const btnArrow =
  "size-4 transition-transform duration-300 group-hover/button:translate-x-1";

/** Small uppercase label that opens every section. */
function Eyebrow({
  children,
  onDark = false,
  className,
}: {
  children: React.ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-[0.8125rem] font-semibold tracking-[0.14em] uppercase",
        onDark ? "text-brand-cyan" : "text-primary-deep",
        className,
      )}
    >
      <span aria-hidden="true" className="h-px w-8 bg-current" />
      {children}
    </p>
  );
}

const two = (n: number) => String(n + 1).padStart(2, "0");

/* ── Content ─────────────────────────────────────────────────────────────── */

const heroFacts: { icon: typeof Globe; title: string; tags: string[] }[] = [
  {
    icon: Globe,
    title: "Global Delivery",
    tags: ["Singapore", "India", "Worldwide"],
  },
  {
    icon: Briefcase,
    title: "Diverse Industries",
    tags: ["Education", "Healthcare", "Businesses", "Non-Profits & more"],
  },
  {
    icon: Users,
    title: "People First",
    tags: ["Creating opportunities"],
  },
  {
    icon: Target,
    title: "Larger Purpose",
    tags: ["Empowering communities"],
  },
];

const solutions: {
  image: StaticImageData;
  alt: string;
  title: string;
  text: string;
  href: string;
}[] = [
  {
    image: cardDigital,
    alt: "A marketing team planning a campaign around a laptop and phone mockups",
    title: "Digital Growth",
    text: "Build your brand, reach the right audience and drive measurable results.",
    href: "#digital-growth",
  },
  {
    image: cardPeople,
    alt: "A trainer leading a workshop for a group of professionals",
    title: "BPO, Staffing and Training",
    text: "Reliable support and the right talent to keep you moving.",
    href: "#bpo-staffing",
  },
  {
    image: cardSoftware,
    alt: "Two developers reviewing an application on their monitors",
    title: "Software Solutions",
    text: "ERP, CRM, LMS and custom solutions to simplify and scale.",
    href: "#products",
  },
  {
    image: cardMerchandise,
    alt: "An event team wearing matching t-shirts and lanyards",
    title: "Merchandise",
    text: "Branded products that make an impact.",
    href: "#merchandise",
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

const peopleGroups: ServiceGroup[] = [
  {
    title: "BPO",
    image: bpoImage,
    alt: "Two smiling customer support executives wearing headsets at their desks",
    subtitle: "Business Process Outsourcing",
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
    image: staffingImage,
    alt: "A candidate shaking hands with a hiring manager across a desk",
    subtitle: "The right talent for your business",
    items: [
      "Staff Augmentation (Short & Long Term)",
      "Recruitment & Talent Sourcing",
      "Dedicated Teams (Onsite / Offshore / Hybrid)",
    ],
  },
  {
    title: "Training",
    image: trainingImage,
    alt: "A trainer at a flip chart leading a session for a group of professionals",
    subtitle: "Developing people and organizations for a stronger tomorrow.",
    items: [
      "Soft Skills Training & Development for SMEs, FMCG and Educational institutions",
      "Management Training & Development (Leadership Development)",
      "CSR Project Planning and Implementation for Industries and Corporations",
    ],
  },
];

const software: { name: string; full: string; text: string }[] = [
  {
    name: "ERP",
    full: "Enterprise Resource Planning",
    text: "Manage operations, resources and finance efficiently.",
  },
  {
    name: "CRM",
    full: "Customer Relationship Management",
    text: "Build stronger relationships and drive revenue.",
  },
  {
    name: "LMS",
    full: "Learning Management System",
    text: "Deliver, manage and track learning effortlessly.",
  },
];

const merchandise: { name: string; text: string }[] = [
  {
    name: "T-Shirts",
    text: "Custom designs for teams, events and ministries.",
  },
  {
    name: "Accessories",
    text: "Caps, bags, bottles, lanyards and more.",
  },
  {
    name: "Souvenirs",
    text: "Meaningful gifts for conferences, events and special occasions.",
  },
];

const clients: { image: StaticImageData; alt: string; name: string }[] = [
  {
    image: clientStartups,
    alt: "A startup team working together at a shared table",
    name: "Start Ups",
  },
  {
    image: clientEducation,
    alt: "A teacher helping students in a classroom",
    name: "Education",
  },
  {
    image: clientHealthcare,
    alt: "A doctor and a nurse reviewing a tablet in a hospital corridor",
    name: "Healthcare",
  },
  {
    image: clientBusiness,
    alt: "Executives shaking hands across a boardroom table",
    name: "Businesses & Corporates",
  },
  {
    image: clientNonprofit,
    alt: "Volunteers handing school supplies to children",
    name: "Non-Profits",
  },
  {
    image: clientGlobal,
    alt: "An international team on a video conference",
    name: "Global Clients",
  },
];

const reasons: { icon: typeof Wallet; title: string; text: string }[] = [
  {
    icon: Wallet,
    title: "Cost Effective",
    text: "High quality at competitive pricing.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Focus",
    text: "Proven processes and consistent delivery.",
  },
  {
    icon: Timer,
    title: "Faster Turnaround",
    text: "Agile teams and streamlined workflows.",
  },
  {
    icon: Globe,
    title: "Global Delivery Model",
    text: "Headquartered in Singapore with delivery teams in India, serving clients across the world.",
  },
  {
    icon: Layers,
    title: "Flexible Engagement",
    text: "Project-based, dedicated teams or end-to-end delivery.",
  },
];

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&output=embed`;

/* ── Page ────────────────────────────────────────────────────────────────── */

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
        <section id="home" className="bg-secondary">
          {/* Full-bleed photo with the headline and actions set over it. */}
          <div className="relative flex min-h-[36rem] items-center overflow-hidden bg-primary text-white sm:min-h-[40rem] lg:min-h-[44rem]">
            <Image
              src={heroImage}
              alt="A business team in a meeting around a table in a glass-walled office"
              fill
              preload
              placeholder="blur"
              sizes="100vw"
              className="settle object-cover object-[30%_30%] lg:object-[50%_30%]"
            />
            {/* Navy scrims: heavy on the left under the text, and a band at the
                top so the header stays readable. */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,34,57,0.95)_0%,rgba(11,34,57,0.82)_40%,rgba(11,34,57,0.3)_100%)] max-lg:bg-primary/70"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(11,34,57,0.7),transparent)]"
            />

            <div className={cn(container, "relative pt-28 pb-14 lg:pt-32 lg:pb-16")}>
              <div className="max-w-3xl">
                <p className="rise flex flex-wrap gap-x-2.5 gap-y-1 text-[0.8125rem] font-semibold tracking-[0.14em] text-brand-cyan uppercase">
                  <span>Technology.</span>
                  <span>People.</span>
                  <span>Creativity.</span>
                  <span>Purpose.</span>
                </p>
                <h1 className="rise mt-7 font-heading text-[clamp(2.125rem,4.6vw,4rem)] leading-[1.04] font-semibold tracking-[-0.035em] [animation-delay:80ms]">
                  Accelerate Growth.
                  <br />
                  <span className="text-brand-cyan">Extend Impact.</span>
                </h1>
                <p className="rise mt-6 max-w-[34rem] text-lg leading-relaxed text-white/85 [animation-delay:160ms]">
                  We help organizations grow, operate efficiently and create
                  lasting impact — globally.
                </p>
                <div className="rise mt-10 flex flex-wrap gap-3 [animation-delay:240ms]">
                  <a href="#services" className={btnOnDark}>
                    Explore Our Solutions
                    <ArrowRight className={btnArrow} aria-hidden="true" />
                  </a>
                  <a href="#contact" className={btnOutlineOnDark}>
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Four facts, set as a quiet ruled row under the hero. */}
          <div className={cn(container, "py-16 lg:py-20")}>
            <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
              {heroFacts.map((fact, i) => (
                <li key={fact.title}>
                  <Reveal
                    delay={i * 80}
                    className="border-t border-foreground/15 pt-6"
                  >
                    <fact.icon
                      className="size-6 text-primary-deep"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <h2 className="mt-5 font-heading text-lg leading-tight font-semibold tracking-[-0.02em]">
                      {fact.title}
                    </h2>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">
                      {fact.tags.join(" · ")}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 2. Our Solutions */}
        <section id="services" className={section}>
          <div className={container}>
            <Reveal className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
              <div className="lg:col-span-7">
                <Eyebrow>Our Solutions</Eyebrow>
                <h2 className={cn(h2, "mt-6")}>
                  One Partner. Multiple Ways to Grow.
                </h2>
              </div>
              <p className={cn(lead, "lg:col-span-5")}>
                From digital growth to people solutions, from software to
                branded merchandise — we bring the right mix of technology,
                talent and creativity to help you move forward.
              </p>
            </Reveal>

            <div className="mt-16 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
              {solutions.map((item, i) => (
                <Reveal key={item.title} delay={i * 80} className="h-full">
                  <a href={item.href} className="group flex h-full flex-col">
                    <div className={cn(frame, "aspect-[4/3] lg:aspect-[5/6]")}>
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        placeholder="blur"
                        sizes="(min-width: 1024px) 310px, (min-width: 640px) 50vw, 100vw"
                        className={zoom}
                      />
                    </div>
                    <div className="mt-6 flex items-start justify-between gap-4">
                      <span className={cn(index, "pt-1 text-primary-deep")}>
                        {two(i)}
                      </span>
                      <ArrowUpRight
                        className="size-5 text-foreground/30 transition-[color,transform] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary-deep"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="mt-3 font-heading text-xl leading-snug font-semibold tracking-[-0.025em]">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-[0.975rem] leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                    <span className="mt-auto pt-6 text-sm font-semibold">
                      <span className="link-line pb-0.5">View details</span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Digital Growth */}
        <section id="digital-growth" className={cn(section, "bg-secondary")}>
          <div className={container}>
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
              <Reveal className="lg:col-span-6">
                <div className={cn(frame, "aspect-[4/3] bg-border")}>
                  <Image
                    src={digitalImage}
                    alt="A marketer reviewing campaign analytics on a monitor and a social feed on a phone"
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1024px) 640px, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>

              <Reveal delay={100} className="lg:col-span-5 lg:col-start-8">
                <Eyebrow>Digital Growth</Eyebrow>
                <h2 className={cn(h2, "mt-6")}>
                  From Visibility to Real Results.
                </h2>
                <p className={cn(lead, "mt-6")}>
                  We create data-driven digital strategies that help
                  organizations build their brand, reach the right audience and
                  achieve measurable growth.
                </p>
                <ul className="mt-10 border-b border-foreground/12">
                  {digitalServices.map((service) => (
                    <li
                      key={service}
                      className="flex items-center gap-4 border-t border-foreground/12 py-3.5 text-[0.975rem] leading-snug font-medium"
                    >
                      <Check
                        className="size-4 shrink-0 text-primary-deep"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                      {service}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* A real sequence, so it is numbered. */}
            <Reveal className="mt-20 lg:mt-28">
              <ol className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                {digitalSteps.map((step, i) => {
                  const last = i === digitalSteps.length - 1;
                  return (
                    <li
                      key={step}
                      className={cn(
                        "border-t-2 pt-6",
                        last ? "border-brand-cyan" : "border-foreground/15",
                      )}
                    >
                      <span className={cn(index, "text-primary-deep")}>
                        {two(i)}
                      </span>
                      <span className="mt-3 block font-heading text-xl font-semibold tracking-[-0.025em] lg:text-2xl">
                        {step}
                      </span>
                    </li>
                  );
                })}
              </ol>
            </Reveal>
          </div>
        </section>

        {/* 4. BPO, Staffing & Training: one service at a time, by tab */}
        <section id="bpo-staffing" className={section}>
          <div className={container}>
            <Reveal className="max-w-3xl">
              <Eyebrow>BPO, Staffing & Training</Eyebrow>
              <h2 className={cn(h2, "mt-6")}>
                People and processes to keep you moving.
              </h2>
            </Reveal>

            <Reveal delay={100} className="mt-12 lg:mt-16">
              <ServiceTabs groups={peopleGroups} />
            </Reveal>
          </div>
        </section>

        {/* 5. Software Solutions */}
        <section id="products" className={cn(section, "bg-secondary")}>
          <div
            className={cn(
              container,
              "grid items-center gap-14 lg:grid-cols-12 lg:gap-10",
            )}
          >
            <Reveal className="lg:col-span-6">
              <Eyebrow>Software Solutions</Eyebrow>
              <h2 className={cn(h2, "mt-6")}>
                Technology that simplifies, connects and scales.
              </h2>
              <p className={cn(lead, "mt-6 max-w-xl")}>
                We develop and implement practical software solutions to help
                organizations manage operations, people and growth efficiently.
              </p>
              <ul className="mt-10 border-b border-foreground/12">
                {software.map((item) => (
                  <li
                    key={item.name}
                    className="group grid grid-cols-[4.5rem_1fr] items-baseline gap-5 border-t border-foreground/12 py-6 sm:grid-cols-[6.5rem_1fr] sm:gap-8"
                  >
                    <span
                      aria-hidden="true"
                      className="font-heading text-2xl leading-none font-semibold tracking-[-0.035em] text-foreground/25 transition-colors duration-300 group-hover:text-primary-deep sm:text-[1.875rem]"
                    >
                      {item.name}
                    </span>
                    <div>
                      <h3 className="font-heading text-lg leading-snug font-semibold tracking-[-0.02em]">
                        <span className="sr-only">{item.name}: </span>
                        {item.full}
                      </h3>
                      <p className="mt-1 text-[0.975rem] leading-relaxed text-muted-foreground">
                        {item.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={cn(btnPrimary, "mt-10")}
                aria-label="Learn more about software solutions"
              >
                Learn More
                <ArrowRight className={btnArrow} aria-hidden="true" />
              </a>
            </Reveal>

            <Reveal delay={100} className="lg:col-span-5 lg:col-start-8">
              <div className={cn(frame, "aspect-[4/3] lg:aspect-[5/6]")}>
                <Image
                  src={softwareImage}
                  alt="A laptop and monitor showing a business dashboard with tables and charts"
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 540px, 100vw"
                  className="object-cover object-[60%_50%]"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* 6. Merchandise */}
        <section id="merchandise" className={section}>
          <div
            className={cn(
              container,
              "grid items-center gap-14 lg:grid-cols-12 lg:gap-10",
            )}
          >
            <Reveal className="lg:order-2 lg:col-span-5 lg:col-start-8">
              <Eyebrow>Merchandise</Eyebrow>
              <h2 className={cn(h2, "mt-6")}>
                Branded products that make an impact.
              </h2>
              <p className={cn(lead, "mt-6")}>
                High-quality, customized merchandise for organizations, events,
                ministries, conferences and corporate needs.
              </p>
              <dl className="mt-10 border-b border-foreground/12">
                {merchandise.map((item) => (
                  <div
                    key={item.name}
                    className="grid gap-1 border-t border-foreground/12 py-5 sm:grid-cols-[9rem_1fr] sm:gap-6"
                  >
                    <dt className="font-heading text-lg font-semibold tracking-[-0.02em]">
                      {item.name}
                    </dt>
                    <dd className="text-[0.975rem] leading-relaxed text-muted-foreground">
                      {item.text}
                    </dd>
                  </div>
                ))}
              </dl>
              <a
                href="#contact"
                className={cn(btnPrimary, "mt-10")}
                aria-label="Learn more about merchandise"
              >
                Learn More
                <ArrowRight className={btnArrow} aria-hidden="true" />
              </a>
            </Reveal>

            <Reveal delay={100} className="lg:order-1 lg:col-span-6">
              <div className={cn(frame, "aspect-[3/2] bg-border")}>
                <Image
                  src={merchandiseImage}
                  alt="T-shirts, a cap, a tote bag, a steel bottle, a lanyard and a gift box laid out flat"
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 640px, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* 7. Our Clients */}
        <section id="clients" className={cn(section, "bg-secondary")}>
          <div className={container}>
            <Reveal>
              <Eyebrow>Our Clients</Eyebrow>
              <h2 className={cn(h2, "mt-6 max-w-3xl")}>
                Trusted by organizations across industries.
              </h2>
            </Reveal>
          </div>

          {/* Auto-scrolling carousel. The list is rendered twice so the loop is
              seamless; the second copy is hidden from assistive tech. It pauses
              on hover and focus, and becomes a plain swipeable row for people
              who prefer reduced motion (see .marquee in globals.css). */}
          <Reveal className="marquee mt-14 lg:mt-20">
            <div className="marquee-track">
              {[0, 1].map((copy) => (
                <ul
                  key={copy}
                  aria-hidden={copy === 1 ? true : undefined}
                  className={cn(
                    "flex shrink-0 gap-5 pr-5 sm:gap-6 sm:pr-6",
                    copy === 1 && "marquee-copy",
                  )}
                >
                  {clients.map((client, i) => (
                    <li
                      key={client.name}
                      className="w-[16.5rem] shrink-0 sm:w-[22rem] lg:w-[26rem]"
                    >
                      <figure className="group">
                        <div className={cn(frame, "aspect-[4/3]")}>
                          <Image
                            src={client.image}
                            alt={copy === 0 ? client.alt : ""}
                            fill
                            placeholder="blur"
                            sizes="(min-width: 1024px) 416px, (min-width: 640px) 352px, 264px"
                            className={zoom}
                          />
                        </div>
                        <figcaption className="mt-4 flex items-baseline justify-between gap-3 border-t border-foreground/15 pt-4">
                          <span className="font-heading text-base leading-snug font-semibold tracking-[-0.02em] sm:text-xl">
                            {client.name}
                          </span>
                          <span
                            aria-hidden="true"
                            className={cn(index, "text-foreground/35")}
                          >
                            {two(i)}
                          </span>
                        </figcaption>
                      </figure>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </Reveal>
        </section>

        {/* 8. Why Telo */}
        <section id="why" className={section}>
          <div
            className={cn(container, "grid gap-14 lg:grid-cols-12 lg:gap-10")}
          >
            <Reveal className="lg:sticky lg:top-32 lg:col-span-5 lg:self-start">
              <Eyebrow>Why Telo Management Consulting</Eyebrow>
              <h2 className={cn(h2, "mt-6")}>
                Global capability.
                <br />
                <span className="text-primary-deep">Real value.</span>
              </h2>
            </Reveal>

            <ul className="border-b border-foreground/12 lg:col-span-6 lg:col-start-7">
              {reasons.map((reason, i) => (
                <li key={reason.title}>
                  <Reveal
                    delay={i * 60}
                    className="grid grid-cols-[auto_1fr] gap-x-6 border-t border-foreground/12 py-7 sm:gap-x-8 sm:py-8"
                  >
                    <reason.icon
                      className="mt-0.5 size-7 text-primary-deep"
                      strokeWidth={1.25}
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-heading text-xl font-semibold tracking-[-0.025em] sm:text-[1.375rem]">
                        {reason.title}
                      </h3>
                      <p className="mt-1.5 max-w-xl text-muted-foreground">
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
        <section className="relative overflow-hidden bg-primary py-20 text-white lg:py-28">
          {/* Background photo, pushed back under navy so the text stays readable. */}
          <Image
            src={softwareImage}
            alt=""
            fill
            placeholder="blur"
            sizes="100vw"
            className="object-cover object-[50%_45%]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,34,57,0.97)_0%,rgba(11,34,57,0.93)_50%,rgba(11,34,57,0.74)_100%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(60%_90%_at_100%_0%,rgba(3,179,228,0.18),transparent_70%)]"
          />
          {/* One left-aligned stack: label, statement, action. */}
          <Reveal className={cn(container, "relative")}>
            <div className="max-w-5xl">
              <h2 className="flex items-center gap-3 text-[0.8125rem] font-semibold tracking-[0.14em] text-brand-cyan uppercase">
                <span aria-hidden="true" className="h-px w-8 bg-current" />
                Let’s Create What’s Next
              </h2>
              <p className="mt-7 font-heading text-[clamp(1.875rem,3.6vw,3rem)] leading-[1.1] font-semibold tracking-[-0.03em]">
                {/* One line where it fits; on narrow screens it breaks between
                    the two sentences, never inside one. */}
                <span className="block">
                  <span className="inline-block">Business growth.</span>{" "}
                  <span className="inline-block">More opportunities.</span>
                </span>
                <span className="block">A wider impact.</span>
              </p>
              <a href="#contact" className={cn(btnOnDark, "mt-10 lg:mt-12")}>
                Get in Touch
                <ArrowRight className={btnArrow} aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </section>

        {/* 10. Contact: full-width map (the address lives in the footer) */}
        <section id="contact" className={section}>
          <div className={container}>
            {/* No visible heading; this one names the section for screen readers. */}
            <h2 className="sr-only">Contact</h2>

            <Reveal>
              <div className={cn(frame, "border")}>
                <iframe
                  src={mapSrc}
                  title="Map showing the Telo Management Consultant office in Old Washermenpet, Chennai"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block h-[24rem] w-full lg:h-[32rem]"
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
