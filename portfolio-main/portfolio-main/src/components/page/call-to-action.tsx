import { Mail, Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function CallToAction() {
  const linkedInUrl = "https://www.linkedin.com/in/farsya-runa-52bb74373";
  const emailAddress = "farsyaruna998@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      toast.success("Email address copied to clipboard!", {
        description: emailAddress,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.info(`Email address: ${emailAddress}`);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 w-full py-8">
      {/* Editorial Colophon Panel — Deep Red Wine & Antique Gold */}
      <div className="relative rounded-sm border-2 border-[#B08D57]/70 bg-gradient-to-br from-[#451D27] via-[#722F37] to-[#35151D] text-[#F3E8D2] p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden">
        {/* Subtle Ornamental Corner Brackets */}
        <div className="absolute top-3 left-3 size-6 border-t-2 border-l-2 border-[#B08D57]/60 pointer-events-none" />
        <div className="absolute top-3 right-3 size-6 border-t-2 border-r-2 border-[#B08D57]/60 pointer-events-none" />
        <div className="absolute bottom-3 left-3 size-6 border-b-2 border-l-2 border-[#B08D57]/60 pointer-events-none" />
        <div className="absolute bottom-3 right-3 size-6 border-b-2 border-r-2 border-[#B08D57]/60 pointer-events-none" />

        {/* Inner Archival Frame */}
        <div className="relative max-w-3xl mx-auto text-center space-y-6">
          {/* Header Flourish */}
          <div className="inline-flex items-center gap-2 font-mono-archival text-xs tracking-widest text-[#B08D57] uppercase">
            <span>❖ SECTION VIII</span>
            <span>·</span>
            <span>DISPATCH & CORRESPONDENCE</span>
            <span>❖</span>
          </div>

          {/* Headline */}
          <h2 className="font-serif-headline text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F3E8D2] text-balance">
            Let&apos;s Create Something Meaningful.
          </h2>

          {/* Editorial Subtitle */}
          <p className="font-serif-display italic text-lg sm:text-xl text-[#F3E8D2]/90 max-w-xl mx-auto leading-relaxed">
            Open for collaborations in machine learning research, human-centered UI/UX design, and innovative software engineering.
          </p>

          <p className="font-sans text-xs sm:text-sm text-[#F3E8D2]/75 max-w-lg mx-auto leading-relaxed">
            Whether inquiring about academic projects, prospective partnerships, or simply sharing thoughts on technology and design &mdash; my correspondence channels are open.
          </p>

          {/* Functional Contact Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            {/* LinkedIn Button */}
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-sm bg-[#F3E8D2] text-[#451D27] hover:bg-[#E8D7B8] font-mono-archival text-xs font-semibold uppercase tracking-wider shadow-md transition-all duration-300 hover:scale-102 active:scale-98"
            >
              <svg className="size-4 fill-[#451D27]" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>Connect on LinkedIn</span>
            </a>

            {/* Email Direct Mailto Button */}
            <a
              href={`mailto:${emailAddress}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-sm border border-[#B08D57] bg-black/25 hover:bg-black/40 text-[#F3E8D2] font-mono-archival text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-102 active:scale-98"
            >
              <Mail className="size-4 text-[#B08D57]" />
              <span>Send Dispatch / Email</span>
            </a>

            {/* Copy Address Button */}
            <button
              type="button"
              onClick={handleCopyEmail}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-sm border border-white/20 hover:border-[#B08D57] bg-white/5 hover:bg-white/10 text-xs font-mono-archival text-[#F3E8D2] tracking-wider uppercase transition-colors cursor-pointer"
              title="Copy email address"
            >
              {copied ? <Check className="size-3.5 text-green-300" /> : <Copy className="size-3.5 text-[#B08D57]" />}
              <span>{copied ? "Copied" : "Copy Address"}</span>
            </button>
          </div>

          {/* Understated Dispatch Note */}
          <div className="pt-4 font-mono-archival text-[11px] text-[#B08D57] tracking-wider uppercase">
            <span>Direct Channel: farsyaruna998@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}
