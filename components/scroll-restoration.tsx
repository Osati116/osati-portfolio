"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

/**
 * Sitewide Scroll Restoration & Memory System
 * 
 * Remembers exact scroll coordinates when navigating between pages (e.g. from homepage
 * into category pages, and across internal routes). When returning via "Back to Home",
 * browser back button, or mobile swipe back, accurately restores the user to the exact
 * position where they tapped instead of jumping to the top of the homepage.
 */
export function ScrollRestoration() {
  const pathname = usePathname();
  const isPopStateRef = React.useRef(false);

  // 1. Continuously record current scroll position with lightweight rAF throttling
  React.useEffect(() => {
    if (typeof window === "undefined") return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          // Avoid overwriting a valid saved scroll position with 0 during initial mount transition
          if (currentY > 0 || !sessionStorage.getItem("is_returning_from_subpage")) {
            try {
              sessionStorage.setItem(`scroll_pos_${pathname}`, currentY.toString());
            } catch {
              // Ignore sessionStorage errors (e.g. quota or privacy mode)
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // 2. Track browser popstate events (hardware back, browser back arrow, mobile swipe-back)
  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const handlePopState = () => {
      isPopStateRef.current = true;
      try {
        sessionStorage.setItem("is_returning_from_subpage", "true");
      } catch {
        // Ignore
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // 3. Restore scroll position on pathname change / route mount
  React.useEffect(() => {
    if (typeof window === "undefined") return;

    let isReturning = false;
    try {
      isReturning = sessionStorage.getItem("is_returning_from_subpage") === "true";
    } catch {
      // Ignore
    }

    let savedYStr: string | null = null;
    try {
      savedYStr = sessionStorage.getItem(`scroll_pos_${pathname}`);
    } catch {
      // Ignore
    }

    if (savedYStr && (isReturning || isPopStateRef.current || pathname === "/")) {
      const targetY = parseFloat(savedYStr);
      if (!isNaN(targetY) && targetY > 0) {
        const applyScroll = () => {
          window.scrollTo({ top: targetY, left: 0, behavior: "instant" });
        };

        // Multi-frame restoration to accommodate image layouts & font rendering
        applyScroll();
        const r1 = requestAnimationFrame(applyScroll);
        const t1 = setTimeout(applyScroll, 40);
        const t2 = setTimeout(applyScroll, 120);
        const t3 = setTimeout(applyScroll, 280);

        try {
          sessionStorage.removeItem("is_returning_from_subpage");
        } catch {
          // Ignore
        }
        isPopStateRef.current = false;

        return () => {
          cancelAnimationFrame(r1);
          clearTimeout(t1);
          clearTimeout(t2);
          clearTimeout(t3);
        };
      }
    }

    try {
      sessionStorage.removeItem("is_returning_from_subpage");
    } catch {
      // Ignore
    }
    isPopStateRef.current = false;
  }, [pathname]);

  return null;
}
