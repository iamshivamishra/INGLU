import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Course from "@/models/Course";

const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGODB_URI as string);
};

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    const course = await Course.create({
      ...body,
      userId: body.userId,
    });

    return NextResponse.json({ success: true, data: course }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}

export async function GET(req: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (id) {
      const course = await Course.findById(id);
      if (!course) {
        return NextResponse.json(
          { success: false, message: "Course not found" },
          { status: 404 },
        );
      }
      return NextResponse.json({ success: true, data: course });
    }

    const userId = searchParams.get("userId");

    const query = userId ? { userId: new mongoose.Types.ObjectId(userId) } : {};

    const courses = await Course.find(query).sort({ createdAt: -1 });

    return NextResponse.json({ success: true, data: courses });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}

export async function PUT(req: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Course ID required" },
        { status: 400 },
      );
    }

    const body = await req.json();

    const updatedCourse = await Course.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    return NextResponse.json({ success: true, data: updatedCourse });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}

export async function DELETE(req: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Course ID required" },
        { status: 400 },
      );
    }

    await Course.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: "Course deleted successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}
