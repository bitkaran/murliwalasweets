"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Calendar, Gift, Truck, MessageSquare, Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/data";
import Button from "./ui/Button";

export const BulkOrders: React.FC = () => {
  const options = [
    {
      icon: <Gift className="w-8 h-8 text-accent-light" />,
      title: "Festive Gift Boxes",
      desc: "Custom assorted sweet boxes decorated for Diwali, Holi, and special festivals. Packaged beautifully.",
    },
    {
      icon: <Calendar className="w-8 h-8 text-accent-light" />,
      title: "Weddings & Celebrations",
      desc: "Premium dessert catering and custom box sets tailored for weddings, ring ceremonies, and birthdays.",
    },
    {
      icon: <Truck className="w-8 h-8 text-accent-light" />,
      title: "Corporate & Bulk Gifting",
      desc: "Delight your employees and business partners with fresh premium sweets customized with your branding.",
    },
  ];

  return (
    <section
      id="bulk-orders"
      className="relative py-20 md:py-28 crimson-gradient-bg text-cream overflow-hidden"
    >
      {/* Decorative Traditional Border Patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#F5B041_1px,transparent_0)] bg-[size:16px_16px]" />
      
      {/* Golden Glowing Particle effects */}
      <div className="absolute top-[10%] left-[5%] w-72 h-72 rounded-full bg-accent/10 filter blur-3xl" />
      <div className="absolute bottom-[10%] right-[5%] w-96 h-96 rounded-full bg-accent/5 filter blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-accent-light font-bold tracking-widest text-sm uppercase block font-outfit">
            Catering & Celebrations
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-playfair leading-tight">
            Celebrate with Bulk & Festive Orders
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto" />
          <p className="text-cream/80 font-outfit text-sm sm:text-base leading-relaxed">
            Planning a celebration? We provide customized sweet packaging, corporate gift hampers, and large catering menus. Let us add sweetness to your milestones.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {options.map((opt, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card-dark rounded-3xl p-8 border border-accent/20 flex flex-col justify-between h-full hover:border-accent/50 transition-colors duration-300"
            >
              <div className="space-y-4">
                <div className="p-3 w-fit rounded-2xl bg-white/5 border border-accent/20 text-accent-light">
                  {opt.icon}
                </div>
                <h3 className="text-xl font-bold font-playfair text-white">
                  {opt.title}
                </h3>
                <p className="text-sm text-cream/70 font-outfit leading-relaxed">
                  {opt.desc}
                </p>
              </div>

              {/* Bullet points */}
              <div className="mt-6 pt-4 border-t border-white/10 text-xs text-accent-light font-medium tracking-wide flex items-center gap-1.5 font-outfit">
                <Sparkles className="w-4 h-4 text-accent" />
                Customisable sweet selections
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass-card-dark rounded-3xl p-8 md:p-12 border-2 border-accent/30 text-center space-y-6 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative Corner vector */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full pointer-events-none" />

          <h3 className="text-2xl md:text-3xl font-black font-playfair text-white">
            Let's Customize Your Order
          </h3>
          <p className="max-w-xl mx-auto text-sm md:text-base text-cream/80 font-outfit">
            Share your budget, choice of sweets, box styles, and event date. We will curate a proposal within hours.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <a
              href="https://wa.me/919828357226?text=Hello%20Murliwala%20Sweets%2C%20I%20am%20interested%20in%20custom%20bulk%2Ffestive%20packaging%20for%20an%20event.%20Please%20guide%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="gold"
                size="md"
                className="w-full sm:w-auto text-primary-dark"
                icon={<MessageSquare className="w-5 h-5" />}
                iconPosition="left"
              >
                Discuss on WhatsApp
              </Button>
            </a>

            <a href={BUSINESS_INFO.phoneCallUrl} className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="md"
                className="w-full sm:w-auto text-cream border-cream/35 hover:bg-cream/10"
                icon={<Phone className="w-5 h-5 text-accent-light" />}
                iconPosition="left"
              >
                Call for Catering
              </Button>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
export default BulkOrders;
