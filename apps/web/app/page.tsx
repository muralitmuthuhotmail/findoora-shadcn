"use client";
import dynamic from "next/dynamic";
import HeroSectionOne from "@/components/hero-section";
import Navbar from "@/components/navbar";
import Pricing04 from "./pricing/page";
import Testimonial05 from "@/components/testimonial-05/testimonial-05";
import FAQ02 from "@/components/faq-02/faq-02";
const AuroraBackground = dynamic(
  () =>
    import("@workspace/ui/components/ui/aurora-background").then(
      (mod) => mod.AuroraBackground,
    ),
  { ssr: false },
);
const GlowingEffectDemo = dynamic(
  () =>
    import("@/components/glowing-effect-demo").then(
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
          <div className="flex w-full max-w-7xl flex-col items-center justify-center px-4 py-8">
            <HeroSectionOne />
            <GlowingEffectDemo />
            <Pricing04 />
            <Testimonial05 />
            <FAQ02 />
          </div>
        </div>
    </>
  );
}
