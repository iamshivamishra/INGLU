import SegmentsEventsGraphics from "@/assets/segments.png";
import SegmentsEsportsGraphics from "@/assets/ingluEsports.png";
import SegmentsCreatorsGraphics from "@/assets/ingluCreator.png";
import SegmentsEducationGraphics from "@/assets/ingluEducation.png";
import SegmentsTravelsGraphics from "@/assets/ingluTravels.png";
import Image from "next/image";
export default function SegmentsSection() {
  return (
    // Detailed overview of INGLU business segments
    <section
      id="segments"
      className="mx-auto flex w-full scroll-mt-24 flex-col gap-8 lg:gap-24"
    >
      <span className="font-plus-jakarta-sans text-3xl font-bold uppercase lg:text-5xl">
        Our Segments
      </span>

      {/* INGLU Events */}
      <div className="flex flex-col-reverse gap-8 lg:flex-row">
        <Image
          src={SegmentsEventsGraphics}
          alt="Segments Events Graphics"
          className="not-lg:mx-auto not-lg:w-3/4 lg:h-101.75"
        />
        <div className="flex flex-1 flex-col gap-4">
          <span className="font-plus-jakarta-sans text-2xl leading-none font-bold uppercase lg:text-4xl">
            INGLU Events
          </span>
          <p className="text-[#364153] lg:text-lg">
            INGLU Events is a dynamic and innovative EVENT CURATION COMPANY
            known for organizing and executing a wide range of engaging and
            memorable events, specialising in working on both aspects of events
            i.e. INCOME MAXIMISATION and EXPENSE MINIMISATION. Its the only
            company which provide end to end service for any event.
          </p>
          <ul className="list-outside list-disc pl-6 text-[#364153] lg:text-lg">
            <li>Sponsorship Management</li>
            <li>Marketing</li>
            <li>Artist Management</li>
            <li>Production Management</li>
            <li>Stalls Procurement</li>
            <li>Security & TBL</li>
          </ul>
          <p className="text-[#364153] lg:text-lg">
            INGLU EVENTS is the one stop solution for all the event needs within
            one platform
          </p>
        </div>
      </div>

      {/* INGLU E-Sports */}
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex flex-1 flex-col gap-4">
          <span className="font-plus-jakarta-sans text-2xl leading-none font-bold uppercase lg:text-4xl">
            INGLU E-Sports
          </span>
          <p className="text-[#364153] lg:text-lg">
            INGLU E Sports is a premier organization in the competitive gaming
            industry, dedicated to fostering and promoting esports talent.
            Specializing in organizing high-stakes tournaments, leagues, and
            community events.
          </p>
          <p className="text-[#364153] lg:text-lg">
            INGLU E Sports provides a platform for gamers to showcase their
            skills and engage with a passionate audience. With a commitment to
            excellence, innovation, and fair play.INGLU E Sports is at the
            forefront of the esports revolution, creating opportunities for
            players and fans alike to experience the thrill of competitive
            gaming.
          </p>
        </div>
        <Image
          src={SegmentsEsportsGraphics}
          alt="Segments E-Sports Graphics"
          className="w-135.5"
        />
      </div>

      {/* INGLU Creators */}
      <div className="flex flex-col-reverse gap-8 lg:flex-row">
        <Image
          src={SegmentsCreatorsGraphics}
          alt="Segments Creators Graphics"
          className="w-114.5"
        />
        <div className="flex flex-1 flex-col gap-4">
          <span className="font-plus-jakarta-sans text-2xl leading-none font-bold uppercase lg:text-4xl">
            INGLU Creators
          </span>
          <p className="text-[#364153] lg:text-lg">
            Bringing in the most Unique YOUTH INFLUENCER AND YOUTH MARKETING
            SERVICES. INGLU Creators is a vibrant community and platform for
            content creators across various media, including digital, visual,
            and performing arts. Dedicated to nurturing creativity and
            collaboration.
          </p>
          <p className="text-[#364153] lg:text-lg">
            INGLU Creators provides resources, networking opportunities, and
            exposure to help creators grow their audience and refine their
            craft. By hosting workshops, showcases, and collaborative projects,
            INGLU Creators empowers artists to innovate and thrive in their
            creative endeavours, making it a hub for inspiration and artistic
            excellence.
          </p>
        </div>
      </div>

      {/* INGLU Education */}
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex flex-1 flex-col gap-4">
          <span className="font-plus-jakarta-sans text-2xl leading-none font-bold uppercase lg:text-4xl">
            INGLU Education
          </span>
          <p className="text-[#364153] lg:text-lg">
            INGLU Education is a leading provider of skill-based courses,
            offering globally recognized certifications that are Startup India
            verified. Our programs focus on practical, industry-relevant skills
            designed to enhance employability and career growth. With expert
            instructors and a commitment to excellence.
          </p>
          <p className="text-[#364153] lg:text-lg">
            INGLU Education ensures learners gain valuable, up-to-date knowledge
            that meets international standards. Our courses empower individuals
            to achieve their professional goals with credentials that are
            respected and valued worldwide.
          </p>
        </div>
        <Image
          src={SegmentsEducationGraphics}
          alt="Segments Education Graphics"
          className="h-86.5"
        />
      </div>

      {/* INGLU Travels */}
      <div className="flex flex-col-reverse gap-8 lg:flex-row">
        <Image
          src={SegmentsTravelsGraphics}
          alt="Segments Travels Graphics"
          className="w-md"
        />
        <div className="flex flex-1 flex-col gap-4">
          <span className="font-plus-jakarta-sans text-2xl leading-none font-bold uppercase lg:text-4xl">
            INGLU Travels
          </span>
          <p className="text-[#364153] lg:text-lg">
            INGLU Travels specializes in crafting luxury travel experiences
            tailored for the youth, offering unique and unforgettable journeys
            that stand out in the travel industry. By combining opulent
            accommodations, exclusive activities, and personalized itineraries.
          </p>
          <p className="text-[#364153] lg:text-lg">
            INGLU Travels ensures young travellers enjoy the finest in comfort
            and style. With a focus on creating distinctive adventures that
            cater to the desires and aspirations of the younger generation,
            INGLU Travels sets itself apart by providing high-end travel
            experiences that blend sophistication with youthful energy and
            excitement.
          </p>
        </div>
      </div>
      <div className="pointer-events-none absolute top-450 -left-52 -z-10 h-337.5 w-56 -rotate-12 rounded-[50%] bg-[#C0A1FFB0] blur-2xl" />
    </section>
  );
}
