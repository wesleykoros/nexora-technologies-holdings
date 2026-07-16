import {
  Activity,
  FileClock,
  Fingerprint,
  KeyRound,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

const controls = [
  ["Identity", "Verified identities and managed authentication boundaries.", Fingerprint],
  ["Access control", "Role, permission and organisation-aware authorisation.", KeyRound],
  ["Encryption", "Protection of data in transit and at rest.", LockKeyhole],
  ["Auditability", "Recorded events and evidence for important actions.", FileClock],
  ["Compliance", "Controls aligned with regulatory and contractual obligations.", ShieldCheck],
  ["Monitoring", "Operational visibility, alerting and health assessment.", Activity],
] as const;

export function SecurityArchitecture() {
  return (
    <section className="px-5 py-24">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="eyebrow">Security architecture</p>
          <h2 className="section-title">
            Trust depends on layered controls, clear accountability and
            operational visibility.
          </h2>
          <p className="mt-7 text-lg leading-8 text-[color:var(--muted)]">
            Nexora platforms are designed around defence-in-depth principles
            rather than a single security boundary.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {controls.map(([title, description, Icon]) => (
            <article key={title} className="glass rounded-2xl p-6">
              <Icon className="text-cyan-400" size={21} aria-hidden="true" />
              <h3 className="mt-6 font-black">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
