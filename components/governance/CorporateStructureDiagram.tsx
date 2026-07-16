import Link from "next/link";

const platforms = [
  ["CareAxis", "/platforms/careaxis"],
  ["Nexora AI", "/platforms/nexora-ai"],
  ["Compliance Intelligence", "/platforms/compliance-intelligence"],
  ["Future Ventures", "/platforms/future-ventures"],
] as const;

export function CorporateStructureDiagram() {
  return (
    <section className="border-y border-[color:var(--border)] px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow">Corporate structure</p>
        <h2 className="section-title max-w-4xl">A holding-company model designed to support a growing technology portfolio.</h2>
        <div className="mt-14 rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--card)] p-6 sm:p-10">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 px-6 py-5 text-center font-black text-white">Nexora Technologies Holdings LLC</div>
            <div className="mx-auto h-10 w-px bg-cyan-400/60" />
            <div className="mx-auto max-w-xl rounded-2xl border border-[color:var(--border)] bg-[color:var(--background)] px-6 py-5 text-center font-black">Corporate governance</div>
            <div className="mx-auto h-10 w-px bg-cyan-400/60" />
            <div className="mx-auto max-w-xl rounded-2xl border border-[color:var(--border)] bg-[color:var(--background)] px-6 py-5 text-center font-black">Technology portfolio</div>
            <div className="mx-auto h-10 w-px bg-cyan-400/60" />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {platforms.map(([title, href]) => (
                <Link key={title} href={href} className="glass rounded-2xl p-5 text-center font-black transition hover:-translate-y-1 hover:border-indigo-400/40">{title}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
