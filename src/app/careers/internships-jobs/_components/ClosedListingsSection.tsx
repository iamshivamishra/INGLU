"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Briefcase,
  MapPin,
  Calendar,
  Users,
  Eye,
  Pencil,
  Building2,
} from "lucide-react";

type Job = {
  _id: string;
  title: string;
  type: "Job" | "Internship";
  workMode: string;
  department: string;
  applications?: string[];
  postedDate: string;
  status: "Open" | "Closed";
};

export default function ClosedListingsSection() {
  const router = useRouter();

  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("/api/jobs");
        const data = await res.json();
        setJobs(data);
      } catch (err) {
        console.error("Failed to fetch jobs", err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const closedJobs = jobs.filter((j) => j.status === "Closed");

  if (loading) return <p className="p-10">Loading jobs...</p>;

  return (
    <section className="space-y-[28.56px] pb-52.25">
      {/* Header */}
      <div className="mx-auto flex w-6xl items-center justify-between">
        <h2 className="font-pjs text-3xl font-medium">Closed Listings</h2>
        <p className="text-lg text-gray-500">
          {closedJobs.length} opportunities
        </p>
      </div>

      <div className="mx-auto grid w-6xl grid-cols-1 gap-[28.56px]">
        {closedJobs.map((job, index) => (
          <div
            key={index}
            className="flex h-[258.25px] w-full flex-col justify-between rounded-[14.28px] border border-gray-200 bg-white p-[29.75px] opacity-60 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <h3 className="text-2xl font-medium">{job.title}</h3>

              <span className="rounded-full bg-red-100 px-3 py-1 text-sm text-red-500">
                Closed
              </span>
            </div>

            <div className="flex gap-3 text-sm">
              <span
                className={`flex items-center gap-2 rounded-full px-4 py-2 font-medium ${
                  job.type === "Internship"
                    ? "bg-green-50 text-green-600"
                    : "bg-blue-50 text-blue-600"
                }`}
              >
                <Briefcase className="h-4 w-4" />
                {job.type}
              </span>

              <span className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 font-medium text-gray-600">
                <MapPin className="h-4 w-4" />
                {job.workMode}
              </span>
            </div>

            {/* Info row */}
            <div className="flex gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-gray-400" />
                {job.department}
              </span>

              <span className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                {job.applications?.length ?? 0} Applications
              </span>

              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(job.postedDate).toDateString()}
              </span>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                onClick={() =>
                  router.push(`/careers/internships-jobs/${job._id}`)
                }
                className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm text-white"
              >
                <Eye className="h-5 w-5" />
                View Details
              </button>

              <button className="flex items-center gap-2 rounded-full bg-[#EFF6FF] px-4 py-2 text-sm text-blue-600">
                <Pencil className="h-5 w-5" />
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
