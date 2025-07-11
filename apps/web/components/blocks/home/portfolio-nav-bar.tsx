"use client";

import { appConfig } from "@/app/app-config";
import { routes } from "@/app/routes";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";
import { Button } from "@workspace/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import { Input } from "@workspace/ui/components/input";
import Logo from "@workspace/ui/components/logo";
import { cn } from "@workspace/ui/lib/utils";
import { Bell, LogOut, Search, Settings, User } from "lucide-react";

export const PortfolioNavBar = () => {
  const innerContainerClasses = cn(
    "flex items-center justify-between w-full mx-auto transition-all duration-[--duration] ease-in-out",
    `max-w-${appConfig.maxWidth}`,
    "gap-4"
  );
  return (
    <nav className="flex w-full items-center justify-center px-4 py-3 backdrop-blur-lg sticky top-0 z-50 border-b border-border/40 transition-all duration-200 bg-gradient shadow-sm bg-card/70">
      <div className={innerContainerClasses}>
        {/* Logo and Brand */}
        <div className="flex-shrink-0">
          <Logo
            asLink
            href={routes.home}
            size="sm"
            interactive
            aria-label="Navigate to homepage"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-1">
          <Button variant="ghost" className="text-primary">
            Dashboard
          </Button>
          <Button variant="ghost">Portfolios</Button>
          <Button variant="ghost">Analytics</Button>
          <Button variant="ghost">Markets</Button>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative hidden md:block">
            <Input
              type="text"
              placeholder="Search..."
              className="pl-8 pr-2 h-8 w-64"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="relative block md:hidden">
            <Search />
          </Button>

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell />
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">John Doe</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    john.doe@example.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};
