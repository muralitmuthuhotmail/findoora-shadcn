import { Badge } from "@workspace/ui/components/badge";
import { CardContent } from "@workspace/ui/components/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip";
import {
  formatCurrency,
  formatPercentage,
} from "@workspace/ui/lib/number-utils";
import { cn } from "@workspace/ui/lib/utils";
import { Info } from "lucide-react";
import { useMemo } from "react";

export interface SummaryMetric {
  label: string;
  value: number;
  change?: number;
  icon?: React.ReactNode;
  currency?: string;
  info?: string;
  description?: string;
}

export interface PortfolioMetricProps {
  metric: SummaryMetric;
  index: number;
}

export const PortfolioMetric: React.FC<PortfolioMetricProps> = ({
  metric,
  index,
}) => {
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
        return "";
    }
  }, [changeType]);

  const bgColor = useMemo(() => {
    switch (changeType) {
      case "positive":
        return "bg-[var(--color-positive)]/10 border border-[var(--color-positive)]/60";
      case "negative":
        return "bg-[var(--color-negative)]/10 border border-[var(--color-negative)]/60";
      default:
        return "bg-muted/10 border border-muted/50";
    }
  }, [changeType]);

  return (
    <div className="relative overflow-hidden py-2" role="listitem">
      <CardContent className="md:space-y-1.5 space-y-1 flex flex-col">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center space-x-2 text-muted-foreground">
            {metric.icon && (
              <span className={cn(iconColor)}>{metric.icon}</span>
            )}
            <span className="text-sm font-medium">{metric.label}</span>
            {metric.info && (
              <>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-3.5 w-3.5 text-muted-foreground cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>{metric.info}</TooltipContent>
                </Tooltip>
              </>
            )}
          </div>
          {metric.change && (
            <Badge
              variant="outline"
              className={cn("font-bold text-muted-foreground", bgColor)}
              aria-label="Change">
              {formatPercentage(metric.change ?? 0)}
            </Badge>
          )}
        </div>
        <div>
          <div
            className={cn(
              "text-lg md:text-xl font-semibold md:font-bold text-left",
              iconColor
            )}>
            {formatCurrency(metric.value, metric.currency)}
          </div>
          {metric.description && (
            <p className="text-xs text-muted-foreground text-start">
              {metric.description}
            </p>
          )}
        </div>
      </CardContent>
      {/* vertical line */}
      {index !== 0 && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 pointer-events-none max-w-1 rounded-full hidden lg:block" />
      )}
    </div>
  );
};
