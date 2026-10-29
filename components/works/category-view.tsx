"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { PortfolioCategory, ProjectItem } from "@/lib/portfolio-data";
import { renderStackIcon } from "@/components/icons/tech-stack-icons";
import { cn } from "@/lib/utils";

interface CategoryViewProps {
  category: PortfolioCategory;
  allCategories: PortfolioCategory[];
}

function ProjectCard({ project, onSelect }: { project: ProjectItem; onSelect: () => void }) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });

  // Smooth kinetic scroll zoom for individual project cards and images
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [0.45, 1]);

  const aspectRatio = project.aspectRatio || "16/11";

  return (
    <motion.div 
      ref={cardRef} 
      style={{ scale, opacity }} 
      onClick={onSelect}
      className="group flex flex-col origin-center cursor-pointer"
    >
      {/* Project Image Card with proportional aspect ratio and sharp 90° corners */}
      <div 
        className="relative w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900 shadow-xs transition-all duration-300 group-hover:shadow-md origin-center"
        style={{ 
          aspectRatio,
          backgroundColor: project.bgColor || undefined
        }}
      >
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          unoptimized
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className={cn(
            "transition-transform duration-700 group-hover:scale-105",
            project.bgColor ? "object-contain" : "object-cover object-top"
          )}
        />
        <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-black/75 backdrop-blur-md text-white text-[10px] font-mono tracking-wider">
          {project.year}
        </div>
      </div>

      {/* Left-Aligned Information Underneath */}
      <div className="pt-3 text-left space-y-1">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-base sm:text-lg font-normal text-black dark:text-white xanh-mono-regular group-hover:opacity-75 transition-opacity truncate">
            {project.title}
          </h3>
          <ArrowUpRight className="w-4 h-4 text-black dark:text-white shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        {project.description ? (
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-2">
            {project.description}
          </p>
        ) : null}
      </div>
    </motion.div>
  );
}

