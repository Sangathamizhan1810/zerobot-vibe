"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function FadeInSection({ children, className = "", id }: FadeInSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`w-full min-h-screen flex flex-col items-center justify-center relative py-20 ${className}`}
    >
      {children}
    </motion.section>
  );
}
