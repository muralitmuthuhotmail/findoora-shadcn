"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Tabs, TabsList, TabsTrigger } from "@workspace/ui/components/tabs";
import { cn } from "@workspace/ui/lib/utils";
import { useState } from "react";
import { ChartLineInteractive } from "../line-chart";

export const PerformanceTimeRangeToggle = ({
  range,
  value,
  defaultValue,
  onValueChange,
  className,
}: {
  range: string[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}) => {
  return (
    <Tabs
      className={cn(className)}
      value={value || defaultValue || range[0]}
      onValueChange={onValueChange}>
      <TabsList className={cn("border-border border-1 p-1", className)}>
        {range.map((rangeItem) => (
          <TabsTrigger
            key={rangeItem}
            value={rangeItem}
            className={cn(
              `data-[state=active]:bg-primary/90 data-[state=active]:text-primary-foreground transition-all`,
              value === rangeItem
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
            )}>
            {rangeItem}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export const PerformanceChart = () => {
  const [timeRange, setTimeRange] = useState("1Y");

  return (
    <Card className="w-full shadow-none rounded-none md:rounded-xl">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center space-x-2">
          {/* <BarChart3 className="h-5 w-5 text-primary" /> */}
          <CardTitle className="text-xl font-semibold text-left">
            Performance
          </CardTitle>
        </div>
        {/* Desktop Time Range Toggle */}
        <PerformanceTimeRangeToggle
          className="md:block hidden"
          defaultValue="1Y"
          range={["1W", "1M", "3M", "1Y", "YTD", "5Y", "All"]}
          value={timeRange}
          onValueChange={setTimeRange}
        />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Chart Legend */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-start space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span>Your Portfolio (+13.2%)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-muted-foreground rounded-full"></div>
              <span>S&P 500 Benchmark (+10.5%)</span>
            </div>
          </div>

          {/* Mock Chart Area */}
          <ChartLineInteractive />

          {/* Mobile Time Range Toggle */}
          <PerformanceTimeRangeToggle
            className="md:hidden flex w-full my-2"
            defaultValue="1Y"
            range={["1W", "1M", "3M", "1Y", "YTD", "5Y", "All"]}
            value={timeRange}
            onValueChange={setTimeRange}
          />

          {/* Performance Summary */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t">
            <div className="text-center space-y-1">
              <p className="text-xs md:text-sm font-medium">Annual Return</p>
              <p className="text-lg md:text-xl font-bold text-[var(--color-positive)]">
                +13.2%
              </p>
            </div>
            <div className="text-center space-y-1">
              <p className="text-xs md:text-sm font-medium">Volatility</p>
              <p className="text-lg md:text-xl font-bold">8.4%</p>
            </div>
            <div className="text-center space-y-1">
              <p className="text-xs md:text-sm font-medium">Sharpe Ratio</p>
              <p className="text-lg md:text-xl font-bold">1.57</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
