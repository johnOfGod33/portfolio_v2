"use client";

import { motion, useScroll, useTransform } from "motion/react";
import type { ReactNode } from "react";

type ParallaxYProps = {
  children: ReactNode;
  className?: string;
  offset?: number;
};

export function ParallaxY({
  children,
  className,
  offset = 14,
}: ParallaxYProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, offset]);

  return (
    <motion.div className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}
