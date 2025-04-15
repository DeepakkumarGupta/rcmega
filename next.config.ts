import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "youtube.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.youtube.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.rcmega.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "mediavault.clicktrick.in",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.imagesoft.ettora.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.staticans.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "imagesoft.ettora.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "hobbycentral.co.in",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.strykerhobby.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.injora.com",
        pathname: "/**",
      }
    ],
  },
  // ...other configuration options
};

export default nextConfig;
