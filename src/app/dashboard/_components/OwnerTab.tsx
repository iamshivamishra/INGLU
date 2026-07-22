"use client";

import Image, { type StaticImageData } from "next/image";
// import { useState } from "react";
import {
  Plus,
  //   Search,
  //   Filter,
  CalendarDays,
  Pencil,
  Trash2,
  Bell,
  ArrowRight,
} from "lucide-react";

import CourseThumb from "@/assets/OBJECTS.png";
import TicketThumb from "@/assets/OBJECTS1.png";
import OBJECTS from "@/assets/OBJECTS2.png";

/* ================= Types ================= */

type ClassCardProps = {
  title: string;
  name: string;
  time: string;
  onEdit?: (title: string) => void;
  onNotify?: (title: string) => void;
  onDelete?: (title: string) => void;
};

type QuickActionProps = {
  title: string;
  desc: string;
  icon: React.ReactNode;
  onClick?: () => void;
};

type AnnouncementCardProps = {
  title: string;
  desc: string;
  time: string;
  primary?: boolean;
};

type MiniCourseCardProps = {
  title: string;
  desc: string;
  imageSrc: StaticImageData;
  progress?: number; // 0 - 100
};

type MiniTicketCardProps = {
  ticketName: string;
  desc: string;
  imageSrc: StaticImageData;
  onView?: (ticketName: string) => void;
};

/* ================= Main Component ================= */

