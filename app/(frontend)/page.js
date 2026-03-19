'use client';

import { motion } from "framer-motion";
import { useTheme } from "@/app/context/ThemeContext";
import { useLanguage } from "@/app/context/LanguageContext";
import { ArrowRight } from "lucide-react";
import {
  SiReact, SiNextdotjs, SiJavascript, SiHtml5, SiTailwindcss,
  SiPython, SiNodedotjs, SiMysql, SiGit,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/app/components/Footer";

export default function HomePage() {
  const { colors, darkMode } = useTheme();
  const { t, language } = useLanguage();

  const skills = [
    { name: "React",       icon: <SiReact size={30} />,      type: "Frontend", color: "#61DAFB" },
    { name: "Next.js",     icon: <SiNextdotjs size={30} />,  type: "Frontend", color: darkMode ? "#ffffff" : "#000000" },
    { name: "JavaScript",  icon: <SiJavascript size={30} />, type: "Frontend", color: "#F7DF1E" },
    { name: "HTML & CSS",  icon: <SiHtml5 size={30} />,      type: "Frontend", color: "#E34F26" },
    { name: "Tailwind",    icon: <SiTailwindcss size={30} />,type: "Frontend", color: "#06B6D4" },
    { name: "Java",        icon: <FaJava size={30} />,       type: "Backend",  color: "#007396" },
    { name: "Python",      icon: <SiPython size={30} />,     type: "Backend",  color: "#3776AB" },
    { name: "Node.js",     icon: <SiNodedotjs size={30} />,  type: "Backend",  color: "#339933" },
    { name: "MySQL",       icon: <SiMysql size={30} />,      type: "Backend",  color: "#4479A1" },
    { name: "Git",         icon: <SiGit size={30} />,        type: "Tool",     color: "#F05032" },
  ];

  const hobbies = [
    {
      id: 1,
      title: language === 'de' ? 'Kraftsport' : 'Weight Training',
      desc: language === 'de'
        ? 'Regelmässiges Training im Gym gehört zu meinem Alltag und hat mir viel über Disziplin und Durchhaltevermögen beigebracht. Es zeigt mir jeden Tag aufs Neue, dass konstante Arbeit zu sichtbaren Ergebnissen führt. Diese Einstellung nehme ich auch in meine Arbeit als Entwickler mit.'
        : 'Regular gym training is part of my daily routine and has taught me a lot about discipline and perseverance. It shows me every day that consistent work leads to visible results. I bring this mindset into my work as a developer as well.',
      image: '/gym.jpg',
    },
    {
      id: 2,
      title: language === 'de' ? 'Fussball' : 'Football',
      desc: language === 'de'
        ? 'Neun Jahre lang habe ich im Verein gespielt und dabei gelernt, wie wichtig Teamarbeit und Zusammenhalt sind. Aus persönlichen Gründen habe ich aufgehört, aber die Leidenschaft ist geblieben. Heute spiele ich regelmässig mit Freunden in meiner Freizeit.'
        : 'I played in a club for nine years and learned how important teamwork and cohesion are. I stopped for personal reasons, but the passion remains. Today I play regularly with friends in my free time.',
      image: '/fussball_img.jpg',
    },
    {
      id: 3,
      title: language === 'de' ? 'Musik' : 'Music',
      desc: language === 'de'
        ? 'Fünf Jahre lang habe ich akustische Gitarre gespielt, dann eine Pause gemacht. Seit einem Jahr lerne ich jetzt E-Gitarre und bringe mir alles selbst bei. Musik ist für mich ein kreativer Ausgleich und eine willkommene Pause vom Bildschirm.'
        : 'I played acoustic guitar for five years, then took a break. For the past year, I have been learning electric guitar and teaching myself everything. Music is a creative balance for me and a welcome break from the screen.',
      image: '/egitarre.jpg',
    },
    {
      id: 4,
      title: language === 'de' ? 'Das Leben geniessen' : 'Enjoying Life',
      desc: language === 'de'
        ? 'Neues ausprobieren, Reisen und Erfahrungen mit Freunden teilen. Es gibt so viele Dinge zu entdecken, dass ich gar nicht alles aufzählen kann. Ich bin offen für alles und schätze jeden Moment, der mich weiterbringt oder einfach glücklich macht.'
        : 'Traveling, trying new things and sharing experiences with friends. There are so many things to discover that I cannot even list them all. I am open to everything and appreciate every moment that helps me grow or simply makes me happy.',
      image: '/free-photo-of-felsen-berg-pfad-hugel.jpeg',
    },
  ];

  return (
    <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: colors.bg }}>
      <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p
                className="font-semibold mb-4 text-sm sm:text-base tracking-widest transition-colors duration-300"
                style={{ color: colors.accent }}
              >
                {t.hero.badge}
              </p>
              <h1
                className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-6 transition-colors duration-300"
                style={{ color: colors.text, lineHeight: "1.2" }}
              >
                Kevin <span style={{ color: colors.accent }}>Rechsteiner</span>
              </h1>
              <p
                className="text-xl sm:text-2xl mb-4 transition-colors duration-300"
                style={{ color: colors.textSecondary, lineHeight: "1.6" }}
              >
                {t.hero.title}
              </p>
              <p
                className="text-base sm:text-lg mb-8 transition-colors duration-300"
                style={{ color: colors.textSecondary, lineHeight: "1.8" }}
              >
                {t.hero.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/projekte"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:opacity-90 hover:scale-105"
                  style={{ backgroundColor: colors.accent, color: "#ffffff" }}
                >
                  {language === 'de' ? 'Meine Projekte' : 'My Projects'}
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg cursor-pointer"
                  style={{
                    backgroundColor: "transparent",
                    color: colors.text,
                    border: `2px solid ${colors.border}`,
                  }}
                >
                  {language === 'de' ? 'Kontakt' : 'Contact'}
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center md:justify-end"
            >
              <div
                className="w-96 h-[550px] sm:w-[420px] sm:h-[600px] md:w-[480px] md:h-[700px] rounded-2xl transition-all duration-300 overflow-hidden"
                style={{
                  border: `1px solid ${colors.border}`,
                  boxShadow: darkMode ? 'none' : '0 8px 30px rgba(0,0,0,0.08)',
                }}
              >
                <Image
                  src="/placerholder600x400.svg"
                  alt="Kevin Rechsteiner"
                  width={320}
                  height={480}
                  priority
                  quality={85}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300" style={{ backgroundColor: colors.bg }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-10 rounded-2xl transition-colors duration-300"
            style={{ backgroundColor: colors.card, border: `1px solid ${colors.border}` }}
          >
            <p
              className="text-base sm:text-lg md:text-xl transition-colors duration-300 max-w-3xl"
              style={{ color: colors.text, lineHeight: "1.8" }}
            >
              {t.about.text1}
            </p>
            <p
              className="text-base sm:text-lg md:text-xl mt-4 transition-colors duration-300 max-w-3xl"
              style={{ color: colors.textSecondary, lineHeight: "1.8" }}
            >
              {t.about.text2}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300" style={{ backgroundColor: colors.bg }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="font-semibold mb-3 text-xs sm:text-sm tracking-widest transition-colors duration-300"
              style={{ color: colors.accent }}
            >
              {language === 'de' ? 'FÄHIGKEITEN' : 'SKILLS'}
            </p>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 transition-colors duration-300"
              style={{ color: colors.text }}
            >
              {t.skills.badge}
            </h2>

            <div className="flex flex-wrap gap-8 justify-start">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: 0.05 + index * 0.03 }}
                  className="w-[160px] sm:w-[180px] md:w-[200px] aspect-square p-6 rounded-2xl flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-default"
                  style={{
                    backgroundColor: colors.card,
                    border: `1px solid ${colors.border}`,
                    boxShadow: darkMode ? 'none' : '0 4px 20px rgba(0,0,0,0.07)',
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center transition-colors duration-300"
                    style={{ backgroundColor: `${skill.color}18` }}
                  >
                    <span style={{ color: skill.color }}>{skill.icon}</span>
                  </div>
                  <span
                    className="text-base sm:text-lg font-semibold text-center transition-colors duration-300 leading-tight"
                    style={{ color: colors.text }}
                  >
                    {skill.name}
                  </span>
                  <span
                    className="text-xs font-medium px-3 py-1 rounded-full transition-colors duration-300"
                    style={{
                      backgroundColor: skill.type === 'Frontend' ? 'rgba(59, 130, 246, 0.1)' :
                                       skill.type === 'Backend' ? 'rgba(34, 197, 94, 0.1)' :
                                       'rgba(168, 85, 247, 0.1)',
                      color: skill.type === 'Frontend' ? '#3b82f6' :
                             skill.type === 'Backend' ? '#22c55e' :
                             '#a855f7',
                    }}
                  >
                    {skill.type}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300" style={{ backgroundColor: colors.bg }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="font-semibold mb-3 text-xs sm:text-sm tracking-widest transition-colors duration-300"
              style={{ color: colors.accent }}
            >
              {language === 'de' ? 'PERSÖNLICH' : 'PERSONAL'}
            </p>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 transition-colors duration-300"
              style={{ color: colors.text }}
            >
              {language === 'de' ? 'Hobbys & Interessen' : 'Hobbies & Interests'}
            </h2>

            <div className="space-y-8">
              {hobbies.map((hobby) => (
                <div
                  key={hobby.id}
                  className="flex gap-8 sm:gap-10 p-8 sm:p-10 rounded-3xl transition-colors duration-300 cursor-default"
                  style={{
                    backgroundColor: colors.card,
                    border: `1px solid ${colors.border}`,
                    boxShadow: darkMode ? 'none' : '0 4px 20px rgba(0,0,0,0.05)',
                  }}
                >
                  <div className="flex-1 min-w-0 flex flex-col justify-center py-4">
                    <h3
                      className="font-bold text-2xl sm:text-3xl mb-4 transition-colors duration-300"
                      style={{ color: colors.text }}
                    >
                      {hobby.title}
                    </h3>
                    <p
                      className="text-base sm:text-lg md:text-xl transition-colors duration-300"
                      style={{ color: colors.textSecondary, lineHeight: "1.9" }}
                    >
                      {hobby.desc}
                    </p>
                  </div>

                  <div
                    className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-2xl flex-shrink-0 transition-colors duration-300 overflow-hidden"
                    style={{
                      backgroundColor: darkMode ? '#374151' : '#d1d5db',
                      border: `1px solid ${colors.border}`,
                    }}
                  >
                    <Image
                      src={hobby.image}
                      alt={hobby.title}
                      width={256}
                      height={256}
                      quality={75}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
