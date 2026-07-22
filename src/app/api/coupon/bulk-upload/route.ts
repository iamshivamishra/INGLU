import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Coupon from "@/models/Coupon";
import * as XLSX from "xlsx";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json(
        { success: false, message: "No file uploaded" },
        { status: 400 },
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const workbook = XLSX.read(buffer, { type: "buffer" });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data: any[] = XLSX.utils.sheet_to_json(sheet);

    let created = 0;
    let skipped = 0;

    for (const row of data) {
      if (!row.code) continue;

      const existing = await Coupon.findOne({
        code: row.code.toUpperCase().trim(),
      });

      if (existing) {
        skipped++;
        continue;
      }

      await Coupon.create({
        code: row.code.toUpperCase().trim(),
        description: row.description || "",
        showCode:
          row.showCode === true ||
          row.showCode === "true" ||
          row.showCode === 1 ||
          row.showCode === "1",
        discountType: row.discountType || "Fixed",
        discountValue: Number(row.discountValue || 0),
        maxRedemptions: row.maxRedemptions
          ? Number(row.maxRedemptions)
          : undefined,
        minimumOrder: row.minimumOrder ? Number(row.minimumOrder) : undefined,
        startsAt: new Date(row.startsAt),
        expiresAt: new Date(row.expiresAt),
        applicableProducts: row.applicableProducts
          ? row.applicableProducts.split(",").map((p: string) => p.trim())
          : [],
        allowFreeOrder:
          row.allowFreeOrder === true ||
          row.allowFreeOrder === "true" ||
          row.allowFreeOrder === "TRUE" ||
          row.allowFreeOrder === 1 ||
          row.allowFreeOrder === "1",
        isActive: true,
      });

      created++;
    }

    return NextResponse.json({
      success: true,
      created,
      skipped,
      total: data.length,
    });
  } catch (error) {
    console.error("Bulk Upload Error:", error);

    return NextResponse.json(
      { success: false, message: "Bulk upload failed" },
      { status: 500 },
    );
  }
}
