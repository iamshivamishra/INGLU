import mongoose, { Schema, Document, Model, Types } from "mongoose";
import { reviewSchema, IReview } from "./Review";

export interface IEvent extends Document {
  category: "EVENT";
  name: string;
  price: number;
  description: string;
  availableSeats: number;
  date: Date;
  time: string;
  venue: string;
  banner: string;
  title: string;

  userId: mongoose.Types.ObjectId;
  averageRating: number;
  totalReviews: number;
  reviews: Types.DocumentArray<IReview>;

  createdBy: Types.ObjectId;
  createdByEmail: string;

  createdAt: Date;
  updatedAt: Date;
}

const eventSchema: Schema<IEvent> = new Schema(
  {
    category: {
      type: String,
      enum: ["EVENT"],
      default: "EVENT",
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    description: {
      type: String,
      required: true,
    },

    availableSeats: {
      type: Number,
      required: true,
      min: 0,
    },

    date: {
      type: Date,
      required: true,
    },

    time: {
      type: String,
      required: true,
    },

    venue: {
      type: String,
      required: true,
    },

    banner: {
      type: String,
      required: true,
    },

    averageRating: {
      type: Number,
      default: 0,
    },

    totalReviews: {
      type: Number,
      default: 0,
    },

    reviews: [reviewSchema],

    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    createdByEmail: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Event: Model<IEvent> =
  mongoose.models.Event || mongoose.model<IEvent>("Event", eventSchema);

export default Event;
