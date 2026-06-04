import mongoose, { Schema, models, model } from "mongoose";

const UserSchema = new Schema(
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

    email: {
      type: String,
      unique: true,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["admin", "chef", "waiter"],
      default: "admin",
    },
  },
  {
    timestamps: true,
  }
);

export const User = models.User || model("User", UserSchema);