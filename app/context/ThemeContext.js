'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        queueMicrotask(() => {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'light') {
                setDarkMode(false);
            } else {
                setDarkMode(true);
            }
            setMounted(true);
        });
    }, []);

    useEffect(() => {
        if (mounted) {
            localStorage.setItem('theme', darkMode ? 'dark' : 'light');
        }
    }, [darkMode, mounted]);

    const toggleDarkMode = () => setDarkMode(!darkMode);

    const theme = {
        darkMode,
        toggleDarkMode,
        colors: darkMode ? {
            bg: '#0f172a',
            bgSecondary: '#1e293b',
            bgAccent: '#1e293b',
            text: '#f1f5f9',
            textSecondary: '#94a3b8',
            primary: '#092C4C',
            accent: '#F2994A',
            border: '#334155',
            card: '#1e293b',
            cardHover: '#334155',
        } : {
            bg: '#ffffff',
            bgSecondary: '#f8fafc',
            bgAccent: '#f1f5f9',
            text: '#1e293b',
            textSecondary: '#64748b',
            primary: '#092C4C',
            accent: '#F2994A',
            border: '#e2e8f0',
            card: '#ffffff',
            cardHover: '#f8fafc',
        }
    };

    if (!mounted) {
        return null;
    }

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}

