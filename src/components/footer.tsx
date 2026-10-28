import { ArrowUp } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const username = "frsyrnaa";
  const license = "MIT";
  const url = `https://github.com/${username}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full pt-12 pb-16 border-t border-border/80 text-muted-foreground font-mono-archival text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top Archival Colophon Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-border/50">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-full border border-[#B08D57]/70 bg-card flex items-center justify-center font-serif-display font-bold text-xs text-[#722F37] dark:text-[#C9A86E]">
              FRS
            </div>
            <div>
              <p className="font-serif-headline text-sm font-semibold text-foreground">
                Farsya Runa S.
              </p>
              <p className="text-[10px] text-muted-foreground tracking-widest uppercase">
                Personal Archive & Folio · Edition 2026
              </p>
            </div>
          </div>

          {/* Return to beginning button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border/80 bg-background/80 hover:bg-card text-foreground text-xs uppercase tracking-wider transition-all duration-300 hover:border-[#B08D57] cursor-pointer"
          >
            <span>Return to Top</span>
            <ArrowUp className="size-3 text-[#B08D57] group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Legal & Attribution Details */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-[11px] leading-relaxed">
          <p>
            &copy; {year} Farsya Runa S. All archival records and intellectual assets reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-muted-foreground">
            <p>
              Designed & Engineered by{" "}
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-[#722F37] dark:hover:text-[#C9A86E] underline underline-offset-4 decoration-[#B08D57]/50 transition-colors"
              >
                {username}
              </a>
            </p>

            <span className="text-[#B08D57]">&bull;</span>

            <p>
              Licensed under{" "}
              <span className="text-foreground font-medium">{license} License</span>
            </p>

            <span className="text-[#B08D57] hidden sm:inline">&bull;</span>

            <p className="hidden sm:inline">
              Typeset in Cormorant &amp; Inter
            </p>
          </div>
        </div>

        {/* Classical Ending Flourish */}
        <div className="text-center text-[10px] text-[#B08D57] tracking-widest uppercase opacity-75">
          ❖ FINIS · LAUS DEO ❖
        </div>
      </div>
    </footer>
  );
}