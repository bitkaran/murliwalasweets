import React from "react";
import { Metadata } from "next";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Murliwala Sweets | Traditional Rajasthani Legacy",
  description: "Learn about the rich heritage, pure Desi Ghee ingredients, and handcrafted sweets of Murliwala Sweets in Jhunjhunu, Rajasthan.",
};

export default function AboutPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Premium Header/Hero for About Page */}
      <section className="relative py-16 bg-primary-dark text-cream text-center overflow-hidden border-b border-accent/30">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#f6ad56_1.2px,transparent_0)] bg-[size:24px_24px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-3">
          <span className="text-accent font-bold tracking-widest text-xs sm:text-sm uppercase block font-outfit">
            Established Tradition
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-playfair text-white leading-tight">
            Our Sweet Legacy
          </h1>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto" />
          <p className="text-cream/80 max-w-2xl mx-auto font-outfit text-sm sm:text-base">
            Discover the story of passion, purity, and heritage that defines every single bite at Murliwala Sweets.
          </p>
        </div>
      </section>

      {/* Main Full About Section Component */}
      <About />

      {/* Quality Promise & Values */}
      <WhyChooseUs />

      {/* Legacy Call to Action Block */}
      <section className="py-16 bg-cream border-t border-accent/20">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl font-bold text-primary font-playfair">
            Celebrate with Traditional Purity
          </h2>
          <p className="text-charcoal/80 font-outfit text-base leading-relaxed max-w-2xl mx-auto">
            From daily breakfast cravings like hot Samosas and Bread Kofta to grand family occasions requiring premium Kaju Katli and Moti Pakh, we are here to sweeten your celebrations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="primary"
              href="/menu"
            >
              Explore Full Menu
            </Button>
            <Button
              variant="secondary"
              href="/contact"
            >
              Visit Our Shop
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
