"use client";

import { mockPerformanceData } from "@/lib/data/mock-portfolio-data";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Tabs, TabsList, TabsTrigger } from "@workspace/ui/components/tabs";
import { BarChart3 } from "lucide-react";
import { useState } from "react";

export const PerformanceChart = () => {
  const [timeRange, setTimeRange] = useState("1Y");

  return (
    <Card className="w-full shadow-none">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center space-x-2">
          <BarChart3 className="h-5 w-5 text-primary" />
          <CardTitle className="text-xl font-semibold">
            Performance vs Benchmark
          </CardTitle>
        </div>
        <Tabs value={timeRange} onValueChange={setTimeRange}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="1M">1M</TabsTrigger>
            <TabsTrigger value="3M">3M</TabsTrigger>
            <TabsTrigger value="1Y">1Y</TabsTrigger>
            <TabsTrigger value="All">All</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Chart Legend */}
          <div className="flex items-center space-x-6 text-sm">
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
          <div className="h-[300px] w-full bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg flex items-center justify-center border border-border">
            <div className="text-center space-y-2">
              <BarChart3 className="h-12 w-12 text-primary mx-auto" />
              <p className="text-sm text-muted-foreground">
                Interactive chart would display here
              </p>
              <p className="text-xs text-muted-foreground">
                Performance data for {timeRange} period
              </p>
              <div className="text-xs text-muted-foreground mt-4">
                Data points: {mockPerformanceData.length} months
              </div>
            </div>
          </div>

          {/* Performance Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t">
            <div className="text-center space-y-1">
              <p className="text-sm font-medium">Annual Return</p>
              <p className="text-2xl font-bold text-green-600">+13.2%</p>
            </div>
            <div className="text-center space-y-1">
              <p className="text-sm font-medium">Volatility</p>
              <p className="text-2xl font-bold">8.4%</p>
            </div>
            <div className="text-center space-y-1">
              <p className="text-sm font-medium">Sharpe Ratio</p>
              <p className="text-2xl font-bold">1.57</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
