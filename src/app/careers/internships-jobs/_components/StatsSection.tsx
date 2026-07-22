"use client";

import React, { useEffect, useState } from "react";
import { Briefcase, Clock, Users, CheckCircle } from "lucide-react";

type StatsData = {
  openJobs: number;
  openInternships: number;
  totalApplications: number;
  closedPositions: number;
};

export default function StatsSection() {
  const [data, setData] = useState<StatsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("/api/admin/stats");
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Failed to fetch stats", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const stats = [
    { label: "Total Open Jobs", value: data?.openJobs ?? 0, icon: Briefcase },
    {
      label: "Total Open Internships",
      value: data?.openInternships ?? 0,
      icon: Clock,
    },
    {
      label: "Total Applications",
      value: data?.totalApplications ?? 0,
      icon: Users,
    },
    {
      label: "Closed Positions",
      value: data?.closedPositions ?? 0,
      icon: CheckCircle,
    },
  ];

  return (
    <div className="px-34.25 pt-4.75">
      <div className="grid max-w-[1165.5px] grid-cols-4 gap-[28.9px]">
        {stats.map((s, i) => {
          const Icon = s.icon;

          return (
            <div
              key={i}
              className="flex h-68.75 w-67.5 flex-col gap-[28.9px] rounded-[14.45px] border-[1.2px] border-gray-200 bg-[#F4F7FE] p-[28.9px] shadow-sm"
            >
              {/* Icon circle */}
              <div className="flex h-19.25 w-19.25 items-center justify-center rounded-full bg-[#DBEAFE]">
                <Icon className="h-[38.5px] w-[38.5px] text-blue-600" />
              </div>

              {/* Number */}
              <h2 className="font-Medium text-[40px] leading-none text-gray-900">
                {loading ? "—" : s.value}
              </h2>

              {/* Label */}
              <p className="text-[19px] leading-snug text-[#4A5565]">
                {s.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
