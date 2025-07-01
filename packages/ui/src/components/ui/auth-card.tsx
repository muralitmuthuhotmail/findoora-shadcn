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
        "md:shadow-lg md:border md:border-border md:rounded-[28px] md:px-4 py-0 md:py-7 md:bg-card/40 md:backdrop-blur",
        "bg-transparent border-0 shadow-none rounded-none",
        className,
      )}
      {...props}
    >
      <CardHeader className={cn("text-center", headerClassName)}>
        <CardTitle className="text-xl md:text-xl md:text-2xl font-semibold tracking-tighter">
          {title}
        </CardTitle>
        <CardDescription className="w-full text-sm md:text-md text-muted-foreground mx-auto">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className={contentClassName}>{children}</CardContent>
    </Card>
  );
}

export { AuthCard, type AuthCardProps };
