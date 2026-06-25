import mongoose, { Schema, models, model } from "mongoose";

const MenuItemSchema = new Schema(
  {
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    description: String,

    image: String,

    price: {
      type: Number,
      required: true,
    },

    stock: {
      type: Number,
      default: 100,
    },

    isAvailable: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export const MenuItem =
  models.MenuItem || model("MenuItem", MenuItemSchema);