"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const images = [
  "https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=1200&auto=format&fit=crop", // Coffee closeup
  "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=1200&auto=format&fit=crop", // Interior
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop", // Barista
  "https://images.unsplash.com/photo-1495474472205-51f750c07c42?q=80&w=1200&auto=format&fit=crop", // Beans
  "https://images.unsplash.com/photo-1600093463592-8e36aeaff5e2?q=80&w=1200&auto=format&fit=crop", // Pastry
];

export default function GallerySection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Calculate distinct parallax offsets for different images
  const yFast = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const ySlow = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const yReverse = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section id="gallery" ref={containerRef} className="py-24 lg:py-40 bg-coffee-950 overflow-hidden relative border-b border-latte-500/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-20 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl lg:text-7xl text-cream-50 mb-6 drop-shadow-xl"
        >
          Visual Poetry
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-cream-50/70 max-w-2xl mx-auto text-lg drop-shadow-sm"
        >
          A glimpse into the daily rhythm of our café.
        </motion.p>
      </div>

      {/* Masonry-style Grid with Parallax */}
      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 md:gap-6 h-[70vh] md:h-[100vh] w-full px-4 md:px-8 max-w-screen-2xl mx-auto">
        {images.map((src, i) => {
          // Calculate span classes based on index to create a masonry look
          let spanClass = "";
          let parallaxStyle = {};
          
          if (i === 0) { spanClass = "col-span-2 row-span-2"; parallaxStyle = { y: ySlow }; }
          else if (i === 1) { spanClass = "col-span-1 row-span-1"; parallaxStyle = { y: yReverse }; }
          else if (i === 2) { spanClass = "col-span-1 row-span-2"; parallaxStyle = { y: yFast }; }
          else if (i === 3) { spanClass = "col-span-1 row-span-1"; parallaxStyle = { y: ySlow }; }
          else { spanClass = "col-span-1 row-span-1 hidden md:block"; parallaxStyle = { y: yFast }; } // hide 5th on small screens

          return (
            <motion.div
              key={i}
              style={parallaxStyle}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
              className={`relative group overflow-hidden ${spanClass} rounded-2xl shadow-[0_20px_40px_-5px_rgba(0,0,0,0.6)] border border-latte-500/10 bg-coffee-900`}
            >
              <div className="absolute inset-0 bg-coffee-950/40 group-hover:bg-transparent transition-colors duration-700 z-10 mix-blend-multiply" />
              
              {/* Inner glow border on hover */}
              <div className="absolute inset-0 border border-highlight-500/0 group-hover:border-highlight-500/30 rounded-2xl transition-colors duration-500 z-20 pointer-events-none" />
              
              <img
                src={src}
                alt={`Gallery image ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.15]"
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
