"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Navigation, CheckCircle2 } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/data";
import Button from "./ui/Button";
import { FaWhatsapp } from "react-icons/fa";

export const LocationContact: React.FC = () => {
  return (
    <section id="contact" className="relative py-20 md:py-28 bg-cream festive-bg-pattern overflow-hidden border-t border-accent/20">
      {/* Decorative traditional motifs */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-accent/5 filter blur-3xl" />
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-primary/5 filter blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-accent font-bold tracking-widest text-sm uppercase block font-outfit">
            Store Locator
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary font-playfair leading-tight">
            Visit Our Sweets Counter
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto" />
          <p className="text-charcoal/80 font-outfit text-sm sm:text-base">
            Drop by for freshly cooked breakfast, hot jalebis, or to custom design sweet boxes for your family celebrations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left panel - Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="space-y-8">
              
              {/* Address Details card */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold font-playfair text-primary">
                  Store Details
                </h3>
                <p className="text-sm text-charcoal/70 font-outfit">
                  Find us opposite Kamal Heights in Jhunjhunu. Feel free to ring our customer line if you face any navigation trouble!
                </p>
              </div>

              {/* Contact Icons Grid */}
              <div className="space-y-6">
                
                {/* 1. Address Block */}
                <div className="flex gap-4">
                  <div className="shrink-0 p-3 rounded-2xl bg-primary/5 text-primary border border-accent/20 h-fit">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="space-y-1 font-outfit">
                    <h4 className="font-bold text-sm text-primary-dark">Our Address</h4>
                    <p className="text-xs sm:text-sm text-charcoal/85 leading-relaxed">
                      {BUSINESS_INFO.address}
                    </p>
                  </div>
                </div>

                {/* 2. Landmarks Guide */}
                <div className="flex gap-4">
                  <div className="shrink-0 p-3 rounded-2xl bg-primary/5 text-primary border border-accent/20 h-fit">
                    <Navigation className="w-6 h-6" />
                  </div>
                  <div className="space-y-2 font-outfit">
                    <h4 className="font-bold text-sm text-primary-dark">Landmarks Guide</h4>
                    <ul className="text-xs sm:text-sm text-charcoal/85 space-y-1">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                        Opposite Kamal Heights
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                        Axis Bank ke samne wali gali
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                        Near Satyam Residency
                      </li>
                    </ul>
                  </div>
                </div>

                {/* 3. Timings Block */}
                <div className="flex gap-4">
                  <div className="shrink-0 p-3 rounded-2xl bg-primary/5 text-primary border border-accent/20 h-fit">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div className="space-y-1 font-outfit">
                    <h4 className="font-bold text-sm text-primary-dark">Operating Hours</h4>
                    <p className="text-xs sm:text-sm text-charcoal/85 leading-relaxed">
                      {BUSINESS_INFO.operatingHours}
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Quick CTAs Box */}
            <div className="space-y-4 pt-8 mt-8 border-t border-accent/20">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button
                  variant="gold"
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-charcoal font-bold"
                  icon={<Navigation className="w-4 h-4" />}
                  iconPosition="left"
                >
                  Get Directions
                </Button>
                <Button
                  variant="primary"
                  href={BUSINESS_INFO.phoneCallUrl}
                  className="w-full"
                  icon={<Phone className="w-4 h-4" />}
                  iconPosition="left"
                >
                  Call: {BUSINESS_INFO.phoneDisplay}
                </Button>
                
                {/* Specific WhatsApp contact CTA */}
                <a
                  href={`https://wa.me/919828357226?text=${encodeURIComponent(
                    "Namaste Murliwala Sweets,\n\nI would like to contact you regarding sweets/snacks order.\n\nName:\nRequirement:\nDelivery / Pickup:\nPreferred Date/Time:\n\nPlease share details."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:col-span-2 inline-flex items-center justify-center font-semibold font-outfit rounded-full px-6 py-3 text-sm md:text-base bg-whatsapp hover:bg-whatsapp/90 text-white shadow-md hover:scale-103 active:scale-98 transition-all cursor-pointer outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
                >
                  <FaWhatsapp className="w-5 h-5 mr-2" />
                  Contact on WhatsApp
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right panel - Live Map & Shop Interior Embed Container */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Shop Interior Image */}
            <div className="relative w-full h-[200px] sm:h-[260px] rounded-3xl overflow-hidden shadow-md border-2 border-accent/35 bg-primary">
              <Image
                src="/images/gallery/gallery-shop-interior.png"
                alt="Murliwala Sweets Shop Interior in Jhunjhunu"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 z-10 text-ivory font-playfair font-bold text-lg drop-shadow-md">
                Our Sweets Counter
              </div>
            </div>

            {/* Map iframe */}
            <div className="relative w-full h-[240px] sm:h-[300px] rounded-3xl overflow-hidden shadow-md border-2 border-accent/35">
              <iframe
                src={BUSINESS_INFO.mapsEmbedIframe}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Murliwala Sweets Location in Jhunjhunu"
                className="absolute inset-0"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
export default LocationContact;
