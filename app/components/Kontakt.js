'use client';

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, ArrowUpRight } from "lucide-react";
import { useTheme } from "@/app/context/ThemeContext";
import { useLanguage } from "@/app/context/LanguageContext";

export function Kontakt() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const { colors } = useTheme();
    const { t } = useLanguage();

    const contactLinks = [
        {
            icon: Mail,
            label: t.contact.email,
            value: "kevin.rechsteiner@bluewin.ch",
            href: "mailto:kevin.rechsteiner@bluewin.ch",
        },
        {
            icon: Github,
            label: t.contact.github,
            value: "github.com/Kevin-Rechsteiner",
            href: "https://github.com/Kevin-Rechsteiner",
        },
    ];

    return (
        <section ref={ref} className="py-20 px-6" style={{ backgroundColor: colors.bgSecondary }}>
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="mb-10"
                >
                    <h2
                        className="text-2xl md:text-3xl font-bold mb-4"
                        style={{ color: colors.text }}
                    >
                        {t.contact.title}
                    </h2>
                    <p className="max-w-xl" style={{ color: colors.textSecondary, lineHeight: "1.7" }}>
                        {t.contact.description}
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
                            style={{ backgroundColor: colors.card, border: `1px solid ${colors.border}` }}
                        >
                            <div
                                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                                style={{
                                    backgroundColor: "rgba(242, 153, 74, 0.08)",
                                    color: colors.text,
                                }}
                            >
                                <link.icon size={20} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-xs font-medium" style={{ color: colors.textSecondary }}>
                                    {link.label}
                                </p>
                                <p className="text-sm font-medium truncate" style={{ color: colors.text }}>
                                    {link.value}
                                </p>
                            </div>
                            <ArrowUpRight
                                size={16}
                                className="flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                style={{ color: colors.accent }}
                            />
                        </motion.a>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-16 pt-6 text-center"
                    style={{ borderTop: `1px solid ${colors.border}` }}
                >
                    <p className="text-xs" style={{ color: colors.textSecondary }}>
                        © {new Date().getFullYear()} Kevin. Built with Next.js.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
