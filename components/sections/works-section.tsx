"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useSectionScrollTransition } from "@/lib/scroll-transition";
import { PORTFOLIO_CATEGORIES } from "@/lib/portfolio-data";

export function WorksSection() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const { scale, opacity } = useSectionScrollTransition(sectionRef);

  return (
    <section 
      ref={sectionRef}
      id="works" 
      className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14 scroll-mt-20 overflow-hidden"
    >
      <motion.div 
        style={{ scale, opacity }} 
        className="origin-center w-full will-change-transform"
      >
        {/* 5-Column Lined-Up Category Cards (Matching Ingamana Reference Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-3.5">
          {PORTFOLIO_CATEGORIES.map((category) => (
            <Link
              key={category.slug}
              href={`/works/${category.slug}`}
              className="group flex flex-col cursor-pointer transition-transform active:scale-[0.99]"
            >
              {/* Image Card Container */}
              <div 
                className="relative aspect-[16/11] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900 transition-all duration-300 group-hover:shadow-md origin-center"
              >
                <Image
                  src={category.coverImage}
                  alt={category.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Bottom Row Label matching reference: [NAME] on left, [.../YEAR] on right */}
              <div className="pt-2.5 flex items-baseline justify-between text-black dark:text-white transition-opacity group-hover:opacity-75">
                <span className="text-xs sm:text-sm font-medium uppercase tracking-wider xanh-mono-regular truncate pr-2">
                  {category.name}
                </span>
                <span className="text-[11px] sm:text-xs font-mono text-neutral-500 dark:text-neutral-400 shrink-0">
                  {category.tag}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
