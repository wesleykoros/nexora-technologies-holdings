const framework = ["Strategy", "Risk", "Compliance", "Security", "Quality", "Performance", "Innovation", "Stewardship"] as const;

export function GovernanceFramework() {
  return (
    <section className="px-5 py-24">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="eyebrow">Enterprise governance framework</p>
          <h2 className="section-title">A common governance model across the portfolio.</h2>
          <p className="mt-7 text-lg leading-8 text-[color:var(--muted)]">
            Every Nexora platform should be governed through consistent controls covering strategy, risk, security, performance and continuous improvement.
          </p>
        </div>
        <div className="relative mx-auto grid aspect-square w-full max-w-xl place-items-center rounded-full border border-[color:var(--border)] bg-[color:var(--card)] p-12">
          <div className="grid size-40 place-items-center rounded-full bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500 p-6 text-center font-black text-white shadow-2xl shadow-indigo-950/30">Long-term value</div>
          {framework.map((item, index) => {
            const angle = (index / framework.length) * Math.PI * 2 - Math.PI / 2;
            const radius = 39;
            const x = 50 + Math.cos(angle) * radius;
            const y = 50 + Math.sin(angle) * radius;
            return (
              <div key={item} className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-[color:var(--border)] bg-[color:var(--background)] px-3 py-2 text-center text-xs font-bold shadow-lg sm:text-sm" style={{ left: `${x}%`, top: `${y}%` }}>
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
