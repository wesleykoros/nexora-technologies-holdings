import { Reveal } from "@/components/Reveal";

export function PurposeSection() {
  return (
    <section className="px-5 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr]">
        <Reveal>
          <div>
            <p className="eyebrow">Why Nexora exists</p>
            <h2 className="section-title max-w-3xl">Stewarding technology that increasingly operates as critical infrastructure.</h2>
          </div>
        </Reveal>
        <div className="space-y-7 text-lg leading-8 text-[color:var(--muted)]">
          <p>Technology increasingly underpins healthcare, enterprise operations, compliance, government and essential services.</p>
          <p>Nexora exists to create intelligent platforms that improve operational performance, strengthen governance and support better decision-making.</p>
          <p>We believe enduring technology businesses are built through disciplined stewardship rather than short-term opportunity.</p>
        </div>
      </div>
    </section>
  );
}
