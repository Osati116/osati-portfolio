"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSectionScrollTransition } from "@/lib/scroll-transition";

// Official Full-Colour Brand Logos
function FigmaLogo() {
  return (
    <svg role="img" viewBox="0 0 38 57" className="w-6 h-6 sm:w-7 sm:h-7">
      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
      <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
      <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
      <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
    </svg>
  );
}

function IllustratorLogo() {
  return (
    <svg role="img" viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8">
      <rect width="24" height="24" rx="4.5" fill="#330000" />
      <rect x="0.5" y="0.5" width="23" height="23" rx="4" stroke="#FF9A00" strokeWidth="1" fill="none" />
      <path d="M10.53 10.73c-.1-.31-.19-.61-.29-.92-.1-.31-.19-.6-.27-.89-.08-.28-.15-.54-.22-.78h-.02c-.09.43-.2.86-.34 1.29-.15.48-.3.98-.46 1.48-.14.51-.29.98-.44 1.4h2.54c-.06-.211-.14-.46-.23-.721-.09-.269-.18-.559-.27-.859zM14.7 16.83h-2.091c-.069.01-.139-.04-.159-.11l-.82-2.38H7.91l-.76 2.35c-.02.09-.1.15-.19.141H5.08c-.11 0-.14-.061-.11-.18L8.19 7.38c.03-.1.06-.21.1-.33.04-.21.06-.43.06-.65-.01-.05.03-.1.08-.11h2.59c.08 0 .12.03.13.08l3.65 10.3c.03.109 0 .16-.1.16zm3.4-.15c0 .11-.039.16-.129.16H16.01c-.1 0-.15-.061-.15-.16v-7.7c0-.1.041-.14.131-.14h1.98c.09 0 .129.05.129.14v7.7zm-.209-9.03c-.231.24-.571.37-.911.35-.33.01-.65-.12-.891-.35-.23-.25-.35-.58-.34-.92-.01-.34.12-.66.359-.89.242-.23.562-.35.892-.35.391 0 .689.12.91.35.22.24.34.56.33.89.01.34-.11.67-.349.92z" fill="#FF9A00" />
    </svg>
  );
}

