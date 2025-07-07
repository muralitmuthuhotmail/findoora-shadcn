"use client";

import { routes } from "@/app/routes";
import { Button } from "@workspace/ui/components/button";
import Logo, { LogoProps } from "@workspace/ui/components/logo";
import SwitchMode from "@workspace/ui/components/ui/mode-switch";
import { cn } from "@workspace/ui/lib/utils";
import { useRouter } from "next/navigation";
import { memo, useCallback } from "react";

// Types
export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Logo configuration
   */
  logo?: Partial<LogoProps> & {
    href?: string;
  };

  /**
   * Whether to show the theme toggle
   * @default true
   */
  showThemeToggle?: boolean;

  /**
   * Authentication button configuration
   */
  authButton?: {
    text?: string;
    href?: string;
    variant?:
      | "default"
      | "destructive"
      | "outline"
      | "secondary"
      | "ghost"
      | "link";
    size?: "default" | "sm" | "lg" | "icon";
  };

  /**
   * Whether the navbar should have a blur background
   * @default true
   */
  hasBlur?: boolean;

  /**
   * Whether the navbar should be sticky
   * @default true
   */
  isSticky?: boolean;

  /**
   * Custom container max width
   * @default "7xl"
   */
  maxWidth?:
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "full"
    | string;

  /**
   * Custom padding
   */
  padding?: {
    x?: string;
    y?: string;
  };
}

const Navbar = memo<NavbarProps>(
  ({
    logo = {},
    showThemeToggle = true,
    authButton = {},
    hasBlur = true,
    isSticky = true,
    maxWidth = "7xl",
    padding = { x: "px-4", y: "py-3" },
    className,
    ...props
  }) => {
    const router = useRouter();

    // Destructure auth button props with defaults
    const {
      text: authText = "Sign In",
      href: authHref = routes.login,
      variant: authVariant = "default",
      size: authSize = "sm",
    } = authButton;

    // Destructure logo props with defaults
    const { href: logoHref = routes.home, ...logoProps } = logo;

    // Handle auth button click
    const handleAuthClick = useCallback(() => {
      router.push(authHref);
    }, [router, authHref]);

    // Build container classes
    const containerClasses = cn(
      "flex w-full items-center justify-center",
      padding.x,
      padding.y,
      hasBlur && "backdrop-blur-md",
      isSticky && "sticky top-0",
      "z-50 border-b border-border/40",
      "transition-all duration-200",
      className,
    );

    const innerContainerClasses = cn(
      "flex items-center justify-between w-full mx-auto transition-all duration-[--duration] ease-in-out",
      `max-w-${maxWidth}`,
      "gap-4",
    );

    return (
      <nav
        className={containerClasses}
        role="navigation"
        aria-label="Main navigation"
        {...props}
      >
        <div className={innerContainerClasses}>
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Logo
              asLink
              href={logoHref}
              size="sm"
              interactive
              aria-label="Navigate to homepage"
              {...logoProps}
            />
          </div>

          {/* Actions Section */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            {showThemeToggle && (
              <div className="flex-shrink-0">
                <SwitchMode />
              </div>
            )}

            {/* Auth Button */}
            <Button
              variant={authVariant}
              size={authSize}
              onClick={handleAuthClick}
              className={cn(
                "font-medium transition-all duration-200",
                "hover:scale-102 active:scale-98",
                authVariant === "default" && "bg-primary hover:bg-primary/90",
              )}
              aria-label={`Navigate to ${authText.toLowerCase()} page`}
            >
              {authText}
            </Button>
          </div>
        </div>
      </nav>
    );
  },
);

Navbar.displayName = "Navbar";

export default Navbar;
