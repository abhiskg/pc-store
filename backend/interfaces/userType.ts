import type { Model, Types } from "mongoose";

export type IUser = {
  name: string;
  email: string;
  password: string;
};

export type IUserMethods = {
  isPasswordMatched(
    enteredPassword: string,
    savedPassword: string
  ): Promise<boolean>;
};

export type UserModel = Model<IUser, Record<string, unknown>, IUserMethods>;

export type ILoginUser = {
  email: string;
  password: string;
};
