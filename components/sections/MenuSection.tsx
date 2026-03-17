"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuCategories = ["All", "Coffee", "Desserts", "Specialty"];

const menuItems = [
  { id: 1, name: "Ethiopian Pour Over", price: "$6.50", category: "Coffee", description: "Bright, floral, with notes of jasmine and bergamot.", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800&auto=format&fit=crop" },
  { id: 2, name: "Velvet Flat White", price: "$5.00", category: "Coffee", description: "Smooth espresso layered with micro-foamed milk.", image: "https://images.unsplash.com/photo-1585409677390-e2652a9ee2b2?q=80&w=800&auto=format&fit=crop" },
  { id: 3, name: "Artisan Tiramisu", price: "$8.50", category: "Desserts", description: "Classic espresso-soaked ladyfingers with mascarpone.", image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=800&auto=format&fit=crop" },
  { id: 4, name: "Golden Latte", price: "$6.00", category: "Specialty", description: "Turmeric, ginger, honey, and almond milk.", image: "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?q=80&w=800&auto=format&fit=crop" },
  { id: 5, name: "Cold Brew Reserve", price: "$5.50", category: "Coffee", description: "Steeped for 24 hours, extra smooth, low acidity.", image: "https://images.unsplash.com/photo-1461023058943-07cb1ce8dbfe?q=80&w=800&auto=format&fit=crop" },
  { id: 6, name: "Matcha Chiffon", price: "$7.50", category: "Desserts", description: "Light, airy cake made with ceremonial grade matcha.", image: "https://images.unsplash.com/photo-1505253813959-192e23ecb8e1?q=80&w=800&auto=format&fit=crop" },
];

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = menuItems.filter(
    item => activeCategory === "All" || item.category === activeCategory
  );

  return (
    <section id="menu" className="py-24 lg:py-40 px-6 lg:px-12 bg-coffee-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream-50 mb-6 drop-shadow-xl"
          >
            Curated Offerings
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-cream-50/70 max-w-2xl mx-auto"
          >
            Discover our carefully selected menu, crafted to elevate your daily ritual.
          </motion.p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {menuCategories.map((cat, i) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full border transition-all duration-300 font-medium tracking-wide ${
                activeCategory === cat 
                  ? "bg-highlight-500 border-highlight-500 text-coffee-950 shadow-[0_10px_20px_rgba(200,162,124,0.3)] scale-105" 
                  : "border-latte-500/30 text-cream-50 hover:border-highlight-500/50 hover:bg-latte-500/10"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)] border border-latte-500/20 bg-coffee-900"
              >
                {/* Rich inner shadow/gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 flex-col via-coffee-950/40 to-transparent z-10 opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Content */}
                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="flex justify-between items-end mb-3">
                    <h3 className="font-serif text-2xl text-cream-50 drop-shadow-md">{item.name}</h3>
                    <span className="text-highlight-500 font-bold bg-coffee-950/80 px-3 py-1 rounded-full backdrop-blur-md text-sm shadow-lg">{item.price}</span>
                  </div>
                  
                  <div className="h-0 opacity-0 overflow-hidden transition-all duration-500 ease-out group-hover:h-20 group-hover:opacity-100 group-hover:mt-2">
                    <p className="text-cream-50/90 text-sm leading-relaxed mb-4 drop-shadow-sm">{item.description}</p>
                    <button className="text-xs uppercase tracking-[0.2em] text-highlight-500 font-bold border-b border-highlight-500/50 pb-1 hover:text-white hover:border-white transition-colors duration-300">
                      Quick Order
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
