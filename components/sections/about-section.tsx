"use client";

import * as React from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { motion } from "framer-motion";
import { useSectionScrollTransition } from "@/lib/scroll-transition";

interface AboutPhoto {
  id: string;
  title: string;
  caption: string;
  year: string;
  url: string;
}

const LEAD_PORTRAIT: AboutPhoto = {
  id: "lead-portrait",
  title: "Osahumhen Timothy Iyamah",
  caption: "Creative Director & Brand Strategist.",
  year: "2024",
  url: "/portrait.jpg",
};

export function AboutSection() {
  const [selectedPhoto, setSelectedPhoto] = React.useState<AboutPhoto | null>(null);
  const sectionRef = React.useRef<HTMLElement>(null);
  const { scale, opacity } = useSectionScrollTransition(sectionRef);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 scroll-mt-24 overflow-hidden"
    >
      {/* Invisible anchor for backward compatibility with #photos */}
      <div id="photos" className="-mt-24 pt-24 pointer-events-none" />

      <motion.div 
        style={{ scale, opacity }} 
        className="origin-center w-full will-change-transform"
      >
        {/* Newspaper Editorial Layout: Floated portrait on left, wrapped bio text shifting to right */}
        <div className="clearfix mb-14 sm:mb-18">
          {/* Floated Portrait on the Left (Newspaper / Broadsheet Style) */}
          <div 
            onClick={() => setSelectedPhoto(LEAD_PORTRAIT)}
            className="float-left mr-6 sm:mr-10 md:mr-12 mb-5 sm:mb-8 w-44 sm:w-64 md:w-72 lg:w-80 group cursor-pointer"
          >
            {/* Portrait Container with sharp 90° corners & no border stroke */}
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900 shadow-xs transition-all duration-300 group-hover:shadow-lg">
              <Image
                src={LEAD_PORTRAIT.url}
                alt={LEAD_PORTRAIT.title}
                fill
                priority
                sizes="(max-width: 640px) 176px, (max-width: 1024px) 288px, 320px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="p-2 rounded-full bg-white/90 text-black shadow-md">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Newspaper Caption Underneath */}
            <div className="pt-2 flex items-baseline justify-between text-[11px] xanh-mono-regular not-italic text-neutral-500 dark:text-neutral-400">
              <span className="uppercase tracking-wider">Fig. 01 / Portrait</span>
              <span>{LEAD_PORTRAIT.year}</span>
            </div>
          </div>

          {/* Shifted Text to the Right with Fluid Newspaper Text Wrap */}
          <div>
            {/* Header */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-black dark:text-white xanh-mono-regular not-italic mb-4 sm:mb-6 leading-[1.1]">
              About Me
            </h2>
            
            <p className="text-base sm:text-lg text-black dark:text-neutral-100 xanh-mono-regular not-italic leading-relaxed mb-4">
              I am Osahumhen Timothy Iyamah, a multidisciplinary designer, brand strategist, and creative director obsessed with editorial precision, compelling visual language, and brand systems that endure.
            </p>

            <p className="text-base sm:text-lg text-black dark:text-neutral-300 xanh-mono-regular not-italic leading-relaxed mb-4">
              Over the past several years, I have worked across brand identity, publication layouts, illustration, and digital experiences—translating abstract ideas into tangible, high-impact aesthetics. My process is rooted in reduction, deep research, and architectural rigor: balancing timeless design thinking with modern digital toolchains to build identities that command attention and stand the test of time.
            </p>

            <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-400 xanh-mono-regular not-italic leading-relaxed mb-5">
              Whether directing comprehensive brand campaigns or crafting bespoke visual identities, I approach every brief with the belief that design should provoke thought, create clarity, and outlive fleeting trends.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs xanh-mono-regular not-italic text-neutral-500 dark:text-neutral-400 pt-1">
              <span>Available for Select Commissions</span>
              <span>•</span>
              <span>Brand Identity & Design Systems</span>
            </div>
          </div>

          {/* Clearfix for the floated portrait */}
          <div className="clear-both" />
        </div>
      </motion.div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div 
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden bg-neutral-950 border border-neutral-800 shadow-2xl"
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 backdrop-blur-md transition-colors cursor-pointer"
              aria-label="Close photo preview"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative w-full h-[65vh] sm:h-[75vh]">
              <Image
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
            <div className="p-4 sm:p-6 bg-neutral-900 border-t border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-white">
              <div>
                <h3 className="text-lg font-medium xanh-mono-regular not-italic">{selectedPhoto.title}</h3>
                <p className="text-sm text-neutral-400 mt-0.5 xanh-mono-regular not-italic">
                  {selectedPhoto.caption}
                </p>
              </div>
              <div className="text-xs xanh-mono-regular not-italic text-neutral-400 bg-neutral-800 px-3 py-1.5 rounded-lg">
                {selectedPhoto.year}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
