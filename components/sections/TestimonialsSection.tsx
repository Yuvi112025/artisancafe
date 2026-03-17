"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "The best pour over I've had in the city. The attention to detail and knowledge of the staff is unparalleled.",
    name: "Sarah Jenkins",
    role: "Local Guide"
  },
  {
    id: 2,
    text: "A beautiful space that matches the quality of their espresso. I come here to write, and the atmosphere always inspires me.",
    name: "David Chen",
    role: "Author"
  },
  {
    id: 3,
    text: "Their signature blends are a revelation. Fast becoming my favorite morning ritual before heading into the studio.",
    name: "Mia Rossi",
    role: "Designer"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 lg:py-40 px-6 lg:px-12 bg-latte-500/10 border-t border-latte-500/10">
      <div className="max-w-4xl mx-auto text-center relative">
        <Quote className="w-16 h-16 text-highlight-500/30 mx-auto mb-10" />

        <div className="h-64 relative flex items-center justify-center">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full"
            >
              <h3 className="font-serif text-3xl md:text-4xl text-cream-50 leading-relaxed mb-8">
                &quot;{testimonials[currentIndex].text}&quot;
              </h3>
              <p className="text-highlight-500 font-bold uppercase tracking-widest text-sm">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-cream-50/50 text-xs mt-1">
                {testimonials[currentIndex].role}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-6 mt-12">
          <button 
            onClick={prev}
            className="p-3 border border-latte-500/50 rounded-full text-cream-50 hover:bg-highlight-500 hover:text-coffee-900 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "w-8 bg-highlight-500" : "bg-latte-500/50"
                }`}
              />
            ))}
          </div>

          <button 
            onClick={next}
            className="p-3 border border-latte-500/50 rounded-full text-cream-50 hover:bg-highlight-500 hover:text-coffee-900 transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
