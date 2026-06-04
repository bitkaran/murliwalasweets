"use client";

import React from "react";
import { motion } from "framer-motion";

interface DecorativeDividerProps {
  className?: string;
  color?: string; // e.g. "#D4A548"
}

export const DecorativeDivider: React.FC<DecorativeDividerProps> = ({
  className = "",
  color = "#D4A548",
}) => {
  return (
    <div className={`flex items-center justify-center gap-4 py-6 ${className}`}>
      {/* Left side line */}
      <div className="h-[1.5px] flex-grow max-w-[100px] bg-gradient-to-r from-transparent to-accent" />
      
      {/* Central SVG Motif */}
      <motion.svg
        width="48"
        height="24"
        viewBox="0 0 48 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-accent shrink-0"
        initial={{ rotate: -15, scale: 0.8, opacity: 0 }}
        whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Diamond Center */}
        <rect x="20" y="8" width="8" height="8" rx="1" transform="rotate(45 24 12)" fill={color} />
        {/* Inner small dot */}
        <circle cx="24" cy="12" r="1.5" fill="#FFF9F0" />
        
        {/* Left wings */}
        <path d="M12 12C15.5 12 17 8 18 12C17 16 15.5 12 12 12Z" fill={color} opacity="0.8" />
        <circle cx="8" cy="12" r="2" fill={color} opacity="0.6" />
        <circle cx="2" cy="12" r="1" fill={color} opacity="0.4" />
        
        {/* Right wings */}
        <path d="M36 12C32.5 12 31 8 30 12C31 16 32.5 12 36 12Z" fill={color} opacity="0.8" />
        <circle cx="40" cy="12" r="2" fill={color} opacity="0.6" />
        <circle cx="46" cy="12" r="1" fill={color} opacity="0.4" />
      </motion.svg>

      {/* Right side line */}
      <div className="h-[1.5px] flex-grow max-w-[100px] bg-gradient-to-l from-transparent to-accent" />
    </div>
  );
};

export default DecorativeDivider;
