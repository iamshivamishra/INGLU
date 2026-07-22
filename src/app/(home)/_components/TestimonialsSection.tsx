import MayankAvatar from "@/assets/Mayank.jpg";
import ChahatAdhikariAvatar from "@/assets/Chahat_Adhikari.jpeg";
import DivyanshiSrivastavAvatar from "@/assets/Divyanshi_Srivastab.jpg";
import QuoteCard from "@/components/QuoteCard";
export default function TestimonialsSection() {
  return (
    <section className="relative flex flex-col items-center gap-6 px-4 md:gap-8">
      <h2 className="font-plus-jakarta-sans text-center text-2xl font-extrabold uppercase sm:text-3xl md:text-4xl lg:text-5xl">
        What people say about us
      </h2>

      <div className="flex w-full max-w-7xl flex-wrap justify-center gap-x-4 gap-y-6">
        <QuoteCard
          author="Mayank"
          authorAvatar={MayankAvatar}
          authorDesignation="Ex- Media Head"
          content="At Inglu, I had a crazy experience. Made many friends here with whom I made tons of memories. I got exposure as a Concert Photographer & shot artists like Paradox, Amit Trivedi, Arjun Kanungo etc. I started making Graphics here.​"
        />
        <QuoteCard
          author="Harsh"
          authorDesignation="Graphics Intern"
          content="The seniors were very polite and easy to work with....have had spend a wonderful time ...."
        />
        <QuoteCard
          author="Chahat Adhikari"
          authorAvatar={ChahatAdhikariAvatar}
          authorDesignation="Operations"
          content="Its an amazing experience to be a part of this organisation, I've got to learn so many things from webinars and tasks that were allotted during the internship period. It was a great experience in learning with INGLU team and mentors who supported all the way. "
        />
        <QuoteCard
          author="Nishant"
          authorDesignation="Operations"
          content="Working in Inglu as an intern was really a good experience, gained a lot of new things to learn. I enjoyed this internship"
        />
        <QuoteCard
          author="Divyanshi Srivastav"
          authorAvatar={DivyanshiSrivastavAvatar}
          authorDesignation="Project Head"
          content="Excellent work environment. Got a lot to learn from the seniors. Have been a great work time. I just completed my social media marketing internship here and have got the best mentorship and experience."
        />
      </div>

      <div className="pointer-events-none absolute -right-24 -bottom-40 -z-10 h-64 w-40 -rotate-12 rounded-[50%] bg-[#ECA1FF61] blur-[80px] md:-right-48 md:-bottom-240 md:h-[337.5px] md:w-56" />
    </section>
  );
}
