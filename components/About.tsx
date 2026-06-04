"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Heart, Award, Sparkles } from "lucide-react";

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-accent" />,
      title: "100% Pure Ingredients",
      desc: "We strictly prepare our specialties in premium Desi Ghee and fresh, locally-sourced dairy.",
    },
    {
      icon: <Heart className="w-6 h-6 text-accent" />,
      title: "Handcrafted Tradition",
      desc: "Every sweet is handmade daily using ancestral recipes that preserve real Rajasthani taste.",
    },
    {
      icon: <Award className="w-6 h-6 text-accent" />,
      title: "Trusted Local Legacy",
      desc: "Serving families in Fauz Ka Mohalla and across Jhunjhunu for years, building sweet memories.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-20 md:py-28 overflow-hidden festive-bg-pattern"
    >
      {/* Decorative Top Separator */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
          {/* Left Column - Beautiful Image Layout */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            {/* Background Decorative Gold Frame */}
            <div className="absolute -inset-4 rounded-3xl border-2 border-accent/20 translate-x-2 translate-y-2 pointer-events-none" />
            
            {/* Primary Image */}
            <div className="relative h-[320px] sm:h-[450px] rounded-3xl overflow-hidden shadow-xl border border-accent/15">
              <Image
                src="https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=600&auto=format&fit=crop"
                alt="Boiling milk for fresh sweets prep"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              {/* Image Gradient Tint Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent pointer-events-none" />
              
              {/* Badge overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-primary-dark/90 backdrop-blur-md p-4 rounded-2xl border border-accent/35 flex items-center gap-3">
                <div className="p-2.5 rounded-full bg-accent/20 text-accent-light">
                  <Sparkles className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <p className="text-xs text-accent-light font-semibold uppercase tracking-wider font-outfit">Pure Quality</p>
                  <p className="text-sm font-semibold text-cream font-outfit">Daily fresh production</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Brand Story Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-2">
              <span className="text-accent font-bold tracking-widest text-sm uppercase block font-outfit">
                Our Legacy
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary font-playfair leading-tight">
                Crafting Sweet Memories in Jhunjhunu
              </h2>
              <div className="w-20 h-1 bg-accent rounded-full mt-2" />
            </div>

            <div className="text-charcoal/80 space-y-4 font-outfit text-base md:text-lg leading-relaxed">
              <p>
                Welcome to <strong className="text-primary font-semibold">Murliwala Sweets</strong>, where we bring you the finest traditional tastes of Rajasthan and India, crafted right in the heart of Jhunjhunu. Located in the bustling locality of <strong>Fauz Ka Mohalla</strong>, our shop has been a symbol of trust and premium quality for local families.
              </p>
              <p>
                Whether it is our rich, slow-simmered <strong className="text-primary font-semibold">Rabdi</strong>, delicate Bengali <strong className="text-primary font-semibold">Sandesh</strong>, or hot crisp morning <strong className="text-primary font-semibold">Samosas</strong>, we maintain strict standards of preparation. Every recipe is a careful blend of age-old culinary methods and hygiene.
              </p>
              <p>
                We believe that festivals and family celebrations are incomplete without sweets that reflect purity. That is why we dedicate ourselves to using 100% Desi Ghee and fresh ingredients, bringing smiles to your celebrations.
              </p>
            </div>

            {/* highlights list */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-accent/15">
              {highlights.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="p-2 rounded-xl bg-primary/5 text-primary">
                      {item.icon}
                    </span>
                    <h3 className="font-bold text-sm md:text-base text-primary-dark font-outfit">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-charcoal/70 font-outfit leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default About;
