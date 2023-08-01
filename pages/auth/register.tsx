import { useContext, useState } from "react";

import toast from "react-hot-toast";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import axios from "axios";
import Link from "next/link";

const RegisterSchema = z.object({
  name: z.string().min(1, { message: "Please Enter your name" }),
  email: z.string().email({ message: "Invalid Email" }),
  role: z.string(),
  password: z
    .string()
    .min(8, { message: "Password Should be minimum 8 char long" }),
});

type RegisterSchemaType = z.infer<typeof RegisterSchema>;

const Register = () => {
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit: SubmitHandler<RegisterSchemaType> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="mx-auto my-10 w-full max-w-md rounded-md bg-white p-4 shadow dark:bg-gray-900 dark:text-gray-100 sm:p-8">
        <h2 className="mb-5 text-center text-3xl font-semibold">Register</h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="ng-untouched ng-pristine ng-valid space-y-8"
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name")}
                disabled={loading}
                placeholder="Enter your full name"
                className="input-form"
              />
              {errors.name?.message && (
                <p className="error-message">{errors.name?.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm">
                Your Role
              </label>
              <select {...register("role")} id="" className="input-form">
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                {...register("email")}
                id="email"
                disabled={loading}
                placeholder="leroy@jenkins.com"
                className="input-form"
              />
              {errors.email?.message && (
                <p className="error-message">{errors.email?.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <input
                type="password"
                {...register("password")}
                disabled={loading}
                id="password"
                placeholder="*****"
                className="input-form"
              />
              {errors.password?.message && (
                <p className="error-message">{errors.password?.message}</p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className={`auth-button grid place-items-center ${
              loading && "cursor-not-allowed"
            }`}
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm dark:text-gray-400">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline focus:underline"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
