"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageSquare, MapPin } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/data";
import Button from "./ui/Button";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Our Story", href: "#about" },
    { name: "Specialties", href: "#specialties" },
    { name: "Menu", href: "#menu" },
    { name: "Bulk Orders", href: "#bulk-orders" },
    { name: "Gallery", href: "#gallery" },
    { name: "Visit Us", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass-nav py-3 shadow-lg"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex flex-col group cursor-pointer">
              <span className={`text-2xl md:text-3xl font-black tracking-wide font-playfair transition-colors duration-300 ${
                scrolled ? "text-cream" : "text-primary"
              }`}>
                MURLIWALA
              </span>
              <span className={`text-xs md:text-sm font-semibold tracking-widest font-outfit uppercase -mt-1 transition-colors duration-300 ${
                scrolled ? "text-accent-light" : "text-accent"
              }`}>
                Sweets & Snacks
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide uppercase transition-colors duration-200 hover:text-accent-light ${
                    scrolled ? "text-cream/90" : "text-primary-dark"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Call Now Action Button */}
            <div className="hidden sm:flex items-center space-x-3">
              <a href={BUSINESS_INFO.phoneCallUrl}>
                <Button
                  variant={scrolled ? "gold" : "primary"}
                  size="sm"
                  icon={<Phone className="w-4 h-4" />}
                  iconPosition="left"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-full cursor-pointer focus:outline-none transition-colors ${
                scrolled ? "text-cream hover:bg-white/10" : "text-primary hover:bg-primary/5"
              }`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] crimson-gradient-bg p-6 text-cream shadow-2xl flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                {/* Header inside drawer */}
                <div className="flex items-center justify-between pb-6 border-b border-cream/15">
                  <div className="flex flex-col">
                    <span className="text-xl font-bold tracking-wide font-playfair text-cream">
                      MURLIWALA
                    </span>
                    <span className="text-[10px] font-semibold tracking-widest font-outfit uppercase text-accent-light -mt-1">
                      Sweets & Snacks
                    </span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 rounded-full hover:bg-white/10 transition-colors"
                  >
                    <X className="w-5 h-5 text-cream" />
                  </button>
                </div>

                {/* Navigation Links list */}
                <nav className="flex flex-col space-y-4 py-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium tracking-wide uppercase hover:text-accent-light transition-colors py-1.5 border-b border-cream/5"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Call-to-actions at the bottom */}
              <div className="space-y-4 pt-6 border-t border-cream/15">
                <a
                  href={BUSINESS_INFO.phoneCallUrl}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-5 h-5 text-accent-light animate-pulse" />
                  <div>
                    <p className="text-xs text-cream/60">Call Now</p>
                    <p className="font-semibold text-sm">{BUSINESS_INFO.phoneDisplay}</p>
                  </div>
                </a>

                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-2xl bg-whatsapp/10 hover:bg-whatsapp/20 transition-colors"
                >
                  <MessageSquare className="w-5 h-5 text-whatsapp" />
                  <div>
                    <p className="text-xs text-cream/60">Order on WhatsApp</p>
                    <p className="font-semibold text-sm text-whatsapp">Chat with Us</p>
                  </div>
                </a>

                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-2xl bg-accent/10 hover:bg-accent/20 transition-colors"
                >
                  <MapPin className="w-5 h-5 text-accent-light" />
                  <div>
                    <p className="text-xs text-cream/60">Find Our Shop</p>
                    <p className="font-semibold text-xs text-cream/90 truncate max-w-[180px]">
                      Opposite Kamal Heights
                    </p>
                  </div>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Navbar;
