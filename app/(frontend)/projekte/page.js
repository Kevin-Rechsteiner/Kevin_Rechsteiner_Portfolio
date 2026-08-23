'use client';

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useTheme } from "@/app/context/ThemeContext";
import { useLanguage } from "@/app/context/LanguageContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Footer } from "@/app/components/Footer";


export default function ProjektePage() {
    const { colors, darkMode } = useTheme();
    const { t } = useLanguage();
    const router = useRouter();

    const projects = t.projects.items;
    const icons = { ExternalLink, Github };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen transition-colors duration-300" 
            style={{ backgroundColor: colors.bg }}
        >
            <section className="pt-32 pb-32 px-3 sm:px-4 lg:px-6 transition-colors duration-300">
                <div className="max-w-6xl mx-auto">
                    <div>
                        <h1
                            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 transition-colors duration-300"
                            style={{ color: colors.text, lineHeight: "1.3" }}
                        >
                            {t.projects.title}
                        </h1>
                        <p
                            className="text-base sm:text-lg md:text-xl max-w-3xl transition-colors duration-300"
                            style={{ color: colors.textSecondary, lineHeight: "1.8" }}
                        >
                            {t.projects.description}
                        </p>
                    </div>
                </div>
            </section>

            <section className="pb-20 px-3 sm:px-4 lg:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="rounded-2xl overflow-hidden transition-colors duration-200 hover:opacity-95 cursor-pointer"
                                onClick={() => router.push(`/projekte/${index}`)}
                                style={{
                                    border: `1px solid ${colors.border}`,
                                    backgroundColor: colors.card,
                                    boxShadow: darkMode ? 'none' : '0 4px 20px rgba(0,0,0,0.05)',
                                }}
                            >
                                <div
                                    className="w-full h-52 sm:h-60 relative flex items-center justify-center transition-colors duration-300 overflow-hidden"
                                    style={{ backgroundColor: colors.bgSecondary }}
                                >
                                    {project.image ? (
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover"
                                            quality={75}
                                            loading="lazy"
                                        />
                                    ) : null}
                                </div>

                                <div className="p-8">
                                    <h3
                                        className="text-lg sm:text-xl font-bold tracking-tight mb-3 transition-colors duration-300"
                                        style={{ color: colors.text }}
                                    >
                                        {project.title}
                                    </h3>
                                    <p
                                        className="text-sm sm:text-base mb-5 transition-colors duration-300"
                                        style={{ color: colors.textSecondary, lineHeight: "1.7" }}
                                    >
                                        {project.desc}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 rounded-md text-xs font-medium transition-colors duration-300"
                                                style={{
                                                    backgroundColor: colors.bgSecondary,
                                                    color: colors.text,
                                                    border: `1px solid ${colors.border}`,
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                className="flex items-center gap-1.5 text-sm font-medium transition-all duration-200 hover:opacity-70"
                                                onClick={(e) => e.stopPropagation()}
                                                style={{ color: colors.accent }}
                                            >
                                                {<icons.ExternalLink size={14} />}
                                                {t.projects.view}
                                            </a>
                                        )}
                                        {project.githubFrontend && (
                                            <a
                                                href={project.githubFrontend}
                                                className="flex items-center gap-1.5 text-sm font-medium transition-all duration-200 hover:opacity-70"
                                                onClick={(e) => e.stopPropagation()}
                                                style={{ color: colors.textSecondary }}
                                            >
                                                {<icons.Github size={14} />}
                                                {t.projects.codeFrontend}
                                            </a>
                                        )}
                                        {project.githubBackend && (
                                            <a
                                                href={project.githubBackend}
                                                className="flex items-center gap-1.5 text-sm font-medium transition-all duration-200 hover:opacity-70"
                                                onClick={(e) => e.stopPropagation()}
                                                style={{ color: colors.textSecondary }}
                                            >
                                                {<icons.Github size={14} />}
                                                {t.projects.codeBackend}
                                            </a>
                                        )}
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                className="flex items-center gap-1.5 text-sm font-medium transition-all duration-200 hover:opacity-70"
                                                onClick={(e) => e.stopPropagation()}
                                                style={{ color: colors.textSecondary }}
                                            >
                                                {<icons.Github size={14} />}
                                                {t.projects.code}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div
                        className="mt-12 p-6 rounded-xl text-center transition-colors duration-300"
                        style={{ backgroundColor: colors.bgSecondary, border: `1px solid ${colors.border}` }}
                    >
                        <p className="text-sm transition-colors duration-300" style={{ color: colors.textSecondary }}>
                            {t.projects.note}
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </motion.div>
    );
}
