"use client";

import { mockSummaryMetrics } from "@/lib/data/mock-portfolio-data";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import { Card, CardContent } from "@workspace/ui/components/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import { cn } from "@workspace/ui/lib/utils";
import {
  ChevronDown,
  DollarSign,
  Percent,
  Plus,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

interface SummaryMetric {
  label: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
  icon: React.ReactNode;
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

export const PortfolioSummaryBanner = () => {
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
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="space-y-2 flex justify-between items-center w-full">
        <h1 className="text-xl font-bold text-left px-2">All Portfolio</h1>
        <div className="inline-flex items-center">
          <Button size="sm" className="!px-5 ml-2">
            <Plus />
            Add Portfolio
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="!px-4 ml-2 flex items-center gap-2 group w-40">
                Switch Portfolio
                <ChevronDown className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40">
              <DropdownMenuItem>
                <span className="text-sm">Portfolio 1</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span className="text-sm">Portfolio 2</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span className="text-sm">Portfolio 3</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <Card key={index} className="relative overflow-hidden shadow-none">
            <CardContent>
              <div className="flex items-center justify-between space-y-0 pb-2">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  {metric.icon}
                  <span className="text-sm font-medium">{metric.label}</span>
                </div>
                <Badge
                  variant={
                    metric.changeType === "positive" ? "default" : "destructive"
                  }
                  className="text-xs">
                  {metric.change}
                </Badge>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-left">
                  {metric.value}
                </div>
                <div
                  className={cn(
                    "flex items-center text-xs",
                    metric.changeType === "positive"
                      ? "text-green-600"
                      : "text-red-600"
                  )}>
                  {metric.changeType === "positive" ? (
                    <TrendingUp className="h-3 w-3 mr-1" />
                  ) : (
                    <TrendingDown className="h-3 w-3 mr-1" />
                  )}
                  {metric.changeType === "positive" ? "Up" : "Down"} from
                  yesterday
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
