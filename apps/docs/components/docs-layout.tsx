"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@workspace/ui/lib/utils";
import Logo from "@workspace/ui/components/logo";
import SwitchMode from "@workspace/ui/components/ui/mode-switch";

interface DocLayoutProps {
  children: React.ReactNode;
}

interface NavItem {
  title: string;
  href: string;
  items?: NavItem[];
}

const navigation: NavItem[] = [
  {
    title: "Getting Started",
    href: "/",
    items: [
      { title: "Introduction", href: "/" },
      { title: "Getting Started", href: "/getting-started" },
      { title: "Features", href: "/features" },
    ],
  },
  {
    title: "User Guide",
    href: "/user-guide",
    items: [
      { title: "Overview", href: "/user-guide" },
      { title: "Basic Usage", href: "/user-guide/basic-usage" },
      { title: "Advanced Search", href: "/user-guide/advanced-search" },
    ],
  },
  {
    title: "API Reference",
    href: "/api",
    items: [
      { title: "Overview", href: "/api" },
      { title: "Authentication", href: "/api/authentication" },
      { title: "Search API", href: "/api/search-api" },
    ],
  },
  {
    title: "Help",
    href: "/faq",
    items: [
      { title: "FAQ", href: "/faq" },
      { title: "Troubleshooting", href: "/troubleshooting" },
    ],
  },
];

function NavLink({ item, pathname }: { item: NavItem; pathname: string }) {
  const isActive = pathname === item.href;
  
  return (
    <Link
      href={item.href}
      className={cn(
        "block px-3 py-1.5 rounded-md text-sm transition-colors",
        isActive
          ? "bg-accent text-accent-foreground font-medium"
          : "hover:bg-accent/50 text-muted-foreground hover:text-foreground"
      )}
    >
      {item.title}
    </Link>
  );
}

export function DocsLayout({ children }: DocLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-center items-center">
        <div className="container flex h-14 items-center w-full">
          <div className="mr-4 flex">
            <Logo asLink href="/" size="sm" interactive />
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center">
              <SwitchMode />
            </nav>
          </div>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="w-64 shrink-0 hidden lg:block">
            <nav className="sticky top-8 space-y-6">
              {navigation.map((section) => (
                <div key={section.href}>
                  <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3">
                    {section.title}
                  </h3>
                  <ul className="space-y-1">
                    {section.items?.map((item) => (
                      <li key={item.href}>
                        <NavLink item={item} pathname={pathname} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <main className="flex-1 max-w-4xl">
            <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:scroll-mt-8">
              {children}
            </div>
          </main>

          {/* Table of contents placeholder */}
          <aside className="w-48 shrink-0 hidden xl:block">
            <div className="sticky top-8">
              <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3">
                On This Page
              </h3>
              <div className="text-sm text-muted-foreground">
                <p>Table of contents will be automatically generated here.</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
