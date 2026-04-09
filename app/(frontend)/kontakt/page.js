'use client';

import { motion } from "framer-motion";
import { useTheme } from "@/app/context/ThemeContext";
import { useLanguage } from "@/app/context/LanguageContext";
import { Mail, Github, Linkedin, ArrowUpRight, Send, CheckCircle, AlertCircle, Loader } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Footer } from "@/app/components/Footer";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;


export default function KontaktPage() {
    const { colors } = useTheme();
    const { t, language } = useLanguage();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle');
    const [formStartedAt] = useState(() => Date.now());
    const [errorText, setErrorText] = useState('');
    const [turnstileToken, setTurnstileToken] = useState('');
    const [turnstileReady, setTurnstileReady] = useState(false);
    const turnstileContainerRef = useRef(null);
    const turnstileWidgetIdRef = useRef(null);

    const contactLinks = [
        {
            icon: Mail,
            label: t.contact.email,
            value: "kevin.rechsteiner@bluewin.ch",
            href: "mailto:kevin.rechsteiner@bluewin.ch",
        },
        {
            icon: Github,
            label: t.contact.github,
            value: "github.com/kevin",
            href: "https://github.com",
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            value: "linkedin.com/in/kevin",
            href: "https://linkedin.com",
        },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorText('');
        if (!turnstileToken) {
            setStatus('error');
            setErrorText(language === 'de'
                ? 'Bitte bestätige zuerst das Sicherheitsfeld.'
                : 'Please complete the security check first.');
            return;
        }
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    website: '',
                    startedAt: formStartedAt,
                    turnstileToken,
                }),
            });
            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTurnstileToken('');
                if (window.turnstile && turnstileWidgetIdRef.current !== null) {
                    window.turnstile.reset(turnstileWidgetIdRef.current);
                }
            } else {
                const data = await res.json().catch(() => ({}));
                const errorCode = data?.error;
                const messageMapDe = {
                    rate_limited: 'Zu viele Anfragen in kurzer Zeit. Bitte versuche es in einigen Minuten erneut.',
                    blocked_content: 'Deine Nachricht enthält gesperrte Begriffe. Bitte formuliere sie neu.',
                    invalid_email: 'Bitte gib eine gültige E-Mail-Adresse ein.',
                    invalid_payload: 'Bitte überprüfe deine Eingaben und versuche es erneut.',
                    spam_detected: 'Nachricht wurde als Spam erkannt. Bitte versuche es erneut.',
                    turnstile_failed: 'Sicherheitsprüfung fehlgeschlagen. Bitte versuche es erneut.',
                    contact_unavailable: 'Kontaktformular ist aktuell nicht verfügbar. Bitte nutze vorübergehend E-Mail.',
                };
                const messageMapEn = {
                    rate_limited: 'Too many requests in a short time. Please try again in a few minutes.',
                    blocked_content: 'Your message contains blocked words. Please rephrase it.',
                    invalid_email: 'Please enter a valid email address.',
                    invalid_payload: 'Please check your input and try again.',
                    spam_detected: 'Message was flagged as spam. Please try again.',
                    turnstile_failed: 'Security check failed. Please try again.',
                    contact_unavailable: 'Contact form is currently unavailable. Please use email for now.',
                };
                const fallbackText = language === 'de'
                    ? 'Fehler beim Senden. Bitte versuche es erneut oder schreib mir direkt per E-Mail.'
                    : 'Error sending message. Please try again or contact me directly via email.';
                const selectedMap = language === 'de' ? messageMapDe : messageMapEn;
                setErrorText(selectedMap[errorCode] || fallbackText);
                setStatus('error');
                setTurnstileToken('');
                if (window.turnstile && turnstileWidgetIdRef.current !== null) {
                    window.turnstile.reset(turnstileWidgetIdRef.current);
                }
            }
        } catch {
            setErrorText(language === 'de'
                ? 'Netzwerkfehler. Bitte versuche es erneut oder kontaktiere mich direkt per E-Mail.'
                : 'Network error. Please try again or contact me directly via email.');
            setStatus('error');
            setTurnstileToken('');
            if (window.turnstile && turnstileWidgetIdRef.current !== null) {
                window.turnstile.reset(turnstileWidgetIdRef.current);
            }
        }
    };

    useEffect(() => {
        if (!TURNSTILE_SITE_KEY || turnstileReady) {
            return;
        }

        const existingScript = document.querySelector('script[data-turnstile-script="true"]');

        const renderTurnstile = () => {
            if (!window.turnstile || !turnstileContainerRef.current) {
                return;
            }

            if (turnstileWidgetIdRef.current !== null) {
                return;
            }

            turnstileWidgetIdRef.current = window.turnstile.render(turnstileContainerRef.current, {
                sitekey: TURNSTILE_SITE_KEY,
                callback: (token) => setTurnstileToken(token),
                'expired-callback': () => setTurnstileToken(''),
                'error-callback': () => setTurnstileToken(''),
                theme: colors.bg === '#ffffff' ? 'light' : 'dark',
            });
            setTurnstileReady(true);
        };

        if (!existingScript) {
            const script = document.createElement('script');
            script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
            script.async = true;
            script.defer = true;
            script.dataset.turnstileScript = 'true';
            script.onload = renderTurnstile;
            document.body.appendChild(script);
        } else if (window.turnstile) {
            renderTurnstile();
        } else {
            existingScript.addEventListener('load', renderTurnstile, { once: true });
        }
    }, [colors.bg, turnstileReady]);

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen transition-colors duration-300" 
            style={{ backgroundColor: colors.bg }}
        >
            <section className="pt-32 pb-16 px-3 sm:px-4 lg:px-6 transition-colors duration-300">
                <div className="max-w-6xl mx-auto">
                    <div>
                        <h1
                            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 transition-colors duration-300"
                            style={{ color: colors.text, lineHeight: "1.3" }}
                        >
                            {t.contact.title}
                        </h1>
                        <p
                            className="text-base sm:text-lg md:text-xl max-w-2xl transition-colors duration-300"
                            style={{ color: colors.textSecondary, lineHeight: "1.8" }}
                        >
                            {t.contact.description}
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 px-3 sm:px-4 lg:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2
                                className="text-xl font-bold tracking-tight mb-6"
                                style={{ color: colors.text }}
                            >
                                {language === 'de' ? 'Nachricht senden' : 'Send a message'}
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label
                                        className="block text-sm font-medium mb-2"
                                        style={{ color: colors.textSecondary }}
                                    >
                                        {language === 'de' ? 'Name' : 'Name'}
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        className="w-full px-4 py-3 rounded-lg outline-none transition-all focus:ring-2"
                                        style={{
                                            backgroundColor: colors.bgSecondary,
                                            border: `1px solid ${colors.border}`,
                                            color: colors.text,
                                        }}
                                        required
                                    />
                                </div>
                                <div className="pt-2">
                                    <div ref={turnstileContainerRef} />
                                    {!TURNSTILE_SITE_KEY && (
                                        <p className="mt-2 text-sm" style={{ color: colors.textSecondary }}>
                                            {language === 'de'
                                                ? 'Turnstile ist noch nicht konfiguriert.'
                                                : 'Turnstile is not configured yet.'}
                                        </p>
                                    )}
                                </div>
                                <input
                                    type="text"
                                    name="website"
                                    tabIndex={-1}
                                    autoComplete="off"
                                    className="hidden"
                                    aria-hidden="true"
                                />
                                <div>
                                    <label
                                        className="block text-sm font-medium mb-2"
                                        style={{ color: colors.textSecondary }}
                                    >
                                        {language === 'de' ? 'E-Mail' : 'Email'}
                                    </label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        className="w-full px-4 py-3 rounded-lg outline-none transition-all focus:ring-2"
                                        style={{
                                            backgroundColor: colors.bgSecondary,
                                            border: `1px solid ${colors.border}`,
                                            color: colors.text,
                                        }}
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        className="block text-sm font-medium mb-2"
                                        style={{ color: colors.textSecondary }}
                                    >
                                        {language === 'de' ? 'Nachricht' : 'Message'}
                                    </label>
                                    <textarea
                                        value={formData.message}
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-lg outline-none transition-all focus:ring-2 resize-none"
                                        style={{
                                            backgroundColor: colors.bgSecondary,
                                            border: `1px solid ${colors.border}`,
                                            color: colors.text,
                                        }}
                                        required
                                    />
                                </div>
                                
                                {status === 'success' && (
                                    <div
                                        className="flex items-center gap-3 p-4 rounded-xl"
                                        style={{ backgroundColor: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)' }}
                                    >
                                        <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                                        <p className="text-sm text-green-500 font-medium">
                                            {language === 'de'
                                                ? 'Nachricht gesendet! Ich melde mich bald.'
                                                : 'Message sent! I will get back to you soon.'}
                                        </p>
                                    </div>
                                )}

                                {status === 'error' && (
                                    <div
                                        className="flex items-center gap-3 p-4 rounded-xl"
                                        style={{ backgroundColor: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)' }}
                                    >
                                        <AlertCircle size={18} className="text-red-500 flex-shrink-0" />
                                        <p className="text-sm text-red-500 font-medium">
                                            {errorText || (language === 'de'
                                                ? 'Fehler beim Senden. Bitte versuche es erneut oder schreib mir direkt per E-Mail.'
                                                : 'Error sending message. Please try again or contact me directly via email.')}
                                        </p>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-opacity duration-200 hover:opacity-90 disabled:opacity-60"
                                    style={{
                                        backgroundColor: "#F2994A",
                                        color: "white",
                                        cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                                    }}
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <Loader size={18} className="animate-spin" />
                                            {language === 'de' ? 'Wird gesendet…' : 'Sending…'}
                                        </>
                                    ) : (
                                        <>
                                            <Send size={18} />
                                            {language === 'de' ? 'Absenden' : 'Send'}
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>

                        <div>
                            <h2
                                className="text-xl font-bold tracking-tight mb-6"
                                style={{ color: colors.text }}
                            >
                                {language === 'de' ? 'Direkt erreichen' : 'Direct contact'}
                            </h2>
                            <div className="space-y-4">
                                {contactLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.href}
                                        className="flex items-center gap-4 px-5 py-4 rounded-xl transition-opacity duration-200 hover:opacity-90 group"
                                        style={{
                                            backgroundColor: colors.card,
                                            border: `1px solid ${colors.border}`
                                        }}
                                    >
                                        <div
                                            className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                                            style={{
                                                backgroundColor: "rgba(242, 153, 74, 0.1)",
                                                color: "#F2994A",
                                            }}
                                        >
                                            {<link.icon size={24} />}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-xs font-medium" style={{ color: colors.textSecondary }}>
                                                {link.label}
                                            </p>
                                            <p className="text-sm font-medium truncate" style={{ color: colors.text }}>
                                                {link.value}
                                            </p>
                                        </div>
                                        <ArrowUpRight
                                            size={18}
                                            className="flex-shrink-0"
                                            style={{ color: colors.accent }}
                                        />
                                    </a>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </motion.div>
    );
}
