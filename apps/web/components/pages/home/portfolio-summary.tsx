"use client";

import {
  DiversificationChart,
  NewsBlock,
  PerformanceChart,
  PortfolioGrid,
  PortfolioNavBar,
  PortfolioSummaryBanner,
} from "@/components/blocks/home";
import { SectionContent, SectionLayout } from "@/components/layout";

export const PortfolioSummaryPage = () => {
  return (
    <>
      {/* Navigation Bar */}
      <PortfolioNavBar />
      <div className="min-h-screen bg-background w-screen flex flex-col justify-center items-center">
        <SectionLayout spacing="normal" className="w-full max-w-7xl pt-6">
          <SectionContent className="space-y-8 w-full">
            {/* Summary Banner */}
            <PortfolioSummaryBanner />

            {/* Performance Chart Section */}
            <PerformanceChart />

            {/* Portfolio Grid and Diversification */}
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Portfolio Details - Takes 2 columns */}
              <div className="lg:col-span-2">
                <PortfolioGrid />
              </div>

              {/* Diversification Chart - Takes 1 column */}
              <div className="space-y-6">
                <DiversificationChart />
              </div>
            </div>

            {/* News Section */}
            <NewsBlock />
          </SectionContent>
        </SectionLayout>
      </div>
    </>
  );
};
