"use client";

import { motion } from "framer-motion";
import { MessageCircle, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", phone: "", date: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending logic (would connect to a route handler in reality)
    alert("Reservation request sent!");
    setFormData({ name: "", phone: "", date: "" });
  };

  const whatsappMessage = encodeURIComponent("Hello Artisan Cafe, I'd like to ask about...");

  return (
    <section id="contact" className="py-24 lg:py-40 px-6 lg:px-12 bg-coffee-900">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left: Info */}
        <div className="lg:w-1/2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl lg:text-7xl text-cream-50 mb-8"
          >
            Find Your Sanctuary
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-cream-50/70 text-lg mb-12"
          >
            Whether you want to reserve a quiet corner for a meeting, or simply drop by for your morning ritual. We&apos;re here.
          </motion.p>

          <div className="space-y-8 mb-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-start gap-4"
            >
              <div className="p-4 bg-latte-500/10 rounded-sm">
                <MapPin className="w-6 h-6 text-highlight-500" />
              </div>
              <div>
                <h4 className="font-serif text-xl text-cream-50 mb-1">Our Location</h4>
                <p className="text-cream-50/60 font-light">123 Artisan Ave, Brew District<br/>Seattle, WA 98101</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-start gap-4"
            >
              <div className="p-4 bg-latte-500/10 rounded-sm">
                <Clock className="w-6 h-6 text-highlight-500" />
              </div>
              <div>
                <h4 className="font-serif text-xl text-cream-50 mb-1">Opening Hours</h4>
                <p className="text-cream-50/60 font-light">Mon-Fri: 7AM - 8PM<br/>Weekends: 8AM - 9PM</p>
              </div>
            </motion.div>
          </div>

          <motion.a 
            href={`https://wa.me/15551234567?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-bold tracking-widest uppercase text-sm rounded-sm hover:bg-[#128C7E] transition-colors shadow-lg shadow-[#25D366]/20"
          >
            <MessageCircle className="w-5 h-5" /> Order on WhatsApp
          </motion.a>
        </div>

        {/* Right: Reservation Form */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 bg-latte-500/10 p-8 md:p-12 border border-latte-500/20 rounded-sm relative"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-highlight-500/10 blur-3xl rounded-full" />
          
          <h3 className="font-serif text-3xl text-cream-50 mb-2">Book a Table</h3>
          <p className="text-cream-50/60 mb-8 font-light">Reserve a spot for your next experience.</p>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div>
              <label htmlFor="name" className="block text-xs uppercase tracking-widest text-cream-50/70 mb-2">Full Name</label>
              <input 
                type="text" 
                id="name"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                required
                className="w-full bg-coffee-900 border border-latte-500/30 text-cream-50 px-4 py-3 rounded-sm focus:outline-none focus:border-highlight-500 transition-colors"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-cream-50/70 mb-2">Phone Number</label>
              <input 
                type="tel" 
                id="phone"
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
                required
                className="w-full bg-coffee-900 border border-latte-500/30 text-cream-50 px-4 py-3 rounded-sm focus:outline-none focus:border-highlight-500 transition-colors"
                placeholder="(555) 000-0000"
              />
            </div>

            <div>
              <label htmlFor="date" className="block text-xs uppercase tracking-widest text-cream-50/70 mb-2">Date & Time</label>
              <input 
                type="datetime-local" 
                id="date"
                value={formData.date}
                onChange={e => setFormData({...formData, date: e.target.value})}
                required
                className="w-full bg-coffee-900 border border-latte-500/30 text-cream-50 px-4 py-3 rounded-sm focus:outline-none focus:border-highlight-500 transition-colors"
              />
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-highlight-500 text-coffee-900 font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-cream-50 transition-colors mt-4"
            >
              Confirm Reservation
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
