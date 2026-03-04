import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Navigation } from "@/app/components/Navigation";

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
  description: "Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: "#ffffff", color: "#4f4f4f", fontFamily: "var(--font-geist-sans), sans-serif" }}
      >
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
