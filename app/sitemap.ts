import { MetadataRoute } from "next";
import { diensten } from "@/lib/diensten";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://afbouwzuid.nl";

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/nieuwbouw`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/renovatie`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/over-ons`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/offerte`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];

  const dienstenPages: MetadataRoute.Sitemap = diensten.map((d) => ({
    url: `${base}/diensten/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...dienstenPages];
}
