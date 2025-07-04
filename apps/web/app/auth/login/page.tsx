import { LoadingSpinner } from "@workspace/ui/components/loading-spinner";
import dynamic from "next/dynamic";

import { loginPageMetadata } from "@/app/metadata";

export const metadata = loginPageMetadata;

const LoginForm = dynamic(
  () =>
    import("@/components/blocks/auth/login-form").then((mod) => mod.LoginForm),
  {
    loading: () => <LoadingSpinner />,
  },
);

export default function LoginPage() {
  return <LoginForm />;
}
