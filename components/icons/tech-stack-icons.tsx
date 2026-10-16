"use client";

import * as React from "react";

export function FigmaIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 38 57" className={className} fill="none">
      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
      <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 38 0 28.5 0H19Z" fill="#FF7262" />
      <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
      <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
    </svg>
  );
}

export function ReactIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} fill="none">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function NextjsIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0zm5.545 16.993-5.334-6.863v6.863H10.8V7.007h1.411l5.334 6.863V7.007h1.41v9.986h-1.41z" />
    </svg>
  );
}

export function TailwindIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#38BDF8">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.975 12 6.001 12z" />
    </svg>
  );
}

export function TypescriptIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <rect width="24" height="24" rx="4.5" fill="#3178C6" />
      <path d="M12.24 13.43H9.29V20H7.13v-6.57H4.2v-1.78h8.04v1.78zm3.48 4.25c.53.3 1.19.49 1.94.49 1.08 0 1.69-.49 1.69-1.23 0-.67-.44-1.07-1.47-1.46-1.54-.58-2.52-1.42-2.52-2.73 0-1.64 1.34-2.88 3.42-2.88.94 0 1.7.2 2.23.47l-.54 1.72a3.86 3.86 0 0 0-1.74-.42c-.93 0-1.42.45-1.42 1.05 0 .61.46.96 1.57 1.39 1.56.61 2.45 1.48 2.45 2.82 0 1.8-1.42 2.94-3.66 2.94-1.08 0-2.02-.27-2.61-.62l.63-1.67z" fill="white" />
    </svg>
  );
}

export function FramerMotionIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
    </svg>
  );
}

export function VercelIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="m12 1.608 12 20.784H0Z" />
    </svg>
  );
}

export function renderStackIcon(name: string, className = "w-6 h-6") {
  const normalized = name.toLowerCase().trim();
  switch (normalized) {
    case "figma":
      return <FigmaIcon className={className} />;
    case "react":
      return <ReactIcon className={className} />;
    case "next.js":
    case "nextjs":
    case "next":
      return <NextjsIcon className={className} />;
    case "tailwind css":
    case "tailwind":
    case "tailwindcss":
      return <TailwindIcon className={className} />;
    case "typescript":
    case "ts":
      return <TypescriptIcon className={className} />;
    case "framer motion":
    case "framer":
      return <FramerMotionIcon className={className} />;
    case "vercel":
      return <VercelIcon className={className} />;
    default:
      return null;
  }
}
