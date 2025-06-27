"use client";

import { Button } from "@workspace/ui/components/button";
import { motion } from "motion/react";
import { useTheme } from "next-themes"; // If you use a theme provider
import Logo from "./logo";

export default function HeroSectionOne() {
  // Optional: get theme if you want to use theme-based logic
  // const { theme } = useTheme();

  return (
    <div className="flex max-w-screen flex-col items-center justify-center">
      <Navbar />
      <div className="absolute inset-y-0 left-0 h-full w-px bg-border">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-border">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-border">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-primary to-transparent" />
      </div>
      <div className="px-10 py-15 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center font-display font-bold text-foreground text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight">
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
            className="min-w-40 px-4 hover:bg-primary/90 transition-all duration-300 hover:-translate-y-0.5 shadow rounded-full"
            size={"lg"}
            onClick={() => {
              window.location.href = "/auth/signup"; // Redirect to sign-in page
            }}
          >
            Get Started
          </Button>
          <Button
            variant={"outline"}
            className="min-w-40 px-4 hover:bg-accent/90 transition-all duration-300 hover:-translate-y-0.5 shadow rounded-full"
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
            <div className="aspect-[16/9] h-auto w-full object-cover" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const Navbar = () => {
  return (
    <nav className="flex w-full items-center  border-t border-b border-border px-4 py-2 bg-background/80 backdrop-blur">
      <div className="flex justify-between gap-4 max-w-6xl mx-auto w-full">
        <Logo />
        <Button
          className="px-4 hover:bg-primary/90 transition-all duration-300 hover:-translate-y-0.5 shadow"
          size={"sm"}
          onClick={() => {
            window.location.href = "/auth/login"; // Redirect to sign-in page
          }}
        >
          Sign In
        </Button>
      </div>
    </nav>
  );
};
