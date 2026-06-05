import React from "react";
import Hero from "@/components/Hero";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { MENU_ITEMS, GALLERY_ITEMS, BUSINESS_INFO } from "@/lib/data";
import { ArrowRight, Phone } from "lucide-react";
import Card from "@/components/ui/Card";

export default function Home() {
  return (
    <>
      <main className="flex-grow">
        {/* Section 1: Cinematic Hero */}
        <Hero />

        {/* Section 2: Short About Preview */}
        <section className="py-16 md:py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Image */}
              <div className="lg:col-span-5 relative">
                <div className="absolute -inset-4 rounded-3xl border-2 border-accent/20 translate-x-2 translate-y-2 pointer-events-none" />
                <div className="relative h-[320px] rounded-3xl overflow-hidden shadow-xl border border-accent/30 bg-primary">
                  <Image
                    src="/images/gallery/about-premium-sweets-display.png"
                    alt="Premium sweets display at Murliwala Sweets"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/30 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Right Column: Text Story */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <span className="text-accent font-bold tracking-widest text-sm uppercase block font-outfit">
                    Our Legacy
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-primary font-playfair leading-tight">
                    Crafting Sweet Memories in Jhunjhunu
                  </h2>
                  <div className="w-20 h-1 bg-accent rounded-full mt-2" />
                </div>
                <p className="text-charcoal/90 font-outfit text-sm sm:text-base leading-relaxed">
                  Welcome to <strong>Murliwala Sweets</strong>, where we bring you the finest traditional tastes of Rajasthan and India, crafted right in the heart of Jhunjhunu. Located in <strong>Fauz Ka Mohalla</strong>, opposite Kamal Heights, our legacy is built on pure ingredients, ancestral recipes, and daily fresh production.
                </p>
                <div>
                  <Button variant="primary" href="/about">
                    Read Our Story <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Featured Products Preview */}
        <section className="py-16 md:py-24 bg-cream border-t border-accent/15 festive-bg-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-accent font-bold tracking-widest text-sm uppercase block font-outfit">
              Selected Specials
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary font-playfair mb-4">
              Our Legendary Signature Sweets
            </h2>
            <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-12" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {MENU_ITEMS.filter((item) => item.isSpecial && item.category === "sweets")
                .slice(0, 4)
                .map((item) => (
                  <Card
                    key={item.id}
                    className="bg-ivory border border-accent/25 flex flex-col h-full hover:border-accent hover:shadow-lg transition-all duration-300"
                  >
                    <div className="relative h-48 w-full">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className="object-cover"
                      />
                      {item.isDesiGhee && (
                        <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-accent text-[9px] font-bold text-charcoal font-outfit shadow-sm">
                          Desi Ghee
                        </span>
                      )}
                    </div>
                    <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                      <div className="space-y-2 text-left">
                        <div className="flex justify-between items-start gap-1">
                          <h3 className="font-bold text-base text-primary font-playfair leading-tight">
                            {item.name}
                          </h3>
                          <span className="text-xs font-bold text-primary bg-accent/20 border border-accent/45 px-2 py-0.5 rounded-lg font-outfit shrink-0 whitespace-nowrap">
                            {item.priceLabel}
                          </span>
                        </div>
                        <p className="text-xs text-charcoal/80 font-outfit leading-relaxed line-clamp-3">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
            </div>

            <Button variant="primary" href="/menu">
              View Full Menu <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </section>

        {/* Section 4: Bulk Order CTA Banner */}
        <section className="py-16 bg-primary-dark text-cream relative overflow-hidden border-b border-accent/30">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#f6ad56_1.2px,transparent_0)] bg-[size:24px_24px]" />
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
            <span className="text-accent font-bold tracking-widest text-sm uppercase block font-outfit">
              Wedding & Festive Platters
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-white leading-tight">
              Swamani Offerings & Custom Sweets Gifting
            </h2>
            <p className="text-cream/80 max-w-xl mx-auto font-outfit text-sm sm:text-base leading-relaxed">
              Planning a celebration or organizing sweet box distributions for weddings, corporate gifting, or religious events? We tailor make premium, fresh boxes.
            </p>
            <div className="pt-4">
              <Button variant="gold" href="/bulk-orders" className="text-charcoal font-bold">
                Explore Bulk Options <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Section 5: Gallery Preview */}
        <section className="py-16 md:py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-accent font-bold tracking-widest text-sm uppercase block font-outfit">
              Visual Tour
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary font-playfair mb-4">
              Our Sweets & Kitchen Front
            </h2>
            <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-12" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {GALLERY_ITEMS.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="relative rounded-2xl overflow-hidden shadow-md border border-accent/30 aspect-[4/3] bg-ivory group"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary-dark/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-left">
                    <span className="text-[9px] text-accent font-bold uppercase tracking-wider font-outfit">
                      {item.category}
                    </span>
                    <h3 className="text-base font-bold text-white font-playfair mt-0.5">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="primary" href="/gallery">
              View Full Gallery <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </section>

        {/* Section 6: Contact CTA */}
        <section className="py-16 bg-cream border-t border-accent/15 festive-bg-pattern">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
            <span className="text-accent font-bold tracking-widest text-sm uppercase block font-outfit">
              Visit Us
            </span>
            <h2 className="text-3xl font-bold text-primary font-playfair">
              Find Us in Fauz Ka Mohalla
            </h2>
            <p className="text-charcoal/80 max-w-xl mx-auto font-outfit text-sm sm:text-base leading-relaxed">
              We are located opposite Kamal Heights, lane opposite Axis Bank, Fauz Ka Mohalla in Jhunjhunu, Rajasthan. Timings: 07:00 AM - 10:00 PM.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-6">
              <Button variant="primary" href="/contact">
                Directions & Address
              </Button>
              <a
                href={BUSINESS_INFO.phoneCallUrl}
                className="text-sm font-bold text-primary hover:underline font-outfit flex items-center gap-2"
              >
                <Phone className="w-4 h-4" /> Call: {BUSINESS_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
