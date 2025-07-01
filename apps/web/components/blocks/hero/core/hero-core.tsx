"use client";

import { Button } from "@workspace/ui/components/button";
import { motion } from "motion/react";
import { ReactNode } from "react";

// Types
interface HeroCTAProps {
  primaryAction: {
    label: string;
    onClick: () => void;
    loading?: boolean;
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
    variant?: "outline" | "ghost" | "link";
  };
  className?: string;
}

interface AnimatedTitleProps {
  text: string;
  className?: string;
  delay?: number;
}

interface HeroMediaProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

// Animated Title Component
const AnimatedTitle = ({ text, className, delay = 0 }: AnimatedTitleProps) => {
  return (
    <h1 className={className}>
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.2 + delay,
            ease: "easeInOut",
          }}
          className="mr-2 inline-block text-primary"
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
};

// Hero CTA Component
const HeroCTA = ({
  primaryAction,
  secondaryAction,
  className,
}: HeroCTAProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: 2,
      }}
      className={`relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4 ${className || ""}`}
    >
      <Button
        className="min-w-50 shadow-sm rounded-full text-md sm:text-base font-semibold sm:py-6 hover:bg-primary/90 transition-all duration-300 hover:-translate-y-0.5"
        size="lg"
        onClick={primaryAction.onClick}
        disabled={primaryAction.loading}
      >
        {primaryAction.loading ? "Loading..." : primaryAction.label}
      </Button>

      {secondaryAction && (
        <Button
          variant={secondaryAction.variant || "outline"}
          className="min-w-50 shadow-sm rounded-full text-md sm:text-base font-semibold sm:py-6 transition-all duration-300 hover:-translate-y-0.5"
          size="lg"
          onClick={secondaryAction.onClick}
        >
          {secondaryAction.label}
        </Button>
      )}
    </motion.div>
  );
};

// Hero Media Component (for images, videos, etc.)
const HeroMedia = ({ children, className, delay = 3 }: HeroMediaProps) => {
  return (
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
        delay,
      }}
      className={`relative z-10 mt-20 rounded-3xl border border-border bg-muted p-4 shadow-md ${className || ""}`}
    >
      {children}
    </motion.div>
  );
};

// Animated Description Component
interface AnimatedDescriptionProps {
  text: string;
  className?: string;
  delay?: number;
}

const AnimatedDescription = ({
  text,
  className,
  delay = 2,
}: AnimatedDescriptionProps) => {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        delay,
      }}
      className={className}
    >
      {text}
    </motion.p>
  );
};

export {
  AnimatedTitle,
  AnimatedDescription,
  HeroCTA,
  HeroMedia,
  type HeroCTAProps,
  type AnimatedTitleProps,
  type HeroMediaProps,
  type AnimatedDescriptionProps,
};
