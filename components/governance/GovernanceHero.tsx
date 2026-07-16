import { ShieldCheck } from "lucide-react";

export function GovernanceHero() {
  return (
    <section className="ambient bg-grid relative overflow-hidden px-5 pb-24 pt-40">
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--muted)]">
          <ShieldCheck size={14} aria-hidden="true" />
          Governance &amp; stewardship
        </div>
        <h1 className="mt-8 max-w-5xl text-6xl font-black leading-[0.94] tracking-[-0.07em] sm:text-8xl">
          Technology businesses designed to endure.
        </h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-[color:var(--muted)]">
          Nexora Technologies Holdings LLC builds, owns and stewards intelligent technology platforms through disciplined governance, responsible innovation and long-term strategic investment.
        </p>
        <div className="mt-14 h-px w-full overflow-hidden bg-[color:var(--border)]">
          <div className="h-full w-1/2 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400" />
        </div>
      </div>
    </section>
  );
}