export default function OwnerTab() {
  //   const [searchUser, setSearchUser] = useState("");

  // ✅ Handlers
  const handleAddClass = () => alert("Add Class clicked");
  //   const handleFilter = () => alert("Filter clicked");
  //   const handleAddUser = () => alert("Add User clicked");
  const handleNewAnnouncement = () => alert("New Announcement clicked");
  const handleAddCourse = () => alert("Add Course clicked");
  const handleAddTicket = () => alert("Add Ticket clicked");

  const handleEditClass = (title: string) =>
    alert(`Edit clicked ✏️\nClass: ${title}`);

  const handleNotifyClass = (title: string) =>
    alert(`Notify clicked 🔔\nClass: ${title}`);

  const handleDeleteClass = (title: string) =>
    alert(`Delete clicked 🗑️\nClass: ${title}`);

  const handleViewTicket = (ticketName: string) =>
    alert(`View Ticket clicked 🎟️\nTicket: ${ticketName}`);

  return (
    <div className="w-full">
      {/* Main Container */}
      <div className="h-357.75 w-329 rounded-[18px] bg-white shadow-md shadow-gray-200">
        {/* Header */}
        <div className="px-8 pt-8">
          <h1 className="font-pjs mb-6 text-3xl font-semibold">
            Owner Dashboard
          </h1>
        </div>

        {/* ================= Row 1 ================= */}
        <div className="mt-6 flex gap-6 px-8">
          {/* Class Schedule */}
          <div className="flex h-75 w-155.5 flex-col gap-3">
            <div className="flex items-center justify-between">
              <p className="text-[13px] font-medium text-[#111827]">
                Class Schedule
              </p>

              <button
                type="button"
                onClick={handleAddClass}
                className="flex h-8 items-center gap-2 rounded-[10px] bg-[#2563EB] px-4 text-[12px] font-medium text-white shadow-md shadow-blue-200"
              >
                <Plus size={14} />
                Add Class
              </button>
            </div>

            {/* Add Class Container */}
            <div className="h-75 w-155.5 rounded-[14px] bg-white pt-5.25 pr-5.25 pb-px pl-5.25 shadow-md shadow-gray-400">
              <div className="flex flex-col gap-3">
                <ClassCard
                  title="React Advanced Patterns"
                  name="John Doe"
                  time="2024-12-26 at 10:00 AM"
                  onEdit={handleEditClass}
                  onNotify={handleNotifyClass}
                  onDelete={handleDeleteClass}
                />
                <ClassCard
                  title="UI/UX Design Workshop"
                  name="Sarah Smith"
                  time="2024-12-27 at 2:00 PM"
                  onEdit={handleEditClass}
                  onNotify={handleNotifyClass}
                  onDelete={handleDeleteClass}
                />
                <ClassCard
                  title="Marketing 101"
                  name="Mr. Ansh"
                  time="2024-12-28 at 11:00 AM"
                  onEdit={handleEditClass}
                  onNotify={handleNotifyClass}
                  onDelete={handleDeleteClass}
                />
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex h-84.75 w-75.25 flex-col gap-3">
            <p className="text-[#111827 기억] text-[16px] font-medium">
              Quick Actions
            </p>

            <div className="flex h-75.75 w-75.25 flex-col gap-3 rounded-[14px] bg-white p-5.25 shadow-md shadow-gray-400">
              <QuickAction
                title="Schedule Class"
                desc="Create new session"
                icon={<Plus size={16} className="text-white" />}
                onClick={handleAddClass}
              />
              <QuickAction
                title="Send Reminders"
                desc="Notify all students"
                icon={<Bell size={16} className="text-white" />}
                onClick={() => alert("Send Reminders clicked 🔔")}
              />
              <QuickAction
                title="View Full Calendar"
                desc="Monthly overview"
                icon={<CalendarDays size={16} className="text-white" />}
                onClick={() => alert("View Full Calendar clicked 📅")}
              />

              <div className="mt-auto border-t border-[#EEF2F7] pt-3">
                <p className="h-4 text-[12px] text-[#4A5565]">
                  {" "}
                  Upcoming This Week{" "}
                </p>
                <div className="mt-1 flex items-center justify-between">
                  <p className="h-4 text-[12px] text-[#364153]">
                    Classes scheduled
                  </p>
                  <p className="text-[14px] font-semibold text-[#111827]">12</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= Announcements (Heading OUTSIDE) ================= */}
        <div className="mt-6 px-8">
          {/* Heading OUTSIDE */}
          <div className="mb-2 flex w-233.75 items-center justify-between">
            <p className="text-[13px] font-medium text-[#111827]">
              Announcements
            </p>

            <button
              type="button"
              onClick={handleNewAnnouncement}
              className="h-8 rounded-[10px] bg-[#2563EB] px-4 text-[12px] font-medium text-white shadow-md shadow-blue-200"
            >
              + New Announcement
            </button>
          </div>

          {/* Container */}
          <div className="flex h-68.5 w-233.75 flex-col gap-3 rounded-[14px] bg-white p-4 shadow-md shadow-gray-400">
            <AnnouncementCard
              title="Platform Maintenance Scheduled"
              desc="System will be down for maintenance on Dec 28, 2024 from 2-4 AM EST."
              time="Posted 2 days ago"
              primary
            />

            <AnnouncementCard
              title="New Course Categories Added"
              desc="We added Data Science and AI/ML categories to our platform."
              time="Posted 5 days ago"
            />
          </div>
        </div>

        {/* ================= Bottom Row ================= */}
        <div className="mt-6 flex items-start gap-6 px-8">
          {/* ================= All Courses ================= */}
          <div className="w-70">
            {/* Header OUTSIDE */}
            <div className="mb-2 flex items-center justify-between">
              <p className="text-[13px] font-medium text-[#111827]">
                All Courses
              </p>

              <button
                type="button"
                onClick={handleAddCourse}
                className="flex h-7 items-center gap-2 rounded-[7.73px] bg-[#2563EB] px-3 text-[11px] font-medium text-white"
              >
                <Plus size={14} />
                Add Course
              </button>
            </div>

            {/* Container EXACT */}
            <div className="h-68.5 w-70.75 rounded-[14px] border border-[#E5E7EB] bg-white py-2 pl-1.25 shadow-md shadow-gray-400">
              <div className="flex flex-col gap-1.75">
                <MiniCourseCard
                  title="Marketing 101"
                  desc="Learn everything about marketing zero to hero"
                  imageSrc={CourseThumb}
                  progress={60}
                />
                <MiniCourseCard
                  title="Marketing 101"
                  desc="Learn everything about marketing zero to hero"
                  imageSrc={CourseThumb}
                  progress={65}
                />
                <MiniCourseCard
                  title="Marketing 101"
                  desc="Learn everything about marketing zero to hero"
                  imageSrc={CourseThumb}
                  progress={55}
                />
              </div>
            </div>
          </div>

          {/* ================= All Tickets ================= */}
          <div className="w-70.75">
            {/* Header OUTSIDE */}
            <div className="mb-2 flex items-center justify-between">
              <p className="text-[13px] font-medium text-[#111827]">
                All Tickets
              </p>

              <button
                type="button"
                onClick={handleAddTicket}
                className="flex h-7 items-center gap-2 rounded-[7.65px] bg-[#2563EB] px-3 text-[11px] font-medium text-white shadow-[0px_10px_18px_rgba(37,99,235,0.22)] active:scale-[0.98]"
              >
                <Plus size={14} />
                Add Ticket
              </button>
            </div>

            {/* Container EXACT */}
            <div className="h-68.5 w-70.75 rounded-[14px] border border-[#E5E7EB] bg-white py-2 pl-1.25 shadow-md shadow-gray-400">
              <div className="flex flex-col gap-1.75">
                <MiniTicketCard
                  ticketName="FANPIT Access : DELHI 6"
                  desc="UNDERGROUND FT. FOOSIE GANG ARPIT BALA X BHAPPA"
                  imageSrc={TicketThumb}
                  onView={handleViewTicket}
                />
                <MiniTicketCard
                  ticketName="FANPIT Access : DELHI 6"
                  desc="UNDERGROUND FT. FOOSIE GANG ARPIT BALA X BHAPPA"
                  imageSrc={TicketThumb}
                  onView={handleViewTicket}
                />
                <MiniTicketCard
                  ticketName="FANPIT Access : DELHI 6"
                  desc="UNDERGROUND FT. FOOSIE GANG ARPIT BALA X BHAPPA"
                  imageSrc={TicketThumb}
                  onView={handleViewTicket}
                />
              </div>
            </div>
          </div>

          {/* ================= Right Illustration ================= */}
          <div className="h-[299.046px] w-[347.195px]">
            <div className="relative h-full w-full">
              <Image
                src={OBJECTS}
                alt="Dashboard Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= Components ================= */

function ClassCard({
  title,
  name,
  time,
  onEdit,
  onNotify,
  onDelete,
}: ClassCardProps) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-[#F9FAFB] px-4 py-3 shadow-[0px_4px_12px_rgba(0,0,0,0.06)]">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#2563EB]">
          <CalendarDays size={16} className="text-white" />
        </div>

        <div>
          <p className="text-[13px] font-semibold text-[#111827]">{title}</p>
          <p className="text-[11px] text-[#6B7280]">
            {name} &nbsp; • &nbsp; {time}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => onEdit?.(title)}
          className="text-[#2563EB] active:scale-[0.95]"
        >
          <Pencil size={14} />
        </button>

        <button
          type="button"
          onClick={() => onNotify?.(title)}
          className="text-[#F97316] active:scale-[0.95]"
        >
          <Bell size={14} />
        </button>

        <button
          type="button"
          onClick={() => onDelete?.(title)}
          className="text-[#EF4444] active:scale-[0.95]"
        >
          <Trash2 size={14} />
        </button>
      </div>
    </div>
  );
}

