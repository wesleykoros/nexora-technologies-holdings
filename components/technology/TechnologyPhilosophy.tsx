import { Reveal } from "@/components/Reveal";

const statements = [
  "Technology should reduce complexity rather than introduce it.",
  "Architecture should enable change rather than resist it.",
  "Intelligence should augment people rather than replace them.",
] as const;

export function TechnologyPhilosophy() {
  return (
    <section className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow">Technology philosophy</p>
          <h2 className="section-title max-w-5xl">
            Enterprise technology should be useful, governable and capable of
            evolving with the organisations it supports.
          </h2>
        </Reveal>

        <div className="mt-14 divide-y divide-[color:var(--border)] border-y border-[color:var(--border)]">
          {statements.map((statement, index) => (
            <article
              key={statement}
              className="grid gap-4 py-8 sm:grid-cols-[90px_1fr] sm:items-center"
            >
              <span className="text-xs font-bold text-indigo-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-2xl font-black leading-tight tracking-[-0.03em] sm:text-4xl">
                {statement}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
