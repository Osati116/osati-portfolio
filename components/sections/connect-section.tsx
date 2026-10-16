"use client";

import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useSectionScrollTransition } from "@/lib/scroll-transition";

export interface ConnectChannel {
  id: string;
  name: string;
  handle: string;
  href: string;
  actionText: string;
  icon: React.ComponentType<{ className?: string }>;
}

// Official Full-Colour Instagram Logo (2022+ Vibrant Gradient Squircle)
function InstagramFullColorLogo({ className = "w-8 h-8" }: { className?: string }) {
  const gradientIdC = React.useId();
  const gradientIdD = React.useId();

  return (
    <svg viewBox="0 0 132 132" className={className} role="img" aria-label="Instagram">
      <defs>
        <radialGradient
          id={gradientIdC}
          cx="158.429"
          cy="578.088"
          r="65"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 -1.98198 1.8439 0 -1031.402 454.004)"
        >
          <stop offset="0" stopColor="#fd5" />
          <stop offset="0.1" stopColor="#fd5" />
          <stop offset="0.5" stopColor="#ff543e" />
          <stop offset="1" stopColor="#c837ab" />
        </radialGradient>
        <radialGradient
          id={gradientIdD}
          cx="147.694"
          cy="473.455"
          r="65"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(.17394 .86872 -3.5818 .71718 1648.348 -458.493)"
        >
          <stop offset="0" stopColor="#3771c8" />
          <stop offset="0.128" stopColor="#3771c8" />
          <stop offset="1" stopColor="#60f" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Outer Squircle with Instagram Multi-Stop Gradient */}
      <rect width="132" height="132" rx="30" fill={`url(#${gradientIdC})`} />
      <rect width="132" height="132" rx="30" fill={`url(#${gradientIdD})`} />
      {/* Inner White Camera Glyph */}
      <g fill="none" stroke="#ffffff" strokeWidth="9.5">
        <rect x="23" y="23" width="86" height="86" rx="22" />
        <circle cx="66" cy="66" r="22" />
      </g>
      <circle cx="92.5" cy="39.5" r="5.5" fill="#ffffff" />
    </svg>
  );
}

// Official Full-Colour 2026 Gmail Logo (Latest Google Workspace AI-Era Redesign)
function GmailFullColorLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label="Gmail">
      {/* Crisp White Squircle Tile matching Instagram & X */}
      <rect width="24" height="24" rx="5.5" fill="#FFFFFF" />

      <defs>
        <linearGradient
          id="gmail_2026_grad_a"
          x1="165"
          x2="165"
          y1="44"
          y2="166"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(4.5454426,0,0,4.5454426,-36.362684,-118.18025)"
        >
          <stop stopColor="#60d673" />
          <stop offset=".17" stopColor="#42c868" />
          <stop offset=".39" stopColor="#0ebc5f" />
          <stop offset=".62" stopColor="#00a9bb" />
          <stop offset=".86" stopColor="#3c90ff" />
          <stop offset="1" stopColor="#3186ff" />
        </linearGradient>
        <linearGradient
          id="gmail_2026_grad_b"
          x1="8"
          x2="184"
          y1="46.130001"
          y2="46.130001"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(4.5454426,0,0,4.5454426,-36.362684,-118.18025)"
        >
          <stop offset=".08" stopColor="#ff63a0" />
          <stop offset=".3" stopColor="#fc413d" />
          <stop offset=".5" stopColor="#fc413d" />
          <stop offset=".65" stopColor="#fc413d" />
          <stop offset=".72" stopColor="#fc5c30" />
          <stop offset=".86" stopColor="#feb10c" />
          <stop offset=".91" stopColor="#fec700" />
          <stop offset=".96" stopColor="#ffdb0f" />
        </linearGradient>
      </defs>

      <g transform="translate(3.6, 5.32) scale(0.021)">
        <path
          fill="url(#gmail_2026_grad_a)"
          d="M 627.27193,81.819216 H 799.99875 V 581.8179 c 0,30.12265 -24.42266,54.54532 -54.54531,54.54532 h -90.90885 a 27.272655,27.272655 0 0 1 -27.27266,-27.27266 z"
        />
        <path
          fill="#fc413d"
          d="M 172.72768,81.819216 H 8.5692711e-4 V 581.8179 c 0,30.12265 24.42266207289,54.54532 54.54531007289,54.54532 h 90.908853 a 27.272655,27.272655 0 0 0 27.27266,-27.27266 z"
        />
        <path
          fill="url(#gmail_2026_grad_b)"
          d="M 141.93685,20.255746 C 105.42331,-10.435083 50.946177,-5.7169131 20.255349,30.796627 -10.435479,67.305622 -5.7173098,121.78275 30.79623,152.47813 l 345.80818,290.6765 a 36.36354,36.36354 0 0 0 46.79533,0 L 769.20792,152.47358 C 805.71691,121.78275 810.43508,67.305622 779.74426,30.792081 749.05343,-5.7169131 694.5763,-10.435083 658.0673,20.255746 L 399.9998,237.18245 Z"
        />
      </g>
    </svg>
  );
}