function QuickAction({ title, desc, icon, onClick }: QuickActionProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-3 rounded-xl bg-[#F9FAFB] px-4 py-3 text-left shadow-[0px_4px_12px_rgba(0,0,0,0.06)]"
    >
      <div className="flex h-8.5 w-8.5 items-center justify-center rounded-[10px] bg-[#2563EB] shadow-[0px_6px_14px_rgba(37,99,235,0.25)]">
        {icon}
      </div>

      <div>
        <p className="text-[12px] font-semibold text-[#111827]">{title}</p>
        <p className="text-[11px] text-[#6B7280]">{desc}</p>
      </div>
    </button>
  );
}

function AnnouncementCard({
  title,
  desc,
  time,
  primary = false,
}: AnnouncementCardProps) {
  return (
    <div
      className={`rounded-xl p-4 shadow-[0px_4px_12px_rgba(0,0,0,0.06)] ${
        primary ? "bg-[#EEF6FF]" : "bg-[#F9FAFB]"
      }`}
    >
      <p className="text-[13px] font-semibold text-[#111827]">{title}</p>
      <p className="mt-1 text-[11px] text-[#6B7280]">{desc}</p>
      <p className="mt-2 text-[11px] text-[#9CA3AF]">{time}</p>
    </div>
  );
}

