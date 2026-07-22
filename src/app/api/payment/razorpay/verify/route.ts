import { NextResponse } from "next/server";
import crypto from "crypto";
import { cookies } from "next/headers";
import { connectDB } from "@/lib/db";
import { Cart } from "@/models/Cart";
import Coupon from "@/models/Coupon";
import Ticket from "@/models/Ticket";
import Payment from "@/models/Payment";
import QRCode from "qrcode";
import { getUserFromRequest } from "@/lib/getUserFromRequest";
import { sendTicketEmail } from "@/lib/sendTicketEmail";

export async function POST(req: Request) {
  try {
    await connectDB();

    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 },
      );
    }

    const loggedInUser = await getUserFromRequest();

    if (!loggedInUser) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 },
      );
    }

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      couponId,
      items,
      eventName,
      totalAmount,
    } = await req.json();

    // 🔐 Verify Razorpay signature
    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(body)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return NextResponse.json(
        { success: false, message: "Invalid Signature" },
        { status: 400 },
      );
    }

    // ==============================
    // 1️⃣ CREATE PAYMENT RECORD
    // ==============================
    const payment = await Payment.create({
      user: loggedInUser._id, // ✅ correct field
      listing: eventName || "Holi Bash", // required string
      type: "EVENT",
      quantity:
        items?.reduce(
          (sum: number, item: any) => sum + (item.quantity || 1),
          0,
        ) || 1,
      totalAmount: totalAmount || 0,
      paymentStatus: "PAID",
    });

    // ==============================
    // 2️⃣ CREATE TICKET
    // ==============================
    const ticket = await Ticket.create({
      userId: loggedInUser._id,
      purchaseId: payment._id, // ✅ ObjectId
      items,
      eventName: eventName || "Holi Bash",
      ticketNumber:
        "TICKET-" + Math.random().toString(36).substring(2, 10).toUpperCase(),
      status: "VALID",
      priority: 0,
      createdBy: loggedInUser._id,
      createdByEmail: loggedInUser.email,
      issuedAt: new Date(),
    });

    const qrCodeDataURL = await QRCode.toDataURL(
      `${process.env.APP_URL}/ticket?id=${ticket._id}`,
    );

    ticket.qrCode = qrCodeDataURL;
    await ticket.save();

    // ==============================
    // 3️⃣ SEND EMAIL
    // ==============================
    await sendTicketEmail({
      email: loggedInUser.email,
      firstName: loggedInUser.name || "User",
      ticketId: ticket._id.toString(),
    });

    // ==============================
    // 4️⃣ UPDATE COUPON USAGE
    // ==============================
    if (couponId) {
      const updatedCoupon = await Coupon.findOneAndUpdate(
        { _id: couponId, isActive: true },
        { $inc: { timesRedeemed: 1 } },
        { new: true },
      );

      if (
        updatedCoupon?.maxRedemptions &&
        updatedCoupon.timesRedeemed >= updatedCoupon.maxRedemptions
      ) {
        await Coupon.updateOne(
          { _id: couponId },
          { $set: { isActive: false } },
        );
      }
    }

    // ==============================
    // 5️⃣ CLEAR CART
    // ==============================
    await Cart.findOneAndUpdate(
      { userId: loggedInUser._id },
      { $set: { items: [] } },
    );

    return NextResponse.json({
      success: true,
      ticketId: ticket._id,
    });
  } catch (error) {
    console.error("VERIFY ERROR:", error);

    return NextResponse.json(
      { success: false, message: "Server Error" },
      { status: 500 },
    );
  }
}
