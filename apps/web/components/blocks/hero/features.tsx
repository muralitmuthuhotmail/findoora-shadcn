"use client";

import {
  SectionLayout,
  SectionHeader,
  SectionContent,
} from "@/components/layout";
import { FeatureGrid, type FeatureItem } from "@/components/blocks/hero/core";
import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";

const FEATURES: FeatureItem[] = [
  {
    id: "feature-1",
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    icon: <Box className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Do things the right way",
    description: "Running out of copy so I'll write anything.",
  },
  {
    id: "feature-2",
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
    icon: <Settings className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "The best AI code editor ever.",
    description:
      "Yes, it's true. I'm not even kidding. Ask my mom if you don't believe me.",
  },
  {
    id: "feature-3",
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
    icon: <Lock className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "You should buy Aceternity UI Pro",
    description: "It's the best money you'll ever spend",
  },
  {
    id: "feature-4",
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
    icon: <Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "This card is also built by Cursor",
    description: "I'm not even kidding. Ask my mom if you don't believe me.",
  },
  {
    id: "feature-5",
    area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
    icon: <Search className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Coming soon on Aceternity UI",
    description: "I'm writing the code as I record this, no shit.",
  },
];

export function Features() {
  return (
    <SectionLayout variant="fullscreen" spacing="normal" align="center">
      <SectionContent maxWidth="full" className="space-y-14">
        <SectionHeader title="Features" />

        <FeatureGrid features={FEATURES} showGlowEffect={true} />
      </SectionContent>
    </SectionLayout>
  );
}
