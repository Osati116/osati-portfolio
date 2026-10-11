"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useSectionScrollTransition } from "@/lib/scroll-transition";

// Official Full-Colour Brand Logos
function FigmaLogo() {
  return (
    <svg role="img" viewBox="0 0 38 57" className="w-5 h-5">
      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
      <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
      <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
      <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
    </svg>
  );
}

function IllustratorLogo() {
  return (
    <svg role="img" viewBox="0 0 24 24" className="w-5 h-5">
      <rect width="24" height="24" rx="4.5" fill="#330000" />
      <rect x="0.5" y="0.5" width="23" height="23" rx="4" stroke="#FF9A00" strokeWidth="1" fill="none" />
      <path d="M10.53 10.73c-.1-.31-.19-.61-.29-.92-.1-.31-.19-.6-.27-.89-.08-.28-.15-.54-.22-.78h-.02c-.09.43-.2.86-.34 1.29-.15.48-.3.98-.46 1.48-.14.51-.29.98-.44 1.4h2.54c-.06-.211-.14-.46-.23-.721-.09-.269-.18-.559-.27-.859zM14.7 16.83h-2.091c-.069.01-.139-.04-.159-.11l-.82-2.38H7.91l-.76 2.35c-.02.09-.1.15-.19.141H5.08c-.11 0-.14-.061-.11-.18L8.19 7.38c.03-.1.06-.21.1-.33.04-.21.06-.43.06-.65-.01-.05.03-.1.08-.11h2.59c.08 0 .12.03.13.08l3.65 10.3c.03.109 0 .16-.1.16zm3.4-.15c0 .11-.039.16-.129.16H16.01c-.1 0-.15-.061-.15-.16v-7.7c0-.1.041-.14.131-.14h1.98c.09 0 .129.05.129.14v7.7zm-.209-9.03c-.231.24-.571.37-.911.35-.33.01-.65-.12-.891-.35-.23-.25-.35-.58-.34-.92-.01-.34.12-.66.359-.89.242-.23.562-.35.892-.35.391 0 .689.12.91.35.22.24.34.56.33.89.01.34-.11.67-.349.92z" fill="#FF9A00" />
    </svg>
  );
}

