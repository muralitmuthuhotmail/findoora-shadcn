"use client";

import { SectionLayout, SectionContent } from "@/components/layout";
import {
  AnimatedTitle,
  AnimatedDescription,
  HeroCTA,
  HeroMedia,
} from "@/components/blocks/hero/core";
import { AnimatedComponent } from "./animated-component";

export default function HeroSectionOne() {
  const handleGetStarted = () => {
    window.location.href = "/auth/signup";
  };

  const handleLearnMore = () => {
    // Handle learn more action
    console.log("Learn more clicked");
  };

  return (
    <SectionLayout variant="fullscreen" spacing="normal" align="center">
      <SectionContent
        maxWidth="full"
        className="text-center space-y-14 mt-0 sm:mt-10"
      >
        <AnimatedTitle
          text="Find and compare the best SaaS tools for your business"
          className="text-4xl sm:text-5xl md:text-6xl font-bold"
          delay={0}
        />

        <AnimatedDescription
          text="Discover, compare, and choose the right SaaS products for your needs. Findoora helps you make informed decisions with trusted reviews and insights."
          className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
          delay={1.4}
        />
        <HeroCTA
          primaryAction={{
            label: "Get Started",
            onClick: handleGetStarted,
          }}
          secondaryAction={{
            label: "Learn More",
            onClick: handleLearnMore,
            variant: "outline",
          }}
        />
        <HeroMedia delay={2}>
          <div className="w-full overflow-hidden rounded-xl border border-border">
            <div className="aspect-[16/9] h-auto w-full object-cover backdrop-blur bg-placeholder" />
          </div>
        </HeroMedia>
      </SectionContent>
    </SectionLayout>
  );
}
