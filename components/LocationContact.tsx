"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Navigation, CheckCircle2 } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/data";
import Button from "./ui/Button";
import Card from "./ui/Card";

export const LocationContact: React.FC = () => {
  return (
    <section id="contact" className="relative py-20 md:py-28 bg-cream-dark/10 overflow-hidden">
      {/* Decorative accent gradients */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-accent/5 filter blur-3xl" />
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-primary/5 filter blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-accent font-bold tracking-widest text-sm uppercase block font-outfit">
            Store Locator
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary font-playfair leading-tight">
            Visit Our Sweets Counter
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto" />
          <p className="text-charcoal/70 font-outfit text-sm sm:text-base">
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
                  <div className="shrink-0 p-3 rounded-2xl bg-primary/5 text-primary border border-accent/15 h-fit">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="space-y-1 font-outfit">
                    <h4 className="font-bold text-sm text-primary-dark">Our Address</h4>
                    <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                      {BUSINESS_INFO.address}
                    </p>
                  </div>
                </div>

                {/* 2. Landmarks Checkpoints */}
                <div className="flex gap-4">
                  <div className="shrink-0 p-3 rounded-2xl bg-primary/5 text-primary border border-accent/15 h-fit">
                    <Navigation className="w-6 h-6" />
                  </div>
                  <div className="space-y-2 font-outfit">
                    <h4 className="font-bold text-sm text-primary-dark">Landmarks Guide</h4>
                    <ul className="text-xs sm:text-sm text-charcoal/80 space-y-1">
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
                  <div className="shrink-0 p-3 rounded-2xl bg-primary/5 text-primary border border-accent/15 h-fit">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div className="space-y-1 font-outfit">
                    <h4 className="font-bold text-sm text-primary-dark">Operating Hours</h4>
                    <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                      {BUSINESS_INFO.operatingHours}
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Quick CTAs Box */}
            <div className="space-y-4 pt-8 mt-8 border-t border-accent/15">
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button
                    variant="gold"
                    className="w-full text-primary-dark"
                    icon={<Navigation className="w-4 h-4" />}
                    iconPosition="left"
                  >
                    Get Directions
                  </Button>
                </a>
                <a href={BUSINESS_INFO.phoneCallUrl} className="flex-1">
                  <Button
                    variant="primary"
                    className="w-full text-cream"
                    icon={<Phone className="w-4 h-4 text-accent-light" />}
                    iconPosition="left"
                  >
                    Call: {BUSINESS_INFO.phoneDisplay}
                  </Button>
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right panel - Live Map Embed Container */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="relative w-full h-[320px] sm:h-[450px] lg:h-full min-h-[350px] rounded-3xl overflow-hidden shadow-lg border border-accent/25">
              {/* Map iframe */}
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
