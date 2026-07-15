import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/PageHero";

export const metadata = {
  title: "Partnerships",
};

const partnershipTypes = [
  "Platform licensing",
  "Market-entry partnerships",
  "Joint ventures",
  "Product incubation",
  "Technology acquisitions",
  "Strategic investment",
];

export default function PartnershipsPage() {
  return (
    <>
      <PageHero
        eyebrow="Holdings & partnerships"
        title="Structured for collaboration, ownership and global growth."
        description="We work with operators, industry experts, technology partners and investors to bring durable platforms into new markets."
      />

      <section className="px-5 pb-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-4 sm:grid-cols-2">
            {partnershipTypes.map((item, index) => (
              <div
                key={item}
                className="glass rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/30"
              >
                <span className="text-xs font-semibold text-indigo-500">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h2 className="mt-7 text-xl font-black">
                  {item}
                </h2>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-slate-100 p-8 text-slate-950 shadow-xl dark:bg-slate-100">
            <h2 className="text-3xl font-black">
              Discuss a strategic opportunity.
            </h2>

            <p className="mt-4 max-w-xl text-slate-600">
              Tell us what you are building, the market you serve and the
              partnership structure you have in mind.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-100"
            >
              Contact Nexora
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}