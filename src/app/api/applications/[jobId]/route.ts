import { connectDB } from "@/lib/db";
import Application from "@/models/Application";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  context: { params: Promise<{ jobId: string }> },
) {
  try {
    await connectDB();

    const { jobId } = await context.params;

    if (!mongoose.Types.ObjectId.isValid(jobId)) {
      return NextResponse.json({ message: "Invalid jobId" }, { status: 400 });
    }

    const applications = await Application.find({ job: jobId })
      .populate("candidate", "name email") // ✅ FIXED
      .sort({ createdAt: -1 });

    return NextResponse.json(applications, { status: 200 });
  } catch (error) {
    console.error(" Fetch applications error:", error);

    return NextResponse.json(
      {
        message: "Failed to fetch applications",
        error: error instanceof Error ? error.message : "Server error",
      },
      { status: 500 },
    );
  }
}
