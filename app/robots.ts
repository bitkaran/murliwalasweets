import { MetadataRoute } from "next";
import { SEO_CONFIG } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/_next/", "/api/"],
    },
    sitemap: `${SEO_CONFIG.siteUrl}/sitemap.xml`,
  };
}
