import { NextRequest, NextResponse } from "next/server";
import Coupon from "@/models/Coupon";
import { connectDB } from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const active = searchParams.get("active");

    const filter: Record<string, unknown> = {};
    if (active === "true") {
      filter.isActive = true;
      filter.showCode = true;
    }
    const coupons = await Coupon.find(filter).sort({ createdAt: -1 });

    return NextResponse.json({ success: true, data: coupons }, { status: 200 });
  } catch (error: unknown) {
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();
    const {
      code,
      description,
      showCode,
      discountType,
      discountValue,
      maxRedemptions,
      minimumOrder,
      startsAt,
      expiresAt,
      applicableProducts, // 👈 ADD THIS
    } = body;

    if (
      !code ||
      !discountType ||
      discountValue == null ||
      !startsAt ||
      !expiresAt
    ) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 },
      );
    }

    if (discountType === "Percentage" && discountValue > 100) {
      return NextResponse.json(
        { success: false, message: "Percentage Discount Cannot exceed 100" },
        { status: 400 },
      );
    }

    const existing = await Coupon.findOne({ code });
    if (existing) {
      return NextResponse.json(
        { success: false, message: "Coupon Code Allready Exists" },
        { status: 409 },
      );
    }

    const coupon = await Coupon.create({
      code: code.toUpperCase().trim(),
      description,
      showCode,
      discountType,
      discountValue,
      maxRedemptions,
      minimumOrder,
      startsAt,
      expiresAt,
      applicableProducts,
    });

    return NextResponse.json({ success: true, data: coupon }, { status: 201 });
  } catch (error: unknown) {
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
