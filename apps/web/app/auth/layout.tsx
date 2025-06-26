import Logo from "@/components/logo";
import { GalleryVerticalEnd } from "lucide-react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 py-6 px-3 sm:p-6 md:p-10">
      <div className="flex w-full sm:max-w-md flex-col gap-6">
        <a href="/" className="flex items-center gap-2 self-center font-medium">
          <Logo size="lg" />
        </a>
        {children}
      </div>
    </div>
  );
}
