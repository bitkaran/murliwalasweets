import React from "react";
import { Metadata } from "next";
import LocationContact from "@/components/LocationContact";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Contact Murliwala Sweets Jhunjhunu | Address & Location",
  description: "Find Murliwala Sweets in Fauz Ka Mohalla, Jhunjhunu. View our Google Maps location, opening hours, landmarks, and contact us directly on WhatsApp or Call.",
  openGraph: {
    title: "Contact Murliwala Sweets Jhunjhunu | Address & Location",
    description: "Find Murliwala Sweets in Fauz Ka Mohalla, Jhunjhunu. View our Google Maps location, opening hours, landmarks, and contact us directly on WhatsApp or Call.",
    images: [
      {
        url: "/images/gallery/gallery-shop-interior.png",
        width: 1200,
        height: 630,
        alt: "Murliwala Sweets Shop Counter Location"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Murliwala Sweets Jhunjhunu | Address & Location",
    description: "Find Murliwala Sweets in Fauz Ka Mohalla, Jhunjhunu. View our Google Maps location, opening hours, landmarks, and contact us directly on WhatsApp or Call.",
    images: ["/images/gallery/gallery-shop-interior.png"]
  }
};

export default function ContactPage() {
  return (
    <div className="bg-cream min-h-screen">
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
