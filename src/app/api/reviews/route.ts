import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Review from "@/models/Review";

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI missing from environment variables");

  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(uri);
  } catch (err) {
    console.error("Mongoose Connection Error:", err);
    throw new Error("Failed to connect to database");
  }
};

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();
    const {
      itemType,
      itemId,
      rating,
      reviewText,
      userId,
    }: {
      itemType: "COURSE" | "EVENT";
      itemId: string;
      rating: number;
      reviewText?: string;
      userId: string;
    } = body;

    if (!itemType || !itemId || rating === undefined || !userId) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 },
      );
    }

    if (!["COURSE", "EVENT"].includes(itemType)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid itemType. Must be COURSE or EVENT",
        },
        { status: 400 },
      );
    }

    if (
      !mongoose.Types.ObjectId.isValid(itemId) ||
      !mongoose.Types.ObjectId.isValid(userId)
    ) {
      return NextResponse.json(
        { success: false, message: "Invalid itemId or userId format" },
        { status: 400 },
      );
    }

    const review = await Review.create({
      itemType,
      itemId: new mongoose.Types.ObjectId(String(itemId)),
      userId: new mongoose.Types.ObjectId(String(userId)),
      rating,
      reviewText,
    });

    return NextResponse.json({ success: true, data: review }, { status: 201 });
  } catch (error: any) {
    console.error("POST REVIEW ERROR:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function GET(req: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const itemType = searchParams.get("itemType");
    const itemId = searchParams.get("itemId");

    if (!itemType || !itemId) {
      return NextResponse.json(
        {
          success: false,
          message: "itemType and itemId are required query parameters",
        },
        { status: 400 },
      );
    }

    if (!mongoose.Types.ObjectId.isValid(itemId)) {
      return NextResponse.json(
        { success: false, message: "Invalid itemId format" },
        { status: 400 },
      );
    }

    const reviews = await Review.find({
      itemType,
      itemId: new mongoose.Types.ObjectId(itemId),
    }).sort({ createdAt: -1 });

    const totalReviews = reviews.length;

    const averageRating =
      totalReviews === 0
        ? 0
        : reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews;

    return NextResponse.json({
      success: true,
      data: {
        reviews,
        totalReviews,

        averageRating: Math.round(averageRating * 10) / 10,
      },
    });
  } catch (error: any) {
    console.error("GET REVIEW ERROR:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Internal Server Error" },
      { status: 500 },
    );
  }
}
