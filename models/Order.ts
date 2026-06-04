import mongoose, { Schema, models, model } from "mongoose";

const OrderSchema = new Schema(
  {
    restaurantId: {
      type: Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true,
    },

    tableId: {
      type: Schema.Types.ObjectId,
      ref: "Table",
      required: true,
    },

    items: [
      {
        menuItemId: {
          type: Schema.Types.ObjectId,
          ref: "MenuItem",
        },

        name: String,

        quantity: Number,

        price: Number,
      },
    ],

    totalAmount: {
      type: Number,
      required: true,
    },

    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed"],
      default: "pending",
    },

    orderStatus: {
      type: String,
      enum: [
        "pending",
        "accepted",
        "preparing",
        "ready",
        "delivered",
        "cancelled",
      ],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

export const Order = models.Order || model("Order", OrderSchema);