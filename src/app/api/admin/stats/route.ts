import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Job } from "@/models/Job";

export async function GET() {
  try {
    await connectDB();

    // Count open jobs (type = Job, status = Open)
    const openJobs = await Job.countDocuments({
      type: "Job",
      status: "Open",
    });

    // Count open internships
    const openInternships = await Job.countDocuments({
      type: "Internship",
      status: "Open",
    });

    // Count closed positions
    const closedPositions = await Job.countDocuments({
      status: "Closed",
    });

    // Count total applications (sum of applications array lengths)
    const applicationsAgg = await Job.aggregate([
      {
        $project: {
          count: { $size: { $ifNull: ["$applications", []] } },
        },
      },
      {
        $group: {
          _id: null,
          total: { $sum: "$count" },
        },
      },
    ]);

    const totalApplications = applicationsAgg[0]?.total || 0;

    return NextResponse.json({
      openJobs,
      openInternships,
      totalApplications,
      closedPositions,
    });
  } catch (error) {
    console.error("Stats API Error:", error);

    return NextResponse.json(
      { message: "Failed to fetch stats" },
      { status: 500 },
    );
  }
}
