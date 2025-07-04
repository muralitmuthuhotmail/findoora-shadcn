import { LoadingSpinner } from "@workspace/ui/components/loading-spinner";
import dynamic from "next/dynamic";

import { forgotPasswordPageMetadata } from "@/app/metadata";
export const metadata = forgotPasswordPageMetadata;

const ForgotPasswordForm = dynamic(
  () =>
    import("@/components/blocks/auth/forgot-password-form").then(
      (mod) => mod.ForgotPasswordForm,
    ),
  {
    loading: () => <LoadingSpinner />,
  },
);

export default function ForgotPasswordPage() {
  return <ForgotPasswordForm />;
}
