import { AnimatePresence, motion } from "motion/react";

interface TransitionWrapperProps {
  children: React.ReactNode;
}

export default function TransitionWrapper({
  children,
}: TransitionWrapperProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
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
