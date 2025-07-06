"use client";

import { Button } from "@workspace/ui/components/button";
import { Separator } from "@workspace/ui/components/separator";
import { Tabs, TabsList, TabsTrigger } from "@workspace/ui/components/tabs";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@workspace/ui/components/tooltip";
import { cn } from "@workspace/ui/lib/utils";
import { Check, HelpCircle } from "lucide-react";
import { useState } from "react";

// Types
export interface PricingFeature {
  title: string;
  tooltip?: string;
}

export interface PricingPlan {
  name: string;
  price: number;
  description: string;
  features: PricingFeature[];
  isRecommended?: boolean;
}

interface PricingBillingToggleProps {
  selectedPeriod: string;
  onPeriodChange: (period: string) => void;
  yearlyDiscount?: number;
  className?: string;
}

interface PricingCardProps {
  plan: PricingPlan;
  selectedPeriod: string;
  yearlyDiscount: number;
  onGetStarted: (planName: string) => void;
  className?: string;
}

interface PricingGridProps {
  plans: PricingPlan[];
  selectedPeriod: string;
  yearlyDiscount: number;
  onGetStarted: (planName: string) => void;
  className?: string;
}

// Billing Toggle Component
const PricingBillingToggle = ({
  selectedPeriod,
  onPeriodChange,
  yearlyDiscount = 20,
  className,
}: PricingBillingToggleProps) => {
  return (
    <Tabs
      value={selectedPeriod}
      onValueChange={onPeriodChange}
      className={cn("justify-center flex items-center", className)}
    >
      <TabsList className="h-12 bg-card rounded-full border px-1.5 shadow-md transition-all p-2 py-3 align-items-center">
        <TabsTrigger
          value="monthly"
          className="h-8 p-4 py-1.5 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
        >
          Monthly
        </TabsTrigger>
        <TabsTrigger
          value="yearly"
          className="h-8 p-4 py-1.5 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
        >
          Yearly (Save {yearlyDiscount}%)
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

// Pricing Card Component
const PricingCard = ({
  plan,
  selectedPeriod,
  yearlyDiscount,
  onGetStarted,
  className,
}: PricingCardProps) => {
  const price =
    selectedPeriod === "monthly"
      ? plan.price
      : Math.round(plan.price * (1 - yearlyDiscount / 100));

  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl border p-8 transition-all max-w-sm",
        {
          "bg-card border-primary sm:shadow-2xl sm:shadow-primary/10":
            plan.isRecommended,
          "border-border bg-card/60 sm:scale-[0.95]": !plan.isRecommended,
        },
        className,
      )}
    >
      {plan.isRecommended && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
            Recommended
          </div>
        </div>
      )}

      <div className="flex-grow">
        <h3 className="text-xl font-semibold">{plan.name}</h3>
        <p className="mt-4 text-2xl font-bold">
          ${price}
          <span className="ml-1.5 text-lg font-medium text-muted-foreground">
            /month
          </span>
        </p>
        <p className="mt-3 text-muted-foreground h-12">{plan.description}</p>

        <Separator className="my-8" />

        <ul className="space-y-3">
          {plan.features.map((feature) => (
            <li key={feature.title} className="flex items-center gap-3">
              <Check className="h-5 w-5 text-primary" />
              <span className="text-md text-left">{feature.title}</span>
              {feature.tooltip && (
                <Tooltip>
                  <TooltipTrigger className="cursor-help ml-auto">
                    <HelpCircle className="h-5 w-5 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>{feature.tooltip}</TooltipContent>
                </Tooltip>
              )}
            </li>
          ))}
        </ul>
      </div>

      <Button
        variant={plan.isRecommended ? "default" : "outline"}
        className="w-full mt-6 font-semibold py-5 text-base transition-all duration-300 hover:-translate-y-0.5"
        onClick={() => onGetStarted(plan.name)}
      >
        Get Started
      </Button>
    </div>
  );
};

// Pricing Grid Component
const PricingGrid = ({
  plans,
  selectedPeriod,
  yearlyDiscount,
  onGetStarted,
  className,
}: PricingGridProps) => {
  return (
    <div
      className={cn(
      "w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
      className
      )}
    >
      {plans.map((plan) => (
      <PricingCard
        key={plan.name}
        plan={plan}
        selectedPeriod={selectedPeriod}
        yearlyDiscount={yearlyDiscount}
        onGetStarted={onGetStarted}
      />
      ))}
    </div>
  );
};

// Hook for managing pricing state
const usePricing = (initialPeriod: string = "monthly") => {
  const [selectedBillingPeriod, setSelectedBillingPeriod] =
    useState(initialPeriod);

  return {
    selectedBillingPeriod,
    setSelectedBillingPeriod,
  };
};

// Default pricing data
export const DEFAULT_PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter",
    price: 20,
    description: "For individuals starting out with AI-generated portraits.",
    features: [
      { title: "20 AI portraits" },
      {
        title: "Choice of 2 styles",
        tooltip: "Choose from a variety of styles to suit your preferences.",
      },
      {
        title: "Choice of 2 filters",
        tooltip: "Choose from a variety of filters to enhance your portraits.",
      },
      {
        title: "2 retouch credits",
        tooltip: "Use these credits to retouch your portraits.",
      },
      { title: "5 hours turnaround time" },
    ],
  },
  {
    name: "Advanced",
    price: 40,
    isRecommended: true,
    description: "For users who need more portraits and creative options.",
    features: [
      { title: "50 AI portraits" },
      {
        title: "Choice of 5 styles",
        tooltip: "Choose from a variety of styles to suit your preferences.",
      },
      {
        title: "Choice of 5 filters",
        tooltip: "Choose from a variety of filters to enhance your portraits.",
      },
      {
        title: "5 retouch credits",
        tooltip: "Use these credits to retouch your portraits.",
      },
      { title: "3 hours turnaround time" },
    ],
  },
  {
    name: "Premium",
    price: 80,
    description:
      "For professionals and enthusiasts who want the best experience.",
    features: [
      { title: "100 AI portraits" },
      {
        title: "Choice of 10 styles",
        tooltip: "Choose from a variety of styles to suit your preferences.",
      },
      {
        title: "Choice of 10 filters",
        tooltip: "Choose from a variety of filters to enhance your portraits.",
      },
      {
        title: "10 retouch credits",
        tooltip: "Use these credits to retouch your portraits.",
      },
      { title: "1-hour turnaround time" },
    ],
  },
];

export {
  PricingBillingToggle,
  PricingCard,
  PricingGrid,
  usePricing,
  type PricingBillingToggleProps,
  type PricingCardProps,
  type PricingGridProps,
};