// Official Most Recent X Logo (Black Squircle with Crisp White 𝕏 Mark)
function XFullColorLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label="X">
      <rect width="24" height="24" rx="5.5" fill="#000000" />
      <g transform="translate(3.5, 3.5) scale(0.708)">
        <path
          d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z"
          fill="#FFFFFF"
        />
      </g>
    </svg>
  );
}

// Official Full-Colour Linktree Logo (Vibrant Neon Green Squircle with Black Branch Vector)
function LinktreeFullColorLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label="Linktree">
      {/* Official Linktree Neon Green Squircle Tile matching Instagram, Gmail, and X */}
      <rect width="24" height="24" rx="5.5" fill="#43E660" />
      <g transform="translate(4.2, 4.2) scale(0.65)" fill="#000000">
        <path d="m13.73635 5.85251 4.00467-4.11665 2.3248 2.3808-4.20064 4.00466h5.9085v3.30473h-5.9365l4.22865 4.10766-2.3248 2.3338L12.0005 12.099l-5.74052 5.76852-2.3248-2.3248 4.22864-4.10766h-5.9375V8.12132h5.9085L3.93417 4.11666l2.3248-2.3808 4.00468 4.11665V0h3.4727zm-3.4727 10.30614h3.4727V24h-3.4727z" />
      </g>
    </svg>
  );
}

// Configurable channels - URLs will be replaced once provided by user
export const CONNECT_CHANNELS: ConnectChannel[] = [
  {
    id: "instagram",
    name: "Instagram",
    handle: "@osati",
    href: "https://instagram.com",
    actionText: "Follow",
    icon: InstagramFullColorLogo,
  },
  {
    id: "gmail",
    name: "Gmail",
    handle: "osahumhentimothy@gmail.com",
    href: "mailto:osahumhentimothy@gmail.com",
    actionText: "Email",
    icon: GmailFullColorLogo,
  },
  {
    id: "x",
    name: "X",
    handle: "@osati",
    href: "https://x.com",
    actionText: "Follow",
    icon: XFullColorLogo,
  },
  {
    id: "linktree",
    name: "Linktree",
    handle: "linktr.ee/osati116",
    href: "https://linktr.ee/osati116",
    actionText: "Connect",
    icon: LinktreeFullColorLogo,
  },
];

export function ConnectSection() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const { scale, opacity } = useSectionScrollTransition(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="connect"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 scroll-mt-24 overflow-hidden relative"
    >
      {/* Anchor alias to support #contact deep linking seamlessly */}
      <div id="contact" className="absolute -top-24 left-0 pointer-events-none" />

      <motion.div
        style={{ scale, opacity }}
        className="origin-center w-full will-change-transform"
      >
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-black dark:text-white xanh-mono-regular">
            Connect with Me
          </h2>
          <p className="text-black dark:text-neutral-300 text-sm sm:text-base xanh-mono-regular-italic leading-snug">
            Available for brand strategy, creative direction, and bespoke typographic systems.
          </p>
        </div>

        {/* Compact 4-Column Connect Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 max-w-5xl">
          {CONNECT_CHANNELS.map((channel) => {
            const Icon = channel.icon;
            const isEmail = channel.href.startsWith("mailto:");

            return (
              <a
                key={channel.id}
                href={channel.href}
                target={isEmail ? undefined : "_blank"}
                rel={isEmail ? undefined : "noopener noreferrer"}
                aria-label={`Connect via ${channel.name} (${channel.handle})`}
                className="group flex items-center justify-between gap-3.5 px-4 py-3.5 sm:px-4.5 sm:py-4 bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white transition-all duration-300 hover:shadow-md hover:bg-neutral-200/70 dark:hover:bg-neutral-800/80 active:scale-[0.98] cursor-pointer"
              >
                {/* Brand Logo & Channel Info */}
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 drop-shadow-xs">
                    <Icon className="w-full h-full" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm sm:text-base font-normal xanh-mono-regular tracking-tight leading-none">
                      <span className="relative inline-block">
                        {channel.name}
                        {/* Animated left-to-right sweep underline */}
                        <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-black dark:bg-white transition-all duration-300 ease-out group-hover:w-full pointer-events-none" />
                      </span>
                    </div>
                    <p className="text-[11px] text-neutral-500 dark:text-neutral-400 font-mono truncate pt-1">
                      {channel.handle}
                    </p>
                  </div>
                </div>

                {/* Arrow Icon */}
                <div className="flex items-center justify-center w-6 h-6 shrink-0 rounded-full bg-neutral-200/80 dark:bg-neutral-800/80 text-black dark:text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
