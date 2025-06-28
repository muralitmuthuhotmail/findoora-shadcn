"use client";
import { GlowingEffectDemo } from "@/components/glowing-effect-demo";
import HeroSectionOne from "@/components/hero-section";
import { motion } from "motion/react";
import { AuroraBackground } from "@workspace/ui/components/ui/aurora-background";
export default function Page() {
  return (
    <>
      <AuroraBackground className="fixed inset-0 z-[-1]">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        ></motion.div>
      </AuroraBackground>
      <HeroSectionOne />
      <GlowingEffectDemo />
    </>
  );
}
