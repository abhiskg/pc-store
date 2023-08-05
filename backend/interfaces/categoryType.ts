import type { Model } from "mongoose";

export type ICategory = {
  _id: string;
  name:
    | "Motherboard"
    | "Monitor"
    | "Power_Supply_Unit"
    | "Processor"
    | "RAM"
    | "Storage_Device";
  image: string;
};

export type CategoryModel = Model<ICategory, Record<string, unknown>>;
