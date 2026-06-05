"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Eye } from "lucide-react";
import { GALLERY_ITEMS, GalleryItem } from "@/lib/data";
import ImageLightbox from "./ui/ImageLightbox";

type GalleryFilter = "all" | "sweets" | "snacks" | "festive" | "shop";

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filterTabs: { label: string; value: GalleryFilter }[] = [
    { label: "All Photos", value: "all" },
    { label: "Sweets", value: "sweets" },
    { label: "Snacks", value: "snacks" },
    { label: "Festive & Gifting", value: "festive" },
    { label: "Shop Front", value: "shop" },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === "all") return true;
    return item.category === activeFilter;
  });

  return (
    <section id="gallery" className="relative py-20 md:py-28 bg-cream-dark/25 festive-bg-pattern border-t border-b border-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-accent font-bold tracking-widest text-sm uppercase block font-outfit">
            Visual Tour
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary font-playfair leading-tight">
            Our Kitchen & Creations
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto" />
          <p className="text-charcoal/70 font-outfit text-sm sm:text-base">
            Take a look at our daily preparations, hot boiling milk, fresh deep fried snacks, and seasonal gift trays.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-bold tracking-wide font-outfit transition-all duration-300 cursor-pointer border ${
                activeFilter === tab.value
                  ? "bg-primary text-ivory border-primary shadow-sm"
                  : "bg-ivory text-primary border-accent/35 hover:bg-accent/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                tabIndex={0}
                onClick={() => setSelectedItem(item)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedItem(item);
                  }
                }}
                className="break-inside-avoid relative rounded-2xl overflow-hidden shadow-md border border-accent/30 group aspect-auto bg-ivory cursor-pointer outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
              >
                {/* Image element */}
                <div className="relative overflow-hidden w-full h-[240px] sm:h-[320px]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary-dark/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
                    <div className="p-2 w-fit rounded-full bg-accent/20 text-accent mb-3">
                      <Eye className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] text-accent font-bold uppercase tracking-wider font-outfit">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold text-white font-playfair mt-0.5">
                      {item.title}
                    </h3>
                  </div>
                  
                  {/* Subtle Gradient Shadow (Normal state) */}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/45 to-transparent pointer-events-none group-hover:opacity-0 transition-opacity duration-300" />
                  
                  {/* Label (Normal state) */}
                  <div className="absolute bottom-4 left-4 z-10 group-hover:opacity-0 transition-opacity duration-200">
                    <span className="text-xs font-semibold text-ivory font-outfit drop-shadow-sm bg-black/40 px-2 py-0.5 rounded">
                      {item.title}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Supplementary Image Info (PHASE 4 Instruction implementation) */}
        <div className="mt-8 text-center text-xs text-charcoal/45 font-outfit">
          * Images are high quality representations of our actual products. Feel free to visit our counter to view today&apos;s fresh catalog!
        </div>

      </div>
      <ImageLightbox
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        image={selectedItem?.image || ""}
        title={selectedItem?.title || ""}
        category={selectedItem?.category}
        alt={selectedItem?.alt}
      />
    </section>
  );
};
export default Gallery;
