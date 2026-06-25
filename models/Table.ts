import mongoose, { Schema, models, model } from "mongoose";

const TableSchema = new Schema(
  {
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