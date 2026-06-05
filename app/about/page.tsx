import React from "react";
import { Metadata } from "next";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Button from "@/components/ui/Button";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "About Murliwala Sweets | Traditional Rajasthani Legacy",
  description: "Learn about the rich heritage, pure Desi Ghee ingredients, and handcrafted sweets of Murliwala Sweets in Jhunjhunu, Rajasthan.",
};

export default function AboutPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Page Header/Banner */}
      <PageBanner
        eyebrow="Established Tradition"
        title="Our Sweet Legacy"
        description="Discover the story of passion, purity, and heritage that defines every single bite at Murliwala Sweets."
      />

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
