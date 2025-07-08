"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Don't render shared header on homepage
  if (isHome) return null;

  // Black & white logo for inner pages
  const logoSrc = "/blackAndWhiteFullLogo.png";

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between p-6 md:px-12 bg-white shadow">
      <Link href="/" className="flex items-center space-x-3">
        <img src={logoSrc} alt="Merlin AI Logo" className="h-8 w-auto" />
      </Link>
      <div className="flex items-center space-x-6 text-gray-900 text-base md:text-lg font-semibold">
        {/* <Link href="/services" className="hover:text-gray-700 transition-colors">Services</Link> */}
        <Link href="/about" className="hover:text-gray-700 transition-colors px-2">About</Link>
        {/* <Link href="/case-studies" className="hover:text-gray-700 transition-colors">Case Studies</Link> */}
        <Link href="/contact" className="hover:text-gray-700 transition-colors px-2">Contact</Link>
      </div>
    </nav>
  );
}