"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "./theme-toggle";
import { LinkShare } from "./link-share";
import { Menu, X, BookOpen } from "lucide-react";

const NAV_ITEMS = [
  { label: "About", href: "#about", numeral: "I" },
  { label: "Education", href: "#education", numeral: "II" },
  { label: "Experience", href: "#experience", numeral: "III" },
  { label: "Credentials", href: "#certifications", numeral: "IV" },
  { label: "Projects", href: "#projects", numeral: "V" },
  { label: "Skills", href: "#skills", numeral: "VI" },
  { label: "Journal", href: "#journal", numeral: "VII" },
  { label: "Contact", href: "#contact", numeral: "VIII" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState<string>("about");
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledPercent = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolledPercent);

      setScrolled(winScroll > 30);

      // Determine active section
      const sections = NAV_ITEMS.map((item) => item.href.slice(1));
      const scrollPos = winScroll + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Reading Progress Bar at the top of the viewport */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-[#B08D57] z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md shadow-xs border-b border-border/80 py-2.5"
            : "bg-transparent py-4 border-b border-border/40"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* FRS Monogram & Wordmark */}
          <a
            href="#"
            className="group flex items-center gap-3 text-foreground transition-opacity hover:opacity-90"
            aria-label="Farsya Runa S. Archive Home"
          >
            <div className="relative size-9 rounded-full border border-[#B08D57]/70 bg-card flex items-center justify-center shadow-2xs group-hover:border-[#722F37] dark:group-hover:border-[#B08D57] transition-colors">
              <span className="font-serif-display font-bold text-xs tracking-wider text-[#722F37] dark:text-[#C9A86E]">
                FRS
              </span>
              <span className="absolute -top-1 -right-1 text-[8px] text-[#B08D57]">✦</span>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-serif-headline text-base sm:text-lg font-bold tracking-tight text-foreground leading-none">
                Farsya Runa S.
              </span>
              <span className="font-mono-archival text-[10px] tracking-widest text-[#B08D57] uppercase mt-0.5">
                Vol. 07 · Archive
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`group relative text-xs tracking-wider uppercase font-mono-archival transition-colors py-1 ${
                    isActive
                      ? "text-[#722F37] dark:text-[#C9A86E] font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className="text-[10px] opacity-60 mr-1 text-[#B08D57]">
                    {item.numeral}.
                  </span>
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-[#722F37] dark:bg-[#C9A86E] transition-all duration-300 ${
                      isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-60"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Controls: Share, Theme Toggle, Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <LinkShare />
            <ThemeToggle />

            {/* Mobile menu trigger button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden inline-flex items-center justify-center size-9 rounded-full border border-border/80 bg-background/80 text-foreground hover:bg-accent/40 transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="size-4.5" /> : <Menu className="size-4.5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-border bg-card/95 backdrop-blur-md px-6 py-5 shadow-lg">
            <div className="font-mono-archival text-[10px] uppercase tracking-widest text-[#B08D57] mb-3 flex items-center gap-2">
              <BookOpen className="size-3" />
              <span>Folio Index</span>
            </div>
            <nav className="flex flex-col space-y-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between text-xs py-1.5 font-mono-archival tracking-wider uppercase border-b border-border/30 ${
                      isActive
                        ? "text-[#722F37] dark:text-[#C9A86E] font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span>
                      <span className="text-[10px] text-[#B08D57] mr-2">{item.numeral}.</span>
                      {item.label}
                    </span>
                    {isActive && <span className="text-[#B08D57]">❦</span>}
                  </a>
                );
              })}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
