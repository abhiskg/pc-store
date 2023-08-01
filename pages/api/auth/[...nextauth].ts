import dbConnect from "@/backend/config/dbConnect";
import User from "@/backend/models/user";
import { NextApiRequest } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import { z } from "zod";

const loginUserSchema = z.object({
  email: z.string().regex(/^[a-z0-9_-]{3,15}$/g, "Invalid username"),
  password: z.string().min(5, "Password should be minimum 5 characters"),
});

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      credentials: {
        email: { type: "email", placeholder: "test@test.com" },
        password: { type: "password", placeholder: "Pa$$w0rd" },
      },
      async authorize(credentials, req) {
        dbConnect();
        const { email, password } = loginUserSchema.parse(credentials);

        const user = await User.findOne({ email });

        if (!user || !(await user.isPasswordMatched(password, user.password))) {
          throw new Error("Invalid Email or Password");
        }
        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
