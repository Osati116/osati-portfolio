"use client";

import * as React from "react";
import { TheInfiniteGrid } from "@/components/ui/the-infinite-grid";
import { HeroSection } from "@/components/sections/hero-section";
import { WorksSection } from "@/components/sections/works-section";
import { StackSection } from "@/components/sections/stack-section";
import { AboutSection } from "@/components/sections/about-section";
import { ConnectSection } from "@/components/sections/connect-section";
import { FooterSection } from "@/components/sections/footer-section";

export default function HomePage() {
  // Sitewide scroll restoration: return to exact explored position or boot to top
  React.useEffect(() => {
    if (typeof window === "undefined") return;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const hash = window.location.hash;
    let savedY: string | null = null;
    try {
      savedY = sessionStorage.getItem("scroll_pos_/");
    } catch {
      // Ignore
    }

    // 1. If landing with specific anchor hash (e.g. #works, #stack, #about, #connect)
    if (hash && hash !== "#" && hash !== "#home") {
      const targetId = hash.replace("#", "");
      const timer = setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return () => clearTimeout(timer);
    }

    // 2. If returning from exploring a category, restore exact scroll coordinate
    if (savedY && parseFloat(savedY) > 0) {
      const targetY = parseFloat(savedY);
      const restore = () => {
        window.scrollTo({ top: targetY, left: 0, behavior: "instant" });
      };

      restore();
      const r1 = requestAnimationFrame(restore);
      const t1 = setTimeout(restore, 40);
      const t2 = setTimeout(restore, 120);
      const t3 = setTimeout(restore, 280);

      return () => {
        cancelAnimationFrame(r1);
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    }

    // 3. Fresh session or explicit boot to top
    if (!hash || hash === "#" || hash === "#home") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, []);

  return (
    <div className="relative w-full min-h-screen flex flex-col bg-white dark:bg-black transition-colors duration-300">
      {/* Persistent Infinite Grid Background with 50% opacity hover mesh and cursor spotlight */}
      <TheInfiniteGrid monochrome={true} fixedBackground={true} />

      {/* Main continuous scrollable stream shifted 30px downward */}
      <main className="relative z-10 w-full flex flex-col pt-[30px]">
        {/* Section 00: Home Hero & Editorial Bio */}
        <HeroSection />

        {/* Section 01: Selected Works & Experiments */}
        <WorksSection />

        {/* Section 02: Toolchain & Infrastructure Stack */}
        <StackSection />

        {/* Section 03: About Me Bio & Personal Photo Gallery */}
        <AboutSection />

        {/* Section 04: Connect with Me */}
        <ConnectSection />

        {/* Footer & Back-to-Top Navigation */}
        <FooterSection />
      </main>
    </div>
  );
}
