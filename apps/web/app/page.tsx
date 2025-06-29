"use client";
import { GlowingEffectDemo } from "@/components/glowing-effect-demo";
import HeroSectionOne from "@/components/hero-section";
import { AuroraBackground } from "@workspace/ui/components/ui/aurora-background";
import Navbar from "@/components/navbar";
export default function Page() {
  return (
    <>
      <AuroraBackground className="fixed inset-0 z-[-1] w-screen h-screen"> </AuroraBackground>
      <div className="bg-blur bg-background/40 w-full flex flex-col items-center justify-center">
        <Navbar />
        <div className="py-10 max-w-6xl">
          <HeroSectionOne />
          <GlowingEffectDemo />
        </div>
      </div>
    </>
  );
}
