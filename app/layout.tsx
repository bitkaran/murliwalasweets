import type { Metadata, Viewport } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://murliwala-sweets.vercel.app"),
  title: "Murliwala Sweets | Traditional Mithai, Fresh Snacks & Festive Gifting in Jhunjhunu",
  description: "Experience the finest traditional Rajasthani sweets, Desi Ghee Mithai, and hot fresh snacks in Jhunjhunu. Murliwala Sweets offers Rabdi, Kesar Peda, Samosa, Dhokla, and custom corporate/festive orders. Located near Satyam Residency, Fauz Ka Mohalla. (Please confirm details with shop owner).",
  keywords: [
    "Murliwala Sweets",
    "sweets in Jhunjhunu",
    "export sweets Rajasthan",
    "mithai shop in Jhunjhunu",
    "snacks in Jhunjhunu",
    "Rajasthani sweets",
    "Desi Ghee sweets",
    "Fauz Ka Mohalla sweet shop",
    "Rabdi in Jhunjhunu",
    "Kesar Peda",
    "samosa",
    "corporate gifting Jhunjhunu",
    "wedding sweets",
    "Rajasthan sweet shop"
  ],
  authors: [{ name: "Murliwala Sweets" }],
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/images/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon_io/favicon.ico", sizes: "any" }
    ],
    apple: [
      { url: "/images/favicon_io/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      {
        rel: "manifest",
        url: "/images/favicon_io/site.webmanifest"
      }
    ]
  },
  openGraph: {
    title: "Murliwala Sweets | Premium Mithai & Snacks in Jhunjhunu",
    description: "Handcrafted traditional Indian sweets, fresh daily snacks, and custom festive gifting. Loved by families across Jhunjhunu, Rajasthan.",
    url: "https://murliwala-sweets.vercel.app",
    siteName: "Murliwala Sweets",
    images: [
      {
        url: "/images/gallery/about-premium-sweets-display.png",
        width: 1200,
        height: 630,
        alt: "Murliwala Sweets Premium Mithai Counter"
      }
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Murliwala Sweets | Premium Mithai & Snacks in Jhunjhunu",
    description: "Handcrafted traditional Indian sweets, fresh daily snacks, and custom festive gifting. Loved by families across Jhunjhunu, Rajasthan.",
    images: ["/images/gallery/about-premium-sweets-display.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Local Business JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SweetShop",
    "name": "Murliwala Sweets",
    "image": "https://murliwala-sweets.vercel.app/images/brand/murliwala-logo.jpg",
    "@id": "https://murliwala-sweets.vercel.app/#store",
    "url": "https://murliwala-sweets.vercel.app",
    "telephone": "+919828357226",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Near Satyam Residency, Opposite Kamal Heights, Axis Bank ke samne wali gali, Fauz Ka Mohalla",
      "addressLocality": "Jhunjhunu",
      "addressRegion": "Rajasthan",
      "postalCode": "333001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.1249054,
      "longitude": 75.4048634
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "07:00",
      "closes": "22:00"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+919828357226",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["Hindi", "English"]
    }
  };

  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-cream text-charcoal font-sans antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
