"use client";

import { Share2 } from "lucide-react";
import { toast } from "sonner";

export function LinkShare({ className = "" }: { className?: string }) {
  const handleShare = async () => {
    const url = window.location.href;

    try {
      await navigator.clipboard.writeText(url);
      toast.success("Archival link copied to clipboard!", {
        description: url,
      });
    } catch (err) {
      toast.error(`Failed to copy link: ${err}`, {
        description: "Please copy directly from browser address bar.",
      });
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      aria-label="Share folio link"
      title="Copy portfolio link"
      className={`inline-flex items-center justify-center size-9 sm:size-10 rounded-full border border-border/80 bg-background/80 hover:bg-accent/40 text-foreground transition-all duration-300 shadow-xs hover:border-[#B08D57] hover:scale-105 active:scale-95 cursor-pointer ${className}`}
    >
      <Share2 className="size-4 text-muted-foreground hover:text-foreground transition-colors" />
    </button>
  );
}
