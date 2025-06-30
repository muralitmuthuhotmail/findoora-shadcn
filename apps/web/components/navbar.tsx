"use client";

import { Button } from "@workspace/ui/components/button";
import Logo from "@/components/logo";
import SwitchMode from "@workspace/ui/components/ui/mode-switch";

const Navbar = () => {
  return (
    <nav className="flex w-full items-center px-4 py-2 backdrop-blur sticky top-0 z-50">
      <div className="flex justify-between gap-4 mx-auto w-full max-w-6xl">
        <Logo asLink href="/" size="sm" />
        <div className="flex items-center gap-4">
          <SwitchMode />
          <Button
            className="px-4 hover:bg-primary/90 transition-all duration-300 hover:-translate-y-0.5 shadow"
            size={"sm"}
            onClick={() => {
              window.location.href = "/auth/login"; // Redirect to sign-in page
            }}
          >
            Sign In
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
