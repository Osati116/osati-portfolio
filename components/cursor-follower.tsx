"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Custom cursor follower:
 * A smooth circular follower that tracks the mouse cursor.
 * - Solid white in dark mode
 * - Changes to solid black in light mode
 * - Smooth spring physics trailing
 * - Subtle scale expansion on interactive elements (links, buttons)
 * - Safe for mobile/touch devices (hidden)
 */
export function CursorFollower() {
  const [mounted, setMounted] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const [isClicked, setIsClicked] = React.useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth magnetic spring physics for fluid trailing motion
  const springConfig = { damping: 26, stiffness: 380, mass: 0.45 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  React.useEffect(() => {
    // Only mount on devices with a fine pointer (desktop / mouse)
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseDown = () => {
      setIsClicked(true);
    };

    const handleMouseUp = () => {
      setIsClicked(false);
    };

    // Check if target is an interactive element to expand cursor follower
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'a, button, input, textarea, select, [role="button"], .cursor-pointer'
      );
      setIsHovered(!!interactive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!mounted) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        scale: isClicked ? 0.8 : isHovered ? 1.5 : 1,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        scale: { type: "spring", damping: 22, stiffness: 380 },
        opacity: { duration: 0.15 },
      }}
      className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block w-7 h-7 rounded-full bg-transparent border-2 border-black dark:border-[3.5px] dark:border-white transition-colors duration-200"
    />
  );
}
