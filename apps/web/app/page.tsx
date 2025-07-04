"use client";
import dynamic from "next/dynamic";
import Navbar from "@/components/navbar";
import { cn } from "@workspace/ui/lib/utils";
import { AnimatedComponent } from "@/components/blocks/hero/animated-component";

const HeroSectionOne = dynamic(
  () => import("@/components/blocks/hero/hero-section"),
);
const Features01 = dynamic(
  () => import("@/components/blocks/hero/features-01"),
);
const Pricing = dynamic(() => import("@/components/blocks/hero/pricing"));
const Testimonial = dynamic(
  () => import("@/components/blocks/hero/testimonial"),
);
const FAQ = dynamic(() => import("@/components/blocks/hero/faq"));
const SiteFooter = dynamic(() => import("@/components/blocks/hero/footer"));

export default function Page() {
  const maxWidth = "7xl";
  return (
    <>
      <Navbar />
      <div className="backdrop-blur flex w-full items-center justify-center px-4 py-3">
        <div
          className={cn(
            "flex flex-col items-center justify-center w-full mx-auto",
            `max-w-${maxWidth}`,
            "gap-4",
          )}
        >
          <AnimatedComponent>
            <HeroSectionOne />
          </AnimatedComponent>
          <AnimatedComponent delay={0.2}>
            <Features01 />
          </AnimatedComponent>
          <AnimatedComponent delay={0.3}>
            <Pricing />
          </AnimatedComponent>
          <AnimatedComponent delay={0.4}>
            <Testimonial />
          </AnimatedComponent>
          <AnimatedComponent delay={0.5}>
            <FAQ />
          </AnimatedComponent>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
