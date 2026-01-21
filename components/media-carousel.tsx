"use client";

import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Play, ImageIcon } from "lucide-react";
import { LycanBox } from "@/components/ui/lycan-box";

interface MediaItem {
  type: "image" | "video";
  src: string;
  thumbnail: string;
  title: string;
}

const mediaItems: MediaItem[] = [
  
  {
    type: "video",
    src: "https://www.youtube.com/embed/-hkr-WA9gmI?si=6TDCao77R2rHNaOW",
    thumbnail: "/images/video-thumb.jpg",
    title: "Game Trailer",
  },
  {
    type: "image",
    src: "/images/sro1.jpg",
    thumbnail: "/images/sro1.jpg",
    title: "LycanSRO Wallpaper 1",
  },
  {
    type: "image",
    src: "/images/sro2.jpg",
    thumbnail: "/images/sro2.jpg",
    title: "LycanSRO Wallpaper 2",
  },
];

export function MediaCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? mediaItems.length - 1 : prev - 1));
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === mediaItems.length - 1 ? 0 : prev + 1));
  }, []);

  const currentItem = mediaItems[currentIndex];

  return (
    <LycanBox 
      title="Media Gallery" 
      icon={<ImageIcon className="h-4 w-4" />}
      contentClassName="p-0"
    >
      {/* Main Display */}
      <div className="relative aspect-video bg-[var(--lycan-dark)]">
        {/* Placeholder for actual media */}
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[var(--lycan-card)] to-[var(--lycan-dark)]">
          {currentItem.type === "video" ? (
            <iframe width="100%" height="100%" src={currentItem.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          ) : (
            <div className="flex flex-col items-center gap-3">
              <img
                src={currentItem.src}
                alt={currentItem.title}
                className="max-h-96 object-contain"
              />
              
            </div>
          )}
        </div>

        {/* Navigation Arrows */}
        <button
          type="button"
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--lycan-dark)]/80 text-[var(--foreground)] transition-all hover:bg-[var(--lycan-gold)] hover:text-[var(--lycan-dark)]"
          aria-label="Previous"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          type="button"
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--lycan-dark)]/80 text-[var(--foreground)] transition-all hover:bg-[var(--lycan-gold)] hover:text-[var(--lycan-dark)]"
          aria-label="Next"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 overflow-x-auto p-3">
        {mediaItems.map((item, index) => (
          <button
            key={`${item.title}-${index}`}
            type="button"
            onClick={() => setCurrentIndex(index)}
            className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-md transition-all ${
              index === currentIndex
                ? "ring-2 ring-[var(--lycan-gold)]"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            <div className="flex h-full w-full items-center justify-center bg-[var(--lycan-card)]">
              {item.type === "video" ? (
                <Play className="h-4 w-4 text-[var(--lycan-gold)]" />
              ) : (
                <ImageIcon className="h-4 w-4 text-[var(--muted-foreground)]" />
              )}
            </div>
          </button>
        ))}
      </div>
    </LycanBox>
  );
}
