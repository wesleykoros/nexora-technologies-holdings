"use client";

import { useEffect, useRef } from "react";

export function PointerGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(pointer: fine) and (prefers-reduced-motion: no-preference)",
    );

    if (!mediaQuery.matches) {
      return;
    }

    function handlePointerMove(event: PointerEvent) {
      const element = glowRef.current;

      if (!element) {
        return;
      }

      element.style.setProperty("--pointer-x", `${event.clientX}px`);
      element.style.setProperty("--pointer-y", `${event.clientY}px`);
      element.dataset.visible = "true";
    }

    function handlePointerLeave() {
      if (glowRef.current) {
        glowRef.current.dataset.visible = "false";
      }
    }

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    document.documentElement.addEventListener(
      "mouseleave",
      handlePointerLeave,
    );

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener(
        "mouseleave",
        handlePointerLeave,
      );
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      data-visible="false"
      className="nexora-pointer-glow"
    />
  );
}
