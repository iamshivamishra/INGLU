import avatar from "@/assets/avatar.png";
import ReviewCard from "./ReviewCard";
import { StaticImageData } from "next/image";

type Review = {
  content: string;
  author: string;
  authorDesignation: string;
  authorAvatar: StaticImageData;
};

export default function TestimonialsSection() {
  const reviews: Review[] = Array(9).fill({
    content:
      "The seniors were very polite and easy to work with….have had spend a wonderful time …. ",
    author: "Harsh Raj",
    authorDesignation: "Software Engineer at Google",
    authorAvatar: avatar,
  });

  return (
    <section className="flex w-full flex-col items-center gap-2">
      {/* Heading */}
      <span className="font-pjs text-4xl font-semibold text-[#1A1A1A]">
        Student Success Stories
      </span>
      <p className="text-lg text-[#4A5565]">
        Our students have been placed at top companies worldwide
      </p>

      <div
        style={
          {
            "--width": "400px",
            "--height": "286px",
            "--quantity": reviews.length,
          } as React.CSSProperties
        }
        className="slider mt-16 h-71.5 max-w-full self-start overflow-hidden"
      >
        <div className="list relative flex min-h-full min-w-[calc(var(--width)*var(--quantity))]">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              review={review.content}
              author={review.author}
              authorDesignation={review.authorDesignation}
              authorAvatar={review.authorAvatar}
              position={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
