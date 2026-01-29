'use client';

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Briefcase, Users } from "lucide-react";

export function Skills({ data }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    // Visual data that enhances the simple list from content.js
    // We keep the "levels" here for the design aesthetic requested
    const technicalSkills = [
        { name: "JavaScript/TypeScript", level: 85, color: "#F2994A" },
        { name: "React & Next.js", level: 80, color: "#F2994A" },
        { name: "Python", level: 65, color: "#27AE60" },
        { name: "HTML & CSS", level: 90, color: "#27AE60" },
        { name: "Java", level: 60, color: "#E2B93B" },
    ];

    return (
        <section
            id="skills"
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
                        KOMPETENZEN
                    </p>
                    <h2 className="mb-6" style={{ color: "#092C4C", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "700" }}>
                        {data.title}
                    </h2>
                    <p className="text-xl max-w-3xl mx-auto" style={{ color: "#4f4f4f", lineHeight: "1.8" }}>
                        {data.text}
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Technical Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white p-8 rounded-2xl shadow-lg"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div
                                className="w-14 h-14 rounded-lg flex items-center justify-center"
                                style={{ backgroundColor: "rgba(9, 44, 76, 0.1)", color: "#092C4C" }}
                            >
                                <Code2 size={28} />
                            </div>
                            <h3 className="text-2xl font-bold" style={{ color: "#092C4C" }}>
                                Technische Fähigkeiten
                            </h3>
                        </div>

                        <div className="space-y-6">
                            {technicalSkills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                >
                                    <div className="flex justify-between mb-2">
                                        <span className="font-medium" style={{ color: "#092C4C" }}>
                                            {skill.name}
                                        </span>
                                        <span className="text-sm" style={{ color: "#828282" }}>
                                            {skill.level}%
                                        </span>
                                    </div>
                                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={isInView ? { width: `${skill.level}%` } : {}}
                                            transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                                            className="h-full rounded-full"
                                            style={{ backgroundColor: skill.color }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-8 p-4 rounded-lg" style={{ backgroundColor: "rgba(242, 153, 74, 0.1)" }}>
                            <p className="text-sm" style={{ color: "#4f4f4f" }}>
                                <strong style={{ color: "#F2994A" }}>Hinweis:</strong> Diese Kenntnisse baue ich kontinuierlich aus.
                                Ich bin offen für neue Technologien.
                            </p>
                        </div>
                    </motion.div>

                    {/* Soft Skills & Experience */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-white p-8 rounded-2xl shadow-lg"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div
                                    className="w-14 h-14 rounded-lg flex items-center justify-center"
                                    style={{ backgroundColor: "rgba(242, 153, 74, 0.1)", color: "#F2994A" }}
                                >
                                    <Users size={28} />
                                </div>
                                <h3 className="text-2xl font-bold" style={{ color: "#092C4C" }}>
                                    Soziale Kompetenzen
                                </h3>
                            </div>

                            <div className="space-y-4">
                                {data.soft_skills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#F2994A" }} />
                                        <p style={{ color: "#4f4f4f", lineHeight: "1.6" }}>{skill}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="bg-white p-8 rounded-2xl shadow-lg"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div
                                    className="w-14 h-14 rounded-lg flex items-center justify-center"
                                    style={{ backgroundColor: "rgba(39, 174, 96, 0.1)", color: "#27AE60" }}
                                >
                                    <Briefcase size={28} />
                                </div>
                                <h3 className="text-2xl font-bold" style={{ color: "#092C4C" }}>
                                    Erfahrungen
                                </h3>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-bold mb-2" style={{ color: "#092C4C" }}>
                                        Hackathon & Teamwork
                                    </h4>
                                    <p className="text-sm" style={{ color: "#4f4f4f", lineHeight: "1.6" }}>
                                        Praktische Erfahrung in der Teamarbeit unter Zeitdruck und agile Entwicklung.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
