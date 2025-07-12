"use client";
import { appConfig } from "@/app/app-config";
import { AnimatedComponent } from "@/components/blocks/hero/animated-component";
import Navbar from "@/components/navbar";
import { LoadingSpinner } from "@workspace/ui/components/loading-spinner";
import { cn } from "@workspace/ui/lib/utils";
import { lazy, Suspense } from "react";

const HeroSectionOne = lazy(
  () => import("@/components/blocks/hero/hero-section")
);
const Features = lazy(() => import("@/components/blocks/hero/features"));
const Pricing = lazy(() => import("@/components/blocks/hero/pricing"));
const Testimonial = lazy(() => import("@/components/blocks/hero/testimonial"));
const FAQ = lazy(() => import("@/components/blocks/hero/faq"));
const SiteFooter = lazy(() => import("@/components/blocks/hero/footer"));

export default function HeroPage() {
  const sections = [
    <HeroSectionOne />,
    <Features />,
    <Pricing />,
    <Testimonial />,
    <FAQ />,
  ];
  return (
    <>
      <Navbar maxWidth={appConfig.maxWidth} isSticky />
      <div className="flex w-full items-center justify-center px-4 py-3">
        <div
          className={cn(
            "flex flex-col items-center justify-center w-full mx-auto",
            `max-w-${appConfig.maxWidth}`,
            "gap-4"
          )}>
          {sections.map((Section, index) => (
            <AnimatedComponent
              key={index}
              delay={index * 0.1}
              className="min-h-screen">
              <Suspense fallback={<LoadingSpinner className="min-h-screen" />}>
                {Section}
              </Suspense>
            </AnimatedComponent>
          ))}
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
