"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/data";

export const WhatsAppFAB: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Show initially after 2.5s even if not scrolled
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2500);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          initial={{ scale: 0, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0, opacity: 0, y: 50 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-whatsapp text-white shadow-xl hover:brightness-110 transition-all duration-300 group flex items-center justify-center cursor-pointer"
          aria-label="Order on WhatsApp"
        >
          {/* Pulsing ring background */}
          <span className="absolute inset-0 rounded-full bg-whatsapp/50 animate-ping -z-10" />
          
          <MessageSquare className="w-6 h-6 fill-white text-whatsapp" />
          
          {/* Hover label */}
          <span className="absolute right-14 bg-primary-dark/95 backdrop-blur-sm text-cream text-xs font-semibold px-3 py-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg border border-accent/30 font-outfit">
            Order on WhatsApp
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
};
export default WhatsAppFAB;
