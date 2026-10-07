import type { NextConfig } from "next";

const isViteBuild = process.argv.some((arg) => arg.includes("vite"));
const useNodeStandalone = !process.env.VERCEL && !isViteBuild;

const nextConfig: NextConfig = {
  output: useNodeStandalone ? "standalone" : undefined,
  distDir: useNodeStandalone ? "build" : undefined,
  // Allow hot reload (HMR) when testing on mobile devices via hotspot or LAN
  allowedDevOrigins: [
    "192.168.137.1",
    "192.168.137.1:3000",
    "100.105.255.17",
    "100.105.255.17:3000",
    "localhost:3000",
    "*.godaddy.com",      // Allows GoDaddy's primary preview domains
    "*.godaddysites.com"  // Allows GoDaddy's alternate hosted domains
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
        source: "/about",
        destination: "/#about",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/#about",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/#enquiries",
        permanent: true,
      },
      {
        source: "/inquiries",
        destination: "/#enquiries",
        permanent: true,
      },
      {
        source: "/enquiries",
        destination: "/#enquiries",
        permanent: true,
      },
      {
        source: "/products",
        destination: "/#hardware",
        permanent: true,
      },
      {
        source: "/products/hardware",
        destination: "/#hardware",
        permanent: true,
      },
      {
        source: "/products/software",
        destination: "/#software",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/#software",
        permanent: true,
      },
      {
        source: "/services/software-solutions",
        destination: "/#software",
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
        // Cache static assets and icons
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
