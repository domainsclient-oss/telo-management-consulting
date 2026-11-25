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
import { ClientCarousel, type Client } from "@/components/client-carousel";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { ServicePanels, type ServiceGroup } from "@/components/service-panels";
import { SiteHeader } from "@/components/site-header";
import { buttonVariants } from "@/components/ui/button";
import { company } from "@/lib/site";
import { cn } from "@/lib/utils";

/* ── Shared layout and type styles ───────────────────────────────────────── */

const container = "mx-auto w-full max-w-[84rem] px-6 sm:px-10";
const section = "scroll-mt-20 py-20 lg:py-28";
const h2 =
  "font-heading text-[clamp(1.75rem,2.9vw,2.5rem)] leading-[1.12] font-semibold tracking-[-0.022em]";
const lead = "text-lg leading-relaxed text-muted-foreground lg:text-[1.1875rem]";
const index =
  "font-heading text-sm font-semibold tracking-[0.04em] tabular-nums";
const frame = "relative overflow-hidden rounded-sm bg-secondary";
/* Soft navy-tinted shadow for raised photos and panels. */
const shadow = "shadow-[0_28px_60px_-30px_rgba(11,34,57,0.35)]";
const zoom =
  "object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]";

const btn = "h-13 gap-3 px-7 text-[0.975rem] font-semibold";
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

/* `zoom` and `focus` crop a close-up of each product out of the flat-lay photo
   (CSS background-size and background-position). */
const merchandise: {
  name: string;
  text: string;
  zoom: string;
  focus: string;
}[] = [
  {
    name: "T-Shirts",
    text: "Custom designs for teams, events and ministries.",
    zoom: "300%",
    focus: "26% 0%",
  },
  {
    name: "Accessories",
    text: "Caps, bags, bottles, lanyards and more.",
    zoom: "260%",
    focus: "63% 100%",
  },
  {
    name: "Souvenirs",
    text: "Meaningful gifts for conferences, events and special occasions.",
    zoom: "300%",
    focus: "100% 94%",
  },
];

