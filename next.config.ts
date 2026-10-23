// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ["10.224.158.97"],
  turbopack: {
    ignoreIssue: [
      {
        path: "**/app/globals.css",
      },
    ],
  },
};

export default nextConfig;