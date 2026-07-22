import mongoose, { Schema, Document, Model } from "mongoose";

/**
 * =========================================
 * CONTACT US SCHEMA
 * =========================================
 * Stores data submitted from Contact Us form
 * Public-facing form (no auth required)
 */

/**
 *  This is a public-facing form (no auth required)
 */
export interface IContact extends Document {
  name: string;
  contact: string;
  email: string;
  reason:
    | "event_curation"
    | "artist_booking"
    | "production"
    | "event_sponsorship"
    | "stalls_booking"
    | "inglu_membership"
    | "collaboration"
    | "influencer_management"
    | "e_sports"
    | "courses";
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 *  Mongoose Schema
 */
const contactSchema: Schema<IContact> = new Schema(
  {
    // 👤 Name of the person contacting
    name: {
      type: String,
      required: true,
      trim: true,
    },

    // 📱 Contact number
    contact: {
      type: String,
      required: true,
      trim: true,
    },

    // 📧 Email address
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    // 📌 Reason selected from dropdown
    reason: {
      type: String,
      required: true,
      enum: [
        "event_curation",
        "artist_booking",
        "production",
        "event_sponsorship",
        "stalls_booking",
        "inglu_membership",
        "collaboration",
        "influencer_management",
        "e_sports",
        "courses",
      ],
    },

    // 📝 User message
    message: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

/**
 *  Export Model (prevents recompilation errors)
 */
const Contact: Model<IContact> =
  mongoose.models.Contact || mongoose.model<IContact>("Contact", contactSchema);

export default Contact;
