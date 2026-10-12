"use client";

import * as React from "react";
import { TheInfiniteGrid } from "@/components/ui/the-infinite-grid";
import { HeroSection } from "@/components/sections/hero-section";
import { WorksSection } from "@/components/sections/works-section";
import { StackSection } from "@/components/sections/stack-section";
import { AboutSection } from "@/components/sections/about-section";
import { ShopSection } from "@/components/sections/shop-section";
import { FooterSection } from "@/components/sections/footer-section";

export default function HomePage() {
  // Smoothly scroll to target section if an initial hash exists in the URL
  React.useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const targetId = window.location.hash.replace("#", "");
      // Small timeout to allow full DOM render before scrolling
      const timer = setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="relative w-full min-h-screen flex flex-col bg-white dark:bg-black transition-colors duration-300">
      {/* Persistent Infinite Grid Background with 50% opacity hover mesh and cursor spotlight */}
      <TheInfiniteGrid monochrome={true} fixedBackground={true} />

      {/* Main continuous scrollable stream shifted 10px downward */}
      <main className="relative z-10 w-full flex flex-col pt-[10px]">
        {/* Section 00: Home Hero & Editorial Bio */}
        <HeroSection />

        {/* Section 01: Selected Works & Experiments */}
        <WorksSection />

        {/* Section 02: Toolchain & Infrastructure Stack */}
        <StackSection />

        {/* Section 03: About Me Bio & Personal Photo Gallery */}
        <AboutSection />

        {/* Section 04: Digital Store & Products */}
        <ShopSection />

        {/* Footer & Back-to-Top Navigation */}
        <FooterSection />
      </main>
    </div>
  );
}
