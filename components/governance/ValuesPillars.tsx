const values = [
  ["Integrity", "We build trust through transparency, accountability and principled decision-making."],
  ["Stewardship", "We manage technology as a long-term corporate asset."],
  ["Innovation", "We pursue meaningful advances grounded in real operational needs."],
  ["Excellence", "We maintain high standards in engineering, governance and execution."],
  ["Collaboration", "We create value through trusted partnerships and shared expertise."],
  ["Responsibility", "We consider the broader impact of the technology we build and govern."],
] as const;

export function ValuesPillars() {
  return (
    <section className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow">Core values</p>
        <h2 className="section-title max-w-4xl">Principles that shape how Nexora thinks, builds and acts.</h2>
        <div className="mt-14 divide-y divide-[color:var(--border)] border-y border-[color:var(--border)]">
          {values.map(([title, description], index) => (
            <article key={title} className="group grid gap-4 py-8 transition sm:grid-cols-[90px_220px_1fr] sm:items-center">
              <span className="text-xs font-bold text-indigo-400">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="text-2xl font-black transition group-hover:text-cyan-400">{title}</h3>
              <p className="leading-7 text-[color:var(--muted)]">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
