// 1. Import Components
import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { Skills } from "@/app/components/Skills";
import { Projects } from "@/app/components/Projects";
import { Growth } from "@/app/components/Growth";
import { Closing } from "@/app/components/Closing";

// 2. Import Content Data
import { CONTENT } from "@/app/data/content";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* 3. Pass Data to Components */}
      <Hero data={CONTENT.hero} />

      <About data={CONTENT.about} />

      <Skills data={CONTENT.skills} />

      <Projects data={CONTENT.projects} />

      <Growth data={CONTENT.growth} />

      <Closing data={CONTENT.closing} />

    </div>
  );
}
