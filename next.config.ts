import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    remotePatterns: [
      // ...your existing patterns...
      { protocol: "https", hostname: "i.scdn.co" }, // Spotify CDN
      { protocol: "https", hostname: "export-download.canva.com" }, // Canva export
    ],
  },
};

export default nextConfig;
