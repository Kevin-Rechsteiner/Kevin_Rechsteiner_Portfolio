'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/app/context/ThemeContext";
import { useLanguage } from "@/app/context/LanguageContext";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import {
  SiReact, SiNextdotjs, SiJavascript, SiHtml5, SiTailwindcss,
  SiPython, SiNodedotjs, SiMysql,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/app/components/Footer";

export default function HomePage() {
  const { colors, darkMode } = useTheme();
  const { t, language } = useLanguage();
  const [activeSkillIndex, setActiveSkillIndex] = useState(2);
  const lightBlue = '#3b82f6';

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
  ];

  const hobbies = [
    {
      id: 1,
      title: language === 'de' ? 'Kraftsport' : 'Weight Training',
      desc: language === 'de'
        ? 'Regelmässiges Training im Gym gehört zu meinem Alltag und hat mir viel über Disziplin und Durchhaltevermögen beigebracht. Es zeigt mir jeden Tag aufs Neue, dass konstante Arbeit zu sichtbaren Ergebnissen führt. Diese Einstellung nehme ich auch in meine Arbeit als Entwickler mit.'
        : 'Regular gym training is part of my daily routine and has taught me a lot about discipline and perseverance. It shows me every day that consistent work leads to visible results. I bring this mindset into my work as a developer as well.',
      image: '/hobbys_fotos/gym.jpg',
    },
    {
      id: 2,
      title: language === 'de' ? 'Fussball' : 'Football',
      desc: language === 'de'
        ? 'Neun Jahre lang habe ich im Verein gespielt und dabei gelernt, wie wichtig Teamarbeit und Zusammenhalt sind. Aus persönlichen Gründen habe ich aufgehört, aber die Leidenschaft ist geblieben. Heute spiele ich regelmässig mit Freunden in meiner Freizeit.'
        : 'I played in a club for nine years and learned how important teamwork and cohesion are. I stopped for personal reasons, but the passion remains. Today I play regularly with friends in my free time.',
      image: '/hobbys_fotos/fussball_img.jpg',
    },
    {
      id: 3,
      title: language === 'de' ? 'Musik' : 'Music',
      desc: language === 'de'
        ? 'Fünf Jahre lang habe ich akustische Gitarre gespielt, dann eine Pause gemacht. Seit einem Jahr lerne ich jetzt E-Gitarre und bringe mir alles selbst bei. Musik ist für mich ein kreativer Ausgleich und eine willkommene Pause vom Bildschirm.'
        : 'I played acoustic guitar for five years, then took a break. For the past year, I have been learning electric guitar and teaching myself everything. Music is a creative balance for me and a welcome break from the screen.',
      image: '/hobbys_fotos/egitarre.jpg',
    },
    {
      id: 4,
      title: language === 'de' ? 'Das Leben geniessen' : 'Enjoying Life',
      desc: language === 'de'
        ? 'Neues ausprobieren, Reisen und Erfahrungen mit Freunden teilen. Es gibt so viele Dinge zu entdecken, dass ich gar nicht alles aufzählen kann. Ich bin offen für alles und schätze jeden Moment, der mich weiterbringt oder einfach glücklich macht.'
        : 'Traveling, trying new things and sharing experiences with friends. There are so many things to discover that I cannot even list them all. I am open to everything and appreciate every moment that helps me grow or simply makes me happy.',
      image: '/hobbys_fotos/wanderweg_vietnam.jpg',
    },
  ];

  const getCircularOffset = (index) => {
    const total = skills.length;
    let offset = index - activeSkillIndex;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;
    return offset;
  };

  const prevSkill = () => {
    setActiveSkillIndex((prev) => (prev - 1 + skills.length) % skills.length);
  };

  const nextSkill = () => {
    setActiveSkillIndex((prev) => (prev + 1) % skills.length);
  };

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{
        backgroundColor: colors.bg,
        backgroundImage: darkMode ? 'none' : 'radial-gradient(circle at 12% 14%, rgba(59,130,246,0.08), transparent 34%), radial-gradient(circle at 88% 18%, rgba(56,189,248,0.08), transparent 32%)',
      }}
    >
      <section className="min-h-screen flex items-start md:items-center pt-20 md:pt-0 px-3 sm:px-4 lg:px-6">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold tracking-tight mb-6 transition-colors duration-300"
                style={{ color: colors.text, lineHeight: "1.2" }}
              >
                Kevin Rechsteiner
              </h1>
              <p
                className="text-lg sm:text-xl md:text-2xl mb-4 transition-colors duration-300"
                style={{ color: colors.textSecondary, lineHeight: "1.6" }}
              >
                {t.hero.title}
              </p>
              <p
                className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl transition-colors duration-300"
                style={{ color: colors.textSecondary, lineHeight: "1.8" }}
              >
                {t.hero.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/projekte"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-opacity duration-200 hover:opacity-90"
                  style={{ backgroundColor: colors.accent, color: "#ffffff" }}
                >
                  {language === 'de' ? 'Meine Projekte' : 'My Projects'}
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-opacity duration-200 hover:opacity-80 cursor-pointer"
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
                  backgroundColor: darkMode ? colors.card : 'rgba(239,246,255,0.6)',
                }}
              >
                <Image
                  src="/Portrait.jpg"
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


      <section className="py-16 px-3 sm:px-4 lg:px-6 transition-colors duration-300" style={{ backgroundColor: colors.bg }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-8 transition-colors duration-300"
              style={{ color: colors.text }}
            >
              {t.skills.badge}
            </h2>

            <div className="relative max-w-6xl mx-auto">
              <button
                type="button"
                onClick={prevSkill}
                aria-label={language === 'de' ? 'Nach links scrollen' : 'Scroll left'}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-opacity duration-200 hover:opacity-80"
                style={{
                  backgroundColor: darkMode ? colors.card : 'rgba(239,246,255,0.95)',
                  border: `1px solid ${colors.border}`,
                  color: darkMode ? colors.text : lightBlue,
                }}
              >
                <ChevronLeft size={20} />
              </button>

              <button
                type="button"
                onClick={nextSkill}
                aria-label={language === 'de' ? 'Nach rechts scrollen' : 'Scroll right'}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-opacity duration-200 hover:opacity-80"
                style={{
                  backgroundColor: darkMode ? colors.card : 'rgba(239,246,255,0.95)',
                  border: `1px solid ${colors.border}`,
                  color: darkMode ? colors.text : lightBlue,
                }}
              >
                <ChevronRight size={20} />
              </button>

              <div className="relative h-[360px] sm:h-[390px] md:h-[420px] overflow-hidden px-10 sm:px-12">
              {skills.map((skill, index) => {
                const offset = getCircularOffset(index);
                const isVisible = Math.abs(offset) <= 2;
                return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isVisible ? 1 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute left-1/2 top-1/2 w-[150px] sm:w-[175px] md:w-[210px] min-h-[260px] sm:min-h-[300px] md:min-h-[340px] py-5 px-4 rounded-2xl flex flex-col items-center justify-center gap-4 transition-all duration-300 will-change-transform cursor-default"
                  style={{
                    backgroundColor: darkMode ? colors.card : 'rgba(255,255,255,0.95)',
                    border: `1px solid ${colors.border}`,
                    transform: `translate(-50%, -50%) translateX(calc(${offset} * clamp(72px, 11vw, 155px))) scale(${offset === 0 ? 1 : Math.abs(offset) === 1 ? 0.93 : 0.86})`,
                    zIndex: 20 - Math.abs(offset),
                    pointerEvents: offset === 0 ? 'auto' : 'none',
                    boxShadow: offset === 0
                      ? (darkMode ? '0 8px 24px rgba(0,0,0,0.5)' : '0 10px 26px rgba(0,0,0,0.12)')
                      : (darkMode ? '0 2px 10px rgba(0,0,0,0.35)' : '0 4px 12px rgba(0,0,0,0.08)'),
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
                      backgroundColor: skill.type === 'Frontend' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(34, 197, 94, 0.1)',
                      color: skill.type === 'Frontend' ? '#3b82f6' :
                             '#22c55e',
                    }}
                  >
                    {skill.type}
                  </span>
                </motion.div>
              );
              })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-3 sm:px-4 lg:px-6 transition-colors duration-300" style={{ backgroundColor: colors.bg }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-8 transition-colors duration-300"
              style={{ color: colors.text }}
            >
              {language === 'de' ? 'Hobbys & Interessen' : 'Hobbies & Interests'}
            </h2>

            <div style={{ borderTop: `1px solid ${colors.border}`, borderBottom: `1px solid ${colors.border}` }}>
              {hobbies.map((hobby, index) => (
                <div
                  key={hobby.id}
                  className="py-8 md:py-10"
                  style={index < hobbies.length - 1 ? { borderBottom: `1px solid ${colors.border}` } : undefined}
                >
                  <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                    <div className={`lg:col-span-8 ${index % 2 === 1 ? 'lg:col-start-5' : 'lg:col-start-1'}`}>
                      <h3
                        className="font-bold text-2xl sm:text-3xl tracking-tight mb-4 transition-colors duration-300"
                        style={{ color: colors.text }}
                      >
                        {hobby.title}
                      </h3>
                      <p
                        className="text-base sm:text-lg transition-colors duration-300"
                        style={{ color: colors.textSecondary, lineHeight: "1.85" }}
                      >
                        {hobby.desc}
                      </p>
                    </div>

                    <div className={`lg:col-span-4 w-full h-[220px] sm:h-[260px] lg:h-[300px] rounded-2xl overflow-hidden ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : 'lg:col-start-9'}`}>
                      <Image
                        src={hobby.image}
                        alt={hobby.title}
                        width={340}
                        height={260}
                        quality={75}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
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