const clients: Client[] = [
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
        {/* 1. Hero: full-bleed photo, headline and actions over it, and the
            four facts in a frosted strip along the bottom edge. */}
        <section
          id="home"
          className="relative isolate flex min-h-[44rem] flex-col overflow-hidden bg-primary text-white lg:min-h-[50rem]"
        >
          <Image
            src={heroImage}
            alt="A business team in a meeting around a table in a glass-walled office"
            fill
            preload
            placeholder="blur"
            sizes="100vw"
            className="drift -z-30 object-cover object-[30%_30%] lg:object-[50%_30%]"
          />
          {/* Scrims, back to front: navy that is heavy on the left under the
              text; a darker band at the bottom under the facts strip and at
              the top under the header; a soft cyan glow from the lower left. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(11,34,57,0.96)_0%,rgba(11,34,57,0.84)_42%,rgba(11,34,57,0.28)_100%)] max-lg:bg-primary/75"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(7,23,38,0.7)_0%,rgba(7,23,38,0)_22%,rgba(7,23,38,0)_55%,rgba(7,23,38,0.88)_100%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[radial-gradient(48%_60%_at_0%_100%,rgba(3,179,228,0.28),transparent_70%)]"
          />

          <div className={cn(container, "flex flex-1 items-center pt-32 pb-14 lg:pt-36 lg:pb-16")}>
            <div className="max-w-3xl">
              <p className="rise flex flex-wrap gap-x-2 gap-y-1 text-[0.6875rem] font-semibold tracking-[0.1em] text-brand-cyan uppercase sm:inline-flex sm:gap-x-2.5 sm:rounded-full sm:border sm:border-white/20 sm:bg-white/[0.07] sm:px-5 sm:py-2.5 sm:text-[0.8125rem] sm:tracking-[0.14em] sm:backdrop-blur-md">
                <span>Technology.</span>
                <span>People.</span>
                <span>Creativity.</span>
                <span>Purpose.</span>
              </p>
              <h1 className="rise mt-7 font-heading text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.03] font-semibold tracking-[-0.025em] [animation-delay:80ms] lg:mt-8">
                Accelerate Growth.
                <br />
                <span className="text-brand-cyan">Extend Impact.</span>
              </h1>
              {/* Cyan rule ties the statement to the supporting line. */}
              <p className="rise mt-7 max-w-[34rem] border-l-2 border-brand-cyan pl-5 text-lg leading-relaxed text-white/85 [animation-delay:160ms] lg:text-[1.1875rem]">
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

          {/* Four facts in a frosted strip. The 1px inner highlight gives the
              glass an edge. */}
          <div className={cn(container, "rise pb-6 [animation-delay:340ms] sm:pb-8 lg:pb-10")}>
            <ul className="grid grid-cols-2 overflow-hidden rounded-sm border border-white/15 bg-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-md lg:grid-cols-4">
              {heroFacts.map((fact) => (
                <li
                  key={fact.title}
                  className="flex flex-col gap-4 border-white/12 p-5 even:border-l sm:flex-row sm:items-start sm:p-6 lg:border-l lg:p-7 lg:first:border-l-0 max-lg:[&:nth-child(n+3)]:border-t"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-sm bg-brand-cyan/15 text-brand-cyan ring-1 ring-brand-cyan/30">
                    <fact.icon
                      className="size-5"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </span>
                  <div>
                    <h2 className="font-heading text-[1.0625rem] leading-tight font-semibold tracking-[-0.012em]">
                      {fact.title}
                    </h2>
                    <p className="mt-1.5 text-[0.9rem] leading-relaxed text-white/70">
                      {/* Non-breaking joins: a separator never starts a line
                          and hyphenated words stay whole. */}
                      {fact.tags.join(" · ").replaceAll("-", "‑")}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 2. Our Solutions: four photo tiles, text set over the image */}
        <section id="services" className={section}>
          <div className={container}>
            <Reveal className="max-w-3xl">
              <Eyebrow>Our Solutions</Eyebrow>
              <h2 className={cn(h2, "mt-6")}>
                One Partner. Multiple Ways to Grow.
              </h2>
              <p className={cn(lead, "mt-6")}>
                From digital growth to people solutions, from software to
                branded merchandise — we bring the right mix of technology,
                talent and creativity to help you move forward.
              </p>
            </Reveal>

            {/* Every other tile sits lower on large screens, so the row reads
                as a composition instead of four equal boxes. */}
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:pb-12">
              {solutions.map((item, i) => (
                <Reveal
                  key={item.title}
                  delay={i * 80}
                  className={cn(i % 2 === 1 && "lg:translate-y-12")}
                >
                  <a
                    href={item.href}
                    className="group relative block aspect-[4/5] overflow-hidden rounded-sm bg-primary text-white sm:aspect-[3/4]"
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      placeholder="blur"
                      sizes="(min-width: 1024px) 310px, (min-width: 640px) 50vw, 100vw"
                      className={zoom}
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,34,57,0.05)_25%,rgba(11,34,57,0.78)_62%,rgba(11,34,57,0.96)_100%)]"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-6 lg:p-7">
                      <h3 className="font-heading text-[1.375rem] leading-tight font-semibold tracking-[-0.016em]">
                        {item.title}
                      </h3>
                      <p className="mt-2.5 text-[0.95rem] leading-relaxed text-white/80">
                        {item.text}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan">
                        View details
                        <ArrowUpRight
                          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    {/* Cyan rule that draws across the bottom on hover. */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-brand-cyan transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 motion-reduce:transition-none"
                    />
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
                {/* Offset cyan block behind the photo for depth. */}
                <div className="relative lg:pr-6 lg:pb-6">
                  <div
                    aria-hidden="true"
                    className="absolute right-0 bottom-0 hidden h-2/3 w-2/3 rounded-sm bg-brand-cyan/20 lg:block"
                  />
                  <div className={cn(frame, "aspect-[4/3] bg-border", shadow)}>
                    <Image
                      src={digitalImage}
                      alt="A marketer reviewing campaign analytics on a monitor and a social feed on a phone"
                      fill
                      placeholder="blur"
                      sizes="(min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
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
                <ul className="mt-9 grid gap-3 sm:grid-cols-2">
                  {digitalServices.map((service) => (
                    <li
                      key={service}
                      className="flex items-start gap-3 rounded-sm bg-white px-4 py-4 text-[0.925rem] leading-snug font-medium ring-1 ring-foreground/8"
                    >
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-primary-deep"
                        strokeWidth={2.25}
                        aria-hidden="true"
                      />
                      {service}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* A real sequence, so it is numbered: one navy band, four linked
                steps, the last one highlighted as the outcome. */}
            <Reveal className="mt-16 lg:mt-24">
              <ol className="grid grid-cols-2 gap-x-6 gap-y-10 rounded-sm bg-primary px-6 py-10 text-white sm:px-10 lg:grid-cols-4 lg:gap-x-0 lg:px-12 lg:py-12">
                {digitalSteps.map((step, i) => {
                  const last = i === digitalSteps.length - 1;
                  return (
                    <li key={step} className="relative">
                      {/* Connector to the next step. */}
                      {!last && (
                        <span
                          aria-hidden="true"
                          className="absolute top-5 right-4 left-14 hidden h-px bg-white/20 lg:block"
                        />
                      )}
                      <span
                        className={cn(
                          index,
                          "flex size-10 items-center justify-center rounded-full",
                          last
                            ? "bg-brand-cyan text-primary"
                            : "border border-white/30 text-white",
                        )}
                      >
                        {two(i)}
                      </span>
                      <span
                        className={cn(
                          "mt-5 block font-heading text-xl font-semibold tracking-[-0.016em] lg:text-2xl",
                          last && "text-brand-cyan",
                        )}
                      >
                        {step}
                      </span>
                    </li>
                  );
                })}
              </ol>
            </Reveal>
          </div>
        </section>

        {/* 4. BPO, Staffing & Training: three photo panels, one open at a time */}
        <section id="bpo-staffing" className={section}>
          <div className={container}>
            <Reveal className="max-w-3xl">
              <Eyebrow>BPO, Staffing & Training</Eyebrow>
              <h2 className={cn(h2, "mt-6")}>
                People and processes to keep you moving.
              </h2>
            </Reveal>

            <Reveal delay={100} className="mt-12 lg:mt-16">
              <ServicePanels groups={peopleGroups} />
            </Reveal>
          </div>
        </section>

        {/* 5. Software Solutions: the one navy content section */}
        <section
          id="products"
          className={cn(
            section,
            "relative overflow-hidden bg-primary text-white",
          )}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(55%_70%_at_100%_0%,rgba(3,179,228,0.2),transparent_70%)]"
          />
          <div className={cn(container, "relative")}>
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
              <Reveal className="lg:col-span-5">
                <Eyebrow onDark>Software Solutions</Eyebrow>
                <h2 className={cn(h2, "mt-6")}>
                  Technology that simplifies, connects and scales.
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 lg:text-[1.1875rem]">
                  We develop and implement practical software solutions to help
                  organizations manage operations, people and growth efficiently.
                </p>
                <a
                  href="#contact"
                  className={cn(btnOnDark, "mt-10")}
                  aria-label="Learn more about software solutions"
                >
                  Learn More
                  <ArrowRight className={btnArrow} aria-hidden="true" />
                </a>
              </Reveal>

              <Reveal delay={100} className="lg:col-span-6 lg:col-start-7">
                <div
                  className={cn(
                    frame,
                    "aspect-[16/11] bg-white/5 ring-1 ring-white/15",
                  )}
                >
                  <Image
                    src={softwareImage}
                    alt="A laptop and monitor showing a business dashboard with tables and charts"
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1024px) 640px, 100vw"
                    className="object-cover object-[60%_50%]"
                  />
                </div>
              </Reveal>
            </div>

            <ul className="mt-14 grid gap-5 md:grid-cols-3 lg:mt-20">
              {software.map((item, i) => (
                <li key={item.name}>
                  <Reveal
                    delay={i * 80}
                    className="group h-full rounded-sm border border-white/12 bg-white/[0.05] p-7 transition-colors duration-300 hover:border-brand-cyan/60 hover:bg-white/[0.08] lg:p-9"
                  >
                    <span
                      aria-hidden="true"
                      className="block font-heading text-[2.5rem] leading-none font-semibold tracking-[-0.025em] text-brand-cyan"
                    >
                      {item.name}
                    </span>
                    <h3 className="mt-6 font-heading text-lg leading-snug font-semibold tracking-[-0.012em]">
                      <span className="sr-only">{item.name}: </span>
                      {item.full}
                    </h3>
                    <p className="mt-2 text-[0.975rem] leading-relaxed text-white/70">
                      {item.text}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 6. Merchandise: heading left and intro right, then the full photo
            next to one tile per product line. Each tile shows a close-up
            taken from the same photo. */}
        <section id="merchandise" className={section}>
          <div className={container}>
            {/* Same 7 + 5 columns as the photo and tiles below, so the intro
                lines up with the tiles. */}
            <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-5">
              <div className="lg:col-span-7">
                <Eyebrow>Merchandise</Eyebrow>
                <h2 className={cn(h2, "mt-6")}>
                  <span className="block">Branded products</span>
                  <span className="block">that make an impact.</span>
                </h2>
              </div>
              <p className={cn(lead, "lg:col-span-5")}>
                High-quality, customized merchandise for organizations, events,
                ministries, conferences and corporate needs.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-12">
              <Reveal className="lg:col-span-7">
                <div
                  className={cn(
                    frame,
                    "group aspect-[3/2] bg-border lg:aspect-auto lg:h-full lg:min-h-[32rem]",
                  )}
                >
                  <Image
                    src={merchandiseImage}
                    alt="T-shirts, a cap, a tote bag, a steel bottle, a lanyard and a gift box laid out flat"
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1024px) 760px, 100vw"
                    className={zoom}
                  />
                </div>
              </Reveal>

              <ul className="flex flex-col gap-5 lg:col-span-5">
                {merchandise.map((item, i) => (
                  <li key={item.name} className="flex-1">
                    <Reveal
                      delay={100 + i * 80}
                      className="group flex h-full items-center gap-5 rounded-sm bg-secondary p-4 transition-colors duration-300 hover:bg-primary hover:text-white sm:gap-7 sm:p-5"
                    >
                      {/* Close-up of this product, cropped from the main photo. */}
                      <span
                        aria-hidden="true"
                        className="block size-24 shrink-0 rounded-sm bg-border bg-no-repeat ring-1 ring-foreground/8 sm:size-32"
                        style={{
                          backgroundImage: `url(${merchandiseImage.src})`,
                          backgroundSize: item.zoom,
                          backgroundPosition: item.focus,
                        }}
                      />
                      <div>
                        <h3 className="font-heading text-xl font-semibold tracking-[-0.016em] sm:text-[1.375rem]">
                          {item.name}
                        </h3>
                        <p className="mt-1.5 text-[0.975rem] leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-white/75">
                          {item.text}
                        </p>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 7. Our Clients: drifting row of cards with previous / next arrows
            (see ClientCarousel) */}
        <section id="clients" className={cn(section, "bg-secondary")}>
          <ClientCarousel clients={clients}>
            <Eyebrow>Our Clients</Eyebrow>
            <h2 className={cn(h2, "mt-6 max-w-3xl")}>
              Trusted by organizations across industries.
            </h2>
          </ClientCarousel>
        </section>

        {/* 8. Why Telo: five reasons as tiles, the longest one set in navy */}
        <section id="why" className={section}>
          <div className={container}>
            <Reveal className="max-w-3xl">
              <Eyebrow>Why Telo Management Consulting</Eyebrow>
              <h2 className={cn(h2, "mt-6")}>
                Global capability.
                <br />
                <span className="text-primary-deep">Real value.</span>
              </h2>
            </Reveal>

            <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-6">
              {reasons.map((reason, i) => {
                const feature = reason.title === "Global Delivery Model";
                return (
                  <li
                    key={reason.title}
                    className={cn(
                      feature
                        ? "sm:col-span-2 lg:col-span-4"
                        : "lg:col-span-2",
                    )}
                  >
                    <Reveal
                      delay={i * 60}
                      className={cn(
                        "flex h-full flex-col rounded-sm p-8 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 motion-reduce:transform-none lg:p-10",
                        feature
                          ? "relative overflow-hidden bg-primary text-white"
                          : "bg-secondary",
                      )}
                    >
                      {feature && (
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 bg-[radial-gradient(60%_90%_at_100%_0%,rgba(3,179,228,0.22),transparent_70%)]"
                        />
                      )}
                      <span
                        className={cn(
                          "relative flex size-12 items-center justify-center rounded-sm",
                          feature
                            ? "bg-brand-cyan text-primary"
                            : "bg-white text-primary-deep ring-1 ring-foreground/8",
                        )}
                      >
                        <reason.icon
                          className="size-6"
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      </span>
                      <h3 className="relative mt-8 font-heading text-xl font-semibold tracking-[-0.016em] sm:text-[1.375rem] lg:mt-12">
                        {reason.title}
                      </h3>
                      <p
                        className={cn(
                          "relative mt-2 max-w-xl",
                          feature ? "text-white/75" : "text-muted-foreground",
                        )}
                      >
                        {reason.text}
                      </p>
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* 9. Let's Create What's Next */}
        <section className="relative overflow-hidden bg-primary py-20 text-white lg:py-28">
          {/* Background photo, pushed back under navy so the text stays readable. */}
          <Image
            src={heroImage}
            alt=""
            fill
            placeholder="blur"
            sizes="100vw"
            className="object-cover object-[50%_35%]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,34,57,0.97)_0%,rgba(11,34,57,0.92)_50%,rgba(11,34,57,0.7)_100%)]"
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
              <p className="mt-7 font-heading text-[clamp(1.875rem,3.6vw,3rem)] leading-[1.1] font-semibold tracking-[-0.022em]">
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
        <section id="contact" className="scroll-mt-20 py-14 lg:py-20">
          <div className={container}>
            {/* No visible heading; this one names the section for screen readers. */}
            <h2 className="sr-only">Contact</h2>

            <Reveal>
              <div className={cn(frame, "border", shadow)}>
                <iframe
                  src={mapSrc}
                  title="Map showing the Telo Management Consultant office in Old Washermenpet, Chennai"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block h-[24rem] w-full grayscale-[0.85] transition-[filter] duration-700 hover:grayscale-0 focus:grayscale-0 motion-reduce:transition-none lg:h-[32rem]"
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
