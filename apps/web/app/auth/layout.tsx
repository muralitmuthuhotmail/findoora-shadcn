import Navbar from "@/components/navbar";
import { AuroraBackground } from "@workspace/ui/components/ui/aurora-background";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Navbar />
    <div className="absolute top-0 w-full flex h-full min-h-screen flex-col items-center justify-center bg-blur bg-background/40">
      <AuroraBackground className="fixed inset-0 z-[-1]"> </AuroraBackground>
      <div className="flex w-full sm:max-w-md flex-col gap-6 mt-5">
        {children}
      </div>
    </div>
    </>
  );
}