function CanvaLogo() {
  return (
    <svg role="img" viewBox="0 0 80 80" className="w-7 h-7 sm:w-8 sm:h-8" fill="none">
      <path
        d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z"
        fill="#7D2AE7"
      />
      <path
        d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z"
        fill="url(#canva_radial0)"
      />
      <path
        d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z"
        fill="url(#canva_radial1)"
      />
      <path
        d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z"
        fill="url(#canva_radial2)"
      />
      <path
        d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z"
        fill="url(#canva_radial3)"
      />
      <path
        d="M57.2691 48.2052C56.939 48.2052 56.6485 48.484 56.3462 49.0928C52.9323 56.0153 47.0358 60.9134 40.2125 60.9134C32.3228 60.9134 27.437 53.7913 27.437 43.9522C27.437 27.2855 36.7232 17.6491 44.8796 17.6491C48.691 17.6491 51.0186 20.0443 51.0186 23.8559C51.0186 28.3796 48.4485 30.7748 48.4485 32.3702C48.4485 33.0864 48.8939 33.5201 49.7773 33.5201C53.3264 33.5201 57.4918 29.4419 57.4918 23.6808C57.4918 18.0947 52.63 13.9888 44.4737 13.9888C30.994 13.9888 19.0142 26.4858 19.0142 43.777C19.0142 57.1614 26.6572 66.0061 38.45 66.0061C50.9668 66.0061 58.2043 53.5526 58.2043 49.5105C58.2043 48.6153 57.7466 48.2052 57.2691 48.2052Z"
        fill="white"
      />
      <defs>
        <radialGradient
          id="canva_radial0"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(15.453 70.9057) rotate(-49.416) scale(61.8733)"
        >
          <stop stopColor="#6420FF" />
          <stop offset="1" stopColor="#6420FF" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="canva_radial1"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(21.1788 9.09457) rotate(54.703) scale(69.7735)"
        >
          <stop stopColor="#00C4CC" />
          <stop offset="1" stopColor="#00C4CC" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="canva_radial2"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(15.4526 70.9053) rotate(-45.1954) scale(61.1242 28.1118)"
        >
          <stop stopColor="#6420FF" />
          <stop offset="1" stopColor="#6420FF" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="canva_radial3"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(32.7158 10.7789) rotate(66.5198) scale(62.9836 105.512)"
        >
          <stop stopColor="#00C4CC" stopOpacity="0.725916" />
          <stop offset="0.0001" stopColor="#00C4CC" />
          <stop offset="1" stopColor="#00C4CC" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function NotionLogo() {
  return (
    <svg role="img" viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8">
      <rect width="24" height="24" rx="4.5" fill="#FFFFFF" />
      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" fill="#000000" />
    </svg>
  );
}

function InDesignLogo() {
  return (
    <svg role="img" viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8">
      <rect width="24" height="24" rx="4.5" fill="#49021F" />
      <rect x="0.5" y="0.5" width="23" height="23" rx="4" stroke="#FF3366" strokeWidth="1" fill="none" />
      <path d="M15.56 5.43h2.03c.05-.01.09.03.1.07v9.54c0 .18.01.38.02.6.02.21.03.41.04.58 0 .07-.03.13-.1.16-.52.22-1.07.38-1.63.48-.5.09-1.02.14-1.54.14-.74.01-1.48-.14-2.15-.45-.63-.29-1.15-.77-1.51-1.36-.37-.61-.55-1.37-.55-2.28-.01-.74.18-1.47.55-2.11.38-.65.93-1.19 1.59-1.55.7-.39 1.54-.58 2.53-.58.05 0 .12 0 .21.01s.19.01.31.02V5.54c0-.07.03-.11.1-.11zm-8.93.86h1.95c.06-.01.12.03.13.1.01.01.01.02.01.03v10.26c0 .11-.05.16-.14.16H6.62c-.09 0-.13-.05-.13-.16V6.42c0-.09.05-.13.14-.13zm8.23 4.24c-.39 0-.78.08-1.13.26-.34.17-.63.42-.85.74-.22.32-.33.75-.33 1.27-.01.35.05.7.17 1.03.1.27.25.51.45.71.19.18.42.32.68.4.27.09.55.13.83.13.15 0 .29-.01.42-.02.13.01.25-.01.36-.05v-4.4c-.09-.02-.18-.04-.27-.05-.11-.01-.22-.02-.33-.02z" fill="#FF3366" />
    </svg>
  );
}

function PhotoshopLogo() {
  return (
    <svg role="img" viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8">
      <rect width="24" height="24" rx="4.5" fill="#001E36" />
      <rect x="0.5" y="0.5" width="23" height="23" rx="4" stroke="#31A8FF" strokeWidth="1" fill="none" />
      <path d="M9.85 8.42c-.37-.15-.77-.21-1.18-.2-.26 0-.49 0-.68.01-.2-.01-.34 0-.41.01v3.36c.14.01.27.02.39.02h.53c.39 0 .78-.06 1.15-.18.32-.09.6-.28.82-.53.21-.25.31-.59.31-1.03.01-.31-.07-.62-.23-.89-.17-.26-.41-.46-.7-.57zm2.509 3.53c-.399.56-.959.98-1.609 1.22-.68.25-1.43.34-2.25.34-.24 0-.4 0-.5-.01s-.24-.01-.43-.01v3.209c.01.07-.04.131-.11.141H5.52c-.08 0-.12-.041-.12-.131V6.42c0-.07.03-.11.1-.11.17 0 .33 0 .56-.01.24-.01.49-.01.76-.02s.56-.01.87-.02c.31-.01.61-.01.91-.01.82 0 1.5.1 2.06.31.5.17.96.45 1.34.82.32.32.57.71.73 1.14.149.42.229.85.229 1.3.001.86-.199 1.57-.6 2.13zm7.091 3.89c-.28.4-.671.709-1.12.891-.49.209-1.09.318-1.811.318-.459 0-.91-.039-1.359-.129-.35-.061-.7-.17-1.02-.32-.07-.039-.121-.109-.111-.189v-1.74c0-.029.011-.07.041-.09.029-.02.06-.01.09.01.39.23.8.391 1.24.49.379.1.779.15 1.18.15.38 0 .65-.051.83-.141.16-.07.27-.24.27-.42 0-.141-.08-.27-.24-.4-.16-.129-.489-.279-.979-.471-.51-.18-.979-.42-1.42-.719-.31-.221-.569-.51-.761-.85-.159-.32-.239-.67-.229-1.021 0-.43.12-.84.341-1.21.25-.4.619-.72 1.049-.92.469-.239 1.059-.349 1.769-.349.41 0 .83.03 1.24.09.3.04.59.12.86.23.039.01.08.05.1.09.01.04.02.08.02.12v1.63c0 .04-.02.08-.05.1-.09.02-.14.02-.18 0-.3-.16-.62-.27-.96-.34-.37-.08-.74-.13-1.12-.13-.2-.01-.41.02-.601.07-.129.03-.24.1-.31.2-.05.08-.08.18-.08.27s.04.18.101.26c.09.11.209.2.34.27.229.12.47.23.709.33.541.18 1.061.43 1.541.73.33.209.6.49.789.83.16.318.24.67.23 1.029.011.471-.129.94-.389 1.331z" fill="#31A8FF" />
    </svg>
  );
}

function LightroomLogo() {
  return (
    <svg role="img" viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8">
      <rect width="24" height="24" rx="4.5" fill="#001E36" />
      <rect x="0.5" y="0.5" width="23" height="23" rx="4" stroke="#87D3FF" strokeWidth="1" fill="none" />
      <path d="M12.76 16.689c0 .051-.029.09-.06.121-.03.02-.06.029-.101.029H6.26c-.11 0-.16-.061-.16-.18V6.44c-.01-.07.04-.13.11-.14h2c.05-.01.11.03.11.08v8.43h4.62c.101 0 .131.049.11.14l-.29 1.739zm6.25-7.859v1.95c0 .08-.05.11-.16.11-.649-.04-1.3.08-1.89.34-.2.09-.39.21-.54.37v5.1c0 .1-.04.14-.13.14h-1.95c-.08.01-.15-.04-.16-.119V11.14c0-.24 0-.49-.01-.75s-.01-.52-.02-.78c-.01-.22-.03-.44-.061-.66-.01-.05.02-.1.07-.11.01-.01.02-.01.04 0h1.75c.1 0 .18.07.21.16.04.07.07.15.08.23.02.1.039.21.05.31.01.11.021.23.021.36.299-.35.66-.64 1.069-.86.46-.25.97-.37 1.49-.36.069-.01.13.04.14.11.001.01.001.02.001.04z" fill="#87D3FF" />
    </svg>
  );
}

// Google Gemini Sparkle Logo
function GeminiLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8" role="img" aria-label="Gemini">
      <defs>
        <linearGradient id="gemini_sparkle_grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1A73E8" />
          <stop offset="35%" stopColor="#4285F4" />
          <stop offset="70%" stopColor="#9B51E0" />
          <stop offset="100%" stopColor="#D96570" />
        </linearGradient>
      </defs>
      <path
        d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81"
        fill="url(#gemini_sparkle_grad)"
      />
    </svg>
  );
}

