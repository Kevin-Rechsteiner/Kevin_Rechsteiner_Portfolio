'use client';

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Target, Award, BookOpen } from "lucide-react";

export function Growth({ data }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    // Static timeline data matching the persona
    const milestones = [
        {
            year: "Start",
            title: "Grundlagen",
            description: "Einstieg in die Programmierung mit HTML, CSS und ersten Skripten.",
            icon: <BookOpen size={24} />,
        },
        {
            year: "Aktuell",
            title: "Vertiefung",
            description: "Entwicklung komplexerer Apps mit React, Next.js und Teilnahme an Hackathons.",
            icon: <TrendingUp size={24} />,
        },
        {
            year: "Zukunft",
            title: "Professionalisierung",
            description: "Start der Ausbildung und Fokus auf professionelle Softwareentwicklung im Team.",
            icon: <Target size={24} />,
        }
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
                        {data.title}
                    </h2>
                    <p className="text-xl max-w-3xl mx-auto" style={{ color: "#4f4f4f", lineHeight: "1.8" }}>
                        {data.text}
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative mb-20">
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
                                className={`flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                            >
                                <div className="flex-1" />

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

                {/* Philosophy/Motivation */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="bg-white p-10 rounded-2xl shadow-lg border-l-8"
                    style={{ borderColor: "#F2994A" }}
                >
                    <div className="flex items-center gap-4 mb-6">
                        <Award size={32} style={{ color: "#F2994A" }} />
                        <h3 className="text-2xl font-bold" style={{ color: "#092C4C" }}>
                            Meine Motivation
                        </h3>
                    </div>
                    <p className="text-lg" style={{ color: "#4f4f4f", lineHeight: "1.8" }}>
                        "Ich definiere mich nicht darüber, was ich heute schon kann, sondern darüber, was ich bereit bin zu lernen.
                        Mein Ziel ist es, jeden Tag ein bisschen besser zu werden als gestern."
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
