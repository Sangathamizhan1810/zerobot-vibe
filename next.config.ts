import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow hot reload (HMR) when testing on mobile devices via hotspot or LAN
  allowedDevOrigins: [
    "192.168.137.1",
    "192.168.137.1:3000",
    "100.105.255.17",
    "100.105.255.17:3000",
    "localhost:3000",
  ],
  reactCompiler: true,
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 86400,
  },
  async redirects() {
    return [
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/enquiries",
        permanent: true,
      },
      {
        source: "/inquiries",
        destination: "/enquiries",
        permanent: true,
      },
      {
        source: "/products",
        destination: "/products/hardware",
        permanent: true,
      },
      {
        source: "/products/software",
        destination: "/services/software-solutions",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/services/software-solutions",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
        ],
      },
      {
        // Cache static branding posters, assets and icons
        source: "/:path*.(png|jpg|jpeg|webp|avif|svg|ico|ttf|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
