import { MetadataRoute } from "next";
import { SEO_CONFIG } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/menu", "/gallery", "/bulk-orders", "/contact"];

  return routes.map((route) => ({
    url: `${SEO_CONFIG.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
