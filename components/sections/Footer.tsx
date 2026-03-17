"use client";

import { motion } from "framer-motion";
import { Coffee, Instagram, Facebook, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-coffee-900 border-t border-latte-500/30 pt-20 pb-10 px-6 lg:px-12 relative overflow-hidden">
      {/* Decorative large background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.02] z-0">
        <span className="font-serif text-[25vw] font-bold leading-none text-white whitespace-nowrap">ARTISAN</span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <Coffee className="w-8 h-8 text-highlight-500 group-hover:text-cream-50 transition-colors" />
              <span className="font-serif text-3xl font-bold text-cream-50">
                Artisan
              </span>
            </Link>
            <p className="text-cream-50/60 font-light mb-8 max-w-sm">
              Crafting exceptional coffee experiences daily. A sanctuary for those who appreciate the finer things.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 border border-latte-500/50 rounded-full text-cream-50 hover:bg-highlight-500 hover:text-coffee-900 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 border border-latte-500/50 rounded-full text-cream-50 hover:bg-highlight-500 hover:text-coffee-900 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 border border-latte-500/50 rounded-full text-cream-50 hover:bg-highlight-500 hover:text-coffee-900 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-xl text-cream-50 mb-6">Explore</h4>
            <ul className="space-y-4">
              {['Our Story', 'Menu', 'Signature Experiences', 'Gallery', 'Reservations'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().split(' ')[0]}`} className="text-cream-50/60 hover:text-highlight-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xl text-cream-50 mb-6">Visit Us</h4>
            <ul className="space-y-4 text-cream-50/60 font-light">
              <li>123 Artisan Ave, Brew District</li>
              <li>Seattle, WA 98101</li>
              <li className="pt-4 text-highlight-500">hello@artisancafe.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-xl text-cream-50 mb-6">Hours</h4>
            <ul className="space-y-4 text-cream-50/60 font-light">
              <li className="flex justify-between border-b border-latte-500/30 pb-2">
                <span>Mon - Fri</span>
                <span>7:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-latte-500/30 pb-2">
                <span>Saturday</span>
                <span>8:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-latte-500/30 pb-2">
                <span>Sunday</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-latte-500/30 text-cream-50/40 text-sm">
          <p>© {new Date().getFullYear()} Artisan Café. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-cream-50 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cream-50 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
