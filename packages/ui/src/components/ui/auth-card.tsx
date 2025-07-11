import * as React from "react";

import { cn } from "@workspace/ui/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";

interface AuthCardProps extends React.ComponentProps<"div"> {
  title: string;
  description: string;
  children: React.ReactNode;
  headerClassName?: string;
  contentClassName?: string;
}

function AuthCard({
  className,
  title,
  description,
  children,
  headerClassName,
  contentClassName,
  ...props
}: AuthCardProps) {
  return (
    <Card
      className={cn(
        "md:shadow-sm md:border md:border-border md:rounded-[28px] md:px-1 py-0 mb-4 md:mb-0 md:py-6 md:bg-card",
        "bg-transparent border-0 shadow-none rounded-none",
        className,
      )}
      {...props}
    >
      <CardHeader className={cn("text-center", headerClassName)}>
        <CardTitle className="mt-1 text-xl md:text-2xl font-semibold">
          {title}
        </CardTitle>
        <CardDescription className="mt-2 w-full text-sm md:text-md text-muted-foreground mx-auto">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className={contentClassName}>{children}</CardContent>
    </Card>
  );
}

export { AuthCard, type AuthCardProps };
