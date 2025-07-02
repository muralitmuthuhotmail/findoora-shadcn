import Navbar from "@/components/navbar";
import LoadingSpinner from "@/components/loading-spinner";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Logo from "@/components/logo";

const AuroraBackground = dynamic(() =>
  import("@workspace/ui/components/ui/aurora-background").then(
    (mod) => mod.AuroraBackground,
  ),
);

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <Navbar hasBlur={false} className="bg-transparent border-b-0"/> */}
      <div className="flex h-full md:min-h-screen flex-col items-center justify-center bg-blur bg-card/50">
        <Logo
          asLink
          href="/"
          text="findoora"
          textClassName="font-bold"
          className="py-4 flex justify-center item-center"
          size="md"
          iconVariant="secondary"
        />
        <div className="flex w-full sm:max-w-md flex-col gap-6">
          <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
        </div>
      </div>
    </>
  );
}
