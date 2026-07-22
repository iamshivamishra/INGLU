"use client";

import Image from "next/image";
import { useState } from "react";

type MediaItem = {
  id: string;
  src: string;
  type: "image" | "video";
};

export default function Gallery({ items }: { items: MediaItem[] }) {
  const [selected, setSelected] = useState<MediaItem | null>(null);

  return (
    <>
      <div className="grid grid-cols-4 gap-4 p-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer"
            onClick={() => setSelected(item)}
          >
            {item.type === "image" ? (
              <Image
                src={item.src}
                alt=""
                width={400}
                height={400}
                className="rounded-lg object-cover duration-300 hover:scale-105 shadow-lg shadow-gray-500"
              />
            ) : (
              <video
                src={item.src}
                className="h-full w-full rounded-lg object-cover duration-300 hover:scale-105 shadow-lg shadow-gray-500"
                muted
              />
            )}
          </div>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setSelected(null)}
        >
          <div className="max-w-3xl p-4" onClick={(e) => e.stopPropagation()}>
            {selected.type === "image" ? (
              <Image
                src={selected.src}
                alt=""
                width={800}
                height={800}
                className="rounded-lg"
              />
            ) : (
              <video
                src={selected.src}
                controls
                autoPlay
                className="w-full rounded-lg"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
