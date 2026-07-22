import mongoose, { Schema, Document, Model, Types } from "mongoose";

/**
 * =========================================
 * TICKET SCHEMA
 * =========================================
 * Stores individual tickets for users following a purchase
 */

/* Here are all the required data */
export interface ITicket extends Document {
  userId: Types.ObjectId;
  purchaseId: Types.ObjectId;
  items: {
    title: string;
    quantity: number;
  }[];
  eventName: string;
  ticketNumber: string;
  status: "VALID" | "USED" | "EXPIRED" | "CANCELLED";
  priority: number;
  qrCode?: string;
  createdBy: Types.ObjectId;
  createdByEmail: string;
  issuedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * For Ticket schema
 */
const ticketSchema: Schema<ITicket> = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    purchaseId: {
      type: Schema.Types.ObjectId,
      ref: "Payment",
      required: false,
    },
    items: {
      type: [
        {
          title: { type: String, required: true },
          quantity: { type: Number, required: true },
        },
      ],
      required: true,
    },
    eventName: {
      type: String,
      required: true,
      trim: true,
    },

    ticketNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    status: {
      type: String,
      enum: ["VALID", "USED", "EXPIRED", "CANCELLED"],
      default: "VALID",
    },

    priority: {
      type: Number,
      default: 0,
    },

    qrCode: {
      type: String,
    },

    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    createdByEmail: {
      type: String,
      required: true,
    },

    issuedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);

// Filtering by status and sorting by ipriority
ticketSchema.index({ status: 1, priority: 1 });

// Retrieve the admin-specific history in a chronological manner.
ticketSchema.index({ createdBy: 1, createdAt: -1 });

const Ticket: Model<ITicket> =
  mongoose.models.Ticket || mongoose.model<ITicket>("Ticket", ticketSchema);

export default Ticket;