// Anthropic Claude Terracotta Logo
function ClaudeLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8" role="img" aria-label="Claude">
      <path
        d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
        fill="#D97757"
      />
    </svg>
  );
}

// Google Antigravity Official Multi-Colour Logomark (Predominantly Google Blue with Apex Gradient)
function AntigravityLogo() {
  return (
    <Image
      src="/antigravity.png"
      alt="Google Antigravity"
      width={32}
      height={32}
      className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
    />
  );
}

// Vercel Official Mark
function VercelLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7" role="img" aria-label="Vercel">
      <path d="m12 1.608 12 20.784H0Z" fill="currentColor" className="text-black dark:text-white" />
    </svg>
  );
}

function renderToolLogo(toolName: string) {
  switch (toolName) {
    case "Figma":
      return <FigmaLogo />;
    case "Adobe Illustrator":
      return <IllustratorLogo />;
    case "Canva":
      return <CanvaLogo />;
    case "Adobe InDesign":
      return <InDesignLogo />;
    case "Adobe Photoshop":
      return <PhotoshopLogo />;
    case "Lightroom Classic":
      return <LightroomLogo />;
    case "Notion & Milanote":
      return <NotionLogo />;
    case "Gemini":
      return <GeminiLogo />;
    case "Claude":
      return <ClaudeLogo />;
    case "Google Antigravity":
      return <AntigravityLogo />;
    case "Vercel":
      return <VercelLogo />;
    default:
      return null;
  }
}

const STACK_CATEGORIES = [
  {
    title: "Brand Systems & Strategy",
    items: [
      { name: "Figma" },
      { name: "Adobe Illustrator" },
      { name: "Canva" },
      { name: "Notion & Milanote" },
    ],
  },
  {
    title: "Typography, Publication & Editorial",
    items: [
      { name: "Adobe InDesign" },
      { name: "Adobe Photoshop" },
      { name: "Lightroom Classic" },
    ],
  },
  {
    title: "Web Design and Development",
    items: [
      { name: "Gemini" },
      { name: "Claude" },
      { name: "Google Antigravity" },
      { name: "Vercel" },
    ],
  },
];

export function StackSection() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const { scale, opacity } = useSectionScrollTransition(sectionRef);

  return (
    <section 
      ref={sectionRef}
      id="stack" 
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 scroll-mt-24 overflow-hidden"
    >
      <motion.div 
        style={{ scale, opacity }} 
        className="origin-center w-full will-change-transform"
      >
        {/* Header */}
        <div className="space-y-4 max-w-2xl mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-6xl font-normal tracking-tight text-black dark:text-white xanh-mono-regular">
            Design & Creative Stack
          </h2>
          <p className="text-black dark:text-neutral-300 text-base sm:text-lg xanh-mono-regular-italic leading-snug">
            The specialized software, typography tools, and workflow systems I rely on to craft visual identities, publications, and brand experiences.
          </p>
        </div>

        {/* Categories with Horizontal Lineup of Logos (No Text) */}
        <div className="space-y-10 sm:space-y-12">
          {STACK_CATEGORIES.map((cat, catIdx) => (
            <div key={catIdx} className="space-y-4">
              <h3 className="text-lg sm:text-xl md:text-2xl font-normal text-black dark:text-neutral-100 xanh-mono-regular tracking-tight">
                {cat.title}
              </h3>

              {/* Horizontal Row of Brand Logos (No Text) */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
                {cat.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    title={item.name}
                    aria-label={item.name}
                    className="w-13 h-13 sm:w-15 sm:h-15 rounded-2xl bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center p-3 sm:p-3.5 transition-all duration-300 hover:scale-110 hover:shadow-md active:scale-95 cursor-pointer group"
                  >
                    <div className="w-full h-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                      {renderToolLogo(item.name)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
