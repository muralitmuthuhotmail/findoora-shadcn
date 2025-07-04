"use client";
import { appConfig } from "@/app/app-config";
import { motion, scale, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedComponentProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animationType?:
    | "fade"
    | "slideUp"
    | "slideDown"
    | "slideLeft"
    | "slideRight"
    | "scale";
}

const animationVariants = {
  fade: {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  slideDown: {
    hidden: { opacity: 0, y: -40, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 40, scale: 0.98 },
    visible: { opacity: 1, x: 0, scale: 1 },
  },
  slideRight: {
    hidden: { opacity: 0, x: -40, scale: 0.98 },
    visible: { opacity: 1, x: 0, scale: 1 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1 },
  },
};

export function AnimatedComponent({
  children,
  className,
  delay = 0,
  animationType = "slideUp",
}: AnimatedComponentProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const variants = animationVariants[animationType];

  if (appConfig.transition === false) {
    return children;
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: appConfig.transitionDuration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
