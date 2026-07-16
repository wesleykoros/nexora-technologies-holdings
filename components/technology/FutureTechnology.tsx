import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const directions = [
  "Responsible artificial intelligence",
  "Enterprise workflow automation",
  "Digital governance infrastructure",
  "Interoperability and integration",
  "Data-informed decision support",
  "Secure operational intelligence",
] as const;

export function FutureTechnology() {
  return (
    <section className="px-5 py-24">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-br from-indigo-600 via-blue-600 to-teal-500 p-9 text-white shadow-2xl shadow-indigo-950/25 sm:p-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-white/70">
              Future technology direction
            </p>

            <h2 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-[-0.05em] sm:text-6xl">
              Building foundations for the next generation of enterprise
              intelligence.
            </h2>

            <div className="mt-8 grid gap-3 text-sm text-white/90 sm:grid-cols-2">
              {directions.map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={16} aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800 hover:shadow-2xl"
          >
            Discuss technology
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
