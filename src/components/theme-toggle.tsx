"use client";

import { useTheme } from "@/hooks/use-theme";
import { Moon, Sun } from "lucide-react";
import { toast } from "sonner";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  const handleToggle = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    toggleTheme();
    toast.success(`Theme switched to ${nextTheme === "dark" ? "Oxblood & Burgundy" : "Antique Paper"}!`, {
      description: nextTheme === "dark" ? "Night-time archival edition activated." : "Daylight parchment edition activated.",
    });
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label="Toggle parchment and oxblood theme"
      title={theme === "dark" ? "Switch to Antique Paper theme" : "Switch to Oxblood Dark theme"}
      className={`relative inline-flex items-center justify-center size-9 sm:size-10 rounded-full border border-border/80 bg-background/80 hover:bg-accent/40 text-foreground transition-all duration-300 shadow-xs hover:border-[#B08D57] hover:scale-105 active:scale-95 cursor-pointer ${className}`}
    >
      <span className="sr-only">Toggle theme</span>
      <div className="relative size-4 sm:size-4.5 flex items-center justify-center">
        {theme === "dark" ? (
          <Moon className="size-4 text-[#C9A86E] transition-transform duration-500 rotate-0" />
        ) : (
          <Sun className="size-4 text-[#722F37] transition-transform duration-500 rotate-0" />
        )}
      </div>
    </button>
  );
}