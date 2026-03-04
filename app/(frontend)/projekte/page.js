'use client';

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Kontakt } from "@/app/components/Kontakt";

const projects = [
    {
        title: "E-Commerce Konzept",
        desc: "Ein Online-Shop Prototyp, entwickelt um Next.js und Routing-Konzepte zu verstehen.",
        tags: ["Next.js", "Lernprojekt"],
    },
    {
        title: "Task Manager",
        desc: "Eine kleine App zur Organisation von Schulaufgaben. Fokus lag auf Funktionalität und sauberem Code.",
        tags: ["React", "Productivity"],
    },
];

export default function ProjektePage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
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
                            PROJEKTE
                        </p>
                        <h1
                            className="text-3xl md:text-4xl font-bold mb-6"
                            style={{ color: "#092C4C", lineHeight: "1.3" }}
                        >
                            Ausgewählte Arbeiten
                        </h1>
                        <p
                            className="text-lg max-w-2xl"
                            style={{ color: "#6b7280", lineHeight: "1.8" }}
                        >
                            Hier zeige ich eine Auswahl meiner bisherigen Arbeiten.
                            Es sind Projekte, bei denen ich Ideen konsequent umgesetzt
                            und dabei viel gelernt habe. Nicht alles ist perfekt, aber
                            jedes Projekt steht für einen Schritt in meiner Entwicklung.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Projects */}
            <section className="pb-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                                className="rounded-2xl overflow-hidden transition-shadow duration-200 hover:shadow-md"
                                style={{ border: "1px solid #e5e7eb" }}
                            >
                                {/* Placeholder Image */}
                                <div
                                    className="w-full h-48"
                                    style={{ backgroundColor: "#d1d5db" }}
                                />

                                {/* Content */}
                                <div className="p-6">
                                    <h3
                                        className="text-lg font-bold mb-2"
                                        style={{ color: "#092C4C" }}
                                    >
                                        {project.title}
                                    </h3>
                                    <p
                                        className="text-sm mb-4"
                                        style={{ color: "#6b7280", lineHeight: "1.6" }}
                                    >
                                        {project.desc}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 rounded-md text-xs font-medium"
                                                style={{
                                                    backgroundColor: "#f3f4f6",
                                                    color: "#092C4C",
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        <button
                                            className="flex items-center gap-1.5 text-sm font-medium transition-colors hover:opacity-70"
                                            style={{ color: "#092C4C" }}
                                        >
                                            <ExternalLink size={14} />
                                            Ansehen
                                        </button>
                                        <button
                                            className="flex items-center gap-1.5 text-sm font-medium transition-colors hover:opacity-70"
                                            style={{ color: "#9ca3af" }}
                                        >
                                            <Github size={14} />
                                            Code
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Note */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-12 p-6 rounded-xl text-center"
                        style={{ backgroundColor: "#f9f9f9", border: "1px solid #e5e7eb" }}
                    >
                        <p className="text-sm" style={{ color: "#6b7280" }}>
                            Diese Projekte sind nur ein Ausschnitt.
                            Ich arbeite kontinuierlich an neuen Ideen und lerne dabei stetig dazu.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Kontakt */}
            <Kontakt />
        </div>
    );
}
