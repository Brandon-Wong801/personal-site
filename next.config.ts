import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/personal-site" : "", 
  images: {
    unoptimized: true, 
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
