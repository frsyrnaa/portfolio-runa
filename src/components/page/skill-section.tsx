import { Sparkles, Code2, Database, Brain, Shield, Network, Palette, CheckCircle2 } from "lucide-react";
import { CardSection } from "../card-section";

const SKILL_CATEGORIES = [
  {
    title: "Full-Stack & Web Development",
    subtitle: "Core syntax, client-server architectures & APIs",
    icon: Code2,
    badge: "CANON · SOFTWARE",
    skills: ["Python", "JavaScript", "HTML5", "CSS3", "C++", "Java", "Responsive Web Design", "REST APIs"],
    description: "Fondasi pemrograman berorientasi objek, perancangan web responsif, integrasi antarmuka, dan logika komputasi perangkat lunak.",
  },
  {
    title: "Data Analytics & Database Systems",
    subtitle: "Data querying, structured storage & preprocessing",
    icon: Database,
    badge: "SYSTEMS · DATA",
    skills: ["SQL", "Relational Databases", "Data Preprocessing", "Data Normalization", "Dataset Preparation"],
    description: "Pengolahan dataset terstruktur, manipulasi data untuk kebutuhan analitik, serta manajemen basis data dalam proyek komputasi.",
  },
  {
    title: "Machine Learning & Computer Vision",
    subtitle: "Predictive algorithms & real-time visual tracking",
    icon: Brain,
    badge: "INTELLIGENCE · CV",
    skills: ["Python", "Artificial Neural Networks (ANN)", "Support Vector Machine (SVM)", "Random Forest", "OpenCV", "Model Evaluation"],
    description: "Implementasi algoritma supervised learning, komparasi multi-model klasifikasi, serta deteksi gesture tangan berbasis computer vision.",
  },
  {
    title: "Cybersecurity & Security Practices",
    subtitle: "Vulnerability analysis & network attack mitigation",
    icon: Shield,
    badge: "DEFENSE · SECURITY",
    skills: ["Web Security Principles", "SQL Injection Testing", "Cross-Site Scripting (XSS)", "Burp Suite", "Switch Security", "LAN Attack Mitigation"],
    description: "Pemahaman pengujian kerentanan web, analisis celah keamanan injeksi, serta penerapan praktik mitigasi serangan lapisan jaringan.",
  },
  {
    title: "Computer Networking",
    subtitle: "Enterprise switching, routing & wireless topologies",
    icon: Network,
    badge: "INFRASTRUCTURE · CCNA",
    skills: ["VLANs & Inter-VLAN Routing", "STP & EtherChannel", "IPv4 & IPv6 Static Routing", "WLAN & WLC", "CCNA SRWE Credential"],
    description: "Konfigurasi perangkat switch dan router Layer 2/3, redundansi jaringan, keamanan port switch, dan topologi nirkabel terverifikasi.",
  },
  {
    title: "Graphic Design, UI/UX & Collaboration",
    subtitle: "Interface prototyping, visual communication & teamwork",
    icon: Palette,
    badge: "CREATIVE · PRAXIS",
    skills: ["Figma", "UI/UX Design", "Social Media Design", "Visual Studio Code", "Jupyter Notebook", "Google Colab", "Academic Collaboration", "Problem Solving"],
    description: "Perancangan antarmuka digital yang intuitif, produksi aset komunikasi grafis merek, serta kolaborasi laboratorium akademik.",
  },
];

export function SkillSection() {
  return (
    <CardSection
      id="skills"
      numeral="SECTION VI"
      category="DISCIPLINARY REPERTOIRE & COMPETENCIES"
      title="Technical Skills"
      subtitle="Comprehensive categorization across software engineering, data, machine learning, cybersecurity, networking, and design"
      icon={Sparkles}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {SKILL_CATEGORIES.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.title}
              className="group archival-box rounded-xs p-5 sm:p-6 space-y-4 hover:border-[#B08D57] transition-all duration-300 flex flex-col justify-between bg-card/70"
            >
              {/* Category Header */}
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-border/50 pb-2">
                  <span className="font-mono-archival text-[10px] tracking-widest uppercase text-[#B08D57]">
                    {category.badge}
                  </span>
                  <Icon className="size-4 text-[#722F37] dark:text-[#C9A86E] group-hover:scale-110 transition-transform" />
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif-headline text-lg sm:text-xl font-bold text-foreground">
                    {category.title}
                  </h3>
                  <p className="font-serif-display italic text-xs text-muted-foreground">
                    {category.subtitle}
                  </p>
                </div>

                {/* Skill Tags */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-2xs border border-border bg-background/80 font-mono-archival text-[11px] text-foreground group-hover:border-[#B08D57]/50 transition-colors shadow-2xs"
                    >
                      <CheckCircle2 className="size-3 text-[#B08D57] shrink-0" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Category Note / Footer */}
              <div className="pt-3 border-t border-border/40 text-xs text-muted-foreground font-sans leading-relaxed">
                {category.description}
              </div>
            </div>
          );
        })}
      </div>
    </CardSection>
  );
}
