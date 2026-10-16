"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Custom cursor follower:
 * A smooth circular follower that tracks the mouse cursor.
 * - Solid white in dark mode
 * - Changes to solid black in light mode
 * - Turns vibrant red immediately on any X (Close) button/icon
 * - Smooth spring physics trailing
 * - Subtle scale expansion on interactive elements (links, buttons)
 * - Safe for mobile/touch devices (hidden)
 */
export function CursorFollower() {
  const [mounted, setMounted] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const [isClicked, setIsClicked] = React.useState(false);
  const [isCloseTarget, setIsCloseTarget] = React.useState(false);

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

    const checkIsCloseElement = (target: Element | null): boolean => {
      if (!target) return false;

      // 1. Explicit data attribute
      if (target.closest('[data-cursor-close="true"]')) return true;

      // 2. Aria labels with 'close'
      const ariaLabel = target.closest('[aria-label]')?.getAttribute('aria-label') || '';
      if (/close/i.test(ariaLabel)) return true;

      // 3. Title with 'close'
      const title = target.closest('[title]')?.getAttribute('title') || '';
      if (/close/i.test(title)) return true;

      // 4. Lucide X SVG element or child of it
      if (target.closest('svg.lucide-x') || target.classList.contains('lucide-x')) return true;

      // 5. Button or interactive container containing Close text or Lucide X icon
      const buttonOrAction = target.closest('button, a, [role="button"]');
      if (buttonOrAction) {
        const text = buttonOrAction.textContent?.trim().toLowerCase() || '';
        if (text === 'close' || text.startsWith('close ') || text.endsWith(' close') || text.includes('close')) return true;
        if (buttonOrAction.querySelector('svg.lucide-x')) return true;
      }

      return false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as Element | null;
      if (target) {
        const interactive = target.closest(
          'a, button, input, textarea, select, [role="button"], .cursor-pointer'
        );
        setIsHovered(!!interactive);
        setIsCloseTarget(checkIsCloseElement(target));
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsCloseTarget(false);
      setIsHovered(false);
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

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (!target) return;

      const interactive = target.closest(
        'a, button, input, textarea, select, [role="button"], .cursor-pointer'
      );
      setIsHovered(!!interactive);
      setIsCloseTarget(checkIsCloseElement(target));
    };

    const handleMouseOut = (e: MouseEvent) => {
      const related = e.relatedTarget as Element | null;
      if (!related) {
        setIsCloseTarget(false);
        setIsHovered(false);
      } else {
        setIsCloseTarget(checkIsCloseElement(related));
        const interactive = related.closest(
          'a, button, input, textarea, select, [role="button"], .cursor-pointer'
        );
        setIsHovered(!!interactive);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
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
        scale: isClicked ? 0.8 : isCloseTarget ? 1.45 : isHovered ? 1.5 : 1,
        opacity: isVisible ? (isHovered || isCloseTarget ? 1 : 0.85) : 0,
      }}
      transition={{
        scale: { type: "spring", damping: 22, stiffness: 380 },
        opacity: { duration: 0.15 },
      }}
      className={cn(
        "pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block rounded-full transition-colors duration-75",
        isCloseTarget
          ? "w-8 h-8 border-2 border-red-500 bg-red-500/20 shadow-[0_0_16px_rgba(239,68,68,0.6)]"
          : "w-7 h-7 bg-transparent border-2 border-black dark:border-white"
      )}
    />
  );
}
