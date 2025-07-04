import { LoadingSpinner } from "@workspace/ui/components/loading-spinner";
import dynamic from "next/dynamic";

const ResetPasswordForm = dynamic(
  () =>
    import("@/components/blocks/auth/reset-password-form").then(
      (mod) => mod.ResetPasswordForm,
    ),
  {
    loading: () => <LoadingSpinner />,
  },
);

export default function ResetPasswordPage() {
  return <ResetPasswordForm />;
}
