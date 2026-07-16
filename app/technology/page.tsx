import type { Metadata } from "next";

import { ArchitecturePrinciples } from "@/components/technology/ArchitecturePrinciples";
import { FutureTechnology } from "@/components/technology/FutureTechnology";
import { InnovationPipeline } from "@/components/technology/InnovationPipeline";
import { IntegrationArchitecture } from "@/components/technology/IntegrationArchitecture";
import { PlatformStack } from "@/components/technology/PlatformStack";
import { ResponsibleAIFramework } from "@/components/technology/ResponsibleAIFramework";
import { ScalabilityModel } from "@/components/technology/ScalabilityModel";
import { SecurityArchitecture } from "@/components/technology/SecurityArchitecture";
import { TechnologyHero } from "@/components/technology/TechnologyHero";
import { TechnologyPhilosophy } from "@/components/technology/TechnologyPhilosophy";

export const metadata: Metadata = {
  title: "Technology & Architecture",
  description:
    "Explore Nexora's enterprise architecture, responsible AI, security, integration and scalable technology foundations.",
};

export default function TechnologyPage() {
  return (
    <>
      <TechnologyHero />
      <TechnologyPhilosophy />
      <ArchitecturePrinciples />
      <PlatformStack />
      <ResponsibleAIFramework />
      <SecurityArchitecture />
      <IntegrationArchitecture />
      <ScalabilityModel />
      <InnovationPipeline />
      <FutureTechnology />
    </>
  );
}
