import { connectDB } from "@/lib/db";
import  Application  from "@/models/Application";
import { Job } from "@/models/Job";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();
    const { jobId, userId, resumeUrl, coverLetter } = body;

    if (!jobId || !userId) {
      return NextResponse.json(
        { message: "jobId and userId are required" },
        { status: 400 },
      );
    }

    /* -------- Validate ObjectIds -------- */
    if (
      !mongoose.Types.ObjectId.isValid(jobId) ||
      !mongoose.Types.ObjectId.isValid(userId)
    ) {
      return NextResponse.json(
        { message: "Invalid jobId or userId" },
        { status: 400 },
      );
    }

    /* -------- Check job exists -------- */
    const job = await Job.findById(jobId);
    if (!job) {
      return NextResponse.json({ message: "Job not found" }, { status: 404 });
    }

    /* -------- Prevent duplicate apply -------- */
    const existing = await Application.findOne({
      job: jobId,
      candidate: userId,
    });

    if (existing) {
      return NextResponse.json(
        { message: "You already applied to this job" },
        { status: 400 },
      );
    }

    /* -------- Create application -------- */
    const application = await Application.create({
      job: jobId,
      candidate: userId,
      resumeUrl,
      coverLetter: coverLetter || "",
    });

    /* -------- Push into Job.applications[] -------- */
    job.applications.push(application._id);
    await job.save();

    return NextResponse.json(
      { message: "Application submitted successfully", application },
      { status: 201 },
    );
  } catch (error) {
    console.error(" Apply Job error:", error);

    return NextResponse.json(
      {
        message: "Failed to apply",
        error: error instanceof Error ? error.message : "Server error",
      },
      { status: 500 },
    );
  }
}
