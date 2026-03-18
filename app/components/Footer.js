'use client';

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { useTheme } from "@/app/context/ThemeContext";
import { useLanguage } from "@/app/context/LanguageContext";

export function Footer() {
    const { colors } = useTheme();
    const { language } = useLanguage();

    const navLinks = [
        { href: "/impressum", label: language === 'de' ? 'Impressum' : 'Imprint' },
        { href: "/datenschutz", label: language === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy' },
    ];

    const socialLinks = [
        { href: "https://github.com", icon: Github, label: "GitHub" },
        { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
    ];

    return (
        <footer
            className="py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300"
            style={{
                backgroundColor: colors.bgSecondary,
                borderTop: `1px solid ${colors.border}`
            }}
        >
            <div className="max-w-6xl mx-auto">
                <div className="grid sm:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h4
                            className="font-semibold mb-4 text-sm uppercase tracking-wider transition-colors duration-300"
                            style={{ color: colors.text }}
                        >
                            {language === 'de' ? 'Navigation' : 'Navigation'}
                        </h4>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm transition-all duration-200 hover:opacity-70"
                                        style={{ color: colors.textSecondary }}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4
                            className="font-semibold mb-4 text-sm uppercase tracking-wider transition-colors duration-300"
                            style={{ color: colors.text }}
                        >
                            {language === 'de' ? 'Kontakt' : 'Contact'}
                        </h4>
                        <a
                            href="mailto:kevin.rechsteiner@bluewin.ch"
                            className="flex items-center gap-2 text-sm transition-all duration-200 hover:opacity-70"
                            style={{ color: colors.textSecondary }}
                        >
                            <Mail size={16} />
                            kevin.rechsteiner@bluewin.ch
                        </a>
                    </div>

                    <div>
                        <h4
                            className="font-semibold mb-4 text-sm uppercase tracking-wider transition-colors duration-300"
                            style={{ color: colors.text }}
                        >
                            Social
                        </h4>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg transition-all duration-200 hover:scale-110"
                                    style={{
                                        backgroundColor: colors.card,
                                        color: colors.text,
                                        border: `1px solid ${colors.border}`,
                                    }}
                                    aria-label={social.label}
                                >
                                    {<social.icon size={22} />}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div
                    className="pt-6 text-center transition-colors duration-300"
                    style={{ borderTop: `1px solid ${colors.border}` }}
                >
                    <p className="text-sm transition-colors duration-300" style={{ color: colors.textSecondary }}>
                        © {new Date().getFullYear()} Kevin Rechsteiner. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
