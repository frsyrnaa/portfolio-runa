import { Briefcase, Calendar, Building2, CheckCircle2 } from "lucide-react";
import { CardSection } from "../card-section";

const EXPERIENCES = [
  {
    role: "Graphic Designer Intern",
    organization: "CV. Intect Teknologi Sejahtera",
    period: "July 2026 – Present",
    badge: "CURRENT INTERNSHIP · VISUAL COMMUNICATION",
    badgeColor: "bg-[#722F37]/15 text-[#722F37] dark:text-[#C9A86E] border-[#722F37]/30 dark:border-[#B08D57]/40",
    summary:
      "Magang profesional berfokus pada perancangan grafis, komunikasi visual, serta pengembangan aset promosi dan materi merek perusahaan.",
    contributions: [
      "Merancang materi visual kreatif, grafis media sosial, dan materi identitas visual untuk kebutuhan komunikasi dan promosi digital perusahaan.",
      "Menerapkan prinsip tata letak (layout), hierarki visual, tipografi, dan konsistensi warna sesuai pedoman identitas merek.",
      "Berkolaborasi dengan tim kreatif dan teknologi dalam memproduksi visual yang komunikatif, menarik, dan selaras dengan tujuan bisnis.",
    ],
    skills: ["Graphic Design", "Visual Communication", "Layout & Typography", "Brand Presentation", "Creative Collaboration"],
  },
  {
    role: "Laboratory Assistant",
    organization: "Universitas Pamulang (UNPAM)",
    period: "Active Academic Appointment",
    badge: "PRACTICUM LEADERSHIP · TECHNICAL MENTORSHIP",
    badgeColor: "bg-[#B08D57]/15 text-[#722F37] dark:text-[#C9A86E] border-[#B08D57]/40",
    summary:
      "Peran kepemimpinan akademik dalam mendampingi kegiatan praktikum pemrograman, membimbing mahasiswa, dan mendukung operasional laboratorium komputer.",
    contributions: [
      "Mendampingi serta mengarahkan mahasiswa praktikum pemrograman dalam memahami materi teknis, algoritma dasar, struktur data, dan implementasi kode.",
      "Membimbing mahasiswa dalam proses pemecahan masalah (problem solving) serta debugging kode program selama sesi praktikum di laboratorium.",
      "Bekerja sama dengan dosen pengampu dan sesama asisten laboratorium dalam mempersiapkan modul teknis, evaluasi tugas, dan koordinasi praktikum.",
      "Menumbuhkan kemampuan komunikasi teknis, kepemimpinan praktikum, manajemen kelas laboratorium, dan kerja sama tim yang solid.",
    ],
    skills: ["Programming Mentorship", "Technical Guidance", "Laboratory Operations", "Code Debugging", "Academic Teamwork"],
  },
];

export function ExperienceSection() {
  return (
    <CardSection
      id="experience"
      numeral="SECTION III"
      category="PROFESSIONAL RECORD & APPOINTMENTS"
      title="Work Experience"
      subtitle="Documented professional appointments across technical mentorship and graphic design"
      icon={Briefcase}
    >
      <div className="space-y-8 sm:space-y-10">
        {EXPERIENCES.map((exp, idx) => (
          <article
            key={exp.role}
            className="group archival-box rounded-xs p-6 sm:p-8 bg-card/75 border-border hover:border-[#B08D57] transition-all duration-300"
          >
            {/* Header Strip */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-3 mb-5">
              <div className="flex items-center gap-2">
                <span className="font-mono-archival text-xs font-bold tracking-widest text-[#722F37] dark:text-[#C9A86E] uppercase">
                  RECORD 0{idx + 1}
                </span>
                <span className="text-[#B08D57]">·</span>
                <span className={`inline-block px-2.5 py-0.5 rounded-2xs border font-mono-archival text-[10px] tracking-wider uppercase ${exp.badgeColor}`}>
                  {exp.badge}
                </span>
              </div>

              <div className="flex items-center gap-2 font-mono-archival text-xs text-[#B08D57]">
                <Calendar className="size-3.5" />
                <span className="font-semibold">{exp.period}</span>
              </div>
            </div>

            {/* Role Title & Organization */}
            <div className="space-y-2 mb-4">
              <h3 className="font-serif-headline text-2xl sm:text-3xl font-bold text-foreground group-hover:text-[#722F37] dark:group-hover:text-[#C9A86E] transition-colors">
                {exp.role}
              </h3>
              <div className="flex items-center gap-2 text-base text-foreground/90 font-serif-display italic">
                <Building2 className="size-4 text-[#B08D57] shrink-0" />
                <span>{exp.organization}</span>
              </div>
              <p className="text-sm text-foreground/80 font-sans leading-relaxed pt-1">
                {exp.summary}
              </p>
            </div>

            {/* Responsibilities & Impact */}
            <div className="space-y-3 pt-3 border-t border-border/40">
              <div className="font-mono-archival text-[11px] tracking-wider uppercase text-muted-foreground">
                Documented Scope & Responsibilities:
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-foreground/85 font-sans pl-1">
                {exp.contributions.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-[#B08D57] text-xs shrink-0 mt-0.5">❖</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Competency Tags */}
            <div className="mt-5 pt-3 border-t border-border/40 flex flex-wrap items-center gap-2">
              <span className="font-mono-archival text-[10px] tracking-wider uppercase text-muted-foreground mr-1">
                Core Domains:
              </span>
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-2xs border border-border bg-background/80 font-mono-archival text-xs text-foreground group-hover:border-[#B08D57]/50 transition-colors"
                >
                  <CheckCircle2 className="size-3 text-[#B08D57]" />
                  <span>{skill}</span>
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </CardSection>
  );
}
