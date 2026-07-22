import { Calendar, Clock, MapPin } from "lucide-react";
import EventThumbnail from "@/assets/Marketing_101_thumbnail.png";
import Image from "next/image";

export default function DashboardCountdownCard() {
  return (
    <div className="flex w-85 flex-col rounded-xl border border-[#CDCDCD] p-4">
      <div className="flex items-center justify-between">
        <span className="leading-tight font-medium">Next Event Countdown</span>
        <button
          type="button"
          className="size-6 rounded-md p-1.5 shadow-[0px_5px_12.5px_0px_#F30AFF26]"
        >
          <Clock size={12} className="text-[#E60076]" />
        </button>
      </div>
      <span className="mb-2 text-[10px] leading-tight text-[#6A7282]">
        Don&apos;t miss out!
      </span>
      <div className="mb-6 flex gap-2">
        <Image
          src={EventThumbnail}
          alt="Event Thumbnail"
          className="w-25.5 rounded-sm"
        />
        <div className="flex flex-col p-2">
          <span className="text-sm font-semibold">Marketing 101</span>
          <div className="flex items-center gap-1 text-[#4A5565]">
            <Calendar size={10} />
            <span className="text-[10px] leading-tight">December 28, 2025</span>
          </div>
          <div className="flex items-center gap-1 text-[#4A5565]">
            <MapPin size={10} />
            <span className="line-clamp-2 text-[10px] leading-tight">
              Convention Center, Downtown
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex w-16 flex-col items-center rounded-lg p-1.5 shadow-[0.5px_1px_0px_0px_rgba(0,0,0,0.25)]">
          <span className="text-[20px] leading-none">10</span>
          <span className="text-[8px] leading-none text-[#6A7282]">Days</span>
        </div>
        <div className="flex w-16 flex-col items-center rounded-lg p-1.5 shadow-[0.5px_1px_0px_0px_rgba(0,0,0,0.25)]">
          <span className="text-[20px] leading-none">21</span>
          <span className="text-[8px] leading-none text-[#6A7282]">Hours</span>
        </div>
        <div className="flex w-16 flex-col items-center rounded-lg p-1.5 shadow-[0.5px_1px_0px_0px_rgba(0,0,0,0.25)]">
          <span className="text-[20px] leading-none">13</span>
          <span className="text-[8px] leading-none text-[#6A7282]">Mins</span>
        </div>
        <div className="flex w-16 flex-col items-center rounded-lg p-1.5 shadow-[0.5px_1px_0px_0px_rgba(0,0,0,0.25)]">
          <span className="text-[20px] leading-none">33</span>
          <span className="text-[8px] leading-none text-[#6A7282]">Secs</span>
        </div>
      </div>
    </div>
  );
}
