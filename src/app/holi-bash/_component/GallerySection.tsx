"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const videos = [
  { src: "/videos/WV1.mp4", className: "lg:row-span-2" },
  { src: "/videos/WV2.mp4" },
  { src: "/videos/WV3.mp4", className: "lg:row-span-2" },
  { src: "/videos/WV4.mp4" },
];

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const prevVideo = () => {
    if (currentIndex === null) return;
    setCurrentIndex(currentIndex === 0 ? videos.length - 1 : currentIndex - 1);
  };

  const nextVideo = () => {
    if (currentIndex === null) return;
    setCurrentIndex(currentIndex === videos.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Header */}
      <div className="mb-10 text-center">
        <h2 className="font-pjs text-5xl font-bold sm:text-4xl lg:text-5xl">
          Gallery
        </h2>

        <p className="pt-2 text-base sm:text-lg lg:text-xl">
          Moments from past events
        </p>
      </div>

      {/* Grid */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid auto-rows-[150px] grid-cols-2 gap-2 sm:auto-rows-[200px] md:auto-rows-[240px] md:grid-cols-3 lg:auto-rows-[290px] lg:grid-cols-3">
          {videos.map((video, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative cursor-pointer overflow-hidden rounded-2xl ${
                video.className ?? ""
              }`}
            >
              <video
                src={video.src}
                muted
                preload="metadata"
                playsInline
                className="h-full w-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition hover:opacity-100">
                <div className="rounded-full bg-white/90 p-4 text-lg">▶️</div>
              </div>
            </div>
          ))}
        </div>

        {/* See More */}
        <div className="flex justify-center py-6">
          <Link
            href="/holi-bash/gallery"
            className="flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-[#155DFC] to-[#5087FF] px-6 text-white shadow-lg transition hover:opacity-90 sm:h-14 sm:px-8 sm:text-lg"
          >
            See More
          </Link>
        </div>
      </div>

      {/* Player */}
      {currentIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setCurrentIndex(null)}
        >
          <div
            className="relative w-full max-w-5xl px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setCurrentIndex(null)}
              className="absolute -top-10 right-2 text-white"
            >
              <X size={32} />
            </button>

            <button
              onClick={prevVideo}
              className="absolute top-1/2 left-0 -translate-y-1/2 text-white"
            >
              <ChevronLeft size={40} />
            </button>

            <button
              onClick={nextVideo}
              className="absolute top-1/2 right-0 -translate-y-1/2 text-white"
            >
              <ChevronRight size={40} />
            </button>

            <video
              key={videos[currentIndex].src}
              src={videos[currentIndex].src}
              controls
              autoPlay
              playsInline
              className="mx-auto max-h-[80vh] w-full rounded-xl"
            />
          </div>
        </div>
      )}

      {/* Background Effects Wrapper (Clipped) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-10 bottom-0 hidden h-64 w-56 -rotate-10 rounded-full bg-[#ECA1FF]/30 blur-2xl lg:block" />

        <div className="absolute top-0 -left-16 hidden h-64 w-56 -rotate-12 rounded-full bg-[#C0A1FF]/50 blur-2xl lg:block" />
      </div>
    </section>
  );
}
