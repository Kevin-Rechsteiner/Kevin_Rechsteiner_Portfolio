import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Mail, Linkedin, Github, ArrowRight } from "lucide-react";

export function ClosingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      label: "E-Mail",
      value: "kontakt@beispiel.de",
      color: "#092C4C",
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      value: "linkedin.com/in/...",
      color: "#2F80ED",
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      value: "github.com/...",
      color: "#092C4C",
    },
  ];

  return (
    <section
      id="closing"
      ref={ref}
      className="min-h-screen flex items-center py-20 px-6"
      style={{ backgroundColor: "white" }}
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-bold mb-4" style={{ color: "#F2994A", fontSize: "0.875rem", letterSpacing: "0.1em" }}>
            KONTAKT
          </p>
          <h2 className="mb-6" style={{ color: "#092C4C", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "700" }}>
            Lassen Sie uns sprechen
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: "#4f4f4f", lineHeight: "1.8" }}>
            Ich freue mich auf ein Gespräch über mögliche Ausbildungs- oder Praktikumsplätze.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8" style={{ color: "#092C4C" }}>
              Kontaktmöglichkeiten
            </h3>
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href="#"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl transition-all hover:shadow-lg"
                  style={{ backgroundColor: "#f5f5f5" }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(242, 153, 74, 0.1)", color: method.color }}
                  >
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm" style={{ color: "#828282" }}>
                      {method.label}
                    </p>
                    <p className="font-medium" style={{ color: "#092C4C" }}>
                      {method.value}
                    </p>
                  </div>
                  <ArrowRight size={20} style={{ color: "#F2994A" }} />
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 p-6 rounded-xl"
              style={{ backgroundColor: "rgba(39, 174, 96, 0.1)" }}
            >
              <p className="text-sm" style={{ color: "#4f4f4f", lineHeight: "1.6" }}>
                <strong style={{ color: "#27AE60" }}>Verfügbarkeit:</strong> Ich bin ab sofort für
                Ausbildungs- oder Praktikumsplätze verfügbar und freue mich auf neue Herausforderungen.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6" style={{ color: "#092C4C" }}>
              Schnellkontakt
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block mb-2 font-medium text-sm" style={{ color: "#092C4C" }}>
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Ihr Name"
                  className="w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2"
                  style={{ 
                    borderColor: "#E0E0E0",
                    backgroundColor: "#f5f5f5"
                  }}
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-sm" style={{ color: "#092C4C" }}>
                  E-Mail
                </label>
                <input
                  type="email"
                  placeholder="ihre.email@beispiel.de"
                  className="w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2"
                  style={{ 
                    borderColor: "#E0E0E0",
                    backgroundColor: "#f5f5f5"
                  }}
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-sm" style={{ color: "#092C4C" }}>
                  Nachricht
                </label>
                <textarea
                  rows={4}
                  placeholder="Ihre Nachricht..."
                  className="w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2 resize-none"
                  style={{ 
                    borderColor: "#E0E0E0",
                    backgroundColor: "#f5f5f5"
                  }}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg font-bold transition-all hover:shadow-lg"
                style={{ backgroundColor: "#F2994A", color: "white" }}
              >
                Nachricht senden
              </button>
            </form>
          </motion.div>
        </div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="p-12 rounded-2xl text-center"
          style={{ backgroundColor: "#092C4C" }}
        >
          <h3 className="text-3xl font-bold mb-4" style={{ color: "white" }}>
            Kreativ. Professionell. Voller Potenzial.
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: "#E0E0E0", lineHeight: "1.8" }}>
            Ich bin bereit, mein Wissen und meine Kreativität in einem professionellen Umfeld
            einzubringen und Teil eines innovativen Teams zu werden.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              className="px-8 py-4 rounded-lg font-bold transition-all hover:shadow-lg"
              style={{ backgroundColor: "#F2994A", color: "white" }}
            >
              Bewerbungsunterlagen anfragen
            </button>
            <button
              className="px-8 py-4 rounded-lg font-bold transition-all border-2"
              style={{ borderColor: "white", color: "white", backgroundColor: "transparent" }}
            >
              Mehr erfahren
            </button>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 pt-8 text-center border-t"
          style={{ borderColor: "#E0E0E0" }}
        >
          <p className="text-sm" style={{ color: "#828282" }}>
            © 2026 Portfolio. Entwickelt mit React & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </section>
  );
}
