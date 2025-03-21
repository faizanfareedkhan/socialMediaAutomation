import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import React from "react";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";

const SignIp = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <>
      <div className="flex flex-col bg-background border h-screen justify-center rounded-lg w-full items-center overflow-hidden relative">
        <DotPattern
          className={cn(
            "h-full w-full [mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]"
          )}
        />
        <div className="bg-white p-4 rounded-none shadow-input w-full dark:bg-black max-w-md md:p-8 md:rounded-2xl mx-auto relative">
          <h2 className="text-neutral-800 text-xl dark:text-neutral-200 font-bold">
            Sign-in
          </h2>
          <p className="text-neutral-600 text-sm dark:text-neutral-300 max-w-sm mt-2">
            Sign-in if you can because we don&apos;t have a auth flow yet
          </p>

          <form className="my-8" onSubmit={handleSubmit}>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="projectmayhem@fc.com"
                type="email"
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="••••••••" type="password" />
            </LabelInputContainer>

            <button
              className="bg-gradient-to-br h-10 rounded-md shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] text-white w-full block dark:bg-zinc-800 dark:from-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] dark:to-zinc-900 font-medium from-black group/btn relative to-neutral-600"
              type="submit"
            >
              Sign In &rarr;
              <BottomGradient />
            </button>

            <div className="bg-gradient-to-r h-[1px] w-full dark:via-neutral-700 from-transparent my-8 to-transparent via-neutral-300" />

            <div className="flex flex-col space-y-4">
              <button
                className="flex bg-gray-50 h-10 justify-start rounded-md shadow-input text-black w-full dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626] font-medium group/btn items-center px-4 relative space-x-2"
                type="submit"
              >
                <IconBrandGithub className="h-4 text-neutral-800 w-4 dark:text-neutral-300" />
                <span className="text-neutral-700 text-sm dark:text-neutral-300">
                  GitHub
                </span>
                <BottomGradient />
              </button>
              <button
                className="flex bg-gray-50 h-10 justify-start rounded-md shadow-input text-black w-full dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626] font-medium group/btn items-center px-4 relative space-x-2"
                type="submit"
              >
                <IconBrandGoogle className="h-4 text-neutral-800 w-4 dark:text-neutral-300" />
                <span className="text-neutral-700 text-sm dark:text-neutral-300">
                  Google
                </span>
                <BottomGradient />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIp;

const BottomGradient = () => {
  return (
    <>
      <span className="bg-gradient-to-r h-px w-full -bottom-px absolute block duration-500 from-transparent group-hover/btn:opacity-100 inset-x-0 opacity-0 to-transparent transition via-cyan-500" />
      <span className="bg-gradient-to-r h-px w-1/2 -bottom-px absolute block blur-sm duration-500 from-transparent group-hover/btn:opacity-100 inset-x-10 mx-auto opacity-0 to-transparent transition via-indigo-500" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
