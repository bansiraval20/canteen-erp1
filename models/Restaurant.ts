import mongoose, { Schema, models, model } from 'mongoose'

const RestaurantSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    logo: {
      type: String,
      default: '',
    },

    phone: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      lowercase: true,
      trim: true,
    },

    address: {
      type: String,
      required: true,
    },

    currency: {
      type: String,
      default: 'INR',
    },

    gstNumber: {
      type: String,
      default: '',
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
)

export const Restaurant =
  models.Restaurant || model('Restaurant', RestaurantSchema)