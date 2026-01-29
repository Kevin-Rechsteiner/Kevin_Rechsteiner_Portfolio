'use client';

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Eye, Sparkles } from "lucide-react";

export function About({ data }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    // Map the tags/features to icons
    const features = [
        {
            icon: <Lightbulb size={32} />,
            title: data.tags[0], // Kreativer Denkstil
        },
        {
            icon: <Eye size={32} />,
            title: data.tags[1], // Perspektivwechsel
        },
        {
            icon: <Sparkles size={32} />,
            title: data.tags[2], // Neugier
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
                        {data.title}
                    </h2>
                    <p className="text-xl max-w-3xl" style={{ color: "#4f4f4f", lineHeight: "1.8" }}>
                        {data.text}
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
                            <h3 className="font-bold text-xl" style={{ color: "#092C4C" }}>
                                {feature.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
