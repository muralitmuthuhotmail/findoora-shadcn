"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedComponentProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedComponent({
  children,
  className,
  delay = 0,
}: AnimatedComponentProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
