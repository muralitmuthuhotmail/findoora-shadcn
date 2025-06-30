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
        "sm:shadow-lg sm:border sm:border-border sm:rounded-[28px] sm:px-4 sm:py-7 sm:bg-card/30 sm:backdrop-blur",
        "bg-transparent border-0 shadow-none rounded-none",
        className,
      )}
      {...props}
    >
      <CardHeader className={cn("text-center", headerClassName)}>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className={contentClassName}>{children}</CardContent>
    </Card>
  );
}

export { AuthCard, type AuthCardProps };
