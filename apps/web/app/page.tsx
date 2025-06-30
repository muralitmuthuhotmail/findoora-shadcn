"use client";
import dynamic from "next/dynamic";
import HeroSectionOne from "@/components/hero-section";
import Navbar from "@/components/navbar";
import Pricing04 from "./pricing/page";
import Testimonial05 from "@/components/testimonial-05/testimonial-05";
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
      <AuroraBackground className="fixed inset-0 z-[-1] w-screen h-screen sm:block hidden fade-in transition-all duration-500 ease-in-out">
        {" "}
      </AuroraBackground>
      <div className="bg-blur bg-card/40 w-full flex flex-col items-center justify-center">
        <Navbar />
        <div className="py-10 max-w-7xl px-1 sm:px-0">
          <HeroSectionOne />
          <GlowingEffectDemo />
          <Pricing04 />
          <Testimonial05 />
        </div>
      </div>
    </>
  );
}
