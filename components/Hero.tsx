"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MessageSquare, MapPin } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/data";
import Button from "./ui/Button";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Image with Dark Crimson Vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1601356616077-695728ecf769?q=80&w=1600&auto=format&fit=crop"
          alt="Murliwala Sweets Premium Mithai"
          fill
          priority
          className="object-cover object-center scale-105 filter brightness-[0.25]"
        />
        {/* Decorative Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-primary-dark/80" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/50" />
      </div>

      {/* Subtle Floating Decorative Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
        {/* Saffron Petal 1 */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 45, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[25%] left-[10%] w-6 h-6 border-l border-t border-accent/20 rounded-full opacity-40"
        />
        {/* Gold Particle 2 */}
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, 10, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[30%] right-[15%] w-4 h-4 rounded-full bg-accent/15 filter blur-xs"
        />
      </div>

      {/* Hero Content Box */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-cream">
        {/* Small Traditional Welcome Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 border border-accent/30 backdrop-blur-xs text-xs md:text-sm font-semibold tracking-wider text-accent-light uppercase mb-6 font-outfit"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Authentic Rajasthani Taste
        </motion.div>

        {/* Primary Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight leading-none mb-4 font-playfair drop-shadow-md text-white"
        >
          Murliwala <span className="gold-gradient-text">Sweets</span>
        </motion.h1>

        {/* Tagline / Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl font-light text-cream/90 font-outfit leading-relaxed mb-10"
        >
          {BUSINESS_INFO.tagline}
        </motion.p>

        {/* Actions Row */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
        >
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button
              variant="gold"
              size="lg"
              className="w-full sm:w-auto text-primary-dark"
              icon={<MessageSquare className="w-5 h-5" />}
              iconPosition="left"
            >
              Order on WhatsApp
            </Button>
          </a>

          <a href={BUSINESS_INFO.phoneCallUrl} className="w-full sm:w-auto">
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto border border-cream/35 hover:bg-cream/10"
              icon={<Phone className="w-5 h-5 text-accent-light" />}
              iconPosition="left"
            >
              Call Now
            </Button>
          </a>

          <a
            href={BUSINESS_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button
              variant="glass"
              size="lg"
              className="w-full sm:w-auto text-cream border-cream/25 hover:bg-white/10"
              icon={<MapPin className="w-5 h-5 text-accent-light" />}
              iconPosition="left"
            >
              Get Directions
            </Button>
          </a>
        </motion.div>

        {/* Local Landmark Clue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 text-xs sm:text-sm font-medium tracking-wide text-cream/70 font-outfit"
        >
          📍 Located opposite Kamal Heights, Fauz Ka Mohalla, Jhunjhunu
        </motion.div>
      </div>

      {/* Decorative Bottom Wave Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cream to-transparent pointer-events-none" />
    </section>
  );
};
export default Hero;
