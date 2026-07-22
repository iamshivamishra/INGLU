import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Job } from "@/models/Job";
import  Application  from "@/models/Application";
import "@/models/User";

/* ================= GET ================= */
export async function GET(req: Request) {
  await connectDB();

  const { searchParams } = new URL(req.url);
  const action = searchParams.get("action");

  if (action === "getJobWithApplications") {
    const id = searchParams.get("id");

    const job = await Job.findById(id).populate({
      path: "applications",
      populate: { path: "candidate", select: "name email" },
    });

    return NextResponse.json(job);
  }

  /* ===== GET ALL JOBS ===== */
  if (action === "getJobs") {
    const jobs = await Job.find().sort({ createdAt: -1 });
    return NextResponse.json(jobs);
  }

  /* ===== GET SINGLE JOB ===== */
  if (action === "getJob") {
    const id = searchParams.get("id");
    const job = await Job.findById(id);

    if (!job) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    return NextResponse.json(job);
  }

  return NextResponse.json({ error: "Invalid GET action" }, { status: 400 });
}

/* ================= POST ================= */
export async function POST(req: Request) {
  await connectDB();

  const { action, data } = await req.json();

  /* ===== CREATE JOB ===== */
  if (action === "createJob") {
    const job = await Job.create(data);
    return NextResponse.json(job, { status: 201 });
  }

  /* ===== APPLY TO JOB ===== */
  if (action === "apply") {
    const application = await Application.create(data);

    // increment applications count in Job
    await Job.findByIdAndUpdate(data.job, {
      $push: { applications: application._id },
      $inc: { applicationsCount: 1 },
    });

    return NextResponse.json(application, { status: 201 });
  }

  return NextResponse.json({ error: "Invalid POST action" }, { status: 400 });
}

/* ================= PUT ================= */
export async function PUT(req: Request) {
  await connectDB();

  const { action, id, data } = await req.json();

  /* ===== UPDATE JOB ===== */
  if (action === "updateJob") {
    const updated = await Job.findByIdAndUpdate(id, data, { new: true });

    if (!updated) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    return NextResponse.json(updated);
  }

  return NextResponse.json({ error: "Invalid PUT action" }, { status: 400 });
}

/* ================= DELETE ================= */
export async function DELETE(req: Request) {
  await connectDB();

  const { action, id } = await req.json();

  /* ===== DELETE JOB ===== */
  if (action === "deleteJob") {
    const deleted = await Job.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ error: "Invalid DELETE action" }, { status: 400 });
}
