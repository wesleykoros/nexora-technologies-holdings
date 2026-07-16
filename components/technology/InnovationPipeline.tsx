import {
  BadgeCheck,
  Building2,
  FlaskConical,
  Lightbulb,
  Rocket,
} from "lucide-react";

const stages = [
  ["Research", "Explore a meaningful technology or industry opportunity.", Lightbulb],
  ["Prototype", "Build a focused representation of the core capability.", FlaskConical],
  ["Validation", "Test technical feasibility, utility and strategic fit.", BadgeCheck],
  ["Platform", "Develop governed, reusable product infrastructure.", Building2],
  ["Commercialisation", "Create a sustainable route to customers and markets.", Rocket],
] as const;

export function InnovationPipeline() {
  return (
    <section className="border-y border-[color:var(--border)] px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow">Innovation pipeline</p>
        <h2 className="section-title max-w-4xl">
          Innovation progresses through validation, governance and disciplined
          commercialisation.
        </h2>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {stages.map(([title, description, Icon], index) => (
            <article key={title} className="glass rounded-3xl p-6">
              <div className="flex items-center justify-between">
                <Icon className="text-cyan-400" size={22} aria-hidden="true" />
                <span className="text-xs font-bold text-indigo-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-8 text-xl font-black">{title}</h3>
              <p className="mt-4 text-sm leading-6 text-[color:var(--muted)]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
