"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { cn } from "@workspace/ui/lib/utils";
import { AuthCard } from "@workspace/ui/components/ui/auth-card";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { CheckCircle } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@workspace/ui/components/form";

// Form validation schema for forgot password
const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email address" })
    .max(100, { message: "Email must be less than 100 characters" }),
});

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

export function ForgotPasswordForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Initialize form with resolver and default values
  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  // Enhanced submit handler with proper error handling
  const onSubmit = async (data: ForgotPasswordFormValues) => {
    try {
      setIsLoading(true);
      // TODO: Replace with actual forgot password logic
      console.log("Forgot password request:", { email: data.email });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // TODO: Handle successful password reset email sent
      console.log("Password reset email sent");
      setIsSuccess(true);
    } catch (error) {
      // TODO: Handle forgot password errors (show toast, set form errors, etc.)
      console.error("Forgot password error:", error);
      form.setError("root", {
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const isFormDisabled = isLoading;

  if (isSuccess) {
    return (
      <div className={cn("flex flex-col gap-6", className)} {...props}>
        <AuthCard
          title="Check your email"
          description="We've sent a password reset link to your email address"
          contentClassName="space-y-6"
        >
          <div className="text-center space-y-4">
            <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Please check your email and click the reset link to continue.
              </p>
              <p className="text-xs text-muted-foreground">
                Didn&apos;t receive the email? Check your spam folder or try
                again.
              </p>{" "}
            </div>
          </div>

          <div className="space-y-3">
            <Button
              onClick={() => {
                setIsSuccess(false);
                form.reset();
              }}
              variant="outline"
              className="w-full text-md" 
              size={'lg'}
            >
              Try again
            </Button>

            <Button asChild className="w-full text-md" size={'lg'}>
              <Link href="/auth/login">Back to sign in</Link>
            </Button>
          </div>
        </AuthCard>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <AuthCard
        title="Forgot your password?"
        description="Enter your email address and we'll send you a link to reset your password"
        contentClassName="space-y-6"
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            {/* Display root form errors */}
            {form.formState.errors.root && (
              <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
                {form.formState.errors.root.message}
              </div>
            )}

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

            <Button type="submit" className="w-full text-md" size={'lg'} disabled={isFormDisabled}>
              {isLoading ? "Sending reset link..." : "Send reset link"}
            </Button>
          </form>
        </Form>
        {/* Back to login link */}
        <div className="text-center text-sm">
          Remember your password?{" "}
          <Link href="/auth/login" className="underline underline-offset-4">
            Sign in
          </Link>
        </div>
      </AuthCard>
    </div>
  );
}
