"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, X } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PortfolioCategory, ProjectItem } from "@/lib/portfolio-data";
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
  const headerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start end", "center center"],
  });

  const headerScale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.85], [0.4, 1]);

  // Handle ESC key to dismiss modal
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

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
      <div className={cn(
        "grid gap-5 sm:gap-6 items-start",
        category.slug === "illustration"
          ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      )}>
        {category.projects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onSelect={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Lightbox Modal on Project Click */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          {selectedProject.fullScreenshotUrl ? (
            /* Option 1: Full-Page Image Inside a Scrollable Modal / Lightbox (Browser Frame) */
            <div
              className="relative bg-white dark:bg-neutral-900 rounded-2xl w-full max-w-4xl h-[88vh] sm:h-[85vh] flex flex-col shadow-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header / Mock Browser Bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 shrink-0">
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
                  className="hidden sm:flex items-center gap-1.5 px-4 py-1 rounded-full bg-neutral-200/60 dark:bg-neutral-800/60 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white text-xs font-mono transition-colors cursor-pointer"
                  title="Open live website"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>www.designkitchen.site</span>
                </a>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-neutral-500 hover:text-black dark:hover:text-white text-xs sm:text-sm font-semibold flex items-center gap-1.5 cursor-pointer transition-colors"
                  aria-label="Close modal"
                >
                  <span>✕ Close</span>
                </button>
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

              {/* Bottom Information Footer under the container */}
              <div className="px-4 py-2.5 bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 font-mono shrink-0">
                {selectedProject.liveUrl ? (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 font-medium text-black dark:text-white hover:opacity-70 transition-opacity"
                  >
                    <span>View Website</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ) : (
                  <span className="truncate pr-2 font-medium text-neutral-800 dark:text-neutral-200">
                    {selectedProject.title}
                  </span>
                )}
                <span className="shrink-0 text-[11px]">
                  {selectedProject.year}
                </span>
              </div>
            </div>
          ) : (
            /* Standard Lightbox Display */
            <div
              className="relative max-w-5xl w-full max-h-[92vh] flex flex-col bg-white dark:bg-neutral-900 overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800"
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

              {/* Modal Metadata Footer */}
              <div className="p-5 sm:p-6 flex items-start justify-between gap-4 border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
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
                  className="p-2 text-neutral-500 hover:text-black dark:hover:text-white transition-colors cursor-pointer shrink-0"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

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
