import { NextApiRequest, NextApiResponse } from "next";
import { productFilterableFields } from "../constants/productConstant";
import Product from "../models/product";
import pick from "../utils/pick";

export const getProducts = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const filtersData = pick(req.query, productFilterableFields);
    const andConditions = [];
    if (Object.keys(filtersData).length) {
      andConditions.push({
        $and: Object.entries(filtersData).map(([field, value]) => ({
          [field]: value,
        })),
      });
    }

    const filterCondition =
      andConditions.length > 0 ? { $and: andConditions } : {};

    const products = await Product.find(filterCondition);

    res.status(200).json({
      data: products,
    });
  } catch (error) {
    res.status(400).json({
      error: error,
    });
  }
};

export const getProduct = async (req: NextApiRequest, res: NextApiResponse) => {
  const product = await Product.findById(req.query.id);

  res.status(200).json({
    data: product,
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
