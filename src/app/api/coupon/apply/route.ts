import { NextRequest, NextResponse } from "next/server";
import Coupon from "@/models/Coupon";
import { connectDB } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const { code, cartTotal, items } = await req.json();

    if (!code || cartTotal == null || !items || items.length === 0) {
      return NextResponse.json(
        { success: false, message: "Invalid request data" },
        { status: 400 },
      );
    }

    const coupon = await Coupon.findOne({
      code: { $regex: `^${code.trim()}$`, $options: "i" },
    });

    if (!coupon || !coupon.isActive) {
      return NextResponse.json(
        { success: false, message: "Invalid or inactive coupon" },
        { status: 404 },
      );
    }

    const now = new Date();

    if (now < coupon.startsAt || now > coupon.expiresAt) {
      return NextResponse.json(
        { success: false, message: "Coupon expired or not started" },
        { status: 400 },
      );
    }

    if (
      coupon.maxRedemptions &&
      coupon.timesRedeemed >= coupon.maxRedemptions
    ) {
      return NextResponse.json(
        { success: false, message: "Coupon usage limit reached" },
        { status: 400 },
      );
    }

    if (coupon.minimumOrder && cartTotal < coupon.minimumOrder) {
      return NextResponse.json(
        { success: false, message: `Minimum order ₹${coupon.minimumOrder}` },
        { status: 400 },
      );
    }

    /* ===================================================
       ✅ PRODUCT-SPECIFIC DISCOUNT CALCULATION
    =================================================== */

    let applicableAmount = 0;

    // If coupon is limited to certain products
    if (coupon.applicableProducts && coupon.applicableProducts.length > 0) {
      applicableAmount = items.reduce((sum: number, item: any) => {
        if (coupon.applicableProducts.includes(item.title)) {
          return sum + item.price * item.quantity;
        }
        return sum;
      }, 0);

      if (applicableAmount === 0) {
        return NextResponse.json(
          { success: false, message: "Coupon not valid for selected tickets" },
          { status: 400 },
        );
      }
    } else {
      // Applies to entire cart
      applicableAmount = cartTotal;
    }

    /* ===================================================
       ✅ DISCOUNT CALCULATION
    =================================================== */

    let discount = 0;

    if (coupon.discountType === "Fixed") {
      discount = Math.min(coupon.discountValue, applicableAmount);
    } else {
      discount = (applicableAmount * coupon.discountValue) / 100;
    }

    discount = Math.min(discount, cartTotal);

    const finalTotal = cartTotal - discount;

    return NextResponse.json({
      success: true,
      discount,
      finalTotal,
      couponId: coupon._id,
      allowFreeOrder: coupon.allowFreeOrder || false, // ✅ important
    });
  } catch (error: unknown) {
    console.error("COUPON APPLY ERROR:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 },
    );
  }
}
