"use client";

import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { 
  motion, 
  useMotionValue, 
  useMotionTemplate, 
  useAnimationFrame 
} from "framer-motion";

interface InfiniteGridProps {
  className?: string;
  children?: React.ReactNode;
  showDemoContent?: boolean;
  monochrome?: boolean;
  fixedBackground?: boolean;
  gridSize?: number;
  showGridLines?: boolean;
}

export const TheInfiniteGrid = ({
  className,
  children,
  showDemoContent = false,
  monochrome = true,
  fixedBackground = false,
  gridSize = 10,
  showGridLines = false,
}: InfiniteGridProps) => {
  const [count, setCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Global window pointer listener ensures cursor tracking works across all elements
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Default initial spotlight to viewport center
      mouseX.set(window.innerWidth / 2);
      mouseY.set(window.innerHeight / 2);
    }

    const handleGlobalPointerMove = (e: PointerEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };

    window.addEventListener("pointermove", handleGlobalPointerMove);
    return () => window.removeEventListener("pointermove", handleGlobalPointerMove);
  }, [mouseX, mouseY]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const gridOffsetX = useMotionValue(0);
  const gridOffsetY = useMotionValue(0);

  const speedX = 0.15; 
  const speedY = 0.15;

  useAnimationFrame(() => {
    const currentX = gridOffsetX.get();
    const currentY = gridOffsetY.get();
    gridOffsetX.set((currentX + speedX) % gridSize);
    gridOffsetY.set((currentY + speedY) % gridSize);
  });

  // Dynamic high-contrast spotlight following the mouse cursor
  const maskImage = useMotionTemplate`radial-gradient(380px circle at ${mouseX}px ${mouseY}px, black 30%, transparent 80%)`;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={cn(
        fixedBackground
          ? "fixed inset-0 z-0 pointer-events-none overflow-hidden bg-white dark:bg-black transition-colors duration-300"
          : "relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-white dark:bg-black transition-colors duration-300",
        className
      )}
    >
      {/* Baseline ambient grid - conditionally rendered */}
      {showGridLines && (
        <div className="absolute inset-0 z-0 opacity-25 dark:opacity-20 pointer-events-none">
          <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} gridSize={gridSize} isHighlighted={false} />
        </div>
      )}

      {/* Subtle cursor-following reveal layer */}
      {showGridLines && (
        <motion.div 
          className="absolute inset-0 z-0 opacity-25 dark:opacity-25 pointer-events-none"
          style={{ maskImage, WebkitMaskImage: maskImage }}
        >
          <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} gridSize={gridSize} isHighlighted={true} />
        </motion.div>
      )}

      {/* Optional demo content */}
      {showDemoContent && (
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl mx-auto space-y-6 pointer-events-none">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-black dark:text-white drop-shadow-sm">
              The Infinite Grid
            </h1>
            <p className="text-lg md:text-xl text-black dark:text-neutral-400">
              Move your cursor to reveal the active grid layer. <br/>
              The pattern scrolls infinitely in the background.
            </p>
          </div>
          
          <div className="flex gap-4 pointer-events-auto">
            <button 
              onClick={() => setCount(count + 1)}
              className="px-8 py-3 bg-black text-white font-semibold rounded-md hover:bg-neutral-800 transition-all shadow-md active:scale-95 cursor-pointer"
            >
              Interact ({count})
            </button>
            <button 
              className="px-8 py-3 bg-transparent border border-black text-black font-semibold rounded-md hover:bg-neutral-100 transition-all active:scale-95 cursor-pointer"
            >
              Learn More
            </button>
          </div>
        </div>
      )}

      {/* Custom children content when used as background canvas */}
      {children && (
        <div className="relative z-10 w-full h-full flex flex-col justify-center">
          {children}
        </div>
      )}
    </div>
  );
};

// Also export as Component for direct compatibility with the prompt
export const Component = TheInfiniteGrid;

const GridPattern = ({ 
  offsetX, 
  offsetY,
  gridSize = 10,
  isHighlighted = false,
}: { 
  offsetX: any; 
  offsetY: any;
  gridSize?: number;
  isHighlighted?: boolean;
}) => {
  return (
    <svg className="w-full h-full">
      <defs>
        <motion.pattern
          id={isHighlighted ? "grid-pattern-highlight" : "grid-pattern-base"}
          width={gridSize}
          height={gridSize}
          patternUnits="userSpaceOnUse"
          x={offsetX}
          y={offsetY}
        >
          <path
            d={`M ${gridSize} 0 L 0 0 0 ${gridSize}`}
            fill="none"
            stroke="currentColor"
            strokeWidth={isHighlighted ? "1.1" : "0.75"}
            className={cn(
              "transition-colors duration-200",
              isHighlighted 
                ? "text-black dark:text-white" 
                : "text-black/35 dark:text-neutral-700"
            )} 
          />
        </motion.pattern>
      </defs>
      <rect 
        width="100%" 
        height="100%" 
        fill={`url(#${isHighlighted ? "grid-pattern-highlight" : "grid-pattern-base"})`} 
      />
    </svg>
  );
};

export default TheInfiniteGrid;
