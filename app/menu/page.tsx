import React from "react";
import { Metadata } from "next";
import MenuShowcase from "@/components/MenuShowcase";
import { Phone } from "lucide-react";
import { BUSINESS_INFO, MENU_ITEMS } from "@/lib/data";
import PageBanner from "@/components/PageBanner";
import { FaWhatsapp } from "react-icons/fa";
import { SEO_CONFIG } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Murliwala Sweets Menu | Mithai, Snacks, Kachori & Sweets in Jhunjhunu",
  description: "Browse our delicious menu of Desi Ghee sweets, hot breakfast Samosas, Bread Koftas, Dhokla, and snacks in Jhunjhunu. Order instantly on WhatsApp.",
  keywords: ["Murliwala Sweets Menu", "mithai list Jhunjhunu", "Samosa price Jhunjhunu", "sweet prices Jhunjhunu", "desighee sweets"],
  alternates: {
    canonical: `${SEO_CONFIG.siteUrl}/menu`
  },
  openGraph: {
    title: "Murliwala Sweets Menu | Mithai, Snacks, Kachori & Sweets in Jhunjhunu",
    description: "Browse our delicious menu of Desi Ghee sweets, hot breakfast Samosas, Bread Koftas, Dhokla, and snacks in Jhunjhunu. Order instantly on WhatsApp.",
    url: `${SEO_CONFIG.siteUrl}/menu`,
    images: [
      {
        url: `${SEO_CONFIG.siteUrl}/images/gallery/signature-sweets-assortment.png`,
        width: 1200,
        height: 630,
        alt: "Murliwala Sweets Menu Catalog"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Murliwala Sweets Menu | Mithai, Snacks, Kachori & Sweets in Jhunjhunu",
    description: "Browse our delicious menu of Desi Ghee sweets, hot breakfast Samosas, Bread Koftas, Dhokla, and snacks in Jhunjhunu. Order instantly on WhatsApp.",
    images: [`${SEO_CONFIG.siteUrl}/images/gallery/signature-sweets-assortment.png`]
  }
};

export default function MenuPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SEO_CONFIG.siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Menu",
        "item": `${SEO_CONFIG.siteUrl}/menu`
      }
    ]
  };

  const menuSchema = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "name": `${SEO_CONFIG.siteName} Menu`,
    "description": "Explore our delicious catalog of Desi Ghee traditional sweets, milk pedas, kachori and spicy morning savouries.",
    "url": `${SEO_CONFIG.siteUrl}/menu`,
    "hasMenuItem": MENU_ITEMS.map((item) => ({
      "@type": "MenuItem",
      "name": item.name,
      "description": item.description,
      "image": `${SEO_CONFIG.siteUrl}${item.image}`,
      "offers": {
        "@type": "Offer",
        "price": item.price,
        "priceCurrency": "INR"
      }
    }))
  };

  return (
    <div className="bg-cream min-h-screen pb-20 sm:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }}
      />
      {/* Page Header/Banner */}
      <PageBanner
        eyebrow="Fresh Daily Preparation"
        title="Our Traditional Sweets & Snacks"
      />

      {/* Main Full Menu Grid Component */}
      <MenuShowcase />

      {/* Sticky Bottom WhatsApp CTA on Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-primary-dark/95 border-t border-accent/30 p-3 flex sm:hidden items-center justify-between gap-3 shadow-lg">
        <div className="text-cream text-left pl-2 font-outfit">
          <p className="text-[10px] text-accent font-bold uppercase tracking-wider">Quick Support</p>
          <p className="text-xs font-semibold text-cream">Ask for Daily Specials</p>
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
            <FaWhatsapp className="w-4 h-4 fill-white" />
            Chat Now
          </a>
        </div>
      </div>
    </div>
  );
}
