"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { cn } from "@workspace/ui/lib/utils";
import { AuthCard } from "@workspace/ui/components/auth-card";
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
import { SocialLogin } from "@/components/social-login";

// Form validation schema for signup
const signupSchema = z
  .object({
    firstName: z
      .string()
      .min(1, { message: "First name is required" })
      .min(2, { message: "First name must be at least 2 characters long" })
      .max(50, { message: "First name must be less than 50 characters" })
      .regex(/^[a-zA-Z\s]+$/, {
        message: "First name can only contain letters and spaces",
      }),
    lastName: z
      .string()
      .min(1, { message: "Last name is required" })
      .min(2, { message: "Last name must be at least 2 characters long" })
      .max(50, { message: "Last name must be less than 50 characters" })
      .regex(/^[a-zA-Z\s]+$/, {
        message: "Last name can only contain letters and spaces",
      }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Please enter a valid email address" })
      .max(100, { message: "Email must be less than 100 characters" }),
    password: z
      .string()
      .min(1, { message: "Password is required" })
      .min(8, { message: "Password must be at least 8 characters long" })
      .max(100, { message: "Password must be less than 100 characters" })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter",
      })
      .regex(/[0-9]/, { message: "Password must contain at least one number" })
      .regex(/[^A-Za-z0-9]/, {
        message: "Password must contain at least one special character",
      }),
    confirmPassword: z
      .string()
      .min(1, { message: "Please confirm your password" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type SignupFormValues = z.infer<typeof signupSchema>;

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [isLoading, setIsLoading] = useState(false);

  // Initialize form with resolver and default values
  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleLoadingChange = (loading: boolean) => {
    setIsLoading(loading);
  };

  // Enhanced submit handler with proper error handling
  const onSubmit = async (data: SignupFormValues) => {
    try {
      setIsLoading(true);
      // TODO: Replace with actual registration logic
      console.log("Signup attempt:", {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
      });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // TODO: Handle successful signup (redirect, set auth state, send verification email, etc.)
      console.log("Signup successful");
    } catch (error) {
      // TODO: Handle signup errors (show toast, set form errors, etc.)
      console.error("Signup error:", error);
      form.setError("root", {
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const isFormDisabled = isLoading;

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <AuthCard
        title="Create an account"
        description="Sign up to get started with your account"
        contentClassName="space-y-6"
      >
        <div className="space-y-6">
          {/* Social login buttons */}
          <SocialLogin onLoading={handleLoadingChange} disabled={isLoading} />

          {/* Divider */}
          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="bg-card text-muted-foreground relative z-10 px-2 py-1 rounded-md shadow-xs">
              Or continue with
            </span>
          </div>

          {/* Signup form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              {/* Display root form errors */}
              {form.formState.errors.root && (
                <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
                  {form.formState.errors.root.message}
                </div>
              )}

              {/* Name fields */}
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First name</FormLabel>
                      <div>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="John"
                            autoComplete="given-name"
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
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last name</FormLabel>
                      <div>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Doe"
                            autoComplete="family-name"
                            disabled={isFormDisabled}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>

              {/* Email field */}
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

              {/* Password fields */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <div>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="••••••••"
                          autoComplete="new-password"
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
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm password</FormLabel>
                    <div>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="••••••••"
                          autoComplete="new-password"
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
                className="w-full"
                disabled={isFormDisabled}
              >
                {isLoading ? "Creating account..." : "Create account"}
              </Button>
            </form>
          </Form>
        </div>

        {/* Sign in link */}
        <div className="text-center text-sm">
          Already have an account?{" "}
          <Link href="/auth/login" className="underline underline-offset-4">
            Sign in
          </Link>
        </div>
      </AuthCard>

      {/* Terms and privacy */}
      <div className="text-center text-xs text-muted-foreground">
        By clicking create account, you agree to our{" "}
        <div>
          <Link
            href="/terms"
            className="underline underline-offset-4 hover:text-primary"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="underline underline-offset-4 hover:text-primary"
          >
            Privacy Policy
          </Link>
          .
        </div>
      </div>
    </div>
  );
}
