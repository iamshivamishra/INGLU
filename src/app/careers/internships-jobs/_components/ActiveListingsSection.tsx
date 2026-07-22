"use client";
import { useRouter } from "next/navigation";
import {
  Briefcase,
  MapPin,
  Calendar,
  Users,
  Eye,
  Pencil,
  XCircle,
  Building2,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "@/components/Toast";

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

type UserType = {
  role: string;
  name?: string;
};
type Props = {
  search: string;
  departmentFilter: string;
  typeFilter: string;
  workModeFilter: string;
};

export default function ActiveListingsSection({
  search,
  departmentFilter,
  typeFilter,
  workModeFilter,
}: Props) {
  const router = useRouter();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<UserType | null>(null);

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editingJob, setEditingJob] = useState<Job | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("/api/jobs", { cache: "no-store" });
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

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/auth/me", { credentials: "include" });
        const data = await res.json();
        setUser(data.user);
      } catch (err) {
        console.error("Failed to load user", err);
      }
    };
    fetchUser();
  }, []);

  const filteredJobs = jobs.filter((job) => {
    if (job.status !== "Open") return false;

    if (search && !job.title.toLowerCase().includes(search.toLowerCase()))
      return false;

    if (departmentFilter !== "All" && job.department !== departmentFilter)
      return false;

    if (typeFilter !== "All" && job.type !== typeFilter) return false;

    if (workModeFilter !== "All" && job.workMode !== workModeFilter)
      return false;

    return true;
  });
  const handleClose = async (id: string) => {
    const confirmDelete = confirm(
      "Are you sure you want to permanently delete this job?",
    );

    if (!confirmDelete) return;

    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setJobs((prev) => prev.filter((job) => job._id !== id));
    } else {
      toast("Failed to delete job", "error", 1000);
    }
  };

  const openEditModal = (job: Job) => {
    setEditingJob(job);
    setIsEditOpen(true);
  };

  const handleEditSubmit = async () => {
    if (!editingJob) return;

    const res = await fetch(`/api/jobs/${editingJob._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editingJob),
    });

    if (res.ok) {
      const updated = await res.json();

      setJobs((prev) =>
        prev.map((job) => (job._id === updated._id ? updated : job)),
      );

      setIsEditOpen(false);
      setEditingJob(null);
    } else {
      toast("Failed to update job", "error", 1000);
    }
  };

  if (loading) return <p className="p-10">Loading jobs...</p>;

  return (
    <div className="space-y-[28.56px] px-4 pt-12 pb-24 sm:px-8 lg:px-20 xl:pt-21.75 xl:pb-40">
      <div className="mx-auto flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-medium sm:text-3xl xl:px-40">
          Active Listings
        </h2>
        <p className="text-base text-gray-500 sm:text-lg xl:px-40">
          {filteredJobs.length} opportunities opportunities
        </p>
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-[28.56px]">
        {filteredJobs.map((job) => (
          <div
            key={job._id}
            className="flex flex-col justify-between rounded-[14.28px] border border-gray-200 bg-white p-5 shadow-sm sm:p-6 lg:h-65"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-pjs text-lg font-medium sm:text-xl lg:text-2xl">
                {job.title}
              </h3>
              <span className="shrink-0 rounded-full bg-green-100 px-3 py-1 text-xs text-green-600 sm:text-sm">
                Open
              </span>
            </div>

            <div className="flex flex-wrap gap-3 text-xs sm:text-sm">
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

            <div className="flex flex-wrap gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <Building2 className="h-4 w-4" />
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

            <div className="flex flex-wrap gap-3 pt-4">
              <button
                onClick={() =>
                  router.push(`/careers/internships-jobs/${job._id}`)
                }
                className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-xs text-white sm:text-sm"
              >
                <Eye className="h-5 w-5" />
                View Details
              </button>

              {user?.role === "ADMIN" && (
                <>
                  <button
                    onClick={() => openEditModal(job)}
                    className="flex items-center gap-2 rounded-full bg-[#EFF6FF] px-4 py-2 text-xs text-blue-600 sm:text-sm"
                  >
                    <Pencil className="h-5 w-5" />
                    Edit
                  </button>

                  <button
                    onClick={() => handleClose(job._id)}
                    className="flex items-center gap-2 rounded-full bg-[#FEF2F2] px-4 py-2 text-xs text-red-500 sm:text-sm"
                  >
                    <XCircle className="h-4 w-4" />
                    Close
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {isEditOpen && editingJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-lg space-y-4 rounded-xl bg-white p-6">
            <h2 className="text-lg font-semibold">Edit Job</h2>

            <input
              type="text"
              value={editingJob.title}
              onChange={(e) =>
                setEditingJob({ ...editingJob, title: e.target.value })
              }
              className="w-full rounded border p-2"
            />

            <select
              value={editingJob.type}
              onChange={(e) =>
                setEditingJob({
                  ...editingJob,
                  type: e.target.value as "Job" | "Internship",
                })
              }
              className="w-full rounded border p-2"
            >
              <option value="Job">Job</option>
              <option value="Internship">Internship</option>
            </select>

            <select
              value={editingJob.workMode}
              onChange={(e) =>
                setEditingJob({
                  ...editingJob,
                  workMode: e.target.value,
                })
              }
              className="w-full rounded border p-2"
            >
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
              <option value="On-site">On-site</option>
            </select>

            <select
              value={editingJob.department}
              onChange={(e) =>
                setEditingJob({
                  ...editingJob,
                  department: e.target.value,
                })
              }
              className="w-full rounded border p-2"
            >
              <option value="Engineering">Engineering</option>
              <option value="Design">Design</option>
              <option value="Marketing">Marketing</option>
              <option value="Analytics">Analytics</option>
            </select>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsEditOpen(false)}
                className="rounded border px-4 py-2"
              >
                Cancel
              </button>

              <button
                onClick={handleEditSubmit}
                className="rounded bg-blue-600 px-4 py-2 text-white"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
