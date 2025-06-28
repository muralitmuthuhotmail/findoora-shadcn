"use client";

import * as React from "react";
import { MoonIcon, SunMediumIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "@workspace/ui/components/switch";

const SwitchMode = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkMode = theme === "dark";

  const handleThemeChange = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <Switch
        icon={<SunMediumIcon className="h-4 w-4" />}
        checked={false}
        onCheckedChange={() => {}}
        className="h-7 w-12"
        thumbClassName="h-6 w-6 data-[state=checked]:translate-x-5"
      />
    );
  }

  return (
    <Switch
      icon={
        isDarkMode ? (
          <MoonIcon className="h-4 w-4" />
        ) : (
          <SunMediumIcon className="h-4 w-4" />
        )
      }
      checked={isDarkMode}
      onCheckedChange={handleThemeChange}
      className="h-7 w-12 border-accent bg-accent/10"
      thumbClassName="h-6 w-6 data-[state=checked]:translate-x-5"
    />
  );
};

export default SwitchMode;
