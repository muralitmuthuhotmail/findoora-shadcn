import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@workspace/ui/lib/utils";

const loadingSpinnerVariants = cva(
  "animate-spin rounded-full border-b-2 border-primary",
  {
    variants: {
      size: {
        default: "h-8 w-8",
        sm: "h-4 w-4",
        lg: "h-12 w-12",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

export interface LoadingSpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof loadingSpinnerVariants> {}

const LoadingSpinner = React.forwardRef<HTMLDivElement, LoadingSpinnerProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <div
        className={cn("flex center w-full h-full justify-center items-center")}
      >
        <div
          className={cn(loadingSpinnerVariants({ size, className }))}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
LoadingSpinner.displayName = "LoadingSpinner";

export { LoadingSpinner, loadingSpinnerVariants };
