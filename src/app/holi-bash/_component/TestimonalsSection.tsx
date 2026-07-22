"use client";

import { useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import avatar from "@/assets/avatar.png";
import quotes from "@/assets/quotes.svg";

type Story = {
  feedback: string;
  name: string;
  role: string;
  avatar: StaticImageData;
};

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const stories: Story[] = Array(9).fill({
    feedback:
      "The seniors were very polite and easy to work with....have had spend a wonderful time ....",
    name: "Harsh Raj",
    role: "Software Engineer at Google",
    avatar,
  });

  const duplicatedStories = [...stories, ...stories];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationFrameId: number;
    const scrollSpeed = 3;

    const autoScroll = () => {
      if (!el) return;

      el.scrollLeft += scrollSpeed;

      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      }

      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="w-full overflow-hidden px-6 py-20">
      <div className="mb-14 text-center">
        <h2 className="text-5xl font-bold text-black">Testimonials</h2>
      </div>

      <div
        ref={scrollRef}
        className="hide-scrollbar flex gap-8 overflow-x-scroll">
        {duplicatedStories.map((s, i) => (
          <div
            key={i}
            className="shrink-0 w-1/3 "
          >
            <div className="relative h-55 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl border border-black/25 bg-white p-6 shadow-md">
              <Image
                src={quotes}
                alt="quote"
                width={48}
                height={40}
                className="absolute left-0 top-0"
              />

              <p className="mt-8 text-lg leading-relaxed text-black">
                {s.feedback}
              </p>

              <div className="my-4 h-px w-full bg-gray-300" />

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-full">
                  <Image src={s.avatar} alt={s.name} width={40} height={40} />
                </div>
                <div>
                  <p className="text-[16px] font-semibold text-black">
                    {s.name}
                  </p>
                  <p className="text-[16px] text-[#4A5565]">
                    {s.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
