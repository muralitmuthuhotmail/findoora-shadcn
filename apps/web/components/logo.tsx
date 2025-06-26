import { cn } from "@workspace/ui/lib/utils";
import React from "react";

interface LogoProps {
  /**
   * The text to display next to the logo icon.
   * @default "Findoora"
   */
  text?: string;
  /**
   * Additional className for the wrapper div.
   */
  className?: string;
  /**
   * Size of the logo icon (width & height in rem, px, etc).
   * @default "1.5rem" (24px)
   */
  iconSize?: string | number;
  /**
   * Gradient colors for the icon.
   * @default ["from-primary", "to-secondary"]
   */
  gradientFrom?: string;
  gradientTo?: string;
  /**
   * Hide the text label.
   */
  hideText?: boolean;
  /**
   * Size of the logo and text.
   * @default "sm"
   */
  size?: "sm" | "lg" | "xl" | "2xl";
}

const sizeMap = {
  sm: { icon: "1.5rem", text: "text-md md:text-lg" },
  lg: { icon: "2.25rem", text: "text-lg md:text-2xl" },
  xl: { icon: "3rem", text: "text-xl md:text-4xl" },
  "2xl": { icon: "4rem", text: "text-2xl md:text-5xl" },
};

export const Logo: React.FC<LogoProps> = ({
  text = "Findoora",
  className,
  iconSize,
  gradientFrom = "from-primary",
  gradientTo = "to-secondary",
  hideText = false,
  size = "sm",
}) => {
  const { icon, text: textSize } = sizeMap[size] || sizeMap.sm;
  const finalIconSize = iconSize ?? icon;

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div
        className={cn(
          "rounded-full shadow bg-gradient-to-br",
          gradientFrom,
          gradientTo,
        )}
        style={{
          width: finalIconSize,
          height: finalIconSize,
          minWidth: finalIconSize,
          minHeight: finalIconSize,
        }}
      />
      {!hideText && (
        <h1
          className={cn(
            "font-display font-bold text-foreground tracking-tight",
            textSize,
          )}
        >
          {text}
        </h1>
      )}
    </div>
  );
};

export default Logo;
