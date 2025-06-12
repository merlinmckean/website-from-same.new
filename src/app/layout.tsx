import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css";
import { EB_Garamond, Source_Sans_3, Inter } from 'next/font/google';

const ebGaramond = EB_Garamond({ subsets: ['latin'], variable: '--font-garamond', weight: ['400','500','600','700'], display: 'swap' });
const sourceSans = Source_Sans_3({ subsets: ['latin'], variable: '--font-source-sans', weight: ['300','400','600','700'], display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: "Merlin AI - AI Consulting & Implementation | merlinai.work",
  description: "Transform your business with intelligent AI solutions...",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${ebGaramond.variable} ${sourceSans.variable} ${inter.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="font-inter antialiased">
        {/* Shared header on inner pages only */}
        <Header />
        {/* Page content */}
        {children}
      </body>
    </html>
  );
}