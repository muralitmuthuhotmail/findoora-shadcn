"use client";

import { mockAssetAllocations } from "@/lib/data/mock-portfolio-data";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { PieChart } from "lucide-react";

const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(amount);
};

export const DiversificationChart = () => {
  return (
    <Card className="w-full shadow-none">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6">
        <div className="flex items-center space-x-2">
          <PieChart className="h-5 w-5 text-primary" />
          <CardTitle className="text-lg font-semibold">
            Asset Allocation
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Mock Pie Chart */}
          <div className="aspect-square w-full max-w-[200px] mx-auto bg-gradient-to-br from-primary/5 to-primary/10 rounded-full flex items-center justify-center border border-border">
            <div className="text-center space-y-1">
              <PieChart className="h-8 w-8 text-primary mx-auto" />
              <p className="text-xs text-muted-foreground">Pie Chart</p>
            </div>
          </div>

          {/* Asset Breakdown */}
          <div className="space-y-3">
            {mockAssetAllocations.map((asset, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${asset.color}`}></div>
                  <div className="space-y-0">
                    <p className="text-sm font-medium">{asset.label}</p>
                    <p className="text-xs text-muted-foreground">
                      {formatCurrency(asset.value)}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold">{asset.percentage}%</p>
                </div>
              </div>
            ))}
          </div>

          {/* Diversification Score */}
          <div className="pt-4 border-t space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Diversification Score</span>
              <span className="text-sm font-bold text-green-600">8.2/10</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full w-[82%]"></div>
            </div>
            <p className="text-xs text-muted-foreground">
              Well diversified across asset classes
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
