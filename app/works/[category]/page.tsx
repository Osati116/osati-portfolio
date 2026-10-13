import * as React from "react";
import { notFound } from "next/navigation";
import { PORTFOLIO_CATEGORIES, getCategoryBySlug } from "@/lib/portfolio-data";
import { TheInfiniteGrid } from "@/components/ui/the-infinite-grid";
import { CategoryView } from "@/components/works/category-view";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export function generateStaticParams() {
  const baseSlugs = PORTFOLIO_CATEGORIES.map((cat) => ({
    category: cat.slug,
  }));
  return [
    ...baseSlugs,
    { category: "fonts" },
    { category: "web" },
  ];
}

export default async function CategoryPage({ params }: PageProps) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  return (
    <div className="relative w-full min-h-screen flex flex-col bg-white dark:bg-black transition-colors duration-300">
      {/* Persistent Infinite Grid Background */}
      <TheInfiniteGrid monochrome={true} fixedBackground={true} />

      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 flex-1">
        <CategoryView 
          category={category} 
          allCategories={PORTFOLIO_CATEGORIES} 
        />
      </main>
    </div>
  );
}
