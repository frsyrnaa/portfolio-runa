import { CardSection } from "../card-section";
import { User, Compass, Terminal, Palette, BookOpen, Network } from "lucide-react";

export function AboutSection() {
  return (
    <CardSection
      id="about"
      numeral="SECTION I"
      category="CURRICULUM VITAE & BACKGROUND"
      title="Tentang Saya"
      subtitle="A personal narrative of academic pursuits, practical laboratory mentorship, and cross-disciplinary curiosity"
      icon={User}
    >
      <div className="space-y-8">
        {/* Editorial Pull-Quote / Proclamation */}
        <div className="relative p-6 sm:p-8 border-l-2 border-[#722F37] dark:border-[#B08D57] bg-accent/20 rounded-xs">
          <p className="font-serif-display italic text-lg sm:text-xl text-foreground/90 leading-relaxed">
            &ldquo;Membangun sistem yang tangguh dan mengeksplorasi ragam kemungkinan teknologi &mdash; mempertemukan logika rekayasa perangkat lunak, analitik data, keamanan, dan jaringan komputer dengan kepekaan desain visual yang terarah.&rdquo;
          </p>
          <div className="mt-3 font-mono-archival text-xs text-[#B08D57] uppercase tracking-widest flex items-center gap-2">
            <span>&mdash; Farsya Runa S.</span>
            <span>·</span>
            <span>UNPAM Informatics</span>
          </div>
        </div>

        {/* Narrative & Practical Background */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-5 text-base sm:text-lg text-foreground/85 leading-relaxed font-sans">
            <p className="first-letter:text-5xl first-letter:font-serif-headline first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-[#722F37] dark:first-letter:text-[#C9A86E] first-letter:leading-none text-pretty">
              Saya adalah mahasiswa semester 7 Teknik Informatika di Universitas Pamulang (UNPAM) dengan ketertarikan mendalam pada pengembangan perangkat lunak, arsitektur backend, analitik data, machine learning, computer vision, cybersecurity, dan jaringan komputer.
            </p>

            <p className="text-pretty">
              Sebagai Asisten Laboratorium di Universitas Pamulang, saya aktif mendampingi jalannya kegiatan praktikum pemrograman serta membimbing rekan-rekan mahasiswa dalam memahami logika komputasi, algoritma dasar, debugging kode, dan struktur data. Pengalaman ini membentuk kemampuan komunikasi teknis, kepemimpinan praktikum, dan pemecahan masalah secara kolaboratif.
            </p>

            <p className="text-pretty">
              Di samping kegiatan akademik, sejak Juli 2026 saya berkontribusi sebagai Graphic Designer Intern di CV. Intect Teknologi Sejahtera. Melalui peran ini, saya mengasah kemampuan komunikasi visual, konsistensi merek, dan tata letak desain, menghubungkan pemikiran analitis rekayasa dengan eksekusi visual yang estetis dan fungsional.
            </p>
          </div>

          {/* Archival Dossier / Profile Highlights Sidebar */}
          <div className="lg:col-span-4 space-y-3 font-mono-archival text-xs">
            <div className="p-4 border border-border/80 rounded-xs bg-background/50 space-y-3">
              <div className="text-[10px] tracking-widest uppercase text-[#B08D57] border-b border-border/60 pb-1.5 flex items-center justify-between">
                <span>Dossier Overview</span>
                <span>№ 07-UNPAM</span>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-start gap-2">
                  <Compass className="size-3.5 text-[#B08D57] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-muted-foreground block text-[10px] uppercase">Pendidikan & Status</span>
                    <span className="text-foreground font-semibold">Semester 7 · UNPAM</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Terminal className="size-3.5 text-[#B08D57] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-muted-foreground block text-[10px] uppercase">Peran Laboratorium</span>
                    <span className="text-foreground">Asisten Lab Komputer UNPAM</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Palette className="size-3.5 text-[#B08D57] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-muted-foreground block text-[10px] uppercase">Peran Industri</span>
                    <span className="text-foreground">Design Intern (CV. Intect, Jul 2026–Pres.)</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Network className="size-3.5 text-[#B08D57] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-muted-foreground block text-[10px] uppercase">Kredensial Jaringan</span>
                    <span className="text-foreground">Cisco CCNA: SRWE Verified</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <BookOpen className="size-3.5 text-[#B08D57] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-muted-foreground block text-[10px] uppercase">Fokus Minat</span>
                    <span className="text-foreground">Full-Stack, Data, Security, ML &amp; UI/UX</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CardSection>
  );
}
