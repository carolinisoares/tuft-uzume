import type { Metadata } from "next";
import { Anton, Archivo, Space_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";

const display = Anton({ subsets: ["latin"], weight: "400", variable: "--font-display" });
const body = Archivo({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body" });
const mono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: `${site.name} — Tapetes e tapeçarias autorais em tufting e punch needle`,
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    url: "https://tuftuzume.vercel.app",
    siteName: site.name,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${display.variable} ${body.variable} ${mono.variable} bg-ink font-body text-bone`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
