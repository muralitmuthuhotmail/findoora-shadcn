"use client";

import { mockPortfolios } from "@/lib/data/mock-portfolio-data";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { cn } from "@workspace/ui/lib/utils";
import {
  Briefcase,
  ExternalLink,
  MoreHorizontal,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

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

export const PortfolioGrid = () => {
  return (
    <Card className="w-full shadow-none">
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <div className="flex items-center space-x-2">
          <Briefcase className="h-5 w-5 text-primary" />
          <CardTitle className="text-xl font-semibold">
            Your Portfolios
          </CardTitle>
        </div>
        <Button variant="outline" size="sm">
          View All
          <ExternalLink className="h-4 w-4 ml-2" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {mockPortfolios.map((portfolio) => (
            <Card
              key={portfolio.id}
              className="border border-border shadow-none bg-background hover:bg-accent transition-colors duration-200">
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <h3 className="font-semibold text-lg">
                        {portfolio.name}
                      </h3>
                      <Badge variant="outline" className="text-xs">
                        {portfolio.allocation.toFixed(1)}%
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>{portfolio.holdings} holdings</span>
                      <span>•</span>
                      <span>Updated {portfolio.lastUpdated}</span>
                    </div>
                  </div>

                  <div className="text-right space-y-2">
                    <div className="text-xl font-bold">
                      {formatCurrency(portfolio.value)}
                    </div>
                    <div
                      className={cn(
                        "flex items-center text-sm font-medium",
                        portfolio.changePercentage >= 0
                          ? "text-green-600"
                          : "text-red-600"
                      )}>
                      {portfolio.changePercentage >= 0 ? (
                        <TrendingUp className="h-3 w-3 mr-1" />
                      ) : (
                        <TrendingDown className="h-3 w-3 mr-1" />
                      )}
                      {formatPercentage(portfolio.changePercentage)}
                    </div>
                  </div>

                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
