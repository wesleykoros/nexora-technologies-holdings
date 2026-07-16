export function MissionVision() {
  return (
    <section className="border-y border-[color:var(--border)] px-5 py-24">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
        <article className="glass rounded-[2rem] p-8 sm:p-10">
          <p className="eyebrow">Mission</p>
          <h2 className="mt-7 text-3xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
            To build and steward intelligent technology platforms that strengthen essential industries through responsible innovation, operational excellence and long-term ownership.
          </h2>
        </article>
        <article className="rounded-[2rem] bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500 p-8 text-white shadow-2xl shadow-indigo-950/20 sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">Vision</p>
          <h2 className="mt-7 text-3xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
            To become a globally respected technology holding company whose portfolio improves how essential industries operate.
          </h2>
        </article>
      </div>
    </section>
  );
}
