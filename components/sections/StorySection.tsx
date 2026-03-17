"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AnimatedText } from "../ui/AnimatedText";

export default function StorySection() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
  const textBlur = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      id="story"
      ref={containerRef}
      className="relative py-24 lg:py-40 px-6 lg:px-12 bg-coffee-950 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
        
        {/* Left: Text Content with Glassmorphism */}
        <motion.div 
          style={{ opacity: textOpacity, filter: textBlur }}
          className="lg:w-1/2 flex flex-col items-start z-20 glass-panel p-8 md:p-12 rounded-2xl relative"
        >
          {/* Subtle glow behind the panel */}
          <div className="absolute inset-0 bg-highlight-500/5 blur-3xl rounded-full z-[-1]" />
          
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-highlight-500 font-bold tracking-[0.2em] uppercase text-sm mb-6 flex items-center gap-4"
          >
            <span className="w-12 h-[1px] bg-highlight-500 shadow-glow"></span> Our Story
          </motion.span>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-cream-50 leading-tight mb-8 drop-shadow-xl">
            <AnimatedText text="A legacy of flavor, crafted with passion." highlight="passion." />
          </h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6 text-cream-50/80 text-lg md:text-xl font-light leading-relaxed drop-shadow-md"
          >
            <p>
              It began with a simple belief: coffee is more than just a drink. It&apos;s an experience, a science, and an art form. We travel the globe to source the finest ethically-grown beans.
            </p>
            <p>
              Every cup we serve is a testament to our dedication to quality, roasted to perfection in-house and brewed with meticulous precision by our artisan baristas.
            </p>
          </motion.div>
        </motion.div>

        {/* Right: Parallax Image with Deep Shadow */}
        <div className="lg:w-1/2 w-full h-[60vh] lg:h-[80vh] relative overflow-hidden rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] border border-latte-500/10">
          <motion.div
            style={{ y: imageY, scale: imageScale }}
            className="absolute inset-[-20%] w-[140%] h-[140%]"
          >
            {/* Rich vignette overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,10,0.8)_100%)] z-10 pointer-events-none" />
            <img 
              src="https://images.unsplash.com/photo-1495474472205-51f750c07c42?q=80&w=1500&auto=format&fit=crop"
              alt="Rich roasted coffee beans"
              className="w-full h-full object-cover transition-all duration-1000"
            />
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
