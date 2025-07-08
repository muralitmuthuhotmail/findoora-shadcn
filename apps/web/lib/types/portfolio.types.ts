// Portfolio related types

export interface Portfolio {
  id: string;
  name: string;
  value: number;
  change: number;
  changePercentage: number;
  allocation: number;
  holdings: number;
  lastUpdated: string;
  description?: string;
}

export interface Asset {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercentage: number;
  quantity: number;
  value: number;
  allocation: number;
  sector: string;
}

export interface PerformanceData {
  date: string;
  portfolio: number;
  benchmark: number;
}

export interface AssetAllocation {
  label: string;
  percentage: number;
  value: number;
  color: string;
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  source: string;
  timestamp: string;
  category: "market" | "portfolio" | "economic" | "company";
  relevance: "high" | "medium" | "low";
  url?: string;
}

export interface MarketIndex {
  name: string;
  value: number;
  change: number;
  changePercentage: number;
}

export interface SummaryMetrics {
  totalValue: number;
  todayChange: number;
  todayChangePercentage: number;
  totalGainLoss: number;
  totalGainLossPercentage: number;
  monthlyChange: number;
  monthlyChangePercentage: number;
}
