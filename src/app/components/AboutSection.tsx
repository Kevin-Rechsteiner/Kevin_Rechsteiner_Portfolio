import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Lightbulb, Eye, Sparkles } from "lucide-react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: <Lightbulb size={32} />,
      title: "Kreatives Denken",
      description: "Ich löse Probleme nicht nur technisch, sondern betrachte sie aus verschiedenen Perspektiven."
    },
    {
      icon: <Eye size={32} />,
      title: "Offener Blick",
      description: "Neue Technologien und Ansätze faszinieren mich – ich bin immer bereit, dazuzulernen."
    },
    {
      icon: <Sparkles size={32} />,
      title: "Innovationsgeist",
      description: "Ich suche nach innovativen Lösungen und scheue mich nicht, unkonventionelle Wege zu gehen."
    }
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center py-20 px-6"
      style={{ backgroundColor: "white" }}
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <p className="font-bold mb-4" style={{ color: "#F2994A", fontSize: "0.875rem", letterSpacing: "0.1em" }}>
            ÜBER MICH
          </p>
          <h2 className="mb-6" style={{ color: "#092C4C", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "700" }}>
            Persönlichkeit & Perspektive
          </h2>
          <p className="text-xl max-w-3xl" style={{ color: "#4f4f4f", lineHeight: "1.8" }}>
            Als angehender Informatiker bringe ich nicht nur technisches Wissen mit, sondern vor allem
            einen kreativen und vielseitigen Denkstil. Ich sehe Herausforderungen als Chancen und
            betrachte Probleme gerne aus unterschiedlichen Blickwinkeln.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="p-8 rounded-xl transition-all hover:shadow-xl"
              style={{ backgroundColor: "#f5f5f5" }}
            >
              <div
                className="w-16 h-16 rounded-lg flex items-center justify-center mb-6"
                style={{ backgroundColor: "rgba(242, 153, 74, 0.1)", color: "#F2994A" }}
              >
                {feature.icon}
              </div>
              <h3 className="mb-4 font-bold text-xl" style={{ color: "#092C4C" }}>
                {feature.title}
              </h3>
              <p style={{ color: "#4f4f4f", lineHeight: "1.6" }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="p-10 rounded-2xl"
          style={{ backgroundColor: "#092C4C" }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4" style={{ color: "white" }}>
                Warum ich?
              </h3>
              <p className="mb-4" style={{ color: "#E0E0E0", lineHeight: "1.8" }}>
                Ich bin nicht nur auf der Suche nach einer Ausbildung – ich möchte Teil eines Teams werden,
                das Wert auf Kreativität, Innovation und kontinuierliche Weiterentwicklung legt.
              </p>
              <p style={{ color: "#E0E0E0", lineHeight: "1.8" }}>
                Mein Ziel ist es, mein Potenzial in einem professionellen Umfeld voll auszuschöpfen
                und gleichzeitig einen echten Mehrwert zu schaffen.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <div className="flex flex-col gap-4">
                {["Teamplayer", "Lernbereit", "Problemlöser"].map((trait, index) => (
                  <motion.div
                    key={trait}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="px-6 py-3 rounded-lg font-medium"
                    style={{ backgroundColor: "rgba(242, 153, 74, 0.2)", color: "#F2994A" }}
                  >
                    {trait}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
