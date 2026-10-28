import { Layers, Activity, Hand, Cpu, GitBranch } from "lucide-react";
import { CardSection } from "../card-section";

const PROJECTS = [
  {
    number: "EXHIBIT I",
    plate: "PLATE 01 · MACHINE LEARNING STUDY",
    title: "Earthquake Alert Prediction using Machine Learning",
    category: "Geophysical Predictive Modeling & Algorithm Benchmarking",
    techs: ["Python", "ANN", "SVM", "Random Forest"],
    summary:
      "Penelitian dan pengembangan model prediksi peringatan gempa berbasis algoritma pembelajaran mesin untuk menganalisis data seismik dan membandingkan performa multi-model.",
    bullets: [
      "Mengembangkan model prediksi peringatan gempa menggunakan beberapa algoritma machine learning.",
      "Melakukan preprocessing data, training model, serta evaluasi performa model secara komprehensif.",
      "Membandingkan performa Artificial Neural Network (ANN), Support Vector Machine (SVM), dan Random Forest untuk akurasi klasifikasi terbaik.",
    ],
    type: "seismic",
  },
  {
    number: "EXHIBIT II",
    plate: "PLATE 02 · COMPUTER VISION IMPLEMENTATION",
    title: "Hand Gesture Detection using OpenCV",
    category: "Real-time Vision Processing & Gesture Landmark Tracking",
    techs: ["Python", "OpenCV"],
    summary:
      "Eksplorasi sistem computer vision real-time untuk mendeteksi kontur, artikulasi, dan pola gerakan tangan manusia serta memvisualisasikannya dalam representasi grafis.",
    bullets: [
      "Mengembangkan sistem deteksi tangan interaktif menggunakan teknik computer vision.",
      "Mengimplementasikan pustaka OpenCV untuk mendeteksi gesture tangan dan memvisualisasikannya secara presisi dalam bentuk citra.",
    ],
    type: "vision",
  },
];

