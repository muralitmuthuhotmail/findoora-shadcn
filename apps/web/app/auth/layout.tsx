"use client";
import Navbar from "@/components/navbar";
import { AnimatedComponent } from "@/components/blocks/hero/animated-component";
import { appConfig } from "@/app/app-config";
import { useId } from "react";
import { usePathname } from "next/navigation";
import { routes } from "@/app/routes";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <>
      <Navbar
        maxWidth={appConfig.maxWidth}
        hasBlur={true}
        className="hidden md:block fixed"
        authButton={{
          text: "Need help?",
          variant: "link",
          href: routes.home,
        }}
        showThemeToggle={false}
      />
      <div className="flex h-full md:min-h-screen flex-col items-center justify-center">
        <Navbar
          maxWidth={appConfig.maxWidth}
          hasBlur={true}
          className="md:hidden mb-6"
          authButton={{
            text: "Need help?",
            variant: "link",
            href: routes.home,
          }}
          showThemeToggle={false}
        />
        <div
          className="flex w-full sm:max-w-md flex-col gap-6 h-hull"
          id={useId()}
        >
          <AnimatedComponent key={pathname}>{children}</AnimatedComponent>
        </div>
      </div>
    </>
  );
}
