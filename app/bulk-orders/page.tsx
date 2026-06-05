import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import BulkOrders from "@/components/BulkOrders";
import Button from "@/components/ui/Button";
import { Calendar, Gift, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Murliwala Sweets Bulk & Festive Orders | Corporate & Wedding Gifting",
  description: "Enquire about bulk sweets packages, Swamani boxes, custom wedding trays, and corporate festive gifting hampers from Murliwala Sweets in Jhunjhunu.",
};

export default function BulkOrdersPage() {
  const bulkEnquiryText = `Namaste Murliwala Sweets,

I would like to enquire about bulk/festive order.

Occasion:
Approx Quantity:
Preferred Date:
Delivery / Pickup:
Customer Name:

Please share details and availability.`;

  const bulkOrderWhatsAppUrl = `https://wa.me/919828357226?text=${encodeURIComponent(bulkEnquiryText)}`;

  const boxes = [
    {
      name: "Signature Swamani Box",
      desc: "Specially prepared box for Swamani offerings. Custom sizing and pure Desi Ghee sweets configurations available. (Please confirm quantities and timeline with the owner).",
      tag: "Swamani Special",
      icon: <Star className="w-5 h-5 text-accent" />,
      image: "/images/gallery/bulk-orders-section.png"
    },
    {
      name: "Royal Wedding Platters",
      desc: "Delicately decorated gold-themed packaging with Kaju Katli, Moti Pakh, and other premium sweets for marriage invitations and guest distributions.",
      tag: "Wedding Special",
      icon: <Gift className="w-5 h-5 text-accent" />,
      image: "/images/gallery/bulk-orders-section2.png"
    },
    {
      name: "Corporate Festive Hampers",
      desc: "Custom branded sweet boxes with custom partitions for corporate distributions during Diwali, Holi, or business milestones. (Corporate logos supported, discuss with owner).",
      tag: "Festive Pack",
      icon: <Calendar className="w-5 h-5 text-accent" />,
      image: "/images/gallery/signature-sweets-assortment.png"
    }
  ];

  return (
    <div className="bg-cream min-h-screen">
      {/* Page Hero */}
      <section className="relative py-16 bg-cream text-charcoal text-center overflow-hidden border-b border-accent/20">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#f6ad56_1.2px,transparent_0)] bg-[size:24px_24px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-3">
          <span className="text-accent font-bold tracking-widest text-xs uppercase block font-outfit">
            Festivals & Celebrations
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-playfair text-primary leading-tight">
            Bulk & Festive Gifting
          </h1>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto" />
          <p className="text-charcoal/80 max-w-2xl mx-auto font-outfit text-sm sm:text-base">
            Celebrate life&apos;s grandest moments with custom-tailored sweet boxes, Swamani boxes, and corporate hampers.
          </p>
        </div>
      </section>

      {/* Main BulkOrders component */}
      <BulkOrders />

      {/* Specialty Box Selections */}
      <section className="py-16 bg-cream border-t border-accent/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-playfair text-primary">Our Premium Specialty Offerings</h2>
            <p className="text-charcoal/70 font-outfit text-sm">Pick from our custom styles and share your requirements with us.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {boxes.map((box, index) => (
              <div
                key={index}
                className="bg-ivory border border-accent/30 rounded-3xl overflow-hidden shadow-sm hover:shadow-md hover:border-accent transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 w-full">
                    <Image
                      src={box.image}
                      alt={box.name}
                      fill
                      className="object-cover"
                    />
                    <span className="absolute top-3 right-3 text-[10px] font-bold text-cream bg-primary px-2 py-0.5 rounded-full font-outfit">
                      {box.tag}
                    </span>
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold font-playfair text-primary-dark">{box.name}</h3>
                    <p className="text-xs text-charcoal/80 font-outfit leading-relaxed">{box.desc}</p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Button
                    variant="outline"
                    size="sm"
                    href={bulkOrderWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-xs font-semibold py-2"
                  >
                    Enquire on WhatsApp
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
