"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PortfolioCategory, ProjectItem } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

interface CategoryViewProps {
  category: PortfolioCategory;
  allCategories: PortfolioCategory[];
}

function ProjectCard({ project }: { project: ProjectItem }) {
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
      className="group flex flex-col origin-center"
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
            project.aspectRatio ? "object-contain" : "object-cover"
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
        {project.description && (
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-2">
            {project.description}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export function CategoryView({ category, allCategories }: CategoryViewProps) {
  const headerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start end", "center center"],
  });

  const headerScale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.85], [0.4, 1]);

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
          />
        ))}
      </div>

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
