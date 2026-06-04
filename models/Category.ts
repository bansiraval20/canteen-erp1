import mongoose, { Schema, models, model } from "mongoose";

const CategorySchema = new Schema(
  {
    restaurantId: {
      type: Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true,
    },

    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Category =
  models.Category || model("Category", CategorySchema);