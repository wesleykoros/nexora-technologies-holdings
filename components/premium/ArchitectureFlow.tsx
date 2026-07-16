import type { LucideIcon } from "lucide-react";
import { ArrowDown, ArrowRight } from "lucide-react";

export type ArchitectureFlowItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type ArchitectureFlowProps = {
  items: ArchitectureFlowItem[];
  orientation?: "horizontal" | "vertical";
};

export function ArchitectureFlow({
  items,
  orientation = "horizontal",
}: ArchitectureFlowProps) {
  const horizontal = orientation === "horizontal";

  return (
    <div
      className={
        horizontal
          ? "grid gap-4 lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))]"
          : "mx-auto max-w-4xl"
      }
    >
      {items.map((item, index) => {
        const Icon = item.icon;
        const isLast = index === items.length - 1;

        return (
          <div key={item.title}>
            <article className="premium-architecture-card group h-full rounded-3xl border border-[color:var(--border)] bg-[color:var(--card)] p-6">
              <div className="flex items-center justify-between">
                <div className="grid size-12 place-items-center rounded-2xl bg-indigo-500/10 text-cyan-400">
                  <Icon size={22} aria-hidden="true" />
                </div>

                <span className="text-xs font-bold text-indigo-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-8 text-xl font-black">{item.title}</h3>

              <p className="mt-4 text-sm leading-6 text-[color:var(--muted)]">
                {item.description}
              </p>
            </article>

            {!isLast && !horizontal && (
              <ArrowDown
                className="mx-auto my-3 text-indigo-400"
                size={20}
                aria-hidden="true"
              />
            )}

            {!isLast && horizontal && (
              <ArrowRight
                className="mx-auto my-3 hidden text-indigo-400 lg:block"
                size={20}
                aria-hidden="true"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