function CanvaLogo() {
  return (
    <svg role="img" viewBox="0 0 80 80" className="w-5 h-5" fill="none">
      <path
        d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z"
        fill="#7D2AE7"
      />
      <path
        d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z"
        fill="url(#canva_radial0)"
      />
      <path
        d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z"
        fill="url(#canva_radial1)"
      />
      <path
        d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z"
        fill="url(#canva_radial2)"
      />
      <path
        d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z"
        fill="url(#canva_radial3)"
      />
      <path
        d="M57.2691 48.2052C56.939 48.2052 56.6485 48.484 56.3462 49.0928C52.9323 56.0153 47.0358 60.9134 40.2125 60.9134C32.3228 60.9134 27.437 53.7913 27.437 43.9522C27.437 27.2855 36.7232 17.6491 44.8796 17.6491C48.691 17.6491 51.0186 20.0443 51.0186 23.8559C51.0186 28.3796 48.4485 30.7748 48.4485 32.3702C48.4485 33.0864 48.8939 33.5201 49.7773 33.5201C53.3264 33.5201 57.4918 29.4419 57.4918 23.6808C57.4918 18.0947 52.63 13.9888 44.4737 13.9888C30.994 13.9888 19.0142 26.4858 19.0142 43.777C19.0142 57.1614 26.6572 66.0061 38.45 66.0061C50.9668 66.0061 58.2043 53.5526 58.2043 49.5105C58.2043 48.6153 57.7466 48.2052 57.2691 48.2052Z"
        fill="white"
      />
      <defs>
        <radialGradient
          id="canva_radial0"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(15.453 70.9057) rotate(-49.416) scale(61.8733)"
        >
          <stop stopColor="#6420FF" />
          <stop offset="1" stopColor="#6420FF" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="canva_radial1"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(21.1788 9.09457) rotate(54.703) scale(69.7735)"
        >
          <stop stopColor="#00C4CC" />
          <stop offset="1" stopColor="#00C4CC" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="canva_radial2"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(15.4526 70.9053) rotate(-45.1954) scale(61.1242 28.1118)"
        >
          <stop stopColor="#6420FF" />
          <stop offset="1" stopColor="#6420FF" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="canva_radial3"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(32.7158 10.7789) rotate(66.5198) scale(62.9836 105.512)"
        >
          <stop stopColor="#00C4CC" stopOpacity="0.725916" />
          <stop offset="0.0001" stopColor="#00C4CC" />
          <stop offset="1" stopColor="#00C4CC" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function NotionLogo() {
  return (
    <svg role="img" viewBox="0 0 24 24" className="w-5 h-5">
      <rect width="24" height="24" rx="4.5" fill="#FFFFFF" />
      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" fill="#000000" />
    </svg>
  );
}

function InDesignLogo() {
  return (
    <svg role="img" viewBox="0 0 24 24" className="w-5 h-5">
      <rect width="24" height="24" rx="4.5" fill="#49021F" />
      <rect x="0.5" y="0.5" width="23" height="23" rx="4" stroke="#FF3366" strokeWidth="1" fill="none" />
      <path d="M15.56 5.43h2.03c.05-.01.09.03.1.07v9.54c0 .18.01.38.02.6.02.21.03.41.04.58 0 .07-.03.13-.1.16-.52.22-1.07.38-1.63.48-.5.09-1.02.14-1.54.14-.74.01-1.48-.14-2.15-.45-.63-.29-1.15-.77-1.51-1.36-.37-.61-.55-1.37-.55-2.28-.01-.74.18-1.47.55-2.11.38-.65.93-1.19 1.59-1.55.7-.39 1.54-.58 2.53-.58.05 0 .12 0 .21.01s.19.01.31.02V5.54c0-.07.03-.11.1-.11zm-8.93.86h1.95c.06-.01.12.03.13.1.01.01.01.02.01.03v10.26c0 .11-.05.16-.14.16H6.62c-.09 0-.13-.05-.13-.16V6.42c0-.09.05-.13.14-.13zm8.23 4.24c-.39 0-.78.08-1.13.26-.34.17-.63.42-.85.74-.22.32-.33.75-.33 1.27-.01.35.05.7.17 1.03.1.27.25.51.45.71.19.18.42.32.68.4.27.09.55.13.83.13.15 0 .29-.01.42-.02.13.01.25-.01.36-.05v-4.4c-.09-.02-.18-.04-.27-.05-.11-.01-.22-.02-.33-.02z" fill="#FF3366" />
    </svg>
  );
}

function GlyphsLogo() {
  return (
    <svg role="img" viewBox="0 0 189 180" className="w-5 h-5">
      <path d="M97.125 42.1714c0 27.5143 19.425 46.0286 45.937 46.0286C169.575 88.2 189 69.6857 189 42.1714V0H97.125v42.1714zm0 49.8858C97.125 142.971 135.712 180 189 180V92.0572H97.125zM91.875 0C38.5875 0 0 37.8 0 90s38.5875 90 91.875 90V0z" fill="#87F32E" />
    </svg>
  );
}

function PhotoshopLogo() {
  return (
    <svg role="img" viewBox="0 0 24 24" className="w-5 h-5">
      <rect width="24" height="24" rx="4.5" fill="#001E36" />
      <rect x="0.5" y="0.5" width="23" height="23" rx="4" stroke="#31A8FF" strokeWidth="1" fill="none" />
      <path d="M9.85 8.42c-.37-.15-.77-.21-1.18-.2-.26 0-.49 0-.68.01-.2-.01-.34 0-.41.01v3.36c.14.01.27.02.39.02h.53c.39 0 .78-.06 1.15-.18.32-.09.6-.28.82-.53.21-.25.31-.59.31-1.03.01-.31-.07-.62-.23-.89-.17-.26-.41-.46-.7-.57zm2.509 3.53c-.399.56-.959.98-1.609 1.22-.68.25-1.43.34-2.25.34-.24 0-.4 0-.5-.01s-.24-.01-.43-.01v3.209c.01.07-.04.131-.11.141H5.52c-.08 0-.12-.041-.12-.131V6.42c0-.07.03-.11.1-.11.17 0 .33 0 .56-.01.24-.01.49-.01.76-.02s.56-.01.87-.02c.31-.01.61-.01.91-.01.82 0 1.5.1 2.06.31.5.17.96.45 1.34.82.32.32.57.71.73 1.14.149.42.229.85.229 1.3.001.86-.199 1.57-.6 2.13zm7.091 3.89c-.28.4-.671.709-1.12.891-.49.209-1.09.318-1.811.318-.459 0-.91-.039-1.359-.129-.35-.061-.7-.17-1.02-.32-.07-.039-.121-.109-.111-.189v-1.74c0-.029.011-.07.041-.09.029-.02.06-.01.09.01.39.23.8.391 1.24.49.379.1.779.15 1.18.15.38 0 .65-.051.83-.141.16-.07.27-.24.27-.42 0-.141-.08-.27-.24-.4-.16-.129-.489-.279-.979-.471-.51-.18-.979-.42-1.42-.719-.31-.221-.569-.51-.761-.85-.159-.32-.239-.67-.229-1.021 0-.43.12-.84.341-1.21.25-.4.619-.72 1.049-.92.469-.239 1.059-.349 1.769-.349.41 0 .83.03 1.24.09.3.04.59.12.86.23.039.01.08.05.1.09.01.04.02.08.02.12v1.63c0 .04-.02.08-.05.1-.09.02-.14.02-.18 0-.3-.16-.62-.27-.96-.34-.37-.08-.74-.13-1.12-.13-.2-.01-.41.02-.601.07-.129.03-.24.1-.31.2-.05.08-.08.18-.08.27s.04.18.101.26c.09.11.209.2.34.27.229.12.47.23.709.33.541.18 1.061.43 1.541.73.33.209.6.49.789.83.16.318.24.67.23 1.029.011.471-.129.94-.389 1.331z" fill="#31A8FF" />
    </svg>
  );
}

function LightroomLogo() {
  return (
    <svg role="img" viewBox="0 0 24 24" className="w-5 h-5">
      <rect width="24" height="24" rx="4.5" fill="#001E36" />
      <rect x="0.5" y="0.5" width="23" height="23" rx="4" stroke="#87D3FF" strokeWidth="1" fill="none" />
      <path d="M12.76 16.689c0 .051-.029.09-.06.121-.03.02-.06.029-.101.029H6.26c-.11 0-.16-.061-.16-.18V6.44c-.01-.07.04-.13.11-.14h2c.05-.01.11.03.11.08v8.43h4.62c.101 0 .131.049.11.14l-.29 1.739zm6.25-7.859v1.95c0 .08-.05.11-.16.11-.649-.04-1.3.08-1.89.34-.2.09-.39.21-.54.37v5.1c0 .1-.04.14-.13.14h-1.95c-.08.01-.15-.04-.16-.119V11.14c0-.24 0-.49-.01-.75s-.01-.52-.02-.78c-.01-.22-.03-.44-.061-.66-.01-.05.02-.1.07-.11.01-.01.02-.01.04 0h1.75c.1 0 .18.07.21.16.04.07.07.15.08.23.02.1.039.21.05.31.01.11.021.23.021.36.299-.35.66-.64 1.069-.86.46-.25.97-.37 1.49-.36.069-.01.13.04.14.11.001.01.001.02.001.04z" fill="#87D3FF" />
    </svg>
  );
}

function renderToolLogo(toolName: string) {
  switch (toolName) {
    case "Figma":
      return <FigmaLogo />;
    case "Adobe Illustrator":
      return <IllustratorLogo />;
    case "Canva":
      return <CanvaLogo />;
    case "Adobe InDesign":
      return <InDesignLogo />;
    case "Glyphs / FontLab":
      return <GlyphsLogo />;
    case "Adobe Photoshop":
      return <PhotoshopLogo />;
    case "Lightroom Classic":
      return <LightroomLogo />;
    case "Notion & Milanote":
      return <NotionLogo />;
    default:
      return null;
  }
}

const STACK_CATEGORIES = [
  {
    title: "Brand Systems & Strategy",
    description: "Primary applications for designing cohesive identity systems, brand marks, and strategic deliverables.",
    items: [
      {
        name: "Figma",
        level: "Daily Driver",
        description: "Design systems, auto-layout tokens, wireframing, and responsive UI prototyping.",
      },
      {
        name: "Adobe Illustrator",
        level: "Daily Driver",
        description: "Precision vector identity craft, logo geometry, brand collateral, and custom iconography.",
      },
      {
        name: "Canva",
        level: "Daily Driver",
        description: "Rapid marketing asset creation, brand kit distribution, pitch decks, and social collateral.",
      },
      {
        name: "Notion & Milanote",
        level: "Daily Driver",
        description: "Brand strategy blueprints, visual moodboards, client workshops, and documentation logs.",
      },
    ],
  },
  {
    title: "Typography, Publication & Editorial",
    description: "Dedicated toolchain for editorial book layout, multi-column print publication, and custom type design.",
    items: [
      {
        name: "Adobe InDesign",
        level: "Daily Driver",
        description: "Publication editorial grids, master pages, brand guideline books, and print production.",
      },
      {
        name: "Glyphs / FontLab",
        level: "Advanced",
        description: "Typeface development, custom letterforms, variable font axes, and ligature mastering.",
      },
      {
        name: "Adobe Photoshop",
        level: "Daily Driver",
        description: "High-DPI compositing, publication image treatment, textural overlays, and print mockups.",
      },
      {
        name: "Lightroom Classic",
        level: "Advanced",
        description: "Color grading, tonal curve adjustments, and visual editorial curation.",
      },
    ],
  },
];

export function StackSection() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const { scale, opacity } = useSectionScrollTransition(sectionRef);

  return (
    <section 
      ref={sectionRef}
      id="stack" 
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 scroll-mt-24 overflow-hidden"
    >
      <motion.div 
        style={{ scale, opacity }} 
        className="origin-center w-full will-change-transform"
      >
        {/* Header */}
        <div className="space-y-4 max-w-2xl mb-14">
          <h2 className="text-4xl sm:text-6xl font-normal tracking-tight text-black dark:text-white xanh-mono-regular">
            Design & Creative Stack
          </h2>
          <p className="text-black dark:text-neutral-300 text-base sm:text-lg xanh-mono-regular-italic leading-snug">
            The specialized software, typography tools, and workflow systems I rely on to craft visual identities, publications, and brand experiences.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-12">
          {STACK_CATEGORIES.map((cat, catIdx) => (
            <div key={catIdx} className="space-y-5">
              <div className="pb-2">
                <h3 className="text-xl sm:text-2xl font-normal text-black dark:text-neutral-100 xanh-mono-regular">
                  {cat.title}
                </h3>
                <p className="text-sm text-black dark:text-neutral-400 mt-1">
                  {cat.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cat.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="p-5 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/60 backdrop-blur-sm transition-all duration-200 hover:border-black dark:hover:border-neutral-700 hover:shadow-md flex flex-col justify-between group"
                  >
                    <div className="space-y-3">
                      {/* Top Row: Official Full-Colour Brand Logo beside Tool Name */}
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3 min-w-0">
                          {/* Logo Container (Square) */}
                          <div className="w-10 h-10 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center shrink-0 transition-colors group-hover:border-neutral-400 dark:group-hover:border-neutral-700 shadow-xs">
                            {renderToolLogo(item.name)}
                          </div>
                          <div className="min-w-0">
                            <h4 className="font-medium text-base text-black dark:text-white truncate">
                              {item.name}
                            </h4>
                            <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
                              {item.level}
                            </span>
                          </div>
                        </div>

                        <span className="hidden sm:inline-block text-[11px] font-mono px-2 py-0.5 rounded-full border border-neutral-300 dark:border-neutral-800 bg-transparent text-black dark:text-neutral-300 shrink-0">
                          {item.level}
                        </span>
                      </div>

                      <p className="text-sm text-black dark:text-neutral-300 leading-snug pt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
