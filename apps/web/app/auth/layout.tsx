"use client";
import Navbar from "@/components/navbar";
import Logo, { LogoProps } from "@workspace/ui/components/logo";
import { AnimatedComponent } from "@/components/blocks/hero/animated-component";
import { appConfig } from "@/app/app-config";
import { useId } from "react";
import { usePathname } from "next/navigation";
import { routes } from "@/app/routes";
import { Button } from "@workspace/ui/components/button";
import { Link } from "@/components/ui/link";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const logoProps = {
    asLink: true,
    href: routes.home,
    text: "findoora",
    textClassName: "font-bold",
    className: "py-4 flex justify-center item-center",
    size: "md" as const,
    iconVariant: "secondary",
  } as LogoProps;
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
          id={useId()}>
          <AnimatedComponent key={pathname}>{children}</AnimatedComponent>
        </div>
      </div>
    </>
  );
}
