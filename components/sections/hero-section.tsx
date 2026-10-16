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

const ALIEN_GLYPHS = "⍟⏣⌬⍎⍕⍱⍲⍳⍴⍶⍷ᚠᚥᚦᛏᛒᛖᛗᛚᛜᛟᛞᚲꘐꘒꘓꘔꘖ⋈⋉⋊⋋⋌⋍⋎⋏⋐⋑⋒⋓⋔⋕⎔⎕⏥⏦⏧⏨Ø∆⌖§¥◊◈◆◇01XZ".split("");

function getRandomGlyph(): string {
  return ALIEN_GLYPHS[Math.floor(Math.random() * ALIEN_GLYPHS.length)];
}

function TypingName({ name = "Osahumhen Timothy Iyamah" }: { name?: string }) {
  const [displayText, setDisplayText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [charIndex, setCharIndex] = React.useState(0);
  const [scrambleTick, setScrambleTick] = React.useState(0);
  const [lockedText, setLockedText] = React.useState("");
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const media = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReducedMotion(media.matches);
    }
  }, []);

  React.useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayText(name);
      return;
    }

    let timeoutId: NodeJS.Timeout;

    if (!isDeleting) {
      // --- TYPING IN: Glyph letter reveal ---
      if (charIndex < name.length) {
        if (name[charIndex] === " ") {
          // Instant space to preserve clean word boundaries
          timeoutId = setTimeout(() => {
            const nextLocked = lockedText + " ";
            setLockedText(nextLocked);
            setDisplayText(nextLocked);
            setCharIndex((prev) => prev + 1);
            setScrambleTick(0);
          }, 15);
        } else if (scrambleTick < 2) {
          // Glyph mutation tick for the active character being typed in
          timeoutId = setTimeout(() => {
            setDisplayText(lockedText + getRandomGlyph());
            setScrambleTick((prev) => prev + 1);
          }, 32);
        } else {
          // Reveal the authentic Latin character
          timeoutId = setTimeout(() => {
            const nextLocked = lockedText + name[charIndex];
            setLockedText(nextLocked);
            setDisplayText(nextLocked);
            setCharIndex((prev) => prev + 1);
            setScrambleTick(0);
          }, 36);
        }
      } else {
        // Full name completed typing in: hold for 2.8s so it can be comfortably read
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, 2800);
      }
    } else {
      // --- TYPING OUT: Normal text backspace deletion ---
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          const nextText = displayText.slice(0, displayText.length - 1);
          setDisplayText(nextText);
          setLockedText(nextText);
        }, 30);
      } else {
        // Paused at empty for 400ms before typing in again
        timeoutId = setTimeout(() => {
          setCharIndex(0);
          setScrambleTick(0);
          setLockedText("");
          setIsDeleting(false);
        }, 400);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isDeleting, charIndex, scrambleTick, lockedText, name, prefersReducedMotion]);

  const lastSpaceIndex = displayText.lastIndexOf(" ");
  const leadingText = lastSpaceIndex !== -1 ? displayText.slice(0, lastSpaceIndex + 1) : "";
  const trailingWord = lastSpaceIndex !== -1 ? displayText.slice(lastSpaceIndex + 1) : displayText;

  return (
    <span className="inline select-text" aria-label={name}>
      <span>{leadingText}</span>
      <span className="whitespace-nowrap">
        <span>{trailingWord}</span>
        <span className="inline-block font-light text-black dark:text-white animate-cursor select-none leading-none -translate-y-[1px]">|</span>
      </span>
    </span>
  );
}

function SweepingRole({ text }: { text: string }) {
  return (
    <span className="group relative inline-block cursor-pointer">
      <span>{text}</span>
      <span className="absolute left-0 -bottom-0.5 sm:-bottom-1 w-0 h-[1.5px] sm:h-[2px] bg-black dark:bg-white transition-all duration-300 ease-out group-hover:w-full pointer-events-none" />
    </span>
  );
}

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
      className="relative w-full min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center pt-4 sm:pt-6 md:pt-8 pb-10 sm:pb-14 md:pb-16 scroll-mt-20 overflow-hidden"
    >
      <motion.div 
        style={{ scale, opacity }} 
        className="max-w-7xl mx-auto w-full my-auto px-4 sm:px-6 lg:px-8 origin-center will-change-transform"
      >
        {/* Main content grid container matching exact navbar px-5 padding */}
        <div className="px-5 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-end w-full">
            
            {/* Left-aligned Biography statement */}
            <div className="lg:col-span-8 text-left select-text flex flex-col justify-end">
              {/* Status badge with first letter 'C' flush aligned with headline and navbar logo */}
              <motion.div 
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className="inline-flex items-center gap-1.5 pl-0 pr-3.5 py-1 text-xs xanh-mono-regular text-black dark:text-neutral-400 mb-3.5 sm:mb-4 self-start transition-all duration-300 hover:opacity-75 cursor-default"
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

            {/* Primary left-aligned headline with mobile-optimized line breaks and sweeping underlines */}
            <motion.h1 
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[3.85rem] font-normal tracking-tight text-black dark:text-white xanh-mono-regular leading-[1.2] sm:leading-[1.16] mb-4 sm:mb-5 max-w-4xl cursor-default select-text"
            >
              <span className="block transition-opacity duration-200 hover:opacity-60">
                Hi, I&apos;m
              </span>
              {/* Endless typing name displaying on both desktop and mobile views with balanced font size */}
              <span className="block min-h-[1.2em]">
                <TypingName name="Osahumhen Timothy Iyamah" />
              </span>
              <span className="block">
                <span className="block sm:inline">
                  <span>a </span>
                  <SweepingRole text="multidisciplinary designer" />
                  <span>, </span>
                </span>
                <span className="block sm:inline">
                  <SweepingRole text="brand strategist" />
                  <span>, and </span>
                </span>
                <span className="block sm:inline">
                  <SweepingRole text="creative director" />
                  <span>.</span>
                </span>
              </span>
            </motion.h1>

            {/* Secondary left-aligned description with responsive hover */}
            <motion.p 
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
              className="text-sm sm:text-base md:text-lg text-black dark:text-neutral-300 xanh-mono-regular-italic leading-relaxed max-w-2xl transition-opacity duration-300 hover:opacity-60 cursor-default"
            >
              I specialize in transforming complex ideas into clean, functional, and visually striking digital experiences that drive growth.
            </motion.p>
          </div>

          {/* Right-aligned Navigation Links to sections (Works, Stack, About, Shop) */}
          <div className="lg:col-span-4 flex flex-col items-end text-right justify-end pt-6 lg:pt-0">
            <div className="flex flex-col items-end space-y-3 sm:space-y-4 w-full">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href.replace("#", ""));
                  }}
                  className="group inline-flex items-center justify-end gap-2.5 text-lg sm:text-xl md:text-2xl font-normal text-black dark:text-white xanh-mono-regular hover:opacity-60 transition-all cursor-pointer"
                >
                  <span className="relative">
                    {link.label}
                    <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-black dark:bg-white transition-all duration-300 group-hover:w-full" />
                  </span>
                  <span className="text-[10px] sm:text-xs xanh-mono-regular px-2 py-0.5 rounded-full border-0 bg-neutral-100 dark:bg-neutral-900 text-black dark:text-neutral-300 transition-colors">
                    {link.tag}
                  </span>
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-black dark:text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              ))}
            </div>
          </div>

        </div>
        </div>
      </motion.div>
    </section>
  );
}
