"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function updateProgress() {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollable <= 0) {
        setProgress(0);
        return;
      }

      setProgress(
        Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100)),
      );
    }

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-[2px] bg-transparent"
    >
      <div
        className="h-full origin-left bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 transition-[width] duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
