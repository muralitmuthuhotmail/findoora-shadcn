"use client";
import dynamic from "next/dynamic";
import HeroSectionOne from "@/components/blocks/hero/hero-section";
import Navbar from "@/components/navbar";
import Pricing from "@/components/blocks/hero/pricing";
import Testimonial from "@/components/blocks/hero/testimonial";
import FAQ from "@/components/blocks/hero/faq";
import SiteFooter from "@/components/blocks/hero/footer";
import Features01 from "@/components/blocks/hero/features-01";
import { cn } from "@workspace/ui/lib/utils";
const AuroraBackground = dynamic(
  () =>
    import("@workspace/ui/components/ui/aurora-background").then(
      (mod) => mod.AuroraBackground,
    ),
  { ssr: false },
);
const Features = dynamic(
  () => import("@/components/blocks/hero/features").then((mod) => mod.Features),
  { ssr: false },
);

export default function Page() {
  const maxWidth = "7xl"; // You can change this to "full" or any other value as needed
  return (
    <>
      <Navbar />
      <AuroraBackground className="fixed inset-0 z-[-1] sm:block hidden" />
      <div className="backdrop-blur bg-card/50 flex w-full items-center justify-center px-4 py-3">
        <div
          className={cn(
            "flex flex-col items-center justify-center w-full mx-auto",
            `max-w-${maxWidth}`,
            "gap-4",
          )}
        >
          <HeroSectionOne />
          <Features />
          <Features01 />
          <Pricing />
          <Testimonial />
          <FAQ />
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
