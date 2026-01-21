"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#news", label: "News" },
  { href: "#features", label: "Features" },
  { href: "#rankings", label: "Rankings" },
  { href: "#download", label: "Download" },
  { href: "#support", label: "Support" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--lycan-dark)]/95 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/icon.png"
            alt="Lycan"
            width={40}
            height={40}
            className="drop-shadow-lg"
          />
          <Image
            src="/images/name.png"
            alt="Lycan"
            width={100}
            height={30}
            className="hidden drop-shadow-lg sm:block"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-medium text-[var(--foreground)]/80 transition-colors hover:text-[var(--lycan-gold)]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            className="rounded-md px-4 py-2 text-sm font-medium text-[var(--lycan-gold)] transition-colors hover:bg-[var(--lycan-gold)]/10"
          >
            Login
          </button>
          <button
            type="button"
            className="rounded-md bg-gradient-to-r from-[var(--lycan-gold)] to-[var(--lycan-orange)] px-4 py-2 text-sm font-semibold text-[var(--lycan-dark)] transition-all hover:scale-105"
          >
            Register
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="text-[var(--foreground)] md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="bg-[var(--lycan-dark)]/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-2 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-4 py-3 text-[var(--foreground)]/80 transition-colors hover:bg-[var(--lycan-gold)]/10 hover:text-[var(--lycan-gold)]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex gap-2 border-t border-[var(--border)] pt-4">
              <button
                type="button"
                className="flex-1 rounded-md border border-[var(--lycan-gold)] py-2 text-[var(--lycan-gold)]"
              >
                Login
              </button>
              <button
                type="button"
                className="flex-1 rounded-md bg-gradient-to-r from-[var(--lycan-gold)] to-[var(--lycan-orange)] py-2 font-semibold text-[var(--lycan-dark)]"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
