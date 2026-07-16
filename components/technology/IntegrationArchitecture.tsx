import {
  ArrowDown,
  Building2,
  Cable,
  Database,
  Users,
  Workflow,
} from "lucide-react";

const flow = [
  ["External systems", "Partner, industry and enterprise services.", Building2],
  ["Integration layer", "APIs, events, connectors and controlled exchange.", Cable],
  ["Platform services", "Shared identity, data, AI and operational capabilities.", Database],
  ["Business rules", "Domain workflows, controls and decision logic.", Workflow],
  ["Users", "Workers, managers, customers, partners and administrators.", Users],
] as const;

export function IntegrationArchitecture() {
  return (
    <section className="border-y border-[color:var(--border)] px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow">Enterprise integration</p>
        <h2 className="section-title max-w-4xl">
          Integration boundaries designed to connect systems without creating
          unmanaged dependency.
        </h2>

        <div className="mx-auto mt-14 max-w-4xl">
          {flow.map(([title, description, Icon], index) => (
            <div key={title}>
              <article className="glass grid gap-5 rounded-3xl p-6 md:grid-cols-[70px_220px_1fr] md:items-center">
                <div className="grid size-12 place-items-center rounded-2xl bg-indigo-500/10 text-cyan-400">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-black">{title}</h3>
                <p className="leading-7 text-[color:var(--muted)]">
                  {description}
                </p>
              </article>

              {index < flow.length - 1 && (
                <ArrowDown
                  className="mx-auto my-3 text-indigo-400"
                  size={20}
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
