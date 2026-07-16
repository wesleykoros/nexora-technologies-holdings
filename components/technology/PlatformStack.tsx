import {
  AppWindow,
  BrainCircuit,
  Cloud,
  Database,
  GitBranch,
  Workflow,
} from "lucide-react";

const layers = [
  ["Applications", "User-facing experiences and specialised product interfaces.", AppWindow],
  ["AI services", "Knowledge, reasoning, recommendation and automation capabilities.", BrainCircuit],
  ["Business engines", "Domain rules, workflows, pricing, compliance and operational logic.", Workflow],
  ["API layer", "Controlled interfaces for internal and external integrations.", GitBranch],
  ["Data layer", "Operational, analytical and evidence-oriented information foundations.", Database],
  ["Cloud infrastructure", "Secure, observable and scalable runtime environments.", Cloud],
] as const;

export function PlatformStack() {
  return (
    <section id="architecture" className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow">Platform stack</p>
        <h2 className="section-title max-w-4xl">
          A layered architecture separating experience, intelligence, business
          logic, integration, data and infrastructure.
        </h2>

        <div className="mt-14 rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--card)] p-6 sm:p-10">
          <div className="mx-auto max-w-5xl space-y-4">
            {layers.map(([title, description, Icon], index) => (
              <article
                key={title}
                className="grid gap-5 rounded-2xl border border-[color:var(--border)] bg-[color:var(--background)] p-5 md:grid-cols-[70px_220px_1fr] md:items-center"
              >
                <div className="grid size-12 place-items-center rounded-2xl bg-indigo-500/10 text-cyan-400">
                  <Icon size={22} aria-hidden="true" />
                </div>

                <div>
                  <span className="text-xs font-bold text-indigo-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-xl font-black">{title}</h3>
                </div>

                <p className="leading-7 text-[color:var(--muted)]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
