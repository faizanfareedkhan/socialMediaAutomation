import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconBrandGoogle, IconMail, IconLock } from "@tabler/icons-react";

import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";

import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Link } from "react-router";

// Schema without optional password
const formSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: { email: string; password: string }) => {
    console.log("Form Submitted:", values);
  };

  return (
    <div className="bg-background relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border">
      <DotPattern
        className={cn(
          "h-full w-full [mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
        )}
      />
      <div className="shadow-input relative mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
        <h2 className="text-center text-xl font-bold text-neutral-800 dark:text-neutral-200">
          Login to ES
        </h2>
        <p className="mt-2 text-center text-sm text-neutral-600 dark:text-neutral-300">
          Don't have an account?{" "}
          <Link to="/auth/signup" className="text-neutral-600 underline">
            Sign up
          </Link>
        </p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="my-8 space-y-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="elon@spacex.com"
                        type="email"
                        className="pl-10"
                        {...field}
                      />
                      <IconMail className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {showPassword && (
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="••••••••"
                          type="password"
                          className="pl-10"
                          {...field}
                        />
                        <IconLock className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <button
              type="submit"
              className="flex h-10 w-full items-center justify-center space-x-2 rounded-md bg-black font-medium text-white transition hover:opacity-90 dark:bg-zinc-800"
            >
              <IconMail className="h-4 w-4" />
              <span>Send me a magic link</span>
            </button>

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="flex cursor-pointer h-10 w-full items-center justify-center space-x-2 rounded-md bg-gray-100 font-medium text-black transition hover:bg-gray-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
            >
              <IconLock className="h-4 w-4" />
              <span>Login using password</span>
            </button>

            <div className="my-4 flex items-center space-x-2">
              <div className="h-px flex-1 bg-gray-300 dark:bg-neutral-700" />
              <span className="text-xs text-gray-500">OR</span>
              <div className="h-px flex-1 bg-gray-300 dark:bg-neutral-700" />
            </div>

            <button
              type="button"
              className="flex cursor-pointer h-10 w-full items-center justify-center space-x-2 rounded-md border bg-white font-medium text-black transition hover:bg-gray-100 dark:bg-black dark:text-white dark:hover:bg-zinc-800"
            >
              <IconBrandGoogle className="h-4 w-4" />
              <span>Continue with Google</span>
            </button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
