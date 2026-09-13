import type { Metadata, Viewport } from "next";
import "./globals.css";
import { NavBar } from "@/components/layout/NavBar";
import { SOCIAL_LINKS } from "@/data/socials";
import icon32 from "@/assets/icon/zerobots-32x32.png";
import icon16 from "@/assets/icon/zerobots-16x16.png";
import appleIcon from "@/assets/icon/zerobots-180x180.png";

// Base URL resolves dynamically: checks Vercel deployment variables, falling back to localhost
const siteBaseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${process.env.PORT || 3000}`;

export const viewport: Viewport = {
  themeColor: "#020609",
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
        url: "/zerobots_matte_poster.png",
        width: 1200,
        height: 630,
        alt: "ZeroBots - Robotics Reimagined",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: SOCIAL_LINKS.xHandle,
    creator: SOCIAL_LINKS.xHandle,
    title: "ZeroBots | Robotics Reimagined",
    description:
      "ZeroBots pioneers accessible, indigenous autonomous companion robotics (Blob) and precision digital engineering solutions.",
    images: ["/zerobots_matte_poster.png"],
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
    logo: `${siteBaseUrl}/zerobots_matte_poster.png`,
    sameAs: [
      SOCIAL_LINKS.instagram,
      SOCIAL_LINKS.linkedin,
      SOCIAL_LINKS.x,
    ],
  };

  return (
    <html lang="en" className="dark bg-[#020609]" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#020609] text-white min-h-screen antialiased selection:bg-cyan-500 selection:text-black">
        {/* Floating Top Navbar */}
        <NavBar />

        {/* Dynamic Page Content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
