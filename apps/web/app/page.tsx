"use client";
import dynamic from "next/dynamic";
import HeroSectionOne from "@/components/blocks/hero/hero-section";
import Navbar from "@/components/navbar";
import Pricing from "@/components/blocks/hero/pricing";
import Testimonial from "@/components/blocks/hero/testimonial";
import FAQ from "@/components/blocks/hero/faq";
import SiteFooter from "@/components/blocks/hero/footer";
const AuroraBackground = dynamic(
  () =>
    import("@workspace/ui/components/ui/aurora-background").then(
      (mod) => mod.AuroraBackground,
    ),
  { ssr: false },
);
const GlowingEffectDemo = dynamic(
  () =>
    import("@/components/blocks/hero/glowing-effect-demo").then(
      (mod) => mod.GlowingEffectDemo,
    ),
  { ssr: false },
);

export default function Page() {
  return (
    <>
      <Navbar />
      <AuroraBackground className="fixed inset-0 z-[-1] sm:block hidden" />
      <div className="flex w-full flex-col backdrop-blur justify-center items-center bg-card/50">
        <div className="flex w-full max-w-7xl flex-col items-center justify-center py-8">
          <HeroSectionOne />
          <GlowingEffectDemo />
          <Pricing />
          <Testimonial />
          <FAQ />
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
