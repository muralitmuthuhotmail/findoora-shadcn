"use client";
import { appConfig } from "@/app/app-config";
import { PortfolioNavBar } from "@/components/blocks/home";
import { cn } from "@workspace/ui/lib/utils";
import { usePathname } from "next/navigation";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <>
      {/* Navigation Bar */}
      <PortfolioNavBar />
      <div className="flex w-full items-center justify-center md:px-4 py-2">
        <div
          className={cn(
            "flex flex-col items-center justify-center w-full mx-auto",
            `max-w-${appConfig.maxWidth}`,
            "gap-4"
          )}>
          {children}
        </div>
      </div>
    </>
  );
}
