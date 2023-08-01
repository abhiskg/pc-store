import dbConnect from "@/backend/config/dbConnect";
import {
  createProduct,
  getProducts,
} from "@/backend/controllers/productController";
import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";

const router = createRouter<NextApiRequest, NextApiResponse>();

dbConnect();

router.get(getProducts);
router.post(createProduct);

export default router.handler();
