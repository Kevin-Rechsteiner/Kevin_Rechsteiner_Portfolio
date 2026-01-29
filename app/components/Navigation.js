'use client';

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
    const [activeSection, setActiveSection] = useState("hero");
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";

    const sections = [
        { id: "hero", label: "Start" },
        { id: "about", label: "Über mich" },
        { id: "skills", label: "Kompetenzen" },
        { id: "projects", label: "Projekte" },
        { id: "growth", label: "Lernweg" },
        { id: "closing", label: "Kontakt" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Only track active sections on homepage
            if (!isHome) return;

            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isHome]);

    const scrollToSection = (sectionId) => {
        if (!isHome) {
            window.location.href = `/#${sectionId}`;
            return;
        }
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="font-bold text-xl" style={{ color: "#092C4C" }}>
                    Kevin<span style={{ color: "#F2994A" }}>.dev</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {/* Internal Page Links (only show on Home) */}
                    {isHome ? (
                        sections.slice(1).map((section) => (
                            <button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className="relative py-2 font-medium transition-colors text-sm"
                                style={{
                                    color: activeSection === section.id ? "#092C4C" : "#828282",
                                }}
                            >
                                {section.label}
                                {activeSection === section.id && (
                                    <motion.div
                                        layoutId="activeSection"
                                        className="absolute bottom-0 left-0 right-0 h-0.5"
                                        style={{ backgroundColor: "#F2994A" }}
                                    />
                                )}
                            </button>
                        ))
                    ) : (
                        <Link href="/" className="font-medium text-sm text-[#828282] hover:text-[#092C4C]">
                            ← Zurück zum Portfolio
                        </Link>
                    )}

                    {/* External Blog Link */}
                    <Link
                        href="/blog"
                        className={`font-medium text-sm transition-colors ${pathname.startsWith('/blog') ? 'text-[#092C4C]' : 'text-[#828282] hover:text-[#092C4C]'
                            }`}
                    >
                        Blog
                    </Link>
                </div>

                {/* Mobile Menu Button (Simple Placeholder for now) */}
                <div className="md:hidden">
                    <Link href="/blog" className="text-sm font-bold" style={{ color: "#F2994A" }}>
                        Blog
                    </Link>
                </div>
            </div>
        </motion.nav>
    );
}
