import type { Model } from "mongoose";

export type IProduct = {
  _id: string;
  name: string;
  category: string;
  price: number;
  status: "In Stock" | "Out of Stock";
  image: string;
  ratings: number;
  description: string;
  features: {
    brand: String;
    model: String;
    specification: String;
    type: String;
    voltage: String;
  };
  individualRating: number;
  averageRating: number;
};

export type ProductModel = Model<IProduct, Record<string, unknown>>;

export type IProductFilters = {
  search?: string;
  genre?: string;
  publicationDate?: string;
};
