"use client";
import Navbar from "@/components/navbar";
import Logo, { LogoProps } from "@workspace/ui/components/logo";
import { AnimatedComponent } from "@/components/blocks/hero/animated-component";
import { appConfig } from "../app-config";
import { useId } from "react";
import { usePathname } from "next/navigation";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const logoProps = {
    asLink: true,
    href: "/",
    text: "findoora",
    textClassName: "font-bold",
    className: "py-4 flex justify-center item-center",
    size: "md" as const,
    iconVariant: "secondary",
  } as LogoProps;
  const pathname = usePathname();

  return (
    <>
      <div className="flex h-full md:min-h-screen flex-col items-center justify-center">
        <AnimatedComponent delay={0.5} animationType="fade">
          <div className="hidden md:block top-0 z-50 w-full">
            <Logo {...logoProps} />
          </div>
        </AnimatedComponent>
        <Navbar
          maxWidth={appConfig.maxWidth}
          hasBlur={true}
          className="md:hidden mb-6"
          authButton={{ text: "Need help?", variant: "link", href: "/" }}
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
