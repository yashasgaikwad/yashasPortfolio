import { MotionConfig } from "framer-motion";
import { AboutSection } from "./components/AboutSection";
import { AchievementsSection } from "./components/AchievementsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { ParticleBackground } from "./components/ParticleBackground";
import { ProjectsSection } from "./components/ProjectsSection";
import { ResumeSection } from "./components/ResumeSection";
import { ServicesSection } from "./components/ServicesSection";
import { SkillsSection } from "./components/SkillsSection";

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-[#030712] text-slate-100">
        {/*
          Originkit MCP slot:
          Once the originkit MCP server is connected and `originkit: get cursor-ring-field`
          is executed, import and mount <CursorRingField /> here.
        */}

        <ParticleBackground />
        <Navbar />

        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ServicesSection />
          <AchievementsSection />
          <ResumeSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;

