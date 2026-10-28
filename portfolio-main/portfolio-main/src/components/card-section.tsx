import type { LucideIcon } from "lucide-react";
import React from "react";

type CardSectionProps = {
  id?: string;
  numeral?: string;
  category?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  icon?: LucideIcon;
  className?: string;
};

export function CardSection({
  id,
  numeral,
  category,
  title,
  subtitle,
  children,
  icon: Icon,
  className = "",
}: CardSectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 w-full archival-box rounded-sm p-6 sm:p-8 lg:p-10 shadow-xs ${className}`}
    >
      {/* Editorial Header */}
      <header className="w-full mb-6 sm:mb-8 pb-4 border-b border-border/80">
        <div className="flex items-center justify-between gap-4 mb-2">
          <div className="flex items-center gap-2">
            {numeral && (
              <span className="font-mono-archival text-xs font-semibold tracking-widest text-[#B08D57] uppercase">
                {numeral}.
              </span>
            )}
            {category && (
              <span className="font-mono-archival text-xs tracking-widest text-muted-foreground uppercase">
                {category}
              </span>
            )}
          </div>
          <div className="text-[#B08D57] opacity-60 text-xs">❖ ❖ ❖</div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="font-serif-headline text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
              {title}
            </h2>
            {subtitle && (
              <p className="font-serif-display italic text-sm sm:text-base text-muted-foreground">
                {subtitle}
              </p>
            )}
          </div>

          {Icon && (
            <div className="hidden sm:flex size-10 rounded-full border border-border/80 bg-background/60 items-center justify-center text-[#722F37] dark:text-[#C9A86E] shrink-0">
              <Icon className="size-5" />
            </div>
          )}
        </div>
      </header>

      {/* Main Body */}
      <div className="w-full">{children}</div>
    </section>
  );
}