import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Specialties from "@/components/Specialties";
import MenuShowcase from "@/components/MenuShowcase";
import BulkOrders from "@/components/BulkOrders";
import Gallery from "@/components/Gallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import LocationContact from "@/components/LocationContact";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

export default function Home() {
  return (
    <>
      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main className="flex-grow">
        
        {/* Section 1: Cinematic Hero */}
        <Hero />

        {/* Section 2: Legacy Brand Story */}
        <About />

        {/* Section 3: Signature Specialties Carousel */}
        <Specialties />

        {/* Section 4: Full Catalog Menu */}
        <MenuShowcase />

        {/* Section 5: Festive & Gifting Banner */}
        <BulkOrders />

        {/* Section 6: Pinterest Masonry Gallery */}
        <Gallery />

        {/* Section 7: Values & Reviews */}
        <WhyChooseUs />

        {/* Section 8: Google Map & Directions */}
        <LocationContact />

      </main>

      {/* Footer Block */}
      <Footer />

      {/* Persistent WhatsApp Floating Button */}
      <WhatsAppFAB />
    </>
  );
}
