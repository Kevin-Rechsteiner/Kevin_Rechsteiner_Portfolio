'use client';

import { motion } from "framer-motion";
import { useTheme } from "@/app/context/ThemeContext";
import { useLanguage } from "@/app/context/LanguageContext";
import { Footer } from "@/app/components/Footer";


export default function ImpressumPage() {
    const { colors } = useTheme();
    const { language } = useLanguage();

    const content = language === 'de'
        ? {
            title: 'Impressum',
            sections: [
                {
                    title: 'Angaben',
                    text: 'Kevin Rechsteiner\nSchweiz'
                },
                {
                    title: 'Kontakt',
                    text: 'E-Mail: kevin.rechsteiner@bluewin.ch'
                },
                {
                    title: 'Haftungsausschluss',
                    text: 'Die Inhalte dieser Website wurden mit grosster Sorgfalt erstellt. Fur die Richtigkeit, Vollstandigkeit und Aktualitat der Inhalte kann jedoch keine Gewahr ubernommen werden.'
                },
            ]
        }
        : {
            title: 'Imprint',
            sections: [
                {
                    title: 'Information',
                    text: 'Kevin Rechsteiner\nSwitzerland'
                },
                {
                    title: 'Contact',
                    text: 'Email: kevin.rechsteiner@bluewin.ch'
                },
                {
                    title: 'Disclaimer',
                    text: 'The content of this website was created with great care. However, no guarantee can be given for correctness, completeness, or timeliness.'
                },
            ]
        };

    return (
        <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: colors.bg }}>
            <section className="pt-32 pb-16 px-3 sm:px-4 lg:px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1
                            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 transition-colors duration-300"
                            style={{ color: colors.text, lineHeight: "1.3" }}
                        >
                            {content.title}
                        </h1>
                    </motion.div>
                </div>
            </section>

            <section className="pb-20 px-3 sm:px-4 lg:px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="space-y-8"
                    >
                        {content.sections.map((section) => (
                            <div key={section.title}>
                                <h2
                                    className="text-xl font-bold mb-3 transition-colors duration-300"
                                    style={{ color: colors.text }}
                                >
                                    {section.title}
                                </h2>
                                <p
                                    className="text-base whitespace-pre-wrap transition-colors duration-300"
                                    style={{ color: colors.textSecondary, lineHeight: '1.8' }}
                                >
                                    {section.text}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

