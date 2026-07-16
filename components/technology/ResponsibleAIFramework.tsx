import {
  BadgeCheck,
  BrainCircuit,
  GitPullRequestArrow,
  Lightbulb,
  RefreshCcw,
  UserCheck,
} from "lucide-react";

const stages = [
  ["Knowledge", "Ground intelligence in approved information and operational context.", BrainCircuit],
  ["Reasoning", "Structure analysis around explicit goals, rules and evidence.", Lightbulb],
  ["Recommendations", "Present useful options with clear rationale and confidence.", BadgeCheck],
  ["Automation", "Automate controlled tasks where safeguards and accountability exist.", GitPullRequestArrow],
  ["Human review", "Keep consequential decisions subject to appropriate oversight.", UserCheck],
  ["Continuous learning", "Improve through feedback, monitoring and governed refinement.", RefreshCcw],
] as const;

export function ResponsibleAIFramework() {
  return (
    <section className="border-y border-[color:var(--border)] px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow">Responsible AI framework</p>
        <h2 className="section-title max-w-4xl">
          Intelligence should strengthen human capability while remaining
          controlled, explainable and accountable.
        </h2>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {stages.map(([title, description, Icon], index) => (
            <article key={title} className="glass rounded-3xl p-7">
              <div className="flex items-center justify-between">
                <div className="grid size-12 place-items-center rounded-2xl bg-indigo-500/10 text-cyan-400">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <span className="text-xs font-bold text-indigo-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-8 text-xl font-black">{title}</h3>
              <p className="mt-4 leading-7 text-[color:var(--muted)]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
