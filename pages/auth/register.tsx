import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const RegisterSchema = z.object({
  name: z.string().min(1, { message: "Please Enter your name" }),
  email: z.string().email({ message: "Invalid Email" }),
  password: z
    .string()
    .min(6, { message: "Password Should be minimum 6 char long" }),
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

  const onSubmit: SubmitHandler<RegisterSchemaType> = async (payload) => {
    const { data } = await axios.post("/api/user", payload);
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
              <Input
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
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <Input
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
              <Input
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
          <Button type="submit" className="w-full">
            Register
          </Button>
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
