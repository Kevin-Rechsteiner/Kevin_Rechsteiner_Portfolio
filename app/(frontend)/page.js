'use client';

import { motion } from "framer-motion";
import { Kontakt } from "@/app/components/Kontakt";

export default function UeberMichPage() {
  const techSkills = [
    "JavaScript", "TypeScript", "React", "Next.js",
    "Java", "Python", "HTML & CSS", "Git",
  ];

  const softSkills = [
    "Teamfähigkeit",
    "Lernbereitschaft",
    "Analytisches Denken",
    "Perspektivwechsel",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Intro */}
      <section className="pt-28 pb-12 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p
              className="font-semibold mb-3 text-xs tracking-widest"
              style={{ color: "#F2994A" }}
            >
              ÜBER MICH
            </p>
            <h1
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: "#092C4C", lineHeight: "1.3" }}
            >
              Schüler & angehender Informatiker
            </h1>
            <p
              className="text-lg max-w-2xl"
              style={{ color: "#6b7280", lineHeight: "1.8" }}
            >
              Ich bin fasziniert davon, wie Technologie Probleme lösen kann.
              Als Schüler und angehender Informatiker verbinde ich Neugier
              mit ersten fundierten Kenntnissen und dem Willen, jeden Tag
              etwas Neues zu lernen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portrait + Text */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Placeholder Portrait */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div
                className="w-full aspect-[4/5] rounded-2xl"
                style={{ backgroundColor: "#d1d5db" }}
              />
            </motion.div>

            {/* About Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: "#092C4C" }}
              >
                Wer ich bin
              </h2>
              <p
                className="mb-4"
                style={{ color: "#6b7280", lineHeight: "1.7" }}
              >
                Ich bin Schüler und angehender Informatiker mit einer
                Leidenschaft für digitale Technologien. Was mich
                auszeichnet, ist nicht nur mein technisches Interesse,
                sondern meine Art zu denken: Ich versuche stets, Dinge
                aus verschiedenen Perspektiven zu betrachten.
              </p>
              <p
                className="mb-4"
                style={{ color: "#6b7280", lineHeight: "1.7" }}
              >
                Diese Offenheit hilft mir, mich in andere
                hineinzuversetzen und kreative Lösungsansätze zu finden,
                die über den Standard hinausgehen.
              </p>
              <p style={{ color: "#6b7280", lineHeight: "1.7" }}>
                Ich stehe am Anfang meiner beruflichen Laufbahn und sehe
                das als Chance. Mein Ziel ist es nicht, sofort alles zu
                wissen, sondern stetig zu wachsen. Jeder Fehler ist für
                mich eine Lektion, jede Herausforderung eine Möglichkeit,
                besser zu werden.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Kompetenzen */}
      <section className="py-16 px-6" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2
              className="text-2xl font-bold mb-3"
              style={{ color: "#092C4C" }}
            >
              Kompetenzen & Fähigkeiten
            </h2>
            <p
              className="mb-8 max-w-2xl"
              style={{ color: "#6b7280", lineHeight: "1.7" }}
            >
              Meine Ausbildung ist noch in vollem Gange, aber ich habe mir
              bereits ein solides Fundament erarbeitet. Besonders wichtig
              ist mir dabei nicht nur das &quot;Wie&quot;, sondern auch das &quot;Warum&quot;.
            </p>

            {/* Tech */}
            <h3
              className="text-sm font-semibold mb-3 tracking-wide"
              style={{ color: "#092C4C" }}
            >
              Technisch
            </h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {techSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-lg text-sm font-medium"
                  style={{
                    backgroundColor: "white",
                    color: "#092C4C",
                    border: "1px solid #e5e7eb",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Soft */}
            <h3
              className="text-sm font-semibold mb-3 tracking-wide"
              style={{ color: "#092C4C" }}
            >
              Persönlich
            </h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-lg text-sm font-medium"
                  style={{
                    backgroundColor: "white",
                    color: "#6b7280",
                    border: "1px solid #e5e7eb",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Kontakt */}
      <Kontakt />
    </div>
  );
}
