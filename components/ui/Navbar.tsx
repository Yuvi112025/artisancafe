"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Coffee } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Story", href: "#story" },
    { name: "Menu", href: "#menu" },
    { name: "Experience", href: "#experience" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          isScrolled ? "bg-coffee-900/90 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <Coffee className="w-6 h-6 text-highlight-500 group-hover:text-cream-50 transition-colors" />
            <span className="font-serif text-2xl font-bold text-cream-50">
              Artisan
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm tracking-widest uppercase text-cream-50/70 hover:text-highlight-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#contact"
              className="px-5 py-2 border border-highlight-500 text-highlight-500 hover:bg-highlight-500 hover:text-coffee-900 transition-all rounded-sm uppercase text-xs tracking-widest font-semibold"
            >
              Reserve
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-cream-50 p-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-coffee-900 flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              className="absolute top-6 right-6 text-cream-50 p-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-4xl text-cream-50 hover:text-highlight-500 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 px-8 py-3 bg-highlight-500 text-coffee-900 transition-all rounded-sm uppercase text-sm tracking-widest font-bold"
              >
                Reserve Table
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
