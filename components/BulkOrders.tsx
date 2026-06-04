"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Gift, Truck, MessageSquare, Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/data";
import Button from "./ui/Button";

export const BulkOrders: React.FC = () => {
  const options = [
    {
      icon: <Gift className="w-6 h-6 text-accent" />,
      title: "Festive Gift Boxes",
      desc: "Custom assorted sweet boxes decorated for Diwali, Holi, and special festivals. Packaged beautifully. (Please confirm packaging designs and options with shop owner).",
    },
    {
      icon: <Calendar className="w-6 h-6 text-accent" />,
      title: "Weddings & Celebrations",
      desc: "Premium dessert catering and custom box sets tailored for weddings, ring ceremonies, and birthdays. (Please confirm catering capacity with shop owner).",
    },
    {
      icon: <Truck className="w-6 h-6 text-accent" />,
      title: "Corporate & Bulk Gifting",
      desc: "Delight your employees and business partners with fresh sweets customized with your branding. (Please confirm logo printing options with shop owner).",
    },
  ];

  return (
    <section
      id="bulk-orders"
      className="relative py-20 md:py-28 bg-primary-dark text-ivory overflow-hidden border-t border-b border-accent/30"
    >
      {/* Decorative Traditional Border Patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#D4A548_1.2px,transparent_0)] bg-[size:24px_24px]" />
      
      {/* Subtle traditional gold stars/mandala outline */}
      <div className="absolute top-[10%] left-[5%] w-72 h-72 rounded-full bg-accent/5 filter blur-3xl" />
      <div className="absolute bottom-[10%] right-[5%] w-96 h-96 rounded-full bg-accent/5 filter blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-accent font-bold tracking-widest text-sm uppercase block font-outfit">
            Catering & Celebrations
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-playfair leading-tight">
            Celebrate with Bulk & Festive Orders
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto" />
          <p className="text-ivory/80 font-outfit text-sm sm:text-base leading-relaxed">
            Planning a celebration? We offer custom sweet boxes, festive gift hampers, and large catering menus. (Please confirm order lead times and availability with the shop owner).
          </p>
        </div>

        {/* Categories split layout (Image + Options) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Column: Image with traditional gold borders */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute -inset-4 rounded-3xl border-2 border-accent/20 translate-x-2 translate-y-2 pointer-events-none" />
            <div className="relative h-[320px] sm:h-[400px] rounded-3xl overflow-hidden shadow-xl border-2 border-accent/40 bg-primary">
              <Image
                src="/images/festive-gift-box-assortment.png"
                alt="Murliwala Festive Gift Box Assortment"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Column: Three options */}
          <div className="lg:col-span-7 space-y-6">
            {options.map((opt, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-primary-dark/80 rounded-2xl p-6 border border-accent/30 flex gap-4 hover:border-accent transition-colors duration-300 shadow-md"
              >
                <div className="p-3 w-fit rounded-xl bg-white/5 border border-accent/25 text-accent shrink-0 h-fit">
                  {opt.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold font-playfair text-white">
                    {opt.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ivory/80 font-outfit leading-relaxed">
                    {opt.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-primary-dark/95 rounded-3xl p-8 md:p-12 border-2 border-accent/35 text-center space-y-6 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative Corner vector */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full pointer-events-none" />

          <h3 className="text-2xl md:text-3xl font-bold font-playfair text-white">
            Let&apos;s Customize Your Order
          </h3>
          <p className="max-w-xl mx-auto text-sm md:text-base text-ivory/80 font-outfit">
            Share your budget, choice of sweets, box styles, and event date. We will curate a proposal. (Prices and details to be confirmed by the owner).
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <Button
              variant="gold"
              size="md"
              href="https://wa.me/919828357226?text=Hello%20Murliwala%20Sweets%2C%20I%20am%20interested%20in%20custom%20bulk%2Ffestive%20packaging%20for%20an%20event.%20Please%20guide%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-primary-dark"
              icon={<MessageSquare className="w-5 h-5" />}
              iconPosition="left"
            >
              Discuss on WhatsApp
            </Button>

            <Button
              variant="outline"
              size="md"
              href={BUSINESS_INFO.phoneCallUrl}
              className="w-full sm:w-auto"
              icon={<Phone className="w-5 h-5 text-accent" />}
              iconPosition="left"
            >
              Call for Catering
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
export default BulkOrders;
