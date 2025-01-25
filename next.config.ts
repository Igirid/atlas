import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // <=== enables static exports
  reactStrictMode: true,
  basePath: "/atlas",
  assetPrefix: "/atlas/", // Ensures assets load correctly
  images: {
    unoptimized: true, // Disables Next.js image optimization
  },
  
};

export default nextConfig;
