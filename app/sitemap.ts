import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

const BASE = "https://muneer-iqbal.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, changeFrequency: "monthly", priority: 1 },
    ...projects.map((p) => ({
      url: `${BASE}/projects/${p.slug}`,
      changeFrequency: "monthly" as const,
      priority: p.featured ? 0.8 : 0.5,
    })),
  ];
}
