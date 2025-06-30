import Navbar from "@/components/navbar";
import LoadingSpinner from "@/components/loading-spinner";
import TransitionWrapper from "@/components/transition-wrapper";
import { AuroraBackground } from "@workspace/ui/components/ui/aurora-background";
import { Suspense } from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="absolute top-0 w-full flex h-full min-h-screen flex-col items-center justify-center bg-blur bg-card/50">
        <AuroraBackground className="fixed inset-0 z-[-1] sm:block hidden">
          {" "}
        </AuroraBackground>
        <div className="flex w-full sm:max-w-md flex-col gap-6 mt-5 animate-fade-in transition-all duration-500 ease-in-out">
          <Suspense
            fallback={
              <div className="animate-fade-in transition-opacity duration-300">
                <LoadingSpinner />
              </div>
            }
          >
            <TransitionWrapper>{children}</TransitionWrapper>
          </Suspense>
        </div>
      </div>
    </>
  );
}
