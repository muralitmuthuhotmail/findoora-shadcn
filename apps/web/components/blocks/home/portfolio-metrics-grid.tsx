"use client";

import { mockSummaryMetrics } from "@/lib/data/mock-portfolio-data";
import { Badge } from "@workspace/ui/components/badge";
import { Card, CardContent } from "@workspace/ui/components/card";
import { DollarSign, Percent, TrendingDown, TrendingUp } from "lucide-react";

interface SummaryMetric {
  label: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative";
  icon?: React.ReactNode;
}

const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(amount);
};

const formatPercentage = (percent: number): string => {
  const sign = percent >= 0 ? "+" : "";
  return `${sign}${percent.toFixed(1)}%`;
};

export const PortfolioMetricsGrid = () => {
  const metrics: SummaryMetric[] = [
    {
      label: "Total Portfolio Value",
      value: formatCurrency(mockSummaryMetrics.totalValue),
      change: formatPercentage(mockSummaryMetrics.totalGainLossPercentage),
      changeType:
        mockSummaryMetrics.totalGainLossPercentage >= 0
          ? "positive"
          : "negative",
      icon: <DollarSign className="h-5 w-5" />,
    },
    {
      label: "Today's Change",
      value: formatCurrency(mockSummaryMetrics.todayChange),
      change: formatPercentage(mockSummaryMetrics.todayChangePercentage),
      changeType: mockSummaryMetrics.todayChange >= 0 ? "positive" : "negative",
      icon: <TrendingUp className="h-5 w-5" />,
    },
    {
      label: "Total Gain/Loss",
      value: formatCurrency(mockSummaryMetrics.totalGainLoss),
      change: formatPercentage(mockSummaryMetrics.totalGainLossPercentage),
      changeType:
        mockSummaryMetrics.totalGainLoss >= 0 ? "positive" : "negative",
      icon: <Percent className="h-5 w-5" />,
    },
    {
      label: "Monthly Performance",
      value: formatCurrency(mockSummaryMetrics.monthlyChange),
      change: formatPercentage(mockSummaryMetrics.monthlyChangePercentage),
      changeType:
        mockSummaryMetrics.monthlyChange >= 0 ? "positive" : "negative",
      icon:
        mockSummaryMetrics.monthlyChange >= 0 ? (
          <TrendingUp className="h-5 w-5" />
        ) : (
          <TrendingDown className="h-5 w-5" />
        ),
    },
  ];

  return (
    <Card className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 md:gap-0 bg-card shadow-none py-4 md:py-6">
      {metrics.map((metric, index) => (
        <div key={index} className="relative overflow-hidden p-2 md:p-2 lg:p-0">
          <CardContent>
            <div className="flex items-center justify-between space-y-0 pb-0 md:pb-2 gap-2">
              <div className="flex items-center space-x-2 text-muted-foreground">
                {metric.icon}
                <span className="text-sm font-medium">{metric.label}</span>
              </div>
              <Badge variant="outline">{metric.change}</Badge>
            </div>
            <div className="space-y-1">
              <div className="text-lg md:text-xl font-semibold md:font-bold text-left">
                {metric.value}
              </div>
            </div>
          </CardContent>
          {/* vertical line */}
          {index !== 0 && (
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 pointer-events-none max-w-1 rounded-full"></div>
          )}
        </div>
      ))}
    </Card>
  );
};
