"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Sparkles } from "lucide-react";
import { MENU_ITEMS, BUSINESS_INFO } from "@/lib/data";
import Button from "./ui/Button";

type CategoryFilter = 'sweets' | 'snacks' | 'namkeen' | 'festive';

export const MenuShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CategoryFilter>("sweets");

  const categories: { label: string; value: CategoryFilter }[] = [
    { label: "Sweets (मीठा)", value: "sweets" },
    { label: "Breakfast & Snacks (नाश्ता)", value: "snacks" },
    { label: "Namkeen & Farsan (नमकीन)", value: "namkeen" },
    { label: "Festive Specials", value: "festive" },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section id="menu" className="relative py-20 md:py-28 bg-cream border-t border-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-accent font-bold tracking-widest text-sm uppercase block font-outfit">
            Explore Flavors
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary font-playfair leading-tight">
            Our Full House Menu
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto" />
          <p className="text-charcoal/70 font-outfit text-sm sm:text-base">
            From traditional milk-based sweets to crispy morning savouries, find all your cravings here. WhatsApp us to order.
          </p>
        </div>

        {/* Categories Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-primary-dark/5 border border-accent/15 max-w-full">
            {categories.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`relative px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold tracking-wide font-outfit transition-all duration-300 cursor-pointer ${
                  activeTab === tab.value
                    ? "text-cream shadow-sm"
                    : "text-primary hover:text-primary-dark hover:bg-primary-dark/5"
                }`}
              >
                {activeTab === tab.value && (
                  <motion.div
                    layoutId="activeMenuTab"
                    className="absolute inset-0 crimson-gradient-bg rounded-xl -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const whatsappMsg = encodeURIComponent(
                `Hello Murliwala Sweets, I want to order "${item.name}" from your website. Price listed: ${item.price || "N/A"}. Please guide me on delivery/pickup.`
              );
              const orderLink = `https://wa.me/919828357226?text=${whatsappMsg}`;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full bg-white/50 backdrop-blur-md rounded-2xl p-5 border border-accent/10 hover:border-accent/40 shadow-xs hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex gap-4 items-start">
                    
                    {/* Item Image thumbnail */}
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 border border-accent/10">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {item.isDesiGhee && (
                        <div className="absolute top-1 left-1 bg-accent/90 text-primary-dark rounded-md p-0.5 text-[8px] font-bold shadow-xs">
                          Ghee
                        </div>
                      )}
                    </div>

                    {/* Content text */}
                    <div className="flex-grow space-y-1">
                      <div className="flex items-start justify-between gap-1">
                        <div>
                          <h3 className="font-bold text-base md:text-lg text-primary font-playfair group-hover:text-accent transition-colors">
                            {item.name}
                          </h3>
                          {item.hindiName && (
                            <p className="text-xs text-charcoal/50 font-medium font-playfair">
                              {item.hindiName}
                            </p>
                          )}
                        </div>
                        {item.price && (
                          <span className="text-xs font-semibold text-accent border border-accent/20 px-2 py-0.5 rounded-md font-outfit whitespace-nowrap">
                            {item.price}
                          </span>
                        )}
                      </div>
                      
                      <p className="text-xs text-charcoal/70 leading-relaxed font-outfit line-clamp-3">
                        {item.description}
                      </p>
                    </div>

                  </div>

                  {/* WhatsApp Quick Order button */}
                  <div className="mt-4 pt-3 border-t border-accent/5 flex items-center justify-between gap-4">
                    <span className="text-[10px] text-charcoal/45 flex items-center gap-1 font-outfit font-medium">
                      {item.isDesiGhee && (
                        <>
                          <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
                          Prepared in Desi Ghee
                        </>
                      )}
                    </span>
                    <a
                      href={orderLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-semibold text-primary hover:text-accent font-outfit transition-colors shrink-0"
                    >
                      <MessageSquare className="w-3.5 h-3.5 mr-1 text-whatsapp animate-bounce" />
                      Order Now
                    </a>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Disclaimer / Notice */}
        <div className="mt-12 text-center text-xs text-charcoal/50 font-outfit">
          * Prices are indicative and subject to seasonal change. Please confirm rates via phone or WhatsApp before ordering.
        </div>

      </div>
    </section>
  );
};
export default MenuShowcase;
