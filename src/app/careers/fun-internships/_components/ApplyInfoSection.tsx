import { GraduationCap, Sparkles, Pencil, Lightbulb } from "lucide-react";

export default function ApplyInfoSection() {
  return (
    <section className="relative mx-auto mb-0 w-[95%] rounded-2xl bg-[#EEF5FF] px-4 pt-12 pb-2 sm:px-6 sm:pt-16 sm:pb-4 lg:max-w-7xl lg:pt-20">
      <h2 className="mb-3 text-center text-3xl font-medium text-black sm:mb-4 sm:text-4xl lg:text-5xl">
        Who Can Apply?
      </h2>

      <p className="mx-auto mb-2 max-w-2xl text-center text-sm text-[#4A5565] sm:mb-4 sm:text-base lg:text-[18px]">
        We&apos;re looking for enthusiastic people ready to learn and grow!
      </p>

      <div className="mb-10 flex flex-wrap justify-center gap-3 sm:mb-14 sm:gap-4">
        <span className="flex items-center gap-2 rounded-full bg-[#DBEAFE] px-4 py-2 text-sm font-medium text-[#0066FF] sm:px-6 sm:py-3 sm:text-base">
          <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" />
          Students
        </span>

        <span className="flex items-center gap-2 rounded-full bg-[#DBEAFE] px-4 py-2 text-sm font-medium text-[#0066FF] sm:px-6 sm:py-3 sm:text-base">
          <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
          Freshers
        </span>

        <span className="flex items-center gap-2 rounded-full bg-[#DBEAFE] px-4 py-2 text-sm font-medium text-[#0066FF] sm:px-6 sm:py-3 sm:text-base">
          <Pencil className="h-4 w-4 sm:h-5 sm:w-5" />
          Creators
        </span>

        <span className="flex items-center gap-2 rounded-full bg-[#DBEAFE] px-4 py-2 text-sm font-medium text-[#0066FF] sm:px-6 sm:py-3 sm:text-base">
          <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5" />
          Curious Learners
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {[
          {
            title: "No Experience Required",
            desc: "We value enthusiasm and willingness to learn over experience.",
          },
          {
            title: "Flexible Duration",
            desc: "Choose from 1–6 month internship programs that fit your schedule.",
          },
          {
            title: "Remote Friendly",
            desc: "Work from anywhere or join us at our office spaces.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="w-full rounded-2xl bg-[#F2F7FF] p-5 shadow-[0_1px_2px_-1px_rgba(0,0,0,0.1),0_1px_18px_rgba(0,0,0,0.1)] sm:p-6"
          >
            <div className="mb-3 flex gap-2 sm:mb-4">
              <span className="h-2 w-2 rounded-full bg-[#2B7FFF]" />
              <span className="h-2 w-2 rounded-full bg-[#00B8DB]" />
              <span className="h-2 w-2 rounded-full bg-[#51A2FF]" />
            </div>

            <h3 className="mb-2 text-lg font-medium text-black sm:text-xl">
              {item.title}
            </h3>

            <p className="text-sm text-[#4A5565] sm:text-base">{item.desc}</p>
          </div>
        ))}
      </div>
      {/* <div className="pointer-events-none absolute -top-35 -right-70 -z-10 hidden h-337.5 w-56 -rotate-10 rounded-[50%] bg-[#ECA1FF]/40 blur-2xl lg:block" /> */}
    </section>
  );
}
