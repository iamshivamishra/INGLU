"use client";
import { toast } from "@/components/Toast";
import React, { useEffect, useState } from "react";

type UserType = {
  role: string;
  name?: string;
};

const initialJobState = {
  title: "",
  type: "Job",
  workMode: "Remote",
  department: "Engineering",
  description: "",
  requirements: [""],
  status: "Open",
};

export default function CTASection() {
  const [user, setUser] = useState<UserType | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [jobData, setJobData] = useState(initialJobState);
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async () => {
    if (!jobData.title) {
      toast("Title is required", "info", 1000);
      return;
    }

    setLoading(true);

    const res = await fetch("http://localhost:3000/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jobData),
    });

    setLoading(false);

    if (res.ok) {
      toast("Job posted successfully!", "success", 1000);
      setJobData(initialJobState);
      setIsOpen(false);
    } else {
      toast("Failed to post job","error", 1000);
    }
  };

  return (
    <div className="px-4 pt-12 pb-4 sm:px-8 lg:px-20 xl:px-34.25">
      <div>
        <span className="inline-block rounded-full bg-[#EFF6FF] px-4 py-2 text-sm font-medium text-[#155DFC]">
          Welcome to INGLU Careers
        </span>

        <h1 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
          Jobs & Internships
        </h1>

        <p className="mt-2 flex justify-between text-base text-gray-500">
          Manage and track open opportunities for your organization
          {user?.role === "ADMIN" && (
            <button
              onClick={() => setIsOpen(true)}
              className="rounded-2xl border bg-blue-600 px-4 py-2 text-white duration-300 hover:scale-105"
            >
              Post Jobs
            </button>
          )}
        </p>
      </div>

      {/* ---------------- MODAL ---------------- */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="max-h-[90vh] w-full max-w-xl space-y-4 overflow-y-auto rounded-xl bg-white p-6">
            <h2 className="text-xl font-bold">Post New Job</h2>

            {/* Title */}
            <input
              type="text"
              placeholder="Job Title"
              value={jobData.title}
              onChange={(e) =>
                setJobData({ ...jobData, title: e.target.value })
              }
              className="w-full rounded border p-2"
            />

            {/* Type */}
            <select
              value={jobData.type}
              onChange={(e) => setJobData({ ...jobData, type: e.target.value })}
              className="w-full rounded border p-2"
            >
              <option value="Job">Job</option>
              <option value="Internship">Internship</option>
            </select>

            {/* Work Mode */}
            <select
              value={jobData.workMode}
              onChange={(e) =>
                setJobData({ ...jobData, workMode: e.target.value })
              }
              className="w-full rounded border p-2"
            >
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
              <option value="On-site">On-site</option>
            </select>

            {/* Department */}
            <select
              value={jobData.department}
              onChange={(e) =>
                setJobData({ ...jobData, department: e.target.value })
              }
              className="w-full rounded border p-2"
            >
              <option value="Engineering">Engineering</option>
              <option value="Design">Design</option>
              <option value="Marketing">Marketing</option>
              <option value="Analytics">Analytics</option>
            </select>

            {/* Description */}
            <textarea
              placeholder="Job Description"
              value={jobData.description}
              onChange={(e) =>
                setJobData({ ...jobData, description: e.target.value })
              }
              className="w-full rounded border p-2"
              rows={3}
            />

            {/* Requirements */}
            <div className="space-y-3">
  <label className="font-medium">Requirements</label>

  {jobData.requirements.map((req, index) => (
    <div key={index} className="flex gap-2">
      <input
        type="text"
        placeholder={`Requirement ${index + 1}`}
        value={req}
        onChange={(e) => {
          const updated = [...jobData.requirements];
          updated[index] = e.target.value;
          setJobData({ ...jobData, requirements: updated });
        }}
        className="w-full border p-2 rounded"
      />

      {jobData.requirements.length > 1 && (
        <button
          type="button"
          onClick={() => {
            const updated = jobData.requirements.filter(
              (_, i) => i !== index
            );
            setJobData({ ...jobData, requirements: updated });
          }}
          className="px-3 py-2 bg-red-500 text-white rounded"
        >
          ✕
        </button>
      )}
    </div>
  ))}

  <button
    type="button"
    onClick={() =>
      setJobData({
        ...jobData,
        requirements: [...jobData.requirements, ""],
      })
    }
    className="text-blue-600 font-medium hover:underline"
  >
    + Add Requirement
  </button>
</div>

            {/* Status */}
            <select
              value={jobData.status}
              onChange={(e) =>
                setJobData({ ...jobData, status: e.target.value })
              }
              className="w-full rounded border p-2"
            >
              <option value="Open">Open</option>
              <option value="Closed">Closed</option>
            </select>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setIsOpen(false);
                  setJobData(initialJobState);
                }}
                className="rounded border px-4 py-2"
              >
                Cancel
              </button>

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="rounded bg-blue-600 px-4 py-2 text-white"
              >
                {loading ? "Posting..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
