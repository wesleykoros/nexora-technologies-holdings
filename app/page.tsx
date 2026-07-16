import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Globe2,
  Network,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

import { PlatformShowcase } from "@/components/PlatformShowcase";
import { Reveal } from "@/components/Reveal";
import { WorldPresence } from "@/components/WorldPresence";
import { industries } from "@/lib/data";

const principles = [
  {
    title: "Governed by design",
    description:
      "Security, accountability, privacy and compliance are treated as product foundations rather than afterthoughts.",
    icon: ShieldCheck,
  },
  {
    title: "Built to integrate",
    description:
      "Modular platforms connect people, operational workflows, enterprise data and external systems.",
    icon: Workflow,
  },
  {
    title: "Designed to scale",
    description:
      "A portfolio model supporting licensing, partnerships, commercialisation and international expansion.",
    icon: Globe2,
  },
] as const;

const corporateMetrics = [
  {
    value: "Delaware",
    label: "United States holding company",
  },
  {
    value: "Global",
    label: "Technology portfolio strategy",
  },
  {
    value: "AI-first",
    label: "Enterprise technology direction",
  },
  {
    value: "Governed",
    label: "Commercialisation model",
  },
] as const;

const executivePriorities = [
  "Enterprise platform ownership",
  "Responsible artificial intelligence",
  "Regulated-industry infrastructure",
  "International commercialisation",
] as const;

const partnershipCapabilities = [
  "Platform licensing",
  "Joint ventures",
  "Market-entry partnerships",
  "Strategic investment",
] as const;

