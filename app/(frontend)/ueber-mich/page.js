'use client';

import { motion } from "framer-motion";
import { useTheme } from "@/app/context/ThemeContext";
import { useLanguage } from "@/app/context/LanguageContext";
import { Footer } from "@/app/components/Footer";

export default function UeberMichPage() {
    const { colors, darkMode } = useTheme();
    const { t, language } = useLanguage();

    const hobbies = [
        { id: 1, title: "Lorem Ipsum", desc: "Lorem ipsum dolor sit amet" },
        { id: 2, title: "Lorem Ipsum", desc: "Consectetur adipiscing elit" },
        { id: 3, title: "Lorem Ipsum", desc: "Sed do eiusmod tempor" },
        { id: 4, title: "Lorem Ipsum", desc: "Incididunt ut labore" },
    ];

    return (
        <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: colors.bg }}>
            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <p
                                className="font-semibold mb-3 text-xs sm:text-sm tracking-widest"
                                style={{ color: colors.accent }}
                            >
                                {t.hero.badge}
                            </p>
                            <h1
                                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 transition-colors duration-300"
                                style={{ color: colors.text, lineHeight: "1.3" }}
                            >
                                {t.about.title}
                            </h1>
                            <p
                                className="text-base sm:text-lg md:text-xl transition-colors duration-300"
                                style={{ color: colors.textSecondary, lineHeight: "1.8" }}
                            >
                                {t.about.text1}
                            </p>
                        </motion.div>

                        {/* Portrait */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="flex justify-center"
                        >
                            <div
                                className="w-64 h-80 rounded-2xl transition-colors duration-300"
                                style={{ backgroundColor: colors.bgSecondary, border: `1px solid ${colors.border}` }}
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About Text */}
            <section className="py-12 px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="max-w-3xl"
                    >
                        <h2
                            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 transition-colors duration-300"
                            style={{ color: colors.text }}
                        >
                            {language === 'de' ? 'Meine Geschichte' : 'My Story'}
                        </h2>
                        <p
                            className="mb-4 text-base sm:text-lg md:text-xl transition-colors duration-300"
                            style={{ color: colors.textSecondary, lineHeight: "1.8" }}
                        >
                            {t.about.text2}
                        </p>
                        <p
                            className="text-base sm:text-lg md:text-xl transition-colors duration-300"
                            style={{ color: colors.textSecondary, lineHeight: "1.8" }}
                        >
                            {t.about.text3}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Hobbies Section */}
            <section className="py-12 px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h2
                            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 transition-colors duration-300"
                            style={{ color: colors.text }}
                        >
                            {language === 'de' ? 'Hobbys & Interessen' : 'Hobbies & Interests'}
                        </h2>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                            {hobbies.map((hobby, index) => (
                                <motion.div
                                    key={hobby.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                                    className="rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer group"
                                    style={{
                                        backgroundColor: colors.card,
                                        border: `1px solid ${colors.border}`,
                                        boxShadow: darkMode ? 'none' : '0 4px 15px rgba(0,0,0,0.05)',
                                        aspectRatio: '1',
                                    }}
                                    whileHover={{
                                        scale: 1.03,
                                        y: -5,
                                        boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
                                    }}
                                >
                                    {/* Placeholder Image */}
                                    <div
                                        className="w-full h-1/2 transition-colors duration-300"
                                        style={{ backgroundColor: colors.bgSecondary }}
                                    />
                                    {/* Content */}
                                    <div className="p-4 h-1/2 flex flex-col justify-center">
                                        <h3
                                            className="font-semibold mb-1 text-sm sm:text-base transition-colors duration-300"
                                            style={{ color: colors.text }}
                                        >
                                            {hobby.title}
                                        </h3>
                                        <p
                                            className="text-xs sm:text-sm transition-colors duration-300 line-clamp-2"
                                            style={{ color: colors.textSecondary }}
                                        >
                                            {hobby.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}

