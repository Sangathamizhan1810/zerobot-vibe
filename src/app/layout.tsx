import type { Metadata, Viewport } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { NavBar } from "@/components/layout/NavBar";
import { SOCIAL_LINKS } from "@/data/socials";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { ThreeBackground } from "@/components/graphic/ThreeBackground";
import icon32 from "@/assets/icon/zerobots-32x32.png";
import icon16 from "@/assets/icon/zerobots-16x16.png";
import appleIcon from "@/assets/icon/zerobots-180x180.png";
import icon512 from "@/assets/icon/zerobots-512x512.png";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

// Base URL resolves dynamically: checks Vercel deployment variables, falling back to localhost
const siteBaseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${process.env.PORT || 3000}`;

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteBaseUrl),
  title: {
    default: "ZeroBots | Robotics Reimagined",
    template: "%s | ZeroBots",
  },
  description:
    "ZeroBots pioneers accessible, indigenous autonomous companion robotics (Blob) and precision digital engineering solutions including custom web apps, native software, and UI/UX design.",
  keywords: [
    "ZeroBots",
    "Robotics Reimagined",
    "Blob Robot",
    "Companion Robotics",
    "Autonomous Robotics",
    "Desktop Companion Robot",
    "Indigenous Robotics India",
    "Software Solutions",
    "Website Building",
    "Android App Development",
    "Windows Desktop Development",
    "UI UX Design",
  ],
  authors: [{ name: "ZeroBots Team" }],
  creator: "ZeroBots LLP",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "ZeroBots | Robotics Reimagined",
    description:
      "ZeroBots pioneers accessible, indigenous autonomous companion robotics (Blob) and precision digital engineering solutions.",
    siteName: "ZeroBots",
    images: [
      {
        url: icon512.src,
        width: 512,
        height: 512,
        alt: "ZeroBots - Robotics Reimagined",
      },
    ],
  },
  twitter: {
    card: "summary",
    site: SOCIAL_LINKS.xHandle,
    creator: SOCIAL_LINKS.xHandle,
    title: "ZeroBots | Robotics Reimagined",
    description:
      "ZeroBots pioneers accessible, indigenous autonomous companion robotics (Blob) and precision digital engineering solutions.",
    images: [icon512.src],
  },
  other: {
    // OpenGraph social identity references for LinkedIn & Meta (Instagram)
    "article:publisher": SOCIAL_LINKS.linkedin,
    "og:see_also:linkedin": SOCIAL_LINKS.linkedin,
    "og:see_also:instagram": SOCIAL_LINKS.instagram,
    "og:see_also:x": SOCIAL_LINKS.x,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: icon32.src, sizes: "32x32", type: "image/png" },
      { url: icon16.src, sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: appleIcon.src, sizes: "180x180", type: "image/png" },
    ],
  },
};

import { PosterBackground } from "@/components/graphic/PosterBackground";
import { ThemeSync } from "@/components/theme/ThemeSync";
import { themeInitScript } from "@/lib/theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ZeroBots",
    url: siteBaseUrl,
    logo: `${siteBaseUrl}${icon512.src}`,
    sameAs: [
      SOCIAL_LINKS.instagram,
      SOCIAL_LINKS.linkedin,
      SOCIAL_LINKS.x,
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning className={`dark ${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} font-sans`} data-scroll-behavior="smooth">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-void text-white min-h-screen antialiased selection:bg-white selection:text-black font-sans">
        <ThemeSync />
        <SmoothScrollProvider>
          {/* Global Immersive Poster Layer */}
          <div className="fixed inset-0 z-0 pointer-events-none">
            <PosterBackground variant="default" />
          </div>

          {/* Immersive 3D Background */}
          <ThreeBackground />

          {/* Custom Trailing Cursor */}
          <CustomCursor />

          {/* Floating Top Navbar */}
          <NavBar />

          {/* Dynamic Page Content */}
          <main className="relative z-10">{children}</main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
