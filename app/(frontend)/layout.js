import { Geist, Geist_Mono } from "next/font/google"; // Keep existing fonts
import "../globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kevin's Portfolio",
  description: "Personal Portfolio & Tech Blog",
};

import { Navigation } from "@/app/components/Navigation";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        style={{ backgroundColor: "#f5f5f5", color: "#4f4f4f" }}
      >
        <Navigation />

        {/* Main Content (grows to fill space) */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-100 py-8 mt-20">
          <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Kevin. Built with Next.js 16.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
