import { GraduationCap, Award, Calendar, BookOpen, CheckCircle } from "lucide-react";
import { CardSection } from "../card-section";

const EDUCATION_ENTRY = {
  institution: "Universitas Pamulang (UNPAM)",
  faculty: "Fakultas Ilmu Komputer",
  degree: "S1 Teknik Informatika (Bachelor of Computer Science)",
  period: "2023 – Present",
  academicStatus: "Current Status: Semester 7",
  details: [
    "Program studi S1 Teknik Informatika dengan fokus kurikulum komputasi modern, rekayasa perangkat lunak, sistem basis data, jaringan komputer, dan machine learning.",
    "Aktif berkontribusi sebagai Asisten Laboratorium Komputer, mendampingi kegiatan praktikum pemrograman serta membimbing mahasiswa dalam pemahaman materi teknis.",
    "Mengembangkan proyek studi dan eksplorasi praktis di bidang full-stack development, kecerdasan buatan, computer vision, dan keamanan jaringan.",
  ],
  seal: "SCHOLASTIC CREDENTIAL · HIGHER EDUCATION",
};

export function EducationSection() {
  return (
    <CardSection
      id="education"
      numeral="SECTION II"
      category="SCHOLASTIC CREDENTIAL"
      title="Education"
      subtitle="Formal academic record and university education"
      icon={GraduationCap}
    >
      <div className="archival-box rounded-xs p-6 sm:p-8 bg-card/75 border-border hover:border-[#B08D57] transition-all duration-300">
        {/* Top Ledger Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-3 mb-5">
          <div className="flex items-center gap-2">
            <span className="font-mono-archival text-xs font-bold tracking-widest text-[#722F37] dark:text-[#C9A86E] uppercase">
              REGISTERED ENROLLMENT
            </span>
            <span className="text-[#B08D57]">·</span>
            <span className="font-mono-archival text-[10px] tracking-widest uppercase text-muted-foreground">
              {EDUCATION_ENTRY.seal}
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono-archival text-xs text-[#B08D57]">
            <Calendar className="size-3.5" />
            <span className="font-semibold">{EDUCATION_ENTRY.period}</span>
            <span>·</span>
            <span className="text-[#722F37] dark:text-[#C9A86E] font-medium">Semester 7</span>
          </div>
        </div>

        {/* Institution & Degree */}
        <div className="space-y-2 mb-5">
          <div className="inline-block px-2.5 py-0.5 rounded-2xs bg-[#B08D57]/10 border border-[#B08D57]/40 text-[#722F37] dark:text-[#C9A86E] font-mono-archival text-[10px] tracking-widest uppercase">
            {EDUCATION_ENTRY.faculty}
          </div>
          <h3 className="font-serif-headline text-2xl sm:text-3xl font-bold text-foreground">
            {EDUCATION_ENTRY.institution}
          </h3>
          <p className="font-serif-display italic text-base sm:text-lg text-[#722F37] dark:text-[#C9A86E] font-medium">
            {EDUCATION_ENTRY.degree}
          </p>
        </div>

        {/* Curricular & Practical Details */}
        <div className="space-y-3 pt-2 border-t border-border/40">
          <div className="font-mono-archival text-[11px] tracking-wider uppercase text-muted-foreground flex items-center gap-1.5">
            <BookOpen className="size-3.5 text-[#B08D57]" />
            <span>Academic Focus & Contributions:</span>
          </div>

          <ul className="space-y-2.5 text-xs sm:text-sm text-foreground/85 font-sans pl-1">
            {EDUCATION_ENTRY.details.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-[#B08D57] text-xs shrink-0 mt-0.5">❖</span>
                <span className="leading-relaxed">{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Ledger Metadata */}
        <div className="mt-6 pt-4 border-t border-border/40 flex flex-wrap items-center justify-between gap-3 text-xs font-mono-archival text-muted-foreground">
          <div className="flex items-center gap-1.5 text-foreground/80">
            <Award className="size-3.5 text-[#B08D57]" />
            <span>Standing: {EDUCATION_ENTRY.academicStatus}</span>
          </div>

          <div className="flex items-center gap-1.5 text-[#722F37] dark:text-[#C9A86E]">
            <CheckCircle className="size-3.5" />
            <span>Official University Degree Track</span>
          </div>
        </div>
      </div>
    </CardSection>
  );
}
