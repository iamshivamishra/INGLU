"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { MapPin, Calendar, Users, ArrowLeft } from "lucide-react";
import { required } from "zod/mini";
import { toast } from "@/components/Toast";

type Job = {
  _id: string;
  title: string;
  type: string;
  workMode: string;
  department: string;
  description?: string;
  requirements?: string[];
  applications?: string[];
  postedDate: string;
  status: string;
};

export default function JobPost() {
const params = useParams<{ id: string }>();
const id = params?.id ?? "";  const router = useRouter();

  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [showModal, setShowModal] = useState(false);
  const [resumeOption, setResumeOption] = useState<"file" | "link">("file");
  const initialFormState = {
    name: "",
    email: "",
    phone: "",
    experience: "",
    currentCompany: "",
    currentRole: "",
    expectedSalary: "",
    noticePeriod: "",
    resume: null as File | null,
    resumeDriveLink: "",
  };
  const [formData, setFormData] = useState(initialFormState);
  /* ---------------- Fetch Job ---------------- */
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/jobs/${id}`, { cache: "no-store" });

        if (!res.ok) throw new Error("Job not found");

        const data = await res.json();
        setJob(data);
      } catch (err) {
        console.error("Failed to fetch job", err);
        setError("Unable to load job details.");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchJob();
  }, [id]);

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.phone) {
      toast("Please fill required fields", "info", 2000);
      return;
    }

    if (!formData.resume && !formData.resumeDriveLink) {
      toast("Please upload resume file or provide drive link", "info", 2000);
      return;
    }
    const form = new FormData();

    form.append("jobId", job!._id);
    form.append("jobTitle", job!.title);
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("experience", formData.experience);
    form.append("currentCompany", formData.currentCompany);
    form.append("currentRole", formData.currentRole);
    form.append("expectedSalary", formData.expectedSalary);
    form.append("noticePeriod", formData.noticePeriod);

    if (formData.resume) {
      form.append("resume", formData.resume);
    }

    if (formData.resumeDriveLink) {
      form.append("resumeDriveLink", formData.resumeDriveLink);
    }

    const res = await fetch("/api/upload-application", {
      method: "POST",
      body: form,
    });

    if (res.ok) {
      toast("Application submitted successfully!", "success", 1000);
      setFormData(initialFormState);
      setResumeOption("file");
      setShowModal(false);
    } else {
      toast("Submission failed", "error", 1500);
    }
  };

  if (loading)
    return (
      <div className="animate-pulse p-10 text-gray-500">
        Loading job details...
      </div>
    );

  if (error) return <div className="p-10 text-red-500">{error}</div>;

  if (!job) return <p className="p-10">Job not found</p>;

  return (
    <div className="mx-auto max-w-225 space-y-8 p-10">
      {/* Back button */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-blue-600 hover:underline"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </button>

      {/* Title */}
      <h1 className="text-4xl font-bold">{job.title}</h1>

      {/* Meta info */}
      <div className="flex flex-wrap gap-6 text-gray-500">
        <span>{job.type}</span>

        <span className="flex items-center gap-1">
          <MapPin className="h-4 w-4" />
          {job.workMode}
        </span>

        <span>{job.department}</span>

        <span className="flex items-center gap-1">
          <Users className="h-4 w-4" />
          {job.applications?.length ?? 0} applicants
        </span>

        <span className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          {job.postedDate ? new Date(job.postedDate).toDateString() : "N/A"}
        </span>
      </div>

      {/* Description */}
      <div>
        <h2 className="mb-2 text-2xl font-semibold">Job Description</h2>
        <p className="text-gray-700">
          {job.description || "No description provided."}
        </p>
      </div>

      {/* Requirements */}
      <div>
        <h2 className="mb-2 text-2xl font-semibold">Requirements</h2>

        {job.requirements?.length ? (
          <ul className="list-disc space-y-1 pl-5 text-gray-700">
            {job.requirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No requirements listed.</p>
        )}
      </div>

      {/* Apply Button */}
      <button
        onClick={() => setShowModal(true)}
        className="rounded-2xl border bg-blue-600 px-4 py-2 text-white duration-300 hover:scale-105"
      >
        Apply Now
      </button>

      {/* ---------------- Modal ---------------- */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="max-h-[90vh] w-full max-w-lg space-y-4 overflow-y-auto rounded-xl bg-white p-6">
            <h2 className="text-xl font-bold">Apply for {job.title}</h2>

            {[
              {
                name: "name",
                placeholder: "Full Name*",
                type: "text",
                required: true,
              },
              {
                name: "email",
                placeholder: "Email*",
                type: "email",
                required: true,
              },
              {
                name: "phone",
                placeholder: "Phone*",
                type: "tel",
                required: true,
              },
              {
                name: "experience",
                placeholder: "Total Years of Experience*",
                type: "number",
                required: true,
              },
              {
                name: "currentCompany",
                placeholder: "Current Company",
                type: "text",
              },
              {
                name: "currentRole",
                placeholder: "Current Role",
                type: "text",
              },
              {
                name: "expectedSalary",
                placeholder: "Expected Salary*",
                type: "text",
                required: true,
              },
              {
                name: "noticePeriod",
                placeholder: "Notice Period",
                type: "text",
              },
            ].map((field) => (
              <input
                key={field.name}
                type={field.type}
                placeholder={field.placeholder}
                value={(formData as any)[field.name]}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [field.name]: e.target.value,
                  })
                }
                className="w-full rounded border p-2"
              />
            ))}

            <div className="space-y-3">
              <label className="font-medium">Resume *</label>

              <div className="flex gap-4 text-sm">
                <label className="flex items-center gap-2">
                  <input
                    className="cursor-pointer"
                    type="radio"
                    checked={resumeOption === "file"}
                    onChange={() => setResumeOption("file")}
                  />
                  Upload File
                </label>

                <label className="flex items-center gap-2">
                  <input
                    className="cursor-pointer"
                    type="radio"
                    checked={resumeOption === "link"}
                    onChange={() => setResumeOption("link")}
                  />
                  Drive Link
                </label>
              </div>

              {resumeOption === "file" ? (
                <div className="space-y-2">
                  <input
                    key="resume-file"
                    id="resume-upload"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        resume: e.target.files?.[0] || null,
                        resumeDriveLink: "",
                      })
                    }
                  />

                  <label
                    htmlFor="resume-upload"
                    className="inline-block cursor-pointer rounded-lg border bg-gray-500 px-4 py-2 text-white transition duration-300 hover:scale-105"
                  >
                    Choose Resume File
                  </label>

                  {formData.resume && (
                    <p className="text-sm text-gray-600">
                      Selected: {formData.resume.name}
                    </p>
                  )}
                </div>
              ) : (
                <input
                  key="resume-link"
                  type="url"
                  placeholder="Paste Google Drive Resume Link"
                  value={formData.resumeDriveLink || ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      resumeDriveLink: e.target.value,
                      resume: null,
                    })
                  }
                  className="w-full rounded border p-2"
                />
              )}
            </div>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setFormData(initialFormState);
                  setResumeOption("file");
                  setShowModal(false);
                }}
                className="rounded border px-4 py-2"
              >
                Cancel
              </button>

              <button
                onClick={handleSubmit}
                className="rounded bg-blue-600 px-4 py-2 text-white"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
