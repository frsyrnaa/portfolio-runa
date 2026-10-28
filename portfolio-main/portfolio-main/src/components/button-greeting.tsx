"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "./ui/label";
import { Feather, Sparkles } from "lucide-react";
import { toast } from "sonner";

export function ButtonGreeting({ variant = "default" }: { variant?: "default" | "hero" }) {
  const [name, setName] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.warning("Kindly enter your name before submitting.");
      return;
    }

    toast(`Greetings, ${name}!`, {
      description: "Delighted to make your acquaintance in this personal archive.",
    });

    setOpen(false);
    setName("");
  };

  const triggerButton = variant === "hero" ? (
    <button
      type="button"
      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-sm border border-[#B08D57]/60 bg-transparent hover:bg-[#B08D57]/10 text-foreground text-xs font-mono-archival uppercase tracking-wider transition-all duration-300 hover:border-[#B08D57] active:scale-98 cursor-pointer"
    >
      <Feather className="size-3.5 text-[#B08D57]" />
      <span>Sign Guestbook</span>
    </button>
  ) : (
    <button
      type="button"
      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-sm border border-border bg-card/60 hover:bg-card text-foreground text-xs font-mono-archival uppercase tracking-wider transition-all duration-300 hover:border-[#B08D57]/60 active:scale-98 cursor-pointer"
    >
      <Sparkles className="size-3.5 text-[#B08D57]" />
      <span>Sign Visitor Ledger</span>
    </button>
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={triggerButton} />

      <DialogContent className="sm:max-w-md bg-card border-border/80 text-foreground p-6 archival-box shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-4">
          <DialogHeader className="space-y-1.5 text-left">
            <div className="font-mono-archival text-xs tracking-widest text-[#B08D57] uppercase">
              ❖ Visitor Ledger · Registro ❖
            </div>
            <DialogTitle className="font-serif-headline text-2xl font-bold tracking-tight text-foreground">
              Inscribe Your Name
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-xs sm:text-sm font-sans">
              Leave your signature in this digital ledger to receive a bespoke greeting from Farsya Runa.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-2 py-2">
            <Label htmlFor="visitor-name" className="text-xs uppercase tracking-wider font-mono-archival text-muted-foreground">
              Signatory / Name
            </Label>
            <Input
              id="visitor-name"
              name="name"
              placeholder="e.g., Ada Lovelace"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-background/80 border-border focus-visible:ring-[#B08D57] font-sans"
              autoFocus
            />
          </div>

          <DialogFooter className="pt-2 sm:justify-end gap-2">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="px-4 py-2 text-xs font-mono-archival tracking-wider uppercase rounded-sm border border-border hover:bg-muted text-muted-foreground cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-mono-archival tracking-wider uppercase rounded-sm bg-[#722F37] hover:bg-[#8A3A44] text-[#F3E8D2] border border-[#B08D57]/40 shadow-xs transition-colors cursor-pointer"
            >
              Affix Signature
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
