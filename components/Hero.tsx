"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MessageSquare, MapPin } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/data";
import Button from "./ui/Button";
import DecorativeDivider from "./ui/DecorativeDivider";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-primary-dark"
    >
      {/* Background Image with Dark Maroon Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/brand/hero-festive-sweets-spread.png"
          alt="Murliwala Sweets Premium Mithai Spread"
          fill
          priority
          className="object-cover object-[68%_center] md:object-center scale-100 filter brightness-[0.55] md:brightness-[0.35] contrast-[1.05]"
        />
        {/* Soft Traditional Maroon Gradient Overlay - Responsive Overlay */}
        <div className="absolute inset-0 bg-primary-dark/45 md:bg-primary-dark/70 z-1" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-black/30 z-2" />
      </div>

      {/* Subtle Floating Decorative Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
        {/* Saffron Star Motif 1 */}
        <motion.div
          animate={{
            y: [0, -12, 0],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[25%] left-[12%] text-accent/30 opacity-40"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z"/>
          </svg>
        </motion.div>
        {/* Gold Star Motif 2 */}
        <motion.div
          animate={{
            y: [0, 16, 0],
            x: [0, -8, 0],
            rotate: [0, -45, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[28%] right-[15%] text-accent/20 opacity-30"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z"/>
          </svg>
        </motion.div>
      </div>

      {/* Hero Content Box */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-cream">
        {/* Small Traditional Welcome Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/40 backdrop-blur-xs text-xs md:text-sm font-semibold tracking-wider text-accent uppercase mb-6 font-outfit"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent-light animate-pulse" />
          Authentic Rajasthani Taste
        </motion.div>

        {/* Primary Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-2 font-playfair text-white drop-shadow-lg"
        >
          Murliwala <span className="text-accent">Sweets</span>
        </motion.h1>

        {/* Gold Decorative Separator */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <DecorativeDivider color="#f6ad56" className="py-2" />
        </motion.div>

        {/* Tagline / Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl font-medium text-ivory font-outfit leading-relaxed mb-10"
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
          <Button
            variant="gold"
            size="lg"
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-primary-dark"
            icon={<MessageSquare className="w-5 h-5" />}
            iconPosition="left"
          >
            Order on WhatsApp
          </Button>

          <Button
            variant="primary"
            size="lg"
            href={BUSINESS_INFO.phoneCallUrl}
            className="w-full sm:w-auto"
            icon={<Phone className="w-5 h-5" />}
            iconPosition="left"
          >
            Call Now
          </Button>

          <Button
            variant="glass"
            size="lg"
            href={BUSINESS_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
            icon={<MapPin className="w-5 h-5" />}
            iconPosition="left"
          >
            Get Directions
          </Button>
        </motion.div>

        {/* Local Landmark Clue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 text-xs sm:text-sm font-semibold tracking-wide text-ivory/80 font-outfit"
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
