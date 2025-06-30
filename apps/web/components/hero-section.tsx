"use client";

import { Button } from "@workspace/ui/components/button";
import { motion } from "motion/react";

export default function HeroSectionOne() {
  return (
    <div className="min-h-screen text-foreground  justify-center flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full text-center space-y-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter">
          {"Find and compare the best SaaS tools for your business"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block text-primary"
              >
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 2,
          }}
          className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          Discover, compare, and choose the right SaaS products for your needs.
          Findoora helps you make informed decisions with trusted reviews and
          insights.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 2,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            className="min-w-50 shadow-sm rounded-full text-base font-semibold py-6 hover:bg-primary/90 transition-all duration-300 hover:-translate-y-0.5"
            size={"lg"}
            onClick={() => {
              window.location.href = "/auth/signup"; // Redirect to sign-in page
            }}
          >
            Get Started
          </Button>
          <Button
            variant={"outline"}
            className="min-w-50 shadow-sm rounded-full text-base font-semibold py-6 transition-all duration-300 hover:-translate-y-0.5"
            size={"lg"}
          >
            Learn More
          </Button>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 3,
          }}
          className="relative z-10 mt-20 rounded-3xl border border-border bg-muted p-4 shadow-md"
        >
          <div className="w-full overflow-hidden rounded-xl border border-border">
            <div className="aspect-[16/9] h-auto w-full object-cover backdrop-blur bg-card/50" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
