"use client";

import { mockSummaryMetrics } from "@/lib/data/mock-portfolio-data";
import { Badge } from "@workspace/ui/components/badge";
import { Card, CardContent } from "@workspace/ui/components/card";
import {
  formatCurrency,
  formatPercentage,
} from "@workspace/ui/lib/number-utils";
import { cn } from "@workspace/ui/lib/utils";
import { DollarSign, Percent, TrendingDown, TrendingUp } from "lucide-react";
import { useMemo } from "react";

export interface SummaryMetric {
  label: string;
  value: number;
  change?: number;
  icon?: React.ReactNode;
  currency?: string;
}

export interface PortfolioMetricProps {
  metric: SummaryMetric;
  index: number;
}

export const defaultMetrics: SummaryMetric[] = [
  {
    label: "Total Value",
    value: mockSummaryMetrics.totalValue,
    // change: mockSummaryMetrics.todayChangePercentage,
    icon: <DollarSign className="w-4 h-4" aria-label="Total Value" />,
    currency: "AUD",
  },
  {
    label: "Today Change",
    value: mockSummaryMetrics.todayChange,
    change: mockSummaryMetrics.todayChangePercentage,
    icon: <TrendingUp className="w-4 h-4" aria-label="Today Change" />,
    currency: "AUD",
  },
  {
    label: "Total Gain/Loss",
    value: mockSummaryMetrics.totalGainLoss,
    change: mockSummaryMetrics.totalGainLossPercentage,
    icon: <Percent className="w-4 h-4" aria-label="Total Gain/Loss" />,
  },
  {
    label: "Monthly Change",
    value: mockSummaryMetrics.monthlyChange,
    change: mockSummaryMetrics.monthlyChangePercentage,
    icon: <TrendingDown className="w-4 h-4" aria-label="Monthly Change" />,
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
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 md:gap-0 bg-card shadow-none py-4 md:py-6"
      role="list">
      {metrics.map((metric, index) => (
        <PortfolioMetric key={metric.label} metric={metric} index={index} />
      ))}
    </Card>
  );
};

const PortfolioMetric: React.FC<PortfolioMetricProps> = ({ metric, index }) => {
  // Memoize change type
  const changeType = useMemo(() => {
    if (typeof metric.change !== "number") return "neutral";
    return metric.change >= 0 ? "positive" : "negative";
  }, [metric.change]);

  // Standardized color helpers
  const iconColor = useMemo(() => {
    switch (changeType) {
      case "positive":
        return "text-[var(--color-positive)]";
      case "negative":
        return "text-[var(--color-negative)]";
      default:
        return "text-muted-foreground";
    }
  }, [changeType]);

  const bgColor = useMemo(() => {
    switch (changeType) {
      case "positive":
        return "bg-[var(--color-positive)]/10 border border-[var(--color-positive)]/50";
      case "negative":
        return "bg-[var(--color-negative)]/10 border border-[var(--color-negative)]/50";
      default:
        return "bg-muted/10";
    }
  }, [changeType]);

  return (
    <div className="relative overflow-hidden py-2" role="listitem">
      <CardContent>
        <div className="flex items-center justify-between space-y-1 gap-2">
          <div className="flex items-center space-x-2 text-muted-foreground">
            {metric.icon && (
              <span className={cn(iconColor)}>{metric.icon}</span>
            )}
            <span className="text-sm font-medium">{metric.label}</span>
          </div>
          {metric.change && (
            <Badge variant="outline" className={bgColor} aria-label="Change">
              {formatPercentage(metric.change ?? 0)}
            </Badge>
          )}
        </div>
        <div className="space-y-1">
          <div
            className={cn(
              "text-lg md:text-xl font-semibold md:font-bold text-left",
              iconColor
            )}>
            {formatCurrency(metric.value, metric.currency)}
          </div>
        </div>
      </CardContent>
      {/* vertical line */}
      {index !== 0 && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 pointer-events-none max-w-1 rounded-full hidden lg:block" />
      )}
    </div>
  );
};
