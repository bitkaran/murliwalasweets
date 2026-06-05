"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Search } from "lucide-react";
import { MENU_ITEMS, createWhatsAppOrderLink } from "@/lib/data";
import { FaWhatsapp } from "react-icons/fa";

type CategoryFilter = 'sweets' | 'snacks' | 'namkeen' | 'festive';

export const MenuShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CategoryFilter>("sweets");
  const [searchQuery, setSearchQuery] = useState("");

  const categories: { label: string; value: CategoryFilter }[] = [
    { label: "Sweets (मीठा)", value: "sweets" },
    { label: "Breakfast & Snacks (नाश्ता)", value: "snacks" },
    { label: "Namkeen & Farsan (नमकीन)", value: "namkeen" },
    { label: "Festive Specials", value: "festive" },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = item.category === activeTab;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.hindiName && item.hindiName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="relative py-12 md:py-20 bg-cream">
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
        <div className="flex justify-center mb-8 px-2">
          <div className="flex overflow-x-auto md:overflow-visible items-center justify-start md:justify-center gap-2 p-1.5 rounded-2xl bg-accent/10 border border-accent/25 max-w-full scrollbar-none scroll-smooth">
            {categories.map((tab) => {
              const isActive = activeTab === tab.value;
              return (
                <button
                  key={tab.value}
                  onClick={() => {
                    setActiveTab(tab.value);
                    setSearchQuery(""); // Clear search on tab switch
                  }}
                  className={`relative px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold tracking-wide font-outfit transition-all duration-300 cursor-pointer outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-cream whitespace-nowrap border z-0 ${
                    isActive
                      ? "text-cream border-primary shadow-[0_8px_24px_rgba(191,4,3,0.18)]"
                      : "text-charcoal border-transparent hover:bg-accent hover:text-charcoal hover:border-accent"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeMenuTab"
                      className="absolute inset-0 bg-primary rounded-xl z-0"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Search Input */}
        <div className="max-w-md mx-auto mb-12 relative px-2">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder={`Search in ${categories.find((c) => c.value === activeTab)?.label.split(" ")[0]}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-12 py-3 bg-ivory border border-accent/40 rounded-2xl text-charcoal placeholder-charcoal/40 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-cream font-outfit shadow-sm"
            />
            <Search className="absolute left-4 w-4 h-4 text-charcoal/40" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 text-charcoal/50 hover:text-primary text-xs font-bold font-outfit px-1.5 py-0.5 rounded outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Tab content grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.length === 0 ? (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full text-center py-16 space-y-3"
              >
                <p className="text-charcoal/50 font-outfit text-sm sm:text-base">No items found matching your search query.</p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-xs font-bold text-primary hover:underline font-outfit px-2 py-1 rounded outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
                >
                  Clear search query
                </button>
              </motion.div>
            ) : (
              filteredItems.map((item) => {
                const orderLink = createWhatsAppOrderLink(item);

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col h-full bg-ivory rounded-2xl p-5 border border-accent/25 hover:border-accent hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex gap-4 items-start">
                      
                      {/* Item Image thumbnail */}
                      <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 border border-accent/20">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {item.isDesiGhee && (
                          <div className="absolute top-1 left-1 bg-accent text-charcoal rounded-md px-1.5 py-0.5 text-[8px] font-bold shadow-xs">
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
                              <p className="text-xs text-charcoal/60 font-medium font-playfair">
                                {item.hindiName}
                              </p>
                            )}
                          </div>
                          {item.priceLabel && (
                            <span className="text-xs font-bold text-primary bg-accent/20 border border-accent/40 px-2 py-0.5 rounded-lg font-outfit whitespace-nowrap">
                              {item.priceLabel}
                            </span>
                          )}
                        </div>
                        
                        <p className="text-xs text-charcoal/80 leading-relaxed font-outfit line-clamp-3">
                          {item.description}
                        </p>
                      </div>

                    </div>

                    {/* WhatsApp Quick Order button */}
                    <div className="mt-4 pt-3 border-t border-accent/15 flex items-center justify-between gap-4">
                      <span className="text-[10px] text-charcoal/50 flex items-center gap-1 font-outfit font-medium">
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
                        className="inline-flex items-center text-xs font-bold text-primary hover:text-accent font-outfit transition-colors shrink-0 rounded-md outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-cream px-1"
                      >
                        <FaWhatsapp className="w-3.5 h-3.5 mr-1 text-whatsapp" />
                        Order Now
                      </a>
                    </div>

                  </motion.div>
                );
              })
            )}
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
