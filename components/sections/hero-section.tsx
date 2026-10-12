"use client";

import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useSectionScrollTransition } from "@/lib/scroll-transition";

const NAV_LINKS = [
  { label: "Works", href: "#works", tag: "01" },
  { label: "Stack", href: "#stack", tag: "02" },
  { label: "About", href: "#about", tag: "03" },
  { label: "Shop", href: "#shop", tag: "04" },
];

export function HeroSection() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const { scale, opacity } = useSectionScrollTransition(sectionRef, { isFirst: true });

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="home" 
      className="relative w-full min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center px-6 sm:px-10 lg:px-12 pt-4 sm:pt-6 md:pt-8 pb-10 sm:pb-14 md:pb-16 scroll-mt-20 overflow-hidden"
    >
      <motion.div 
        style={{ scale, opacity }} 
        className="max-w-7xl mx-auto w-full my-auto origin-center will-change-transform"
      >
        {/* Main content grid: Left-aligned biography & Right-aligned page navigation index */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-end w-full">
          
          {/* Left-aligned Biography statement */}
          <div className="lg:col-span-8 text-left select-text flex flex-col justify-end">
            {/* Status outline badge sitting closer to the headline */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-black dark:border-neutral-800 bg-transparent text-xs xanh-mono-regular text-black dark:text-neutral-400 mb-3.5 sm:mb-4 self-start"
            >
              <span>Creative Director & Brand Strategist</span>
              <svg
                viewBox="0 0 24 24"
                aria-label="Verified"
                className="w-3.5 h-3.5 inline-block shrink-0 select-none drop-shadow-xs"
              >
                <title>Verified</title>
                <path
                  d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.67-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.67-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34z"
                  fill="#1D9BF0"
                />
                <path
                  d="M10.54 16.2L6.8 12.46l1.41-1.42 2.33 2.33 5.46-5.96 1.47 1.36-6.93 7.43z"
                  fill="#FFFFFF"
                />
              </svg>
            </motion.div>

            {/* Primary left-aligned headline with subtle move-in animation */}
            <motion.h1 
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[clamp(2.5rem,3.8vw,3.75rem)] font-normal tracking-tight text-black dark:text-white xanh-mono-regular leading-[1.08] mb-3.5 sm:mb-4"
            >
              Hi, I&apos;m Osahumhen Timothy Iyamah, a multidisciplinary designer, brand strategist, and creative director.
            </motion.h1>

            {/* Secondary left-aligned description with gentle move-in */}
            <motion.p 
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
              className="text-base sm:text-xl md:text-2xl text-black dark:text-neutral-300 xanh-mono-regular-italic leading-snug max-w-2xl"
            >
              I specialize in transforming complex ideas into clean, functional, and visually striking digital experiences that drive growth.
            </motion.p>
          </div>

          {/* Right-aligned Navigation Links to sections (Works, Stack, About, Shop) */}
          <div className="lg:col-span-4 flex flex-col items-end text-right justify-end pt-6 lg:pt-0">
            <div className="flex flex-col items-end space-y-3 w-full">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href.replace("#", ""));
                  }}
                  className="group inline-flex items-center justify-end gap-3 text-2xl sm:text-3xl md:text-4xl font-normal text-black dark:text-white xanh-mono-regular hover:opacity-60 transition-all cursor-pointer"
                >
                  <span className="relative">
                    {link.label}
                    <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-black dark:bg-white transition-all duration-300 group-hover:w-full" />
                  </span>
                  <span className="text-xs xanh-mono-regular px-2 py-0.5 rounded-full border border-black dark:border-neutral-800 text-black dark:text-neutral-300 group-hover:border-black dark:group-hover:border-white transition-colors">
                    {link.tag}
                  </span>
                  <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-black dark:text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
