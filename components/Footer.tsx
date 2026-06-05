"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/data";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    links: false,
    contact: false,
    area: false,
  });

  const toggle = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <footer className="relative bg-primary-dark text-cream/90 pt-10 pb-8 border-t border-accent/25 overflow-hidden">
      {/* Subtle traditional design grid overlay */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#F5B041_1px,transparent_0)] bg-[size:20px_20px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 pb-8 border-b border-white/10">
          
          {/* Brand Box */}
          <div className="border-b border-white/10 md:border-none pb-4 md:pb-0 space-y-3">
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-wide font-playfair text-white">
                MURLIWALA
              </span>
              <span className="text-[10px] font-semibold tracking-widest font-outfit uppercase text-accent-light -mt-1">
                Sweets & Snacks
              </span>
            </div>
            <p className="text-xs text-cream/65 font-outfit leading-relaxed">
              Crafting traditional Rajasthani milk sweets, fresh breakfast savouries, and custom celebratory gift boxes with pure ingredients and trust in Jhunjhunu.
            </p>
          </div>

          {/* Quick Links Map */}
          <div className="border-b border-white/10 md:border-none py-2 md:py-0 font-outfit">
            <button
              onClick={() => toggle("links")}
              className="flex justify-between items-center w-full text-left md:pointer-events-none focus:outline-none cursor-pointer"
            >
              <h4 className="text-xs font-bold text-accent-light uppercase tracking-wider">
                Quick Links
              </h4>
              <span className="md:hidden text-accent-light text-lg font-bold">
                {openSections.links ? "−" : "+"}
              </span>
            </button>
            <ul className={`${openSections.links ? "block" : "hidden"} md:block space-y-2 text-xs mt-3 md:mt-4`}>
              <li>
                <Link href="/" className="hover:text-accent-light transition-colors rounded outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent-light transition-colors rounded outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark">Our Story</Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-accent-light transition-colors rounded outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark">Menu Catalog</Link>
              </li>
              <li>
                <Link href="/bulk-orders" className="hover:text-accent-light transition-colors rounded outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark">Bulk Gifting</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-accent-light transition-colors rounded outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark">Photo Gallery</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent-light transition-colors rounded outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark">Visit Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="border-b border-white/10 md:border-none py-2 md:py-0 font-outfit">
            <button
              onClick={() => toggle("contact")}
              className="flex justify-between items-center w-full text-left md:pointer-events-none focus:outline-none cursor-pointer"
            >
              <h4 className="text-xs font-bold text-accent-light uppercase tracking-wider">
                Get In Touch
              </h4>
              <span className="md:hidden text-accent-light text-lg font-bold">
                {openSections.contact ? "−" : "+"}
              </span>
            </button>
            <ul className={`${openSections.contact ? "block" : "hidden"} md:block space-y-3 text-xs mt-3 md:mt-4`}>
              <li className="flex gap-2">
                <Phone className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <a href={BUSINESS_INFO.phoneCallUrl} className="hover:text-accent-light transition-colors font-semibold rounded outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark px-0.5">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-2">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="text-cream/75 leading-relaxed text-xs">
                  Near Satyam Residency, Opposite Kamal Heights, Axis Bank Lane, Fauz Ka Mohalla, Jhunjhunu, Rajasthan - 333001
                </span>
              </li>
              <li className="flex gap-2">
                <Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="text-cream/75 text-xs">
                  {BUSINESS_INFO.operatingHours}
                </span>
              </li>
            </ul>
          </div>

          {/* Local Area SEO content */}
          <div className="py-2 md:py-0 font-outfit">
            <button
              onClick={() => toggle("area")}
              className="flex justify-between items-center w-full text-left md:pointer-events-none focus:outline-none cursor-pointer"
            >
              <h4 className="text-xs font-bold text-accent-light uppercase tracking-wider">
                Locality & Area
              </h4>
              <span className="md:hidden text-accent-light text-lg font-bold">
                {openSections.area ? "−" : "+"}
              </span>
            </button>
            <p className={`${openSections.area ? "block" : "hidden"} md:block text-xs text-cream/65 leading-relaxed mt-3 md:mt-4`}>
              We proudly serve Jhunjhunu: Fauz Ka Mohalla, Kamal Heights, Axis Bank Road, Satyam Residency, Mandawa Road, and surrounding Rajasthan areas. Custom sweet boxes & catering.
            </p>
          </div>

        </div>

        {/* Footer Bottom credits */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] sm:text-xs text-cream/50 font-outfit">
          <p>© {currentYear} Murliwala Sweets. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="/contact" className="hover:text-cream/80 transition-colors rounded outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark">Locate Shop</Link>
            <span>•</span>
            <a href={BUSINESS_INFO.whatsappUrl} className="hover:text-cream/80 transition-colors rounded outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark">WhatsApp Order</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
export default Footer;
