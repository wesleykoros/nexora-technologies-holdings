import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe2, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PlatformShowcase } from "@/components/PlatformShowcase";
import { WorldPresence } from "@/components/WorldPresence";
import { industries } from "@/lib/data";

const principles=[
  ["Governed by design","Architecture that treats security, accountability and compliance as product foundations.",ShieldCheck],
  ["Built to integrate","Modular platforms that connect people, workflows, data and external systems.",Workflow],
  ["Designed to scale","A portfolio model that supports licensing, partnerships and international expansion.",Globe2],
] as const;

export default function Home(){return <>
<section className="ambient bg-grid relative min-h-[96vh] overflow-hidden px-5 pt-36">
  <div className="hero-orb hero-orb-one"/><div className="hero-orb hero-orb-two"/>
  <div className="mx-auto grid max-w-7xl items-center gap-14 pb-24 pt-12 lg:grid-cols-[1.08fr_.92fr]">
    <div className="relative z-10"><div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-[color:var(--muted)]"><Globe2 size={14}/> Delaware · Global technology portfolio</div>
      <h1 className="text-gradient max-w-5xl text-6xl font-black leading-[.92] tracking-[-.07em] sm:text-8xl">Technology infrastructure for industries that matter.</h1>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-[color:var(--muted)]">Nexora develops, owns and commercialises intelligent platforms that strengthen care, compliance, governance and operational performance.</p>
      <div className="mt-9 flex flex-wrap gap-3"><Link href="/platforms" className="primary-cta">Explore platforms <ArrowRight size={18}/></Link><Link href="/partnerships" className="secondary-cta">Partner with Nexora</Link></div>
      <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs font-bold uppercase tracking-[.15em] text-[color:var(--muted)]"><span>Enterprise software</span><span>AI infrastructure</span><span>Regulated industries</span></div>
    </div>
    <div className="relative z-10 glass rounded-[2rem] p-5 shadow-2xl shadow-indigo-950/20"><div className="rounded-[1.5rem] border border-[color:var(--border)] bg-[color:var(--background)] p-7"><div className="mb-10 flex items-center justify-between"><span className="text-sm font-bold">Nexora portfolio</span><span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400">Building globally</span></div>
      {[['CareAxis','Care operations'],['Nexora AI','Enterprise intelligence'],['Compliance Intelligence','Assurance infrastructure']].map(([a,b],i)=><div key={a} className="portfolio-row group"><span className="portfolio-mark">0{i+1}</span><div className="flex-1"><b>{a}</b><p className="text-xs text-[color:var(--muted)]">{b}</p></div><ArrowRight className="opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" size={17}/></div>)}</div></div>
  </div>
</section>
<section className="px-5 py-24"><div className="mx-auto max-w-7xl"><Reveal><p className="eyebrow">Nexora at a glance</p><h2 className="section-title max-w-4xl">A technology holding company built for intelligent, regulated and essential systems.</h2></Reveal>
<div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[["Delaware","U.S. holding company"],["Global","Platform portfolio"],["AI-first","Technology direction"],["Governed","Commercialisation model"]].map(([a,b])=><div key={a} className="metric-card"><strong>{a}</strong><span>{b}</span></div>)}</div></div></section>
<section className="border-y border-[color:var(--border)] px-5 py-24"><div className="mx-auto max-w-7xl"><Reveal><p className="eyebrow">Portfolio architecture</p><h2 className="section-title max-w-4xl">One holding company. Multiple intelligent platforms.</h2></Reveal><div className="mt-14"><PlatformShowcase/></div></div></section>
<section className="px-5 py-24"><div className="mx-auto max-w-7xl"><WorldPresence/></div></section>
<section className="border-y border-[color:var(--border)] px-5 py-24"><div className="mx-auto max-w-7xl"><Reveal><p className="eyebrow text-teal-500">Operating principles</p><h2 className="section-title max-w-4xl">Enterprise ambition with disciplined governance.</h2></Reveal><div className="mt-12 grid gap-5 md:grid-cols-3">{principles.map(([title,text,Icon])=><article key={title} className="glass rounded-3xl p-7"><Icon className="text-cyan-400"/><h3 className="mt-10 text-xl font-black">{title}</h3><p className="mt-4 leading-7 text-[color:var(--muted)]">{text}</p></article>)}</div></div></section>
<section className="px-5 py-24"><div className="mx-auto max-w-7xl"><Reveal><p className="eyebrow">Industries</p><h2 className="section-title">Designed around real operational complexity.</h2></Reveal><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{industries.map(([name,Icon])=><Link href="/industries" key={name} className="industry-card"><Icon size={22}/><b>{name}</b><ArrowRight size={17}/></Link>)}</div></div></section>
<section className="px-5 pb-24"><div className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-br from-indigo-600 via-blue-600 to-teal-500 p-9 text-white shadow-2xl shadow-indigo-950/25 sm:p-14"><div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="text-sm font-bold uppercase tracking-[.25em] text-white/70">Strategic partnerships</p><h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-.04em] sm:text-6xl">Let&apos;s build the future together.</h2><div className="mt-7 grid gap-3 text-sm text-white/85 sm:grid-cols-3">{['Platform licensing','Joint ventures','International expansion'].map(x=><span className="flex items-center gap-2" key={x}><CheckCircle2 size={16}/>{x}</span>)}</div></div><Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold text-slate-950">Start a conversation <ArrowRight size={18}/></Link></div></div></section>
</>}
