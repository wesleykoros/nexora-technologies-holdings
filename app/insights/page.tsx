import { PageHero } from "@/components/PageHero";
export const metadata={title:"Insights"};
const posts=[
 ["Building governed AI for regulated industries","How enterprise AI can support decisions without weakening accountability."],
 ["Why care operations need integrated infrastructure","The case for connecting workforce, documentation, compliance and finance."],
 ["From evidence to assurance","Designing compliance systems that turn operational activity into verifiable governance."],
];
export default function Insights(){return <><PageHero eyebrow="Insights" title="Ideas shaping Nexora's technology portfolio." description="Perspectives on intelligent operations, governed AI, regulated industries and platform commercialisation."/><section className="px-5 pb-24"><div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">{posts.map(([t,d],i)=><article className="glass rounded-3xl p-7" key={t}><span className="text-xs text-indigo-400">0{i+1} · Perspective</span><h2 className="mt-8 text-xl font-black">{t}</h2><p className="mt-4 leading-7 text-[color:var(--muted)]">{d}</p><span className="mt-8 block text-sm font-bold text-cyan-400">Coming soon</span></article>)}</div></section></>}
