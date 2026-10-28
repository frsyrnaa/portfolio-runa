import { Award, ExternalLink, ShieldCheck, CheckCircle2, Calendar, FileText } from "lucide-react";
import { CardSection } from "../card-section";

const CERTIFICATE_DATA = {
  title: "CCNA: Switching, Routing, and Wireless Essentials (SRWE)",
  issuer: "Cisco Networking Academy",
  issueDate: "Sep 25, 2026",
  credentialLevel: "Student Level Credential",
  director: "Lynn Bloomer, Director, Cisco Networking Academy",
  pdfPath: "/assets/certifications/ccna-srwe-certificate.pdf",
  badgePath: "/assets/certifications/ccna-srwe-badge.jpg",
  proficiencies: [
    "Configure VLANs and Inter-VLAN routing applying security best practices.",
    "Troubleshoot inter-VLAN routing on Layer 3 devices.",
    "Configure redundancy on a switched network using STP and EtherChannel.",
    "Explain how to support available and reliable networks using dynamic addressing and first-hop redundancy protocols.",
    "Configure dynamic address allocation in IPv6 networks.",
    "Configure WLANs using a WLC and L2 security best practices.",
    "Configure switch security to mitigate LAN attacks.",
    "Configure IPv4 and IPv6 static routing on routers.",
  ],
};

export function CertificationSection() {
  return (
    <CardSection
      id="certifications"
      numeral="SECTION IV"
      category="AUTHENTIC CREDENTIALS & CERTIFICATION"
      title="Certifications & Credentials"
      subtitle="Verified professional certification in networking infrastructure, routing, switching, and security"
      icon={ShieldCheck}
    >
      <div className="archival-box rounded-xs p-6 sm:p-8 bg-card/75 border-border hover:border-[#B08D57] transition-all duration-300">
        {/* Certificate Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Badge Artwork as Clickable Anchor */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center space-y-4">
            <div className="relative group/badge">
              {/* Antique Corner Mounts around Badge */}
              <div className="absolute -top-2 -left-2 size-4 border-t-2 border-l-2 border-[#B08D57] pointer-events-none" />
              <div className="absolute -top-2 -right-2 size-4 border-t-2 border-r-2 border-[#B08D57] pointer-events-none" />
              <div className="absolute -bottom-2 -left-2 size-4 border-b-2 border-l-2 border-[#B08D57] pointer-events-none" />
              <div className="absolute -bottom-2 -right-2 size-4 border-b-2 border-r-2 border-[#B08D57] pointer-events-none" />

              {/* CRITICAL INTERACTION: Clicking Badge Opens PDF in New Tab */}
              <a
                href={CERTIFICATE_DATA.pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                title="View CCNA SRWE certificate PDF in new tab"
                aria-label="View CCNA SRWE certificate PDF"
                className="block relative p-3 rounded-xs border-2 border-[#B08D57]/70 bg-background/90 hover:border-[#722F37] dark:hover:border-[#C9A86E] shadow-md transition-all duration-300 hover:scale-103 active:scale-98 cursor-pointer overflow-hidden"
              >
                <img
                  src={CERTIFICATE_DATA.badgePath}
                  alt="View CCNA SRWE certificate PDF"
                  className="size-36 sm:size-44 object-contain rounded-2xs"
                  loading="lazy"
                />
                
                {/* Hover Overlay with Inspect Cue */}
                <div className="absolute inset-0 bg-[#722F37]/80 dark:bg-[#190C10]/85 backdrop-blur-2xs opacity-0 group-hover/badge:opacity-100 flex flex-col items-center justify-center text-[#F3E8D2] transition-opacity duration-200 text-center p-2">
                  <ExternalLink className="size-6 text-[#B08D57] mb-1" />
                  <span className="font-mono-archival text-[10px] uppercase tracking-wider font-semibold">
                    Inspect PDF Certificate
                  </span>
                  <span className="text-[9px] opacity-75">Opens in new tab</span>
                </div>
              </a>
            </div>

            <div className="text-center space-y-1">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-2xs bg-[#B08D57]/10 border border-[#B08D57]/40 font-mono-archival text-[10px] uppercase tracking-wider text-[#722F37] dark:text-[#C9A86E]">
                <ShieldCheck className="size-3" />
                <span>Verified by Cisco Academy</span>
              </span>
              <p className="font-mono-archival text-[10px] text-muted-foreground">
                Click badge to peruse genuine document
              </p>
            </div>
          </div>

          {/* Right Column: Credential Details, Proficiencies, and Action */}
          <div className="lg:col-span-8 space-y-5">
            {/* Header info */}
            <div className="space-y-2 border-b border-border/60 pb-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono-archival text-[10px] tracking-widest uppercase text-[#B08D57]">
                  CREDENTIAL № CCNA-SRWE-2026
                </span>
                <div className="flex items-center gap-1.5 font-mono-archival text-xs text-[#B08D57]">
                  <Calendar className="size-3.5" />
                  <span>Issued: {CERTIFICATE_DATA.issueDate}</span>
                </div>
              </div>

              <h3 className="font-serif-headline text-2xl sm:text-3xl font-bold text-foreground">
                {CERTIFICATE_DATA.title}
              </h3>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[#722F37] dark:text-[#C9A86E] font-serif-display italic">
                <span className="font-semibold text-foreground not-italic">{CERTIFICATE_DATA.issuer}</span>
                <span>&bull;</span>
                <span>{CERTIFICATE_DATA.credentialLevel}</span>
                <span>&bull;</span>
                <span className="text-xs text-muted-foreground">{CERTIFICATE_DATA.director}</span>
              </div>
            </div>

            {/* Documented Capabilities from Certificate */}
            <div className="space-y-3">
              <div className="font-mono-archival text-[11px] tracking-wider uppercase text-muted-foreground flex items-center gap-1.5">
                <Award className="size-3.5 text-[#B08D57]" />
                <span>Proficiencies Verified upon Completion:</span>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-foreground/85 font-sans">
                {CERTIFICATE_DATA.proficiencies.map((prof, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="size-3 text-[#B08D57] shrink-0 mt-0.5" />
                    <span className="leading-snug">{prof}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Action Button to View PDF */}
            <div className="pt-4 border-t border-border/40 flex flex-wrap items-center gap-3">
              <a
                href={CERTIFICATE_DATA.pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#722F37] hover:bg-[#8A3A44] text-[#F3E8D2] border border-[#B08D57]/40 font-mono-archival text-xs uppercase tracking-wider transition-all duration-300 hover:shadow-xs active:scale-98"
                aria-label="View CCNA SRWE certificate PDF"
              >
                <FileText className="size-3.5 text-[#B08D57]" />
                <span>View Certificate PDF</span>
                <ExternalLink className="size-3 ml-0.5" />
              </a>

              <span className="font-mono-archival text-[10px] text-muted-foreground">
                Path: {CERTIFICATE_DATA.pdfPath}
              </span>
            </div>
          </div>
        </div>
      </div>
    </CardSection>
  );
}
