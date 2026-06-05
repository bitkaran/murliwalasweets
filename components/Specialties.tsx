"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Sparkles } from "lucide-react";
import { MENU_ITEMS, createWhatsAppOrderLink } from "@/lib/data";
import Card from "./ui/Card";
import Button from "./ui/Button";
import { FaWhatsapp } from "react-icons/fa";

export const Specialties: React.FC = () => {
  // Filter only special sweets
  const specialties = MENU_ITEMS.filter((item) => item.isSpecial && item.category === "sweets");

  return (
    <section
      id="specialties"
      className="relative py-20 md:py-28 bg-primary-dark/5 festive-bg-pattern overflow-hidden"
    >
      {/* Decorative background lights */}
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-accent/5 filter blur-3xl" />
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-primary/5 filter blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-accent font-bold tracking-widest text-sm uppercase block font-outfit">
            Owner&apos;s Recommendation
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary font-playfair leading-tight">
            Our Legendary Signature Sweets
          </h2>
          <div className="w-24 h-1 bg-accent rounded-full mx-auto" />
          <p className="text-charcoal/70 font-outfit text-sm sm:text-base leading-relaxed">
            These are the flavors that built our name in Jhunjhunu. Handcrafted with precision, daily fresh, and made using pure milk and rich ingredients.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialties.map((item) => {
            const itemOrderUrl = createWhatsAppOrderLink(item);

            return (
              <Card
                key={item.id}
                className="group flex flex-col h-full bg-ivory border border-accent/30 hover:border-accent shadow-md hover:shadow-lg transition-all duration-300"
              >
                {/* Image Container with Badges */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 pointer-events-none" />

                  {/* Top Row Badges */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                    {item.isDesiGhee && (
                      <span className="px-3 py-1 rounded-full bg-accent text-primary-dark font-bold text-[10px] sm:text-xs flex items-center gap-1 shadow-sm font-outfit">
                        <Sparkles className="w-3.5 h-3.5 fill-primary-dark/20" />
                        Desi Ghee
                      </span>
                    )}
                    <span className="ml-auto px-2.5 py-1 rounded-full bg-primary text-ivory font-bold text-[10px] uppercase tracking-wider font-outfit shadow-sm">
                      Signature
                    </span>
                  </div>

                  {/* Hindi Title inside image overlay bottom */}
                  {item.hindiName && (
                    <div className="absolute bottom-4 left-4 z-10">
                      <span className="text-xl md:text-2xl font-bold text-ivory font-playfair bg-primary-dark/85 px-3 py-0.5 rounded-lg border border-accent/20">
                        {item.hindiName}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content Box */}
                <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg md:text-xl font-bold text-primary font-playfair group-hover:text-accent transition-colors duration-200">
                        {item.name}
                      </h3>
                      {item.priceLabel && (
                        <span className="font-bold text-xs sm:text-sm text-primary bg-accent/20 border border-accent/40 px-2 py-0.5 rounded-lg font-outfit shrink-0 whitespace-nowrap">
                          {item.priceLabel}
                        </span>
                      )}
                    </div>
                    
                    <p className="text-xs sm:text-sm text-charcoal/80 font-outfit leading-relaxed min-h-[60px] line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Action buttons */}
                  <div className="pt-2">
                    <Button
                      variant="gold"
                      size="sm"
                      href={itemOrderUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-xs font-semibold py-2.5"
                      icon={<FaWhatsapp className="w-4 h-4" />}
                      iconPosition="left"
                    >
                      Order via WhatsApp
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Section bottom trust banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 bg-primary-dark text-cream rounded-3xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 border border-accent/35 shadow-xl"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-accent/20 text-accent-light">
              <Star className="w-6 h-6 fill-accent-light" />
            </div>
            <div>
              <h4 className="font-black text-lg md:text-xl font-playfair text-white">
                Festive sweets & Custom Platters
              </h4>
              <p className="text-xs sm:text-sm text-cream/70 font-outfit mt-0.5">
                Planning a family gathering, wedding, or festival celebration? We supply fresh custom sweet assortments.
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            href="/bulk-orders"
            className="shrink-0 w-full md:w-auto text-cream border-cream/35 hover:bg-cream/10"
          >
            Learn More
          </Button>
        </motion.div>

      </div>
    </section>
  );
};
export default Specialties;
