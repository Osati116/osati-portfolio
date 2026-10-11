"use client";

import * as React from "react";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { useSectionScrollTransition } from "@/lib/scroll-transition";

const FOOTER_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Works", href: "#works" },
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" },
  { label: "Shop", href: "#shop" },
];

export function FooterSection() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const { scale, opacity } = useSectionScrollTransition(sectionRef, { isLast: true });

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", `#${id}`);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer ref={sectionRef} className="w-full bg-white/40 dark:bg-black/40 backdrop-blur-md mt-24 overflow-hidden">
      <motion.div 
        style={{ scale, opacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 origin-center will-change-transform"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo & Bio Info */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <button
              onClick={() => scrollTo("home")}
              className="flex items-center cursor-pointer group"
              aria-label="Back to home top"
            >
              <div
                className="h-8 w-28 bg-black dark:bg-white transition-opacity duration-200 group-hover:opacity-75"
                style={{
                  maskImage: "url(/logo.png)",
                  WebkitMaskImage: "url(/logo.png)",
                  maskSize: "contain",
                  WebkitMaskSize: "contain",
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                  maskPosition: "center left",
                  WebkitMaskPosition: "center left",
                }}
                role="img"
                aria-label="Osati Logo"
              />
            </button>
            <p className="text-xs text-black dark:text-neutral-400 xanh-mono-regular text-center md:text-left">
              Crafted with Next.js App Router, Tailwind CSS & The Infinite Grid.
            </p>
          </div>

          {/* Quick Anchor Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href.replace("#", ""));
                }}
                className="text-xs uppercase tracking-wider text-black dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors xanh-mono-regular cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Back to top button */}
          <div className="flex items-center">
            <button
              onClick={() => scrollTo("home")}
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black dark:border-neutral-800 bg-transparent text-xs xanh-mono-regular text-black dark:text-neutral-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 flex items-center justify-center text-center text-[11px] text-black dark:text-neutral-400 xanh-mono-regular">
          <span>&copy; {new Date().getFullYear()} Osahumhen Timothy Iyamah. All rights reserved.</span>
        </div>
      </motion.div>
    </footer>
  );
}
