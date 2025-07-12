"use client";

import {
  PerformanceChart,
  PortfolioHeader,
  PortfolioMetricsGrid,
} from "@/components/blocks/home";
import { SectionContent, SectionLayout } from "@/components/layout";

export const PortfolioSummaryPage = () => {
  return (
    <SectionLayout
      id="portfolio-summary"
      spacing="normal"
      align="left"
      className="w-full pt-6 flex flex-col items-center justify-start mx-auto mt-0">
      <SectionContent className="space-y-4 w-full">
        {/* Portfolio Header */}
        <PortfolioHeader />

        {/* Portfolio Metrics */}
        <PortfolioMetricsGrid />

        {/* Performance Chart Section */}
        <PerformanceChart />

        {/* Portfolio Grid and Diversification */}
        {/* <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <PortfolioGrid />
                </div>

                <div className="space-y-6">
                  <DiversificationChart />
                </div>
              </div> */}

        {/* News Section */}
        {/* <NewsBlock /> */}
      </SectionContent>
    </SectionLayout>
  );
};
