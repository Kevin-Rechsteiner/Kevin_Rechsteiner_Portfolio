'use client';

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export function Projects({ data }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const [hoveredProject, setHoveredProject] = useState(null);

    // Enhance data items with visual properties (images from design)
    const projects = data.items.map((item, index) => ({
        ...item,
        // Cycle through placeholder images for variety
        image: [
            "https://images.unsplash.com/photo-1604781109199-ced99b89b0f6?auto=format&fit=crop&q=80&w=1080",
            "https://images.unsplash.com/photo-1627634771521-9754fe2bc49b?auto=format&fit=crop&q=80&w=1080",
            "https://images.unsplash.com/photo-1609619385076-36a873425636?auto=format&fit=crop&q=80&w=1080"
        ][index % 3]
    }));

    return (
        <section
            id="projects"
            ref={ref}
            className="min-h-screen flex items-center py-20 px-6"
            style={{ backgroundColor: "white" }}
        >
            <div className="max-w-6xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <p className="font-bold mb-4" style={{ color: "#F2994A", fontSize: "0.875rem", letterSpacing: "0.1em" }}>
                        PROJEKTE
                    </p>
                    <h2 className="mb-6" style={{ color: "#092C4C", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "700" }}>
                        {data.title}
                    </h2>
                    <p className="text-xl max-w-3xl mx-auto" style={{ color: "#4f4f4f", lineHeight: "1.8" }}>
                        {data.description}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                            onMouseEnter={() => setHoveredProject(index)}
                            onMouseLeave={() => setHoveredProject(null)}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl"
                            style={{
                                transform: hoveredProject === index ? "translateY(-8px)" : "translateY(0)",
                            }}
                        >
                            <div className="relative h-56 overflow-hidden bg-gray-200">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500"
                                    style={{
                                        transform: hoveredProject === index ? "scale(1.1)" : "scale(1)",
                                    }}
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3" style={{ color: "#092C4C" }}>
                                    {project.title}
                                </h3>
                                <p className="mb-4" style={{ color: "#4f4f4f", lineHeight: "1.6", fontSize: "0.875rem" }}>
                                    {project.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 rounded-lg text-xs font-medium"
                                            style={{ backgroundColor: "rgba(9, 44, 76, 0.1)", color: "#092C4C" }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <button
                                        className="flex items-center gap-2 text-sm font-medium transition-colors"
                                        style={{ color: "#092C4C" }}
                                    >
                                        <ExternalLink size={16} />
                                        Ansehen
                                    </button>
                                    <button
                                        className="flex items-center gap-2 text-sm font-medium transition-colors"
                                        style={{ color: "#828282" }}
                                    >
                                        <Github size={16} />
                                        Code
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-16 p-8 rounded-2xl text-center"
                    style={{ backgroundColor: "#f5f5f5" }}
                >
                    <h3 className="text-xl font-bold mb-3" style={{ color: "#092C4C" }}>
                        Mehr Projekte in Arbeit
                    </h3>
                    <p className="mb-6" style={{ color: "#4f4f4f", lineHeight: "1.6" }}>
                        Diese Projekte sind nur ein Ausschnitt. Ich arbeite kontinuierlich an neuen Ideen.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
