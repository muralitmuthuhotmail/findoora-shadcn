"use client";

import { Button } from "@workspace/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import { ChevronDown, Plus } from "lucide-react";

export const PortfolioHeader = () => {
  return (
    <div className="space-2 flex md:justify-between md:items-center w-full flex-col-reverse md:flex-row gap-6">
      <h1 className="text-xl font-bold text-left px-4">All Portfolio</h1>
      <div className="flex md:flex-row flex-row-reverse items-center md:justify-center justify-between">
        <Button size="sm" className="!px-4">
          <Plus />
          Add Portfolio
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="!px-4 ml-2 flex items-center gap-2 group w-40">
              Switch Portfolio
              <ChevronDown className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40">
            <DropdownMenuItem>
              <span className="text-sm">Portfolio 1</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span className="text-sm">Portfolio 2</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span className="text-sm">Portfolio 3</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
