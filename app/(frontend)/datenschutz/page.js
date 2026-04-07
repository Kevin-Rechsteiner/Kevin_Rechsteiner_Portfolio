'use client';

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
                content: 'Kevin Rechsteiner\nSchulstrasse 5, 8603 Schwerzenbach\nE-Mail: kevin.rechsteiner@bluewin.ch'
            },
            {
                title: '3. Zugriffsdaten (Server-Logs)',
                content: 'Beim Besuch dieser Website werden automatisch Informationen durch den Hosting-Anbieter erfasst (z. B. IP-Adresse, Datum und Uhrzeit, Browsertyp). Diese Daten dienen der technischen Bereitstellung und Sicherheit der Website.'
            },
            {
                title: '4. Kontaktformular',
                content: 'Wenn Sie mir über das Kontaktformular Anfragen senden, werden Ihre Angaben (z. B. Name, E-Mail, Nachricht) zur Bearbeitung der Anfrage gespeichert. Diese Daten gebe ich nicht ohne Ihre Einwilligung weiter.'
            },
            {
                title: '5. Zweck der Datenverarbeitung',
                content: 'Die Verarbeitung Ihrer Daten erfolgt ausschließlich zur Bearbeitung Ihrer Anfrage sowie zur technischen Bereitstellung der Website.'
            },
            {
                title: '6. Speicherung der Daten',
                content: 'Ihre Daten werden nur so lange gespeichert, wie es zur Bearbeitung Ihrer Anfrage erforderlich ist.'
            },
            {
                title: '7. Weitergabe von Daten',
                content: 'Es erfolgt keine Weitergabe Ihrer Daten an Dritte, außer wenn dies gesetzlich erforderlich ist oder zur technischen Bereitstellung der Website notwendig ist (z. B. Hosting-Anbieter).'
            },
            {
                title: '8. Ihre Rechte',
                content: 'Sie haben das Recht auf Auskunft über die von mir gespeicherten personenbezogenen Daten sowie auf Berichtigung oder Löschung.'
            },
            {
                title: '9. Änderungen',
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
                content: 'Kevin Rechsteiner\nSchulstrasse 5, 8603 Schwerzenbach\nEmail: kevin.rechsteiner@bluewin.ch'
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
        <div
            className="min-h-screen transition-colors duration-300"
            style={{ backgroundColor: colors.bg }}
        >
            <section className="pt-32 pb-16 px-3 sm:px-4 lg:px-6 transition-colors duration-300">
                <div className="max-w-6xl mx-auto">
                    <div>
                        <h1
                            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 transition-colors duration-300"
                            style={{ color: colors.text, lineHeight: "1.3" }}
                        >
                            {content.title}
                        </h1>
                    </div>
                </div>
            </section>

            <section className="pb-32 px-3 sm:px-4 lg:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="prose prose-sm sm:prose-base max-w-none transition-colors duration-300"
                        style={{
                            color: colors.text
                        }}
                    >
                        {content.sections.map((section, index) => (
                            <div key={index} className="mb-8">
                                <h2
                                    className="text-lg sm:text-xl font-bold mb-3 transition-colors duration-300"
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
                            </div>
                        ))}

                        <div className="mt-12 pt-8" style={{ borderTop: `1px solid ${colors.border}` }}>
                            <p
                                className="text-sm transition-colors duration-300"
                                style={{ color: colors.textSecondary }}
                            >
                                {content.updated}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

