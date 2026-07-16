import { BrainCircuit, Globe2, LockKeyhole, Scale, ShieldCheck, TrendingUp } from "lucide-react";

const pillars = [
  ["Responsible ownership", "Technology platforms are governed as long-term corporate assets.", ShieldCheck],
  ["Accountability", "Decisions should be supported by evidence, transparency and auditability.", Scale],
  ["Security by design", "Security begins with architecture and remains part of the full lifecycle.", LockKeyhole],
  ["Responsible AI", "Artificial intelligence should remain secure, explainable and accountable.", BrainCircuit],
  ["Sustainable innovation", "Progress should create durable value rather than unmanaged complexity.", TrendingUp],
  ["Global perspective", "Platforms should be designed for multiple industries, jurisdictions and markets.", Globe2],
] as const;

export function GovernancePhilosophy() {
  return (
    <section className="border-y border-[color:var(--border)] px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow">Governance philosophy</p>
        <h2 className="section-title max-w-4xl">Enterprise ambition matched by discipline, accountability and trust.</h2>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map(([title, description, Icon]) => (
            <article key={title} className="glass rounded-3xl p-7 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/30">
              <div className="grid size-12 place-items-center rounded-2xl bg-indigo-500/10 text-cyan-400">
                <Icon size={23} aria-hidden="true" />
              </div>
              <h3 className="mt-8 text-xl font-black">{title}</h3>
              <p className="mt-4 leading-7 text-[color:var(--muted)]">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
