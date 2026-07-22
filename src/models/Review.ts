import mongoose, { Schema, Document, Model } from "mongoose";

export interface IReview extends Document {
  itemType: "COURSE" | "EVENT";
  itemId: mongoose.Types.ObjectId;

  userId: mongoose.Types.ObjectId;

  rating: number;
  reviewText?: string;

  createdAt: Date;
  updatedAt: Date;
}

export const reviewSchema = new Schema<IReview>(
  {
    itemType: {
      type: String,
      enum: ["COURSE", "EVENT"],
      required: true,
    },

    itemId: {
      type: Schema.Types.ObjectId,
      required: true,
      index: true,
    },

    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },

    reviewText: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true },
);

const Review: Model<IReview> =
  mongoose.models.Review || mongoose.model<IReview>("Review", reviewSchema);

export default Review;
