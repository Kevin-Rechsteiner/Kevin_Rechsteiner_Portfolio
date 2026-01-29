import { Navigation } from "@/app/components/Navigation";
import { HeroSection } from "@/app/components/HeroSection";
import { AboutSection } from "@/app/components/AboutSection";
import { SkillsSection } from "@/app/components/SkillsSection";
import { ProjectsSection } from "@/app/components/ProjectsSection";
import { GrowthSection } from "@/app/components/GrowthSection";
import { ClosingSection } from "@/app/components/ClosingSection";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <GrowthSection />
      <ClosingSection />
    </div>
  );
}
