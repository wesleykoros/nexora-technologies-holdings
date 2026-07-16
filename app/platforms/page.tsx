import type { Metadata } from "next";

import { InteractivePlatformGrid } from "@/components/platforms/InteractivePlatformGrid";
import { PlatformComparison } from "@/components/platforms/PlatformComparison";
import { PortfolioArchitecture } from "@/components/platforms/PortfolioArchitecture";
import { PortfolioCTA } from "@/components/platforms/PortfolioCTA";
import { PortfolioHero } from "@/components/platforms/PortfolioHero";
import { PortfolioLifecycle } from "@/components/platforms/PortfolioLifecycle";
import { SharedCapabilities } from "@/components/platforms/SharedCapabilities";

export const metadata: Metadata = {
  title: "Platforms",
  description:
    "Explore the technology platform portfolio of Nexora Technologies Holdings LLC.",
};

export default function PlatformsPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioArchitecture />
      <InteractivePlatformGrid />
      <SharedCapabilities />
      <PlatformComparison />
      <PortfolioLifecycle />
      <PortfolioCTA />
    </>
  );
}
