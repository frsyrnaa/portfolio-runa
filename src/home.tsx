import { Navigation } from "./components/navigation";
import { Heading } from "./components/page/heading";
import { AboutSection } from "./components/page/about-section";
import { EducationSection } from "./components/page/education-section";
import { ExperienceSection } from "./components/page/experience-section";
import { CertificationSection } from "./components/page/certification-section";
import { ProjectSection } from "./components/page/project-section";
import { SkillSection } from "./components/page/skill-section";
import { FeedStory } from "./components/page/feed-story";
import { CallToAction } from "./components/page/call-to-action";
import { Footer } from "./components/footer";
import { BackToTop } from "./components/back-to-top";

export default function Home() {
  return (
    <div className="relative min-h-dvh flex flex-col bg-background text-foreground paper-grain selection:bg-[#722F37] selection:text-[#F3E8D2]">
      {/* Top Editorial Sticky Navigation Bar */}
      <Navigation />

      {/* Main Content Canvas */}
      <main className="flex-1 w-full">
        {/* Editorial Hero Section */}
        <Heading />

        {/* Structured Sections in Portfolio Sequence */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12 sm:space-y-16">
          {/* Section I: About */}
          <AboutSection />

          {/* Section II: Education (UNPAM Only, Semester 7) */}
          <EducationSection />

          {/* Section III: Work Experience (UNPAM Lab Assistant & Intect Graphic Designer Intern) */}
          <ExperienceSection />

          {/* Section IV: Certifications (CCNA SRWE with Genuine Badge & PDF) */}
          <CertificationSection />

          {/* Section V: Selected Projects (Earthquake Prediction & Hand Gesture Detection) */}
          <ProjectSection />

          {/* Section VI: Technical Skills (6 Disciplines) */}
          <SkillSection />

          {/* Section VII: Visual Journal (ASLAB Chronicle) */}
          <FeedStory />

          {/* Section VIII: Call to Action / Dispatch */}
          <CallToAction />
        </div>
      </main>

      {/* Editorial Colophon Footer */}
      <Footer />

      {/* Floating Back to Top Control */}
      <BackToTop />
    </div>
  );
}