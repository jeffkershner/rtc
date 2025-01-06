import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/clerk/:path*",
          destination: "http://rtc-frontend:3000/clerk/:path*"
        }
      ],
      afterFiles: [],
      fallback: []
    };
  },
  images: {
    domains: ["img.clerk.com"]
  }
};

export default nextConfig;
