"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedMetricProps = {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
};

export function AnimatedMetric({
  value,
  suffix = "",
  label,
  duration = 900,
}: AnimatedMetricProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    let animationFrame = 0;
    let observer: IntersectionObserver | null = null;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    function startAnimation() {
      if (reducedMotion) {
        animationFrame = requestAnimationFrame(() => {
          setDisplayValue(value);
        });

        return;
      }

      const startedAt = performance.now();

      function animate(now: number) {
        const elapsed = now - startedAt;
        const progress = Math.min(1, elapsed / duration);
        const eased = 1 - Math.pow(1 - progress, 3);

        setDisplayValue(Math.round(value * eased));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      }

      animationFrame = requestAnimationFrame(animate);
    }

    if (reducedMotion) {
      startAnimation();
    } else {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) {
            return;
          }

          startAnimation();
          observer?.disconnect();
        },
        {
          threshold: 0.35,
        },
      );

      observer.observe(element);
    }

    return () => {
      cancelAnimationFrame(animationFrame);
      observer?.disconnect();
    };
  }, [duration, value]);

  return (
    <div ref={elementRef} className="metric-card">
      <strong>
        {displayValue}
        {suffix}
      </strong>

      <span>{label}</span>
    </div>
  );
}