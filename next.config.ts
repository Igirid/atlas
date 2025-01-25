import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // <=== enables static exports
  reactStrictMode: true,
  basePath: "/atlas"
};

export default nextConfig;
