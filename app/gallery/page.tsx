import React from "react";
import { Metadata } from "next";
import Gallery from "@/components/Gallery";
import PageBanner from "@/components/PageBanner";
import { SEO_CONFIG } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Murliwala Sweets Gallery | Sweets, Snacks & Festive Gift Boxes",
  description: "Browse images of our authentic Rajasthani sweets, Samosa counters, Swamani boxes, and clean shop kitchen preparations in Jhunjhunu.",
  keywords: ["Murliwala Sweets Gallery", "sweet shop photos Jhunjhunu", "kitchen prep sweets", "samosa counter display"],
  alternates: {
    canonical: `${SEO_CONFIG.siteUrl}/gallery`
  },
  openGraph: {
    title: "Murliwala Sweets Gallery | Sweets, Snacks & Festive Gift Boxes",
    description: "Browse images of our authentic Rajasthani sweets, Samosa counters, Swamani boxes, and clean shop kitchen preparations in Jhunjhunu.",
    url: `${SEO_CONFIG.siteUrl}/gallery`,
    images: [
      {
        url: `${SEO_CONFIG.siteUrl}/images/gallery/shop-front.png`,
        width: 1200,
        height: 630,
        alt: "Murliwala Sweets Shop Front"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Murliwala Sweets Gallery | Sweets, Snacks & Festive Gift Boxes",
    description: "Browse images of our authentic Rajasthani sweets, Samosa counters, Swamani boxes, and clean shop kitchen preparations in Jhunjhunu.",
    images: [`${SEO_CONFIG.siteUrl}/images/gallery/shop-front.png`]
  }
};

export default function GalleryPage() {
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
        "name": "Gallery",
        "item": `${SEO_CONFIG.siteUrl}/gallery`
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
        eyebrow="Kitchen & Craft"
        title="Our Traditional Sweets Gallery"
        description="Browse images of our authentic Rajasthani sweets, fresh hot counters, and shop front."
      />

      {/* Main Full Gallery Masonry Grid */}
      <Gallery />
    </div>
  );
}
