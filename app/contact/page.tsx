import React from "react";
import { Metadata } from "next";
import LocationContact from "@/components/LocationContact";
import PageBanner from "@/components/PageBanner";
import { SEO_CONFIG } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Murliwala Sweets | Location, WhatsApp & Google Maps",
  description: "Find Murliwala Sweets in Fauz Ka Mohalla, Jhunjhunu. View our Google Maps location, opening hours, landmarks, and contact us directly on WhatsApp or Call.",
  keywords: ["Contact Murliwala Sweets", "sweet shop location Jhunjhunu", "sweet shop phone number", "Murliwala sweets map"],
  alternates: {
    canonical: `${SEO_CONFIG.siteUrl}/contact`
  },
  openGraph: {
    title: "Contact Murliwala Sweets | Location, WhatsApp & Google Maps",
    description: "Find Murliwala Sweets in Fauz Ka Mohalla, Jhunjhunu. View our Google Maps location, opening hours, landmarks, and contact us directly on WhatsApp or Call.",
    url: `${SEO_CONFIG.siteUrl}/contact`,
    images: [
      {
        url: `${SEO_CONFIG.siteUrl}/images/gallery/gallery-shop-interior.png`,
        width: 1200,
        height: 630,
        alt: "Murliwala Sweets Shop Counter Location"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Murliwala Sweets | Location, WhatsApp & Google Maps",
    description: "Find Murliwala Sweets in Fauz Ka Mohalla, Jhunjhunu. View our Google Maps location, opening hours, landmarks, and contact us directly on WhatsApp or Call.",
    images: [`${SEO_CONFIG.siteUrl}/images/gallery/gallery-shop-interior.png`]
  }
};

export default function ContactPage() {
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
        "name": "Contact",
        "item": `${SEO_CONFIG.siteUrl}/contact`
      }
    ]
  };

  return (
    <div className="bg-cream min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Page Header/Banner */}
      <PageBanner
        eyebrow="Store Locator"
        title="Contact & Directions"
        description="Find us opposite Kamal Heights in Fauz Ka Mohalla. View map, landmarks, and contact numbers."
      />

      {/* Store Location Map & Timings Component */}
      <LocationContact />
    </div>
  );
}
