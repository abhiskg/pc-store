import type { Model } from "mongoose";

export type ICategory = {
  _id: string;
  name: string;
  image: string;
};

export type CategoryModel = Model<ICategory, Record<string, unknown>>;
