'use client';

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function Hero({ data }) {
    const scrollToAbout = () => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
            style={{ backgroundColor: "#f5f5f5" }}
        >
            <div className="max-w-6xl mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="mb-6"
                        style={{
                            color: "#092C4C",
                            fontSize: "clamp(2.5rem, 5vw, 4rem)",
                            lineHeight: "1.2",
                            fontWeight: "700"
                        }}
                    >
                        {data.title.line1}
                        <br />
                        <span style={{ color: "#F2994A" }}>{data.title.highlight}</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-xl max-w-2xl mx-auto mb-12"
                        style={{ color: "#4f4f4f", lineHeight: "1.6" }}
                    >
                        {data.description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="flex gap-4 justify-center flex-wrap"
                    >
                        <button
                            onClick={scrollToAbout}
                            className="px-8 py-4 rounded-lg font-bold transition-all hover:shadow-lg"
                            style={{ backgroundColor: "#092C4C", color: "white" }}
                        >
                            {data.cta.secondary}
                        </button>
                        <button
                            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                            className="px-8 py-4 rounded-lg font-bold transition-all hover:shadow-lg"
                            style={{ backgroundColor: "#F2994A", color: "white" }}
                        >
                            {data.cta.primary}
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Decorative elements */}
            <motion.div
                animate={{
                    rotate: [0, 360],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute top-20 right-20 w-32 h-32 rounded-lg opacity-10"
                style={{ backgroundColor: "#092C4C" }}
            />
            <motion.div
                animate={{
                    rotate: [360, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute bottom-20 left-20 w-24 h-24 rounded-lg opacity-10"
                style={{ backgroundColor: "#F2994A" }}
            />

            {/* Scroll indicator */}
            <motion.button
                onClick={scrollToAbout}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                style={{ color: "#092C4C" }}
            >
                <ChevronDown size={32} />
            </motion.button>
        </section>
    );
}
