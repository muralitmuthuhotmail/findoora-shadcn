"use client";

import { appConfig } from "@/app/app-config";
import {
  NewsBlock,
  PerformanceChart,
  PortfolioHeader,
  PortfolioMetricsGrid,
  PortfolioNavBar,
} from "@/components/blocks/home";
import { SectionContent, SectionLayout } from "@/components/layout";
import { cn } from "@workspace/ui/lib/utils";

export const PortfolioSummaryPage = () => {
  return (
    <>
      {/* Navigation Bar */}
      <PortfolioNavBar />
      <div className="flex w-full items-center justify-center px-4 py-2">
        <div
          className={cn(
            "flex flex-col items-center justify-center w-full mx-auto",
            `max-w-${appConfig.maxWidth}`,
            "gap-4"
          )}>
          <SectionLayout
            spacing="normal"
            className="w-full pt-6 flex flex-col items-center justify-center mx-auto mt-0">
            <SectionContent className="space-y-8 w-full">
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
              <NewsBlock />
            </SectionContent>
          </SectionLayout>
        </div>
      </div>
    </>
  );
};
