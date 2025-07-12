"use client";

import { Button } from "@workspace/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import Icon, { LucideIconName } from "@workspace/ui/components/icon";
import { ChevronDown, Plus } from "lucide-react";
import { useMemo } from "react";

export type Portfolio = {
  id: string;
  name: string;
  description?: string;
  icon?: LucideIconName;
};

export type PortfolioHeaderProps = {
  title?: string;
  description?: string;
  portfolios?: Portfolio[];
  currentPortfolioId?: string;
  onAddPortfolio?: () => void;
  onSwitchPortfolio?: (portfolio: string) => void;
};

export const PortfolioHeader = ({
  title = "All Portfolio",
  description = "Manage your portfolios and track your investments",
  currentPortfolioId = "1",
  portfolios = [
    {
      id: "1",
      name: "Portfolio 1",
      description: "My selfwealth",
      // icon: "Wallet",
    },
    {
      id: "2",
      name: "Portfolio 2",
      description: "My Moomoo",
      // icon: "RollerCoaster",
    },
    {
      id: "3",
      name: "Portfolio 3",
      description: "Other Assets",
      // icon: "Building",
    },
  ],
  onAddPortfolio,
  onSwitchPortfolio,
}: PortfolioHeaderProps) => {
  const currentPortfolio = useMemo(
    () => portfolios.find((p) => p.id === currentPortfolioId),
    [portfolios, currentPortfolioId]
  );
  return (
    <section
      className="space-2 flex md:justify-between md:items-center w-full flex-col-reverse md:flex-row gap-6 px-4"
      aria-label="Portfolio Header">
      <div className="mx-1 gap-1 hidden md:flex md:flex-col">
        <h1
          className="text-xl font-bold text-left"
          tabIndex={0}
          aria-label="Portfolio Title">
          {title}
        </h1>
        <p
          className="text-muted-foreground text-sm text-left text-wrap"
          aria-label="Portfolio Description">
          {description}
        </p>
      </div>
      <div className="flex items-center md:justify-center justify-between gap-2 w-full md:w-auto">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant={"outline"}
              className="!px-auto flex items-center gap-2 md:w-40 group justify-between"
              aria-haspopup="listbox"
              aria-expanded="false"
              aria-label="Select Portfolio">
              <div className="items-center gap-2">
                {currentPortfolio?.icon && (
                  <Icon
                    name={currentPortfolio.icon}
                    className="hidden md:visible"
                  />
                )}
                {currentPortfolio ? currentPortfolio.name : "Select Portfolio"}
              </div>
              <ChevronDown className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="md:w-40" role="listbox">
            {portfolios.map((portfolio) => (
              <DropdownMenuItem
                key={portfolio.id}
                disabled={portfolio.id === currentPortfolioId}
                onClick={() =>
                  onSwitchPortfolio && onSwitchPortfolio(portfolio.id)
                }
                role="option"
                className={
                  portfolio.id === currentPortfolioId
                    ? "bg-accent text-accent-foreground"
                    : ""
                }
                aria-selected={portfolio.id === currentPortfolioId}
                tabIndex={0}>
                {portfolio.icon && (
                  <Icon name={portfolio.icon} className="hidden md:flex" />
                )}
                <div className="flex flex-col my-2">
                  <span className="text-md">{portfolio.name}</span>
                  <span className="text-xs">{portfolio.description}</span>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <Button
          className="!px-4"
          onClick={onAddPortfolio}
          aria-label="Add Portfolio">
          <Plus />
          Create Portfolio
        </Button>
      </div>
    </section>
  );
};
