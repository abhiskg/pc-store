import { NextApiRequest, NextApiResponse } from "next";
import Product from "../models/product";

export const getProducts = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const products = await Product.find();

  res.status(200).json({
    data: products,
  });
};

export const createProduct = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const products = await Product.create(req.body);

  res.status(200).json({
    data: products,
  });
};
