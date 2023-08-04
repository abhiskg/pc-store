import dbConnect from "@/backend/config/dbConnect";
import {
  createCategory,
  getCategories,
} from "@/backend/controllers/categoryController";
import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";

const router = createRouter<NextApiRequest, NextApiResponse>();

dbConnect();

router.get(getCategories);
router.post(createCategory);

export default router.handler();
