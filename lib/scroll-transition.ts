"use client";

import * as React from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";

export interface SectionScrollTransitionOptions {
  isFirst?: boolean;
  isLast?: boolean;
}

export interface SectionScrollTransitionReturn {
  scale: MotionValue<number>;
  opacity: MotionValue<number>;
  scrollYProgress: MotionValue<number>;
}

/**
 * Creates synchronized scroll-driven section transitions:
 * - When entering from below: scales up from 0.88 to 1.0, opacity from 0.45 to 1.0.
 * - When in active viewport: maintains 1.0 scale and 1.0 opacity.
 * - When exiting towards above: scales down from 1.0 to 0.88, opacity from 1.0 to 0.45.
 * 
 * Synchronized so the outgoing section decreases at the exact moment
 * the incoming next section increases, creating a continuous, seamless reciprocal zoom.
 */
export function useSectionScrollTransition(
  targetRef: React.RefObject<HTMLElement | null>,
  options: SectionScrollTransitionOptions = {}
): SectionScrollTransitionReturn {
  const { isFirst = false, isLast = false } = options;

  // Determine offsets based on position in page stream
  const offsets: any = React.useMemo(() => {
    if (isFirst) {
      // First section: already in viewport on load, only decreases on exit
      return ["start start", "end center", "end start"];
    }
    if (isLast) {
      // Last section: enters from below, reaches full size at bottom
      return ["start end", "end end"];
    }
    // Intermediate sections: enters, holds center, exits
    return ["start end", "start center", "end center", "end start"];
  }, [isFirst, isLast]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: offsets,
  });

  const inputRange = React.useMemo(() => {
    if (isFirst) return [0, 0.5, 1];
    if (isLast) return [0, 1];
    return [0, 1 / 3, 2 / 3, 1];
  }, [isFirst, isLast]);

  const scaleOutputRange = React.useMemo(() => {
    if (isFirst) return [1, 1, 0.88];
    if (isLast) return [0.88, 1];
    return [0.88, 1, 1, 0.88];
  }, [isFirst, isLast]);

  const opacityOutputRange = React.useMemo(() => {
    if (isFirst) return [1, 1, 0.45];
    if (isLast) return [0.45, 1];
    return [0.45, 1, 1, 0.45];
  }, [isFirst, isLast]);

  const scale = useTransform(scrollYProgress, inputRange, scaleOutputRange);
  const opacity = useTransform(scrollYProgress, inputRange, opacityOutputRange);

  return { scale, opacity, scrollYProgress };
}
