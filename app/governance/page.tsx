import type { Metadata } from "next";

import { CorporateCommitments } from "@/components/governance/CorporateCommitments";
import { CorporateStructureDiagram } from "@/components/governance/CorporateStructureDiagram";
import { GovernanceFramework } from "@/components/governance/GovernanceFramework";
import { GovernanceHero } from "@/components/governance/GovernanceHero";
import { GovernancePhilosophy } from "@/components/governance/GovernancePhilosophy";
import { LongTermStewardship } from "@/components/governance/LongTermStewardship";
import { LookingAhead } from "@/components/governance/LookingAhead";
import { MissionVision } from "@/components/governance/MissionVision";
import { PurposeSection } from "@/components/governance/PurposeSection";
import { StewardshipLifecycle } from "@/components/governance/StewardshipLifecycle";
import { ValuesPillars } from "@/components/governance/ValuesPillars";

export const metadata: Metadata = {
  title: "Governance & Stewardship",
  description: "How Nexora Technologies Holdings LLC governs, owns and stewards intelligent technology platforms for long-term value.",
};

export default function GovernancePage() {
  return (
    <>
      <GovernanceHero />
      <PurposeSection />
      <MissionVision />
      <ValuesPillars />
      <GovernancePhilosophy />
      <StewardshipLifecycle />
      <CorporateStructureDiagram />
      <GovernanceFramework />
      <CorporateCommitments />
      <LongTermStewardship />
      <LookingAhead />
    </>
  );
}
