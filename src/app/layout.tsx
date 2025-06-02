import type { Metadata } from "next";
import "./globals.css";
import { EB_Garamond, Source_Sans_3, Inter } from 'next/font/google'

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-garamond',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  weight: ['300', '400', '600', '700'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Merlin AI - AI Consulting & Implementation | merlinai.work",
  description: "Transform your business with intelligent AI solutions. Strategic consulting, implementation, and optimization services for modern companies.",
  // Favicon link will be added by Next.js automatically if placed in app/favicon.ico
  // or can be specified here for other formats/locations if needed.
  // For a PNG in public, it's often handled by placing favicon.png or icon.png in app directory
  // or by explicitly linking in the <head>.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ebGaramond.variable} ${sourceSans.variable} ${inter.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className="font-inter antialiased">
        {children}
      </body>
    </html>
  );
}
