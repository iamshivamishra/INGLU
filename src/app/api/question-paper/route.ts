import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { QuestionPaper } from "@/models/QuestionPaper";

async function connectDB() {
  try {
    if (mongoose.connection.readyState === 1) return;

    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("DB Connection Error:", err);
    throw new Error("Database connection failed");
  }
}
export async function POST(req: { json: () => any }) {
  try {
    await connectDB();

    const body = await req.json();
    const paper = await QuestionPaper.create(body);

    return NextResponse.json({ success: true, paper }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Something went wrong",
      },
      { status: 500 },
    );
  }
}
export async function GET() {
  try {
    await connectDB();

    const papers = await QuestionPaper.find().sort({ createdAt: -1 });

    return NextResponse.json({ success: true, papers }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Something went wrong",
      },
      { status: 500 },
    );
  }
}
