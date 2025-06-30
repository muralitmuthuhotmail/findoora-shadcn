import { Suspense } from "react";
import { ResetPasswordForm } from "@/components/blocks/auth/reset-password-form";

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordForm />
    </Suspense>
  );
}
