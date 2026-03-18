'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun, Globe, ChevronDown } from "lucide-react";
import { useTheme } from "@/app/context/ThemeContext";
import { useLanguage } from "@/app/context/LanguageContext";

export function Navigation() {
    const [langMenuOpen, setLangMenuOpen] = useState(false);
    const langMenuRef = useRef(null);
    const pathname = usePathname();
    const { darkMode, toggleDarkMode, colors } = useTheme();
    const { language, setLanguage, t } = useLanguage();

    const navTextColor = colors.text;
    const navSecondaryColor = colors.textSecondary;
    const buttonBg = darkMode ? colors.bgSecondary : '#f3f4f6';


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
                setLangMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const navLinks = [
        { href: "/", label: language === 'de' ? 'Home' : 'Home' },
        { href: "/projekte", label: t.nav.projects },
        { href: "/kontakt", label: language === 'de' ? 'Kontakt' : 'Contact' },
    ];

    const languages = [
        { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
        { code: 'en', label: 'English', flag: '🇬🇧' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
            style={{
                backgroundColor: colors.card,
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            }}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                <Link
                    href="/"
                    className="font-bold text-lg tracking-tight flex-shrink-0 transition-colors duration-300"
                    style={{ color: navTextColor }}
                >
                    Kevin<span style={{ color: colors.accent }}> Rechsteiner</span>
                </Link>

                <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="relative px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium transition-all duration-200 rounded-lg"
                                style={{
                                    color: isActive ? navTextColor : navSecondaryColor,
                                    backgroundColor: isActive ? buttonBg : 'transparent',
                                }}
                            >
                                {link.label}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full"
                                        style={{ backgroundColor: colors.accent }}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </Link>
                        );
                    })}

                    <div
                        className="w-px h-6 mx-1 sm:mx-2 transition-colors duration-300"
                        style={{ backgroundColor: colors.border }}
                    />

                    <div className="relative" ref={langMenuRef}>
                        <button
                            onClick={() => setLangMenuOpen(!langMenuOpen)}
                            className="flex items-center justify-center gap-1.5 p-2.5 sm:px-3 sm:py-2 rounded-xl font-semibold transition-all duration-200 hover:scale-105"
                            style={{
                                color: navTextColor,
                                backgroundColor: buttonBg,
                            }}
                            aria-label="Select language"
                        >
                            <Globe size={20} strokeWidth={2.5} />
                            <span className="hidden sm:inline text-sm">{language.toUpperCase()}</span>
                            <ChevronDown size={14} className={`hidden sm:block transition-transform duration-200 ${langMenuOpen ? 'rotate-180' : ''}`} />
                        </button>

                        <AnimatePresence>
                            {langMenuOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                    transition={{ duration: 0.15 }}
                                    className="absolute top-full right-0 mt-2 w-40 rounded-xl shadow-lg overflow-hidden"
                                    style={{
                                        backgroundColor: colors.card,
                                        border: `1px solid ${colors.border}`,
                                    }}
                                >
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => {
                                                setLanguage(lang.code);
                                                setLangMenuOpen(false);
                                            }}
                                            className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors duration-150"
                                            style={{
                                                color: language === lang.code ? colors.accent : colors.text,
                                                backgroundColor: language === lang.code ? colors.bgSecondary : 'transparent',
                                            }}
                                        >
                                            <span className="text-lg">{lang.flag}</span>
                                            {lang.label}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <button
                        onClick={toggleDarkMode}
                        className="p-2.5 rounded-xl transition-all duration-300 hover:scale-105"
                        style={{
                            color: navTextColor,
                            backgroundColor: buttonBg,
                        }}
                        aria-label="Toggle dark mode"
                    >
                        <motion.div
                            key={darkMode ? 'sun' : 'moon'}
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {darkMode ? <Sun size={22} strokeWidth={2.5} /> : <Moon size={22} strokeWidth={2.5} />}
                        </motion.div>
                    </button>
                </div>
            </div>
        </motion.nav>
    );
}
