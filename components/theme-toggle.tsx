"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div 
        className="w-10 h-10 rounded-full border border-black dark:border-neutral-800 bg-transparent animate-pulse" 
        aria-hidden="true" 
      />
    );
  }

  const isDark = resolvedTheme === "dark" || theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative p-2.5 rounded-full border border-black dark:border-neutral-800 bg-transparent text-black dark:text-white hover:opacity-75 transition-all duration-300 active:scale-95 shadow-none focus:outline-none focus-visible:ring-1 focus-visible:ring-black dark:focus-visible:ring-white cursor-pointer"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <Sun
          className={`w-4 h-4 text-black dark:text-white transition-all duration-300 transform ${
            isDark
              ? "rotate-90 scale-0 opacity-0 absolute"
              : "rotate-0 scale-100 opacity-100"
          }`}
        />
        <Moon
          className={`w-4 h-4 text-black dark:text-white transition-all duration-300 transform ${
            isDark
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0 absolute"
          }`}
        />
      </div>
    </button>
  );
}
