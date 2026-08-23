import type { Metadata } from "next";
import localFont from "next/font/local";
import { Archivo, Space_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";

// Bootzy TM — fonte de marca da Tuft Uzume, usada em títulos e destaques.
const display = localFont({
  src: [
    { path: "./fonts/BootzyTM.woff2", weight: "400", style: "normal" },
    { path: "./fonts/BootzyTM.woff", weight: "400", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
});
// Archivo segue como fonte complementar, para textos longos e legibilidade.
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
