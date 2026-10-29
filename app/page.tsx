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
  // Ensure the website always boots at the top Home section
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      // Disable browser automatic scroll restoration to prevent booting mid-page
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }

      // If landing on root or with stale #home/#works hash on boot, reset to top
      const hash = window.location.hash;
      if (!hash || hash === "#" || hash === "#home" || hash === "#works") {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        if (hash) {
          window.history.replaceState(null, "", window.location.pathname);
        }
      } else {
        // Specific deep-link hash requested (e.g. #works, #stack, #about, #connect)
        const targetId = hash.replace("#", "");
        const timer = setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
        return () => clearTimeout(timer);
      }
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