/* =================  All Courses Card  ================= */
function MiniCourseCard({
  title,
  desc,
  imageSrc,
  progress = 60,
}: MiniCourseCardProps) {
  return (
    <div className="h-20.25 w-67 rounded-[14px] border border-[#E5E7EB] bg-white px-3 py-2 shadow-md shadow-gray-200">
      <div className="flex h-full items-center gap-3">
        {/* Image Frame EXACT */}
        <div className="relative h-18.25 w-18.25 overflow-hidden bg-[#EAF2FF]">
          <Image src={imageSrc} alt="course" className="rounded-[9px]" />
        </div>

        {/* Content */}
        <div className="flex-1">
          <p className="text-[14px] leading-4 font-semibold text-[#111827]">
            {title}
          </p>
          <p className="mt-0.5 line-clamp-2 text-[11px] leading-3.25 text-[#6B7280]">
            {desc}
          </p>

          {/* Progress line  */}
          <div className="mt-2 flex flex-col gap-[2.5px]">
            <div className="h-2.5 w-[170.31px] overflow-hidden rounded-full bg-[#E5E7EB]">
              <div
                className="h-full rounded-full bg-[#2563EB]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <button
            type="button"
            className="mt-2 inline-flex h-4.25 w-20 items-center gap-2 rounded-full bg-[#2563EB] px-3 text-[4.47px] font-semibold text-white"
            onClick={() => alert("Continue Learning clicked")}
          >
            CONTINUE LEARNING
            <ArrowRight size={10} />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ================= All Tickets Card  ================= */
function MiniTicketCard({
  ticketName,
  desc,
  imageSrc,
  onView,
}: MiniTicketCardProps) {
  return (
    <div className="h-20.25 w-67 rounded-[14px] border border-[#E5E7EB] bg-white px-3 py-2 shadow-md shadow-gray-200">
      <div className="flex h-full items-center justify-between gap-3">
        {/* Left Content */}
        <div className="flex-1">
          <p className="line-clamp-1 text-[13px] leading-3.75 font-semibold text-[#111827]">
            {ticketName}
          </p>
          <p className="mt-0.5 line-clamp-2 text-[10px] leading-3 text-[#6B7280]">
            {desc}
          </p>

          {/* View Ticket button */}
          <button
            type="button"
            onClick={() => onView?.(ticketName)}
            className="mt-2 inline-flex h-[16.63px] w-[61.81px] items-center gap-2 rounded-full bg-[#2563EB] px-3 text-[4.47px] font-semibold text-white"
          >
            VIEW TICKET
            <ArrowRight size={10} />
          </button>
        </div>

        {/* Image Frame EXACT */}
        <div className="relative h-19.75 w-19.75 overflow-hidden rounded-[11px] bg-white">
          <Image src={imageSrc} alt="ticket" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
}
