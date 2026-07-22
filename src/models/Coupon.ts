import { Schema, model, models } from "mongoose";

export type DiscountType = "Fixed" | "Percentage";

export interface ICoupon {
  code: string;
  description?: string;
  showCode: boolean;
  discountType: DiscountType;
  discountValue: number;
  maxRedemptions?: number;
  timesRedeemed: number;
  minimumOrder?: number;
  startsAt: Date;
  expiresAt: Date;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  applicableProducts?: string[];
  allowFreeOrder?: boolean;
}

const CouponSchema = new Schema<ICoupon>(
  {
    code: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
    },
    showCode: {
      type: Boolean,
      default: true,
    },
    discountType: {
      type: String,
      enum: ["Fixed", "Percentage"],
      required: true,
    },
    discountValue: {
      type: Number,
      required: true,
      min: 0,
    },
    maxRedemptions: {
      type: Number,
      min: 1,
    },
    timesRedeemed: {
      type: Number,
      default: 0,
    },
    minimumOrder: {
      type: Number,
      min: 0,
    },
    startsAt: {
      type: Date,
      required: true,
    },
    expiresAt: {
      type: Date,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    applicableProducts: {
      type: [String], // store ticket title
      default: [],
    },
    allowFreeOrder: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export default models.Coupon || model<ICoupon>("Coupon", CouponSchema);
