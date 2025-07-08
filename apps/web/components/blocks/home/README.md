# Portfolio Management Home Dashboard

This home folder contains a comprehensive portfolio management dashboard built with Next.js, following the established project structure and design patterns.

## 📁 Structure

```
apps/web/
├── app/home/
│   └── page.tsx                    # Home route page
├── components/
│   ├── blocks/home/                # Home-specific UI blocks
│   │   ├── index.ts               # Exports all home components
│   │   ├── portfolio-nav-bar.tsx  # Navigation bar with user menu
│   │   ├── portfolio-summary-banner.tsx # Key metrics summary
│   │   ├── performance-chart.tsx  # Performance vs benchmark chart
│   │   ├── portfolio-grid.tsx     # List of all portfolios
│   │   ├── diversification-chart.tsx # Asset allocation breakdown
│   │   └── news-block.tsx         # Market news and updates
│   └── pages/home/
│       ├── index.ts               # Page component exports
│       └── portfolio-summary.tsx  # Main portfolio summary page
├── lib/
│   ├── data/
│   │   └── mock-portfolio-data.ts # Mock data for development
│   └── types/
│       └── portfolio.types.ts     # TypeScript types
```

## 🚀 Features

### Dashboard Overview

- **Portfolio Summary Banner**: Total portfolio value, daily changes, gains/losses, and monthly performance
- **Performance Chart**: Interactive chart comparing portfolio performance vs S&P 500 benchmark
- **Portfolio Grid**: List of all portfolios with individual performance metrics
- **Asset Allocation**: Pie chart showing diversification across asset classes
- **Market News**: Latest financial news with categorization and relevance indicators
- **Market Indices**: Real-time updates on major market indices

### Navigation

- **Portfolio NavBar**: Modern navigation with user avatar, notifications, and quick actions
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Dark Mode Support**: Full dark/light theme compatibility

### Data Management

- **TypeScript Types**: Strongly typed interfaces for all portfolio-related data
- **Mock Data**: Realistic sample data for development and testing
- **Formatted Values**: Proper currency and percentage formatting

## 🎨 Design System

The components follow the established design patterns:

- **shadcn/ui components**: Consistent UI components from the design system
- **Tailwind CSS**: Utility-first styling approach
- **Responsive Grid**: Adaptive layouts for different screen sizes
- **Modern Cards**: Clean card-based layout with proper spacing
- **Interactive Elements**: Hover states and transitions

## 📊 Data Structure

### Portfolio Types

```typescript
interface Portfolio {
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
```

### Asset Allocation

```typescript
interface AssetAllocation {
  label: string;
  percentage: number;
  value: number;
  color: string;
}
```

### News Items

```typescript
interface NewsItem {
  id: string;
  title: string;
  summary: string;
  source: string;
  timestamp: string;
  category: "market" | "portfolio" | "economic" | "company";
  relevance: "high" | "medium" | "low";
  url?: string;
}
```

## 🔗 Navigation Routes

- `/home` - Portfolio summary dashboard (main route)
- Future routes can be added for:
  - `/home/portfolios` - Detailed portfolio management
  - `/home/analytics` - Advanced analytics and insights
  - `/home/settings` - User preferences and configurations

## 🎯 Key Metrics Displayed

1. **Total Portfolio Value**: Combined value of all investments
2. **Today's Change**: Daily gains/losses with percentage
3. **Total Gain/Loss**: Overall performance since inception
4. **Monthly Performance**: Monthly trends and changes
5. **Diversification Score**: Asset allocation health indicator
6. **Performance vs Benchmark**: Comparison with market indices

## 📱 Responsive Features

- **Mobile Navigation**: Collapsible menu with essential actions
- **Tablet Layout**: Two-column grid for optimal space usage
- **Desktop Layout**: Full three-column layout with sidebar
- **Touch-Friendly**: Proper touch targets and interactions

## 🔮 Future Enhancements

- Real-time data integration with financial APIs
- Interactive charts with zoom and filtering
- Portfolio comparison tools
- Risk analysis and recommendations
- Automated rebalancing suggestions
- Tax optimization insights
- Goal tracking and progress monitoring

## 🚀 Getting Started

1. Navigate to `/home` to view the portfolio dashboard
2. The page uses mock data for demonstration
3. All components are fully responsive and theme-aware
4. Components can be easily extended with real API data

This structure provides a solid foundation for a professional portfolio management application while maintaining consistency with the existing codebase patterns.
