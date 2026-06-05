import React from "react";
import { Metadata } from "next";
import Gallery from "@/components/Gallery";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Murliwala Sweets Gallery | Visual Kitchen Tour",
  description: "Browse images of our authentic Rajasthani sweets, Samosa counters, Swamani boxes, and clean shop kitchen preparations in Jhunjhunu.",
  openGraph: {
    title: "Murliwala Sweets Gallery | Visual Kitchen Tour",
    description: "Browse images of our authentic Rajasthani sweets, Samosa counters, Swamani boxes, and clean shop kitchen preparations in Jhunjhunu.",
    images: [
      {
        url: "/images/gallery/shop-front.png",
        width: 1200,
        height: 630,
        alt: "Murliwala Sweets Shop Front"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Murliwala Sweets Gallery | Visual Kitchen Tour",
    description: "Browse images of our authentic Rajasthani sweets, Samosa counters, Swamani boxes, and clean shop kitchen preparations in Jhunjhunu.",
    images: ["/images/gallery/shop-front.png"]
  }
};

export default function GalleryPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Page Header/Banner */}
      <PageBanner
        eyebrow="Kitchen & Craft"
        title="Our Traditional Sweets Gallery"
        description="Browse images of our authentic Rajasthani sweets, fresh hot counters, and shop front."
      />

      {/* Main Full Gallery Masonry Grid */}
      <Gallery />
    </div>
  );
}
