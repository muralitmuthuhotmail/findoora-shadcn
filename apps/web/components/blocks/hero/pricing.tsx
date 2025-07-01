"use client";

import {
  SectionLayout,
  SectionHeader,
  SectionContent,
} from "@/components/layout";
import {
  PricingBillingToggle,
  PricingGrid,
  usePricing,
  DEFAULT_PRICING_PLANS,
} from "@/components/blocks/hero/core";

const YEARLY_DISCOUNT = 20;

const Pricing = () => {
  const { selectedBillingPeriod, setSelectedBillingPeriod } = usePricing();

  const handleGetStarted = (planName: string) => {
    console.log(`Get started with ${planName} plan`);
    // Handle plan selection logic here
  };

  return (
    <SectionLayout variant="fullscreen" spacing="normal" align="center">
      <SectionContent maxWidth="full" className="space-y-14">
        <div className="w-full text-center mt-10 space-y-6">
          <SectionHeader title="Pricing" />

          <PricingBillingToggle
            selectedPeriod={selectedBillingPeriod}
            onPeriodChange={setSelectedBillingPeriod}
            yearlyDiscount={YEARLY_DISCOUNT}
          />
        </div>

        <PricingGrid
          plans={DEFAULT_PRICING_PLANS}
          selectedPeriod={selectedBillingPeriod}
          yearlyDiscount={YEARLY_DISCOUNT}
          onGetStarted={handleGetStarted}
        />
      </SectionContent>
    </SectionLayout>
  );
};

export default Pricing;
