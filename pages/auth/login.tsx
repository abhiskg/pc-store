import { ReactElement, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import Layout from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import Link from "next/link";
// import { getAccessToken } from "../../utils/manageAccessToken";

const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Please Enter your Email" })
    .email({ message: "Invalid Email" }),
  password: z
    .string()
    .min(6, { message: "Password Should be minimum 6 char long" }),
});

type LoginSchemaType = z.infer<typeof LoginSchema>;

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<LoginSchemaType> = (data) => {
    try {
      signIn("credentials", {
        email: data.email,
        password: data.password,
        callbackUrl: "/",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleGithubLogin = () => {
    try {
      signIn("github", {
        callbackUrl: "/",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="mx-auto my-10 w-full max-w-md rounded-md bg-white p-4 shadow dark:bg-gray-900 dark:text-gray-100 sm:p-8">
        <h2 className="mb-5 text-center text-3xl font-semibold">Login</h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="ng-untouched ng-pristine ng-valid space-y-8"
        >
          <div className="space-y-3">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <Input
                type="email"
                {...register("email")}
                id="email"
                placeholder="leroy@jenkins.com"
                className="input-form"
              />
              {errors.email?.message && (
                <p className="error-message">{errors.email?.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline dark:text-gray-400"
                >
                  Forgot password?
                </a>
              </div>
              <Input
                type="password"
                {...register("password")}
                id="password"
                placeholder="*****"
                className="input-form"
              />
              {errors.password?.message && (
                <p className="error-message">{errors.password?.message}</p>
              )}
            </div>
          </div>
          <Button className="w-full" type="submit">
            Login
          </Button>
        </form>

        <div className="my-2 flex w-full items-center">
          <hr className="w-full dark:text-gray-400" />
          <p className="w-full px-3 text-center dark:text-gray-400">
            or login with
          </p>
          <hr className="w-full dark:text-gray-400" />
        </div>

        <div className="my-3 flex items-center justify-center">
          <Button type="button" onClick={handleGithubLogin}>
            Github
          </Button>
        </div>

        <p className="text-center text-sm dark:text-gray-400 mt-2">
          Not a member?{" "}
          <Link
            href="/auth/register"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline focus:underline"
          >
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

Login.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
