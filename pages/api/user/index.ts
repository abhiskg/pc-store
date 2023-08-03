import dbConnect from "@/backend/config/dbConnect";
import { registerUser } from "@/backend/controllers/userController";
import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";

const router = createRouter<NextApiRequest, NextApiResponse>();

dbConnect();

router.post(registerUser);

export default router.handler();
