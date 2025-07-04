"use client";

import { GlowingEffect } from "@workspace/ui/components/ui/glowing-effect";
import { ReactNode } from "react";

// Types
export interface FeatureItem {
  id: string;
  icon: ReactNode;
  title: string;
  description: ReactNode;
  area?: string; // For custom grid positioning
}

interface FeatureCardProps {
  feature: FeatureItem;
  className?: string;
  showGlowEffect?: boolean;
  glowProps?: {
    spread?: number;
    glow?: boolean;
    disabled?: boolean;
    proximity?: number;
    inactiveZone?: number;
  };
}

interface FeatureGridProps {
  features: FeatureItem[];
  className?: string;
  showGlowEffect?: boolean;
  glowProps?: {
    spread?: number;
    glow?: boolean;
    disabled?: boolean;
    proximity?: number;
    inactiveZone?: number;
  };
}

// Default glow effect props
const DEFAULT_GLOW_PROPS = {
  spread: 40,
  glow: true,
  disabled: false,
  proximity: 64,
  inactiveZone: 0.01,
};

// Feature Card Component
const FeatureCard = ({
  feature,
  className,
  showGlowEffect = true,
  glowProps = DEFAULT_GLOW_PROPS,
}: FeatureCardProps) => {
  const cardClasses = `min-h-[14rem] list-none ${feature.area || ""} ${className || ""}`;

  return (
    <li className={cardClasses}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3 bg-blur bg-card">
        {showGlowEffect && (
          <GlowingEffect
            spread={glowProps.spread}
            glow={glowProps.glow}
            disabled={glowProps.disabled}
            proximity={glowProps.proximity}
            inactiveZone={glowProps.inactiveZone}
          />
        )}
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {feature.icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {feature.title}
              </h3>
              <div className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {feature.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

// Feature Grid Component
const FeatureGrid = ({
  features,
  className,
  showGlowEffect = true,
  glowProps = DEFAULT_GLOW_PROPS,
}: FeatureGridProps) => {
  return (
    <ul
      className={`grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2 ${className || ""}`}
    >
      {features.map((feature) => (
        <FeatureCard
          key={feature.id}
          feature={feature}
          showGlowEffect={showGlowEffect}
          glowProps={glowProps}
        />
      ))}
    </ul>
  );
};

// Simple Feature Grid (without glowing effects)
interface SimpleFeatureGridProps {
  features: FeatureItem[];
  columns?: 1 | 2 | 3 | 4;
  className?: string;
}

const SimpleFeatureGrid = ({
  features,
  columns = 3,
  className,
}: SimpleFeatureGridProps) => {
  const gridClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid ${gridClasses[columns]} gap-8 ${className || ""}`}>
      {features.map((feature) => (
        <div
          key={feature.id}
          className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl border bg-card dark:bg-card"
        >
          <div className="w-fit rounded-lg border border-border p-3">
            {feature.icon}
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-foreground">
              {feature.title}
            </h3>
            <div className="text-muted-foreground">{feature.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export {
  FeatureCard,
  FeatureGrid,
  SimpleFeatureGrid,
  DEFAULT_GLOW_PROPS,
  type FeatureCardProps,
  type FeatureGridProps,
  type SimpleFeatureGridProps,
};
