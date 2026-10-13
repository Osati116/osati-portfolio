export interface ProjectItem {
  id: string;
  title: string;
  year: string;
  imageUrl: string;
  description?: string;
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
    tag: ".../2025",
    coverImage: "/works/brand-identity-1.png",
    subtitle: "Visual systems & Monomarks",
    description: "Complete visual identity design, comprehensive design tokens, embossed stationery, and spatial monomarks engineered for enduring recognition.",
    projects: [
      {
        id: "bi-1",
        title: "Heraldic Quadrant Emblem",
        year: "2025",
        imageUrl: "/works/brand-identity-1.png",
        description: "Four-quadrant institutional emblem combining heritage, discovery, and modern iconography.",
      },
      {
        id: "bi-2",
        title: "DK Geometric Monogram",
        year: "2025",
        imageUrl: "/works/brand-identity-2.png",
        description: "Fluid dual-letterform identity featuring warm-to-cool multi-hue radial gradient contours.",
      },
      {
        id: "bi-3",
        title: "Solace Living Mark",
        year: "2024",
        imageUrl: "/works/brand-identity-3.png",
        description: "Minimalist architectural logomark blending residential geometry with morning sunburst.",
      },
      {
        id: "bi-4",
        title: "Sora Creative Monogram",
        year: "2023",
        imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
        description: "Dynamic responsive mark adapting across print, signage, and screen.",
      },
    ],
  },
  {
    slug: "illustration",
    name: "Illustration",
    tag: ".../2024",
    coverImage: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
    subtitle: "Monochrome vectors & silhouettes",
    description: "Handcrafted high-contrast vector studies, architectural forms, and abstract silhouettes exploring light, shadow, and negative space.",
    projects: [
      {
        id: "il-1",
        title: "Chiaroscuro Silhouette Studies",
        year: "2024",
        imageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
        description: "Monochrome contrast studies investigating silhouette geometry and negative space.",
      },
      {
        id: "il-2",
        title: "Metropolis Vector Geometry",
        year: "2024",
        imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
        description: "Abstract architectural isometric artwork rendered with mathematical precision.",
      },
      {
        id: "il-3",
        title: "Botanical Shadows Series",
        year: "2023",
        imageUrl: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1200&q=80",
        description: "Minimalist organic silhouette series inspired by Japanese ink traditions.",
      },
      {
        id: "il-4",
        title: "Brutalist Monolith Forms",
        year: "2023",
        imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
        description: "Heavy concrete geometric forms captured in minimalist line art.",
      },
    ],
  },
  {
    slug: "web-design",
    name: "Web Design",
    tag: ".../2025",
    coverImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    subtitle: "Digital experiences & interface design",
    description: "Responsive web design, digital architecture, interactive prototypes, and modern editorial web experiences built with clean visual hierarchy.",
    projects: [
      {
        id: "wd-1",
        title: "Kroma Studio Web Experience",
        year: "2025",
        imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
        description: "Editorial interactive portfolio and spatial web layout for an architecture studio.",
      },
      {
        id: "wd-2",
        title: "Vesper Editorial Digital Platform",
        year: "2024",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        description: "High-contrast editorial web publication with fluid typography and dark mode systems.",
      },
      {
        id: "wd-3",
        title: "Brutalist Archive Web Experience",
        year: "2023",
        imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
        description: "Minimalist web archive exploring raw grid geometries and reactive micro-interactions.",
      },
      {
        id: "wd-4",
        title: "Stanza Publishing Digital Showcase",
        year: "2023",
        imageUrl: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80",
        description: "Modern digital catalog and interactive reading interface for indie art books.",
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
    tag: ".../2024",
    coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80",
    subtitle: "Editorial books & Zines",
    description: "Curated print publication design, multi-column editorial layout grids, hardcover monograph packaging, and brutalist design zines.",
    projects: [
      {
        id: "pb-1",
        title: "Archiv Scandinavian Monographs",
        year: "2024",
        imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80",
        description: "Hardcover editorial book design featuring Swiss typographic grid structures.",
      },
      {
        id: "pb-2",
        title: "Form & Void Magazine No. 03",
        year: "2024",
        imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80",
        description: "Brutalist typography zine with multi-column layouts and matte paper stock.",
      },
      {
        id: "pb-3",
        title: "Neue Spatial Journal",
        year: "2023",
        imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80",
        description: "Architectural bi-annual print edition with foil-stamped monochrome covers.",
      },
      {
        id: "pb-4",
        title: "Typographic Manifesto Folio",
        year: "2023",
        imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
        description: "Limited-run boxed collection of experimental typographic broadsides.",
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
