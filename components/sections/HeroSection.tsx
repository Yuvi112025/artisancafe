"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Coffee } from "lucide-react";
import { useRef } from "react";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 0.2]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-coffee-950 border-b border-latte-500/20"
    >
      {/* Background Image/Overlay with Parallax Zoom */}
      <motion.div 
        style={{ scale: bgScale, opacity: bgOpacity }}
        className="absolute inset-0 z-0 origin-bottom"
      >
        <div className="absolute inset-0 bg-coffee-950/70 z-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-coffee-950/80 via-transparent to-coffee-950 z-10" />
        {/* Cinematic rich espresso shot */}
        <img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2000&auto=format&fit=crop"
          alt="Coffee brewing"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content with Scroll Fade & Parallax Shift */}
      <motion.div 
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto mt-16"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6 opacity-80"
        >
          <Coffee className="w-12 h-12 text-highlight-500 mx-auto drop-shadow-lg" strokeWidth={1.5} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-6xl md:text-8xl lg:text-9xl text-cream-50 font-bold tracking-tight mb-4 drop-shadow-2xl"
          style={{ textShadow: "0 10px 30px rgba(0,0,0,0.8)" }}
        >
          Brewed to
          <br />
          <span className="text-highlight-500 italic font-light">Perfection</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-2xl text-cream-50/90 font-sans tracking-wide mb-10 max-w-2xl drop-shadow-lg"
        >
          Experience the art of handcrafted coffee in an atmosphere designed for moments of pure serenity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="#menu"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-highlight-500 text-coffee-900 border border-transparent text-sm font-bold tracking-[0.2em] uppercase rounded-sm overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(200,162,124,0.4)]"
          >
            <span className="absolute inset-0 bg-cream-50 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0" />
            <span className="relative group-hover:text-coffee-900 transition-colors">
              Explore Menu
            </span>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ opacity: contentOpacity }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-cream-50/70 drop-shadow-md"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-highlight-500 to-transparent shadow-[0_0_10px_rgba(200,162,124,0.5)]"
        />
      </motion.div>
    </section>
  );
}
