import Navbar from "@/components/navbar";
import Logo, { LogoProps } from "@/components/logo";
import { AnimatedComponent } from "@/components/blocks/hero/animated-component";

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
      <div className="flex h-full md:min-h-screen flex-col items-center justify-center bg-blur">
        <div className="hidden md:block sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm">
          <Logo {...logoProps} />
        </div>
        <Navbar
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
