const levels = [
  ["Single organisation", "Focused implementation and controlled adoption."],
  ["Multi-site", "Shared standards across locations and operational teams."],
  ["Enterprise", "Organisation-wide governance, integration and reporting."],
  ["National", "Large-scale operations across regions and jurisdictions."],
  ["Global", "International expansion supported by adaptable architecture."],
] as const;

export function ScalabilityModel() {
  return (
    <section className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow">Scalability model</p>
        <h2 className="section-title max-w-4xl">
          Architecture designed to support growth without losing control.
        </h2>

        <div className="mt-14 grid gap-4 lg:grid-cols-5">
          {levels.map(([title, description], index) => (
            <article
              key={title}
              className="glass rounded-3xl p-6 transition duration-300 hover:-translate-y-1"
            >
              <span className="text-xs font-bold text-indigo-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-7 text-xl font-black">{title}</h3>
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
