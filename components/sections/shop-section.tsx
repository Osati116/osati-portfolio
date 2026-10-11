"use client";

import * as React from "react";
import Image from "next/image";
import { Check, ArrowRight, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { useSectionScrollTransition } from "@/lib/scroll-transition";

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  imageUrl: string;
}

const PRODUCTS: Product[] = [
  {
    id: "m1",
    name: "Archetype Heavyweight Tee",
    category: "Apparel",
    price: "$48",
    imageUrl: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "m2",
    name: "Studio Canvas Carry Tote",
    category: "Carry Goods",
    price: "$34",
    imageUrl: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "m3",
    name: "Form & Counterform Monograph",
    category: "Publications",
    price: "$65",
    imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "m4",
    name: "Osati Studio Embroidered Cap",
    category: "Headwear",
    price: "$38",
    imageUrl: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1200&q=80",
  },
];

export function ShopSection() {
  const [purchasedItem, setPurchasedItem] = React.useState<string | null>(null);
  const sectionRef = React.useRef<HTMLElement>(null);
  const { scale, opacity } = useSectionScrollTransition(sectionRef);

  const handleBuy = (productName: string) => {
    setPurchasedItem(productName);
    setTimeout(() => {
      setPurchasedItem(null);
    }, 3500);
  };

  return (
    <section 
      ref={sectionRef}
      id="shop" 
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 scroll-mt-24 overflow-hidden"
    >
      {/* Toast Alert */}
      {purchasedItem && (
        <div className="fixed bottom-6 right-6 z-50 p-4 bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom-5 duration-300">
          <ShoppingBag className="w-5 h-5 text-emerald-400 dark:text-emerald-600" />
          <div>
            <p className="text-sm font-medium">Demo Order Initialized</p>
            <p className="text-xs text-neutral-400 dark:text-neutral-600">Simulating checkout for {purchasedItem}</p>
          </div>
        </div>
      )}

      <motion.div 
        style={{ scale, opacity }} 
        className="origin-center w-full will-change-transform"
      >
        {/* Header */}
        <div className="space-y-4 max-w-2xl mb-14">
          <h2 className="text-4xl sm:text-6xl font-normal tracking-tight text-black dark:text-white xanh-mono-regular">
            Shop Some of my Cool Stuff
          </h2>
          <p className="text-black dark:text-neutral-300 text-base sm:text-lg xanh-mono-regular-italic leading-snug">
            Tactile apparel, studio carry goods, and hardbound monographs produced in limited, numbered runs.
          </p>
        </div>

        {/* Products Grid - Minimal 4-column layout with product name & 'Get' pill on hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              onClick={() => handleBuy(product.name)}
              className="group relative cursor-pointer overflow-hidden bg-neutral-100 dark:bg-neutral-900 shadow-xs transition-all duration-300 hover:shadow-lg active:scale-[0.99]"
            >
              {/* Product Image Tile with Sharp Corners */}
              <div className="relative aspect-[16/11] w-full overflow-hidden">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Hover Reveal: Product name and 'Get' pill */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 sm:p-4.5 text-white">
                  <div className="pr-2 min-w-0">
                    <h3 className="text-sm sm:text-base font-normal text-white xanh-mono-regular leading-tight truncate">
                      {product.name}
                    </h3>
                    <span className="text-xs text-neutral-300 font-mono">
                      {product.price}
                    </span>
                  </div>

                  {/* 'Get' Pill Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBuy(product.name);
                    }}
                    className="px-3.5 py-1.5 rounded-full bg-white text-black hover:bg-neutral-200 font-medium text-xs xanh-mono-regular shrink-0 transition-transform active:scale-95 shadow-md flex items-center gap-1 cursor-pointer"
                  >
                    <span>Get</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
