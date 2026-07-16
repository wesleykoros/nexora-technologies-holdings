import { BadgeCheck, BrainCircuit, Handshake, KeyRound, LockKeyhole, Scale, TrendingUp, Workflow } from "lucide-react";

const commitments = [
  ["Responsible technology", Scale],
  ["Security first", LockKeyhole],
  ["Ethical AI", BrainCircuit],
  ["Long-term ownership", KeyRound],
  ["Operational excellence", Workflow],
  ["Transparency", BadgeCheck],
  ["Trusted partnerships", Handshake],
  ["Sustainable growth", TrendingUp],
] as const;

export function CorporateCommitments() {
  return (
    <section className="border-y border-[color:var(--border)] px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow">Corporate commitments</p>
        <h2 className="section-title max-w-4xl">Commitments intended to guide decisions across the organisation.</h2>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map(([title, Icon]) => (
            <article key={title} className="glass rounded-2xl p-6">
              <Icon className="text-cyan-400" size={22} aria-hidden="true" />
              <h3 className="mt-8 font-black">{title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
