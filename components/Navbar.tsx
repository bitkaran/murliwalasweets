"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/data";
import Button from "./ui/Button";
import { FaWhatsapp } from "react-icons/fa";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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
    { name: "Home", href: "/" },
    { name: "Our Story", href: "/about" },
    { name: "Menu", href: "/menu" },
    { name: "Bulk Orders", href: "/bulk-orders" },
    { name: "Gallery", href: "/gallery" },
    { name: "Visit Us", href: "/contact" },
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
            <Link
              href="/"
              className="flex items-center group cursor-pointer outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded-xl p-1"
            >
              <Image
                src="/images/brand/murliwalasweetslogo.png"
                alt="Murliwala Sweets Logo"
                width={160}
                height={50}
                className="w-36 md:w-44 h-auto shrink-0 pointer-events-none"
                priority
              />
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-xs font-bold tracking-widest uppercase transition-colors duration-200 relative py-2 px-1 group font-outfit rounded-md outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-cream ${
                      isActive ? "text-primary animate-pulse" : "text-charcoal hover:text-primary"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-accent transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
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
              className="lg:hidden p-2 rounded-full cursor-pointer transition-colors text-primary hover:bg-primary/5 outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
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
                  <div className="flex items-center">
                    <Image
                      src="/images/brand/murliwalasweetslogo.png"
                      alt="Murliwala Sweets Logo"
                      width={120}
                      height={38}
                      className="w-28 h-auto shrink-0 filter brightness-110"
                      priority
                    />
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 rounded-full hover:bg-white/10 transition-colors outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    aria-label="Close Menu"
                  >
                    <X className="w-5 h-5 text-cream" />
                  </button>
                </div>

                {/* Navigation Links list */}
                <nav className="flex flex-col space-y-4 py-8">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-lg font-medium tracking-wide uppercase transition-colors py-1.5 border-b border-cream/5 rounded-md px-1.5 outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                          isActive ? "text-accent font-bold" : "text-cream hover:text-accent-light"
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Call-to-actions at the bottom */}
              <div className="space-y-4 pt-6 border-t border-cream/15">
                <a
                  href={BUSINESS_INFO.phoneCallUrl}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark"
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
                  className="flex items-center gap-3 p-3 rounded-2xl bg-whatsapp/10 hover:bg-whatsapp/20 transition-colors outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark"
                >
                  <FaWhatsapp className="w-5 h-5 text-whatsapp" />
                  <div>
                    <p className="text-xs text-cream/60">Order on WhatsApp</p>
                    <p className="font-semibold text-sm text-whatsapp">Chat with Us</p>
                  </div>
                </a>

                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-2xl bg-accent/10 hover:bg-accent/20 transition-colors outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark"
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
