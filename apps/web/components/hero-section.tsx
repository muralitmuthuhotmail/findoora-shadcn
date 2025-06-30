"use client";

import { Button } from "@workspace/ui/components/button";
import { motion } from "motion/react";

export default function HeroSectionOne() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="py-10 md:py-20">
        <h1 className="relative z-10 mx-auto text-center font-display font-bold text-foreground text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight">
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
          className="relative z-10 mx-auto max-w-xl py-4 text-center font-body text-lg md:text-xl font-normal text-muted-foreground"
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
            className="min-w-40 px-4 hover:bg-primary/90 transition-all duration-300 hover:-translate-y-0.5 shadow-sm rounded-full"
            size={"lg"}
            onClick={() => {
              window.location.href = "/auth/signup"; // Redirect to sign-in page
            }}
          >
            Get Started
          </Button>
          <Button
            variant={"outline"}
            className="min-w-40 px-4 hover:bg-accent/90 transition-all duration-300 hover:-translate-y-0.5 shadow-sm rounded-full"
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
