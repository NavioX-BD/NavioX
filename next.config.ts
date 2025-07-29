import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Disable image optimization for Netlify compatibility
    unoptimized: true,
    // Keep basic image settings
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    optimizePackageImports: ["@heroicons/react", "framer-motion"],
  },
  // Ensure proper static asset handling
  trailingSlash: false,
  // Disable image optimization for Netlify
  // This is the key fix for the image loading issues
};

export default nextConfig;
