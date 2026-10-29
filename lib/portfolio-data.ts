export interface ProjectItem {
  id: string;
  title: string;
  year: string;
  imageUrl: string;
  fullScreenshotUrl?: string;
  description?: string;
  about?: string;
  stack?: string[];
  aspectRatio?: string;
  bgColor?: string;
  liveUrl?: string;
  pages?: string[];
}

export interface PortfolioCategory {
  slug: string;
  name: string;
  tag: string;
  coverImage: string;
  subtitle: string;
  description: string;
  projects: ProjectItem[];
}

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  {
    slug: "brand-identity",
    name: "Brand Identity",
    tag: ".../2024",
    coverImage: "/works/techhack.png",
    subtitle: "Visual systems & Monomarks",
    description: "Complete visual identity design, comprehensive design tokens, embossed stationery, and spatial monomarks engineered for enduring recognition.",
    projects: [
      {
        id: "bi-techhack",
        title: "TechHack",
        year: "2024",
        imageUrl: "/works/techhack.png",
        description: "Minimalist technology logomark featuring a bold dual-tone laptop silhouette designed for software developers and modern digital platforms.",
      },
      {
        id: "bi-fun-french-academy",
        title: "Fun French Academy",
        year: "2023",
        imageUrl: "/works/fun-french-academy.png",
        description: "Vibrant four-quadrant educational crest synthesizing academic graduation, the Eiffel Tower, heraldic fleur-de-lis, and creative curiosity.",
      },
      {
        id: "bi-ziv-cleaning",
        title: "ZIV Cleaning Co.",
        year: "2024",
        imageUrl: "/works/ziv-cleaning.png",
        description: "Pristine architectural sanctuary mark uniting a residential shelter outline with a bright rising sunburst for premium environmental care.",
      },
      {
        id: "bi-design-kitchen",
        title: "Design Kitchen Studio",
        year: "2023",
        imageUrl: "/works/design-kitchen.png",
        description: "Fluid geometric 'DK' monogram boasting chromatic gradient contours for an avant-garde creative and architectural practice.",
      },
    ],
  },
  {
    slug: "illustration",
    name: "Illustration",
    tag: ".../2024",
    coverImage: "/works/illustrations/urban-designer.png",
    subtitle: "Character vector art & digital portraits",
    description: "Original character design, digital vector portraits, expressive pop-culture artwork, and stylized editorial illustrations.",
    projects: [
      {
        id: "il-urban-designer",
        title: "Urban Designer Ape",
        year: "2024",
        imageUrl: "/works/illustrations/urban-designer.png",
        description: "Stylized streetwear ape character in red hoodie against high-contrast monochrome and golden skyline architecture.",
        aspectRatio: "1/1",
        bgColor: "#000000",
      },
      {
        id: "il-drip-portrait-female",
        title: "Joyful Drip Portrait",
        year: "2023",
        imageUrl: "/works/illustrations/drip-portrait-female-v2.jpg",
        description: "Expressive minimalist vector portrait featuring warm skin tones, chic eyewear, and signature melting neck contour.",
        aspectRatio: "1/1",
        bgColor: "#ffffff",
      },
      {
        id: "il-drip-portrait-male",
        title: "Shaded Drip Portrait",
        year: "2024",
        imageUrl: "/works/illustrations/drip-portrait-male-v2.jpg",
        description: "Cool contemporary character illustration pairing metallic sunglasses and earbud with fluid dripping neckline geometry.",
        aspectRatio: "1/1",
        bgColor: "#ffffff",
      },
      {
        id: "il-expressive-portrait",
        title: "Ecstatic Expression",
        year: "2023",
        imageUrl: "/works/illustrations/expressive-portrait-v2.png",
        description: "High-energy vector caricature exploring exaggerated facial anatomy, ecstatic laughter, and rich chromatic teal contrast.",
        aspectRatio: "1/1",
        bgColor: "#57a1ab",
      },
    ],
  },
  {
    slug: "web-design",
    name: "Web Design",
    tag: ".../2026",
    coverImage: "/works/web-design/design-kitchen-studio.jpg",
    subtitle: "Digital experiences & interface design",
    description: "Responsive web design, digital architecture, interactive prototypes, and modern editorial web experiences built with clean visual hierarchy.",
    projects: [
      {
        id: "wd-design-kitchen",
        title: "Design Kitchen Studio",
        year: "2026",
        imageUrl: "/works/web-design/design-kitchen-studio.jpg",
        fullScreenshotUrl: "/works/web-design/design-kitchen-full-hd.jpg",
        liveUrl: "https://www.designkitchen.site",
        description: "Full-page digital experience and design system landing page for Design Kitchen Studio.",
        about: "A bespoke full-page digital experience engineered for Design Kitchen Studio—an avant-garde multidisciplinary creative practice. Designed with high-contrast architectural grids, fluid editorial typography, responsive layouts, and interactive visual hierarchy.",
        stack: ["Photoshop", "React", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion", "Vercel"],
        aspectRatio: "16/11",
      },
    ],
  },
  {
    slug: "marketing-design",
    name: "Marketing Design",
    tag: ".../2024",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    subtitle: "Campaigns & Visual rollouts",
    description: "Comprehensive marketing campaign design, key visuals, digital billboard rollouts, and launch assets driving brand adoption and conversion.",
    projects: [
      {
        id: "md-1",
        title: "Chronos Global Launch",
        year: "2024",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        description: "Key visuals, outdoor digital displays, and high-impact digital campaign.",
      },
      {
        id: "md-2",
        title: "Nordic Sound Festival Campaign",
        year: "2024",
        imageUrl: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
        description: "Event poster system, experiential signage, and social media collateral.",
      },
      {
        id: "md-3",
        title: "Lumina Visual Campaign",
        year: "2023",
        imageUrl: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80",
        description: "Digital product marketing suite with interactive product showroom teasers.",
      },
      {
        id: "md-4",
        title: "Kinesis Sport Visual Suite",
        year: "2023",
        imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
        description: "Dynamic athletic brand campaign featuring high-contrast typography in motion.",
      },
    ],
  },
  {
    slug: "publication",
    name: "Publication",
    tag: ".../2026",
    coverImage: "/works/publication/the-chiefs-daughter-cover.jpg",
    subtitle: "Editorial book design & story layout",
    description: "Curated editorial book design, custom cover illustration, typographic interior layouts, and illustrated story pages.",
    projects: [
      {
        id: "pb-the-chiefs-daughter",
        title: "The Chief's Daughter",
        year: "2026",
        imageUrl: "/works/publication/the-chiefs-daughter-cover.jpg",
        aspectRatio: "870/1024",
        description: "Editorial book design, illustrated cover art, and interior page layouts for The Chief's Daughter.",
        pages: [
          "/works/publication/page-16.jpg",
          "/works/publication/page-18.png",
          "/works/publication/page-31.jpg",
          "/works/publication/page-36.png",
        ],
      },
      {
        id: "pb-charis-cover-design",
        title: "Cover Design",
        year: "2026",
        imageUrl: "/works/publication/charis-cover.jpg",
        aspectRatio: "721/1024",
        description: "Editorial cover design and visual typography for Charis Magazine.",
      },
    ],
  },
];

export function getCategoryBySlug(slug: string): PortfolioCategory | undefined {
  const normalized = slug.toLowerCase();
  if (normalized === "fonts" || normalized === "web") {
    return PORTFOLIO_CATEGORIES.find((cat) => cat.slug === "web-design");
  }
  return PORTFOLIO_CATEGORIES.find((cat) => cat.slug === slug);
}
