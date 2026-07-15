import Link from "next/link";

export function Logo(){
  return <Link href="/" className="group flex items-center gap-3" aria-label="Nexora home">
    <span className="relative grid size-10 place-items-center overflow-hidden rounded-[14px] bg-slate-950 ring-1 ring-white/15 shadow-lg shadow-indigo-500/20">
      <span className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-400 opacity-95"/>
      <svg viewBox="0 0 40 40" className="relative size-7" aria-hidden="true">
        <path d="M10 29V11h5.6l8.8 11.4V11H30v18h-5.5l-8.9-11.5V29Z" fill="white"/>
        <path d="M9 8h7M24 32h7" stroke="white" strokeWidth="2" strokeLinecap="round" opacity=".55"/>
      </svg>
    </span>
    <span><b className="block tracking-tight">NEXORA</b><small className="block text-[9px] tracking-[.21em] text-slate-500">TECHNOLOGIES HOLDINGS</small></span>
  </Link>
}
