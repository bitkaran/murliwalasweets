"use client";

import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/data";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-primary-dark text-cream/90 pt-16 pb-8 border-t border-accent/25 overflow-hidden">
      {/* Subtle traditional design grid overlay */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#F5B041_1px,transparent_0)] bg-[size:20px_20px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Box */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-wide font-playfair text-white">
                MURLIWALA
              </span>
              <span className="text-xs font-semibold tracking-widest font-outfit uppercase text-accent-light -mt-1">
                Sweets & Snacks
              </span>
            </div>
            <p className="text-xs sm:text-sm text-cream/65 font-outfit leading-relaxed">
              Crafting traditional Rajasthani milk sweets, fresh breakfast savouries, and custom celebratory gift boxes with pure ingredients and trust in Jhunjhunu.
            </p>
          </div>

          {/* Quick Links Map */}
          <div className="space-y-4 font-outfit">
            <h4 className="text-sm font-bold text-accent-light uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-accent-light transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-accent-light transition-colors">Our Story</a>
              </li>
              <li>
                <a href="#specialties" className="hover:text-accent-light transition-colors">Specialties</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-accent-light transition-colors">Menu Catalog</a>
              </li>
              <li>
                <a href="#bulk-orders" className="hover:text-accent-light transition-colors">Bulk Gifting</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-accent-light transition-colors">Photo Gallery</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4 font-outfit">
            <h4 className="text-sm font-bold text-accent-light uppercase tracking-wider">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex gap-2">
                <Phone className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <a href={BUSINESS_INFO.phoneCallUrl} className="hover:text-accent-light transition-colors">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-2">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="text-cream/75 leading-relaxed">
                  Near Satyam Residency, Opposite Kamal Heights, Axis Bank Lane, Jhunjhunu, RJ
                </span>
              </li>
              <li className="flex gap-2">
                <Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="text-cream/75">
                  {BUSINESS_INFO.operatingHours}
                </span>
              </li>
            </ul>
          </div>

          {/* Local Area SEO content */}
          <div className="space-y-4 font-outfit">
            <h4 className="text-sm font-bold text-accent-light uppercase tracking-wider">
              Locality & Area
            </h4>
            <p className="text-xs text-cream/65 leading-relaxed">
              We proudly cater to all neighborhoods in Jhunjhunu including Fauz Ka Mohalla, Kamal Heights, Axis Bank Road, Satyam Residency, Mandawa Road, and nearby areas in Rajasthan. Freshly packed sweets and quick party snacks catering orders delivered across town.
            </p>
          </div>

        </div>

        {/* Footer Bottom credits */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/50 font-outfit">
          <p>© {currentYear} Murliwala Sweets. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#contact" className="hover:text-cream/80 transition-colors">Locate Shop</a>
            <span>•</span>
            <a href={BUSINESS_INFO.whatsappUrl} className="hover:text-cream/80 transition-colors">WhatsApp Order</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
export default Footer;
