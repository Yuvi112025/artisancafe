"use client";

import { motion } from "framer-motion";
import { Leaf, Droplets, Sunset } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Organic Beans",
    description: "Sourced directly from sustainable farms across the globe, ensuring the purest flavors and ethical practices."
  },
  {
    icon: Droplets,
    title: "Handmade Brewing",
    description: "Every cup is individually brewed by our master baristas, paying attention to temperature, time, and technique."
  },
  {
    icon: Sunset,
    title: "Cozy Ambiance",
    description: "A meticulously designed space to foster creativity, relaxation, and memorable conversations."
  }
];

export default function SignatureSection() {
  return (
    <section id="experience" className="py-24 lg:py-32 px-6 lg:px-12 bg-latte-500/10 relative overflow-hidden border-y border-latte-500/10">
      
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(200,162,124,0.08),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-highlight-500 font-bold tracking-[0.2em] uppercase text-sm mb-6 flex items-center gap-4"
          >
            <span className="w-12 h-[1px] bg-highlight-500 shadow-glow"></span> Signature Experience
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-7xl text-cream-50 max-w-3xl leading-tight drop-shadow-xl"
          >
            The Artisan Difference
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
              className="relative group p-10 rounded-2xl transition-colors duration-500 glass-panel hover:bg-coffee-950/60 overflow-hidden"
            >
              {/* Subtle inner highlight */}
              <div className="absolute inset-0 bg-gradient-to-br from-highlight-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="w-16 h-16 rounded-full bg-coffee-950/80 shadow-glow flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 border border-latte-500/20">
                <feature.icon className="w-7 h-7 text-highlight-500" />
              </div>
              <h3 className="font-serif text-3xl text-cream-50 mb-4 drop-shadow-md">{feature.title}</h3>
              <p className="text-cream-50/70 leading-relaxed font-light drop-shadow-sm">{feature.description}</p>
              
              {/* Hover line effect */}
              <div className="absolute bottom-0 left-0 h-[3px] bg-highlight-500 w-0 group-hover:w-full transition-all duration-700 ease-out shadow-glow" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
