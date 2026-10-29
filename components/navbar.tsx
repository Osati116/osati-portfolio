"use client";

import * as React from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { OsatiLogo } from "@/components/logo";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Works", href: "#works", sectionId: "works" },
  { label: "Stack", href: "#stack", sectionId: "stack" },
  { label: "About", href: "#about", sectionId: "about" },
  { label: "Connect", href: "#connect", sectionId: "connect" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = React.useState<string>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Active section ScrollSpy tracking sections on scroll
  React.useEffect(() => {
    const sectionIds = ["home", "works", "stack", "about", "connect"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220; // 220px offset for top viewport recognition
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (sectionId === "home") {
      if (typeof window !== "undefined") {
        try {
          sessionStorage.setItem("scroll_pos_/", "0");
        } catch {
          // Ignore
        }
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.replaceState(null, "", "/");
      setActiveSection("home");
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", `#${sectionId}`);
      setActiveSection(sectionId);
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-3">
        <nav className="relative flex items-center justify-between px-5 py-3 rounded-2xl bg-white/70 dark:bg-black/70 backdrop-blur-md border-0 shadow-none">
          {/* Adaptive Vector SVG Wordmark Logo (scaled to 75%) */}
          <button 
            onClick={() => scrollTo("home")}
            className="flex items-center group transition-transform active:scale-95 cursor-pointer"
            aria-label="Osati Portfolio Home"
          >
            <OsatiLogo className="h-6 sm:h-[27px] w-auto group-hover:opacity-75" />
          </button>

          {/* Desktop Navigation Links with real-time ScrollSpy highlighting (no surrounding rectangles) */}
          <div className="hidden md:flex items-center gap-1 sm:gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(item.sectionId);
                  }}
                  className={cn(
                    "px-3 py-1.5 text-sm font-medium transition-colors duration-200 xanh-mono-regular tracking-wide cursor-pointer",
                    isActive
                      ? "text-black dark:text-white font-semibold"
                      : "text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white"
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Action Bar: Theme Switcher & Mobile Menu Toggle */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                "md:hidden p-2 rounded-full border-0 bg-transparent text-black dark:text-white transition-colors duration-75 cursor-pointer focus:outline-none group",
                mobileMenuOpen ? "hover:text-red-600 dark:hover:text-red-400" : "hover:opacity-70"
              )}
              aria-label={mobileMenuOpen ? "Close Navigation Menu" : "Toggle Navigation Menu"}
              aria-expanded={mobileMenuOpen}
              data-cursor-close={mobileMenuOpen ? "true" : undefined}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-current transition-colors duration-75 group-hover:text-red-600 dark:group-hover:text-red-400" />
              ) : (
                <Menu className="w-5 h-5 text-current" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu with ScrollSpy indicators */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-3 rounded-2xl bg-white dark:bg-black backdrop-blur-2xl border-0 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("home");
                }}
                className={cn(
                  "px-4 py-2.5 text-base font-medium rounded-xl transition-colors xanh-mono-regular cursor-pointer",
                  activeSection === "home"
                    ? "text-black dark:text-white font-semibold"
                    : "text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                )}
              >
                Home
              </a>
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.sectionId;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(item.sectionId);
                    }}
                    className={cn(
                      "px-4 py-2.5 text-base font-medium rounded-xl transition-colors xanh-mono-regular cursor-pointer",
                      isActive
                        ? "text-black dark:text-white font-semibold"
                        : "text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                    )}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
