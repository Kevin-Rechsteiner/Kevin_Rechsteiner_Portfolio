'use client';

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, ArrowUpRight } from "lucide-react";

export function Kontakt() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const contactLinks = [
        {
            icon: <Mail size={20} />,
            label: "E-Mail",
            value: "kontakt@beispiel.de",
            href: "mailto:kontakt@beispiel.de",
        },
        {
            icon: <Github size={20} />,
            label: "GitHub",
            value: "github.com/kevin",
            href: "https://github.com",
        },
    ];

    return (
        <section ref={ref} className="py-20 px-6" style={{ backgroundColor: "#f9f9f9" }}>
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="mb-10"
                >
                    <p
                        className="font-semibold mb-3 text-xs tracking-widest"
                        style={{ color: "#F2994A" }}
                    >
                        KONTAKT
                    </p>
                    <h2
                        className="text-2xl md:text-3xl font-bold mb-4"
                        style={{ color: "#092C4C" }}
                    >
                        Interesse geweckt?
                    </h2>
                    <p className="max-w-xl" style={{ color: "#6b7280", lineHeight: "1.7" }}>
                        Ich bin offen für Gespräche über Praktika, Ausbildungsplätze
                        oder einfach einen fachlichen Austausch. Schreiben Sie mir gerne.
                    </p>
                </motion.div>

                <div className="flex flex-col sm:flex-row gap-4">
                    {contactLinks.map((link, index) => (
                        <motion.a
                            key={index}
                            href={link.href}
                            initial={{ opacity: 0, y: 10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4, delay: 0.15 + index * 0.1 }}
                            className="flex items-center gap-4 px-5 py-4 rounded-xl transition-shadow duration-200 hover:shadow-md group"
                            style={{ backgroundColor: "white", border: "1px solid #e5e7eb" }}
                        >
                            <div
                                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                                style={{
                                    backgroundColor: "rgba(242, 153, 74, 0.08)",
                                    color: "#092C4C",
                                }}
                            >
                                {link.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-xs font-medium" style={{ color: "#9ca3af" }}>
                                    {link.label}
                                </p>
                                <p className="text-sm font-medium truncate" style={{ color: "#092C4C" }}>
                                    {link.value}
                                </p>
                            </div>
                            <ArrowUpRight
                                size={16}
                                className="flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                style={{ color: "#F2994A" }}
                            />
                        </motion.a>
                    ))}
                </div>

                {/* Footer line */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-16 pt-6 text-center"
                    style={{ borderTop: "1px solid #e5e7eb" }}
                >
                    <p className="text-xs" style={{ color: "#9ca3af" }}>
                        © {new Date().getFullYear()} Kevin. Built with Next.js.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
