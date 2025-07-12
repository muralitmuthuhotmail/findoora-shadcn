"use client";

import { mockSummaryMetrics } from "@/lib/data/mock-portfolio-data";
import { Card } from "@workspace/ui/components/card";
import { PortfolioMetric, SummaryMetric } from "./portfolio-metric";

export const defaultMetrics: SummaryMetric[] = [
  {
    label: "Total Value",
    value: mockSummaryMetrics.totalValue,
    // change: mockSummaryMetrics.todayChangePercentage,
    // icon: <DollarSign className="w-4 h-4" aria-label="Total Value" />,
    currency: "AUD",
    info: "Total value of your portfolio including cash and investments",
    description: "This includes all your assets and cash holdings.",
  },
  {
    label: "Today Change",
    value: mockSummaryMetrics.todayChange,
    change: mockSummaryMetrics.todayChangePercentage,
    // icon: <TrendingUp className="w-4 h-4" aria-label="Today Change" />,
    currency: "AUD",
    info: "Change in portfolio value today",
  },
  {
    label: "Total Gain/Loss",
    value: mockSummaryMetrics.totalGainLoss,
    change: mockSummaryMetrics.totalGainLossPercentage,
    // icon: <Percent className="w-4 h-4" aria-label="Total Gain/Loss" />,
    info: "Total gain or loss since inception",
    currency: "AUD",
  },
  {
    label: "Monthly Change",
    value: mockSummaryMetrics.monthlyChange,
    change: mockSummaryMetrics.monthlyChangePercentage,
    info: "Change in portfolio value over the last month",
    currency: "AUD",
    // icon: <TrendingDown className="w-4 h-4" aria-label="Monthly Change" />,
  },
];

export interface PortfolioMetricsGridProps {
  metrics?: SummaryMetric[];
}

export const PortfolioMetricsGrid: React.FC<PortfolioMetricsGridProps> = ({
  metrics = defaultMetrics,
}) => {
  return (
    <Card
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 md:gap-0 bg-card shadow-none py-4 md:py-6 rounded-none md:rounded-xl"
      role="list">
      {metrics.map((metric, index) => (
        <PortfolioMetric key={metric.label} metric={metric} index={index} />
      ))}
    </Card>
  );
};