export function ProjectSection() {
  return (
    <CardSection
      id="projects"
      numeral="SECTION V"
      category="ARCHIVED STUDIES & IMPLEMENTATIONS"
      title="Selected Projects"
      subtitle="Exhibition of machine learning investigations and computer vision experiments"
      icon={Layers}
    >
      <div className="space-y-10 sm:space-y-12">
        {PROJECTS.map((project, idx) => (
          <article
            key={project.title}
            className="group archival-box rounded-xs p-6 sm:p-8 hover:border-[#B08D57] transition-all duration-300"
          >
            {/* Top Plate Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-5 border-b border-border/60">
              <div className="flex items-center gap-2">
                <span className="font-mono-archival text-xs font-bold tracking-widest text-[#722F37] dark:text-[#C9A86E] uppercase">
                  {project.number}
                </span>
                <span className="text-[#B08D57]">·</span>
                <span className="font-mono-archival text-[10px] tracking-widest uppercase text-muted-foreground">
                  {project.plate}
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono-archival text-[#B08D57]">
                <span>Folio Ref. #{idx + 101}</span>
              </div>
            </div>

            {/* Asymmetrical Project Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              {/* Left Column: Description & Bullet Details */}
              <div className="lg:col-span-7 space-y-4">
                <div className="space-y-1.5">
                  <h3 className="font-serif-headline text-2xl sm:text-3xl font-bold tracking-tight text-foreground group-hover:text-[#722F37] dark:group-hover:text-[#C9A86E] transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-serif-display italic text-sm text-[#722F37] dark:text-[#C9A86E]">
                    {project.category}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-foreground/80 leading-relaxed font-sans text-pretty">
                  {project.summary}
                </p>

                {/* Bullet Points with Antique Diamond Markers */}
                <div className="pt-2">
                  <div className="font-mono-archival text-[11px] uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                    <GitBranch className="size-3 text-[#B08D57]" />
                    <span>Key Methodologies & Scope:</span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-foreground/80 font-sans pl-1">
                    {project.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <span className="text-[#B08D57] text-xs shrink-0 mt-0.5">❖</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Pills */}
                <div className="pt-3 flex flex-wrap items-center gap-2">
                  <span className="font-mono-archival text-[10px] tracking-wider uppercase text-muted-foreground mr-1">
                    Stack:
                  </span>
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-2xs border border-border/80 bg-background/80 font-mono-archival text-xs text-foreground/90 group-hover:border-[#B08D57]/60 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Visual Archival Schematic Illustration */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-xs border border-border/80 bg-background/70 p-4 flex flex-col justify-between overflow-hidden shadow-2xs">
                  {/* Schematic Header */}
                  <div className="flex items-center justify-between text-[10px] font-mono-archival text-muted-foreground uppercase border-b border-border/40 pb-2">
                    <span className="flex items-center gap-1 text-[#B08D57]">
                      {project.type === "seismic" ? <Activity className="size-3" /> : <Hand className="size-3" />}
                      {project.type === "seismic" ? "FIG. 1.1 · SEISMIC OSCILLOGRAM" : "FIG. 2.1 · LANDMARK MESH"}
                    </span>
                    <span>TECHNICAL SCHEMATIC</span>
                  </div>

                  {/* SVG Illustration Artwork */}
                  <div className="my-auto py-2 flex items-center justify-center">
                    {project.type === "seismic" ? (
                      <svg viewBox="0 0 320 120" className="w-full h-auto text-[#722F37] dark:text-[#C9A86E]">
                        {/* Grid lines */}
                        <line x1="0" y1="20" x2="320" y2="20" stroke="currentColor" strokeOpacity="0.1" strokeDasharray="2 2" />
                        <line x1="0" y1="60" x2="320" y2="60" stroke="currentColor" strokeOpacity="0.2" />
                        <line x1="0" y1="100" x2="320" y2="100" stroke="currentColor" strokeOpacity="0.1" strokeDasharray="2 2" />
                        <line x1="80" y1="0" x2="80" y2="120" stroke="currentColor" strokeOpacity="0.1" strokeDasharray="2 2" />
                        <line x1="160" y1="0" x2="160" y2="120" stroke="currentColor" strokeOpacity="0.1" strokeDasharray="2 2" />
                        <line x1="240" y1="0" x2="240" y2="120" stroke="currentColor" strokeOpacity="0.1" strokeDasharray="2 2" />
                        {/* Primary waveform */}
                        <path
                          d="M 10,60 L 50,60 L 65,55 L 75,65 L 90,60 L 110,60 L 125,40 L 135,80 L 145,25 L 155,95 L 165,15 L 175,105 L 185,35 L 195,85 L 205,50 L 215,70 L 230,60 L 310,60"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        {/* Secondary comparison line */}
                        <path
                          d="M 10,60 L 110,60 L 130,48 L 145,72 L 160,35 L 175,85 L 190,45 L 205,68 L 220,60 L 310,60"
                          fill="none"
                          stroke="#B08D57"
                          strokeWidth="1.2"
                          strokeDasharray="4 2"
                        />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 280 140" className="w-full h-auto text-[#722F37] dark:text-[#C9A86E]">
                        {/* Hand skeletal landmark graph */}
                        <circle cx="140" cy="120" r="4" fill="currentColor" />
                        <line x1="140" y1="120" x2="90" y2="85" stroke="currentColor" strokeWidth="1.5" />
                        <line x1="140" y1="120" x2="120" y2="70" stroke="currentColor" strokeWidth="1.5" />
                        <line x1="140" y1="120" x2="145" y2="65" stroke="currentColor" strokeWidth="1.5" />
                        <line x1="140" y1="120" x2="170" y2="70" stroke="currentColor" strokeWidth="1.5" />
                        <line x1="140" y1="120" x2="195" y2="85" stroke="currentColor" strokeWidth="1.5" />

                        {/* Thumb */}
                        <circle cx="90" cy="85" r="3.5" fill="#B08D57" />
                        <line x1="90" y1="85" x2="70" y2="65" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="70" cy="65" r="3" fill="#B08D57" />

                        {/* Index */}
                        <circle cx="120" cy="70" r="3.5" fill="#B08D57" />
                        <line x1="120" y1="70" x2="115" y2="35" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="115" cy="35" r="3" fill="#B08D57" />
                        <line x1="115" y1="35" x2="112" y2="15" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="112" cy="15" r="3.5" fill="currentColor" />

                        {/* Middle */}
                        <circle cx="145" cy="65" r="3.5" fill="#B08D57" />
                        <line x1="145" y1="65" x2="145" y2="30" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="145" cy="30" r="3" fill="#B08D57" />
                        <line x1="145" y1="30" x2="145" y2="10" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="145" cy="10" r="3.5" fill="currentColor" />

                        {/* Ring */}
                        <circle cx="170" cy="70" r="3.5" fill="#B08D57" />
                        <line x1="170" y1="70" x2="172" y2="38" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="172" cy="38" r="3" fill="#B08D57" />
                        <line x1="172" y1="38" x2="174" y2="20" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="174" cy="20" r="3.5" fill="currentColor" />

                        {/* Pinky */}
                        <circle cx="195" cy="85" r="3.5" fill="#B08D57" />
                        <line x1="195" y1="85" x2="202" y2="55" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="202" cy="55" r="3" fill="#B08D57" />
                        <line x1="202" y1="55" x2="206" y2="40" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="206" cy="40" r="3.5" fill="currentColor" />
                      </svg>
                    )}
                  </div>

                  {/* Schematic Footer */}
                  <div className="flex items-center justify-between text-[10px] font-mono-archival text-muted-foreground border-t border-border/40 pt-2">
                    <span className="flex items-center gap-1">
                      <Cpu className="size-3 text-[#B08D57]" />
                      {project.type === "seismic" ? "ANN · SVM · Random Forest" : "OpenCV Coordinate Tracking"}
                    </span>
                    <span className="text-[#B08D57]">LAB·VERIFIED</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </CardSection>
  );
}
