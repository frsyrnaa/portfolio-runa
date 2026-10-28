import pfp from "@/assets/images/pfp.jpeg";
import { ButtonGreeting } from "../button-greeting";
import { ArrowDown, MapPin, BookOpen, Briefcase } from "lucide-react";

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/farsya-runa-52bb74373",
    label: "Professional Profile",
    svg: (
      <svg className="size-4 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/frsyrnaa",
    label: "Code Repositories",
    svg: (
      <svg className="size-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/frsyrna",
    label: "Creative Visuals",
    svg: (
      <svg className="size-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
];

export function Heading() {
  return (
    <section className="relative w-full pt-8 pb-14 sm:pt-14 sm:pb-20 lg:pt-18 lg:pb-24 border-b border-border/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Archival Header Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 sm:mb-12 border-b border-border/50 font-mono-archival text-xs tracking-wider uppercase text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="text-[#B08D57]">❖</span>
            <span>Personal Portfolio &amp; Technical Archive</span>
            <span className="text-[#B08D57]">·</span>
            <span className="text-foreground font-semibold">Vol. 07</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1.5">
              <MapPin className="size-3 text-[#B08D57]" />
              Indonesia (GMT+7)
            </span>
            <span className="hidden sm:inline text-[#B08D57]">·</span>
            <span className="hidden sm:inline text-xs text-[#722F37] dark:text-[#C9A86E] font-medium">
              UNPAM Informatics
            </span>
          </div>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Author Name, Titles, Headline & Introduction */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {/* Classification Badges */}
            <div className="flex flex-wrap items-center gap-2 font-mono-archival text-xs uppercase tracking-wider">
              <span className="px-2.5 py-0.5 rounded-2xs border border-[#B08D57]/40 bg-[#B08D57]/10 text-[#722F37] dark:text-[#C9A86E] font-semibold">
                Semester 7 · UNPAM
              </span>
              <span className="px-2.5 py-0.5 rounded-2xs border border-border bg-card text-muted-foreground">
                Lab Assistant
              </span>
              <span className="px-2.5 py-0.5 rounded-2xs border border-[#722F37]/30 dark:border-[#B08D57]/30 bg-background text-foreground/80">
                Design Intern · Intect
              </span>
            </div>

            {/* Display Heading & Professional Positioning */}
            <div className="space-y-2">
              <h1 className="font-serif-headline text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.08] text-balance">
                Farsya Runa S.
              </h1>
              <p className="font-mono-archival text-xs sm:text-sm tracking-wider uppercase text-[#722F37] dark:text-[#C9A86E] font-medium">
                Full-Stack Developer · Informatics Student · Technology Enthusiast
              </p>
            </div>

            {/* Core Hero Headline */}
            <div className="border-l-2 border-[#722F37] dark:border-[#B08D57] pl-4 sm:pl-5 py-1">
              <h2 className="font-serif-display italic text-2xl sm:text-3xl text-foreground font-normal tracking-wide">
                &ldquo;Building Systems. Exploring Possibilities.&rdquo;
              </h2>
            </div>

            {/* Supporting Professional Intro */}
            <p className="text-base sm:text-lg text-foreground/85 leading-relaxed font-sans max-w-2xl text-pretty">
              An Informatics Engineering student and Laboratory Assistant at Universitas Pamulang exploring the intersection of software development, data, cybersecurity, machine learning, and computer networking, while developing practical experience in graphic design at CV. Intect Teknologi Sejahtera.
            </p>

            {/* Roles & Status Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3 border border-border/70 rounded-xs bg-card/60">
                <div className="font-mono-archival text-[10px] tracking-wider uppercase text-muted-foreground">
                  Academic Focus
                </div>
                <div className="font-serif-headline font-semibold text-sm text-foreground mt-0.5">
                  UNPAM
                </div>
                <div className="text-[11px] text-muted-foreground">S1 Teknik Informatika · Sem. 7</div>
              </div>

              <div className="p-3 border border-border/70 rounded-xs bg-card/60">
                <div className="font-mono-archival text-[10px] tracking-wider uppercase text-muted-foreground">
                  Academic Role
                </div>
                <div className="font-serif-headline font-semibold text-sm text-foreground mt-0.5">
                  Lab Assistant
                </div>
                <div className="text-[11px] text-muted-foreground">Programming Mentorship</div>
              </div>

              <div className="col-span-2 sm:col-span-1 p-3 border border-border/70 rounded-xs bg-card/60">
                <div className="font-mono-archival text-[10px] tracking-wider uppercase text-muted-foreground">
                  Industry Role
                </div>
                <div className="font-serif-headline font-semibold text-sm text-foreground mt-0.5">
                  Design Intern
                </div>
                <div className="text-[11px] text-muted-foreground">CV. Intect (July 2026–Pres.)</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-[#722F37] hover:bg-[#8A3A44] text-[#F3E8D2] border border-[#B08D57]/40 font-mono-archival text-xs uppercase tracking-wider shadow-sm transition-all duration-300 hover:shadow-md hover:scale-102 active:scale-98"
              >
                <BookOpen className="size-3.5 text-[#B08D57]" />
                <span>Explore Projects</span>
              </a>

              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-sm border border-border bg-card/60 hover:bg-card text-foreground font-mono-archival text-xs uppercase tracking-wider transition-colors"
              >
                <Briefcase className="size-3.5 text-[#B08D57]" />
                <span>View Experience</span>
              </a>

              <ButtonGreeting variant="hero" />

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-3 text-xs font-mono-archival uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
              >
                <span>Get in Touch</span>
                <span className="text-[#B08D57]">→</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-2 border-t border-border/40 flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="font-mono-archival text-[11px] tracking-widest uppercase text-muted-foreground">
                Channels:
              </span>
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-xs text-foreground/80 hover:text-[#722F37] dark:hover:text-[#C9A86E] transition-colors font-mono-archival"
                  title={social.label}
                >
                  <span className="text-muted-foreground group-hover:text-current transition-colors">
                    {social.svg}
                  </span>
                  <span>{social.name}</span>
                  <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Framed Archival Portrait */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Antique Corner Accents */}
              <div className="absolute -top-3 -left-3 size-6 border-t-2 border-l-2 border-[#B08D57] pointer-events-none z-10" />
              <div className="absolute -top-3 -right-3 size-6 border-t-2 border-r-2 border-[#B08D57] pointer-events-none z-10" />
              <div className="absolute -bottom-3 -left-3 size-6 border-b-2 border-l-2 border-[#B08D57] pointer-events-none z-10" />
              <div className="absolute -bottom-3 -right-3 size-6 border-b-2 border-r-2 border-[#B08D57] pointer-events-none z-10" />

              {/* Framed Archival Card */}
              <div className="archival-box rounded-xs p-4 sm:p-5 shadow-lg bg-card border-border/90">
                {/* Inner Picture Matting */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-xs border border-border/80 bg-background/50">
                  <img
                    src={pfp}
                    alt="Portrait of Farsya Runa S."
                    className="size-full object-cover grayscale-[15%] contrast-[105%] hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-[#722F37]/5 dark:bg-[#B08D57]/5 mix-blend-multiply pointer-events-none" />

                  {/* Stamp in upper corner */}
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-xs bg-background/90 backdrop-blur-xs border border-[#B08D57]/50 font-mono-archival text-[9px] uppercase tracking-widest text-[#722F37] dark:text-[#C9A86E] shadow-xs">
                    ARCHIVE · 2026
                  </div>
                </div>

                {/* Archival Caption Label Underneath */}
                <div className="pt-4 text-center space-y-1">
                  <div className="font-mono-archival text-[10px] tracking-widest uppercase text-[#B08D57]">
                    PLATE 00 · PROFESSIONAL DOSSIER
                  </div>
                  <div className="font-serif-headline text-base font-semibold text-foreground tracking-tight">
                    Farsya Runa S.
                  </div>
                  <div className="font-serif-display italic text-xs text-muted-foreground">
                    Informatics Student &middot; Lab Assistant &middot; Graphic Designer Intern
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-12 sm:pt-16 flex justify-center">
          <a
            href="#about"
            className="group flex flex-col items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors font-mono-archival text-[11px] tracking-widest uppercase"
          >
            <span className="group-hover:text-[#B08D57] transition-colors">Peruse the Portfolio</span>
            <ArrowDown className="size-3.5 text-[#B08D57] animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
