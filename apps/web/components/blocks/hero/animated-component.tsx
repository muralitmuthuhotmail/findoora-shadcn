"use client";
import { appConfig } from "@/app/app-config";
import { motion, useInView } from "framer-motion";
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
  triggerOnce?: boolean; // New prop to control whether animation triggers only once
}

const animationVariants = {
  fade: {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 20, scale: 0.95 },
  },
  slideDown: {
    hidden: { opacity: 0, y: -40, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -20, scale: 0.95 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 40, scale: 0.98 },
    visible: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: 20, scale: 0.95 },
  },
  slideRight: {
    hidden: { opacity: 0, x: -40, scale: 0.98 },
    visible: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: -20, scale: 0.95 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  },
};

export function AnimatedComponent({
  children,
  className,
  delay = 0,
  animationType = "slideUp",
  triggerOnce = false,
}: AnimatedComponentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    once: triggerOnce,
    margin: "-10% 0px -10% 0px"
  });
  const variants = animationVariants[animationType];

  if (appConfig.transition === false) {
    return children;
  }

  // useEffect(() => {
  //   if (isInView) {
  //     scrollTo({
  //       top: 0,
  //       behavior: "smooth",
  //     });
  //   }
  // }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "exit"}
      exit="exit"
      variants={variants}
      transition={{ 
        duration: appConfig.transitionDuration, 
        delay: isInView ? delay : 0,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
