"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageSquare, Star, Sparkles } from "lucide-react";
import { MENU_ITEMS, BUSINESS_INFO } from "@/lib/data";
import Card from "./ui/Card";
import Button from "./ui/Button";

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
            Owner's Recommendation
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
          {specialties.map((item, index) => {
            const whatsappText = encodeURIComponent(
              `Hello Murliwala Sweets, I would like to order "${item.name}" (${item.price || "custom qty"}). Please confirm availability.`
            );
            const itemOrderUrl = `https://wa.me/919828357226?text=${whatsappText}`;

            return (
              <Card
                key={item.id}
                className="group flex flex-col h-full bg-cream border border-accent/15 hover:border-accent transition-colors duration-300"
              >
                {/* Image Container with Badges */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Glassy Background Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 pointer-events-none" />

                  {/* Top Row Badges */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                    {item.isDesiGhee && (
                      <span className="px-3 py-1 rounded-full bg-accent text-primary-dark font-semibold text-[10px] sm:text-xs flex items-center gap-1 shadow-md font-outfit">
                        <Sparkles className="w-3.5 h-3.5 fill-primary-dark/20" />
                        Desi Ghee
                      </span>
                    )}
                    <span className="ml-auto px-2.5 py-1 rounded-full bg-primary/95 text-accent-light font-bold text-[10px] uppercase tracking-wide font-outfit">
                      Signature
                    </span>
                  </div>

                  {/* Hindi Title inside image overlay bottom */}
                  {item.hindiName && (
                    <div className="absolute bottom-4 left-4 z-10">
                      <span className="text-xl md:text-2xl font-black text-white/95 font-playfair bg-black/35 px-2 py-0.5 rounded-lg backdrop-blur-xs">
                        {item.hindiName}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content Box */}
                <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg md:text-xl font-bold text-primary font-playfair group-hover:text-accent transition-colors duration-200">
                        {item.name}
                      </h3>
                      {item.price && (
                        <span className="font-semibold text-sm text-accent-light bg-primary-dark/95 px-2.5 py-1 rounded-lg font-outfit">
                          {item.price}
                        </span>
                      )}
                    </div>
                    
                    <p className="text-xs sm:text-sm text-charcoal/70 font-outfit leading-relaxed min-h-[60px] line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Action buttons */}
                  <div className="pt-2">
                    <a
                      href={itemOrderUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full"
                    >
                      <Button
                        variant="gold"
                        size="sm"
                        className="w-full text-xs font-semibold py-2.5 border border-accent/20"
                        icon={<MessageSquare className="w-4 h-4" />}
                        iconPosition="left"
                      >
                        Order via WhatsApp
                      </Button>
                    </a>
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
          <a href="#bulk-orders" className="shrink-0 w-full md:w-auto">
            <Button
              variant="outline"
              size="sm"
              className="w-full md:w-auto text-cream border-cream/35 hover:bg-cream/10"
            >
              Learn More
            </Button>
          </a>
        </motion.div>

      </div>
    </section>
  );
};
export default Specialties;
