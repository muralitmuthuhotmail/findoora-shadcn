import Navbar from "@/components/navbar";
import LoadingSpinner from "@/components/loading-spinner";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Logo, { LogoProps } from "@/components/logo";
import { AnimatedComponent } from "@/components/blocks/hero/animated-component";

// const AuroraBackground = dynamic(() =>
//   import("@workspace/ui/components/ui/aurora-background").then(
//     (mod) => mod.AuroraBackground,
//   ),
// );

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

  return (
    <>
      {/* <AuroraBackground className="fixed inset-0 z-[-1] hidden md:block" /> */}
      <div className="flex h-full md:min-h-screen flex-col items-center justify-center bg-blur">
        <AnimatedComponent delay={0.1}>
          <div className="hidden md:block">
            <Logo {...logoProps} />
          </div>
        </AnimatedComponent>
        <Navbar
          hasBlur={true}
          className="md:hidden mb-6"
          authButton={{ text: "Need help?", variant: "link", href: "/" }}
          showThemeToggle={false}
        />
        <div className="flex w-full sm:max-w-md flex-col gap-6">
          <AnimatedComponent delay={0.1}>
            {children}
          </AnimatedComponent>
        </div>
      </div>
    </>
  );
}
