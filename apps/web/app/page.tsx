"use client";
import { GlowingEffectDemo } from "@/components/glowing-effect-demo";
import HeroSectionOne from "@/components/hero-section";
import { AuroraBackground } from "@workspace/ui/components/ui/aurora-background";
import Navbar from "@/components/navbar";
export default function Page() {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <AuroraBackground className="fixed inset-0 z-[-1]"> </AuroraBackground>
      <Navbar />
      <div className="px-4 px-5 py-10 w-full max-w-6xl">
        <HeroSectionOne />
        <GlowingEffectDemo />
      </div>
    </div>
  );
}
