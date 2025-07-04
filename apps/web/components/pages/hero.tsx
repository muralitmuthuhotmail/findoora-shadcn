"use client";
import { lazy, Suspense } from "react";
import Navbar from "@/components/navbar";
import { cn } from "@workspace/ui/lib/utils";
import { AnimatedComponent } from "@/components/blocks/hero/animated-component";
import { LoadingSpinner } from "@workspace/ui/components/loading-spinner";

const HeroSectionOne = lazy(
  () => import("@/components/blocks/hero/hero-section"),
);
const Features01 = lazy(() => import("@/components/blocks/hero/features-01"));
const Pricing = lazy(() => import("@/components/blocks/hero/pricing"));
const Testimonial = lazy(() => import("@/components/blocks/hero/testimonial"));
const FAQ = lazy(() => import("@/components/blocks/hero/faq"));
const SiteFooter = lazy(() => import("@/components/blocks/hero/footer"));

export default function HeroPage() {
  const maxWidth = "7xl";
  const sections = [<Features01 />, <Pricing />, <Testimonial />, <FAQ />];
  return (
    <>
      <AnimatedComponent animationType="slideDown" delay={1.5}>
        <Navbar />
      </AnimatedComponent>
      <div className="backdrop-blur flex w-full items-center justify-center px-4 py-3">
        <div
          className={cn(
            "flex flex-col items-center justify-center w-full mx-auto",
            `max-w-${maxWidth}`,
            "gap-4",
          )}
        >
          <HeroSectionOne />
          {sections.map((Section, index) => (
            <AnimatedComponent key={index} delay={index * 0.1}>
              <Suspense fallback={<LoadingSpinner />}>{Section}</Suspense>
            </AnimatedComponent>
          ))}
        </div>
      </div>
      <Suspense fallback={<LoadingSpinner />}>
        <SiteFooter />
      </Suspense>
    </>
  );
}
