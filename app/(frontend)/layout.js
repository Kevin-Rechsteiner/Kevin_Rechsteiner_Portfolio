import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Navigation } from "@/app/components/Navigation";
import { Providers } from "@/app/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kevin Rechsteiner | Developer Portfolio",
  description: "Persönliches Portfolio von Kevin Rechsteiner. Frontend und Backend Entwickler. Skills in React, Next.js, JavaScript und mehr.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Kevin Rechsteiner | Developer Portfolio",
    description: "Persönliches Portfolio von Kevin Rechsteiner. Frontend und Backend Entwickler.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-300`}
        style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
      >
        <Providers>
          <Navigation />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
