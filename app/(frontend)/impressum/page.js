'use client';

import { motion } from "framer-motion";
import { useTheme } from "@/app/context/ThemeContext";
import { useLanguage } from "@/app/context/LanguageContext";
import { Footer } from "@/app/components/Footer";


export default function ImpressumPage() {
    const { colors } = useTheme();
    const { language } = useLanguage();

    return (
        <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: colors.bg }}>
            {/* Header */}
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
                            {language === 'de' ? 'Impressum' : 'Imprint'}
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Content */}
            <section className="pb-20 px-3 sm:px-4 lg:px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2
                                className="text-xl font-bold mb-4 transition-colors duration-300"
                                style={{ color: colors.text }}
                            >
                                {language === 'de' ? 'Angaben gemäß § 5 TMG' : 'Information according to § 5 TMG'}
                            </h2>
                            <div
                                className="p-6 rounded-xl transition-colors duration-300"
                                style={{ backgroundColor: colors.bgSecondary, border: `1px solid ${colors.border}` }}
                            >
                                <p className="transition-colors duration-300" style={{ color: colors.text }}>
                                    Kevin Rechsteiner<br />
                                    {language === 'de' ? 'Schweiz' : 'Switzerland'}
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2
                                className="text-xl font-bold mb-4 transition-colors duration-300"
                                style={{ color: colors.text }}
                            >
                                {language === 'de' ? 'Kontakt' : 'Contact'}
                            </h2>
                            <div
                                className="p-6 rounded-xl transition-colors duration-300"
                                style={{ backgroundColor: colors.bgSecondary, border: `1px solid ${colors.border}` }}
                            >
                                <p className="transition-colors duration-300" style={{ color: colors.text }}>
                                    E-Mail: kevin.rechsteiner@bluewin.ch
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2
                                className="text-xl font-bold mb-4 transition-colors duration-300"
                                style={{ color: colors.text }}
                            >
                                {language === 'de' ? 'Haftungsausschluss' : 'Disclaimer'}
                            </h2>
                            <div
                                className="p-6 rounded-xl transition-colors duration-300"
                                style={{ backgroundColor: colors.bgSecondary, border: `1px solid ${colors.border}` }}
                            >
                                <p className="text-sm transition-colors duration-300" style={{ color: colors.textSecondary, lineHeight: "1.7" }}>
                                    {language === 'de'
                                        ? 'Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.'
                                        : 'The contents of this website have been created with the greatest care. However, no guarantee can be given for the correctness, completeness and up-to-dateness of the content.'}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}

