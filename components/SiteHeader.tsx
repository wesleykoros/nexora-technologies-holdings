"use client";

import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useSyncExternalStore } from "react";
import { Logo } from "./Logo";

const nav = [
  ["About", "/about"],
  ["Platforms", "/platforms"],
  ["Industries", "/industries"],
  ["Technology", "/technology"],
  ["Partners", "/partnerships"],
  ["Insights", "/insights"],
] as const;

function subscribe() { return () => {}; }
function useMounted() { return useSyncExternalStore(subscribe, () => true, () => false); }

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();
  const isDark = resolvedTheme === "dark";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[color:var(--background)]/78 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map(([name, href]) => (
            <Link key={href} href={href} className="nav-link text-sm text-[color:var(--muted)] transition hover:text-[color:var(--foreground)]">{name}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button type="button" aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} theme` : "Toggle theme"}
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="grid size-10 place-items-center rounded-full border border-[color:var(--border)] transition hover:border-indigo-400/50 hover:bg-white/5">
            {mounted ? (isDark ? <Sun size={17}/> : <Moon size={17}/>) : <span className="size-[17px]"/>}
          </button>
          <Link href="/contact" className="hidden rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 px-5 py-2.5 text-sm font-extrabold text-slate-950 shadow-lg shadow-indigo-500/20 transition hover:-translate-y-0.5 sm:block">Partner with us</Link>
          <button type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open}
            onClick={() => setOpen(v => !v)} className="grid size-10 place-items-center lg:hidden">{open ? <X/> : <Menu/>}</button>
        </div>
      </div>
      {open && <nav className="border-t border-[color:var(--border)] bg-[color:var(--background)] px-5 py-5 lg:hidden">
        {nav.map(([name, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="block border-b border-[color:var(--border)] py-3 text-lg last:border-0">{name}</Link>)}
      </nav>}
    </header>
  );
}
