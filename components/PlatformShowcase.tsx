"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { platforms } from "@/lib/data";

export function PlatformShowcase(){
  const [active,setActive]=useState(0);
  const p=platforms[active];
  return <div className="grid gap-5 lg:grid-cols-[.8fr_1.2fr]">
    <div className="space-y-3">{platforms.map((item,i)=><button key={item.name} onMouseEnter={()=>setActive(i)} onFocus={()=>setActive(i)} onClick={()=>setActive(i)} className={`w-full rounded-2xl border p-5 text-left transition ${i===active?'border-indigo-400/40 bg-indigo-500/10':'border-[color:var(--border)] bg-[color:var(--card)] hover:border-indigo-400/25'}`}>
      <span className="text-xs text-indigo-400">0{i+1}</span><b className="mt-3 block text-lg">{item.name}</b><span className="text-sm text-[color:var(--muted)]">{item.tag}</span>
    </button>)}</div>
    <article className="relative overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--card)] p-8 sm:p-10">
      <div className="absolute right-0 top-0 size-56 rounded-full bg-indigo-500/15 blur-3xl"/>
      <p.icon className="relative text-cyan-400" size={34}/><p className="relative mt-16 text-xs font-bold uppercase tracking-[.22em] text-indigo-400">{p.tag}</p>
      <h3 className="relative mt-4 text-4xl font-black tracking-[-.04em]">{p.name}</h3><p className="relative mt-5 max-w-xl text-lg leading-8 text-[color:var(--muted)]">{p.description}</p>
      <Link href={p.href} className="relative mt-9 inline-flex items-center gap-2 font-bold text-cyan-400">Explore platform <ArrowUpRight size={18}/></Link>
    </article>
  </div>
}
