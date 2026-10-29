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
    coverImage: "/works/web-design/design-kitchen-hero.png",
    subtitle: "Digital experiences & interface design",
    description: "Responsive web design, digital architecture, interactive prototypes, and modern editorial web experiences built with clean visual hierarchy.",
    projects: [
      {
        id: "wd-design-kitchen",
        title: "Design Kitchen Studio",
        year: "2026",
        imageUrl: "/works/web-design/design-kitchen-hero.png",
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
    slug: "creative-and-marketing-design",
    name: "Creative and Marketing Design",
    tag: ".../2026",
    coverImage: "/works/creative-marketing/judah-1.png",
    subtitle: "Campaign flyers & promotional graphics",
    description: "Promotional event flyers, social media campaigns, brand marketing collateral, and commercial visual designs.",
    projects: [
      {
        id: "cmd-flyer-2",
        title: "Campaign Flyer",
        year: "2026",
        imageUrl: "/works/creative-marketing/flyer-2.png",
        aspectRatio: "1080/1350",
      },
      {
        id: "cmd-celebeens",
        title: "Celebeens Event Flyer",
        year: "2026",
        imageUrl: "/works/creative-marketing/celebeens.png",
        aspectRatio: "1080/1350",
      },
      {
        id: "cmd-ese",
        title: "Ese Campaign Graphic",
        year: "2026",
        imageUrl: "/works/creative-marketing/ese.png",
        aspectRatio: "1080/1350",
      },
      {
        id: "cmd-birthday",
        title: "Celebration Flyer",
        year: "2026",
        imageUrl: "/works/creative-marketing/birthday-flyer.png",
        aspectRatio: "1080/1350",
      },
      {
        id: "cmd-product",
        title: "Product Promotional Graphic",
        year: "2026",
        imageUrl: "/works/creative-marketing/product.png",
        aspectRatio: "1/1",
      },
      {
        id: "cmd-ford",
        title: "Ford Campaign Graphic",
        year: "2026",
        imageUrl: "/works/creative-marketing/ford.png",
        aspectRatio: "1/1",
      },
      {
        id: "cmd-judah",
        title: "Judah Brand Flyer",
        year: "2026",
        imageUrl: "/works/creative-marketing/judah-1.png",
        aspectRatio: "1/1",
      },
    ],
  },
  {
    slug: "publication",
    name: "Publication",
    tag: ".../2026",
    coverImage: "/works/publication/charis-cover.jpg",
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
  if (
    normalized === "marketing-design" ||
    normalized === "marketing" ||
    normalized === "creative-marketing" ||
    normalized === "creative-and-marketing"
  ) {
    return PORTFOLIO_CATEGORIES.find((cat) => cat.slug === "creative-and-marketing-design");
  }
  return PORTFOLIO_CATEGORIES.find((cat) => cat.slug === slug);
}
