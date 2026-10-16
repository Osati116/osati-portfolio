"use client";

import * as React from "react";
import Image from "next/image";
import { MapPin, X, ZoomIn } from "lucide-react";

interface Photo {
  id: string;
  title: string;
  location: string;
  year: string;
  camera: string;
  lens: string;
  url: string;
  aspect: "landscape" | "portrait" | "square";
}

const PHOTOS: Photo[] = [
  {
    id: "p1",
    title: "Monolith Geometry",
    location: "Berlin, Germany",
    year: "2024",
    camera: "Sony A7 IV",
    lens: "35mm f/1.4 GM",
    url: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=85",
    aspect: "portrait",
  },
  {
    id: "p2",
    title: "Rain Reflections in Shibuya",
    location: "Tokyo, Japan",
    year: "2024",
    camera: "Sony A7 IV",
    lens: "50mm f/1.2 GM",
    url: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1200&q=85",
    aspect: "landscape",
  },
  {
    id: "p3",
    title: "Vertical Glass Elevation",
    location: "London, UK",
    year: "2023",
    camera: "Fujifilm X100V",
    lens: "23mm f/2.0",
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
    aspect: "portrait",
  },
  {
    id: "p4",
    title: "Highland Solitude",
    location: "Isle of Skye, Scotland",
    year: "2023",
    camera: "Sony A7 IV",
    lens: "24-70mm f/2.8 GM",
    url: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=85",
    aspect: "landscape",
  },
  {
    id: "p5",
    title: "Chiaroscuro Sanctuary",
    location: "Kyoto, Japan",
    year: "2024",
    camera: "Leica Q2",
    lens: "28mm f/1.7 Summilux",
    url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85",
    aspect: "square",
  },
  {
    id: "p6",
    title: "Sub-Zero Starlight",
    location: "Dolomites, Italy",
    year: "2024",
    camera: "Sony A7 IV",
    lens: "14mm f/1.8 GM",
    url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85",
    aspect: "landscape",
  },
  {
    id: "p7",
    title: "Mist Over Still Waters",
    location: "Pacific Northwest, USA",
    year: "2023",
    camera: "Fujifilm X-T5",
    lens: "33mm f/1.4",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85",
    aspect: "landscape",
  },
  {
    id: "p8",
    title: "Urban Rhythm Crosswalk",
    location: "New York City, USA",
    year: "2023",
    camera: "Ricoh GR IIIx",
    lens: "40mm f/2.8",
    url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=85",
    aspect: "portrait",
  },
];

export function PhotosSection() {
  const [selectedPhoto, setSelectedPhoto] = React.useState<Photo | null>(null);

  return (
    <section 
      id="photos" 
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 scroll-mt-24"
    >
      {/* Header */}
      <div className="space-y-4 max-w-2xl mb-14">
        <h2 className="text-4xl sm:text-6xl font-normal tracking-tight text-black dark:text-white xanh-mono-regular">
          Photography & Framing
        </h2>
        <p className="text-black dark:text-neutral-300 text-base sm:text-lg xanh-mono-regular-italic leading-relaxed">
          Moments captured in natural light, high contrast, and architectural geometry.
        </p>
      </div>

      {/* Photo Grid - Reduced proportionally matching the 5-column home page cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
        {PHOTOS.map((photo) => (
          <div
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            className="group relative cursor-pointer overflow-hidden bg-neutral-100 dark:bg-neutral-900 shadow-xs transition-all duration-300 hover:shadow-lg active:scale-[0.99]"
          >
            <div className="relative w-full aspect-[16/11] overflow-hidden">
              <Image
                src={photo.url}
                alt={photo.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2.5 sm:p-3 text-white">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-xs sm:text-sm text-white truncate pr-1">{photo.title}</h3>
                  <span className="p-1 rounded-full bg-white/20 backdrop-blur-md shrink-0">
                    <ZoomIn className="w-3 h-3 text-white" />
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-neutral-300 mt-0.5 truncate">
                  <MapPin className="w-2.5 h-2.5 shrink-0" />
                  <span className="truncate">{photo.location}</span>
                  <span>•</span>
                  <span>{photo.year}</span>
                </div>
                <div className="text-[9px] font-mono text-neutral-400 mt-1 truncate">
                  {photo.camera}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div 
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 shadow-2xl"
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:text-red-500 hover:bg-black/90 backdrop-blur-md transition-colors duration-75 cursor-pointer group"
              aria-label="Close photo preview"
              data-cursor-close="true"
            >
              <X className="w-5 h-5 transition-colors duration-75 group-hover:text-red-500" />
            </button>
            <div className="relative w-full h-[65vh] sm:h-[75vh]">
              <Image
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
            <div className="p-4 sm:p-6 bg-neutral-900 border-t border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-white">
              <div>
                <h3 className="text-lg font-medium">{selectedPhoto.title}</h3>
                <p className="text-sm text-neutral-400 flex items-center gap-1.5 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                  {selectedPhoto.location} • {selectedPhoto.year}
                </p>
              </div>
              <div className="text-xs font-mono text-neutral-400 bg-neutral-800 px-3 py-1.5 rounded-lg">
                {selectedPhoto.camera} • {selectedPhoto.lens}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
