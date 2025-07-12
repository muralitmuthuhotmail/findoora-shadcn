import { Skeleton } from "@workspace/ui/components/skeleton"; // Adjust the import path as needed
import { cn } from "@workspace/ui/lib/utils";
import React, { Suspense } from "react";

export type LucideIconName = keyof typeof import("lucide-react");

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: LucideIconName;
  size?: number;
  color?: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = "currentColor",
  className,
  ...rest
}) => {
  const classNames = cn(className);
  const LucideIcon = React.lazy(() =>
    import("lucide-react").then((mod) => {
      const IconComponent = mod[name];
      if (
        typeof IconComponent === "function" ||
        (typeof IconComponent === "object" && IconComponent !== null)
      ) {
        return { default: IconComponent as React.ComponentType<any> };
      }
      // fallback to a dummy component if icon not found
      return {
        default: () => (
          <Skeleton
            className={classNames}
            style={{ width: size, height: size }}
          />
        ),
      };
    })
  );

  return (
    <Suspense
      fallback={
        <Skeleton
          className={classNames}
          style={{ width: size, height: size }}
        />
      }>
      <LucideIcon
        className={classNames}
        width={size}
        height={size}
        color={color}
        {...rest}
      />
    </Suspense>
  );
};

export default Icon;
