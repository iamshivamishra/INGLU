import { ArrowRight } from "lucide-react";
import Thumbnail from "@/assets/Marketing_101_thumbnail.png";
import Image from "next/image";
import { ICourse } from "@/models/Course";

export default function DashboardCourseCard({ course }: { course: ICourse }) {
  return (
    <button
      type="button"
      className="flex h-20 items-center gap-2 rounded-xl border border-[#CDCDCD] p-1"
    >
      <Image
        src={Thumbnail}
        alt="Course Thumbnail"
        className="size-18 rounded-lg"
      />
      <div className="flex h-full flex-1 flex-col items-start pt-1">
        <span className="line-clamp-1 text-xs leading-tight font-bold text-[#6A7282]">
          {course.name}
        </span>
        <span className="line-clamp-2 text-start text-[10px] leading-tight text-[#6A7282]">
          {course.description}
        </span>
        <div className="mt-0.5 min-h-0.75 w-full rounded-full bg-[#F3F4F6]">
          <div
            style={{ width: `${course.progress}%` }}
            className="min-h-0.75 w-[50%] rounded-full bg-linear-to-r from-[#2B7FFF] to-[#51A2FF]"
          />
        </div>
        <ArrowRight size={15} className="mt-auto self-end text-[#2563EB]" />
      </div>
    </button>
  );
}
