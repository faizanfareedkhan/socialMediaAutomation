"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Zod Schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  username: z.string().min(2, "Username must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
});

type FormData = z.infer<typeof formSchema>;

const Settings = () => {
  const [avatar, setAvatar] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting, isSubmitSuccessful },
    reset,
  } = form;

  const onSubmit = (data: FormData) => {
    console.log("Settings Form Data:", data);
    reset();
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="mx-auto max-w-4xl bg-white px-4 py-8 text-black sm:px-6 lg:px-8">
      {/* Heading */}
      <h2 className="mb-2 text-xl font-semibold sm:text-2xl">
        Personal Information
      </h2>
      <p className="mb-6 text-sm text-gray-600">
        Update your personal information. This will be displayed on your profile
        and in account settings.
      </p>

      {/* Profile Section */}
      <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-6">
        {/* Profile Image */}
        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-full bg-gray-200">
          {avatar ? (
            <img
              src={avatar}
              alt="Avatar"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm text-gray-500">
              No Image
            </div>
          )}
        </div>

        {/* Info beside profile */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-medium">M Raza</h3>
          <p className="mb-2 text-sm text-gray-600">razabuck@example.com</p>
          <button
            type="button"
            onClick={triggerFileSelect}
            className="text-sm font-medium cursor-pointer"
          >
            Change Avatar
          </button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
            onChange={handleAvatarChange}
          />
        </div>
      </div>

      {/* Form Fields */}
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Username */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <div className="text-right">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="rounded bg-black px-6 py-2 text-white hover:bg-gray-800"
            >
              {isSubmitting ? "Saving..." : "Save Changes"}
            </Button>
          </div>

          {/* Success Message */}
          {isSubmitSuccessful && (
            <p className="text-right text-sm text-green-500">
              Changes saved successfully!
            </p>
          )}
        </form>
      </Form>
    </div>
  );
};

export default Settings;
