import mongoose, { Schema, models, model } from "mongoose";

const TableSchema = new Schema(
  {
    restaurantId: {
      type: Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true,
    },

    tableNumber: {
      type: Number,
      required: true,
    },

    qrCode: {
      type: String,
    },

    isOccupied: {
      type: Boolean,
      default: false,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Table = models.Table || model("Table", TableSchema);