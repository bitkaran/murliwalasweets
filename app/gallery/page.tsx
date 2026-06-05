import React from "react";
import { Metadata } from "next";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Murliwala Sweets Gallery | Visual Kitchen Tour",
  description: "Browse images of our authentic Rajasthani sweets, Samosa counters, Swamani boxes, and clean shop kitchen preparations in Jhunjhunu.",
};

export default function GalleryPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Gallery Page Hero */}
      <section className="relative py-12 bg-primary-dark text-cream text-center overflow-hidden border-b border-accent/30">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#f6ad56_1.2px,transparent_0)] bg-[size:24px_24px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-2">
          <span className="text-accent font-bold tracking-widest text-xs uppercase block font-outfit">
            Kitchen & Craft
          </span>
          <h1 className="text-3xl sm:text-4xl font-black font-playfair text-white">
            Our Traditional Sweets Gallery
          </h1>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mt-2" />
        </div>
      </section>

      {/* Main Full Gallery Masonry Grid */}
      <Gallery />
    </div>
  );
}