export function CategoryView({ category, allCategories }: CategoryViewProps) {
  const [selectedProject, setSelectedProject] = React.useState<ProjectItem | null>(null);
  const isIllustration = category.slug === "illustration";
  const headerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start end", "center center"],
  });

  const headerScale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.85], [0.4, 1]);

  // Handle ESC and Arrow keys for modal
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      } else if (isIllustration && selectedProject) {
        const currentIndex = category.projects.findIndex((p) => p.id === selectedProject.id);
        if (currentIndex !== -1) {
          if (e.key === "ArrowRight") {
            const nextIndex = (currentIndex + 1) % category.projects.length;
            setSelectedProject(category.projects[nextIndex]);
          } else if (e.key === "ArrowLeft") {
            const prevIndex = (currentIndex - 1 + category.projects.length) % category.projects.length;
            setSelectedProject(category.projects[prevIndex]);
          }
        }
      }
    };
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("modal-open");
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.body.style.overflow = "auto";
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject, isIllustration, category.projects]);

  return (
    <div className="w-full">
      {/* Navigation Breadcrumb & Back Link */}
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black dark:border-neutral-800 bg-transparent text-xs xanh-mono-regular text-black dark:text-neutral-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </Link>

        {/* Category Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {allCategories.map((cat) => {
            const isActive = cat.slug === category.slug;
            return (
              <Link
                key={cat.slug}
                href={`/works/${cat.slug}`}
                className={cn(
                  "px-3.5 py-1.5 text-xs rounded-full border transition-all xanh-mono-regular cursor-pointer",
                  isActive
                    ? "border-black dark:border-white bg-black dark:bg-white text-white dark:text-black font-semibold"
                    : "border-neutral-300 dark:border-neutral-800 text-black dark:text-neutral-300 hover:border-black dark:hover:border-white bg-transparent"
                )}
              >
                {cat.name}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Category Header with Scroll Zoom */}
      <motion.div 
        ref={headerRef}
        style={{ scale: headerScale, opacity: headerOpacity }}
        className="space-y-3 max-w-3xl mb-10 sm:mb-12 origin-left"
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-black dark:text-white xanh-mono-regular">
          {category.name}
        </h1>

        <p className="text-base sm:text-lg text-black dark:text-neutral-300 xanh-mono-regular-italic leading-relaxed">
          {category.description}
        </p>
      </motion.div>

      {/* Projects Grid with Proportional Responsive Layout */}
      {isIllustration ? (
        /* Tight Gallery View (Google Photos / Phone Camera Roll style with 0 clipping) */
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1.5 sm:gap-2 md:gap-2.5">
          {category.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, delay: idx * 0.04 }}
              onClick={() => setSelectedProject(project)}
              className="group relative cursor-pointer overflow-hidden bg-neutral-100 dark:bg-neutral-900 shadow-2xs hover:shadow-md transition-all duration-300 flex items-center justify-center rounded-sm"
              style={{
                aspectRatio: project.aspectRatio || "1/1",
                backgroundColor: project.bgColor || undefined,
              }}
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={1024}
                height={1024}
                unoptimized
                priority={idx < 4}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              />
              {/* Clean minimal hover illumination */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 dark:group-hover:bg-white/5 transition-colors pointer-events-none" />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="grid gap-5 sm:gap-6 items-start grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {category.projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onSelect={() => setSelectedProject(project)}
            />
          ))}
        </div>
      )}

      {/* Immersive Project Lightbox Modal with Backdrop */}
      <AnimatePresence>
        {selectedProject && (
          isIllustration ? (
            /* Minimalist Maximized Artwork View (Shows ONLY the Image, original aspect ratio, no clipping) */
            <motion.div
              key={`illustration-maximized-${selectedProject.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/92 dark:bg-black/95 backdrop-blur-md cursor-zoom-out select-none"
              onClick={() => setSelectedProject(null)}
            >
              {/* Minimal Floating Pure 'X' Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[110] p-2.5 text-white/70 hover:text-red-500 transition-colors duration-75 cursor-pointer bg-transparent border-0 group"
                aria-label="Close maximized view"
                data-cursor-close="true"
              >
                <X className="w-6 h-6 sm:w-7 sm:h-7 transition-colors duration-75 group-hover:text-red-500" />
              </button>

              {/* Maximized Image (Original Aspect Ratio, No Clipping) */}
              <motion.div
                initial={{ scale: 0.94, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.94, opacity: 0 }}
                transition={{ type: "spring", damping: 28, stiffness: 350 }}
                className="relative max-w-[94vw] max-h-[92vh] flex items-center justify-center cursor-default"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  width={1400}
                  height={1400}
                  unoptimized
                  priority
                  sizes="95vw"
                  className="max-h-[90vh] max-w-[94vw] w-auto h-auto object-contain block shadow-2xl rounded-sm"
                />
              </motion.div>
            </motion.div>
          ) : (
          <motion.div
            key={`modal-backdrop-${selectedProject.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/80 dark:bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            {selectedProject.fullScreenshotUrl ? (
              /* Sized Container Popup matching user red border: ~58% Mockup + ~42% Details, Zero Black Lines in Light Mode */
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 10 }}
                transition={{ type: "spring", stiffness: 350, damping: 30, mass: 0.8 }}
                className="relative bg-white dark:bg-neutral-900 rounded-2xl w-full max-w-4xl xl:max-w-5xl h-[88vh] max-h-[820px] flex flex-col lg:flex-row shadow-2xl overflow-hidden border-0 dark:border dark:border-neutral-800 will-change-transform"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Left Column: Mock Browser Container (Shifted to Left, Scrollable Display) */}
                <div className="w-full lg:w-[58%] xl:w-[59%] h-[46vh] sm:h-[50vh] lg:h-full flex flex-col border-none dark:border-r dark:border-neutral-800 shrink-0 bg-neutral-100/60 dark:bg-neutral-950 overflow-hidden">
                  {/* Mock Browser Header Bar (Zero Black Lines in Light Mode) */}
                  <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-none dark:border-b dark:border-neutral-800 bg-neutral-100/80 dark:bg-neutral-900/60 shrink-0">
                    <div className="flex items-center space-x-2">
                      <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
                      <span className="w-3 h-3 rounded-full bg-amber-400 inline-block"></span>
                      <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                    </div>

                    {/* Mock Address Bar */}
                    <a
                      href={selectedProject.liveUrl || "https://www.designkitchen.site"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white text-xs font-mono transition-colors shadow-2xs cursor-pointer border-0"
                      title="Open live website"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      <span className="truncate max-w-[180px] sm:max-w-none">www.designkitchen.site</span>
                    </a>

                    {/* Mobile Close Button */}
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="lg:hidden text-neutral-500 hover:text-red-600 dark:hover:text-red-400 text-xs font-semibold flex items-center gap-1 cursor-pointer transition-colors duration-75 p-1 group"
                      aria-label="Close project view"
                      data-cursor-close="true"
                    >
                      <X className="w-5 h-5 transition-colors duration-75 group-hover:text-red-600 dark:group-hover:text-red-400" />
                    </button>
                    <div className="hidden lg:block w-4"></div>
                  </div>

                  {/* Scrollable Screenshot Area */}
                  <div className="flex-1 overflow-y-auto overscroll-contain bg-neutral-100 dark:bg-neutral-950 scrollbar-thin">
                    <img
                      src={selectedProject.fullScreenshotUrl}
                      alt={selectedProject.title}
                      loading="eager"
                      decoding="sync"
                      className="w-full h-auto block select-none"
                    />
                  </div>
                </div>

                {/* Right Column: Project Details Panel (Zero Black Lines in Light Mode) */}
                <div className="w-full lg:w-[42%] xl:w-[41%] flex-1 lg:h-full flex flex-col justify-between overflow-y-auto p-5 sm:p-6 md:p-7 bg-white dark:bg-neutral-900 scrollbar-thin border-none">
                  <div className="space-y-5">
                    {/* Panel Top Header Bar with Close Button (Zero Black Lines in Light Mode) */}
                    <div className="flex items-center justify-between pb-3.5 border-none dark:border-b dark:border-neutral-800">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 font-medium">
                        Project Details
                      </span>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="p-1 -mr-1 text-neutral-400 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-75 cursor-pointer border-0 bg-transparent group"
                        aria-label="Close project view"
                        data-cursor-close="true"
                      >
                        <X className="w-5 h-5 transition-colors duration-75 group-hover:text-red-600 dark:group-hover:text-red-400" />
                      </button>
                    </div>

                    {/* Project Title */}
                    <div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-normal text-black dark:text-white xanh-mono-regular leading-snug">
                        {selectedProject.title}
                      </h3>
                    </div>

                    {/* About Section */}
                    <div className="space-y-2">
                      <h4 className="text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500 xanh-mono-regular font-semibold">
                        About
                      </h4>
                      <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 xanh-mono-regular leading-relaxed">
                        {selectedProject.about || selectedProject.description || "A modern responsive web design project."}
                      </p>
                    </div>

                    {/* Stack Section (Only Icons Displayed, Zero Black Lines in Light Mode) */}
                    <div className="space-y-2.5">
                      <h4 className="text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500 xanh-mono-regular font-semibold">
                        Stack
                      </h4>
                      {/* Where only icons will be displayed */}
                      <div className="flex flex-wrap items-center gap-2.5 pt-0.5">
                        {(selectedProject.stack || [
                          "Photoshop",
                          "React",
                          "Next.js",
                          "Tailwind CSS",
                          "TypeScript",
                          "Framer Motion",
                          "Vercel",
                        ]).map((tech) => (
                          <div
                            key={tech}
                            title={tech}
                            aria-label={tech}
                            className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-neutral-100 dark:bg-neutral-800/80 flex items-center justify-center p-2 transition-all duration-300 hover:scale-110 hover:shadow-md cursor-pointer border-0 shadow-none dark:border dark:border-neutral-700/80 group"
                          >
                            <div className="w-full h-full flex items-center justify-center text-neutral-800 dark:text-neutral-200 transition-transform duration-300 group-hover:scale-105">
                              {renderStackIcon(tech)}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Date Section */}
                    <div className="space-y-1">
                      <h4 className="text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500 xanh-mono-regular font-semibold">
                        Date
                      </h4>
                      <p className="text-sm sm:text-base text-black dark:text-white xanh-mono-regular">
                        {selectedProject.year}
                      </p>
                    </div>
                  </div>

                  {/* Footer Action Button (Zero Black Lines in Light Mode) */}
                  {selectedProject.liveUrl && (
                    <div className="pt-4 mt-4 border-none dark:border-t dark:border-neutral-800">
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-full py-3 px-5 rounded-full bg-black dark:bg-white text-white dark:text-black xanh-mono-regular text-xs sm:text-sm flex items-center justify-center gap-2 hover:opacity-85 transition-all shadow-sm cursor-pointer border-0"
                      >
                        <span>Visit Live Website</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ) : (
              /* Standard Lightbox Display (Zero Black Lines in Light Mode) */
              <div
                className="relative max-w-5xl w-full max-h-[92vh] m-auto flex flex-col bg-white dark:bg-neutral-900 overflow-hidden shadow-2xl border-none dark:border dark:border-neutral-800 rounded-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Image Display */}
                <div 
                  className="relative w-full aspect-[16/11] max-h-[72vh] overflow-hidden"
                  style={{
                    backgroundColor: selectedProject.bgColor || "#0a0a0a"
                  }}
                >
                  <Image
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    fill
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    className="object-contain"
                    priority
                  />
                  <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-xs font-mono tracking-wider">
                    {selectedProject.year}
                  </div>
                </div>

                {/* Modal Metadata Footer (Zero Black Lines in Light Mode) */}
                <div className="p-5 sm:p-6 flex items-start justify-between gap-4 border-none dark:border-t dark:border-neutral-800 bg-white dark:bg-neutral-900">
                  <div className="space-y-1.5">
                    <h3 className="text-lg sm:text-xl font-normal text-black dark:text-white xanh-mono-regular">
                      {selectedProject.title}
                    </h3>
                    {selectedProject.description && (
                      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">
                        {selectedProject.description}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 text-neutral-500 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-75 cursor-pointer shrink-0 group"
                    aria-label="Close modal"
                    data-cursor-close="true"
                  >
                    <X className="w-5 h-5 transition-colors duration-75 group-hover:text-red-600 dark:group-hover:text-red-400" />
                  </button>
                </div>
              </div>
            )}
          </motion.div>
          )
        )}
      </AnimatePresence>

      {/* Bottom Navigation */}
      <div className="mt-20 pt-8 flex items-center justify-start">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-black dark:border-neutral-800 bg-transparent text-xs xanh-mono-regular text-black dark:text-neutral-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
}
