"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useSectionScrollTransition } from "@/lib/scroll-transition";
import { PORTFOLIO_CATEGORIES } from "@/lib/portfolio-data";

const BRAND_IDENTITY_IMAGES = [
  { src: "/works/techhack.png", title: "TechHack" },
  { src: "/works/fun-french-academy.png", title: "Fun French Academy" },
  { src: "/works/ziv-cleaning.png", title: "ZIV Cleaning Co." },
  { src: "/works/design-kitchen.png", title: "Design Kitchen Studio" },
];

const ILLUSTRATION_IMAGES = [
  { src: "/works/illustrations/urban-designer.png", title: "Urban Designer Ape" },
  { src: "/works/illustrations/saiyan-awakening.png", title: "Saiyan Surge" },
  { src: "/works/illustrations/drip-portrait-female.png", title: "Joyful Drip Portrait" },
  { src: "/works/illustrations/drip-portrait-male.png", title: "Shaded Drip Portrait" },
  { src: "/works/illustrations/expressive-portrait.png", title: "Ecstatic Expression" },
];

function BrandIdentityAnimatedCard() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BRAND_IDENTITY_IMAGES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div 
      className="relative aspect-[16/11] w-full overflow-hidden bg-white dark:bg-neutral-900 transition-all duration-300 group-hover:shadow-md origin-center"
      onMouseEnter={() => {
        setCurrentIndex((prev) => (prev + 1) % BRAND_IDENTITY_IMAGES.length);
      }}
    >
      {BRAND_IDENTITY_IMAGES.map((item, idx) => (
        <motion.div
          key={item.src}
          initial={false}
          animate={{
            opacity: idx === currentIndex ? 1 : 0,
            scale: idx === currentIndex ? 1 : 1.04,
          }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          <Image
            src={item.src}
            alt={item.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority={idx === 0}
          />
        </motion.div>
      ))}
    </div>
  );
}

function IllustrationAnimatedCard() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ILLUSTRATION_IMAGES.length);
    }, 3100);
    return () => clearInterval(timer);
  }, []);

  return (
    <div 
      className="relative aspect-[16/11] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900 transition-all duration-300 group-hover:shadow-md origin-center"
      onMouseEnter={() => {
        setCurrentIndex((prev) => (prev + 1) % ILLUSTRATION_IMAGES.length);
      }}
    >
      {ILLUSTRATION_IMAGES.map((item, idx) => (
        <motion.div
          key={item.src}
          initial={false}
          animate={{
            opacity: idx === currentIndex ? 1 : 0,
            scale: idx === currentIndex ? 1 : 1.04,
          }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          <Image
            src={item.src}
            alt={item.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority={idx === 0}
          />
        </motion.div>
      ))}
    </div>
  );
}

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
              {category.slug === "brand-identity" ? (
                <BrandIdentityAnimatedCard />
              ) : category.slug === "illustration" ? (
                <IllustrationAnimatedCard />
              ) : (
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
              )}

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
