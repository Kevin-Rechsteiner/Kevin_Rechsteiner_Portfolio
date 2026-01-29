import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { TrendingUp, Target, Award, BookOpen } from "lucide-react";

export function GrowthSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const milestones = [
    {
      year: "2023",
      title: "Erste Schritte",
      description: "Beginn meiner Reise in die Informatik. Grundlagen in HTML, CSS und JavaScript.",
      icon: <BookOpen size={24} />,
    },
    {
      year: "2024",
      title: "Wachstum",
      description: "Vertiefte Kenntnisse in React und erste Hackathon-Teilnahme. Teamarbeit und Projektmanagement.",
      icon: <TrendingUp size={24} />,
    },
    {
      year: "2025",
      title: "Nächste Schritte",
      description: "Bereit für die Ausbildung. Fokus auf professionelle Entwicklung und neue Technologien.",
      icon: <Target size={24} />,
    },
  ];

  const learningGoals = [
    "Moderne Frameworks und Libraries beherrschen",
    "Best Practices in der Softwareentwicklung anwenden",
    "Professionelle Teamarbeit in der Praxis erleben",
    "Komplexe Probleme strukturiert lösen",
  ];

  return (
    <section
      id="growth"
      ref={ref}
      className="min-h-screen flex items-center py-20 px-6"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="font-bold mb-4" style={{ color: "#F2994A", fontSize: "0.875rem", letterSpacing: "0.1em" }}>
            LERNWEG
          </p>
          <h2 className="mb-6" style={{ color: "#092C4C", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "700" }}>
            Entwicklung & Wachstum
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: "#4f4f4f", lineHeight: "1.8" }}>
            Perfektion ist nicht das Ziel – kontinuierliches Wachstum ist es.
            Hier ist mein bisheriger Weg und wohin ich möchte.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mb-20">
          {/* Timeline line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2 hidden md:block"
            style={{ backgroundColor: "rgba(9, 44, 76, 0.2)" }}
          />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-1" />
                
                {/* Timeline dot */}
                <div className="relative flex-shrink-0 hidden md:block">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: "white", color: "#F2994A" }}
                  >
                    {milestone.icon}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="px-3 py-1 rounded-full text-sm font-bold"
                        style={{ backgroundColor: "rgba(242, 153, 74, 0.2)", color: "#F2994A" }}
                      >
                        {milestone.year}
                      </span>
                      <div className="md:hidden" style={{ color: "#F2994A" }}>
                        {milestone.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: "#092C4C" }}>
                      {milestone.title}
                    </h3>
                    <p style={{ color: "#4f4f4f", lineHeight: "1.6" }}>
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Learning Goals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "rgba(242, 153, 74, 0.1)", color: "#F2994A" }}
              >
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-bold" style={{ color: "#092C4C" }}>
                Lernziele
              </h3>
            </div>
            <div className="space-y-3">
              {learningGoals.map((goal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#F2994A" }} />
                  <p style={{ color: "#4f4f4f", lineHeight: "1.6" }}>{goal}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg" style={{ backgroundColor: "#092C4C" }}>
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "rgba(242, 153, 74, 0.2)", color: "#F2994A" }}
              >
                <Award size={28} />
              </div>
              <h3 className="text-2xl font-bold" style={{ color: "white" }}>
                Meine Philosophie
              </h3>
            </div>
            <p className="mb-4" style={{ color: "#E0E0E0", lineHeight: "1.8" }}>
              Ich glaube nicht an Perfektion von Anfang an. Was zählt, ist die Bereitschaft,
              aus Fehlern zu lernen und sich kontinuierlich zu verbessern.
            </p>
            <p style={{ color: "#E0E0E0", lineHeight: "1.8" }}>
              Jede Herausforderung ist eine Chance, zu wachsen und neue Fähigkeiten zu entwickeln.
              Diese Einstellung bringe ich in jedes Projekt mit.
            </p>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 p-8 rounded-2xl text-center"
          style={{ backgroundColor: "rgba(242, 153, 74, 0.1)", borderLeft: "4px solid #F2994A" }}
        >
          <p className="text-2xl font-bold italic mb-4" style={{ color: "#092C4C", lineHeight: "1.6" }}>
            "Der beste Weg, die Zukunft vorherzusagen, ist, sie zu gestalten."
          </p>
          <p className="text-sm" style={{ color: "#828282" }}>
            — Meine Motivation für kontinuierliches Lernen
          </p>
        </motion.div>
      </div>
    </section>
  );
}
