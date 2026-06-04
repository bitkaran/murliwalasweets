"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart, ShieldCheck, Clock, Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import Card from "./ui/Card";

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-accent" />,
      title: "Guaranteed Purity",
      desc: "Our sweets are prepared using pure premium Desi Ghee and fresh dairy. (Please confirm exact ghee content with shop owner).",
    },
    {
      icon: <Clock className="w-8 h-8 text-accent" />,
      title: "Fresh Daily",
      desc: "Everything is made fresh in controlled quantities. (Please confirm daily stock cycle with shop owner).",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-accent" />,
      title: "Heritage Taste",
      desc: "Our confectioners use traditional recipes that keep the authentic Rajasthani taste alive.",
    },
    {
      icon: <Heart className="w-8 h-8 text-accent" />,
      title: "Hygienic Standards",
      desc: "Sanitation levels are prioritized in our kitchen, storage, and customer counters. (Please confirm kitchen hygiene protocols with shop owner).",
    },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-cream festive-bg-pattern overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Block - Pillars List */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-2">
              <span className="text-accent font-bold tracking-widest text-sm uppercase block font-outfit">
                Our Values
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary font-playfair leading-tight">
                Why Families Trust Murliwala Sweets
              </h2>
              <div className="w-20 h-1 bg-accent rounded-full mt-2" />
              <p className="text-charcoal/70 font-outfit text-sm sm:text-base leading-relaxed pt-2">
                For years, we have been more than just a shop. We are a part of Jhunjhunu&apos;s family gatherings, afternoon tea times, and festive celebrations. Here is how we maintain that bond.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {pillars.map((pil, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="shrink-0 p-3 rounded-2xl bg-accent/10 text-primary border border-accent/25 h-fit">
                    {pil.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-base text-primary-dark font-outfit">
                      {pil.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal/80 font-outfit leading-relaxed">
                      {pil.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Block - Customer Reviews Showcase */}
          <div className="lg:col-span-6 space-y-8 relative">
            {/* Background gold accent shape */}
            <div className="absolute top-[30%] right-[-10%] w-72 h-72 rounded-full bg-accent/5 filter blur-3xl pointer-events-none" />

            <div className="space-y-4">
              {/* Google Reviews Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-ivory shadow-sm border border-accent/30">
                <span className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </span>
                <span className="text-xs font-bold text-primary font-outfit">
                  4.2/5 Average Rating
                </span>
                <span className="text-[10px] text-charcoal/50 font-outfit">
                  (Customer trust highlights)
                </span>
              </div>

              <h3 className="text-2xl font-bold text-primary font-playfair">
                Loved by Local Customers
              </h3>
            </div>

            {/* Testimonials Stack */}
            <div className="space-y-6">
              {TESTIMONIALS.map((test) => (
                <motion.div
                  key={test.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card
                    hoverEffect={false}
                    className="p-6 bg-ivory border border-accent/25 border-l-4 border-l-accent transition-all duration-300 relative shadow-sm"
                  >
                    <Quote className="absolute top-4 right-6 w-8 h-8 text-accent/10 pointer-events-none" />
                    
                    <div className="flex items-center gap-1 text-amber-500 mb-2">
                      {[...Array(Math.floor(test.rating))].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                      ))}
                      {test.rating % 1 !== 0 && (
                        <Star className="w-3.5 h-3.5 fill-amber-500 opacity-60" />
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-charcoal/85 italic leading-relaxed font-outfit mb-4">
                      &quot;{test.comment}&quot;
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs sm:text-sm text-primary font-outfit">
                        {test.name}
                      </span>
                      <span className="text-[10px] text-charcoal/40 font-outfit">
                        {test.date}
                      </span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
export default WhyChooseUs;
