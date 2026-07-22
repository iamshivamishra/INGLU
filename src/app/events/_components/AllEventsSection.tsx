"use client";

import { useState } from "react";
import { Filter, Search } from "lucide-react";
import EventImage from "@/assets/event.png";
import ProductCard from "@/components/ProductCard";

const EVENTS = [
  {
    title: "HOLI BASH SEASON 4 : VIP",
    venue: "The Venue",
    price: 1999,
    image: EventImage,
    rating: 4,
    date: new Date(),
    ratingscount: 4,
  },
  {
    title: "NEW YEAR PARTY : VIP",
    venue: "Delhi Club",
    price: 2499,
    image: EventImage,
    rating: 5,
    date: new Date(),
    ratingscount: 12,
  },
  {
    title: "MUSIC NIGHT LIVE",
    venue: "Mumbai Arena",
    price: 1499,
    image: EventImage,
    rating: 4,
    date: new Date(),
    ratingscount: 8,
  },
  {
    title: "HOLI BASH SEASON 4 : VIP",
    venue: "The Venue",
    image: EventImage,
    price: 1999,
    rating: 4,
    date: new Date(),
    ratingscount: 4,
  },
  {
    title: "DJ NIGHT FEST",
    venue: "Noida",
    price: 999,
    image: EventImage,
    rating: 3,
    date: new Date(),
    ratingscount: 6,
  },
  {
    title: "HOLI SPECIAL PARTY",
    venue: "Gurgaon",
    price: 1799,
    image: EventImage,
    rating: 5,
    date: new Date(),
    ratingscount: 10,
  },
];

export default function AllEventsSection() {
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEvents = EVENTS.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <section className="flex flex-col gap-10">
      <div className="flex items-center justify-between">
        <span className="font-pjs text-5xl font-semibold">All Events</span>

        <div className="flex items-center gap-3">
          <label className="flex w-md items-center gap-4 rounded-full border border-[#D5D5D5] p-2">
            <Search size={20} className="ml-3 text-gray-400" />

            <input
              type="text"
              placeholder="Search for events..."
              value={query}
              onChange={(e) => {
                const value = e.target.value;
                setQuery(value);
                if (value === "") {
                  setSearchTerm("");
                }
              }}
              className="flex-1 outline-none"
            />

            <button
              type="button"
              onClick={() => setSearchTerm(query.trim())}
              className="cursor-pointer rounded-full bg-[#155DFC] px-5 py-2.5 text-white transition-all hover:opacity-75 active:opacity-50"
            >
              Search
            </button>
          </label>

          <button className="flex cursor-pointer items-center gap-2 rounded-full border border-[#D5D5D5] px-6 py-4 transition-all hover:bg-black hover:text-white active:opacity-75">
            <Filter size={24} />
            <span className="text-xl">Filter</span>
          </button>
        </div>
      </div>

      <div className="flex w-full flex-wrap justify-between gap-8">
        {filteredEvents.map((event, index) => (
          <ProductCard key={index} {...event} />
        ))}
      </div>
      <div className="pointer-events-none absolute top-250 -right-20 -z-10 h-337.5 w-56 -rotate-2 rounded-[50%] bg-[#ECA1FF]/50 blur-2xl" />
      <div className="pointer-events-none absolute bottom-30 -left-50 -z-10 h-337.5 w-56 -rotate-12 rounded-[50%] bg-[#C0A1FF]/50 blur-2xl" />
    </section>
  );
}
