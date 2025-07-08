"use client";

import {
  mockMarketIndices,
  mockNewsItems,
} from "@/lib/data/mock-portfolio-data";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Clock, ExternalLink, Newspaper, TrendingUp } from "lucide-react";

const getCategoryBadgeVariant = (category: string) => {
  switch (category) {
    case "market":
      return "default";
    case "portfolio":
      return "secondary";
    case "economic":
      return "destructive";
    default:
      return "outline";
  }
};

const getRelevanceColor = (relevance: string) => {
  switch (relevance) {
    case "high":
      return "text-red-500";
    case "medium":
      return "text-yellow-500";
    case "low":
      return "text-green-500";
    default:
      return "text-muted-foreground";
  }
};

const formatNumber = (num: number): string => {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(num);
};

const formatPercentage = (percent: number): string => {
  const sign = percent >= 0 ? "+" : "";
  return `${sign}${percent.toFixed(1)}%`;
};

export const NewsBlock = () => {
  return (
    <Card className="w-full shadow-none">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6">
        <div className="flex items-center space-x-2">
          <Newspaper className="h-5 w-5 text-primary" />
          <CardTitle className="text-xl font-semibold">
            Market News & Updates
          </CardTitle>
        </div>
        <Button variant="outline" size="sm">
          View All News
          <ExternalLink className="h-4 w-4 ml-2" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockNewsItems.map((news) => (
            <Card
              key={news.id}
              className="border border-border hover:shadow-sm transition-shadow cursor-pointer shadow-none bg-background">
              <CardContent>
                <div className="space-y-3">
                  {/* Header with badges */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      <Badge
                        variant={getCategoryBadgeVariant(news.category)}
                        className="text-xs">
                        {news.category.charAt(0).toUpperCase() +
                          news.category.slice(1)}
                      </Badge>
                      <div
                        className={`w-2 h-2 rounded-full ${getRelevanceColor(news.relevance)}`}></div>
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {news.timestamp}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="font-semibold text-base leading-tight hover:text-primary transition-colors text-start">
                      {news.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 text-start">
                      {news.summary}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <span className="text-xs font-medium text-muted-foreground">
                      {news.source}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 px-2 text-xs">
                      Read More
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Market Indicators Footer */}
        <div className="mt-6 pt-4 border-t">
          <div className="grid grid-cols-3 gap-4 text-center">
            {mockMarketIndices.map((index, i) => (
              <div key={i} className="space-y-1">
                <div className="flex items-center justify-center space-x-1">
                  <TrendingUp
                    className={`h-4 w-4 ${index.changePercentage >= 0 ? "text-green-500" : "text-red-500"}`}
                  />
                  <span className="text-sm font-medium">{index.name}</span>
                </div>
                <p
                  className={`text-lg font-bold ${index.changePercentage >= 0 ? "text-green-600" : "text-red-600"}`}>
                  {formatPercentage(index.changePercentage)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
