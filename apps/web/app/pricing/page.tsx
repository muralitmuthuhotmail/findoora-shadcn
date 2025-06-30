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

const tooltipContent = {
  styles: "Choose from a variety of styles to suit your preferences.",
  filters: "Choose from a variety of filters to enhance your portraits.",
  credits: "Use these credits to retouch your portraits.",
};

const YEARLY_DISCOUNT = 20;
const plans = [
  {
    name: "Starter",
    price: 20,
    description: "For individuals starting out with AI-generated portraits.",
    features: [
      { title: "20 AI portraits" },
      { title: "Choice of 2 styles", tooltip: tooltipContent.styles },
      { title: "Choice of 2 filters", tooltip: tooltipContent.filters },
      { title: "2 retouch credits", tooltip: tooltipContent.credits },
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
      { title: "Choice of 5 styles", tooltip: tooltipContent.styles },
      { title: "Choice of 5 filters", tooltip: tooltipContent.filters },
      { title: "5 retouch credits", tooltip: tooltipContent.credits },
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
      { title: "Choice of 10 styles", tooltip: tooltipContent.styles },
      { title: "Choice of 10 filters", tooltip: tooltipContent.filters },
      { title: "10 retouch credits", tooltip: tooltipContent.credits },
      { title: "1-hour turnaround time" },
    ],
  },
];

const Pricing04 = () => {
  const [selectedBillingPeriod, setSelectedBillingPeriod] = useState("monthly");

  return (
    <div className="min-h-screen text-foreground  justify-center flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 space-y-14">
      <div className="w-full text-center mt-10 space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tighter">
          Pricing
        </h1>
        {/* <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
          Start managing with our flexible and affordable pricing plans.
        </p> */}
        <Tabs
          value={selectedBillingPeriod}
          onValueChange={setSelectedBillingPeriod}
          className="justify-center flex items-center"
        >
          <TabsList className="h-12 bg-card border px-1.5 rounded-full shadow-md transition-all p-2 py-3 align-items-center">
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
              Yearly (Save {YEARLY_DISCOUNT}%)
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "relative flex flex-col rounded-2xl border p-8 transition-all",
              {
                "bg-card border-primary shadow-2xl shadow-primary/10":
                  plan.isRecommended,
                "border-border bg-card/60": !plan.isRecommended,
              },
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
                $
                {selectedBillingPeriod === "monthly"
                  ? plan.price
                  : Math.round(plan.price * (1 - YEARLY_DISCOUNT / 100))}
                <span className="ml-1.5 text-lg font-medium text-muted-foreground">
                  /month
                </span>
              </p>
              <p className="mt-3 text-muted-foreground h-12">
                {plan.description}
              </p>

              <Separator className="my-8" />
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature.title} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-md">{feature.title}</span>
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
              className="w-full mt-6 rounded-full font-semibold py-5 text-base transition-all duration-300 hover:-translate-y-0.5"
            >
              Get Started
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing04;
