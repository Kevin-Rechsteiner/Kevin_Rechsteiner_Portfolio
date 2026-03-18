'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
    de: {
        nav: {
            about: 'Über mich',
            projects: 'Projekte',
        },
        hero: {
            badge: 'ÜBER MICH',
            title: 'Schüler & angehender Informatiker',
            description: 'Ich bin fasziniert davon, wie Technologie Probleme lösen kann. Als Schüler und angehender Informatiker verbinde ich Neugier mit ersten fundierten Kenntnissen und dem Willen, jeden Tag etwas Neues zu lernen.',
        },
        about: {
            title: 'Wer ich bin',
            text1: 'Ich bin Schüler und angehender Informatiker mit einer Leidenschaft für digitale Technologien. Was mich auszeichnet, ist nicht nur mein technisches Interesse, sondern meine Art zu denken: Ich versuche stets, Dinge aus verschiedenen Perspektiven zu betrachten.',
            text2: 'Diese Offenheit hilft mir, mich in andere hineinzuversetzen und kreative Lösungsansätze zu finden, die über den Standard hinausgehen.',
            text3: 'Ich stehe am Anfang meiner beruflichen Laufbahn und sehe das als Chance. Mein Ziel ist es nicht, sofort alles zu wissen, sondern stetig zu wachsen. Jeder Fehler ist für mich eine Lektion, jede Herausforderung eine Möglichkeit, besser zu werden.',
        },
        skills: {
            badge: 'Kompetenzen & Fähigkeiten',
            description: 'Meine Ausbildung ist noch in vollem Gange, aber ich habe mir bereits ein solides Fundament erarbeitet. Besonders wichtig ist mir dabei nicht nur das "Wie", sondern auch das "Warum".',
            technical: 'Technisch',
            personal: 'Persönlich',
            softSkills: ['Teamfähigkeit', 'Lernbereitschaft', 'Analytisches Denken', 'Perspektivwechsel'],
        },
        projects: {
            badge: 'PROJEKTE',
            title: 'Ausgewählte Arbeiten',
            description: 'Hier zeige ich eine Auswahl meiner bisherigen Arbeiten. Es sind Projekte, bei denen ich Ideen konsequent umgesetzt und dabei viel gelernt habe. Nicht alles ist perfekt, aber jedes Projekt steht für einen Schritt in meiner Entwicklung.',
            view: 'Ansehen',
            code: 'Code',
            note: 'Diese Projekte sind nur ein Ausschnitt. Ich arbeite kontinuierlich an neuen Ideen und lerne dabei stetig dazu.',
            items: [
                {
                    title: 'E-Commerce Konzept',
                    desc: 'Ein Online-Shop Prototyp, entwickelt um Next.js und Routing-Konzepte zu verstehen.',
                    tags: ['Next.js', 'React', 'Tailwind'],
                    demo: '#',
                    github: '#',
                    comingSoon: false,
                },
                {
                    title: 'Task Manager',
                    desc: 'Eine kleine App zur Organisation von Schulaufgaben. Fokus lag auf Funktionalität und sauberem Code.',
                    tags: ['React', 'JavaScript'],
                    demo: '#',
                    github: '#',
                    comingSoon: false,
                },
                {
                    title: 'Mein nächstes Projekt',
                    desc: 'Diesen Platz fülle ich bald mit meinem nächsten Projekt. Ich arbeite kontinuierlich an neuen Ideen.',
                    tags: [],
                    demo: null,
                    github: null,
                    comingSoon: true,
                },
            ],
        },
        contact: {
            badge: 'KONTAKT',
            title: 'Interesse geweckt?',
            description: 'Ich bin offen für Gespräche über Praktika, Ausbildungsplätze oder einfach einen fachlichen Austausch. Schreiben Sie mir gerne.',
            email: 'E-Mail',
            github: 'GitHub',
        },
    },
    en: {
        nav: {
            about: 'About Me',
            projects: 'Projects',
        },
        hero: {
            badge: 'ABOUT ME',
            title: 'Student & Aspiring Developer',
            description: 'I am fascinated by how technology can solve problems. As a student and aspiring developer, I combine curiosity with foundational knowledge and the will to learn something new every day.',
        },
        about: {
            title: 'Who I Am',
            text1: 'I am a student and aspiring developer with a passion for digital technologies. What sets me apart is not just my technical interest, but my way of thinking: I always try to look at things from different perspectives.',
            text2: 'This openness helps me to empathize with others and find creative solutions that go beyond the standard.',
            text3: 'I am at the beginning of my professional career and see this as an opportunity. My goal is not to know everything immediately, but to grow steadily. Every mistake is a lesson for me, every challenge an opportunity to improve.',
        },
        skills: {
            badge: 'Skills & Competencies',
            description: 'My education is still in full swing, but I have already built a solid foundation. What matters most to me is not just the "how", but also the "why".',
            technical: 'Technical',
            personal: 'Personal',
            softSkills: ['Teamwork', 'Willingness to Learn', 'Analytical Thinking', 'Perspective Shift'],
        },
        projects: {
            badge: 'PROJECTS',
            title: 'Selected Works',
            description: 'Here I show a selection of my previous work. These are projects where I consistently implemented ideas and learned a lot in the process. Not everything is perfect, but each project represents a step in my development.',
            view: 'View',
            code: 'Code',
            note: 'These projects are just a sample. I continuously work on new ideas and keep learning.',
            items: [
                {
                    title: 'E-Commerce Concept',
                    desc: 'An online shop prototype, developed to understand Next.js and routing concepts.',
                    tags: ['Next.js', 'React', 'Tailwind'],
                    demo: '#',
                    github: '#',
                    comingSoon: false,
                },
                {
                    title: 'Task Manager',
                    desc: 'A small app for organizing school tasks. Focus was on functionality and clean code.',
                    tags: ['React', 'JavaScript'],
                    demo: '#',
                    github: '#',
                    comingSoon: false,
                },
                {
                    title: 'My Next Project',
                    desc: 'I will fill this spot soon with my next project. I am continuously working on new ideas.',
                    tags: [],
                    demo: null,
                    github: null,
                    comingSoon: true,
                },
            ],
        },
        contact: {
            badge: 'CONTACT',
            title: 'Interested?',
            description: 'I am open to conversations about internships, apprenticeships, or simply a professional exchange. Feel free to reach out.',
            email: 'Email',
            github: 'GitHub',
        },
    },
};

export function LanguageProvider({ children }) {
    const [language, setLanguageState] = useState('de');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const savedLang = localStorage.getItem('language');
        if (savedLang && (savedLang === 'de' || savedLang === 'en')) {
            queueMicrotask(() => setLanguageState(savedLang));
        }
        queueMicrotask(() => setMounted(true));
    }, []);

    useEffect(() => {
        if (mounted) {
            localStorage.setItem('language', language);
        }
    }, [language, mounted]);

    const setLanguage = (lang) => {
        setLanguageState(lang);
    };

    const toggleLanguage = () => {
        setLanguageState(language === 'de' ? 'en' : 'de');
    };

    const t = translations[language];

    if (!mounted) {
        return null;
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}

