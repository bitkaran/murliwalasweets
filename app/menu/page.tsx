import React from "react";
import { Metadata } from "next";
import MenuShowcase from "@/components/MenuShowcase";
import { MessageSquare, Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Murliwala Sweets Menu | Traditional Mithai & Crispy Snacks",
  description: "Browse our delicious menu of Desi Ghee sweets, hot breakfast Samosas, Bread Koftas, Dhokla, and snacks in Jhunjhunu. Order instantly on WhatsApp.",
};

export default function MenuPage() {
  return (
    <div className="bg-cream min-h-screen pb-20 sm:pb-0">
      {/* Menu Page Hero */}
      <section className="relative py-12 bg-primary-dark text-cream text-center overflow-hidden border-b border-accent/30">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#f6ad56_1.2px,transparent_0)] bg-[size:24px_24px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-2">
          <span className="text-accent font-bold tracking-widest text-xs uppercase block font-outfit">
            Fresh Daily Preparation
          </span>
          <h1 className="text-3xl sm:text-4xl font-black font-playfair text-white">
            Our Traditional Sweets & Snacks
          </h1>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mt-2" />
        </div>
      </section>

      {/* Main Full Menu Grid Component */}
      <MenuShowcase />

      {/* Sticky Bottom WhatsApp CTA on Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-primary-dark/95 border-t border-accent/30 p-3 flex sm:hidden items-center justify-between gap-3 shadow-lg">
        <div className="text-cream text-left pl-2 font-outfit">
          <p className="text-[10px] text-accent font-bold uppercase tracking-wider">Quick Support</p>
          <p className="text-xs font-semibold text-white">Ask for Daily Specials</p>
        </div>
        <div className="flex gap-2 shrink-0">
          <a
            href={BUSINESS_INFO.phoneCallUrl}
            className="flex items-center justify-center p-3 rounded-full bg-accent text-charcoal shadow-sm hover:scale-105 active:scale-95 transition-transform"
          >
            <Phone className="w-4 h-4" />
          </a>
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-whatsapp text-cream font-bold text-xs shadow-sm hover:scale-105 active:scale-95 transition-transform"
          >
            <MessageSquare className="w-4 h-4 fill-white/10" />
            Chat Now
          </a>
        </div>
      </div>
    </div>
  );
}
