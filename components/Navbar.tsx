"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
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
            ? "bg-cream/95 backdrop-blur-md py-3 shadow-md border-b border-accent/30"
            : "bg-cream/90 backdrop-blur-xs py-4 border-b border-accent/15"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Prominence */}
            <a href="#home" className="flex items-center gap-3 group cursor-pointer">
              <div className="relative overflow-hidden shrink-0">
                <Image
                  src="/images/murliwalasweetslogo.png"
                  alt="Murliwala Sweets Logo"
                  fill
                  className="object-cover"
                />
              </div>
              {/* <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-black tracking-wide font-playfair text-primary leading-tight">
                  MURLIWALA
                </span>
                <span className="text-[10px] font-bold tracking-widest font-outfit uppercase text-accent -mt-0.5">
                  Sweets & Snacks
                </span>
              </div> */}
            </a>

            {/* Desktop Navigation with Underline Animation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-bold tracking-widest uppercase text-charcoal hover:text-primary transition-colors duration-200 relative py-2 group font-outfit"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Call Now Action Button */}
            <div className="hidden sm:flex items-center space-x-3">
              <Button
                variant={scrolled ? "gold" : "primary"}
                size="sm"
                href={BUSINESS_INFO.phoneCallUrl}
                icon={<Phone className="w-4 h-4" />}
                iconPosition="left"
              >
                {BUSINESS_INFO.phoneDisplay}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-full cursor-pointer focus:outline-none transition-colors text-primary hover:bg-primary/5"
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
              className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-primary-dark p-6 text-cream shadow-2xl flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                {/* Header inside drawer */}
                <div className="flex items-center justify-between pb-6 border-b border-cream/15">
                  <div className="flex items-center gap-2">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-accent/40 shrink-0">
                      <Image
                        src="/images/murliwala-logo.jpg"
                        alt="Murliwala Sweets Logo"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg font-bold tracking-wide font-playfair text-cream">
                        MURLIWALA
                      </span>
                      <span className="text-[9px] font-semibold tracking-widest font-outfit uppercase text-accent-light -mt-1">
                        Sweets & Snacks
                      </span>
                    </div>
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
