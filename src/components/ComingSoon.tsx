import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ComingSoon() {
  return (
    <section className="flex items-center justify-center bg-white px-6 py-16">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
          Something Big is Coming....
        </h1>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-full bg-linear-to-br from-[#155DFC] to-[#5087FF] px-6 py-2 text-xl font-medium text-white transition-all hover:-translate-y-0.5 hover:shadow-[0px_2px_0px_0px_rgba(0,0,0,0.25)] active:translate-0 active:shadow-none"
          >
            <ArrowLeft size={20} />
            <span>Go to Home</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
