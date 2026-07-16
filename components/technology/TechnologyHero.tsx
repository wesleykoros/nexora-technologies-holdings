import Link from "next/link";
import { ArrowRight, Cpu, Network } from "lucide-react";

export function TechnologyHero() {
  return (
    <section className="ambient bg-grid relative overflow-hidden px-5 pb-24 pt-40">
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--muted)]">
            <Cpu size={14} aria-hidden="true" />
            Enterprise technology &amp; architecture
          </div>

          <h1 className="mt-8 max-w-5xl text-6xl font-black leading-[0.94] tracking-[-0.07em] sm:text-8xl">
            Engineered for mission-critical operations.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-[color:var(--muted)]">
            Nexora develops intelligent enterprise platforms using modular
            architecture, responsible artificial intelligence,
            security-by-design and scalable cloud infrastructure.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="#architecture" className="primary-cta">
              Explore the architecture
              <ArrowRight size={18} aria-hidden="true" />
            </Link>

            <Link href="/platforms" className="secondary-cta">
              View platforms
            </Link>
          </div>
        </div>

        <div className="glass rounded-[2rem] p-6 shadow-2xl shadow-indigo-950/20">
          <div className="rounded-[1.5rem] border border-[color:var(--border)] bg-[color:var(--background)] p-7">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                  Architectural direction
                </p>
                <h2 className="mt-2 text-xl font-black">
                  Shared foundations. Specialised products.
                </h2>
              </div>

              <div className="grid size-12 place-items-center rounded-2xl bg-indigo-500/10 text-cyan-400">
                <Network size={23} aria-hidden="true" />
              </div>
            </div>

            <div className="mt-8 space-y-3">
              {[
                "Modular domain architecture",
                "Responsible AI services",
                "Interoperable APIs",
                "Security and audit controls",
                "Observable operations",
                "Scalable cloud infrastructure",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-[color:var(--border)] px-4 py-3"
                >
                  <span className="text-xs font-bold text-indigo-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
