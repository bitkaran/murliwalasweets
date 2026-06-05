import type { Metadata, Viewport } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import { SEO_CONFIG } from "@/lib/seo";
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
  metadataBase: new URL(SEO_CONFIG.siteUrl),
  title: {
    default: SEO_CONFIG.defaultTitle,
    template: `%s | ${SEO_CONFIG.siteName}`
  },
  description: SEO_CONFIG.defaultDescription,
  keywords: SEO_CONFIG.defaultKeywords,
  authors: [{ name: SEO_CONFIG.siteName }],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.defaultDescription,
    url: SEO_CONFIG.siteUrl,
    siteName: SEO_CONFIG.siteName,
    images: [
      {
        url: SEO_CONFIG.defaultOgImage,
        width: 1200,
        height: 630,
        alt: `${SEO_CONFIG.siteName} Premium Mithai & Snacks`
      }
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.defaultDescription,
    images: [SEO_CONFIG.defaultOgImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // WebSite JSON-LD Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": SEO_CONFIG.siteName,
    "url": SEO_CONFIG.siteUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${SEO_CONFIG.siteUrl}/menu?search={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  // Organization JSON-LD Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SEO_CONFIG.siteName,
    "url": SEO_CONFIG.siteUrl,
    "logo": SEO_CONFIG.logoUrl,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": SEO_CONFIG.phoneRaw,
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
