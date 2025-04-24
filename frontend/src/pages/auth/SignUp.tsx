import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import { IconBrandGoogle, IconMail } from "@tabler/icons-react";
import FB from "../dashboard/integerations/socialMediaAccounts/FB/FB";
import GoogleBtn from '../dashboard/integerations/socialMediaAccounts/google/Google';
import Twitter from '../dashboard/integerations/socialMediaAccounts/twitter/Twitter';
import LinkedIn from '../dashboard/integerations/socialMediaAccounts/linkedIn/LinkedIn';

const formSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});

const SignUp = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: { email: string }) => {
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
          Sign up to ES
        </h2>
        <p className="mt-2 text-center text-sm text-neutral-600 dark:text-neutral-300">
          Already have an account?{" "}
          <a href="#" className="text-neutral-600 underline">
            Login
          </a>
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
                  <FormLabel>Email Address</FormLabel>
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

            <button
              type="submit"
              className="group/btn relative block h-10 w-full cursor-pointer rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
            >
              Continue with Email
              <BottomGradient />
            </button>

            <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

            <GoogleBtn />
            <FB />
            <Twitter />
            <LinkedIn/>
          </form>
        </Form>

        <p className="text-center text-xs text-gray-500 dark:text-gray-400">
          By continuing, you agree to the{" "}
          <a className="text-neutral-600 underline" href="#">
            Terms of Service
          </a>{" "}
          and{" "}
          <a className="text-neutral-600 underline" href="#">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};
