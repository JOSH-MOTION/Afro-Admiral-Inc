"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/#about" },
    { name: "Our Services", href: "/services" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white transition-smooth">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative h-12 w-48 block transition-smooth hover:opacity-90">
          <Image
            src="/horizontal.png"
            alt="Afro Admiral Inc."
            fill
            sizes="192px"
            className="object-contain object-left"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-smooth ${isActive
                    ? "text-brand-primary"
                    : "text-brand-darker/70 hover:text-brand-primary"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-brand-primary rounded-full hover:bg-brand-dark transition-smooth shadow-md hover:shadow-lg shadow-brand-primary/20 hover:scale-[1.02] transform active:scale-[0.98]"
          >
            Get In Touch
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-brand-darker/70 hover:text-brand-primary hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-primary"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          {mobileMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 px-6 py-6 flex flex-col space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-brand-darker/80 hover:text-brand-primary py-2 border-b border-gray-50"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-semibold text-white bg-brand-primary rounded-full hover:bg-brand-dark transition-smooth shadow-md"
          >
            Get In Touch
          </Link>
        </div>
      )}
    </header>
  );
}
