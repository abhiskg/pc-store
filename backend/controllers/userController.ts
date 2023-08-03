import { NextApiRequest, NextApiResponse } from "next";
import User from "../models/user";

export const registerUser = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
 try {
  const existingUser = await User.findOne({ email: req.body.email });

  if (existingUser) {
    throw new Error("User existed, Please Login");
  }
  const user = await User.create(req.body);

  res.status(200).json({
    data: user,
    message: 'User created successfully'
  });
 } catch (error ) {
  res.status(400).json({
    error: error
  })
 }
};
