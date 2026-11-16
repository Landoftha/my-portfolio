import type { Metadata } from "next";
import { Geist, Geist_Mono, Kaushan_Script, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kaushanScript = Kaushan_Script({
  weight: "400",
  variable: "--font-brush",
  subsets: ["latin"],
});

const playfairSerif = Playfair_Display({
  variable: "--font-serif-jp",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thays Yohana Costa | Desenvolvedora Full Stack & Dados",
  description:
    "Portfólio de Thays Yohana Costa — Desenvolvedora Full Stack Júnior & Analista/Cientista de Dados (React, Next.js, TypeScript, Node.js, Python, Java Spring Boot, PostgreSQL, MongoDB, Docker & IA).",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${kaushanScript.variable} ${playfairSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
