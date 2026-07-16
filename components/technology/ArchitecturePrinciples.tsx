import {
  Boxes,
  Braces,
  ChartNoAxesCombined,
  LockKeyhole,
  Network,
  Scale,
} from "lucide-react";

const principles = [
  ["Modular", "Capabilities are separated into clear, maintainable domains.", Boxes],
  ["Composable", "Services can be combined to support different products and workflows.", Braces],
  ["Interoperable", "APIs and integration boundaries support external systems.", Network],
  ["Secure", "Identity, access, privacy and audit controls are foundational.", LockKeyhole],
  ["Observable", "Operations are measurable through logs, events and health signals.", ChartNoAxesCombined],
  ["Scalable", "Architecture can support growth in users, organisations and markets.", Scale],
] as const;

export function ArchitecturePrinciples() {
  return (
    <section className="border-y border-[color:var(--border)] px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow">Architecture principles</p>
        <h2 className="section-title max-w-4xl">
          Designed to remain adaptable as products, industries and operating
          environments evolve.
        </h2>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {principles.map(([title, description, Icon]) => (
            <article
              key={title}
              className="glass rounded-3xl p-7 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/30"
            >
              <div className="grid size-12 place-items-center rounded-2xl bg-indigo-500/10 text-cyan-400">
                <Icon size={23} aria-hidden="true" />
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
