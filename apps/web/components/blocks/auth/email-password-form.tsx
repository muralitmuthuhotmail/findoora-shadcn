"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@/components/ui/link";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@workspace/ui/components/form";
import { routes } from "@/app/routes";

// Form validation schema with improved error messages
const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email address" })
    .max(100, { message: "Email must be less than 100 characters" }),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .max(100, { message: "Password must be less than 100 characters" }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

interface EmailPasswordFormProps {
  onLoading?: (loading: boolean) => void;
  disabled?: boolean;
}

export function EmailPasswordForm({
  onLoading,
  disabled,
}: EmailPasswordFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  // Initialize form with resolver and default values
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Enhanced submit handler with proper error handling
  const onSubmit = async (data: LoginFormValues) => {
    try {
      setIsLoading(true);
      onLoading?.(true);
      // TODO: Replace with actual authentication logic
      console.log("Login attempt:", { email: data.email });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // TODO: Handle successful login (redirect, set auth state, etc.)
      console.log("Login successful");
    } catch (error) {
      // TODO: Handle login errors (show toast, set form errors, etc.)
      console.error("Login error:", error);
      form.setError("root", {
        message: "Invalid email or password. Please try again.",
      });
    } finally {
      setIsLoading(false);
      onLoading?.(false);
    }
  };

  const isFormDisabled = disabled || isLoading;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Display root form errors */}
        {form.formState.errors.root && (
          <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
            {form.formState.errors.root.message}
          </div>
        )}

        {/* Email and password fields */}
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email address</FormLabel>
                <div>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      autoComplete="email"
                      disabled={isFormDisabled}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between">
                  <FormLabel>Password</FormLabel>
                  <Link
                    href={routes.forgotPassword}
                    className="text-sm text-primary underline-offset-4 hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <div>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="••••••••"
                      autoComplete="current-password"
                      disabled={isFormDisabled}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full text-md"
            size={"lg"}
            disabled={isFormDisabled}>
            {isLoading ? "Signing in..." : "Sign in"}
          </Button>
        </div>

        {/* Sign up link */}
        <div className="text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href={routes.register} className="underline underline-offset-4">
            Sign up
          </Link>
        </div>
      </form>
    </Form>
  );
}
