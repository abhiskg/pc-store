import mongoose, { Schema } from "mongoose";
import type { IProduct } from "../interfaces/productType";

const featuresSchema = new Schema({
  brand: String,
  model: String,
  specification: String,
  type: String,
  voltage: String,
});

const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    ratings: {
      type: Number,
      required: true,
    },
    averageRating: {
      type: Number,
      required: true,
    },
    individualRating: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    features: {
      required: true,
      type: featuresSchema,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
