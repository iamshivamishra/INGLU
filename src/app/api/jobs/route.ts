import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Job } from "@/models/Job";
import mongoose from "mongoose";

export async function GET() {
  try {
    await connectDB();

    const jobs = await Job.find().sort({ postedDate: -1 }).lean();

    const formattedJobs = jobs.map((job: any) => ({
      ...job,
      _id: job._id.toString(),
      applications: job.applications ?? [],
    }));

    return NextResponse.json(formattedJobs, { status: 200 });
  } catch (error) {
    console.error(" Jobs API error:", error);

    return NextResponse.json(
      {
        message: "Failed to fetch jobs",
        error: error instanceof Error ? error.message : "Server error",
      },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();
    const { title, type, workMode, department, createdBy } = body;

    if (!title || !type || !workMode || !department) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 },
      );
    }

    let validUserId: mongoose.Types.ObjectId | undefined = undefined;

    if (createdBy) {
      if (!mongoose.Types.ObjectId.isValid(createdBy)) {
        return NextResponse.json(
          { message: "Invalid createdBy user ID" },
          { status: 400 },
        );
      }

      validUserId = new mongoose.Types.ObjectId(createdBy);
    }

    const job = await Job.create({
      title,
      type,
      workMode,
      department,
      description: body.description || "",
      requirements: body.requirements || [],
      createdBy: validUserId,
    });

    return NextResponse.json(
      { message: "Job created successfully", job },
      { status: 201 },
    );
  } catch (error) {
    console.error(" Create Job error:", error);

    return NextResponse.json(
      {
        message: "Failed to create job",
        error: error instanceof Error ? error.message : "Server error",
      },
      { status: 500 },
    );
  }
}
