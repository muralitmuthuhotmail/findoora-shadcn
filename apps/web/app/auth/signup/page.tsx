import { LoadingSpinner } from "@workspace/ui/components/loading-spinner";
import dynamic from "next/dynamic";
import { registerPageMetadata } from "@/app/metadata";

export const metadata = registerPageMetadata;

const SignupForm = dynamic(
  () =>
    import("@/components/blocks/auth/signup-form").then(
      (mod) => mod.SignupForm,
    ),
  {
    loading: () => <LoadingSpinner />,
  },
);

export default function SignupPage() {
  return <SignupForm />;
}
