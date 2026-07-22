import { BookOpen, Calendar, CircleCheckBig } from "lucide-react";
import DashboardStatCard from "@/components/DashboardStatCard";
import DashboardCourseCard from "@/components/DashboardCourseCard";
import DashboardTicketCard from "@/components/DashboardTicketCard";
import DashboardCountdownCard from "@/components/DashboardCountdownCard";
import DashboardWelcomeGraphics from "@/assets/Dashboard_Welcome_Graphics.svg";
import DashboardCalendar from "@/components/DashboardCalendar";
import Image from "next/image";
import { IUser } from "@/models/User";
import { useEffect, useState } from "react";

export default function HomeTab({ user }: { user: IUser }) {
  const [courses, setCourses] = useState<any[]>([]);
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    if (!user?._id) return;

    const fetchDashboardData = async () => {
      const coursesRes = await fetch(`/api/courses?userId=${user._id}`);
      const eventsRes = await fetch(`/api/events?userId=${user._id}`);

      const coursesData = await coursesRes.json();
      const eventsData = await eventsRes.json();

      setCourses(coursesData.data || []);
      setEvents(eventsData.data || []);
    };

    fetchDashboardData();
  }, [user?._id]);

  return (
    <div className="flex flex-1 flex-col p-6">
      <span className="text-[32px] font-bold">Dashboard</span>
      <div className="flex flex-col gap-8">
        <div className="flex gap-2.5">
          <div className="flex flex-2 flex-col gap-6">
            <div className="flex items-end gap-6">
              <div className="flex flex-1 flex-col text-2xl leading-none">
                <span className="font-bold">Hi,</span>
                <span className="font-bold">{user?.name || "User"}</span>
                <span>Welcome Back!</span>
                <Image
                  src={DashboardWelcomeGraphics}
                  alt="Dashboard Welcome Graphics"
                  className="mt-4 w-47.5"
                />
              </div>
              <DashboardCountdownCard />
            </div>
            <div className="flex gap-2.5">
              <div className="flex flex-1 flex-col gap-2.5">
                <span className="font-medium">Your Courses</span>
                {courses.map((course) => (
                  <DashboardCourseCard
                    key={course._id.toString()}
                    course={course}
                  />
                ))}
              </div>
              <div className="flex flex-1 flex-col gap-2.5">
                <span className="font-medium">Your Tickets</span>
                {events.map((ticket) => (
                  <DashboardTicketCard
                    key={ticket._id.toString()}
                    ticket={ticket}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-between gap-4 rounded-xl border border-[#D9D9D9] p-3 shadow-[1px_0px_15.4px_0px_#00000012]">
            <DashboardCalendar />
          </div>
        </div>
        <div className="mt-6 flex gap-2.5">
          <DashboardStatCard
            title="Upcoming Events"
            stat={events.length}
            Icon={BookOpen}
            iconColor="#155DFC"
            iconBGColor="#EFF6FF"
          />

          <DashboardStatCard
            title="Total Courses"
            stat={courses.length}
            Icon={Calendar}
            iconColor="#E60076"
            iconBGColor="#FDF2F8"
          />

          <DashboardStatCard
            title="Completed Courses"
            stat={courses.filter((c) => c.progress === 100).length}
            Icon={CircleCheckBig}
            iconColor="#155DFC"
            iconBGColor="#EFF6FF"
          />
        </div>
      </div>
    </div>
  );
}
