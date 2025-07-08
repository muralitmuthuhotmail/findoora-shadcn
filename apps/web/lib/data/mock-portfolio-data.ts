import type {
  AssetAllocation,
  MarketIndex,
  NewsItem,
  PerformanceData,
  Portfolio,
  SummaryMetrics,
} from "@/lib/types/portfolio.types";

export const mockSummaryMetrics: SummaryMetrics = {
  totalValue: 2847293.45,
  todayChange: 12847.23,
  todayChangePercentage: 0.45,
  totalGainLoss: 347293.12,
  totalGainLossPercentage: 13.9,
  monthlyChange: -8234.67,
  monthlyChangePercentage: -2.1,
};

export const mockPortfolios: Portfolio[] = [
  {
    id: "1",
    name: "Growth Portfolio",
    value: 1234567.89,
    change: 88947.23,
    changePercentage: 7.2,
    allocation: 43.4,
    holdings: 24,
    lastUpdated: "2 min ago",
    description: "Focused on high-growth technology and innovation stocks",
  },
  {
    id: "2",
    name: "Dividend Income",
    value: 856234.12,
    change: 17980.75,
    changePercentage: 2.1,
    allocation: 30.1,
    holdings: 18,
    lastUpdated: "5 min ago",
    description: "Steady income through dividend-paying blue-chip stocks",
  },
  {
    id: "3",
    name: "Tech Focus",
    value: 456789.23,
    change: -8222.01,
    changePercentage: -1.8,
    allocation: 16.0,
    holdings: 12,
    lastUpdated: "1 min ago",
    description: "Concentrated exposure to technology sector leaders",
  },
  {
    id: "4",
    name: "International",
    value: 299702.21,
    change: 13481.59,
    changePercentage: 4.5,
    allocation: 10.5,
    holdings: 15,
    lastUpdated: "3 min ago",
    description: "Global diversification across emerging and developed markets",
  },
];

export const mockAssetAllocations: AssetAllocation[] = [
  { label: "Stocks", percentage: 65, value: 1850840, color: "bg-blue-500" },
  { label: "Bonds", percentage: 20, value: 569459, color: "bg-green-500" },
  { label: "REITs", percentage: 8, value: 227783, color: "bg-yellow-500" },
  {
    label: "Commodities",
    percentage: 4,
    value: 113892,
    color: "bg-purple-500",
  },
  { label: "Cash", percentage: 3, value: 85419, color: "bg-gray-500" },
];

export const mockNewsItems: NewsItem[] = [
  {
    id: "1",
    title: "Federal Reserve Announces Interest Rate Decision",
    summary:
      "The Fed decided to maintain current interest rates, citing economic stability concerns and monitoring inflation trends closely...",
    source: "Reuters",
    timestamp: "2 hours ago",
    category: "economic",
    relevance: "high",
  },
  {
    id: "2",
    title: "Tech Stocks Rally on AI Breakthrough Announcement",
    summary:
      "Major technology companies surge following breakthrough in artificial intelligence research, with investors showing renewed confidence...",
    source: "Bloomberg",
    timestamp: "4 hours ago",
    category: "market",
    relevance: "high",
  },
  {
    id: "3",
    title: "Energy Sector Shows Strong Q4 Performance",
    summary:
      "Oil and gas companies report better than expected earnings for the fourth quarter, driven by strong demand and operational efficiency...",
    source: "Financial Times",
    timestamp: "6 hours ago",
    category: "market",
    relevance: "medium",
  },
  {
    id: "4",
    title: "Emerging Markets See Increased Investment Flow",
    summary:
      "International investors are increasing allocation to emerging market funds as global economic conditions improve...",
    source: "Wall Street Journal",
    timestamp: "8 hours ago",
    category: "portfolio",
    relevance: "medium",
  },
];

export const mockMarketIndices: MarketIndex[] = [
  { name: "S&P 500", value: 4756.23, change: 57.82, changePercentage: 1.2 },
  { name: "NASDAQ", value: 14834.45, change: 117.56, changePercentage: 0.8 },
  { name: "DOW", value: 37845.11, change: 189.23, changePercentage: 0.5 },
];

export const mockPerformanceData: PerformanceData[] = [
  { date: "Jan", portfolio: 85, benchmark: 82 },
  { date: "Feb", portfolio: 88, benchmark: 85 },
  { date: "Mar", portfolio: 92, benchmark: 87 },
  { date: "Apr", portfolio: 89, benchmark: 91 },
  { date: "May", portfolio: 94, benchmark: 89 },
  { date: "Jun", portfolio: 97, benchmark: 92 },
  { date: "Jul", portfolio: 101, benchmark: 95 },
  { date: "Aug", portfolio: 98, benchmark: 93 },
  { date: "Sep", portfolio: 103, benchmark: 97 },
  { date: "Oct", portfolio: 106, benchmark: 99 },
  { date: "Nov", portfolio: 109, benchmark: 102 },
  { date: "Dec", portfolio: 113, benchmark: 105 },
];