export default function HomePage() {
  return (
    <>
      {/* Executive hero */}
      <section className="ambient bg-grid relative min-h-[96vh] overflow-hidden px-5 pt-36">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 pb-24 pt-12 lg:grid-cols-[1.08fr_.92fr]">
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-[color:var(--muted)]">
              <Building2 size={14} aria-hidden="true" />
              Delaware · Global technology holdings
            </div>

            <h1 className="text-gradient max-w-5xl text-6xl font-black leading-[.92] tracking-[-.07em] sm:text-8xl">
              Building intelligent platforms for industries that matter.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
              Nexora Technologies Holdings LLC develops, owns and
              commercialises enterprise platforms that strengthen care,
              compliance, governance and operational performance.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/platforms" className="primary-cta">
                Explore our portfolio
                <ArrowRight size={18} aria-hidden="true" />
              </Link>

              <Link href="/partnerships" className="secondary-cta">
                Partner with Nexora
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs font-bold uppercase tracking-[.15em] text-[color:var(--muted)]">
              <span>Enterprise software</span>
              <span>Artificial intelligence</span>
              <span>Regulated industries</span>
            </div>
          </div>

          <div className="glass relative z-10 rounded-[2rem] p-5 shadow-2xl shadow-indigo-950/20">
            <div className="rounded-[1.5rem] border border-[color:var(--border)] bg-[color:var(--background)] p-7">
              <div className="mb-9 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.18em] text-[color:var(--muted)]">
                    Corporate portfolio
                  </p>

                  <h2 className="mt-2 text-xl font-black">
                    Nexora Technologies Holdings
                  </h2>
                </div>

                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                  Building globally
                </span>
              </div>

              {[
                {
                  number: "01",
                  title: "CareAxis",
                  description: "Care operations and provider infrastructure",
                  href: "/platforms/careaxis",
                },
                {
                  number: "02",
                  title: "Nexora AI",
                  description: "Enterprise intelligence and automation",
                  href: "/platforms/nexora-ai",
                },
                {
                  number: "03",
                  title: "Compliance Intelligence",
                  description: "Governance and assurance infrastructure",
                  href: "/platforms/compliance-intelligence",
                },
              ].map((platform) => (
                <Link
                  key={platform.title}
                  href={platform.href}
                  className="portfolio-row group"
                >
                  <span className="portfolio-mark">{platform.number}</span>

                  <div className="flex-1">
                    <b>{platform.title}</b>

                    <p className="text-xs text-[color:var(--muted)]">
                      {platform.description}
                    </p>
                  </div>

                  <ArrowRight
                    size={17}
                    aria-hidden="true"
                    className="opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Corporate positioning */}
      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="eyebrow">Corporate positioning</p>

            <h2 className="section-title max-w-5xl">
              A technology holding company established to build, govern and
              scale durable enterprise platforms.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {corporateMetrics.map((metric) => (
              <article key={metric.value} className="metric-card">
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Executive narrative */}
      <section className="border-y border-[color:var(--border)] px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div>
              <p className="eyebrow">Our mandate</p>

              <h2 className="section-title">
                Converting operational complexity into intelligent
                infrastructure.
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
                Nexora combines product engineering, industry knowledge,
                responsible artificial intelligence and disciplined corporate
                governance to create technology businesses capable of
                long-term growth.
              </p>

              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 font-bold text-cyan-400 transition hover:text-cyan-300"
              >
                Read about Nexora
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {executivePriorities.map((priority, index) => (
              <article
                key={priority}
                className="glass rounded-3xl p-7 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/30"
              >
                <span className="text-xs font-bold text-indigo-400">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-8 text-xl font-black">{priority}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="eyebrow">Portfolio architecture</p>

            <h2 className="section-title max-w-4xl">
              One holding company. Multiple intelligent platforms.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[color:var(--muted)]">
              Each platform serves a distinct operational purpose while
              benefiting from shared technology, governance and
              commercialisation capabilities.
            </p>
          </Reveal>

          <div className="mt-14">
            <PlatformShowcase />
          </div>
        </div>
      </section>

      {/* Global presence */}
      <section className="border-y border-[color:var(--border)] px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <WorldPresence />
        </div>
      </section>

      {/* Operating principles */}
      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="eyebrow text-teal-500">Operating principles</p>

            <h2 className="section-title max-w-4xl">
              Enterprise ambition supported by disciplined governance.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {principles.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="glass rounded-3xl p-7 transition duration-300 hover:-translate-y-1"
              >
                <Icon className="text-cyan-400" aria-hidden="true" />

                <h3 className="mt-10 text-xl font-black">{title}</h3>

                <p className="mt-4 leading-7 text-[color:var(--muted)]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="border-y border-[color:var(--border)] px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="eyebrow">Industry focus</p>

            <h2 className="section-title max-w-4xl">
              Designed for environments where trust, evidence and operational
              performance matter.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map(([name, Icon]) => (
              <Link
                key={name}
                href="/industries"
                className="industry-card"
              >
                <Icon size={22} aria-hidden="true" />
                <b>{name}</b>
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic partnerships */}
      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-br from-indigo-600 via-blue-600 to-teal-500 p-9 text-white shadow-2xl shadow-indigo-950/25 sm:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[.25em] text-white/75">
                <Network size={17} aria-hidden="true" />
                Strategic partnerships
              </div>

              <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-[-.04em] sm:text-6xl">
                Let&apos;s build the future together.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
                Nexora works with operators, industry experts, technology
                partners and investors to bring durable platforms into new
                markets.
              </p>

              <div className="mt-8 grid gap-3 text-sm text-white/90 sm:grid-cols-2">
                {partnershipCapabilities.map((capability) => (
                  <span
                    key={capability}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 size={16} aria-hidden="true" />
                    {capability}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800 hover:shadow-2xl hover:shadow-black/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600"
            >
              Start a conversation
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Closing executive statement */}
      <section className="px-5 pb-28 pt-10">
        <div className="mx-auto max-w-4xl text-center">
          <Sparkles
            className="mx-auto text-cyan-400"
            size={28}
            aria-hidden="true"
          />

          <h2 className="mt-7 text-3xl font-black tracking-[-.04em] sm:text-5xl">
            Building the corporate foundation for the next generation of
            intelligent platforms.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
            Nexora Technologies Holdings LLC provides the ownership,
            governance and commercialisation infrastructure required to turn
            specialised technology into scalable global businesses.
          </p>
        </div>
      </section>
    </>
  );
}