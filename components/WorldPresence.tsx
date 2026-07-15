import { MapPin } from "lucide-react";
export function WorldPresence(){return <div className="world-panel relative overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--card)] p-7 sm:p-10">
  <div className="world-map" aria-hidden="true"/>
  <div className="relative z-10 max-w-lg"><p className="eyebrow">Global direction</p><h3 className="mt-4 text-4xl font-black tracking-[-.04em]">Built in Delaware. Designed for international scale.</h3><p className="mt-5 leading-7 text-[color:var(--muted)]">Nexora combines U.S. holding-company governance with operating partnerships and market expertise across Australia and the wider Asia-Pacific region.</p></div>
  <div className="relative z-10 mt-14 grid gap-3 sm:grid-cols-3">{[["Delaware, USA","Holding company"],["Australia","Operating partnerships"],["Asia-Pacific","Expansion pathway"]].map(([a,b])=><div key={a} className="rounded-2xl border border-white/10 bg-slate-950/55 p-4 text-white backdrop-blur"><MapPin size={16} className="text-cyan-400"/><b className="mt-3 block">{a}</b><span className="text-xs text-slate-400">{b}</span></div>)}</div>
</div>}
