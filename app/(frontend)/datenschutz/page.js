'use client';

import { motion } from "framer-motion";
import { useTheme } from "@/app/context/ThemeContext";
import { useLanguage } from "@/app/context/LanguageContext";
import { Footer } from "@/app/components/Footer";

export default function DatenschutzPage() {
    const { colors } = useTheme();
    const { language } = useLanguage();

    const content = language === 'de' ? {
        title: 'Datenschutzerklärung',
        badge: 'RECHTLICHE HINWEISE',
        sections: [
            {
                title: '1. Allgemeine Hinweise',
                content: 'Der Schutz Ihrer persönlichen Daten ist mir wichtig. Diese Website behandelt personenbezogene Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften der Schweiz.'
            },
            {
                title: '2. Verantwortliche Person',
                content: 'Kevin Rechsteiner\nSchulstrasse 5\nE-Mail: kevin.rechsteiner@bluewin.ch'
            },
            {
                title: '3. Erhebung und Verarbeitung von Daten',
                content: 'Beim Besuch dieser Website können automatisch technische Daten erfasst werden (z. B. IP-Adresse, Browser, Uhrzeit des Zugriffs). Diese Daten dienen der technischen Bereitstellung und Sicherheit der Website.'
            },
            {
                title: '4. Kontaktaufnahme',
                content: 'Wenn Sie mich per E-Mail kontaktieren, werden Ihre Angaben zur Bearbeitung der Anfrage gespeichert. Diese Daten gebe ich nicht ohne Ihre Einwilligung weiter.'
            },
            {
                title: '5. Verwendung von Cookies',
                content: 'Diese Website kann Cookies verwenden, um die Benutzerfreundlichkeit zu verbessern. Sie können Ihren Browser so einstellen, dass Sie über Cookies informiert werden oder diese deaktivieren.'
            },
            {
                title: '6. Externe Dienste',
                content: 'Falls externe Dienste (z. B. Hosting, Schriftarten, APIs) verwendet werden, können diese Daten erfassen. Es gelten die Datenschutzbestimmungen der jeweiligen Anbieter.'
            },
            {
                title: '7. Ihre Rechte',
                content: 'Sie haben das Recht auf Auskunft, Berichtigung und Löschung Ihrer gespeicherten Daten, soweit dem keine gesetzliche Aufbewahrungspflicht entgegensteht.'
            },
            {
                title: '8. Änderungen',
                content: 'Ich behalte mir vor, diese Datenschutzerklärung jederzeit anzupassen.'
            }
        ],
        updated: 'Stand: März 2026'
    } : {
        title: 'Privacy Policy',
        badge: 'LEGAL NOTICE',
        sections: [
            {
                title: '1. General Information',
                content: 'The protection of your personal data is important to me. This website handles personal data confidentially and in accordance with Swiss data protection laws.'
            },
            {
                title: '2. Responsible Person',
                content: 'Kevin Rechsteiner\nSchoolstrasse 5\nEmail: kevin.rechsteiner@bluewin.ch'
            },
            {
                title: '3. Data Collection and Processing',
                content: 'When visiting this website, technical data may be automatically collected (e.g. IP address, browser, time of access). This data is used for technical provision and security of the website.'
            },
            {
                title: '4. Contact',
                content: 'If you contact me by email, your information will be stored to process your request. I will not pass on this data without your consent.'
            },
            {
                title: '5. Use of Cookies',
                content: 'This website may use cookies to improve user-friendliness. You can set your browser to inform you about cookies or disable them.'
            },
            {
                title: '6. External Services',
                content: 'If external services (e.g. hosting, fonts, APIs) are used, they may collect data. The data protection regulations of the respective providers apply.'
            },
            {
                title: '7. Your Rights',
                content: 'You have the right to information, correction and deletion of your stored data, insofar as no legal retention obligation prevents this.'
            },
            {
                title: '8. Changes',
                content: 'I reserve the right to modify this privacy policy at any time.'
            }
        ],
        updated: 'Updated: March 2026'
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen transition-colors duration-300"
            style={{ backgroundColor: colors.bg }}
        >
            <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
                <div className="max-w-4xl mx-auto">
                    <div>
                        <p
                            className="font-semibold mb-3 text-xs sm:text-sm tracking-widest transition-colors duration-300"
                            style={{ color: colors.accent }}
                        >
                            {content.badge}
                        </p>
                        <h1
                            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 transition-colors duration-300"
                            style={{ color: colors.text, lineHeight: "1.3" }}
                        >
                            {content.title}
                        </h1>
                    </div>
                </div>
            </section>

            <section className="pb-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-8">
                        {content.sections.map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="p-6 sm:p-8 rounded-xl transition-colors duration-300"
                                style={{
                                    backgroundColor: colors.card,
                                    border: `1px solid ${colors.border}`
                                }}
                            >
                                <h2
                                    className="text-lg sm:text-xl font-bold mb-4 transition-colors duration-300"
                                    style={{ color: colors.text }}
                                >
                                    {section.title}
                                </h2>
                                <p
                                    className="text-base transition-colors duration-300 whitespace-pre-wrap"
                                    style={{ color: colors.textSecondary, lineHeight: "1.8" }}
                                >
                                    {section.content}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mt-12 text-center"
                    >
                        <p
                            className="text-sm transition-colors duration-300"
                            style={{ color: colors.textSecondary }}
                        >
                            {content.updated}
                        </p>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </motion.div>
    );
}

