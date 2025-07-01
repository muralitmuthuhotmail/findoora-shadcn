"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { cn } from "@workspace/ui/lib/utils";
import { AuthCard } from "@workspace/ui/components/ui/auth-card";
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
import LoadingSpinner from "@/components/loading-spinner";
import { Check, XCircle } from "lucide-react";

// Form validation schema for reset password
const resetPasswordSchema = z
  .object({
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

type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;

export function ResetPasswordForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isValidToken, setIsValidToken] = useState<boolean | null>(null);
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  // Initialize form with resolver and default values
  const form = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  // Validate token on component mount
  useEffect(() => {
    const validateToken = async () => {
      if (!token) {
        setIsValidToken(false);
        return;
      }

      try {
        // TODO: Replace with actual token validation logic
        console.log("Validating token:", token);

        // Simulate API call to validate token
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // TODO: Check if token is valid and not expired
        setIsValidToken(true);
      } catch (error) {
        console.error("Token validation error:", error);
        setIsValidToken(false);
      }
    };

    validateToken();
  }, [token]);

  // Enhanced submit handler with proper error handling
  const onSubmit = async (data: ResetPasswordFormValues) => {
    try {
      setIsLoading(true);
      // TODO: Replace with actual reset password logic
      console.log("Reset password attempt:", { token });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // TODO: Handle successful password reset
      console.log("Password reset successful");
      setIsSuccess(true);
    } catch (error) {
      // TODO: Handle reset password errors (show toast, set form errors, etc.)
      console.error("Reset password error:", error);
      form.setError("root", {
        message:
          "Something went wrong. Please try again or request a new reset link.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const isFormDisabled = isLoading;

  // Show loading state while validating token
  if (isValidToken === null) {
    return (
      <div className={cn("flex flex-col gap-6", className)} {...props}>
        <AuthCard
          title="Reset your password"
          description="Validating reset link..."
          contentClassName="flex justify-center py-8"
        >
          <LoadingSpinner />
        </AuthCard>
      </div>
    );
  }

  // Show error state for invalid/expired token
  if (!isValidToken) {
    return (
      <div className={cn("flex flex-col gap-6", className)} {...props}>
        <AuthCard
          title="Invalid reset link"
          description="This password reset link is invalid or has expired"
          contentClassName="space-y-6"
        >
          <div className="text-center space-y-4">
            <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <XCircle className="w-6 h-6 text-red-600" />
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                The link may have expired or been used already.
              </p>
              <p className="text-xs text-muted-foreground">
                Please request a new password reset link.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <Button asChild className="w-full text-md" size={'lg'}>
              <Link href="/auth/forgot-password">Request new reset link</Link>
            </Button>

            <Button asChild variant="outline" className="w-full text-md" size={'lg'}>
              <Link href="/auth/login">Back to sign in</Link>
            </Button>
          </div>
        </AuthCard>
      </div>
    );
  }

  // Show success state after password reset
  if (isSuccess) {
    return (
      <div className={cn("flex flex-col gap-6", className)} {...props}>
        <AuthCard
          title="Password reset successful"
          description="Your password has been successfully updated"
          contentClassName="space-y-6"
        >
          <div className="text-center space-y-4">
            <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <Check className="w-6 h-6 text-green-600" />
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                You can now sign in with your new password.
              </p>
            </div>
          </div>

          <Button asChild className="w-full text-md" size={'lg'}>
            <Link href="/auth/login">Continue to sign in</Link>
          </Button>
        </AuthCard>
      </div>
    );
  }

  // Show reset password form
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <AuthCard
        title="Reset your password"
        description="Enter your new password below"
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

            {/* Password fields */}
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New password</FormLabel>
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
                    <FormLabel>Confirm new password</FormLabel>
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
            </div>

            <Button type="submit" className="w-full text-md" size={'lg'} disabled={isFormDisabled}>
              {isLoading ? "Updating password..." : "Update password"}
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
