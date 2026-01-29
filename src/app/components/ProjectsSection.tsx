import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Web-Portfolio",
      description: "Entwicklung eines responsiven Portfolios mit modernem Design und interaktiven Elementen. Fokus auf UX und Performance.",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1604781109199-ced99b89b0f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2ODQ3OTUzN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      highlight: "Eigeninitiative",
    },
    {
      title: "Teamwork-App",
      description: "Hackathon-Projekt: Kollaborative Aufgabenverwaltung mit Echtzeit-Updates. Entwickelt im Team unter Zeitdruck.",
      tags: ["JavaScript", "Firebase", "CSS"],
      image: "https://images.unsplash.com/photo-1627634771521-9754fe2bc49b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB0ZWFtd29ya3xlbnwxfHx8fDE3Njg0Nzk1Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      highlight: "Hackathon",
    },
    {
      title: "Schulprojekt: Learning Tool",
      description: "Interaktive Lern-App für mathematische Konzepte. Von der Planung bis zur Umsetzung eigenständig entwickelt.",
      tags: ["Python", "Flask", "SQLite"],
      image: "https://images.unsplash.com/photo-1609619385076-36a873425636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3Njg0NTg4NTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      highlight: "Schulprojekt",
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen flex items-center py-20 px-6"
      style={{ backgroundColor: "white" }}
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="font-bold mb-4" style={{ color: "#F2994A", fontSize: "0.875rem", letterSpacing: "0.1em" }}>
            PROJEKTE
          </p>
          <h2 className="mb-6" style={{ color: "#092C4C", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "700" }}>
            Arbeiten & Umsetzungen
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: "#4f4f4f", lineHeight: "1.8" }}>
            Von der Idee zur Umsetzung – hier sind einige Projekte, die meinen Lernprozess
            und meine Fähigkeit zeigen, Ideen in die Realität umzusetzen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl"
              style={{
                transform: hoveredProject === index ? "translateY(-8px)" : "translateY(0)",
              }}
            >
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{
                    transform: hoveredProject === index ? "scale(1.1)" : "scale(1)",
                  }}
                />
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium"
                  style={{ backgroundColor: "rgba(242, 153, 74, 0.9)", color: "white" }}
                >
                  {project.highlight}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3" style={{ color: "#092C4C" }}>
                  {project.title}
                </h3>
                <p className="mb-4" style={{ color: "#4f4f4f", lineHeight: "1.6", fontSize: "0.875rem" }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg text-xs font-medium"
                      style={{ backgroundColor: "rgba(9, 44, 76, 0.1)", color: "#092C4C" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button
                    className="flex items-center gap-2 text-sm font-medium transition-colors"
                    style={{ color: "#092C4C" }}
                  >
                    <ExternalLink size={16} />
                    Ansehen
                  </button>
                  <button
                    className="flex items-center gap-2 text-sm font-medium transition-colors"
                    style={{ color: "#828282" }}
                  >
                    <Github size={16} />
                    Code
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 p-8 rounded-2xl text-center"
          style={{ backgroundColor: "#f5f5f5" }}
        >
          <h3 className="text-xl font-bold mb-3" style={{ color: "#092C4C" }}>
            Mehr Projekte in Arbeit
          </h3>
          <p className="mb-6" style={{ color: "#4f4f4f", lineHeight: "1.6" }}>
            Diese Projekte sind nur ein Ausschnitt. Ich arbeite kontinuierlich an neuen Ideen
            und erweitere mein Portfolio stetig.
          </p>
          <button
            className="px-8 py-3 rounded-lg font-bold transition-all hover:shadow-lg"
            style={{ backgroundColor: "#F2994A", color: "white" }}
          >
            GitHub Profil besuchen
          </button>
        </motion.div>
      </div>
    </section>
  );
}
