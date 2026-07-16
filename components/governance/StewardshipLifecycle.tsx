import { Building2, Cog, DraftingCompass, Microscope, RefreshCcw, ShieldCheck, Wrench } from "lucide-react";

const stages = [
  ["Research", "Validate the need, context and long-term opportunity.", Microscope],
  ["Architecture", "Define the system, controls and operating model.", DraftingCompass],
  ["Engineering", "Build resilient products and reusable capability.", Wrench],
  ["Security", "Protect systems, data and operational continuity.", ShieldCheck],
  ["Governance", "Establish accountability, evidence and oversight.", Building2],
  ["Operations", "Operate reliably and measure real-world performance.", Cog],
  ["Continuous improvement", "Learn, refine and evolve with the industry.", RefreshCcw],
] as const;

export function StewardshipLifecycle() {
  return (
    <section className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow">Technology stewardship lifecycle</p>
        <h2 className="section-title max-w-4xl">Every platform moves through a disciplined lifecycle.</h2>
        <div className="relative mt-14">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-indigo-500 via-blue-500 to-cyan-400 md:block" />
          <div className="space-y-5">
            {stages.map(([title, description, Icon], index) => (
              <article key={title} className="glass relative grid gap-5 rounded-3xl p-6 md:ml-12 md:grid-cols-[70px_220px_1fr] md:items-center">
                <div className="grid size-12 place-items-center rounded-2xl bg-indigo-500/10 text-cyan-400">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-bold text-indigo-400">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 text-xl font-black">{title}</h3>
                </div>
                <p className="leading-7 text-[color:var(--muted)]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
