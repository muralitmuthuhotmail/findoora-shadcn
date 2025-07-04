import Navbar from "@/components/navbar";
import Logo, { LogoProps } from "@workspace/ui/components/logo";
import { AnimatedComponent } from "@/components/blocks/hero/animated-component";
import { appConfig } from "../app-config";

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
      <div className="flex h-full md:min-h-screen flex-col items-center justify-center">
        <AnimatedComponent delay={0.5} animationType="fade">
          <div className="hidden md:block sticky top-0 z-50 w-full">
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
        <div className="flex w-full sm:max-w-md flex-col gap-6">
          <AnimatedComponent delay={0.03}>{children}</AnimatedComponent>
        </div>
      </div>
    </>
  );
}
