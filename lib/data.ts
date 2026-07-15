import { BrainCircuit, Building2, CloudCog, HeartPulse, Landmark, Network, Scale, ShieldCheck, Sparkles } from "lucide-react";
export const platforms=[
 {name:"CareAxis",tag:"Flagship care platform",description:"Intelligent care operations for scheduling, workforce, documentation, compliance, funding, billing and service delivery.",icon:HeartPulse,href:"/platforms/careaxis"},
 {name:"Nexora AI",tag:"Enterprise intelligence",description:"Governed AI capabilities that transform complex information into workflows, decisions, knowledge and operational insight.",icon:BrainCircuit,href:"/platforms/nexora-ai"},
 {name:"Compliance Intelligence",tag:"Assurance infrastructure",description:"Evidence, audit, risk, issue and corrective-action infrastructure designed for regulated organisations.",icon:ShieldCheck,href:"/platforms/compliance-intelligence"},
 {name:"Future Ventures",tag:"Venture portfolio",description:"A disciplined home for future products, acquisitions, incubated technologies and strategic ventures.",icon:Sparkles,href:"/platforms/future-ventures"}
];
export const industries=[["Health & Care",HeartPulse],["Government & Public Safety",Landmark],["Regulated Enterprise",Scale],["Digital Infrastructure",CloudCog],["Provider Networks",Network],["Technology Ventures",Building2]] as const;
