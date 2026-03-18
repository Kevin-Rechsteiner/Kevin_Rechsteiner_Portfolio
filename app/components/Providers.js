'use client';

import { ThemeProvider } from '@/app/context/ThemeContext';
import { LanguageProvider } from '@/app/context/LanguageContext';

export function Providers({ children }) {
    return (
        <ThemeProvider>
            <LanguageProvider>
                {children}
            </LanguageProvider>
        </ThemeProvider>
    );
}

