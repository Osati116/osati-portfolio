import type { Metadata, Viewport } from "next";
import { Geist, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { CursorFollower } from "@/components/cursor-follower";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://osati-portfolio.vercel.app"),
  title: {
    default: "Osati | Portfolio & Creative Works",
    template: "%s | Osati",
  },
  description: "Personal portfolio, design works, and creative stack of Osahumhen Timothy Iyamah — Creative Director & Brand Strategist.",
  keywords: [
    "Osati",
    "Osahumhen Timothy Iyamah",
    "Creative Director",
    "Brand Strategist",
    "Visual Identity",
    "Design Engineering",
    "Portfolio",
  ],
  authors: [{ name: "Osahumhen Timothy Iyamah", url: "https://github.com/Osati116" }],
  creator: "Osahumhen Timothy Iyamah",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://osati-portfolio.vercel.app",
    siteName: "Osati Portfolio",
    title: "Osati | Portfolio & Creative Works",
    description: "Personal portfolio, design works, and creative stack of Osahumhen Timothy Iyamah — Creative Director & Brand Strategist.",
    images: [
      {
        url: "/portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Osahumhen Timothy Iyamah - Creative Director & Brand Strategist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Osati | Portfolio & Creative Works",
    description: "Personal portfolio, design works, and creative stack of Osahumhen Timothy Iyamah.",
    creator: "@osati116",
    images: ["/portrait.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${outfit.variable} dark h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <CursorFollower />
          <Navbar />
          <main className="flex-1 flex flex-col pt-16">
            {children}
          </main>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
