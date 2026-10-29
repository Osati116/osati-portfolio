import { MetadataRoute } from "next";
import { PORTFOLIO_CATEGORIES } from "@/lib/portfolio-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://osati-portfolio.vercel.app";

  const staticPages = [
    "",
    "/about",
    "/works",
    "/photos",
    "/stack",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const categoryPages = PORTFOLIO_CATEGORIES.map((category) => ({
    url: `${baseUrl}/works/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...categoryPages];
}
