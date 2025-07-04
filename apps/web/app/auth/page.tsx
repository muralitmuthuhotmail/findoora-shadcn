import { redirect } from "next/navigation";

import { authPageMetadata } from "@/app/metadata";

export const metadata = authPageMetadata;

export default function AuthPage() {
  redirect("/auth/login");
}
