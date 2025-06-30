"use client";
import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect, useRef } from "react";

interface TransitionWrapperProps {
  children: React.ReactNode;
}

export default function TransitionWrapper({
  children,
}: TransitionWrapperProps) {
  const [key, setKey] = useState(0);
  const childrenRef = useRef(children);

  useEffect(() => {
    if (children !== childrenRef.current) {
      childrenRef.current = children;
      setKey((prev) => prev + 1);
    }
  }, [children]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={key}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          duration: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
