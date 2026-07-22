import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Coupon from "@/models/Coupon";
import Payment from "@/models/Payment";
import Ticket from "@/models/Ticket";
import { getUserFromRequest } from "@/lib/getUserFromRequest";
import QRCode from "qrcode";
import { sendTicketEmail } from "@/lib/sendTicketEmail";

export async function POST(req: Request) {
  try {
    await connectDB();

    const loggedInUser = await getUserFromRequest();
    if (!loggedInUser) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 },
      );
    }

    const { couponId, items, eventName } = await req.json();

    if (!items || items.length === 0) {
      return NextResponse.json(
        { success: false, message: "No items provided" },
        { status: 400 },
      );
    }

    /* ===============================
       1️⃣ Update Coupon Usage
    =============================== */

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

    /* ===============================
       2️⃣ Create Payment Record (₹0)
    =============================== */

    const totalQuantity = items.reduce(
      (sum: number, item: any) => sum + item.quantity,
      0,
    );

    const payment = await Payment.create({
      user: loggedInUser._id,
      listing: "FREE_EVENT",
      type: "EVENT",
      quantity: totalQuantity,
      totalAmount: 0,
      paymentStatus: "PAID",
    });

    /* ===============================
       3️⃣ Create Ticket
    =============================== */

    const ticket = await Ticket.create({
      userId: loggedInUser._id,
      purchaseId: payment._id,
      items,
      eventName,
      ticketNumber:
        "TICKET-" + Math.random().toString(36).substring(2, 10).toUpperCase(),
      status: "VALID",
      createdBy: loggedInUser._id,
      createdByEmail: loggedInUser.email,
      issuedAt: new Date(),
    });
    const qrCodeDataURL = await QRCode.toDataURL(
      `${process.env.APP_URL}/ticket?id=${ticket._id}`,
    );

    ticket.qrCode = qrCodeDataURL;
    await ticket.save();

    try {
      await sendTicketEmail({
        email: loggedInUser.email,
        firstName: loggedInUser.name || "User",
        ticketId: ticket._id.toString(),
      });

      console.log("✅ Ticket email sent successfully");
    } catch (err) {
      console.error("❌ Ticket email failed:", err);
    }

    ticket.qrCode = qrCodeDataURL;
    await ticket.save();

    return NextResponse.json({
      success: true,
      ticketId: ticket._id, // 🔥 IMPORTANT
    });
  } catch (err) {
    console.error("FREE ORDER ERROR:", err);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 },
    );
  }
}
