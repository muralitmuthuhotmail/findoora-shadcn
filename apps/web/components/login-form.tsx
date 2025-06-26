"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@workspace/ui/lib/utils";
import { AuthCard } from "@workspace/ui/components/auth-card";
import { SocialLogin } from "@/components/social-login";
import { EmailPasswordForm } from "@/components/email-password-form";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadingChange = (loading: boolean) => {
    setIsLoading(loading);
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <AuthCard
        title="Welcome back"
        description="Sign in to your account to continue"
      >
        <div className="space-y-6">
          {/* Social login buttons */}
          <SocialLogin onLoading={handleLoadingChange} disabled={isLoading} />

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">
                Or continue with email
              </span>
            </div>
          </div>

          {/* Email and password form */}
          <EmailPasswordForm
            onLoading={handleLoadingChange}
            disabled={isLoading}
          />
        </div>
      </AuthCard>

      {/* Terms and privacy */}
      <div className="text-center text-xs text-muted-foreground">
        By clicking continue, you agree to our{"  "}
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
