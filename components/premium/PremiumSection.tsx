import type { ReactNode } from "react";

type PremiumSectionProps = {
  children: ReactNode;
  className?: string;
  bordered?: boolean;
  id?: string;
};

export function PremiumSection({
  children,
  className = "",
  bordered = false,
  id,
}: PremiumSectionProps) {
  return (
    <section
      id={id}
      className={[
        "premium-section relative isolate overflow-hidden px-5 py-24",
        bordered ? "border-y border-[color:var(--border)]" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="premium-section-grid" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
