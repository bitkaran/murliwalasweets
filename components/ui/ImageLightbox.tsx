"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title: string;
  category?: string;
  alt?: string;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  isOpen,
  onClose,
  image,
  title,
  category,
  alt,
}) => {
  // Listen for ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      // Prevent body scrolling when lightbox is open
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[rgba(109,38,36,0.75)] backdrop-blur-xs cursor-pointer"
          onClick={onClose}
        >
          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, y: 15 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl bg-cream border border-accent/40 rounded-3xl overflow-hidden shadow-2xl cursor-default"
            onClick={(e) => e.stopPropagation()} // Prevent click-through closing
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-cream/90 border border-accent/20 text-primary hover:bg-accent/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors cursor-pointer"
              aria-label="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image Container */}
            <div className="relative w-full h-[250px] sm:h-[400px] md:h-[480px] bg-primary-dark/5">
              <Image
                src={image}
                alt={alt || title}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Footer Text area */}
            <div className="p-6 bg-cream text-charcoal border-t border-accent/20 space-y-1 font-outfit">
              {category && (
                <span className="text-[10px] sm:text-xs font-bold text-accent-light uppercase tracking-wider block">
                  {category}
                </span>
              )}
              <h3 className="text-lg sm:text-xl font-bold font-playfair text-primary-dark">
                {title}
              </h3>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageLightbox;
