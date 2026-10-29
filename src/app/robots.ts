import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: undefined, // set siteConfig.productionUrl to emit an absolute sitemap URL
  };
}
