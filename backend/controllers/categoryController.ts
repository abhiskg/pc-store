import { NextApiRequest, NextApiResponse } from "next";
import Category from "../models/category";

export const getCategories = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const categories = await Category.find();

  res.status(200).json({
    data: categories,
  });
};

export const createCategory = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const category = await Category.create(req.body);

  res.status(200).json({
    data: category,
  });
};
